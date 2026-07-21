export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  role: string;
  duration: string;
  platform: string;
  team: string;
  subtitle: string;
  summary: string;
  heroMockup: string;
  accentColor?: string;
  metrics: {
    stat: string;
    label: string;
  }[];
  overview: {
    problem: string;
    goal: string;
    roleDetails: string;
  };
  process: {
    number: string;
    title: string;
    description: string;
    mockup: string;
  }[];
  keyScreens: {
    title: string;
    mockup: string;
    caption: string;
  }[];
  outcomes: {
    stat: string;
    description: string;
  }[];
  learning: string;
  nextSlug: string;
  nextTitle: string;
  nextSubtitle: string;
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'genesis-ai': {
    slug: 'genesis-ai',
    title: 'Case Study 1',
    category: 'AI-powered CPQ Platform',
    role: 'Sr. Product Designer',
    duration: '9 Months',
    platform: 'Web · Desktop',
    team: '2 designers · 5 eng',
    subtitle: "Configuring enterprise quotes shouldn't feel like flying a spaceship. So I taught it to have a conversation.",
    summary: 'Redesigned an AI-powered CPQ platform with conversational configuration and scalable admin workflows.',
    heroMockup: 'genesis_ai_hero_mockup.png',
    metrics: [
      { stat: '45 → 20 min', label: 'to configure an enterprise quote' },
      { stat: '98%', label: 'quote accuracy guaranteed' },
      { stat: '60%', label: 'less sales friction for field teams' },
    ],
    overview: {
      problem: 'Sales reps navigated a maze of dropdowns and complex rules to build a single quote. Errors were common, onboarding took weeks, and admins couldn\'t scale configuration logic without engineering.',
      goal: 'Make configuration feel like a conversation — guided, forgiving, fast — while giving admins a scalable way to model products and pricing without code.',
      roleDetails: 'Led end-to-end design: discovery interviews, IA, conversational flow, the admin builder, and the design system. Partnered daily with PM and engineering through delivery.',
    },
    process: [
      {
        number: '01',
        title: 'Research & discovery',
        description: '12 interviews with reps and admins surfaced a clear pattern: people didn\'t lack information, they lacked confidence. Every extra field was a chance to second-guess.',
        mockup: 'research_synthesis.png',
      },
      {
        number: '02',
        title: 'Insight → direction',
        description: 'We reframed configuration as a dialogue. The system asks one clear question at a time, shows its reasoning, and lets reps course-correct — turning a static form into a guided conversation.',
        mockup: 'flow_explorations.png',
      },
      {
        number: '03',
        title: 'Design decisions',
        description: 'A conversational configurator up front, a rules-based admin builder behind it. Progressive disclosure kept the interface calm; an always-visible quote summary kept reps oriented and confident.',
        mockup: 'admin_builder.png',
      },
    ],
    keyScreens: [
      {
        title: 'Conversational Configurator',
        mockup: 'conversational_configurator.png',
        caption: 'Interactive dialog showing dynamic suggestion chips, automated validations, and clear rationale.',
      },
      {
        title: 'Live Quote Summary',
        mockup: 'quote_summary.png',
        caption: 'Always visible sidebar giving real-time calculations and accuracy metrics.',
      },
      {
        title: 'Admin Rules Editor',
        mockup: 'admin_rules_editor.png',
        caption: 'No-code visual rules canvas allowing PMs to publish new product tiers in minutes.',
      },
    ],
    outcomes: [
      { stat: '↓55%', description: 'time to build a quote, reduced from 45 down to 20 minutes.' },
      { stat: '98%', description: 'quote accuracy, eliminating costly manual pricing errors.' },
      { stat: '↓60%', description: 'sales friction reported by the field sales team.' },
    ],
    learning: "Complexity isn't the enemy — hidden complexity is. The moment we let the system explain its reasoning, trust followed. And building the admin layer as a first-class product, not an afterthought, is what made the whole thing scale beyond the pilot.",
    nextSlug: 'commudle',
    nextTitle: 'Case Study 2',
    nextSubtitle: 'Social website for techies · 4× engagement growth',
  },
  'commudle': {
    slug: 'commudle',
    title: 'Case Study 2',
    category: 'Social Website for Techies',
    role: 'Product Designer',
    duration: '6 Months',
    platform: 'Web · Mobile Web',
    team: '1 designer · 4 eng',
    subtitle: 'Tech communities thrive on participation. We redesigned the platform to make discovering and joining developer events feel effortless.',
    summary: 'Revamped Commudle\'s core experience across Home, About, and Profile to empower tech communities globally.',
    heroMockup: 'commudle_hero_mockup.png',
    metrics: [
      { stat: '80k → 380k', label: 'annual developer interactions' },
      { stat: '4×', label: 'overall platform engagement growth' },
      { stat: '85%', label: 'RSVP completion rate' },
    ],
    overview: {
      problem: 'Developer communities faced high drop-off rates during meetup signups, fragmented event management tools for organizers, and cluttered user profiles.',
      goal: 'Re-architect the core platform to deliver personalized meetup discovery, simplified event hosting, and meaningful developer identity cards.',
      roleDetails: 'Conducted user interviews with 20+ community leaders, wireframed new discovery flows, built interactive prototypes, and created a responsive UI component library.',
    },
    process: [
      {
        number: '01',
        title: 'Community Research',
        description: 'Spoke with community organizers and tech event attendees to pinpoint drop-off points during registration and event creation.',
        mockup: 'commudle_research.png',
      },
      {
        number: '02',
        title: 'Information Architecture',
        description: 'Streamlined navigation by centralizing upcoming tech meetups, community hubs, and developer profile badges into a cohesive hub.',
        mockup: 'commudle_ia.png',
      },
      {
        number: '03',
        title: 'Engagement Loops',
        description: 'Introduced dynamic RSVP reminders, community feeds, and quick speaker submission flows to foster active participation.',
        mockup: 'commudle_engagement.png',
      },
    ],
    keyScreens: [
      {
        title: 'Developer Home Feed',
        mockup: 'commudle_feed.png',
        caption: 'Personalized event recommendations tailored to tech stack and location.',
      },
      {
        title: 'Community Dashboard',
        mockup: 'commudle_dashboard.png',
        caption: 'All-in-one organizer suite for managing RSVPs, sponsors, and speaker callouts.',
      },
      {
        title: 'Developer Profile & Badges',
        mockup: 'commudle_profile.png',
        caption: 'Verifiable developer credentials, talk history, and community contributions.',
      },
    ],
    outcomes: [
      { stat: '4×', description: 'growth in active annual developer interactions from 80k to 380k.' },
      { stat: '85%', description: 'RSVP completion rate achieved across mobile and desktop devices.' },
      { stat: '2.5×', description: 'increase in new developer community registrations within 90 days.' },
    ],
    learning: 'Designing for communities requires respecting existing social rituals while reducing friction. Giving organizers powerful tools while keeping attendee flows frictionless created a positive feedback loop.',
    nextSlug: 'prana-ai',
    nextTitle: 'Case Study 3',
    nextSubtitle: 'Health & fitness app · 92% positive beta feedback',
  },
  'prana-ai': {
    slug: 'prana-ai',
    title: 'Case Study 3',
    category: 'Health & Fitness App',
    role: 'UX Designer',
    duration: '12 Months',
    platform: 'iOS · Android',
    team: '1 UX designer · 1 UI designer · 6 eng',
    subtitle: 'Fitness tracking often feels like homework. We created an adaptive AI coach that understands your daily energy and routine.',
    summary: 'Designed and led end-to-end UX for Prana AI, an AI-powered fitness app focused on personalized mindfulness & workouts.',
    heroMockup: 'prana_ai_hero_mockup.png',
    metrics: [
      { stat: '92%', label: 'positive MVP beta user feedback' },
      { stat: '78%', label: '30-day user retention rate' },
      { stat: '4.9★', label: 'average beta app rating' },
    ],
    overview: {
      problem: 'Users frequently abandoned traditional fitness apps due to rigid workout plans, lack of adaptiveness to daily fatigue, and overwhelming data dashboards.',
      goal: 'Create an empathetic, conversation-first fitness companion that adapts workouts dynamically based on biometric feedback, energy levels, and personal goals.',
      roleDetails: 'Led user research, journey mapping, low and high-fidelity prototyping, micro-interaction design, and usability testing with 50+ beta testers.',
    },
    process: [
      {
        number: '01',
        title: 'User Empathy & Biometrics',
        description: 'Mapped workout drop-out rates to rigid schedules. Users needed flexibility based on real-time stress and energy levels.',
        mockup: 'prana_research.png',
      },
      {
        number: '02',
        title: 'Conversational AI Coaching',
        description: 'Designed an interactive coach that adjusts intensity in real-time based on sleep, stress, and user preferences.',
        mockup: 'prana_coaching.png',
      },
      {
        number: '03',
        title: 'Clean Visual Hierarchy',
        description: 'Built a calming visual system with soothing color palettes, gentle progress rings, and effortless loggers.',
        mockup: 'prana_design.png',
      },
    ],
    keyScreens: [
      {
        title: 'AI Energy Dashboard',
        mockup: 'prana_dashboard.png',
        caption: 'Daily readiness score alongside custom recommended workout sessions.',
      },
      {
        title: 'Guided Workout Player',
        mockup: 'prana_player.png',
        caption: 'Audio-visual guidance with dynamic exercise pacing and live heart rate sync.',
      },
      {
        title: 'Habit & Streak Tracker',
        mockup: 'prana_streak.png',
        caption: 'Gentle streak celebrations and mindful habit nudges without guilt.',
      },
    ],
    outcomes: [
      { stat: '92%', description: 'positive feedback rating across early access beta participants.' },
      { stat: '78%', description: '30-day user retention rate compared to the 35% industry baseline.' },
      { stat: '4.9★', description: 'user satisfaction rating recorded across beta feedback forms.' },
    ],
    learning: 'In health & fitness, motivation is fragile. Designing micro-wins and empathetic feedback loops leads to sustainable habits much better than gamification gimmicks.',
    nextSlug: 'genesis-ai',
    nextTitle: 'Case Study 1',
    nextSubtitle: 'AI-powered CPQ platform · 45 → 20 min config',
  },
};
