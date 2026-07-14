/* ── CURSOR ── */
var cr=document.getElementById('cr'),mx=0,my=0,cx=0,cy=0;
document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;},{passive:true});
(function loop(){cx+=(mx-cx)*.12;cy+=(my-cy)*.12;cr.style.left=cx+'px';cr.style.top=cy+'px';requestAnimationFrame(loop);})();
var _hs='a,button,.itab,.blo,.vw,.scard,.tc,.s-pill,.skill-pill,.acc-item,.pstep,.skill-cat,.scard-header,.acc-header,.skill-cat-header,.iview,.stmt-cta,.nc,.ctlnk,.ctbtn,.ov-back';
document.addEventListener('mouseover',function(e){if(e.target.closest(_hs))document.body.classList.add('ch');},{passive:true,capture:true});
document.addEventListener('mouseout',function(e){if(!document.elementFromPoint(mx,my)||!document.elementFromPoint(mx,my).closest(_hs))document.body.classList.remove('ch');},{passive:true,capture:true});
function hov(){}

/* ── LOADER — fast cream fade ── */
(function(){
  var li=document.getElementById('li'),lb=document.getElementById('lb'),ld=document.getElementById('ld');
  var g=function(id){return document.getElementById(id);};
  var show=function(id){var el=g(id);if(el)el.classList.add('in');};
  // Show logo immediately
  if(li)li.style.opacity='1';
  if(lb)lb.style.width='180px';
  // Fade out loader quickly
  setTimeout(function(){
    if(ld)ld.classList.add('gone');
    show('hEye');
    show('hType');
    setTimeout(function(){show('hSub');show('hScrl');},200);
    show('heroImg');
    var navEl=g('nav');if(navEl)navEl.classList.add('vis');
    var pv=g('phoneVid');
    if(pv){pv.load();pv.play().catch(function(){});}
  },1500);
})();

/* ── REVEALS ── */
var rio=new IntersectionObserver(function(entries){
  entries.forEach(function(e,i){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('in');},i*55);rio.unobserve(e.target);}});
},{threshold:.04,rootMargin:'0px 0px -10px 0px'});
document.querySelectorAll('.rc,.rf').forEach(function(el){rio.observe(el);});

/* ── NAV ── */
var nav2=document.getElementById('nav');
var darkZ=document.querySelectorAll('.stats,.ct,.tick');
var tk2=false;
window.addEventListener('scroll',function(){
  if(!tk2){requestAnimationFrame(function(){
    tk2=false;
    var d=false;
    darkZ.forEach(function(z){var r=z.getBoundingClientRect();if(r.top<60&&r.bottom>0)d=true;});
    nav2.classList.toggle('inv',d);
    nav2.classList.toggle('scrolled',window.scrollY>80);
    document.body.classList.toggle('dk',d);
  });tk2=true;}
},{passive:true});

/* ── LAZY VIDEOS ── */
var vobs=new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      var w=e.target,src=w.dataset.src;
      if(src){var v=w.querySelector('video'),s=v.querySelector('source');s.src=src;v.load();v.play().catch(function(){});delete w.dataset.src;}
      vobs.unobserve(w);
    }
  });
},{rootMargin:'200px'});
document.querySelectorAll('.vw[data-src]').forEach(function(w){vobs.observe(w);});

/* ── INDUSTRY PHONE — one video ── */
var phVids={
  fashion:'videos/video-01-f3641e43.mp4',
  kids:'videos/video-07-8d5898a0.mp4',
  lifestyle:'videos/video-11-15d56820.mp4',
  events:'videos/video-14-5746e90a.mp4'
};
var phLabels={fashion:'fashion & beauty',kids:'kids',lifestyle:'lifestyle',events:'events'};
var curInd='fashion';
var phoneVid=document.getElementById('phoneVid');
var phoneVidSrc=document.getElementById('phoneVidSrc');
var phLabel=document.getElementById('phIndLabel');

function swInd(ind){
  if(ind===curInd)return;
  curInd=ind;
  // Swap phone video
  phoneVid.style.opacity='0';
  phoneVid.style.transition='opacity .3s';
  setTimeout(function(){
    phoneVidSrc.src=phVids[ind];
    phoneVid.load();
    phoneVid.play().catch(function(){});
    phoneVid.style.opacity='1';
    if(phLabel)phLabel.textContent=phLabels[ind]||ind;
    var label=phLabels[ind]||ind;
    document.getElementById('iview-btn').textContent='view all '+label+' work →';
  },300);
}

document.querySelectorAll('.itab').forEach(function(t){
  t.addEventListener('click',function(){
    document.querySelectorAll('.itab').forEach(function(x){x.classList.remove('on');});
    t.classList.add('on');swInd(t.dataset.ind);
  });
});

/* ── OVERLAY ── */
var indGrids={'fashion':'\n  <div class="vrow vr3"><div class="vc "><div class="vw" data-src="videos/video-01-f3641e43.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">fashion</span><span class="vt">altar\'d state · josie</span></div></div><div class="vc "><div class="vw" data-src="videos/video-02-9ca577d2.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">fashion · nyfw</span><span class="vt">street style · runway7</span></div></div><div class="vc "><div class="vw" data-src="videos/video-03-39329ecc.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">fashion</span><span class="vt">altar\'d state · utah</span></div></div></div>\n  <div class="vrow vr2"><div class="vc "><div class="vw" data-src="videos/video-04-4c23202c.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">fashion · editorial</span><span class="vt">sammis reyes</span></div></div><div class="vc "><div class="vw" data-src="videos/video-05-057ecd0d.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">fashion</span><span class="vt">maeline</span></div></div></div>\n','kids':'\n  <div class="vrow vr4"><div class="vc "><div class="vw" data-src="videos/video-06-c35f4ce0.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">kids</span><span class="vt">rooie sweatshirt</span></div></div><div class="vc "><div class="vw" data-src="videos/video-07-8d5898a0.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">kids</span><span class="vt">pov kids · lola & the boys</span></div></div><div class="vc "><div class="vw" data-src="videos/video-08-717b8f9d.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">kids</span><span class="vt">barbie × lola & the boys</span></div></div><div class="vc "><div class="vw" data-src="videos/video-09-458cec28.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">kids · campaign</span><span class="vt">coming soon · rooie</span></div></div></div>\n  <div class="vrow vr4"><div class="vc "><div class="vw" data-src="videos/video-10-9428fbf1.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">kids</span><span class="vt">house tour</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-09-3e1bf97a.jpg" alt="lola + the boys miami" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola miami</span><span class="vt">lola + the boys miami</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-10-fcb4686d.jpg" alt="lola miami · store" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola miami</span><span class="vt">lola miami · store</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-11-4290f338.jpg" alt="lola + the boys miami" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola miami</span><span class="vt">lola + the boys miami</span></div></div></div>\n  <div class="vrow vr4"><div class="vc "><div class="vw pi"><img src="images/image-12-b802a1c3.jpg" alt="lola miami · store" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola miami</span><span class="vt">lola miami · store</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-13-bd4fd37e.jpg" alt="tennis court · lola" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola & the boys</span><span class="vt">tennis court · lola</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-14-91b9c544.jpg" alt="beach day · lola" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola & the boys</span><span class="vt">beach day · lola</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-15-0d4b1eab.jpg" alt="accessories · lola" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">kids · lola & the boys</span><span class="vt">accessories · lola</span></div></div></div>\n','lifestyle':'\n  <div class="vrow vr3"><div class="vc "><div class="vw" data-src="videos/video-11-15d56820.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">lifestyle · swimwear</span><span class="vt">palmola swim</span></div></div><div class="vc "><div class="vw" data-src="videos/video-12-d7e43f5b.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">lifestyle</span><span class="vt">nikki beach bts</span></div></div><div class="vc "><div class="vw" data-src="videos/video-13-1e84933c.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">lifestyle · hotels</span><span class="vt">balfour hotel miami</span></div></div></div>\n  <div class="vrow vr4"><div class="vc "><div class="vw pi"><img src="images/image-16-6a67be5a.jpg" alt="palmola swim · campaign" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">lifestyle · swimwear</span><span class="vt">palmola swim · campaign</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-17-2cf3be5b.jpg" alt="palmola swim · detail" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">lifestyle · swimwear</span><span class="vt">palmola swim · detail</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-18-9097d333.jpg" alt="palmola swim · editorial" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">lifestyle · swimwear</span><span class="vt">palmola swim · editorial</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-19-c1465475.jpg" alt="palmola swim · beach" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">lifestyle · swimwear</span><span class="vt">palmola swim · beach</span></div></div></div>\n','events':'\n  <div class="vrow vr2"><div class="vc "><div class="vw" data-src="videos/video-14-5746e90a.mp4"><video loop playsinline preload="none" muted><source type="video/mp4"></video><button class="vsnd" onclick="ts(this)" title="Toggle sound"><svg class="io" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="17" y1="9" x2="23" y2="15"/><line x1="23" y1="9" x2="17" y2="15"/></svg><svg class="in2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="display:none"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></button></div><div class="vm"><span class="vc2">events</span><span class="vt">fllfw backstage · carlos</span></div></div><div class="vc "><div class="vw pi"><img src="images/image-20-31d065d3.jpg" alt="poolside · lola" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;"></div><div class="vm"><span class="vc2">events · kids</span><span class="vt">poolside · lola</span></div></div></div>\n'};
var overlay=document.getElementById('ind-overlay');
var ovBody=document.getElementById('ov-body');
var ovTitle=document.getElementById('ov-title');

function openOv(ind){
  if(!overlay||!ovBody||!ovTitle)return;
  var label=phLabels[ind]||ind;
  ovTitle.textContent=label;
  ovBody.innerHTML='<div class="vgrid">'+(indGrids[ind]||'')+'</div>';
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
  // Lazy load videos in overlay
  ovBody.querySelectorAll('.vw[data-src]').forEach(function(w){vobs.observe(w);});
  // Trigger reveals
  ovBody.querySelectorAll('.rf,.rc').forEach(function(el){setTimeout(function(){el.classList.add('in');},80);});
  overlay.scrollTop=0;
  // Re-add hover to new elements
  hov('#ov-body .vw,#ov-body button');
}
function closeOv(){
  if(!overlay)return;
  overlay.classList.remove('open');
  document.body.style.overflow='';
}
// ESC key to close overlay
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeOv();});

/* ── SOUND TOGGLE ── */
function ts(btn){
  var vid=btn.closest('.vw').querySelector('video');if(!vid)return;
  vid.muted=!vid.muted;
  btn.querySelector('.io').style.display=vid.muted?'block':'none';
  btn.querySelector('.in2').style.display=vid.muted?'none':'block';
}
