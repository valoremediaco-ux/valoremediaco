/* ── CURSOR (shared across index, category, and project pages) ── */
var cr=document.getElementById('cr'),mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;},{passive:true});
(function loop(){cx+=(mx-cx)*.35;cy+=(my-cy)*.35;cr.style.left=cx+'px';cr.style.top=cy+'px';requestAnimationFrame(loop);})();
var _hs='a,button,.blo,.vw,.scard-header,.ccard-header,.acc-header,.pstep-header,.skill-cat-header,.iview,.stmt-cta,.nc,.ctlnk,.ctbtn,.ov-back,.proj-nav-link,.cat-card';
document.addEventListener('mouseover',function(e){if(e.target.closest(_hs))document.body.classList.add('ch');},{passive:true,capture:true});
document.addEventListener('mouseout',function(e){if(!document.elementFromPoint(mx,my)||!document.elementFromPoint(mx,my).closest(_hs))document.body.classList.remove('ch');},{passive:true,capture:true});

/* ── DARK-CURSOR DETECTION (automatic: checks the actual element under the cursor, not a fixed section list) ── */
function _bgLuminance(el){
  while(el&&el!==document.documentElement){
    var bg=getComputedStyle(el).backgroundColor;
    var m=bg&&bg.match(/[\d.]+/g);
    if(m&&m.length>=3&&(m[3]===undefined||+m[3]>0.05)){
      return (0.299*(+m[0])+0.587*(+m[1])+0.114*(+m[2]))/255;
    }
    el=el.parentElement;
  }
  return 1; // default: assume light page background
}
function _computeDk(){
  var el=document.elementFromPoint(mx,my);
  var d=false;
  if(el){
    // any photo or video is treated as dark-cursor territory (editorial imagery on this site runs moody/dark)
    if(el.closest('img,video,picture'))d=true;
    else d=_bgLuminance(el)<0.5;
  }
  document.body.classList.toggle('dk',d);
}
var _tkd=false;
document.addEventListener('mousemove',function(){
  if(!_tkd){requestAnimationFrame(function(){_tkd=false;_computeDk();});_tkd=true;}
},{passive:true});
window.addEventListener('scroll',function(){
  if(!_tkd){requestAnimationFrame(function(){_tkd=false;_computeDk();});_tkd=true;}
},{passive:true});
