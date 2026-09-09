/* ── CURSOR (shared across index, category, and project pages) ── */
var cr=document.getElementById('cr'),mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;},{passive:true});
(function loop(){cx+=(mx-cx)*.35;cy+=(my-cy)*.35;cr.style.left=cx+'px';cr.style.top=cy+'px';requestAnimationFrame(loop);})();
var _hs='a,button,.blo,.vw,.scard-header,.ccard-header,.acc-header,.pstep-header,.skill-cat-header,.iview,.stmt-cta,.nc,.ctlnk,.ctbtn,.ov-back,.proj-nav-link,.cat-card';
document.addEventListener('mouseover',function(e){if(e.target.closest(_hs))document.body.classList.add('ch');},{passive:true,capture:true});
document.addEventListener('mouseout',function(e){if(!document.elementFromPoint(mx,my)||!document.elementFromPoint(mx,my).closest(_hs))document.body.classList.remove('ch');},{passive:true,capture:true});
