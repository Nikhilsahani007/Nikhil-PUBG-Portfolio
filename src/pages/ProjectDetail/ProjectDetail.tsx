import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

const rarityClass: Record<string, string> = {
    Legendary: styles.rarityLegendary,
    Epic: styles.rarityEpic,
    Rare: styles.rarityRare,
    Common: styles.rarityCommon,
};

export default function ProjectDetail() {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return (
            <main className={styles.detail}>
                <div className={styles.detailInner}>
                    <div className={styles.notFound}>
                        <h1 className={styles.notFoundTitle}>Mission Not Found</h1>
                        <p>The requested mission briefing could not be located.</p>
                        <Link to="/projects" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                            ← Return to Loadout
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.detail}>
            <div className={styles.detailInner}>
                <Link to="/projects" className={styles.backLink}>← Back to Loadout</Link>

                <motion.div
                    className={styles.heroSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className={styles.missionMeta}>
                        <span className={styles.slotBadge}>Slot {project.slotNumber}</span>
                        <span className={`${styles.rarityBadge} ${rarityClass[project.rarity] || ''}`}>
                            {project.rarity}
                        </span>
                        <span className={styles.typeBadge}>{project.type}</span>
                    </div>

                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.shortDesc}>{project.shortDescription}</p>

                    <div className={styles.techTags}>
                        {project.techStack.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>

                    <div className={styles.links}>
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                Source Code →
                            </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Live Demo ▶
                            </a>
                        )}
                    </div>
                </motion.div>

                {[
                    { label: '// Intel Report', title: 'The Problem', text: project.problem },
                    { label: '// Strategy', title: 'The Approach', text: project.approach },
                ].map((sec, i) => (
                    <motion.div key={i} className={styles.caseSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                        <span className={styles.caseSectionLabel}>{sec.label}</span>
                        <h2 className={styles.caseSectionTitle}>{sec.title}</h2>
                        <p className={styles.caseSectionText}>{sec.text}</p>
                    </motion.div>
                ))}

                <motion.div className={styles.caseSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.16 }}>
                    <span className={styles.caseSectionLabel}>// Capabilities</span>
                    <h2 className={styles.caseSectionTitle}>Key Features</h2>
                    <ul className={styles.featureList}>
                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                </motion.div>

                {[
                    { label: '// Mission Report', title: 'Outcome', text: project.outcome },
                    { label: '// Field Notes', title: 'Challenges & Solutions', text: project.challenges },
                ].map((sec, i) => (
                    <motion.div key={i} className={styles.caseSection} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.24 + i * 0.08 }}>
                        <span className={styles.caseSectionLabel}>{sec.label}</span>
                        <h2 className={styles.caseSectionTitle}>{sec.title}</h2>
                        <p className={styles.caseSectionText}>{sec.text}</p>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
