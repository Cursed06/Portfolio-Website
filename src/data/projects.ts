import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    slug: 'skillup',
    title: 'SkillUp',
    subtitle: 'AI-powered job readiness tracker and CV analysis platform',
    category: 'Mobile',
    year: 2026,
    featured: true,
    image: '/projects/skillup-cover.png',
    description: 'An AI-powered job readiness tracker and skill-gap matching platform built to optimize CV analysis using generative AI.',
    technologies: ['Flutter', 'NestJS', 'TypeScript', 'Gemini API', 'PostgreSQL'],
    githubUrl: 'https://github.com/As-arya/Skill_Up',
    liveUrl: '',

    role: 'Frontend & Mobile Developer',
    timeline: '6 Months',
    longDescription: 'Built as an AI-enabled platform designed to analyze user CVs against target job descriptions, surfacing precise skill gaps and job readiness scores using Google Generative AI.',
    architectureOverview: 'A cross-platform Flutter mobile frontend communicating with a scalable NestJS microservice backend that integrates LLM APIs for automated CV processing and skill matching.',
    gallery: [
      '/projects/skillup-cover.png',
      '/projects/skillup-cv-checker.png',
      '/projects/skillup-portfolio.png',
      '/projects/skillup-skills.png',
      '/projects/skillup-auth.png'
    ],
    keyFeatures: [
      {
        title: 'AI CV Analysis',
        description: 'Automated parsing and evaluation of resume documents using Google Generative AI integration.'
      },
      {
        title: 'Skill Gap Matching',
        description: 'Dynamic breakdown comparing candidate skills against industry requirements to provide actionable improvement paths.'
      }
    ],
    challenges: [
      'Handling complex file upload parsing streams safely on both mobile and backend layers.',
      'Optimizing state management for fluid multi-step form submissions and score dashboards.'
    ]
  },
  {
    slug: 'food-ai',
    title: 'Food AI',
    subtitle: 'Food Nutrition Classification & Dietary Recommendation AI',
    category: 'AI',
    year: 2025,
    featured: false,
    image: '/projects/food-ai-cover.svg',
    description: 'An AI-powered application leveraging deep learning and computer vision to classify food nutrition and items from images.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Convolutional Neural Networks (CNN)'],
    githubUrl: 'https://github.com/Cursed06/Food-AI',
    liveUrl: 'https://food-recognition-ai.streamlit.app/',

    role: 'AI Engineer & Full Stack Developer',
    timeline: '6 Months',
    longDescription: 'Developed a deep learning model to accurately identify and categorize various types of Indonesian food items from images to aid with dietary exploration and nutritional analysis.',
    architectureOverview: 'A Python backend built with Flask & Streamlit running a pre-trained CNN or transfer-learning image classification architecture trained on food datasets.',
    gallery: [
      '/projects/food-ai-cover.svg'
    ],
    keyFeatures: [
      {
        title: 'Multi-Class Food Recognition',
        description: 'Accurately classifies diverse arrays of food items into specific categories using image features.'
      },
      {
        title: 'Recipe & Nutritional Insight',
        description: 'Maps recognized foods to recipes and underlying nutritional parameters from the TKPI dataset.'
      }
    ],
  },
  {
    slug: 'himti-bootcamp-finpro',
    title: 'Apple Stock Movement Predictor',
    subtitle: 'Machine Learning Directional Stock Forecasting — HIMTI Bootcamp Final Project',
    category: 'AI',
    year: 2025,
    featured: false,
    image: '/projects/apple-stock-predictor-cover.png',
    description: 'A machine learning web tool trained on historical market features (1-Day Return & Moving Average Delta) to forecast directional movement for Apple (AAPL) stock.',
    technologies: ['Python', 'Scikit-Learn', 'Streamlit', 'NumPy', 'Matplotlib', 'Logistic Regression'],
    githubUrl: 'https://github.com/Cursed06/HIMTI-Bootcamp-Finpro',
    liveUrl: 'https://himti-bootcamp-finpro-xslets7mnmww8ywb8bucwt.streamlit.app/',

    role: 'AI Engineer @ Full Stack Developer',
    timeline: '1 Month',
    longDescription: 'Developed as the capstone final project for the HIMTI (Himpunan Mahasiswa Teknik Informatika) Bootcamp. Designed and deployed an end-to-end quantitative machine learning pipeline that predicts whether Apple Inc. (AAPL) stock will move UP or DOWN given short-term return momentum and technical indicator differentials.',
    architectureOverview: 'The application uses a trained Logistic Regression classification model (persisted via Joblib) wrapped in an interactive Streamlit interface. Users input momentum indicators (1-day percentage return and MA-10 divergence), and the pipeline computes probability distribution vectors visualized via dynamic Matplotlib charts.',
    gallery: [
      '/projects/apple-stock-predictor-cover.png'
    ],
    keyFeatures: [
      {
        title: 'Feature-Based Momentum Inference',
        description: 'Computes directional market probabilities using 1-Day Return momentum and 10-day Moving Average (MA10) deviation metrics.'
      },
      {
        title: 'Probability Distribution Visualization',
        description: 'Dynamic Matplotlib probability bar charting comparing UP vs. DOWN confidence intervals in real-time.'
      },
      {
        title: 'Lightweight & Responsive Web Deployment',
        description: 'Interactive parameter tuning interface deployed seamlessly via Streamlit Cloud.'
      }
    ],
    challenges: [
      'Engineering robust input features (1-day returns and MA differential) that minimize noisy market signals.',
      'Calibrating classification decision thresholds to output balanced probability distributions.'
    ]
  },
  {
    slug: 'koperasi-wwk',
    title: 'Koperasi WWK',
    subtitle: 'Cooperative Company Portal',
    category: 'Web',
    year: 2026,
    featured: false,
    image: '/projects/koperasi-wwk-cover.png',
    description: 'An information and administrative platform built for cooperative company services and commercial product distribution.',
    technologies: ['Express.js', 'Tailwind CSS', 'React'],
    githubUrl: '',
    liveUrl: 'https://koperasi-wwk.vercel.app/',

    role: 'Full-Stack Developer',
    timeline: '1 Month',
    longDescription: 'Designed to handle the distribution of cooperative information for Koperasi Wadhah Wangi Kreasi.',
    architectureOverview: 'Full-stack web layout using modular components with a secure backend API structure connecting business units, and workshop class registrations.',
    gallery: [
      '/projects/koperasi-wwk-cover.png'
    ],
    keyFeatures: [
      {
        title: 'Cooperation Information',
        description: 'Providing access to information about the cooperative and its activities.'
      },
      {
        title: 'Business Unit Showcase',
        description: 'Dedicated business unit sections for Marketing (Pemasaran), Consumer Goods (Konsumen), and Community Skills Workshops (Bengkel Kreasi).'
      }
    ],
    challenges: [
      'Delivering information and features that are easy to access for members.',
      'Designing an organic, high-contrast visual identity matching community cooperative standards.'
    ]
  },
  {
    slug: 'komodo-air',
    title: 'Komodo Air',
    subtitle: 'Airline Flight Booking & Fleet Management System',
    category: 'Web',
    year: 2026,
    featured: true,
    image: '/projects/komodo-air-cover.svg',
    description: 'A comprehensive computerized airline booking, seat reservation, and administrative fleet control web platform.',
    technologies: ['React', 'Spring Boot', 'Java Persistence API (JPA)', 'MySQL', 'Spring Security', 'JWT'],
    githubUrl: 'https://github.com/sauravii/airline-dashboard',
    liveUrl: 'https://bit.ly/VideoDemoOOP',

    role: 'UI/UX Designer',
    timeline: '6 Months',
    longDescription: 'Created as an academic final project modeling the evolution from physical index card reservation systems to a robust digital airline reservation experience. Provides customer-facing flight booking workflows and administrative fleet scheduling.',
    architectureOverview: 'Spring Boot REST backend using JPA for object-relational mapping and JWT for stateless security filters, paired with an interactive React frontend interface.',
    gallery: [
      '/projects/komodo-air-cover.svg',
      '/projects/komodo-air-dashboard.svg'
    ],
    keyFeatures: [
      {
        title: 'Flight Scheduling & Booking Engine',
        description: 'Enables customers to search routes, select real-time cabin seats, and complete booking checkouts with instant invoice generation.'
      },
      {
        title: 'Admin Control Center',
        description: 'Full administrative panel to monitor outbound/inbound routes, schedule new flights, and manage aircraft allocation.'
      }
    ],
    challenges: [
      'Implementing clean custom JSON error handling filters instead of default framework error responses.',
      'Ensuring strict data validation and relationship mappings across flights and aircraft fleets.'
    ]
  },
  {
    slug: 'master-home-resto',
    title: 'Master Home Resto',
    subtitle: 'F&B Restaurant Landing Page & Ordering Portal',
    category: 'Web',
    year: 2024,
    featured: false,
    image: '/projects/master-home-resto-cover.png',
    description: 'A vibrant landing page and order management interface designed for a food and beverage restaurant establishment.',
    technologies: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: '',
    liveUrl: '',

    role: 'UI/UX Designer',
    timeline: '6 Months',
    longDescription: 'Designed with a heavy emphasis on visual storytelling, brand appetite appeal, menu navigation, multi-bank payment instructions, and clean administrative flows for restaurant operations.',
    architectureOverview: 'Static responsive landing page layout designed via Figma and coded for smooth cross-device performance, complete with customer login, contact channels, bank transfer step-by-step guides, and admin menu controls.',
    gallery: [
      '/projects/master-home-resto-cover.png',
      '/projects/master-home-resto-payment.png',
      '/projects/master-home-resto-admin.png',
      '/projects/master-home-resto-login.png',
      '/projects/master-home-resto-logo.png'
    ],
    keyFeatures: [
      {
        title: 'Interactive Menu Showcase & Pre-Order',
        description: 'Categorized food displays with price tags, appetite-driven visuals, and intuitive pre-order workflows.'
      },
      {
        title: 'Multi-Bank Payment Instructions',
        description: 'Accordion walkthroughs for mobile banking and ATM transfers covering BCA, BNI, Mandiri, BRI, and CIMB Niaga.'
      },
      {
        title: 'Administrative Management Portal',
        description: 'Admin hub providing options to manage food menus, view live orders, and verify customer payment receipts.'
      }
    ],
    challenges: [
      'Balancing bold, appetizing brand colors (deep culinary red and warm cream) with legible typography and layout hierarchy.',
      'Organizing multi-step payment instruction accordions for seamless customer checkouts.'
    ]
  },
  {
    slug: 'po-shop',
    title: 'PO Shop Storefront',
    subtitle: 'E-commerce website for Persekutuan Oikoumene',
    category: 'Web',
    year: 2026,
    featured: false,
    image: '/projects/po-shop-cover.png',
    description: 'An e-commerce storefront built to manage merchandise catalogs, shopping cart flows, and administrative order tracking for Persekutuan Oikoumene.',
    technologies: ['Next.js', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://po-shop-storefront.vercel.app/',

    role: 'Full Stack Developer',
    timeline: '1 Month',
    longDescription: 'Developed to handle merchandise pre-orders and sales transactions for the campus fellowship organization with dedicated role-based administration views.',
    architectureOverview: 'Next.js server-rendered application powered by Prisma ORM interacting with a secure PostgreSQL database instance, featuring server actions, local cart state, and order fulfillment admin panels.',
    gallery: [
      '/projects/po-shop-cover.png'
    ],
    keyFeatures: [
      {
        title: 'Dynamic Catalog & Special Bundle Packages',
        description: 'Interactive merchandise showcase displaying promotional package bundles (Paket Basic, Premium, Tas) with granular item breakdowns.'
      },
      {
        title: 'Order Tracking & Admin Control Panel',
        description: 'Role-based administrative views allowing staff to manage stock inventory, monitor pre-orders, and update fulfillment milestones.'
      }
    ],
    challenges: [
      'Handling secure database migrations and schema relations with Prisma ORM.',
      'Maintaining fast SSR page delivery speeds and seamless client-side shopping cart synchronization.'
    ]
  },
  {
    slug: 'halodek',
    title: 'HaloDek',
    subtitle: 'Baby growth monitoring mobile application',
    category: 'Mobile',
    year: 2025,
    featured: false,
    image: '/projects/halodek-cover.svg',
    description: 'A mobile application prototype dedicated to helping parents monitor infant health metrics and growth milestones.',
    technologies: ['Figma'],
    githubUrl: '',
    liveUrl: '',

    role: 'UI/UX Designer',
    timeline: '6 Months',
    longDescription: 'Created with a warm, accessible aesthetic to track immunizations, weight, height milestones, and pediatric schedules efficiently.',
    architectureOverview: 'Complete Figma design system containing user flows, wireframes, and interactive high-fidelity prototypes.',
    gallery: [
      '/projects/halodek-mainpage.png'
    ],
    keyFeatures: [
      {
        title: 'Growth Chart Trackers',
        description: 'Visual growth curves mapped against standard pediatric health milestones.'
      },
      {
        title: 'Milestone Timeline',
        description: 'Organized logs for recording immunization dates and developmental achievements.'
      }
    ],
    challenges: [
      'Designing intuitive data entry flows for busy parents under high cognitive load.'
    ]
  },
  {
    slug: 'genshin-shop',
    title: 'Genshin Import',
    subtitle: 'Mock e-commerce website for Genshin Impact weapons',
    category: 'Mobile',
    year: 2026,
    featured: false,
    image: '/projects/genshin-cover.png',
    description: 'An interactive frontend prototype modeled as an e-commerce catalog for fictional game weapons and gear.',
    technologies: ['Figma', 'Flutter', 'Express.js', 'Google OAuth'],
    githubUrl: 'https://github.com/sauravii/genshin-shop',
    liveUrl: '',

    role: 'Frontend Developer',
    timeline: '4 Months',
    longDescription: 'Built to simulate a clean mobile e-commerce inventory experience featuring searchable item catalogs, custom asset styling, and cart interactions.',
    architectureOverview: 'Flutter-based mobile app utilizing custom widget composition, asset management, and state handlers.',
    gallery: [
      '/projects/genshin-dashboard.png'
    ],
    keyFeatures: [
      {
        title: 'Themed UI & Asset Management',
        description: 'Custom weapon icon assets paired with specialized game-themed color palettes.'
      },
      {
        title: 'Cart & Checkout Simulation',
        description: 'Dynamic calculations for item quantities, total pricing, and inventory updates.'
      }
    ],
    challenges: [
      'Managing custom graphical assets and ensuring fluid scroll performance across mobile device configurations.'
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter((p) => p.featured);
}
