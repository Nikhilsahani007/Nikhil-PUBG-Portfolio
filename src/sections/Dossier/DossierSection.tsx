import { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import styles from './DossierSection.module.css';

const RARITY_COLORS: Record<string, string> = {
    Legendary: 'var(--gold)',
    Epic: 'var(--cyan)',
    Rare: 'var(--green)',
    Common: 'var(--text-muted)',
};

export default function DossierSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="dossier" className={`section ${styles.dossier}`} ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in-up">
                    <p className="section-label">▸ SECTOR 04</p>
                    <h2 className="section-title">Dossier</h2>
                </div>

                <div className={styles.projectsGrid}>
                    {projects.map((project) => {
                        const rarityColor = RARITY_COLORS[project.rarity] ?? 'var(--cyan)';
                        return (
                            <article key={project.id} className={`${styles.card} fade-in-up`}>
                                {/* Corner brackets */}
                                <div className={styles.cornerTL} />
                                <div className={styles.cornerBR} />

                                {/* Header */}
                                <div className={styles.cardHead}>
                                    <div className={styles.headLeft}>
                                        <span className={styles.slotNum}>[ {project.slotNumber} ]</span>
                                        <span className={styles.cardType}>{project.type}</span>
                                    </div>
                                    <span
                                        className={styles.rarityBadge}
                                        style={{ color: rarityColor, borderColor: rarityColor }}
                                    >
                                        ◆ {project.rarity}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDesc}>{project.shortDescription}</p>

                                {/* Tech Stack */}
                                <div className={styles.techTags}>
                                    {project.techStack.slice(0, 5).map(tech => (
                                        <span key={tech} className={styles.techTag}>{tech}</span>
                                    ))}
                                    {project.techStack.length > 5 && (
                                        <span className={styles.techTag}>+{project.techStack.length - 5}</span>
                                    )}
                                </div>

                                {/* Category + Links */}
                                <div className={styles.cardFooter}>
                                    <span className={styles.category}>{project.category}</span>
                                    <div className={styles.links}>
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                                                ⎇ Code
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.linkBtn} ${styles.linkLive}`}>
                                                ▶ Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
