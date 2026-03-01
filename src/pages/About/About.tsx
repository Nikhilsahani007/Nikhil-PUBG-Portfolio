import { motion } from 'framer-motion';
import SkillBar from '../../components/SkillBar/SkillBar';
import { skillCategories } from '../../data/skills';
import { summary, experience, education } from '../../data/resume';
import styles from './About.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function About() {
    return (
        <main className={styles.about}>
            <div className={styles.aboutInner}>
                {/* Intro */}
                <motion.section className={styles.intro} {...fadeUp}>
                    <div className={styles.avatarWrap}>
                        <div className={styles.avatar} aria-hidden="true">NS</div>
                    </div>
                    <div className={styles.bioContent}>
                        <p className="section-subtitle">// Operator Profile</p>
                        <h1 className="section-title">About Me</h1>
                        <p className={styles.bioText}>{summary}</p>
                        <p className={styles.bioText}>
                            Currently pursuing <strong>B.Tech in Computer Science & Engineering</strong> at
                            Lovely Professional University, with hands-on experience from my internship at{' '}
                            <strong className="text-accent">Zithara.ai</strong>.
                        </p>
                    </div>
                </motion.section>

                {/* Skills */}
                <section className={styles.skillsSection}>
                    <motion.div {...fadeUp}>
                        <p className="section-subtitle">// Arsenal</p>
                        <h2 className="section-title">Skills & Expertise</h2>
                    </motion.div>

                    <div className={styles.skillsGrid}>
                        {skillCategories.map((cat, catIdx) => (
                            <motion.div
                                key={cat.category}
                                className={styles.skillCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            >
                                <div className={styles.skillCardHeader}>
                                    <span className={styles.skillCardIcon} aria-hidden="true">{cat.icon}</span>
                                    <h3 className={styles.skillCardTitle}>{cat.category}</h3>
                                </div>
                                {cat.skills.map(skill => (
                                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Experience */}
                <section className={styles.timeline}>
                    <motion.div {...fadeUp}>
                        <p className="section-subtitle">// Deployment History</p>
                        <h2 className="section-title">Experience</h2>
                    </motion.div>

                    {experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            className={styles.timelineCard}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className={styles.timelineHeader}>
                                <div>
                                    <h3 className={styles.timelineTitle}>{exp.title}</h3>
                                    <span className={styles.timelineCompany}>@ {exp.company} — {exp.location}</span>
                                </div>
                                <span className={styles.timelinePeriod}>{exp.period}</span>
                            </div>
                            <p className={styles.timelineDesc}>{exp.description}</p>
                            <ul className={styles.timelineHighlights}>
                                {exp.highlights.map((h, j) => (
                                    <li key={j}>{h}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </section>

                {/* Education */}
                <section className="section">
                    <motion.div {...fadeUp}>
                        <p className="section-subtitle">// Training Grounds</p>
                        <h2 className="section-title">Education</h2>
                    </motion.div>

                    <div className={styles.eduGrid}>
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                className={styles.eduCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <h3 className={styles.eduDegree}>{edu.degree}</h3>
                                <p className={styles.eduSchool}>{edu.institution}</p>
                                <p className={styles.eduPeriod}>{edu.period} — {edu.location}</p>
                                {edu.gpa && <p className={styles.eduGpa}>GPA: {edu.gpa}</p>}
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
