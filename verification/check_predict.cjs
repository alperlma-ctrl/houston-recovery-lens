const fs=require('fs'),vm=require('vm'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'..');
const ctx=vm.createContext({window:{RECOVERY_DATA:JSON.parse(fs.readFileSync(path.join(root,'results/demo_data.json'),'utf8')),PREDICT_DATA:JSON.parse(fs.readFileSync(path.join(root,'results/predict_data.json'),'utf8'))},Intl});
const app=fs.readFileSync(path.join(root,'demo/app.js'),'utf8');
vm.runInContext(app.slice(0,app.indexOf('function mapSvg()')),ctx);
vm.runInContext(fs.readFileSync(path.join(root,'demo/predict-ui.js'),'utf8'),ctx);
const result=vm.runInContext(`(()=>{let points=0,groups=0;for(const storm of Object.keys(D.storm_years))for(const county of Object.values(D.counties))for(const zone of ['X','AE','OTHER']){Object.assign(est,{storm,county,zone});for(const [depth,coverage] of [[0,25000],[10,250000],[3.5,125000]]){Object.assign(est,{depth,coverage});const value=estimate();if(!Number.isFinite(value)||value<0)throw Error('Invalid grid interpolation');points++;}const cohort=P.cohort_counts.find(r=>r.storm===storm&&r.county===county&&r.zone===zone);if((cohort?.claims??0)<50&&estimateView().value!=='Not enough data')throw Error('Missing sparse cohort suppression');groups++;}const blank=readNumber({value:''},0,10,'depth',String);if(blank.value!==null)throw Error('Blank must preserve last good state');if(readNumber({value:'30'},0,10,'depth',String).value!==10)throw Error('Upper bound');if(readNumber({value:'-1'},0,10,'depth',String).value!==0)throw Error('Lower bound');return {groups,points};})()`,ctx);
assert.equal(result.groups,60);assert.equal(result.points,180);
console.log('PASS: 60 storm/county/zone groups, 180 interpolation points, sparse cohorts, blank input and bounds.');
