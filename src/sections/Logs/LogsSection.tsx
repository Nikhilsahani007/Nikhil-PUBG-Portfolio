import { useEffect, useRef } from 'react';
import { experience, education, certifications } from '../../data/resume';
import styles from './LogsSection.module.css';

// Define colors for each classification
const CLASSIFICATION_COLORS: Record<string, string> = {
    'FIELD DEPLOYMENT': 'var(--cyan)',
    'ACTIVE OPERATION': 'var(--green)',
    'ONGOING': 'var(--gold)',
};

export default function LogsSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 90);
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
        <section id="logs" className={`section ${styles.logs}`} ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in-up">
                    <p className="section-label">▸ SECTOR 06</p>
                    <h2 className="section-title">Logs</h2>
                </div>

                <div className={styles.columns}>
                    {/* EXPERIENCE */}
                    <div className={styles.column}>
                        <p className={styles.columnTitle}>◈ FIELD DEPLOYMENTS</p>
                        <div className={styles.timeline}>
                            {experience.map((exp, i) => {
                                const dotColor = CLASSIFICATION_COLORS[exp.classification] ?? 'var(--cyan)';
                                return (
                                    <div key={i} className={`${styles.timelineItem} fade-in-up`}>
                                        <div className={styles.dot} style={{ background: dotColor, boxShadow: `0 0 8px ${dotColor}` }} />
                                        <div className={`hud-card ${styles.card}`}>
                                            <div className={styles.cardTop}>
                                                <div>
                                                    <h3 className={styles.cardTitle}>{exp.title}</h3>
                                                    <p className={styles.company}>
                                                        <span className={styles.companyName}>{exp.company}</span>
                                                        <span className={styles.separator}>·</span>
                                                        <span className={styles.location}>{exp.location}</span>
                                                    </p>
                                                </div>
                                                <div className={styles.cardMeta}>
                                                    <span className={styles.period}>{exp.period}</span>
                                                    <span
                                                        className={styles.classTag}
                                                        style={{ color: dotColor, borderColor: dotColor }}
                                                    >
                                                        {exp.classification}
                                                    </span>
                                                </div>
                                            </div>
                                            <p className={styles.description}>{exp.description}</p>
                                            <ul className={styles.highlights}>
                                                {exp.highlights.map((h, j) => (
                                                    <li key={j} className={styles.highlight}>
                                                        <span className={styles.hlBullet} style={{ color: dotColor }}>▸</span>
                                                        {h}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* EDUCATION + CERTS */}
                    <div className={styles.column}>
                        <p className={styles.columnTitle}>◉ TRAINING & CERTS</p>
                        <div className={styles.timeline}>
                            {education.map((edu, i) => (
                                <div key={i} className={`${styles.timelineItem} fade-in-up`}>
                                    <div className={styles.dot} style={{ background: 'var(--gold)', boxShadow: '0 0 8px var(--gold-glow)' }} />
                                    <div className={`hud-card ${styles.card}`}>
                                        <div className={styles.cardTop}>
                                            <div>
                                                <h3 className={styles.cardTitle}>{edu.degree}</h3>
                                                <p className={styles.company}>
                                                    <span className={styles.companyName}>{edu.institution}</span>
                                                    <span className={styles.separator}>·</span>
                                                    <span className={styles.location}>{edu.location}</span>
                                                </p>
                                            </div>
                                            <div className={styles.cardMeta}>
                                                <span className={styles.period}>{edu.period}</span>
                                                {edu.gpa && <span className={styles.gpa}>GPA: {edu.gpa}</span>}
                                            </div>
                                        </div>
                                        <div className={styles.eduHighlights}>
                                            {edu.highlights.map((h, j) => (
                                                <span key={j} className={styles.eduTag}>{h}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Certifications */}
                            <div className={`${styles.timelineItem} fade-in-up`}>
                                <div className={styles.dot} style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green-glow)' }} />
                                <div className={`hud-card ${styles.card}`}>
                                    <p className={styles.certTitle}>◆ CERTIFICATIONS</p>
                                    <div className={styles.certList}>
                                        {certifications.map((cert, i) => (
                                            <div key={i} className={styles.certItem}>
                                                <div>
                                                    <p className={styles.certName}>{cert.name}</p>
                                                    <p className={styles.certIssuer}>{cert.issuer}</p>
                                                </div>
                                                <span className={styles.certDate}>{cert.date}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <div className={`${styles.footerCta} fade-in-up`}>
                    <p className={styles.footerLabel}>END OF DOSSIER</p>
                    <p className={styles.footerSub}>Nikhil Sahani · Full Stack Vanguard · {new Date().getFullYear()}</p>
                </div>
            </div>
        </section>
    );
}
