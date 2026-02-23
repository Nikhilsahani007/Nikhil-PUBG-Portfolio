export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  techStack: string[];
  features: string[];
  outcome: string;
  challenges: string;
  category: string;
  thumbnail: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ns-sitecraft-solutions',
    title: 'NS SiteCraft Solutions',
    shortDescription: 'A production-grade SaaS website builder with admin panel, dynamic pricing, and lead management.',
    problem: 'Small businesses need professional web presence but struggle with expensive, complex website builders that require technical expertise.',
    approach: 'Built a full-stack SaaS platform with a layered architecture: React frontend with premium UI components, Express.js REST API, and MongoDB database. Implemented admin authentication, lead management, and dynamic content/pricing management.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Framer Motion', 'CSS Modules'],
    features: [
      'Admin dashboard with secure JWT authentication',
      'Lead management system with status tracking',
      'Dynamic pricing and content management',
      'Responsive, premium UI with scroll-triggered animations',
      'SEO-optimized pages with proper meta tags',
      'Health check API endpoints for monitoring',
      'Docker support for easy deployment'
    ],
    outcome: 'Successfully deployed a production-ready SaaS platform capable of managing multiple client websites, with a 95+ Lighthouse performance score and complete API documentation via Swagger.',
    challenges: 'Implementing real-time content updates while maintaining type safety across the full stack. Solved by creating shared TypeScript interfaces and implementing a robust validation layer with Zod schemas.',
    category: 'Full-Stack',
    thumbnail: '',
    images: [],
    liveUrl: '#',
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '2',
    slug: 'realtime-chat-application',
    title: 'Real-Time Chat Application',
    shortDescription: 'WebSocket-powered messaging platform with rooms, typing indicators, and message persistence.',
    problem: 'Existing chat solutions lack customization and real-time features needed for team collaboration within small organizations.',
    approach: 'Developed a real-time chat application using Socket.IO for bidirectional communication, with React on the frontend and Node.js on the backend. Implemented message persistence with MongoDB and Redis for session management.',
    techStack: ['React', 'Socket.IO', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'CSS3'],
    features: [
      'Real-time messaging with WebSocket connections',
      'Chat rooms with join/leave functionality',
      'Typing indicators and online status',
      'Message persistence and history',
      'File sharing with drag-and-drop',
      'Emoji picker and message reactions',
      'Responsive mobile-first design'
    ],
    outcome: 'Built a performant chat platform handling 100+ concurrent connections with sub-100ms message delivery latency.',
    challenges: 'Managing WebSocket connection lifecycle and handling reconnection gracefully across network changes. Implemented exponential backoff retry logic and connection state synchronization.',
    category: 'Backend',
    thumbnail: '',
    images: [],
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '3',
    slug: 'ai-task-manager',
    title: 'AI-Powered Task Manager',
    shortDescription: 'Smart task prioritization app using ML algorithms for intelligent scheduling and productivity insights.',
    problem: 'Traditional task managers treat all tasks equally, leading to poor prioritization and missed deadlines for busy professionals.',
    approach: 'Created an intelligent task management system that uses natural language processing to understand task descriptions and machine learning to predict priority levels, estimated completion times, and optimal scheduling.',
    techStack: ['React', 'Python', 'FastAPI', 'TensorFlow', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    features: [
      'AI-powered task priority scoring',
      'Natural language task input with auto-categorization',
      'Smart scheduling with calendar integration',
      'Productivity analytics and insights dashboard',
      'Drag-and-drop Kanban board',
      'Recurring task patterns detection',
      'Export reports as PDF/CSV'
    ],
    outcome: 'Achieved 87% accuracy in task priority prediction after training on 10K+ labeled task entries. Users reported 35% improvement in task completion rates.',
    challenges: 'Training an effective ML model with limited labeled data. Used transfer learning with a pre-trained NLP model and implemented active learning to iteratively improve predictions with user feedback.',
    category: 'AI/ML',
    thumbnail: '',
    images: [],
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '4',
    slug: 'ecommerce-analytics-dashboard',
    title: 'E-Commerce Analytics Dashboard',
    shortDescription: 'Real-time analytics platform for e-commerce businesses with interactive charts and KPI tracking.',
    problem: 'E-commerce store owners need actionable insights from their sales data but existing analytics tools are either too complex or too expensive.',
    approach: 'Built a comprehensive analytics dashboard using React with Recharts for data visualization. Implemented real-time data streaming with Server-Sent Events and aggregation pipelines in MongoDB for efficient data processing.',
    techStack: ['React', 'TypeScript', 'Recharts', 'Node.js', 'MongoDB', 'SSE', 'CSS Modules'],
    features: [
      'Real-time sales and revenue tracking',
      'Interactive charts with drill-down capabilities',
      'Customer segmentation analysis',
      'Inventory management alerts',
      'Custom date range filtering',
      'Exportable reports with charts',
      'Role-based access control'
    ],
    outcome: 'Deployed for 3 pilot e-commerce stores, processing 50K+ daily transactions with real-time visualization under 200ms latency.',
    challenges: 'Optimizing MongoDB aggregation pipelines for complex multi-dimensional queries on large datasets. Implemented materialized views and strategic indexing to reduce query times by 80%.',
    category: 'Full-Stack',
    thumbnail: '',
    images: [],
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '5',
    slug: 'weather-command-center',
    title: 'Weather Command Center',
    shortDescription: 'Real-time weather monitoring app with interactive maps, alerts, and 7-day forecasts.',
    problem: 'Weather applications often present data in a confusing, cluttered manner without actionable insights for daily planning.',
    approach: 'Designed a clean, HUD-inspired weather application using React with Mapbox GL for interactive weather maps. Integrated OpenWeatherMap API and built a custom caching layer to minimize API calls.',
    techStack: ['React', 'Mapbox GL', 'OpenWeatherMap API', 'Node.js', 'Redis', 'CSS3', 'PWA'],
    features: [
      'Interactive weather maps with radar overlay',
      '7-day and hourly forecasts',
      'Severe weather alerts and notifications',
      'Location-based auto-detection',
      'PWA with offline support',
      'Air quality index monitoring',
      'Customizable dashboard widgets'
    ],
    outcome: 'Built a PWA with offline capability, achieving sub-2s load times on 3G networks. Featured clean data visualization praised in peer code reviews.',
    challenges: 'Implementing efficient caching strategies for weather data with varying freshness requirements. Built a tiered cache system with Redis and in-memory cache with configurable TTLs per data type.',
    category: 'Frontend',
    thumbnail: '',
    images: [],
    githubUrl: 'https://github.com/nikhilsahani',
    featured: false,
  },
];
