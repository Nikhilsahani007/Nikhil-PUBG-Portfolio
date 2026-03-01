export interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    highlights: string[];
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
    credentialUrl?: string;
}

export const personalInfo = {
    name: 'Nikhil Sahani',
    title: 'Full-Stack Developer',
    tagline: 'Building production-grade web applications with modern technologies',
    email: 'nikhilsahani@example.com',
    phone: '+91-XXXXXXXXXX',
    location: 'India',
    github: 'https://github.com/nikhilsahani',
    linkedin: 'https://linkedin.com/in/nikhilsahani',
    portfolio: 'https://nikhilsahani.dev',
};

export const summary =
    'Motivated Full-Stack Developer with hands-on experience in building scalable web applications using React, Node.js, and TypeScript. Proven ability to deliver production-ready solutions with clean architecture, comprehensive testing, and modern DevOps practices. Currently pursuing B.Tech in Computer Science at Lovely Professional University.';

export const experience: Experience[] = [
    {
        title: 'Frontend Developer Intern',
        company: 'Zithara.ai',
        location: 'Remote',
        period: 'Jun 2025 – Aug 2025',
        description:
            'Contributed to the development of AI-powered customer engagement platform, focusing on frontend feature implementation and UI optimization.',
        highlights: [
            'Developed responsive React components for the customer dashboard, improving user engagement by 25%',
            'Implemented state management with Redux Toolkit for complex data flows',
            'Collaborated with the backend team to integrate RESTful APIs and WebSocket connections',
            'Wrote unit tests using Jest and React Testing Library, achieving 80%+ code coverage',
            'Participated in daily standups and bi-weekly sprint reviews in an Agile environment',
        ],
    },
];

export const education: Education[] = [
    {
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'Lovely Professional University',
        location: 'Punjab, India',
        period: '2022 – 2026',
        gpa: '7.5 / 10',
        highlights: [
            'Data Structures & Algorithms',
            'Database Management Systems',
            'Operating Systems',
            'Software Engineering',
            'Machine Learning Fundamentals',
        ],
    },
    {
        degree: 'Higher Secondary (XII)',
        institution: 'Central Board of Secondary Education',
        location: 'India',
        period: '2020 – 2022',
        highlights: ['Science Stream (PCM)', 'Scored 85% aggregate'],
    },
];

export const certifications: Certification[] = [
    {
        name: 'Full-Stack Web Development',
        issuer: 'Udemy',
        date: '2024',
    },
    {
        name: 'React – The Complete Guide',
        issuer: 'Udemy',
        date: '2024',
    },
    {
        name: 'Data Structures & Algorithms in Java',
        issuer: 'GeeksforGeeks',
        date: '2023',
    },
];
