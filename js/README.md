/* ── LOADER — slower, deliberate intro on first visit; skipped on repeat visits within the same session ── */
(function(){
  var li=document.getElementById('li'),lb=document.getElementById('lb'),ld=document.getElementById('ld');
  var g=function(id){return document.getElementById(id);};
  var show=function(id){var el=g(id);if(el)el.classList.add('in');};
  var seen=false;
  try{seen=sessionStorage.getItem('vm_intro_seen')==='1';}catch(e){}
  var delay=seen?0:2800;
  // Show logo immediately
  if(li)li.style.opacity='1';
  if(lb)lb.style.width='180px';
  // Fade out loader (instantly on repeat visits this session, slower on first visit)
  setTimeout(function(){
    if(ld)ld.classList.add('gone');
    show('hEye');
    show('hType');
    setTimeout(function(){show('hSub');show('hScrl');},seen?0:400);
    show('heroImg');
    var navEl=g('nav');if(navEl)navEl.classList.add('vis');
    var pv=g('phoneVid');
    if(pv){pv.load();pv.play().catch(function(){});}
    try{sessionStorage.setItem('vm_intro_seen','1');}catch(e){}
  },delay);
})();

/* ── REVEALS ── */
var rio=new IntersectionObserver(function(entries){
  entries.forEach(function(e,i){if(e.isIntersecting){setTimeout(function(){e.target.classList.add('in');},i*55);rio.unobserve(e.target);}});
},{threshold:.04,rootMargin:'0px 0px -10px 0px'});
document.querySelectorAll('.rc,.rf').forEach(function(el){rio.observe(el);});

/* ── NAV ── */
var nav2=document.getElementById('nav');
var darkZ=document.querySelectorAll('.stats,.ct,.tick,.work');
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

/* ── WORK OVERLAY: category grid → project detail, sourced from work-data.js ── */
var overlay=document.getElementById('ind-overlay');
var ovBody=document.getElementById('ov-body');
var ovTitle=document.getElementById('ov-title');
var curCat=null;

function projectCardHtml(p){
  var hasMultiple=(p.galleryImages&&p.galleryImages.length>1)||(p.supportingVideos&&p.supportingVideos.length>0);
  var cover=p.coverImage?'<img src="'+p.coverImage+'" alt="'+p.title+'" loading="lazy" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block;">':'';
  var svcTags=(p.services||[]).map(function(s){return '<span class="s-pill" style="font-size:.62rem;padding:.28rem .7rem;">'+s+'</span>';}).join('');
  var creditHtml=p.credit?'<span class="photo-credit">photographed by: '+p.credit+'</span>':'';
  return ''
    +'<div class="ccard">'
    +'  <div class="vw ccard-media" data-src="'+(p.heroVideo||'')+'">'
    +      cover
    +      (p.heroVideo?'<video loop playsinline preload="none" muted><source type="video/mp4"></video><span class="ccard-play" aria-hidden="true"><svg viewBox="0 0 24 24"><polygon points="9,7 9,17 17,12"/></svg></span>':'')
    +      creditHtml
    +'  </div>'
    +'  <div class="ccard-header" onclick="toggleCcard(this)">'
    +'    <span class="ccard-title">'+p.title+'</span>'
    +'    <span class="ccard-arrow">↓</span>'
    +'  </div>'
    +'  <div class="ccard-body-wrap">'
    +'    <div class="ccard-row"><span class="ccard-lbl">type</span><span class="ccard-val">'+(p.type||'')+'</span></div>'
    +'    <div class="ccard-row"><span class="ccard-lbl">approach</span><span class="ccard-val">'+(p.description||'')+'</span></div>'
    +(p.result?'    <div class="ccard-row"><span class="ccard-lbl">result</span><span class="ccard-val">'+p.result+'</span></div>':'')
    +(svcTags?'    <div class="ccard-tags">'+svcTags+'</div>':'')
    +(hasMultiple?'    <div class="ccard-note">multiple pieces of content</div>':'')
    +'  </div>'
    +'</div>';
}

function renderCategory(slug){
  var cat=getCategory(slug);
  var projects=getProjectsByCategory(slug);
  curCat=slug;
  ovTitle.textContent=cat?cat.name.toLowerCase():slug;
  var grid='<div class="ccard-grid">'+projects.map(projectCardHtml).join('')+'</div>';
  ovBody.innerHTML=grid;
  // Note: ccard-media videos are intentionally NOT registered with vobs here.
  // They load and play only on hover/tap — see the hover-to-play block below.
  ovBody.querySelectorAll('.rf,.rc').forEach(function(el){setTimeout(function(){el.classList.add('in');},80);});
}

function toggleCcard(header){
  var card=header.closest('.ccard');
  if(!card)return;
  card.classList.toggle('open');
}

function openOv(slug){
  if(!overlay||!ovBody||!ovTitle)return false;
  renderCategory(slug);
  overlay.classList.add('open');
  document.body.classList.add('ov-open');
  document.body.style.overflow='hidden';
  overlay.scrollTop=0;
  return false;
}
function closeOv(){
  if(!overlay)return;
  overlay.classList.remove('open');
  document.body.classList.remove('ov-open');
  document.body.style.overflow='';
}
// ESC key to close overlay
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeOv();});

/* ── PROJECT VIDEOS: play with sound only on hover (tap-to-toggle on touch) ── */
var noHover = window.matchMedia && window.matchMedia('(hover: none)').matches;

function ccardEnsureLoaded(media, vid){
  var src = media.dataset.src;
  if(src){
    var source = vid.querySelector('source');
    if(source && !source.src){ source.src = src; vid.load(); }
    delete media.dataset.src;
  }
}
function ccardPlay(media, vid){
  ccardEnsureLoaded(media, vid);
  vid.muted = false;
  vid.play().then(function(){
    media.classList.add('playing');
  }).catch(function(){
    // Some browsers block unmuted autoplay even on hover — fall back to muted.
    vid.muted = true;
    vid.play().then(function(){ media.classList.add('playing'); }).catch(function(){});
  });
}
function ccardStop(media, vid){
  vid.pause();
  vid.currentTime = 0;
  vid.muted = true;
  media.classList.remove('playing');
}

if(!noHover){
  ovBody.addEventListener('mouseover', function(e){
    var media = e.target.closest && e.target.closest('.ccard-media');
    if(!media || media._hoverTimer) return;
    var vid = media.querySelector('video');
    if(!vid) return;
    media._hoverTimer = setTimeout(function(){ media._hoverTimer=null; ccardPlay(media, vid); }, 120);
  }, {capture:true, passive:true});

  ovBody.addEventListener('mouseout', function(e){
    var media = e.target.closest && e.target.closest('.ccard-media');
    if(!media) return;
    if(e.relatedTarget && media.contains(e.relatedTarget)) return;
    clearTimeout(media._hoverTimer); media._hoverTimer=null;
    var vid = media.querySelector('video');
    if(vid) ccardStop(media, vid);
  }, {capture:true, passive:true});
} else {
  ovBody.addEventListener('click', function(e){
    var media = e.target.closest && e.target.closest('.ccard-media');
    if(!media) return;
    var vid = media.querySelector('video');
    if(!vid) return;
    e.preventDefault();
    if(vid.paused) ccardPlay(media, vid); else ccardStop(media, vid);
  });
}

/* ── SOUND TOGGLE ── */
function ts(btn){
  var vid=btn.closest('.vw').querySelector('video');if(!vid)return;
  vid.muted=!vid.muted;
  btn.querySelector('.io').style.display=vid.muted?'block':'none';
  btn.querySelector('.in2').style.display=vid.muted?'none':'block';
}

/* ── CERTIFICATES: tap/click toggle (mobile has no hover) ── */
(function(){
  var dd=document.querySelector('.acc-dropdown');
  if(!dd)return;
  var t=dd.querySelector('.acc-title');
  if(t)t.addEventListener('click',function(){dd.classList.toggle('open');});
})();

/* ── CREDENTIALS: click/tap toggle for each item, plus an expand-all button
   (mobile has no hover, so this is the only way to open items there) ── */
(function(){
  var items=document.querySelectorAll('.cred-grid .acc-item');
  items.forEach(function(item){
    var header=item.querySelector('.acc-header');
    if(header)header.addEventListener('click',function(){item.classList.toggle('open');});
  });
  var btn=document.getElementById('credExpandAll');
  if(!btn)return;
  var dd=document.querySelector('.acc-dropdown');
  btn.addEventListener('click',function(){
    var expanding=btn.textContent.trim()==='expand all';
    items.forEach(function(item){item.classList.toggle('open',expanding);});
    if(dd)dd.classList.toggle('open',expanding);
    btn.textContent=expanding?'collapse all':'expand all';
  });
})();

/* ── CONTACT FORM: submit without leaving the page ── */
(function(){
  var f=document.querySelector('.ctform');
  if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var btn=f.querySelector('.ctbtn');
    var orig=btn.innerHTML;
    btn.innerHTML='sending...';btn.disabled=true;
    fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}})
      .then(function(r){return r.json();})
      .then(function(d){
        if(d.success){btn.innerHTML='sent ✓';f.reset();
          setTimeout(function(){btn.innerHTML=orig;btn.disabled=false;},4000);}
        else{btn.innerHTML='something went wrong, try again';btn.disabled=false;}
      })
      .catch(function(){btn.innerHTML='something went wrong, try again';btn.disabled=false;});
  });
})();
