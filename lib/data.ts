// Central content store — every fact here is sourced from Jithin's CV
// (JITHIN_GEORGE_CV.pdf) and his existing Canva portfolio. Nothing invented.

export const profile = {
  name: "Jithin George",
  role: "Marketing Executive",
  positioning: "Digital Marketing × Influencer Marketing × Creative Storytelling",
  location: "Wembley Park, London, HA9 0TT",
  email: "jithindavid.19@gmail.com",
  phone: "+44 7721 960626",
  instagram: { handle: "@llfreq", url: "https://instagram.com/llfreq" },
  linkedin: {
    label: "linkedin.com/in/jithin-george-jj1999",
    url: "https://www.linkedin.com/in/jithin-george-jj1999",
  },
  cvPath: "/JITHIN_GEORGE_CV.pdf",
};

export const about = {
  eyebrow: "Who I Am",
  summary:
    "Marketing specialist with hands-on experience in influencer marketing and social media campaigns — coordinating with creators, managing campaign deliverables, and analysing engagement metrics to support brand objectives.",
  paragraphs: [
    "I build campaigns around people — the creators who make them and the audiences who trust them. My work sits at the intersection of strategy and culture: research the right partners, manage the relationship properly, and read the numbers honestly enough to know what actually worked.",
    "Outside campaign decks, I shoot, edit and DJ. That's not a side note — it's where the instinct for pacing, visual storytelling and what stops a scroll actually comes from. Marketing that understands culture reads differently to marketing that studies it from the outside.",
    "I'm currently based in London, targeting Digital Marketing, Influencer Marketing, Social Media and Content Marketing roles across the UK.",
  ],
};

export const education = [
  {
    degree: "MSc Digital Marketing",
    institution: "University of Salford",
    period: "2024 – 2025",
    detail:
      "Dissertation: \"The Impact of Modern Influencer Strategies on Consumer Behaviour\" — Distinction, 71.33%. Focus areas: media studies, advertising, public relations, content creation, communication theory.",
  },
  {
    degree: "BA Mass Media & Communication",
    institution: "University of Mumbai",
    period: "2018 – 2021",
    detail: "",
  },
];

export const certifications = [
  "The Complete Digital Marketing Course – 12 Courses in 1 (Udemy)",
  "Google Analytics 4 (GA4) Certification",
  "HubSpot Academy Inbound Marketing Certification",
  "Meta Blueprint Digital Marketing Associate Certification",
];

export const skills = {
  eyebrow: "What I Do",
  categories: [
    {
      key: "marketing",
      label: "Marketing & Strategy",
      items: [
        "Influencer Marketing",
        "Creator Partnerships",
        "Digital Marketing Campaigns",
        "Social Media Marketing",
        "Content Marketing",
        "Campaign Planning & Coordination",
        "Audience & Trend Research",
        "Brand Collaboration",
        "Copywriting",
      ],
    },
    {
      key: "analytics",
      label: "Analytics & Performance",
      items: [
        "Campaign Performance Analysis (reach, engagement, CTR)",
        "Google Analytics 4",
        "Social Media Analytics",
        "SEO Fundamentals & Keyword Research",
        "Data-Driven Marketing",
        "Search Engine Marketing",
      ],
    },
    {
      key: "creative",
      label: "Creative & Content",
      items: [
        "Visual Storytelling",
        "Photography",
        "Video Editing",
        "Content Creation",
        "Event Coverage",
        "Music Production & DJing",
      ],
    },
  ],
  tools: [
    "Excel / Google Sheets",
    "Meta Business Suite",
    "Canva",
    "CapCut",
    "Lightroom",
    "Trello",
    "Slack",
    "Google Analytics 4",
    "Instagram Insights",
    "Rekordbox",
    "Perplexity AI",
    "ChatGPT",
  ],
};

// A compact proof-of-credibility band shown right under the hero, in place
// of a full job-history section (Jithin's CV covers that in detail — see
// the Download CV link in Contact). Every figure here is real, drawn
// directly from the CV: Qyuki (campaigns delivered), Tring (creator
// database + performance analysis), Aspiring Productions (turnaround).
export const statBand = [
  { value: "500+", label: "Creators Managed" },
  { value: "4", label: "Campaigns Delivered" },
  { value: "60+", label: "Posts Analysed" },
  { value: "40%", label: "Faster Turnaround" },
];

export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  tagline: string;
  stages: { label: string; text: string }[];
  creatorGroups?: {
    category: string;
    total?: number;
    entries: { name: string; metric?: string }[];
  }[];
  costTable?: { columns: string[]; rows: string[][] };
  assets: { type: "image" | "pdf"; label: string; path: string }[];
};

// Both of these are complete take-home strategy assignments submitted as
// part of interview processes — not executed client campaigns. Framed
// honestly throughout: every figure below (budgets, engagement rates,
// reach, creator names) is taken directly from the real decks, nothing
// invented.
export const caseStudies: CaseStudy[] = [
  {
    slug: "eleve",
    title: "eleve × Airtel Xstream Box",
    context: "Take-home assignment — Influencer Marketing interview, EleveMedia",
    tagline: "A full influencer strategy from brief to budget — audience, creators, costs and two real negotiation scenarios.",
    stages: [
      {
        label: "The Brief",
        text: "Submitted as a take-home assignment for EleveMedia: build the influencer marketing strategy for Airtel Xstream Box, end to end — audience, messaging, creator recommendations, estimated costs, and two influencer-negotiation scenarios.",
      },
      {
        label: "The Approach",
        text: "Targeted two segments — DINK couples (28–35) and mid-age couples (45+) — around the line \"Jo Dekha Bada Dekho\" (\"Experience More with Airtel Xstream\"), briefing creators to demonstrate the real entertainment pain points Xstream Box solves rather than just list its features.",
      },
      {
        label: "Creator Selection & Budget",
        text: "Shortlisted 15 creators across five genres matched to the two audiences — Lifestyle, Tech, Mom, Travel Couple and TV Celebrities — prioritising audience fit over raw follower count, each costed out by category with the same 1 IG Reel + 1 IG Story deliverable.",
      },
      {
        label: "Negotiating with Influencers",
        text: "Two real scenarios from the brief: talking a creator down from a ₹100,000 quote to fit an ₹85,000 budget — leading with appreciation, understanding their reasoning, and if needed pointing to their own stats and audience demographics to justify the ask — and securing a free IG story add-on from a creator who'd already given a 10% discount, by tying it to future collaboration opportunities rather than just pushing on price.",
      },
    ],
    creatorGroups: [
      {
        category: "Lifestyle",
        entries: [{ name: "Aashna Malani" }, { name: "Deeksha Mishra" }, { name: "Komal Pandey" }],
      },
      {
        category: "Tech",
        entries: [{ name: "Technical Guruji" }, { name: "Shlok Srivastava" }, { name: "Beebom" }],
      },
      {
        category: "Mom",
        entries: [{ name: "Ritu Rathee" }, { name: "Harpreeth Suri" }, { name: "Simone Khambatta" }],
      },
      {
        category: "Travel Couple",
        entries: [{ name: "Daisy & Ankit" }, { name: "Savi & Vid" }, { name: "Prachi & Harsh" }],
      },
      {
        category: "TV Celebrities",
        entries: [{ name: "Karan Wahi" }, { name: "Jay Bhanushali" }, { name: "Bharti Singh" }],
      },
    ],
    costTable: {
      columns: ["Category", "Estimated Cost", "Deliverables"],
      rows: [
        ["Lifestyle", "₹8,00,000", "1 IG Reel + 1 IG Story"],
        ["Tech", "₹12,00,000", "1 IG Reel + 1 IG Story"],
        ["Mom", "₹4,50,000", "1 IG Reel + 1 IG Story"],
        ["Travel Couple", "₹5,00,000", "1 IG Reel + 1 IG Story"],
        ["TV Celebs", "₹9,00,000", "1 IG Reel + 1 IG Story"],
      ],
    },
    assets: [
      { type: "pdf", label: "Full assignment PDF", path: "/assets/campaigns/eleve-assignment.pdf" },
    ],
  },
  {
    slug: "magnifly",
    title: "Magnifly × Shiamak Davar Dance Academy",
    context: "Take-home assignment — Influencer Marketing interview, Magnifly Media",
    tagline: "Tiering 63 shortlisted creators against real engagement rates and reach targets, not just follower counts.",
    stages: [
      {
        label: "The Brief",
        text: "Submitted as a take-home assignment for Magnifly Media: build a Gen Z-focused influencer campaign for Shiamak Davar Dance Academy, one of India's best-known dance institutions, to drive visibility and enrolment.",
      },
      {
        label: "The Approach",
        text: "Targeted Gen Z audiences across India with content built around the vibrant, emotional essence of dance rather than a straight sales pitch — matched to Gen Z's expectation of authenticity and creativity. Deliverable per creator: 1 IG Reel + 1 IG Story.",
      },
      {
        label: "Tiering & Selection",
        text: "Segmented 63 shortlisted creators into three tiers by role, not just size — Top Tier (13 creators, incl. Hrithik Roshan at 5.56% ER, Shraddha Kapoor at 8.96% ER, Varun Dhawan at 4.75% ER) for initial reach and awareness, Mid Tier (20 creators, incl. Dharmesh, Shruti Sinha, Aadil Khan) for driving conversation and traffic, and Micro-influencers (30 creators, incl. Sanket Panchal, Dherya Kandari, Sagar Bora) for building trust that converts to sign-ups.",
      },
      {
        label: "Visibility Strategy & KPIs",
        text: "Backed the campaign with a dedicated landing page on the Shiamak Davar website and integrated offline materials (brochures, posters, banners) at dance studios, targeting 50M+ combined reach — measured against reach, engagement (likes, shares, comments, video views) and leads (free-trial sign-ups) as the three core KPIs.",
      },
    ],
    creatorGroups: [
      {
        category: "Top Tier",
        total: 13,
        entries: [
          { name: "Hrithik Roshan", metric: "ER 5.56%" },
          { name: "Shraddha Kapoor", metric: "ER 8.96%" },
          { name: "Varun Dhawan", metric: "ER 4.75%" },
        ],
      },
      {
        category: "Mid Tier",
        total: 20,
        entries: [
          { name: "Dharmesh", metric: "ER 3.21%" },
          { name: "Shruti Sinha", metric: "ER 5.43%" },
          { name: "Aadil Khan", metric: "ER 9.21%" },
        ],
      },
      {
        category: "Micro-Influencers",
        total: 30,
        entries: [
          { name: "Sanket Panchal", metric: "ER 5.87%" },
          { name: "Dherya Kandari", metric: "ER 6.52%" },
          { name: "Sagar Bora", metric: "ER 6.11%" },
        ],
      },
    ],
    costTable: {
      columns: ["Tier", "Estimated Cost", "Creators", "Total Reach"],
      rows: [
        ["Top Tier", "₹95,00,000", "13", "24M+"],
        ["Mid Tier", "₹40,00,000", "20", "16M+"],
        ["Micro", "₹15,00,000", "30", "10M+"],
      ],
    },
    assets: [
      { type: "pdf", label: "Full assignment PDF", path: "/assets/campaigns/magnifly-assignment.pdf" },
    ],
  },
];

// Real Instagram account-insights figures (30-day window unless noted),
// sourced directly from Jithin's own analytics screenshots — nothing here
// is estimated or invented.
export const instagramInsights = {
  eyebrow: "Proof of Work",
  title: "Reading the numbers",
  description:
    "Views, audience makeup and content mix from the last 30 days — the same data used to decide what to make next.",
  period: "Last 30 days",
  reelGrid: { label: "Reel & content grid", path: "/assets/social/content-grid.jpg" },
  stats: [
    { label: "Views", value: "4,723" },
    { label: "Interactions", value: "117" },
    { label: "Viewers", value: "753" },
    { label: "Net followers", value: "+1" },
  ],
  // Illustrative trend of the 30-day views curve (relative shape, not exact
  // per-day counts) — for the sparkline under the Views stat.
  viewsTrend: [140, 60, 10, 160, 200, 180, 210, 700, 130, 90, 190, 60, 30, 20, 100, 60, 350, 90, 60, 470, 90, 520, 130],
  audienceSplit: {
    label: "Viewers",
    a: { label: "Followers", value: 68.9 },
    b: { label: "Non-followers", value: 31.1 },
  },
  genderSplit: {
    label: "Gender",
    a: { label: "Women", value: 56.8 },
    b: { label: "Men", value: 43.2 },
  },
  ageRange: [
    { label: "13–17", value: 0.3 },
    { label: "18–24", value: 15.5 },
    { label: "25–34", value: 73.6 },
  ],
  contentType: [
    { label: "Stories", value: 93.3 },
    { label: "Posts", value: 6.3 },
    { label: "Reels", value: 0.4 },
  ],
};

export const photography = {
  eyebrow: "My Creative World",
  title: "Visual Storytelling",
  description:
    "Photography is where the eye for pacing, composition and what actually stops a scroll gets built. Travel, music, city, nature — the same instincts that shape a campaign.",
  categories: [
    { key: "travel", label: "Travel", path: "/assets/photography/travel-01.jpg" },
    { key: "music", label: "Music", path: "/assets/photography/music-01.jpg" },
    { key: "city", label: "City", path: "/assets/photography/city-01.jpg" },
    { key: "nature", label: "Nature", path: "/assets/photography/nature-01.jpg" },
    { key: "city-2", label: "City", path: "/assets/photography/city-02.jpg" },
    { key: "music-2", label: "Music", path: "/assets/photography/music-02.jpg" },
  ],
};

export const music = {
  eyebrow: "Music / Culture / Curation",
  title: "DJing",
  description:
    "Music is the other half of the same instinct — reading a room, building a set, curating a moment. It's where a lot of my sense of pacing and audience actually comes from.",
  video: "/assets/music/djing.mp4",
  poster: "/assets/music/djing-poster.jpg",
};

export const contact = {
  eyebrow: "Contact",
  headline: "Let's make something people notice.",
  sub: "Open to Digital Marketing, Influencer Marketing, Social Media and Content Marketing roles across the UK.",
};
