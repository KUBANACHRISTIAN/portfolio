export const personalInfo = {
  name: 'Iradukunda Kubana Christian',
  title: 'Full-Stack Developer & UI/UX Designer',
  tagline: 'Crafting digital experiences that inspire.',
  bio: "I'm a passionate full-stack developer building scalable web applications and beautiful user interfaces. I specialize in React, Node.js, and cloud architecture, turning complex problems into elegant solutions.",
  email: 'chrikubana140@gmail.com',
  phone: '0791495433',
  location: 'Kigali, Rwanda',
  avatar: '/avatar.jpg',
  cvUrl: 'https://docs.google.com/document/d/1UFAFDkzFawSg-N77tndlFouMggBFnGCfDru522ROym0/edit?tab=t.0',
  social: {
    github: 'https://github.com/KUBANACHRISTIAN',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    dribbble: 'https://dribbble.com',
  },
};

export const stats = [
  { label: 'Projects Completed', value: 12, suffix: '+' },
  { label: 'Technologies', value: 16, suffix: '+' },
];

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    items: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 78 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: [
      { name: 'Node.js', level: 88 },
      { name: 'Python / Django', level: 82 },
      { name: 'GraphQL', level: 80 },
      { name: 'REST APIs', level: 93 },
    ],
  },
  {
    category: 'Mobile',
    icon: '📱',
    items: [
      { name: 'React Native', level: 85 },
      { name: 'Flutter', level: 72 },
      { name: 'Expo', level: 80 },
      { name: 'PWA', level: 88 },
    ],
  },
  {
    category: 'AI & ML',
    icon: '🤖',
    items: [
      { name: 'TensorFlow', level: 70 },
      { name: 'OpenAI API', level: 85 },
      { name: 'LangChain', level: 75 },
      { name: 'Hugging Face', level: 68 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    items: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 78 },
      { name: 'Supabase', level: 82 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    items: [
      { name: 'AWS', level: 82 },
      { name: 'Docker / K8s', level: 78 },
      { name: 'CI/CD', level: 85 },
      { name: 'Vercel / Netlify', level: 92 },
    ],
  },
];

export const techBadges = [
  'React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'Next.js', 'Tailwind', 'Redis',
  'Kubernetes', 'Terraform', 'Flutter', 'TensorFlow',
];

export const experience = [
  {
    company: 'Freelance & Personal Projects',
    logo: '🚀',
    role: 'Full-Stack Developer',
    period: '2024 – Present',
    location: 'Kigali, Rwanda',
    description: 'Building and shipping full-stack web and mobile applications for clients and personal projects. Focused on React, Node.js, and modern cloud infrastructure.',
    tech: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
];

export const education = [
  {
    degree: 'B.Sc. Software Engineering',
    school: 'MIT',
    period: '2024 – Present',
    gpa: '3.9/4.0',
  },
  {
    degree: 'A2 — Software Development',
    school: 'Ecole Technique St. Kizito Musha (ETSK), Rwanda',
    period: '2020 – 2023',
    gpa: 'Diploma',
  },
  {
    degree: "Runner's Up — East Africa College Category",
    school: 'primeCTF-Africa 2026 · Team AnotherONE',
    period: '2026',
    gpa: 'Achievement',
  },
];

export const projects = [
  {
    title: 'REGSmart',
    category: 'Web App',
    description: 'REGSmart is an AI-powered electricity theft detection and smart monitoring system designed for Rwanda Energy Group (REG). It uses machine learning to identify unusual electricity consumption patterns, detect potential theft, and generate alerts for field inspectors. The system provides a web-based dashboard for monitoring consumers, managing alerts, and generating reports to support efficient revenue protection and better decision-making.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/KUBANACHRISTIAN/REGSmart',
    demo: '#',
    featured: true,
  },
  {
    title: 'Electricity Bill Management System',
    category: 'Desktop App',
    description: 'The Electricity Bill Management System is a distributed Java application built using RMI and Hibernate. It manages customers, meter readings, automated bill generation, payment tracking, OTP-based authentication, and professional reporting. The system follows MVC and DAO design patterns and ensures secure and reliable billing management.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
    tech: ['Java', 'RMI', 'Hibernate', 'MVC'],
    github: 'https://github.com/KUBANACHRISTIAN/JAVA-FIANAL-PROJECT',
    demo: '#',
    featured: true,
  },

  {
    title: 'Land Listing & Promotion Platform',
    category: 'Web App',
    description: 'The Land Listing and Promotion Platform is a web-based application designed to help landowners, real estate agents, and buyers connect through an online marketplace. The platform allows users to list land for sale or rent, upload property details and photos, search for available land, and promote listings to potential buyers. It provides a convenient and transparent way to discover land opportunities and manage property listings.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/GateWayConnection/Land-Listing-Promotion-Platformn-Frontend',
    demo: '#',
    featured: false,
  },
  {
    title: 'E-Learning Management System',
    category: 'Web App',
    description: 'A full-featured e-learning management system with course creation, student enrollment, progress tracking, live sessions, and AI-powered assessments.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'AWS S3'],
    github: 'https://github.com/KUBANACHRISTIAN/E-learning-management-system',
    demo: '#',
    featured: false,
  },
];

export const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Full-stack web applications built with modern frameworks, optimized for performance and scalability.',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps for iOS and Android with native-like performance and beautiful UX.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'User-centered design systems, wireframes, and prototypes that convert visitors into customers.',
  },
  {
    icon: '☁️',
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure on AWS, GCP, or Azure with CI/CD pipelines and monitoring.',
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: 'Integrate cutting-edge AI capabilities into your products using LLMs, computer vision, and ML models.',
  },
  {
    icon: '🔒',
    title: 'Security Audits',
    description: 'Comprehensive security reviews, penetration testing, and implementation of best practices.',
  },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechVision',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "Alex delivered our platform ahead of schedule with exceptional quality. The architecture decisions made have saved us countless hours of technical debt. Truly a 10x engineer.",
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder at StartupLab',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "Working with Alex was transformative for our startup. He not only built our MVP but also provided strategic technical guidance that shaped our entire product roadmap.",
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager at Nexus',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "The attention to detail and commitment to user experience is unmatched. Alex consistently goes above and beyond, delivering polished products that our users love.",
  },
  {
    name: 'David Kim',
    role: 'CEO at HealthTrack',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "Alex built our health app from scratch in record time. The code quality is outstanding, and the app has received rave reviews on both App Store and Google Play.",
  },
];

export const blogPosts = [
  {
    title: 'Building Scalable React Apps with Feature-Sliced Design',
    category: 'Architecture',
    readTime: '8 min read',
    date: 'Jan 15, 2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    excerpt: 'A deep dive into Feature-Sliced Design architecture for large-scale React applications, with practical examples.',
  },
  {
    title: 'The Future of AI-Powered Development Tools',
    category: 'AI/ML',
    readTime: '6 min read',
    date: 'Jan 8, 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop',
    excerpt: 'Exploring how AI coding assistants are reshaping the developer workflow and what it means for the future.',
  },
  {
    title: 'Mastering CSS Grid: Advanced Layout Techniques',
    category: 'CSS',
    readTime: '10 min read',
    date: 'Dec 28, 2024',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    excerpt: 'Advanced CSS Grid patterns and techniques for building complex, responsive layouts with minimal code.',
  },
];
