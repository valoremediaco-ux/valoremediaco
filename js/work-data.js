/* ══════════════════════════════════════════════════════════
   VALORÉ MEDIA — WORK DATA
   Central data source for the entire Work section.
   Add, remove, or edit projects here — the homepage tiles,
   category.html, and project.html all read from this file.

   FILE PATH CONVENTION
   Paths point directly at your real folder structure — the same
   one you use on your Mac, uploaded as-is into the repo root
   under a top-level folder named "Valore Media- My Work all".
   Example: "Valore Media- My Work all/Fashion & Beauty/rhode/rhode reel.mp4"
   No renaming needed — just push your folders and update the
   path here to match if a filename changes.
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
    name: "Events & Productions",
    description: "Backstage coverage, fashion weeks, brand activations, and live event storytelling.",
    coverImage: "images/cover-events.jpg",
    coverVideo: "videos/cover-events.mp4"
  },
  {
    slug: "kids-brands",
    name: "Kids",
    description: "Campaigns, retail content, product launches, and storytelling created for children's brands.",
    coverImage: "images/cover-kids-brands.jpg",
    coverVideo: "videos/cover-kids-brands.mp4"
  },
  {
    slug: "lifestyle-hospitality",
    name: "Lifestyle & Influencer Marketing",
    description: "Editorial content, influencer collaborations, and social storytelling for lifestyle and hospitality brands.",
    coverImage: "images/cover-lifestyle-hospitality.jpg",
    coverVideo: "videos/cover-lifestyle-hospitality.mp4"
  }
];

/* Each project:
   slug            unique id, matches its upload folder
   category        must match a WORK_CATEGORIES slug
   title           project title (no client names — see credit field for photographer credit)
   type            one-line label (role / project type)
   description     approach — what was done
   result          optional — headline stat, e.g. "55k+ views"
   coverImage      first image shown on the card
   heroVideo       optional — plays on hover, in videos/campaigns/[slug]/
   galleryImages   array of additional image paths, in images/campaigns/[slug]/
   supportingVideos array of additional video paths
   services        array of service tags shown on the card
   credit          optional — "photographed by: [name]" shown only when a
                   specific external photographer's images are used
*/
const WORK_PROJECTS = [
  // ── Fashion & Beauty ──
  {
    slug: "all-american-summer", category: "fashion-beauty",
    title: "all american-summer", type: "social campaign management",
    description: "Filmed and edited reels plus carousel design for a photographer and stylist.",
    result: "55k+ views overall",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/all-american summer/All-American Summer Reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },
  {
    slug: "rhode", category: "fashion-beauty",
    title: "rhode campaign", type: "creative direction",
    description: "Filming, digital cam photos, and an edited reel.",
    result: "4k+ views on the reel",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/rhode/Image 1.jpg",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/rhode/rhode reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Creative Direction", "Photography", "Video Editing"],
    credit: "moisés alcalá"
  },
  {
    slug: "vanlinker", category: "fashion-beauty",
    title: "vanlinker campaigns", type: "content creation",
    description: "Multi-season campaign content created for both a photographer and a stylist.",
    result: "40k+ views overall",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel1 vanlinker.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Photography"]
  },
  {
    slug: "fl-mag", category: "fashion-beauty",
    title: "fort lauderdale mag", type: "content creation",
    description: "Winter edition coverage created for both a photographer and a stylist.",
    result: "15k+ views overall",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Photography"]
  },
  {
    slug: "fashion-editorial-carousels", category: "fashion-beauty",
    title: "fashion editorial", type: "creative direction",
    description: "Creative carousels and reels created for a fashion photographer's account, plus campaign content coverage.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altard State BTS vs Final Reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Creative Direction", "Content Creation"]
  },
  {
    slug: "commercial-productions", category: "fashion-beauty",
    title: "big brand commercial productions", type: "content creation",
    description: "BTS and final content creation — reels and carousels — for major brand commercial productions.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/tom brady x ferrero.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },

  // ── Events ──
  {
    slug: "nyfw-runway7", category: "events",
    title: "nyfw · runway7", type: "backstage & event coverage",
    description: "Managed backstage social content, sponsor marketing, runway socials, and designer and audience interview coverage.",
    coverImage: "Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw1.jpg",
    heroVideo: "Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/runway7 merch.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing", "Social Media Management"]
  },
  {
    slug: "mfw", category: "events",
    title: "milano fashion week", type: "bts coverage",
    description: "BTS coverage for a brand later recognized in Forbes 30 Under 30 Asia 2024.",
    coverImage: "images/campaigns/mfw/01.jpg",
    heroVideo: "videos/campaigns/mfw/reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },
  {
    slug: "miami-swim-week", category: "events",
    title: "miami swim week", type: "bts & runway coverage",
    description: "BTS and runway social coverage — both video and digital cam photos — across the Paraiso and Oceanus shows.",
    coverImage: "Valore Media- My Work all/Events/Miami Swim Week/image1msw.jpg",
    heroVideo: "Valore Media- My Work all/Events/Miami Swim Week/miami swim week reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Photography", "Video Editing"]
  },
  {
    slug: "fllfw", category: "events",
    title: "fllfw", type: "backstage & runway coverage",
    description: "Covered both fall and summer shows — backstage and runway social content.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Events/FLLFW/fllfw runway.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },

  // ── Kids Brands ──
  {
    slug: "lola-campaign", category: "kids-brands",
    title: "lola & the boys · campaign", type: "campaign content",
    description: "Campaign photoshoot content, video and digital cam photos plus edited reels.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/GRWM final.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Photography", "Video Editing"]
  },
  {
    slug: "lola-store", category: "kids-brands",
    title: "lola & the boys · in-store", type: "in-store content",
    description: "In-store content across both Miami locations — Aventura and Dadeland Mall.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/cutest kids store.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Photography"]
  },
  {
    slug: "rooie", category: "kids-brands",
    title: "rooie", type: "full social management",
    description: "Full social media management and strategy — content editing, posting, engagement, and meta ad support.",
    result: "+900% account growth",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/rooie/rooie fun reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Social Media Management", "Strategy", "Content Creation"]
  },
  {
    slug: "kids-other", category: "kids-brands",
    title: "kids content", type: "bts coverage & edited reels",
    description: "BTS coverage and edited reels for child models and creators — social content across several kids styling shoots.",
    coverImage: "images/campaigns/kids-other/01.jpg",
    heroVideo: "videos/campaigns/kids-other/01.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },

  // ── Lifestyle & Hospitality ──
  {
    slug: "matias", category: "lifestyle-hospitality",
    title: "creator content · matias", type: "influencer content",
    description: "Social content created for a creator with a multi-million follower audience across TikTok and Instagram.",
    result: "5k+ views · 40k+ likes",
    coverImage: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage1.png",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matias reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation"]
  },
  {
    slug: "sammis-reyes", category: "lifestyle-hospitality",
    title: "galore campaign", type: "bts content",
    description: "Covered BTS social content for a campaign featuring a former NFL player, in collaboration with a stylist.",
    result: "65k+ views",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Sammis Reyes/sammis reyes reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },
  {
    slug: "alexis-fleming", category: "lifestyle-hospitality",
    title: "creator content", type: "campaign content",
    description: "Created social content across various campaigns for a creator with a sizeable engaged following.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Alexis Fleming/alexis reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation"]
  },
  {
    slug: "myhotbod-pilates", category: "lifestyle-hospitality",
    title: "myhotbod pilates", type: "launch content",
    description: "Covered social content for an opening class launch — video, digital cam photos, story, carousel, and reel.",
    coverImage: "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/1.png",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/adjusted story pilates essentials.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Photography", "Video Editing"]
  }
];

function getCategory(slug){ return WORK_CATEGORIES.find(c => c.slug === slug); }
function getProjectsByCategory(slug){ return WORK_PROJECTS.filter(p => p.category === slug); }
function getProject(slug){ return WORK_PROJECTS.find(p => p.slug === slug); }
