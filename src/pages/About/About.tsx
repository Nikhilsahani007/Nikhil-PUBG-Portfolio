import { motion } from 'framer-motion';
import MetaTags from '../../components/MetaTags/MetaTags';
import SkillBar from '../../components/SkillBar/SkillBar';
import { skillCategories } from '../../data/skills';
import { summary, experience, education, personalInfo } from '../../data/resume';
import styles from './About.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
};

export default function About() {
    return (
        <main className={styles.intel}>
            <MetaTags
                title="About Nikhil Sahani | MERN & Java Backend Developer"
                description="Nikhil Sahani — Full Stack Developer, Founder of NS SiteCraft Solutions, and intern at Zithara.ai. Expert in MERN stack, Java backend, REST APIs, and freelance web development."
                keywords="Nikhil Sahani About, Full Stack Developer Bio, MERN Developer India, Java Backend Engineer, NS SiteCraft Solutions Founder, Zithara.ai Intern"
                canonical="https://nikhilsahani.dev/about"
                ogType="profile"
            />
            <div className={styles.intelInner}>
                <motion.div {...fadeUp}>
                    <span className={styles.classifiedStamp}>Classified</span>
                    <p className="section-label">Intel / Background</p>
                    <h1 className="section-title">Operator Dossier</h1>
                </motion.div>

                {/* Dossier Card */}
                <motion.div
                    className={styles.dossier}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className={styles.dossierHeader}>
                        <div className={styles.avatar} aria-hidden="true">NS</div>
                        <div className={styles.nameBlock}>
                            <h2>{personalInfo.name}</h2>
                            <p>{personalInfo.title} · {personalInfo.subtitle}</p>
                        </div>
                    </div>

                    {/* Background */}
                    <div className={styles.dossierSection}>
                        <h3 className={styles.dossierSectionTitle}>Background</h3>
                        <p className={styles.bioText}>{summary}</p>
                    </div>

                    {/* Deployments */}
                    <div className={styles.dossierSection}>
                        <h3 className={styles.dossierSectionTitle}>Field Deployments</h3>
                        <div className={styles.deploymentsGrid}>
                            {experience.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    className={styles.deploymentCard}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                    <div className={styles.deploymentHeader}>
                                        <div>
                                            <div className={styles.deploymentTitle}>{exp.title}</div>
                                            <div className={styles.deploymentCompany}>@ {exp.company} — {exp.location}</div>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <span className={styles.deploymentClassification}>{exp.classification}</span>
                                            <div className={styles.deploymentPeriod}>{exp.period}</div>
                                        </div>
                                    </div>
                                    <p className={styles.deploymentDesc}>{exp.description}</p>
                                    <ul className={styles.deploymentList}>
                                        {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Capabilities / Skills */}
                <motion.div {...fadeUp}>
                    <p className="section-label">Arsenal / Capabilities</p>
                    <h2 className="section-title">Technical Skills</h2>
                </motion.div>

                <div className={styles.skillsGrid} style={{ marginTop: 'var(--space-xl)' }}>
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.category}
                            className={styles.skillCard}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: catIdx * 0.08 }}
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

                {/* Education */}
                <div className="section">
                    <motion.div {...fadeUp}>
                        <p className="section-label">Training / Education</p>
                        <h2 className="section-title">Training Grounds</h2>
                    </motion.div>

                    <div className={styles.eduGrid} style={{ marginTop: 'var(--space-xl)' }}>
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                className={styles.eduCard}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <div className={styles.eduDegree}>{edu.degree}</div>
                                <div className={styles.eduSchool}>{edu.institution}</div>
                                <div className={styles.eduPeriod}>{edu.period} — {edu.location}</div>
                                {edu.gpa && <div className={styles.eduGpa}>GPA: {edu.gpa}</div>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
