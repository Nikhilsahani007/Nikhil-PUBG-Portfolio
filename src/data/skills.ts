export interface SkillCategory {
    category: string;
    icon: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level: number; // 0–100
}

export const skillCategories: SkillCategory[] = [
    {
        category: 'Frontend',
        icon: '🎯',
        skills: [
            { name: 'React / React Native', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'JavaScript (ES6+)', level: 92 },
            { name: 'HTML5 & CSS3', level: 95 },
            { name: 'Framer Motion', level: 80 },
            { name: 'Next.js', level: 75 },
        ],
    },
    {
        category: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 88 },
            { name: 'Express.js', level: 85 },
            { name: 'Python / FastAPI', level: 70 },
            { name: 'REST API Design', level: 90 },
            { name: 'MongoDB', level: 82 },
            { name: 'PostgreSQL', level: 72 },
        ],
    },
    {
        category: 'Tools & DevOps',
        icon: '🛠️',
        skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'Docker', level: 70 },
            { name: 'VS Code', level: 95 },
            { name: 'Postman / Swagger', level: 85 },
            { name: 'Linux / CLI', level: 75 },
            { name: 'CI/CD (GitHub Actions)', level: 65 },
        ],
    },
    {
        category: 'Soft Skills',
        icon: '🧠',
        skills: [
            { name: 'Problem Solving', level: 92 },
            { name: 'Team Collaboration', level: 88 },
            { name: 'Communication', level: 85 },
            { name: 'Agile / Scrum', level: 78 },
            { name: 'Time Management', level: 82 },
            { name: 'Quick Learner', level: 95 },
        ],
    },
];
