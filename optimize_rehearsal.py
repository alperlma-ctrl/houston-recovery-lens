"""Reproducible maximin historical claim-mix allocation. No demand forecasts."""
from pathlib import Path
import json
import itertools
import numpy as np
from scipy.optimize import linprog

ROOT = Path(__file__).resolve().parent
counties = ['Brazoria', 'Fort Bend', 'Galveston', 'Harris', 'Montgomery']
history = json.loads((ROOT/'results/demo_data.json').read_text())['history']
storms = ['Harvey', 'Imelda', 'Nicholas', 'Beryl']
counts = {s: [next(r['claims'] for r in history if r['storm']==s and r['county']==c) for c in counties] for s in storms}
mixes = {s: (np.array(counts[s])/sum(counts[s])).tolist() for s in storms}
solutions = {}
for mask in range(1,16):
    selected = [s for i,s in enumerate(storms) if mask & (1<<i)]
    # p[5], overlap auxiliary z[scenario,county], worst-case overlap t.
    n = 6+5*len(selected)
    objective = np.zeros(n); objective[-1] = -1
    A=[]; b=[]
    for j,s in enumerate(selected):
        for c in range(5):
            v=np.zeros(n); v[5+5*j+c]=1; v[c]=-1
            A.append(v); b.append(0)
            v=np.zeros(n); v[5+5*j+c]=1
            A.append(v); b.append(mixes[s][c])
        v=np.zeros(n); v[-1]=1; v[5+5*j:10+5*j]=-1
        A.append(v); b.append(0)
    eq=np.zeros((1,n)); eq[0,:5]=1
    result=linprog(objective,A_ub=A,b_ub=b,A_eq=eq,b_eq=[1],bounds=(0,1),method='highs')
    assert result.success
    weights=result.x[:5]
    overlap=min(sum(np.minimum(weights,mixes[s])) for s in selected)
    equal=min(sum(np.minimum(np.ones(5)/5,mixes[s])) for s in selected)
    assert abs(sum(weights)-1)<1e-8 and overlap+1e-8>=equal
    solutions[str(mask)]={'weights':weights.tolist(),'continuous_worst_overlap':float(overlap),'storms':selected}
payload={'version':'decision-room-1','counties':counties,'storms':storms,'counts':counts,'mixes':mixes,'solutions':solutions,'method':'Continuous linear program maximizes minimum distributional overlap across selected historical county claim mixes. Largest-remainder rounding converts weights to integer appointment slots; scores are recalculated after rounding.','limitations':'Eligible insured claim records are not unique households, requests, uninsured losses, population exposure, or future need. Historical scenario overlap does not measure people helped or service quality. Optimizing and evaluating on the same selected scenarios is descriptive stress testing, not predictive validation.'}
(ROOT/'results/decision_data.json').write_text(json.dumps(payload,indent=2))
print('Verified all 15 scenario subsets: feasible weights and continuous maximin overlap >= equal mix.')
