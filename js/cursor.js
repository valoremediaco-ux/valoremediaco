/* ── CURSOR (shared across index, category, and project pages) ── */
var cr=document.getElementById('cr'),mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;},{passive:true});
(function loop(){cx+=(mx-cx)*.35;cy+=(my-cy)*.35;cr.style.left=cx+'px';cr.style.top=cy+'px';requestAnimationFrame(loop);})();
var _hs='a,button,.blo,.vw,.scard-header,.ccard-header,.acc-header,.pstep-header,.skill-cat-header,.iview,.stmt-cta,.nc,.ctlnk,.ctbtn,.ov-back,.proj-nav-link,.cat-card';
document.addEventListener('mouseover',function(e){if(e.target.closest(_hs))document.body.classList.add('ch');},{passive:true,capture:true});
document.addEventListener('mouseout',function(e){if(!document.elementFromPoint(mx,my)||!document.elementFromPoint(mx,my).closest(_hs))document.body.classList.remove('ch');},{passive:true,capture:true});

/* ── DARK-CURSOR DETECTION (covers whole dark sections + individual dark photos, all pages) ── */
var _dz=document.querySelectorAll('.stats,.ct,.tick,.work');
var _dkHov='.cr-dk,.proj-phone,.proj-hero-media';
function _computeDk(){
  var d=false;
  _dz.forEach(function(z){var r=z.getBoundingClientRect();if(r.top<60&&r.bottom>0)d=true;});
  if(!d){
    var el=document.elementFromPoint(mx,my);
    if(el&&el.closest(_dkHov))d=true;
  }
  document.body.classList.toggle('dk',d);
}
var _tkd=false;
window.addEventListener('scroll',function(){
  if(!_tkd){requestAnimationFrame(function(){_tkd=false;_computeDk();});_tkd=true;}
},{passive:true});
document.addEventListener('mouseover',_computeDk,{passive:true,capture:true});
document.addEventListener('mouseout',_computeDk,{passive:true,capture:true});
