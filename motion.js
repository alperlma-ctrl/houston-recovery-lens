'use strict';
// Animation decorates already-calculated results. It never changes a score or allocation.
const roomMotion={enabled:null,previous:null,frame:null,started:Date.now(),seen:false};
function roomMotionAllowed(){return roomMotion.enabled!==false&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches;}
function roomMotionStop(){if(roomMotion.frame!==null){cancelAnimationFrame(roomMotion.frame);roomMotion.frame=null;}}
function bindRoomMotion(){
 roomMotionStop();
 const root=document.querySelector('.decision-room');if(!root)return;
 const allowed=roomMotionAllowed();root.classList.toggle('motion-off',!allowed);
 root.style.setProperty('--radar-phase',-((Date.now()-roomMotion.started)/1000%16)+'s');
 const toggle=document.getElementById('room-motion-toggle');
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 toggle.disabled=reduced;toggle.title=reduced?'Your device requests reduced motion.':'Pause or enable visual animation';
 toggle.textContent=reduced?'Reduced motion':allowed?'Ⅱ Pause animation':'▷ Enable animation';
 toggle.onclick=()=>{roomMotion.enabled=!allowed;render();document.getElementById('room-motion-toggle')?.focus({preventScroll:true});};
 const score=roomWorst(roomState.alloc)*100,signature=JSON.stringify([roomState.budget,roomState.mask,roomState.alloc]);
 const snapshot={signature,score,fills:{},scores:Object.fromEntries(roomStorms().map(s=>[s,roomScore(roomState.alloc,s)*100]))};
 root.querySelectorAll('[data-room-county]').forEach(el=>snapshot.fills[el.dataset.roomCounty]=el.getAttribute('fill'));
 const previous=roomMotion.previous;roomMotion.previous=snapshot;
 if(!allowed){roomMotion.seen=true;return;}
 if(!roomMotion.seen){
  root.querySelectorAll('.room-heading,.room-control,.room-center,.room-results,.room-comparison').forEach((el,i)=>el.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,delay:i*70,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'}));
  roomMotion.seen=true;
 }
 if(previous?.signature===signature)return;
 root.querySelectorAll('[data-room-county]').forEach(el=>{const old=previous?.fills[el.dataset.roomCounty];if(old&&old!==el.getAttribute('fill'))el.animate([{fill:old},{fill:el.getAttribute('fill')}],{duration:850,easing:'ease-out'});});
 root.querySelectorAll('[data-storm-bar]').forEach(el=>{const end=snapshot.scores[el.dataset.stormBar],start=previous?.scores[el.dataset.stormBar]??0;el.animate([{transform:`scaleX(${end?start/end:0})`},{transform:'scaleX(1)'}],{duration:850,easing:'cubic-bezier(.2,.8,.2,1)'});});
 const ring=root.querySelector('.room-gauge-value'),circumference=427.26;
 ring?.animate([{strokeDashoffset:circumference*(1-(previous?.score??0)/100)},{strokeDashoffset:circumference*(1-score/100)}],{duration:900,easing:'cubic-bezier(.2,.8,.2,1)'});
 const number=root.querySelector('[data-motion-score]'),start=previous?.score??0,begin=performance.now();
 const tick=now=>{if(!number?.isConnected||!roomMotionAllowed()){if(number?.isConnected)number.textContent=score.toFixed(1);roomMotion.frame=null;return;}const progress=Math.min(1,(now-begin)/850),ease=1-Math.pow(1-progress,3);number.textContent=(start+(score-start)*ease).toFixed(1);if(progress<1)roomMotion.frame=requestAnimationFrame(tick);else roomMotion.frame=null;};
 roomMotion.frame=requestAnimationFrame(tick);
}
window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',()=>{roomMotionStop();if(state.page==='decision')render();});
