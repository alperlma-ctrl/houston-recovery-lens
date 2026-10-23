'use strict';
const P=window.PREDICT_DATA;
const est={storm:'Harvey',county:'Harris',zone:'X',depth:3,coverage:250000};
const clamp=(v,lo,hi)=>Math.min(hi,Math.max(lo,v));
const MIN_EST_CLAIMS=50;
// blend the four saved predictions around the typed depth and coverage
function estimate(){
 const pick=(list,v)=>{let i=0;while(i<list.length-2&&v>list[i+1])i++;return [i,(v-list[i])/(list[i+1]-list[i])];};
 const [di,dt]=pick(P.depths,est.depth),[ci,ct]=pick(P.coverages,est.coverage);
 const at=(d,c)=>{const g=P.grid.find(r=>r[0]===est.storm&&r[1]===est.county&&r[2]===est.zone&&r[3]===P.depths[d]&&r[4]===P.coverages[c]);return g?g[5]:null;};
 const v00=at(di,ci),v10=at(di+1,ci),v01=at(di,ci+1),v11=at(di+1,ci+1);
 if([v00,v10,v01,v11].includes(null))return null;
 return (v00*(1-dt)+v10*dt)*(1-ct)+(v01*(1-dt)+v11*dt)*ct;
}
function estimateView(){
 const hist=row(est.storm,est.county),cohort=P.cohort_counts.find(r=>r.storm===est.storm&&r.county===est.county&&r.zone===est.zone),claims=cohort?.claims??0;
 if(claims<MIN_EST_CLAIMS)return {value:'Not enough data',note:`Only ${num(claims)} eligible ${est.zone} depth-coded ${est.storm} claims in ${est.county} County, too few to estimate. Try another storm or county.`,history:''};
 const value=estimate();
 return {value:value==null?'—':money(value),note:`${est.depth} recorded depth units · ${money(est.coverage)} coverage`,
  history:`Observed all-depth median for ${est.county} after ${est.storm}, all depths: ${money(hist.median_damage)} across ${num(hist.claims)} claims`};
}
function updateEstimate(){const v=estimateView();
 const el=document.getElementById('est-value');el.textContent=v.value;el.classList.toggle('no-data',!v.value.startsWith('$'));document.getElementById('est-note').textContent=v.note;document.getElementById('est-history').textContent=v.history;}
// read a typed number: blank or non-numbers keep the last good value, out-of-range values use the nearest limit
function readNumber(input,lo,hi,label,unit){
 const v=parseFloat(input.value);
 if(input.value.trim()===''||isNaN(v))return {value:null,message:`Enter a ${label} from ${unit(lo)} to ${unit(hi)}.`};
 const used=clamp(v,lo,hi);
 return {value:used,message:used===v?'':`Using ${unit(used)}, the ${used===hi?'highest':'lowest'} ${label} in our data.`};
}
function predict(){const m=P.mixed_test,u=P.unseen_storm_test,view=estimateView(),maxDepth=P.depths.at(-1),minCov=P.coverages[0],maxCov=P.coverages.at(-1),maxCounty=Math.max(...P.counties.map(c=>c.total)),maxImp=Math.max(...Object.values(P.importance));
 return `<div class="page-intro"><div class="eyebrow">A RETROSPECTIVE DAMAGE EXPERIMENT</div><h1>Explore damage estimates<br>under recorded conditions.</h1><p>Change recorded depth, coverage, county, and flood zone to explore an XGBoost damage estimate under historical storm weather. This is a retrospective research tool; full-storm weather and recorded depth are not advance forecasts.</p></div>
 <section class="metrics" aria-label="Model scorecard"><div class="metric accent"><div class="label">LESS ERROR ON RANDOM HELD-OUT RECORDS</div><strong>${Math.round(m.improvement_pct)}%</strong><small>${money(m.model_mae)} vs ${money(m.baseline_mae)} baseline · ${num(m.test_n)} test claim records</small></div><div class="metric"><div class="label">BERYL DEVELOPMENT CHECK</div><strong>${Math.round(u.improvement_pct)}%</strong><small>Beryl 2024 · ${money(u.model_mae)} vs ${money(u.baseline_mae)} baseline</small></div><div class="metric"><div class="label">STRONGEST SIGNAL</div><strong>${Object.keys(P.importance)[0]}</strong><small>Largest feature-importance share</small></div><div class="metric"><div class="label">ELIGIBLE CLAIM RECORDS</div><strong>${num(P.eligible_n)}</strong><small>Single-family records with retained depth codes</small></div></section>
 <section class="main-grid"><div class="card detail"><div class="detail-top"><div><div class="eyebrow" style="font-size:8px;letter-spacing:1.5px;margin-bottom:7px">TRY THE MODEL</div><h2>Explore one claim scenario</h2></div></div>
 <label class="field" for="est-storm">Storm conditions<select id="est-storm">${Object.keys(D.storm_years).map(s=>`<option value="${s}" ${s===est.storm?'selected':''}>${stormNames[s]} (${D.storm_years[s]})</option>`).join('')}</select></label>
 <label class="field" for="est-county">County<select id="est-county">${Object.values(D.counties).map(c=>`<option ${c===est.county?'selected':''}>${c}</option>`).join('')}</select></label>
 <label class="field" for="est-zone">Flood zone<select id="est-zone"><option value="X" ${est.zone==='X'?'selected':''}>Zone X</option><option value="AE" ${est.zone==='AE'?'selected':''}>Zone AE</option><option value="OTHER" ${est.zone==='OTHER'?'selected':''}>Other / unknown</option></select></label>
 <label class="field" for="est-depth">Recorded depth code (0–${maxDepth})<input type="number" id="est-depth" min="0" max="${maxDepth}" step="0.5" value="${est.depth}" inputmode="decimal" aria-describedby="est-depth-help est-depth-msg"></label>
 <p class="field-help" id="est-depth-help">The organizer describes this field as inches/feet without resolving its units. This experiment retains raw codes 0–10; do not interpret this input as a verified physical depth.</p><p class="field-msg" id="est-depth-msg" role="status"></p>
 <label class="field" for="est-coverage">Building coverage in dollars (${money(minCov)}–${money(maxCov)}, insurance limit, not property value)<input type="number" id="est-coverage" min="${minCov}" max="${maxCov}" step="5000" value="${est.coverage}" inputmode="numeric" aria-describedby="est-coverage-msg"></label>
 <p class="field-msg" id="est-coverage-msg" role="status"></p>
 <div class="observed"><span class="label">PREDICTED BUILDING DAMAGE</span><div class="value ${view.value.startsWith('$')?'':'no-data'}" id="est-value" aria-live="polite">${view.value}</div><p id="est-note">${view.note}</p><p id="est-history">${view.history}</p></div>
 <div class="insight"><strong>Try this:</strong> keep Zone X and change the recorded depth code from 1 to 4. The estimate updates as you type. Recorded damage among Zone X claims does not measure flood probability or uninsured need.</div></div>
 <div class="card chart"><h3>Harvey-weather replay on recorded claims</h3><p>Every eligible claim record given Harvey’s rain and wind for its county · Predicted building damage</p>
 ${P.counties.map(c=>`<div class="barrow"><span>${c.county}<small>${num(c.records)} claim records · ${money(c.average)} avg</small></span><div class="bartrack"><div class="barfill" style="width:${c.total/maxCounty*100}%"></div></div><span class="barvalue">${compact(c.total)}</span></div>`).join('')}
 <table class="evidence-table"><thead><tr><th>ZIP code</th><th>Records</th><th>Avg. damage</th><th>Total</th></tr></thead><tbody>${P.zips.map((z,i)=>`<tr><td>${i+1}. ${z.zip} <small>${z.county}</small></td><td>${num(z.records)}</td><td>${money(z.average)}</td><td>${compact(z.total)}</td></tr>`).join('')}</tbody></table>
 <p class="chart-note">Reuses recorded depths and coverage for eligible claim records across all storms, including repeated properties if present. Totals are not unique-home or community loss forecasts. The final grid model was fitted on all eligible records; this table is not an independent evaluation. Zip codes with fewer than 20 eligible records are left out.</p></div></section>
 <section class="bottom-grid"><div class="card chart"><h3>What drives the damage</h3><p>How much the model relies on each kind of input</p>${Object.entries(P.importance).map(([k,v])=>`<div class="barrow"><span>${k}</span><div class="bartrack"><div class="barfill" style="width:${v/maxImp*100}%"></div></div><span class="barvalue">${Math.round(v*100)}%</span></div>`).join('')}<p class="chart-note">Feature-importance shares describe this fitted model, not causal effects.</p></div>
 <div class="card chart"><h3>How we tested it</h3><table class="evidence-table"><tbody><tr><td><strong>Test 1</strong> · 20% of claim records held out at random</td><td>${Math.round(m.improvement_pct)}% less error than baseline · R² ${m.r2.toFixed(2)}</td></tr><tr><td><strong>Test 2</strong> · Beryl excluded from fitting</td><td>${Math.round(u.improvement_pct)}% less error than the old-storm baseline</td></tr><tr><td>Beryl: always-zero baseline error</td><td>${money(u.zero_baseline_mae)}</td></tr><tr><td>Beryl: predictions of $0</td><td>${pct(u.zero_share)} (first model: 100%)</td></tr></tbody></table><p class="chart-note"><strong>Honest limit:</strong> the Beryl R² remains negative (R² ${u.r2.toFixed(2)}). With only four storms, the next step is more storms and independently verified depth units. Beryl had already been inspected during development. Random records are not distinct homes; full-window weather is retrospective. Negative R² means the model did not beat the Beryl test-mean predictor under squared error.</p><div class="links"><a href="#evidence" data-open="evidence">See our first model and why we rejected it ↗</a></div></div></section>`;}

function bindPredict(){
 document.getElementById('est-storm').addEventListener('change',e=>{est.storm=e.target.value;updateEstimate();});
 document.getElementById('est-county').addEventListener('change',e=>{est.county=e.target.value;updateEstimate();});
 document.getElementById('est-zone').addEventListener('change',e=>{est.zone=e.target.value;updateEstimate();});
 const bind=(id,lo,hi,label,unit,set)=>{const input=document.getElementById(id),msg=document.getElementById(id+'-msg');
 input.addEventListener('input',()=>{const r=readNumber(input,lo,hi,label,unit);msg.textContent=r.message;if(r.value!==null){set(r.value);updateEstimate();}});
 input.addEventListener('change',()=>{const r=readNumber(input,lo,hi,label,unit),kept=id==='est-depth'?est.depth:est.coverage;if(r.value===null)msg.textContent=`Kept ${unit(kept)}. Enter a number to change it.`;input.value=kept;});};
 bind('est-depth',P.depths[0],P.depths.at(-1),'depth code',v=>v+' recorded units',v=>{est.depth=Math.round(v*10)/10;});
 bind('est-coverage',P.coverages[0],P.coverages.at(-1),'coverage',money,v=>{est.coverage=Math.round(v);});
}

function damageEvidence(){const m=P.mixed_test,u=P.unseen_storm_test;return `<article class="card panel wide"><h2>Water-depth damage experiment</h2><p>XGBoost adds recorded depth, coverage, flood zone, county, and full-storm rainfall and gust. The retained dataset contains ${num(P.eligible_n)} claim records with raw depth codes 0–10. Units remain ambiguous in the organizer brief; the model is a retrospective experiment.</p><table class="evidence-table"><thead><tr><th>Check</th><th>Model MAE</th><th>Training-median MAE</th><th>Always-zero MAE</th><th>R²</th></tr></thead><tbody>${[['Random 20% records',m],['Beryl development check',u]].map(([name,t])=>`<tr><td>${name}</td><td>${money(t.model_mae)}</td><td>${money(t.baseline_mae)}</td><td>${money(t.zero_baseline_mae)}</td><td>${t.r2.toFixed(3)}</td></tr>`).join('')}</tbody></table><p>Beryl was excluded from fitting that check but already inspected during development. Its negative R² and mean prediction of ${money(u.mean_prediction)} versus observed mean ${money(u.test_mean_damage)} show substantial remaining weakness. The demo grid is refitted on all eligible records and interpolates saved predictions; it is not the held-out model. ZIP totals reuse claim records and recorded depth, not unique homes or predicted community need.</p><div class="links"><a href="#predict" data-open="predict">Explore the damage experiment ↗</a></div></article>`;}
