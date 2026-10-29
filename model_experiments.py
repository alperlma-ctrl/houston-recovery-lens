"""Compare damage-model versions on the same tests. Run from the project folder: python model_experiments.py"""
import os, sys, time, json
import numpy as np, pandas as pd
from sklearn.metrics import mean_absolute_error, r2_score
from sklearn.model_selection import train_test_split, KFold
from xgboost import XGBRegressor

REPO = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, REPO)
import predict_model as pm

df, summary = pm.load()
df = df.reset_index(drop=True)
df['lat'] = pd.to_numeric(df.latitude, errors='coerce')
df['lon'] = pd.to_numeric(df.longitude, errors='coerce')
df['single_family'] = (df.occupancyType == 1).astype(float)
df['zip'] = df.reportedZipCode.astype(str)
df['depth_x_cov'] = df.depth * df.log_coverage
# days between this claim's loss date and the storm's busiest claim date
d = pd.to_datetime(df.dateOfLoss).dt.tz_localize(None).dt.normalize()
peak = d.groupby(df.storm).agg(lambda s: s.value_counts().idxmax())
df['days_from_peak'] = (d - df.storm.map(peak)).dt.days.clip(-10, 10)

BASE = ['depth', 'log_coverage', 'rain_total', 'gust_max', 'zone', 'county']


def zip_encode(train, test):
    # smoothed mean damage by zip; out-of-fold for training rows so the model can't memorize it
    prior, k = train.damage.mean(), 30
    def enc(src, dst):
        g = src.groupby('zip').damage.agg(['sum', 'count'])
        m = (g['sum'] + prior * k) / (g['count'] + k)
        return dst.zip.map(m).fillna(prior).values
    tr = np.zeros(len(train))
    for a, b in KFold(5, shuffle=True, random_state=0).split(train):
        tr[b] = enc(train.iloc[a], train.iloc[b])
    return tr, enc(train, test)


def X(frame, feats, extra=None):
    cats = [c for c in ['zone', 'county'] if c in feats]
    out = pd.get_dummies(frame[feats], columns=cats).astype(float)
    for col in ['zone_AE', 'zone_OTHER', 'zone_X'] + ['county_' + c for c in pm.COUNTIES.values()]:
        if col.split('_')[0] in cats and col not in out:
            out[col] = 0.0
    if extra is not None:
        out['zip_mean'] = extra
    return out[sorted(out.columns)]


def make(params):
    p = dict(n_estimators=400, max_depth=5, learning_rate=0.05, subsample=0.8, colsample_bytree=0.8,
             objective='reg:tweedie', tweedie_variance_power=1.5, random_state=42, n_jobs=-1)
    p.update(params)
    return p


def fit_predict(train, test, v):
    feats, params = v['feats'], make(v.get('params', {}))
    ytr = train.damage.values
    if v.get('target') == 'ratio':
        ytr = (train.damage / train.coverage).clip(0, 1).values
    if v.get('target') == 'log':
        ytr = np.log1p(train.damage.values)
    etr = ete = None
    if v.get('zip'):
        etr, ete = zip_encode(train, test)
    Xtr, Xte = X(train, feats, etr), X(test, feats, ete)
    mono = {c: 1 for c in ['depth', 'log_coverage'] if c in Xtr}
    if v.get('target') == 'ratio':
        mono = {'depth': 1}
    if v.get('mono', True):
        params['monotone_constraints'] = mono
    m = XGBRegressor(**params)
    m.fit(Xtr, ytr)
    p = m.predict(Xte)
    if v.get('target') == 'ratio':
        p = p * test.coverage.values
    if v.get('target') == 'log':
        p = np.expm1(p)
    return np.clip(p, 0, None)


def evaluate(v):
    t0 = time.time()
    tr, te = train_test_split(df, test_size=0.2, random_state=42)
    p = fit_predict(tr, te, v)
    base = mean_absolute_error(te.damage, np.full(len(te), tr.damage.median()))
    rnd = 100 * (1 - mean_absolute_error(te.damage, p) / base)
    r2 = r2_score(te.damage, p)
    rows = []
    for s in df.storm.value_counts().index:
        tr, te = df[df.storm != s], df[df.storm == s]
        p = fit_predict(tr, te, v)
        rows.append(dict(storm=s, n=len(te), model=mean_absolute_error(te.damage, p),
                         base=mean_absolute_error(te.damage, np.full(len(te), tr.damage.median())),
                         zero=te.damage.abs().mean(), r2=r2_score(te.damage, p),
                         total_err=100 * (p.sum() / te.damage.sum() - 1)))
    r = pd.DataFrame(rows).set_index('storm')
    o = r.drop('Harvey')
    return dict(name=v['name'], random_gain=round(rnd, 1), random_r2=round(r2, 3),
                beryl_gain=round(100 * (1 - r.loc['Beryl', 'model'] / r.loc['Beryl', 'base']), 1),
                beryl_r2=round(r.loc['Beryl', 'r2'], 3), beryl_total_err=round(r.loc['Beryl', 'total_err'], 1),
                storms_gain=round(100 * (1 - (o.model * o.n).sum() / (o.base * o.n).sum()), 1),
                beat_base=int((r.model < r.base).sum()), beat_zero=int((r.model < r.zero).sum()),
                harvey_gain=round(100 * (1 - r.loc['Harvey', 'model'] / r.loc['Harvey', 'base']), 1),
                secs=round(time.time() - t0))


LOC = BASE + ['lat', 'lon']
ALL = BASE + ['lat', 'lon', 'single_family']
VARIANTS = [
    dict(name='current model', feats=BASE),
    dict(name='no monotone limits', feats=BASE, mono=False),
    dict(name='tweedie power 1.2', feats=BASE, params=dict(tweedie_variance_power=1.2)),
    dict(name='tweedie power 1.8', feats=BASE, params=dict(tweedie_variance_power=1.8)),
    dict(name='squared error', feats=BASE, params=dict(objective='reg:squarederror')),
    dict(name='absolute error (MAE)', feats=BASE, params=dict(objective='reg:absoluteerror')),
    dict(name='log-dollar target', feats=BASE, target='log', params=dict(objective='reg:squarederror')),
    dict(name='damage / coverage target', feats=BASE, target='ratio', params=dict(objective='reg:squarederror')),
    dict(name='shallower trees (depth 3, 800)', feats=BASE, params=dict(max_depth=3, n_estimators=800)),
    dict(name='deeper trees (depth 7, 300)', feats=BASE, params=dict(max_depth=7, n_estimators=300)),
    dict(name='slower learning (0.02, 1000)', feats=BASE, params=dict(learning_rate=0.02, n_estimators=1000)),
    dict(name='+ map location', feats=LOC),
    dict(name='+ location + single-family flag', feats=ALL),
    dict(name='+ zip history', feats=BASE, zip=True),
    dict(name='+ location + zip history', feats=LOC, zip=True),
    dict(name='+ depth x coverage', feats=BASE + ['depth_x_cov']),
    dict(name='no weather', feats=['depth', 'log_coverage', 'zone', 'county']),
    dict(name='depth + coverage only', feats=['depth', 'log_coverage']),
    # round 2: combine the ideas that helped
    dict(name='ratio + zip', feats=BASE, zip=True, target='ratio', params=dict(objective='reg:squarederror')),
    dict(name='ratio + location + zip', feats=LOC, zip=True, target='ratio', params=dict(objective='reg:squarederror')),
    dict(name='ratio + location + zip, logistic (chosen)', feats=LOC, zip=True, target='ratio', params=dict(objective='reg:logistic')),
    dict(name='tweedie 1.2 + location + zip', feats=LOC, zip=True, params=dict(tweedie_variance_power=1.2)),
    dict(name='tweedie 1.2 + location + zip + flag', feats=ALL, zip=True, params=dict(tweedie_variance_power=1.2)),
    dict(name='MAE + location + zip', feats=LOC, zip=True, params=dict(objective='reg:absoluteerror')),
]

if __name__ == '__main__':
    pick = sys.argv[1:] or [v['name'] for v in VARIANTS]
    out = []
    for v in VARIANTS:
        if v['name'] in pick:
            res = evaluate(v)
            out.append(res)
            print(json.dumps(res), flush=True)
    pd.DataFrame(out).to_csv(os.path.join(REPO, 'results', 'model_experiments.csv'), index=False)
