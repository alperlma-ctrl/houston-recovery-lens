from pathlib import Path
import os,json
ROOT=Path(__file__).resolve().parent
os.environ.setdefault('MPLCONFIGDIR',str(ROOT/'.plot_cache'))
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np

m=json.loads((ROOT/'results/wind_metrics.json').read_text())
rows=[r for r in m['evaluations'] if r['storm']=='Beryl' or '2026 window' in r['storm']]
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':10,'axes.spines.top':False,
                     'axes.spines.right':False,'axes.spines.left':False,'axes.spines.bottom':False})
fig,axes=plt.subplots(1,2,figsize=(13,6.2),gridspec_kw={'width_ratios':[1.6,1]},facecolor='#f5f6f2')
for ax in axes:
    ax.set_facecolor('#f5f6f2');ax.grid(axis='x',color='#dde4dc',zorder=0);ax.set_axisbelow(True)
pos=np.arange(len(rows));a=axes[0]
a.barh(pos-.17,[r['persistence_mae_mph'] for r in rows],.30,color='#adbdb7',label='Persistence baseline',zorder=3)
a.barh(pos+.17,[r['mae_mph'] for r in rows],.30,color='#147a6b',label='Selected wind model',zorder=3)
a.set_yticks(pos,labels=['Beryl development replay','Arthur 2026 window','Bertha 2026 window','Edouard 2026 window'])
a.invert_yaxis();a.set_xlim(0,7.8);a.set_xlabel('Mean absolute error (mph)  |  lower is better',labelpad=15)
a.tick_params(axis='y',length=0,pad=10)
for i,r in enumerate(rows):
    a.text(r['persistence_mae_mph']+.10,i-.17,f"{r['persistence_mae_mph']:.2f}",va='center',fontsize=9,color='#64756f')
    a.text(r['mae_mph']+.10,i+.17,f"{r['mae_mph']:.2f}",va='center',fontsize=9,color='#145f52')
a.set_title('Average error across evaluation windows',loc='left',fontsize=13,fontweight='bold',pad=24)
fig.legend(*a.get_legend_handles_labels(),loc='lower left',bbox_to_anchor=(.18,.195),ncol=2,frameon=False,fontsize=9)
b=axes[1];beryl=rows[0]
b.barh([1,0],[beryl['mae_mph'],beryl['peak_decile_mae_mph']],color=['#147a6b','#b96d35'],height=.43,zorder=3)
b.set_yticks([1,0],labels=['All Beryl\nwindows','Highest-gust\ntenth of windows'])
b.set_xlim(0,23);b.set_xlabel('Model mean absolute error (mph)',labelpad=15);b.tick_params(axis='y',length=0,pad=8)
b.text(beryl['mae_mph']+.45,1,f"{beryl['mae_mph']:.1f}",va='center',color='#145f52')
b.text(beryl['peak_decile_mae_mph']+.45,0,f"{beryl['peak_decile_mae_mph']:.1f}",va='center',color='#8c4e21')
b.set_title('Severe gusts remain difficult',loc='left',fontsize=13,fontweight='bold',pad=24)
fig.suptitle('Houston Recovery Lens  |  Wind model evidence',x=.035,y=.97,ha='left',fontsize=20,fontweight='bold',color='#17383d')
fig.text(.035,.895,'Six-hour peak gust hindcast using current and earlier reanalysis. Model selection uses Nicholas.',fontsize=10,color='#61746c')
fig.text(.035,.12,'Extra 2026 windows: 3.53 mph model MAE vs 3.68 mph persistence MAE, a 3.9% relative reduction.\nBeryl is a development replay; 2026 windows check the frozen model. Correlated windows are not independent storms.',fontsize=9,color='#526961',linespacing=1.6)
fig.text(.035,.035,'Source: organizer weather extract and Open-Meteo / Copernicus ERA5 additional windows. Nominal window labels derive from organizer tracks.\nRetrospective research results; not an operational warning system. Severe Beryl windows tend to be underestimated.',fontsize=8,color='#73847d',linespacing=1.6)
fig.subplots_adjust(left=.18,right=.97,top=.79,bottom=.33,wspace=.75)
fig.savefig(ROOT/'results/Wind_Model_Evidence.png',dpi=180,facecolor=fig.get_facecolor())
print('Evidence figure saved.')
