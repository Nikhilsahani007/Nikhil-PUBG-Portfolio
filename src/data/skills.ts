export interface OperatorStat {
    name: string;
    level: number;
    maxLevel: number;
    color: string;
}

export interface SkillCategory {
    category: string;
    icon: string;
    skills: { name: string; level: number }[];
}

export const operatorStats: OperatorStat[] = [
    { name: 'React Mastery', level: 90, maxLevel: 100, color: '#00f0ff' },
    { name: 'Java Backend', level: 88, maxLevel: 100, color: '#f0a000' },
    { name: 'Node & APIs', level: 85, maxLevel: 100, color: '#00ff88' },
    { name: 'Database Ops', level: 80, maxLevel: 100, color: '#ff6644' },
];

export const skillCategories: SkillCategory[] = [
    {
        category: 'Frontend Arsenal',
        icon: '🎯',
        skills: [
            { name: 'React / Next.js', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript (ES6+)', level: 92 },
            { name: 'HTML5 & CSS3', level: 95 },
            { name: 'Three.js / R3F', level: 70 },
            { name: 'Framer Motion', level: 80 },
        ],
    },
    {
        category: 'Backend Systems',
        icon: '⚙️',
        skills: [
            { name: 'Java / Servlets', level: 88 },
            { name: 'Node.js / Express', level: 85 },
            { name: 'Python / FastAPI', level: 72 },
            { name: 'REST API Design', level: 90 },
            { name: 'MongoDB', level: 82 },
            { name: 'MySQL / PostgreSQL', level: 78 },
        ],
    },
    {
        category: 'DevOps & Tools',
        icon: '🛠️',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'Docker', level: 72 },
            { name: 'Linux / CLI', level: 75 },
            { name: 'Postman / Swagger', level: 85 },
            { name: 'CI/CD Pipelines', level: 65 },
            { name: 'VS Code Mastery', level: 95 },
        ],
    },
    {
        category: 'Tactical Skills',
        icon: '🧠',
        skills: [
            { name: 'Problem Solving', level: 92 },
            { name: 'System Design', level: 78 },
            { name: 'Team Leadership', level: 85 },
            { name: 'Agile / Scrum', level: 80 },
            { name: 'Technical Writing', level: 75 },
            { name: 'Quick Adaptation', level: 95 },
        ],
    },
];
