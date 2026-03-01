import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import styles from './ProjectDetail.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
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
                            ← Return to Archive
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.detail}>
            <div className={styles.detailInner}>
                <Link to="/projects" className={styles.backLink}>← Back to Missions</Link>

                {/* Hero */}
                <motion.div className={styles.heroSection} {...fadeUp}>
                    <span className={styles.category}>{project.category}</span>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.shortDesc}>{project.shortDescription}</p>

                    <div className={styles.techTags}>
                        {project.techStack.map(tech => (
                            <span key={tech} className="tag">{tech}</span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                GitHub →
                            </a>
                        )}
                        {project.liveUrl && project.liveUrl !== '#' && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Live Demo ▶
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Problem */}
                <motion.div
                    className={styles.caseSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className={styles.caseSectionLabel}>// Intel Report</span>
                    <h2 className={styles.caseSectionTitle}>The Problem</h2>
                    <p className={styles.caseSectionText}>{project.problem}</p>
                </motion.div>

                {/* Approach */}
                <motion.div
                    className={styles.caseSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <span className={styles.caseSectionLabel}>// Strategy</span>
                    <h2 className={styles.caseSectionTitle}>The Approach</h2>
                    <p className={styles.caseSectionText}>{project.approach}</p>
                </motion.div>

                {/* Features */}
                <motion.div
                    className={styles.caseSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <span className={styles.caseSectionLabel}>// Capabilities</span>
                    <h2 className={styles.caseSectionTitle}>Key Features</h2>
                    <ul className={styles.featureList}>
                        {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Outcome */}
                <motion.div
                    className={styles.caseSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <span className={styles.caseSectionLabel}>// Mission Report</span>
                    <h2 className={styles.caseSectionTitle}>Outcome</h2>
                    <p className={styles.caseSectionText}>{project.outcome}</p>
                </motion.div>

                {/* Challenges */}
                <motion.div
                    className={styles.caseSection}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span className={styles.caseSectionLabel}>// Field Notes</span>
                    <h2 className={styles.caseSectionTitle}>Challenges & Solutions</h2>
                    <p className={styles.caseSectionText}>{project.challenges}</p>
                </motion.div>
            </div>
        </main>
    );
}
