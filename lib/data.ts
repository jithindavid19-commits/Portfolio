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

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  summary: string;
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Marketing Executive",
    org: "Qyuki (Remote)",
    period: "March 2024 — Present",
    summary:
      "Owning client campaigns end to end — from brief to final delivery — across a rotating portfolio of accounts.",
    achievements: [
      "Managed 8–12 client accounts per campaign cycle, consistently hitting 100% delivery KPIs through proactive scheduling and strategic follow-ups.",
      "Grew the partner database from 300 to 450+ contacts — a 25% increase in partnership opportunities — through consultative outreach.",
      "Delivered 4 end-to-end campaigns, managing the customer journey from initial brief to final execution while maintaining a high standard of client service.",
      "Used Excel, Trello and Canva to track KPIs, coordinate deliverables and present tailored marketing solutions to clients.",
    ],
  },
  {
    role: "Influencer Marketing",
    org: "Tring",
    period: "July 2022 — April 2023",
    summary:
      "Ran creator discovery, onboarding and performance analysis for influencer campaigns end to end.",
    achievements: [
      "Managed influencer onboarding and contracts for 10+ creators per campaign, tracking timelines and deliverables in Excel.",
      "Built and maintained an Excel-based database of 500+ creators, improving brand–creator matching and campaign readiness.",
      "Executed 3+ influencer marketing campaigns in collaboration with brand and operations teams using Canva.",
      "Conducted content research and trend analysis using Perplexity to support campaign planning and execution.",
      "Analysed influencer performance across 60+ posts — tracking reach, impressions and engagement — to identify high-performing creators for repeat collaborations.",
    ],
  },
  {
    role: "Talent Management",
    org: "Aspiring Productions (Reality Show)",
    period: "May 2022 — December 2022",
    summary:
      "Sourced and coordinated talent at scale for a reality TV production, building the systems that kept auditions on schedule.",
    achievements: [
      "Sourced and managed 300+ talents via Facebook, Instagram and YouTube, tracking details and application status in Excel.",
      "Executed online auditions for 250+ participants, recording scores, feedback and shortlisting decisions in structured sheets.",
      "Collaborated with 4–6 production team members to coordinate audition schedules and availability.",
      "Introduced a centralised Excel tracking system, reducing turnaround time by 40% and streamlining audition operations.",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  tagline: string;
  stages: { label: string; text: string }[];
  creatorGroups?: { category: string; names: string[] }[];
  assets: { type: "image" | "pdf"; label: string; path: string }[];
};

// Both of these were take-home strategy assignments submitted as part of
// interview processes — not executed client campaigns. Framed honestly:
// real research and real strategic thinking, no invented results.
export const caseStudies: CaseStudy[] = [
  {
    slug: "airtel-xstream",
    title: "Airtel Xstream Box",
    context: "Take-home assignment — Influencer Marketing Team Lead interview",
    tagline: "Building a full influencer strategy from a single brief — audience, message and a real creator shortlist.",
    stages: [
      {
        label: "The Brief",
        text: "Submitted as a take-home case study for an Influencer Marketing Team Lead interview: build an end-to-end influencer strategy for Airtel Xstream Box — audience, messaging, creator selection and estimated costs — from a single-line brief.",
      },
      {
        label: "The Approach",
        text: "Targeted two segments — DINK couples (28–35) and mid-age couples (45+) — around the line \"Jo Dekha Bada Dekho\" (\"Experience More with Airtel Xstream\"), briefing creators to demonstrate the real entertainment pain points Xstream Box solves rather than just list its features.",
      },
      {
        label: "Creator Selection",
        text: "Shortlisted 15 creators across five genres matched to the two audiences — Lifestyle, Tech, Mom, Travel Couple and TV Celebrities — prioritising audience fit over raw follower count, then estimated commercials for each recommended creator.",
      },
    ],
    creatorGroups: [
      { category: "Lifestyle", names: ["Aashna Malani", "Deeksha Mishra", "Komal Pandey"] },
      { category: "Tech", names: ["Technical Guruji", "Shlok Srivastava", "Beebom"] },
      { category: "Mom", names: ["Ritu Rathee", "Harpreeth Suri", "Simone Khambatta"] },
      { category: "Travel Couple", names: ["Daisy & Ankit", "Savi & Vid", "Prachi & Harsh"] },
      { category: "TV Celebrities", names: ["Karan Wahi", "Jay Bhanushali", "Bharti Singh"] },
    ],
    assets: [
      { type: "pdf", label: "Full assignment PDF", path: "/assets/campaigns/airtel-xstream-assignment.pdf" },
    ],
  },
  {
    slug: "eleve",
    title: "eleve",
    context: "Take-home assignment — Influencer Marketing interview",
    tagline: "A framework for how to think about influencer selection — not just who to pick, but why.",
    stages: [
      {
        label: "The Brief",
        text: "Submitted as part of an interview process for eleve, alongside strategy decks for three brand scenarios — Pillsbury Pancake Mix, BBLUNT #BoycottBoycut and CIPLA Breathefree — answering: what parameters, qualitative and quantitative, do you use to shortlist influencers, and why does each matter?",
      },
      {
        label: "Qualitative Parameters",
        text: "Relevance — how closely a creator's content aligns with the brand's values and message. Authenticity — the genuineness of their connection with followers, which is what makes a collaboration land. Platform suitability — choosing creators active where the target audience actually is.",
      },
      {
        label: "Quantitative Parameters",
        text: "Reach — audience size and potential exposure. Engagement — how well a creator captivates and connects with their followers. Demographics — alignment between a creator's audience and the brand's target market. Previous campaigns — a track record that signals reliability and fit.",
      },
    ],
    assets: [
      { type: "pdf", label: "Full assignment PDF", path: "/assets/campaigns/eleve-assignment.pdf" },
    ],
  },
];

export const socialProof = {
  eyebrow: "Proof of Work",
  title: "Social & Content",
  description:
    "A running feed of the content and campaigns behind the numbers — Instagram grids and the creative that went with them.",
  assets: [
    { label: "Instagram profile & grid", path: "/assets/social/profile-grid.jpg" },
    { label: "Content grid", path: "/assets/social/content-grid.jpg" },
  ],
};

// Real Instagram account-insights figures (30-day window unless noted),
// sourced directly from Jithin's own analytics screenshots — nothing here
// is estimated or invented.
export const instagramInsights = {
  eyebrow: "Account Insights",
  title: "Reading the numbers",
  description:
    "Views, audience makeup and content mix from the last 30 days — the same data used to decide what to make next.",
  period: "Last 30 days",
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
