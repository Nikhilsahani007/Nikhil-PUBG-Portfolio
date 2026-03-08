import { useEffect, useRef } from 'react';
import { skillCategories } from '../../data/skills';
import styles from './LoadoutSection.module.css';

const SKILL_ICONS: Record<string, string> = {
    'React / Next.js': '⚛', 'TypeScript': 'TS', 'JavaScript (ES6+)': 'JS',
    'HTML5 & CSS3': '⊞', 'Three.js / R3F': '◈', 'Framer Motion': '◎',
    'Java / Servlets': '☕', 'Node.js / Express': '⬡', 'Python / FastAPI': '🐍',
    'REST API Design': '⇌', 'MongoDB': '⊃', 'MySQL / PostgreSQL': '▤',
    'Git & GitHub': '⎇', 'Docker': '◧', 'Linux / CLI': '❯',
    'Postman / Swagger': '◉', 'CI/CD Pipelines': '⟳', 'VS Code Mastery': '◇',
    'Problem Solving': '◆', 'System Design': '⬡', 'Team Leadership': '◎',
    'Agile / Scrum': '↻', 'Technical Writing': '✎', 'Quick Adaptation': '⚡',
};

const CATEGORY_COLORS: Record<string, string> = {
    'Frontend Arsenal': 'var(--cyan)',
    'Backend Systems': 'var(--gold)',
    'DevOps & Tools': 'var(--green)',
    'Tactical Skills': 'var(--red-orange)',
};

export default function LoadoutSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 80);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="loadout" className={`section ${styles.loadout}`} ref={sectionRef}>
            <div className="container">
                <div className={`section-header fade-in-up`}>
                    <p className="section-label">▸ SECTOR 03</p>
                    <h2 className="section-title">Loadout</h2>
                </div>

                <div className={styles.categoriesGrid}>
                    {skillCategories.map((cat, ci) => {
                        const color = CATEGORY_COLORS[cat.category] || 'var(--cyan)';
                        return (
                            <div key={ci} className={`hud-card ${styles.categoryCard} fade-in-up`}>
                                <div className={styles.catHeader}>
                                    <span className={styles.catIcon}>{cat.icon}</span>
                                    <span className={styles.catName} style={{ color }}>{cat.category}</span>
                                    <span className={styles.catCount}>{cat.skills.length} TOOLS</span>
                                </div>
                                <div className={styles.catDivider} style={{ background: color }} />
                                <div className={styles.skillGrid}>
                                    {cat.skills.map((skill, si) => (
                                        <div key={si} className={styles.skillChip} style={{ '--chip-color': color } as React.CSSProperties}>
                                            <span className={styles.chipIcon}>
                                                {SKILL_ICONS[skill.name] ?? skill.name.slice(0, 2)}
                                            </span>
                                            <span className={styles.chipName}>{skill.name}</span>
                                            <div className={styles.chipBar}>
                                                <div
                                                    className={styles.chipBarFill}
                                                    style={{ width: `${skill.level}%`, background: color }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
