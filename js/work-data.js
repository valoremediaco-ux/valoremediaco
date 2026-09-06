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
   services        array of service tags shown on the card
   credit          optional, "photographer: [name]" shown as tiny caption
                   text beneath a project's media when a specific external
                   photographer's images/video are used
*/
const WORK_PROJECTS = [
  // ── Fashion & Beauty ──
  {
    slug: "all-american-summer", category: "fashion-beauty",
    title: "all-american summer", type: "social campaign management",
    description: "Filmed and edited a season's worth of reels and curated carousel content for a photographer-stylist duo, layering in social strategy to translate a summer collection into scroll-stopping storytelling.",
    result: "55K+ views generated across the campaign",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/all-american summer/All-American Summer Reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/all-american summer/Camp USA BTS Reel.mp4", "Valore Media- My Work all/Fashion & Beauty/all-american summer/Camp USA Carousel.mp4", "Valore Media- My Work all/Fashion & Beauty/all-american summer/Camp USA Carousel 2.mp4"],
    services: ["Filming", "Content Creation", "Social Strategy", "Video Editing"]
  },
  {
    slug: "rhode", category: "fashion-beauty",
    title: "rhode campaign", type: "creative direction",
    description: "Creative-directed and filmed an editorial-style reel with digital camera photography, crafting a tactile, sun-soaked visual narrative built around the brand's world.",
    result: "4K+ views on the reel alone",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/rhode/Image 1.jpg",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/rhode/rhode reel.mp4",
    galleryImages: ["Valore Media- My Work all/Fashion & Beauty/rhode/Image 2.jpg", "Valore Media- My Work all/Fashion & Beauty/rhode/Image 3.webp", "Valore Media- My Work all/Fashion & Beauty/rhode/Image 4.jpg"], supportingVideos: [],
    services: ["Creative Direction", "Photography", "Video Editing"],
    credit: "moises alcala"
  },
  {
    slug: "palmola-swim", category: "fashion-beauty",
    title: "palmola swim", type: "creative direction",
    description: "Creative-directed, filmed, and photographed a group swimwear campaign on location, then edited the footage and stills into launch-ready content for the brand's social channels.",
    coverImage: "Valore Media- My Work all/Fashion & Beauty/palmola swim/image-16-6a67be5a.jpg",
    galleryImages: ["Valore Media- My Work all/Fashion & Beauty/palmola swim/image-17-2cf3be5b.jpg", "Valore Media- My Work all/Fashion & Beauty/palmola swim/image-18-9097d333.jpg", "Valore Media- My Work all/Fashion & Beauty/palmola swim/image-19-c1465475.jpg"], supportingVideos: [],
    services: ["Creative Direction", "Photography", "Content Creation", "Filming", "Video Editing"]
  },
  {
    slug: "vanlinker", category: "fashion-beauty",
    title: "vanlinker campaigns", type: "content creation",
    description: "Led multi-season campaign content across two creative partners, a photographer and a stylist, building a cohesive visual throughline season over season.",
    result: "40K+ views across the campaign",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel1 vanlinker.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/vanlinker/reel2 vanlinker.mp4", "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel 3 vanlinker.mp4", "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel 4 vanlinker.mp4", "Valore Media- My Work all/Fashion & Beauty/vanlinker/reel 5 vanlinker.mp4"],
    services: ["Video Editing", "Social Strategy", "Content Creation"]
  },
  {
    slug: "fl-mag", category: "fashion-beauty",
    title: "fort lauderdale magazine", type: "filming & social strategy",
    description: "Filmed and edited winter-edition coverage for a photographer-stylist duo, pairing the footage with social strategy to deliver a polished seasonal story for both print and digital impact.",
    result: "15K+ views across the release",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag creator reel.mp4", "Valore Media- My Work all/Fashion & Beauty/ft. lauderdale mag/fll mag carousel.mp4"],
    services: ["Filming", "Social Strategy", "Video Editing"]
  },
  {
    slug: "fashion-editorial-carousels", category: "fashion-beauty",
    title: "altar'd state editorial", type: "video editing & social strategy",
    description: "Edited a series of BTS-versus-final reels for a fashion photographer's account, pairing precise video editing with social strategy to give behind-the-scenes footage a polished, cohesive feed presence.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altard State BTS vs Final Reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS Revival Carousel Tennis.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS Revival Sports Series.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS summer solstice.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/AS the movement series.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altar'd State Carousel Volleyball.mp4", "Valore Media- My Work all/Fashion & Beauty/altar'd state x as revival/Altar'd state swim salt + sun carousel.mp4"],
    services: ["Video Editing", "Social Strategy"],
    credit: "beth studenberg"
  },
  {
    slug: "commercial-productions", category: "fashion-beauty",
    title: "commercial productions", type: "commercial production",
    description: "Produced behind-the-scenes and final social content, reels and carousels, for major national brand commercial productions, translating high-budget sets into authentic digital storytelling.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/tom brady x ferrero.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/land o'lakes butter.mp4", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/lucky strike.mp4", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/on x jd.mp4", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Commercial BTS/visit fort myers.mp4"],
    videoLabels: ["tom brady x ferrero", "land o'lakes butter", "lucky strike", "on x jd", "visit fort myers"],
    services: ["Content Creation", "Video Editing"]
  },

  // ── Events ──
  {
    slug: "nyfw-runway7", category: "events",
    title: "nyfw · runway7", type: "backstage & event coverage",
    description: "Directed end-to-end social coverage for a New York Fashion Week show, including backstage access, sponsor integrations, runway moments, and designer interviews, under Runway7's global spotlight.",
    coverImage: "Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw1.jpg",
    heroVideo: "Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/runway7 merch.mp4",
    galleryImages: ["Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw2.jpg", "Valore Media- My Work all/Events/NYFW/Product Marketing/hard rock cafe/image1nyfwhardrock.jpg", "Valore Media- My Work all/Events/NYFW/Product Marketing/hard rock cafe/image2nyfwhardrock.jpg"], supportingVideos: ["Valore Media- My Work all/Events/NYFW/Product Marketing/runway7 merch/cafenyfw3.mp4", "Valore Media- My Work all/Events/NYFW/Product Marketing/hard rock cafe/videonyfwhardrock.mp4"],
    services: ["Content Creation", "Video Editing", "Social Media Management"]
  },
  {
    slug: "miami-swim-week", category: "events",
    title: "miami swim week", type: "bts & runway coverage",
    description: "Led on-the-ground social coverage across two Miami Swim Week shows, Paraiso and Oceanus, pairing runway footage with digital camera photography for a full editorial arc.",
    coverImage: "Valore Media- My Work all/Events/Miami Swim Week/image1 msw.jpg",
    heroVideo: "Valore Media- My Work all/Events/Miami Swim Week/miami swim week reel.mp4",
    galleryImages: ["Valore Media- My Work all/Events/Miami Swim Week/image2msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image3msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image4msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image5msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image6msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image7msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image8msw.jpg", "Valore Media- My Work all/Events/Miami Swim Week/image9msw.jpg"], supportingVideos: ["Valore Media- My Work all/Events/Miami Swim Week/runway footage.mp4"],
    services: ["Content Creation", "Photography", "Video Editing"]
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
    slug: "lola-campaign", category: "kids-brands",
    title: "lola & the boys · campaign", type: "campaign content",
    description: "Creative-directed a full campaign photoshoot for a children's fashion label, bringing video, digital camera photography, and edited reels together into one cohesive launch story.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/GRWM final compressed.mp4",
    galleryImages: ["Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/image-13-bd4fd37e.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/image-14-91b9c544.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/image-15-0d4b1eab.jpg"], supportingVideos: ["Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/4th of july final.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/Final POV Kids Clothes LOLA.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/days of the week final.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/final barbie lola reel 1 draft.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/final girlhood lola reel 2.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/campaigns/the theme is final.mp4"],
    services: ["Content Creation", "Photography", "Video Editing"]
  },
  {
    slug: "lola-store", category: "kids-brands",
    title: "lola & the boys · in-store", type: "in-store content",
    description: "Produced in-store lifestyle content across both Miami retail locations, translating the in-person shopping experience into scroll-stopping social moments.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/cutest kids store.mp4",
    galleryImages: ["Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-09-3e1bf97a.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-10-fcb4686d.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-11-4290f338.jpg", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/image-12-b802a1c3.jpg"], supportingVideos: ["Valore Media- My Work all/Kids Brands/lola & the boys/in-store/budget.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/dont you want to judge me.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/events.mp4", "Valore Media- My Work all/Kids Brands/lola & the boys/in-store/im sick final.mp4"],
    services: ["Content Creation", "Photography"]
  },
  {
    slug: "rooie", category: "kids-brands",
    title: "rooie", type: "full social management",
    description: "Ran full social strategy and management, including content editing, publishing cadence, community engagement, and Meta ad support, driving sustained account growth over time.",
    result: "900%+ account growth achieved through consistent strategy",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Kids Brands/rooie/rooie fun reel.mp4",
    galleryImages: [], supportingVideos: ["Valore Media- My Work all/Kids Brands/rooie/pizza boxes reel.mp4", "Valore Media- My Work all/Kids Brands/rooie/rooie blonde girl.mp4", "Valore Media- My Work all/Kids Brands/rooie/rooie ss26 launch.mp4", "Valore Media- My Work all/Kids Brands/rooie/rooie times of the day.mp4"],
    services: ["Social Media Management", "Strategy", "Content Creation"]
  },

  // ── Lifestyle & Hospitality ──
  {
    slug: "matias", category: "lifestyle-hospitality",
    title: "creator content · matias", type: "influencer content",
    description: "Developed social content for a creator commanding a multi-million-follower audience, 15.1M on TikTok and 3.6M on Instagram, crafting content built to perform at that scale.",
    result: "5K+ views and 40K+ likes on a single piece of content",
    coverImage: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage1.png",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matias reel.mp4",
    galleryImages: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage2.png", "Valore Media- My Work all/Lifestyle & Influencer Marketing/Matias/matiasimage3.png"], supportingVideos: [],
    services: ["Content Creation"]
  },
  {
    slug: "sammis-reyes", category: "lifestyle-hospitality",
    title: "galore campaign", type: "bts content",
    description: "Directed behind-the-scenes social coverage for a campaign starring former NFL player Sammis Reyes, whose following spans 1.2M on Instagram and 113K on TikTok, in collaboration with a stylist.",
    result: "65K+ views",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Sammis Reyes/sammis reyes reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation", "Video Editing"]
  },
  {
    slug: "alexis-fleming", category: "lifestyle-hospitality",
    title: "creator content · alexis fleming", type: "campaign content",
    description: "Produced social content across multiple campaigns for a creator with a 209K-strong, highly engaged following.",
    coverImage: "",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/Alexis Fleming/alexis reel.mp4",
    galleryImages: [], supportingVideos: [],
    services: ["Content Creation"]
  },
  {
    slug: "myhotbod-pilates", category: "lifestyle-hospitality",
    title: "myhotbod pilates", type: "launch content",
    description: "Directed launch-day social coverage for a new pilates studio's opening class, bringing together video, digital camera photography, stories, a carousel, and a reel to build anticipation from day one.",
    coverImage: "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/1.png",
    heroVideo: "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/adjusted story pilates essentials.mp4",
    galleryImages: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/2.png", "Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/Carousel/3.png"], supportingVideos: ["Valore Media- My Work all/Lifestyle & Influencer Marketing/myhotbod/adjusted perreo pilates.mp4"],
    services: ["Content Creation", "Photography", "Video Editing"]
  }
];

function getCategory(slug){ return WORK_CATEGORIES.find(c => c.slug === slug); }
function getProjectsByCategory(slug){ return WORK_PROJECTS.filter(p => p.category === slug); }
function getProject(slug){ return WORK_PROJECTS.find(p => p.slug === slug); }
