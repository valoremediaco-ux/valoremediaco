/* ══════════════════════════════════════════════════════════
   VALORÉ MEDIA · WORK DATA
   Central data source for the entire Work section.
   Add, remove, or edit projects here, and the homepage tiles,
   category.html, and project.html all read from this file.

   FILE PATH CONVENTION
   Paths point directly at your real folder structure, the same
   one you use on your Mac, uploaded as-is into the repo root
   under a top-level folder named "Valore Media- My Work all".
   Example: "Valore Media- My Work all/Fashion & Beauty/rhode/rhode reel.mp4"
   No renaming needed, just push your folders and update the
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
   title           project title (no client names, see credit field for photographer credit)
   type            one-line label (role / project type)
   description     approach, what was done
   result          optional, headline stat, e.g. "55k+ views"
   coverImage      first image shown on the card
   heroVideo       optional, first video in the project's phone carousel
   galleryImages   array of additional image paths
   supportingVideos array of additional videos, shown in the phone carousel after heroVideo
   videoLabels     optional, array of tiny labels shown above each phone, in the
                   same order as [heroVideo, ...supportingVideos]. Defaults to
                   "reel" for every video when omitted — set this when a
                   project's videos are actually separate brands/pieces
                   (e.g. commercial-productions) so each phone is labeled
                   with what it actually is instead of a generic "reel"
   videoCredits    optional, array (same order as videoLabels) of photographer
                   credit strings shown under one specific phone only. Use
                   this instead of the top-level "credit" field when only
                   one video in a multi-video project needs a credit
   services        array of service tags shown on the card
   credit          optional, "photographer: [name]" shown as tiny caption
                   text beneath a project's media when a specific external
                   photographer's images/video are used. Auto-hidden if
                   galleryLabel already includes the credit text
   galleryLabel    optional, tiny label shown above the gallery grid. No
                   label shows by default — set this (e.g. "carousel", or a
                   combined string like "creative direction, photographer:
                   x") only for projects that want one
*/
const WORK_PROJECTS = [
  // ── Fashion & Beauty ──
  {
    slug: "rhode", category: "fashion-beauty",
    title: "rhode campaign", type: "creative direction & social content",
    description: "Creative-directed and captured social-ready content, shaping an editorial-style reel into a tactile, sun-soaked visual narrative built around the brand's world, in collaboration with a team of creatives.",
    result: "4K+ views on the reel alone",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/rhode/Image 1.jpg",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/rhode/rhode reel.mp4",
    galleryImages: ["Valore Media- My Work all/Fashion & Beauty/rhode/Image 1.jpg", "Valore Media- My Work all/Fashion & Beauty/rhode/Image 2.jpg", "Valore Media- My Work all/Fashion & Beauty/rhode/Image 3.webp", "Valore Media- My Work all/Fashion & Beauty/rhode/Image 4.jpg"], supportingVideos: [],
    galleryLabel: "creative direction: valore media<br>photographer: moises alcala",
    services: ["Creative Direction", "Capturing Social Content", "Video Editing"],
    credit: "moises alcala"
  },
  {
    slug: "fashion-editorial-carousels", category: "fashion-beauty",
    title: "altar'd state editorial", type: "content creation & social strategy",
    description: "Created a range of social designs and content across multiple seasons and apparel lines for altar'd state and altar'd state revival, pairing precise video editing with social strategy to give the work a polished, cohesive presence, featured on altar'd state's Instagram account.",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/altard state cover.jpg",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altard State BTS vs Final Reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS Revival Carousel Tennis.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS Revival Sports Series.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS summer solstice.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS the movement series.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altar'd State Carousel Volleyball.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altar'd state swim salt + sun carousel.mp4"],
    videoLabels: ["bts vs final", "carousel design", "carousel design", "carousel design", "carousel design", "carousel design", "carousel design"],
    services: ["Video Editing", "Social Strategy", "Carousel Design"],
    credit: "beth studenberg"
  },
  {
    slug: "fl-mag", category: "fashion-beauty",
    title: "fort lauderdale magazine", type: "content creation & social strategy",
    description: "Filmed and edited winter-edition coverage for fashion-industry social accounts, pairing the footage with social strategy and carousel content to deliver a polished seasonal story for both print and digital impact.",
    result: "15K+ views across the release",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag cover.jpg",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag creator reel.mp4", "Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag carousel.mp4"],
    videoLabels: ["reel", "reel", "carousel design"],
    videoCredits: [null, null, "beth studenberg"],
    services: ["Filming", "Social Strategy", "Video Editing", "Content Creation", "Carousel Design"]
  },
  {
    slug: "palmola-swim", category: "fashion-beauty",
    title: "palmola swim", type: "creative direction & brand content",
    description: "Creative-directed, filmed, and photographed a swimwear campaign on location, then edited the footage and stills into launch-ready content for the brand's social channels and website, helping shape their broader brand identity along the way.",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/palmola swim/image-17-2cf3be5b.jpg",
    galleryImages: ["Valore Media- My Work all/Fashion & Beauty/palmola swim/image-16-6a67be5a.jpg", "Valore Media- My Work all/Fashion & Beauty/palmola swim/image-18-9097d333.jpg", "Valore Media- My Work all/Fashion & Beauty/palmola swim/image-19-c1465475.jpg"], supportingVideos: [],
    services: ["Creative Direction", "Photography", "Content Creation", "Filming", "Video Editing"]
  },
  {
    slug: "vanlinker", category: "fashion-beauty",
    title: "vanlinker campaigns", type: "content creation",
    description: "Led multi-season campaign content across two creative partners in the fashion industry, building a cohesive, elevated visual throughline season over season.",
    result: "40K+ views across the campaign",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/vanlinker/vanlinker cover.jpg",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel1 vanlinker.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/vanlinker/reel2 vanlinker.mp4", "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel 3 vanlinker.mp4", "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel 4 vanlinker.mp4", "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel 5 vanlinker.mp4"],
    videoCredits: [null, null, null, null, "beth studenberg"],
    services: ["Video Editing", "Social Strategy", "Content Creation", "Carousel Design"]
  },
  {
    slug: "all-american-summer", category: "fashion-beauty",
    title: "all-american summer", type: "social campaign management",
    description: "Filmed and edited content for a season's worth of reels and curated carousel content, layering in social strategy to translate a summer collection into scroll-stopping storytelling for fashion professionals.",
    result: "55K+ views generated across the campaign",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/all-american summer/All-American Summer Reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/all-american summer/Camp USA BTS Reel.mp4", "Valore Media- My Work all/Fashion & Beauty/all-american summer/Camp USA Carousel.mp4", "Valore Media- My Work all/Fashion & Beauty/all-american summer/Camp USA Carousel 2.mp4"],
    videoLabels: ["reel", "reel", "carousel design", "carousel design"],
    videoCredits: [null, null, "beth studenberg", "beth studenberg"],
    services: ["Filming", "Content Creation", "Social Strategy", "Video Editing", "Carousel Design"]
  },
  // ── Events ──
  {
    slug: "miami-swim-week", category: "events",
    title: "miami swim week", type: "bts & runway coverage",
    description: "Led on-the-ground social coverage across two Miami Swim Week shows, Paraiso and Oceanus, pairing runway footage with digital camera photography for a full editorial arc.",
    coverImage: "Valore Media- My Work all/Events/Miami Swim Week/image1 msw.jpg",
    heroVideo: "Valore Media- My Work all/Events/Miami Swim Week/miami swim week reel.mp4",
    galleryImages: ["Valore Media- My Work all/Events/Miami Swim Week/image2msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image3msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image4msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image5msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image6msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image7msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image8msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image9msw.jpg"], supportingVideos: ["Valore Media- My Work all/Events/Miami Swim Week/runway footage.mp4"],
    services: ["Content Creation", "Photography", "Filming", "Video Editing"]
  },
  {
    slug: "nyfw-runway7", category: "events",
    title: "nyfw · runway7", type: "product marketing & event coverage",
    description: "Directed and captured social coverage for a season's New York Fashion Week show for Runway7, spanning backstage access, sponsor and product marketing integrations, runway moments, and interviews with designers and high-profile guests.",
    coverImage: "Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw1.jpg",
    heroVideo: "Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/runway7 merch.mp4",
    galleryImages: ["Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw2.jpg", "Valore Media- My Work all/Events/NYFW/Product Marketing/hard rock cafe/image1nyfwhardrock.jpg", "Valore Media- My Work all/Events/NYFW/Product Marketing/hard rock cafe/image2nyfwhardrock.jpg"], supportingVideos: ["Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw3.mp4", "Valore Media- My Work all/Events/NYFW/Product Marketing/hard rock cafe/videonyfwhardrock.mp4"],
    services: ["Social Strategy", "Content Creation", "Video Editing", "Interviews"]
  },
  {
    slug: "commercial-productions", category: "events",
    title: "commercial productions", type: "commercial production",
    description: "Produced and edited social content, reels and carousels, for a fashion stylist's commercial productions with major national brands, translating high-budget sets and behind-the-scenes process into authentic digital storytelling.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/tom brady x ferrero.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/land o'lakes butter.mp4", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/lucky strike.mp4", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/on x jd.mp4", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/visit fort myers.mp4"],
    videoLabels: ["tom brady x ferrero", "land o'lakes butter", "lucky strike", "on x jd", "visit fort myers"],
    services: ["Content Creation", "Video Editing"]
  },
  {
    slug: "fllfw", category: "events",
    title: "fort lauderdale fashion week", type: "backstage & runway coverage",
    description: "Provided season-spanning coverage of Fort Lauderdale Fashion Week, backstage and runway, across both the fall and summer showcases.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Events/FLLFW/fllfw runway.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Events/FLLFW/backstage carlos merchan designer.mp4", "Valore Media- My Work all/Events/FLLFW/theo azael bts.mp4"],
    services: ["Content Creation", "Video Editing"]
  },
  // ── Kids Brands ──
  {
    slug: "lola-store", category: "kids-brands",
    title: "lola & the boys · in-store", type: "in-store content",
    description: "Independently concepted, filmed, and edited in-store lifestyle content across both Miami retail locations, directing model casting and styling on the ground to translate the in-person shopping experience into scroll-stopping social moments.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/cutest kids store.mp4",
    galleryImages: ["Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-09-3e1bf97a.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-10-fcb4686d.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-11-4290f338.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-12-b802a1c3.jpg"], supportingVideos: ["Valore Media- My Work all/Kids Brands/lola & the boys/in-store/budget.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/dont you want to judge me.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/events.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/im sick final.mp4"],
    services: ["Content Creation", "Photography", "Creative Direction"]
  },
  {
    slug: "lola-ecommerce", category: "kids-brands",
    title: "lola & the boys · e-commerce", type: "e-commerce product photography",
    description: "Photographed on-location lifestyle imagery for a children's fashion label's online store, styling and directing each shoot to produce clean, on-brand product photography used directly on their e-commerce site.",
    coverImage: "Valore Media- My Work all/Kids Brands/lola & the boys/e-commerce/american flag tank.jpg",
    galleryImages: ["Valore Media- My Work all/Kids Brands/lola & the boys/e-commerce/icy bomb pop tank.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/e-commerce/sunset zig zag set.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/e-commerce/hello kitty tennis dress.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/e-commerce/little blossom romper.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/e-commerce/gingham romper.jpg"], supportingVideos: [],
    services: ["Photography", "Creative Direction", "Styling"]
  },
  {
    slug: "rooie", category: "kids-brands",
    title: "rooie", type: "full social strategy",
    description: "Ran full social strategy and management, including content editing, publishing cadence, community engagement, and Meta ad support, driving sustained account growth over time.",
    result: "900%+ account growth achieved through consistent strategy",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/rooie/rooie fun reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Kids Brands/rooie/pizza boxes reel.mp4", "Valore Media- My Work all/Kids Brands/rooie/rooie blonde girl.mp4", "Valore Media- My Work all/Kids Brands/rooie/rooie ss26 launch.mp4", "Valore Media- My Work all/Kids Brands/rooie/rooie times of the day.mp4"],
    services: ["Social Media Management", "Strategy", "Content Creation", "Editing"]
  },
  {
    slug: "lola-campaign", category: "kids-brands",
    title: "lola & the boys · campaign", type: "campaign social coverage",
    description: "Managed and executed a full social campaign across seasonal photoshoots for a children's fashion label recognized among the Inc. 5000 fastest-growing companies, developing the concepts, filming, and editing video and photography into one cohesive launch story.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/GRWM final compressed.mp4",
    galleryImages: ["Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/image-13-bd4fd37e.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/image-14-91b9c544.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/image-15-0d4b1eab.jpg"], supportingVideos: ["Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/4th of july final.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/Final POV Kids Clothes LOLA.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/days of the week final.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/final barbie lola reel 1 draft.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/final girlhood lola reel 2.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/the theme is final.mp4"],
    services: ["Content Creation", "Photography", "Filming", "Video Editing"]
  },
  // ── Lifestyle & Hospitality ──
  {
    slug: "matias", category: "lifestyle-hospitality",
    title: "creator content · matias ochoa", type: "influencer content",
    description: "Developed social content for Matias Ochoa (@matiasochoa02), a creator commanding a multi-million-follower audience, 15.1M on TikTok and 3.6M on Instagram, crafting content built to perform at that scale, featured on his page.",
    result: "500K+ views and 40K+ likes on featured content",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matias reel.mp4",
    galleryImages: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage1.png", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage2.png", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage3.png"], supportingVideos: [],
    services: ["Content Creation", "Video Editing", "Photography"]
  },
  {
    slug: "sammis-reyes", category: "lifestyle-hospitality",
    title: "galore x sammis reyes", type: "nfl athlete campaign content",
    description: "Covered behind-the-scenes social content for the Galore campaign starring former NFL player Sammis Reyes (@sammisreyes), whose following spans 1.2M on Instagram and 113K on TikTok, in collaboration with a stylist.",
    result: "65K+ views",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Sammis Reyes/sammis reyes reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },
  {
    slug: "alexis-fleming", category: "lifestyle-hospitality",
    title: "creator content · alexis fleming", type: "creator campaign content",
    description: "Produced social content across multiple campaigns for a model and creator with a 209K-strong, engaged following.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Alexis Fleming/alexis reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Filming", "Video Editing"]
  },
  {
    slug: "myhotbod-pilates", category: "lifestyle-hospitality",
    title: "myhotbod pilates", type: "launch content",
    description: "Directed launch-day social coverage for a new pilates studio's opening class, bringing together video, digital camera photography, stories, a carousel, and a reel to build anticipation from day one.",
    coverImage: "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/1.png",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/adjusted story pilates essentials.mp4",
    galleryImages: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/2.png", "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/3.png"], supportingVideos: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/adjusted perreo pilates.mp4"],
    galleryLabel: "carousel",
    services: ["Content Creation", "Photography", "Filming", "Video Editing", "Carousel Design", "Social Strategy"]
  }
];

function getCategory(slug){ return WORK_CATEGORIES.find(c => c.slug === slug); }
function getProjectsByCategory(slug){ return WORK_PROJECTS.filter(p => p.category === slug); }
function getProject(slug){ return WORK_PROJECTS.find(p => p.slug === slug); }
