import { motion } from 'framer-motion';
import {
    personalInfo,
    summary,
    experience,
    education,
    certifications,
} from '../../data/resume';
import { skillCategories } from '../../data/skills';
import styles from './Resume.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function Resume() {
    return (
        <main className={styles.resume}>
            <div className={styles.resumeInner}>
                <motion.div className={styles.header} {...fadeUp}>
                    <div>
                        <p className="section-subtitle">// Dossier</p>
                        <h1 className="section-title">Resume</h1>
                    </div>
                    <a href="/resume.pdf" download className="btn btn-primary">
                        ↓ Download PDF
                    </a>
                </motion.div>

                {/* Resume Card */}
                <motion.div className={styles.resumeCard} {...fadeUp}>
                    {/* Header */}
                    <h2 className={styles.resumeName}>{personalInfo.name}</h2>
                    <p className={styles.resumeTitle}>{personalInfo.title}</p>
                    <div className={styles.resumeContact}>
                        <span>📍 {personalInfo.location}</span>
                        <a href={`mailto:${personalInfo.email}`}>✉ {personalInfo.email}</a>
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </div>

                    <hr className={styles.sectionDivider} />

                    {/* Summary */}
                    <h3 className={styles.resumeSectionTitle}>Summary</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                        {summary}
                    </p>

                    <hr className={styles.sectionDivider} />

                    {/* Experience */}
                    <h3 className={styles.resumeSectionTitle}>Experience</h3>
                    {experience.map((exp, i) => (
                        <div key={i} className={styles.expItem}>
                            <div className={styles.expHeader}>
                                <div>
                                    <div className={styles.expTitle}>{exp.title}</div>
                                    <div className={styles.expCompany}>
                                        {exp.company} — {exp.location}
                                    </div>
                                </div>
                                <span className={styles.expPeriod}>{exp.period}</span>
                            </div>
                            <ul className={styles.expList}>
                                {exp.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <hr className={styles.sectionDivider} />

                    {/* Education */}
                    <h3 className={styles.resumeSectionTitle}>Education</h3>
                    {education.map((edu, i) => (
                        <div key={i} className={styles.expItem}>
                            <div className={styles.expHeader}>
                                <div>
                                    <div className={styles.expTitle}>{edu.degree}</div>
                                    <div className={styles.expCompany}>
                                        {edu.institution} — {edu.location}
                                    </div>
                                </div>
                                <span className={styles.expPeriod}>{edu.period}</span>
                            </div>
                            {edu.gpa && (
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-green)', marginTop: '0.25rem' }}>
                                    GPA: {edu.gpa}
                                </p>
                            )}
                        </div>
                    ))}

                    <hr className={styles.sectionDivider} />

                    {/* Skills */}
                    <h3 className={styles.resumeSectionTitle}>Technical Skills</h3>
                    {skillCategories.slice(0, 3).map(cat => (
                        <div key={cat.category} style={{ marginBottom: '0.75rem' }}>
                            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', color: 'var(--text-heading)', textTransform: 'uppercase' as const }}>
                                {cat.category}:{' '}
                            </span>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                                {cat.skills.map(s => s.name).join(' · ')}
                            </span>
                        </div>
                    ))}

                    <hr className={styles.sectionDivider} />

                    {/* Certifications */}
                    <h3 className={styles.resumeSectionTitle}>Certifications</h3>
                    <div className={styles.certGrid}>
                        {certifications.map((cert, i) => (
                            <div key={i} className={styles.certItem}>
                                <div className={styles.certName}>{cert.name}</div>
                                <div className={styles.certIssuer}>{cert.issuer}</div>
                                <div className={styles.certDate}>{cert.date}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
