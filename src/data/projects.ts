export interface Project {
  id: string;
  slug: string;
  slotNumber: string;
  title: string;
  type: string;
  shortDescription: string;
  problem: string;
  approach: string;
  techStack: string[];
  features: string[];
  outcome: string;
  challenges: string;
  category: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary';
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ai-customer-query-assistant',
    slotNumber: '01',
    title: 'AI Customer Query Assistant',
    type: 'Tactical AI System',
    shortDescription: 'Intelligent chatbot that processes customer queries using NLP and provides instant, context-aware responses with learning capabilities.',
    problem: 'Customer support teams overwhelmed by repetitive queries, leading to slow response times and poor customer satisfaction scores.',
    approach: 'Built an AI-powered assistant using NLP models integrated with a React frontend. The system classifies queries, retrieves relevant knowledge base articles, and generates contextual responses. Implemented feedback loops for continuous model improvement.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'NLP', 'Socket.IO'],
    features: [
      'Real-time query classification and routing',
      'Context-aware response generation',
      'Admin dashboard for training data management',
      'Multi-language support',
      'Analytics dashboard with response quality metrics',
      'Fallback to human agent with conversation handoff',
    ],
    outcome: 'Reduced average query resolution time by 60%. Handled 70% of customer queries autonomously with 92% satisfaction rate.',
    challenges: 'Training the NLP model with limited domain-specific data. Implemented transfer learning and active learning pipelines to iteratively improve accuracy from 75% to 92%.',
    category: 'AI / Full-Stack',
    rarity: 'Legendary',
    thumbnail: '',
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '2',
    slug: 'online-food-ordering-system',
    slotNumber: '02',
    title: 'Online Food Ordering System',
    type: 'Commerce Platform',
    shortDescription: 'Full-featured food ordering platform with real-time order tracking, restaurant management, and secure payment processing.',
    problem: 'Local restaurants lacked affordable digital ordering solutions, losing business to aggregator platforms that charge high commissions.',
    approach: 'Developed a Java-based backend with JDBC for database operations and a clean MVC architecture. Created a responsive frontend with dynamic menu rendering, cart management, and order lifecycle tracking.',
    techStack: ['Java', 'JDBC', 'MySQL', 'Servlets', 'JSP', 'HTML/CSS', 'JavaScript'],
    features: [
      'Dynamic restaurant menu management',
      'Real-time order status tracking',
      'Shopping cart with quantity controls',
      'Secure user authentication',
      'Admin panel for order management',
      'Order history and re-ordering',
    ],
    outcome: 'Deployed for 2 local restaurants, processing 200+ orders in the first month with zero downtime.',
    challenges: 'Implementing real-time order status updates using Java Servlets. Built a long-polling mechanism for live updates without WebSocket overhead.',
    category: 'Java Backend',
    rarity: 'Epic',
    thumbnail: '',
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '3',
    slug: 'cyberattack-detection-iiot',
    slotNumber: '03',
    title: 'Cyberattack Detection — IIoT',
    type: 'Security Protocol',
    shortDescription: 'Machine learning-based intrusion detection system for Industrial IoT networks that identifies and classifies cyber threats in real-time.',
    problem: 'Industrial IoT systems are increasingly targeted by sophisticated cyberattacks, and traditional signature-based detection fails against zero-day threats.',
    approach: 'Developed an ML-based anomaly detection pipeline using Python. Trained multiple classifiers (Random Forest, XGBoost, Neural Networks) on the CICIDS dataset. Implemented feature engineering specific to IIoT traffic patterns.',
    techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy', 'Matplotlib'],
    features: [
      'Real-time network traffic analysis',
      'Multi-class attack classification (DDoS, Brute Force, Infiltration)',
      'Anomaly detection with adaptive thresholds',
      'Visualization dashboard for threat monitoring',
      'Automated alert generation',
      'Model retraining pipeline',
    ],
    outcome: 'Achieved 96.5% detection accuracy with < 2% false positive rate. Research paper-ready analysis with comprehensive evaluation metrics.',
    challenges: 'Handling severely imbalanced datasets where attack samples were < 5% of total traffic. Applied SMOTE oversampling and cost-sensitive learning to balance precision and recall.',
    category: 'ML / Security',
    rarity: 'Legendary',
    thumbnail: '',
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '4',
    slug: 'ns-sitecraft-solutions',
    slotNumber: '04',
    title: 'NS SiteCraft Solutions',
    type: 'SaaS Command Center',
    shortDescription: 'Production-grade SaaS website builder with admin panel, dynamic pricing, lead management, and Dockerized deployment.',
    problem: 'Small businesses need affordable, professional web presence without the complexity of enterprise website builders.',
    approach: 'Built a full-stack SaaS platform with layered architecture: React frontend with premium animations, Express.js REST API, MongoDB database. Implemented JWT authentication, Swagger docs, and Docker support.',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'JWT'],
    features: [
      'Admin dashboard with JWT authentication',
      'Lead management with status tracking',
      'Dynamic content and pricing management',
      'Scroll-triggered animations with Framer Motion',
      'Swagger API documentation',
      'Docker containerization',
      'Health check endpoints',
    ],
    outcome: 'Production-deployed SaaS platform with 95+ Lighthouse score. Complete API docs and Docker support for one-command deployment.',
    challenges: 'Maintaining type safety across the full stack while keeping the development velocity high. Created shared TypeScript interfaces and Zod validation schemas.',
    category: 'Full-Stack',
    rarity: 'Epic',
    thumbnail: '',
    liveUrl: '#',
    githubUrl: 'https://github.com/nikhilsahani',
    featured: true,
  },
  {
    id: '5',
    slug: 'realtime-tactical-comms',
    slotNumber: '05',
    title: 'Real-Time Tactical Comms',
    type: 'Communications Platform',
    shortDescription: 'WebSocket-powered real-time messaging application with channels, typing indicators, and message persistence.',
    problem: 'Teams needed a lightweight, self-hosted chat solution without the overhead and privacy concerns of third-party platforms.',
    approach: 'Developed using Socket.IO for real-time bidirectional communication with React frontend and Node.js backend. Implemented Redis for session management and MongoDB for message persistence.',
    techStack: ['React', 'Socket.IO', 'Node.js', 'Express.js', 'MongoDB', 'Redis'],
    features: [
      'Real-time messaging with WebSocket',
      'Channel creation and management',
      'Typing indicators and online presence',
      'Message persistence and search',
      'File sharing with drag-and-drop',
      'Mobile-responsive design',
    ],
    outcome: 'Handles 100+ concurrent connections with sub-100ms message delivery. Deployed as a self-hosted solution.',
    challenges: 'WebSocket connection lifecycle management across network changes. Implemented exponential backoff reconnection logic.',
    category: 'Backend',
    rarity: 'Rare',
    thumbnail: '',
    githubUrl: 'https://github.com/nikhilsahani',
    featured: false,
  },
];
