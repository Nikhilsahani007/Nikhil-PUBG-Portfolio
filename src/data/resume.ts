export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlights: string[];
    classification: string;
}

export interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    gpa?: string;
    highlights: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    date: string;
}

export const personalInfo = {
    name: 'Nikhil Sahani',
    callsign: 'Nikhil_S',
    rank: 'Full Stack Vanguard',
    title: 'Software Developer',
    subtitle: 'Founder — NS SiteCraft Solutions',
    tagline: 'MERN + Java Backend Developer',
    email: 'nikhils63041@gmail.com',
    phone: '+91 9390969461',
    location: 'India',
    github: 'https://github.com/nikhilsahani007',
    linkedin: 'https://www.linkedin.com/in/nikhil-sahani-o07/',
    status: 'ONLINE',
};

export const summary =
    'Software Developer and founder of NS SiteCraft Solutions with expertise in MERN stack and Java backend development. Proven track record building production-grade SaaS platforms, AI-powered systems, and secure IoT applications. Currently pursuing B.Tech in Computer Science at Jawaharlal Nehru Technological University (JNTU), Hyderabad, with internship experience at Zithara.ai.';


export const experience: Experience[] = [
    {
        title: 'Software Developer Intern',
        company: 'Zithara.ai',
        location: 'Remote',
        period: 'Jan 2025 — Jun 2025',
        classification: 'FIELD DEPLOYMENT',
        description: 'Contributed to the development of an AI-powered customer engagement platform, focusing on frontend feature implementation and performance optimization.',
        highlights: [
            'Built responsive React components improving user engagement by 25%',
            'Implemented Redux Toolkit state management for complex data flows',
            'Integrated RESTful APIs and WebSocket connections with the backend',
            'Achieved 80%+ code coverage with Jest and React Testing Library',
            'Participated in Agile sprints with daily standups and retrospectives',
        ],
    },
    {
        title: 'Founder & Lead Developer',
        company: 'NS SiteCraft Solutions',
        location: 'India',
        period: 'Jan 2025 — Present',
        classification: 'ACTIVE OPERATION',
        description: 'Founded a SaaS platform providing affordable, production-grade websites for small businesses. Handle full-stack development, client management, and deployment.',
        highlights: [
            'Designed and built production-grade SaaS platform from scratch',
            'Implemented admin panel, lead management, and dynamic pricing',
            'Achieved 95+ Lighthouse performance scores',
            'Dockerized deployment with CI/CD pipeline',
            'Managing client relationships and project deliveries',
        ],
    },
    {
        title: 'Freelance Developer',
        company: 'Independent',
        location: 'Remote',
        period: '2024 — Present',
        classification: 'ONGOING',
        description: 'Taking on freelance web development projects, building custom solutions for clients using modern tech stacks.',
        highlights: [
            'Delivered 5+ client projects on time and within budget',
            'Specialized in React frontends and Node.js backends',
            'Built custom e-commerce and portfolio solutions',
            'Maintained long-term client relationships',
        ],
    },
];

export const education: Education[] = [
    {
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'Jawaharlal Nehru Technological University (JNTU)',
        location: 'Hyderabad, Telangana, India',
        period: '2022 — 2026',
        gpa: '7.5 / 10',
        highlights: [
            'Data Structures & Algorithms',
            'Database Management Systems',
            'Operating Systems',
            'Software Engineering',
            'Machine Learning',
        ],
    },
    {
        degree: 'Higher Secondary (XII)',
        institution: 'Central Board of Secondary Education',
        location: 'India',
        period: '2020 — 2022',
        highlights: ['Science Stream (PCM)', '85% aggregate'],
    },
];

export const certifications: Certification[] = [
    { name: 'Full-Stack Web Development', issuer: 'Udemy', date: '2024' },
    { name: 'React — The Complete Guide', issuer: 'Udemy', date: '2024' },
    { name: 'DSA in Java', issuer: 'GeeksforGeeks', date: '2023' },
];

export const missionStats = {
    projectsDeployed: 8,
    systemsBuilt: 12,
    apisDeveloped: 15,
    clientsServed: 5,
};
