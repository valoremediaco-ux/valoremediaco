/* ══════════════════════════════════════════════════════════
   VALORÉ MEDIA — WORK DATA
   Central data source for the entire Work section.
   Add, remove, or edit projects here — the homepage cards,
   category pages, and project pages all read from this file.
   Nothing else needs to be touched when content changes.
   ══════════════════════════════════════════════════════════ */

const WORK_CATEGORIES = [
  {
    slug: "fashion-beauty",
    name: "Fashion & Beauty",
    description: "A curated selection of campaigns, editorials, product launches, and social-first content created for fashion and beauty brands.",
    coverImage: "images/cover-fashion-beauty.jpg",
    coverVideo: "videos/cover-fashion-beauty.mp4"
  },
  {
    slug: "events",
    name: "Events",
    description: "Backstage coverage, fashion weeks, brand activations, and live event storytelling.",
    coverImage: "images/cover-events.jpg",
    coverVideo: "videos/cover-events.mp4"
  },
  {
    slug: "kids-brands",
    name: "Kids Brands",
    description: "Campaigns, retail content, product launches, and storytelling created for children's brands.",
    coverImage: "images/cover-kids-brands.jpg",
    coverVideo: "videos/cover-kids-brands.mp4"
  },
  {
    slug: "lifestyle-hospitality",
    name: "Lifestyle & Hospitality",
    description: "Editorial content and social storytelling for hospitality, travel, and lifestyle brands.",
    coverImage: "images/cover-lifestyle-hospitality.jpg",
    coverVideo: "videos/cover-lifestyle-hospitality.mp4"
  }
];

/* Each project:
   slug            unique id, used in the URL (project.html?id=slug)
   category        must match a WORK_CATEGORIES slug
   title           project title
   type            project type / one line label
   description     one-sentence description (shown on category grid + project page)
   coverImage      featured cover image (category grid + project hero fallback)
   heroVideo       main project video (project page only, lazy-loaded)
   galleryImages   array of image paths
   supportingVideos array of video paths
   services        array of services used — only matching ones render on the project page
*/
const WORK_PROJECTS = [
  // ── Fashion & Beauty ──
  { slug:"editorial-styling-project", category:"fashion-beauty", title:"Editorial Styling Project", type:"Editorial", description:"A styling-led editorial built around mood, texture, and light.", coverImage:"images/work/placeholder-fashion-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-1.jpg","images/work/placeholder-fashion-2.jpg","images/work/placeholder-fashion-3.jpg"], supportingVideos:[], services:["Creative Direction","Photography","Content Creation"] },
  { slug:"luxury-swim-campaign", category:"fashion-beauty", title:"Luxury Swim Campaign", type:"Campaign", description:"A seasonal swim campaign shot on location for a premium resort brand.", coverImage:"images/work/placeholder-fashion-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-2.jpg","images/work/placeholder-fashion-3.jpg"], supportingVideos:["videos/placeholder-project.mp4"], services:["Creative Direction","Content Creation","Social Media Management"] },
  { slug:"footwear-campaign", category:"fashion-beauty", title:"Footwear Campaign", type:"Campaign", description:"Product-forward campaign content for a footwear launch.", coverImage:"images/work/placeholder-fashion-3.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-3.jpg","images/work/placeholder-fashion-1.jpg"], supportingVideos:[], services:["Content Creation","Photography"] },
  { slug:"beauty-editorial", category:"fashion-beauty", title:"Beauty Editorial", type:"Editorial", description:"A clean, close-up beauty editorial focused on skin and finish.", coverImage:"images/work/placeholder-fashion-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-1.jpg","images/work/placeholder-fashion-2.jpg"], supportingVideos:[], services:["Creative Direction","Photography"] },
  { slug:"creative-brand-shoot", category:"fashion-beauty", title:"Creative Brand Shoot", type:"Brand Shoot", description:"A concept-driven shoot built to establish a brand's visual identity.", coverImage:"images/work/placeholder-fashion-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-2.jpg"], supportingVideos:[], services:["Creative Direction","Strategy","Content Creation"] },
  { slug:"seasonal-product-campaign", category:"fashion-beauty", title:"Seasonal Product Campaign", type:"Campaign", description:"Seasonal product storytelling built for paid and organic use.", coverImage:"images/work/placeholder-fashion-3.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-3.jpg"], supportingVideos:[], services:["Content Creation","Strategy"] },
  { slug:"fashion-photography-content", category:"fashion-beauty", title:"Fashion Photography Content", type:"Content", description:"Ongoing photography content built for a fashion brand's feed.", coverImage:"images/work/placeholder-fashion-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-1.jpg"], supportingVideos:[], services:["Photography","Content Creation"] },
  { slug:"personal-branding-editorial", category:"fashion-beauty", title:"Personal Branding Editorial", type:"Editorial", description:"A personal-brand editorial built around a founder's story.", coverImage:"images/work/placeholder-fashion-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-fashion-2.jpg"], supportingVideos:[], services:["Creative Direction","Photography","Social Media Management"] },

  // ── Events ──
  { slug:"new-york-fashion-week", category:"events", title:"New York Fashion Week", type:"Event Coverage", description:"Backstage and runway coverage from New York Fashion Week.", coverImage:"images/work/placeholder-events-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-events-1.jpg","images/work/placeholder-events-2.jpg"], supportingVideos:["videos/placeholder-project.mp4"], services:["Content Creation","Video Editing","Social Media Management"] },
  { slug:"miami-swim-week", category:"events", title:"Miami Swim Week", type:"Event Coverage", description:"Runway and backstage storytelling from Miami Swim Week.", coverImage:"images/work/placeholder-events-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-events-2.jpg"], supportingVideos:[], services:["Content Creation","Photography"] },
  { slug:"fort-lauderdale-fashion-week", category:"events", title:"Fort Lauderdale Fashion Week", type:"Event Coverage", description:"Live coverage and same-day content from FLL Fashion Week.", coverImage:"images/work/placeholder-events-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-events-1.jpg"], supportingVideos:[], services:["Content Creation","Video Editing"] },
  { slug:"award-show-coverage", category:"events", title:"Award Show Coverage", type:"Event Coverage", description:"Red carpet and stage coverage for an award show client.", coverImage:"images/work/placeholder-events-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-events-2.jpg"], supportingVideos:[], services:["Content Creation","Photography","Social Media Management"] },
  { slug:"brand-activation", category:"events", title:"Brand Activation", type:"Activation", description:"On-site content for a brand's live activation event.", coverImage:"images/work/placeholder-events-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-events-1.jpg"], supportingVideos:[], services:["Strategy","Content Creation"] },

  // ── Kids Brands ──
  { slug:"kids-brand-launch", category:"kids-brands", title:"Kids Brand Launch", type:"Launch Campaign", description:"Launch content built to introduce a new children's brand.", coverImage:"images/work/placeholder-kids-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-kids-1.jpg"], supportingVideos:[], services:["Creative Direction","Content Creation"] },
  { slug:"holiday-campaign", category:"kids-brands", title:"Holiday Campaign", type:"Campaign", description:"Seasonal holiday content for a children's retail brand.", coverImage:"images/work/placeholder-kids-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-kids-2.jpg"], supportingVideos:[], services:["Content Creation","Social Media Management"] },
  { slug:"retail-store-content", category:"kids-brands", title:"Retail Store Content", type:"Content", description:"In-store content built to support a retail launch.", coverImage:"images/work/placeholder-kids-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-kids-1.jpg"], supportingVideos:[], services:["Photography","Content Creation"] },
  { slug:"behind-the-scenes", category:"kids-brands", title:"Behind the Scenes", type:"BTS Content", description:"Behind-the-scenes storytelling from a kids brand shoot day.", coverImage:"images/work/placeholder-kids-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-kids-2.jpg"], supportingVideos:["videos/placeholder-project.mp4"], services:["Video Editing","Content Creation"] },

  // ── Lifestyle & Hospitality ──
  { slug:"luxury-hotel-content", category:"lifestyle-hospitality", title:"Luxury Hotel Content", type:"Content", description:"Editorial content built for a luxury hotel's social presence.", coverImage:"images/work/placeholder-lifestyle-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-lifestyle-1.jpg"], supportingVideos:[], services:["Creative Direction","Content Creation","Social Media Management"] },
  { slug:"lifestyle-editorial", category:"lifestyle-hospitality", title:"Lifestyle Editorial", type:"Editorial", description:"A lifestyle editorial built around mood and setting.", coverImage:"images/work/placeholder-lifestyle-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-lifestyle-2.jpg"], supportingVideos:[], services:["Creative Direction","Photography"] },
  { slug:"destination-campaign", category:"lifestyle-hospitality", title:"Destination Campaign", type:"Campaign", description:"Travel-led campaign content for a destination client.", coverImage:"images/work/placeholder-lifestyle-1.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-lifestyle-1.jpg"], supportingVideos:[], services:["Strategy","Content Creation"] },
  { slug:"property-showcase", category:"lifestyle-hospitality", title:"Property Showcase", type:"Showcase", description:"A property showcase built to highlight design and atmosphere.", coverImage:"images/work/placeholder-lifestyle-2.jpg", heroVideo:"videos/placeholder-project.mp4", galleryImages:["images/work/placeholder-lifestyle-2.jpg"], supportingVideos:[], services:["Photography","Content Creation"] }
];

function getCategory(slug){ return WORK_CATEGORIES.find(c => c.slug === slug); }
function getProjectsByCategory(slug){ return WORK_PROJECTS.filter(p => p.category === slug); }
function getProject(slug){ return WORK_PROJECTS.find(p => p.slug === slug); }
