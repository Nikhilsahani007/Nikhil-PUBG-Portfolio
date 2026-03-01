import { motion } from 'framer-motion';
import MetaTags from '../../components/MetaTags/MetaTags';
import ContactForm from '../../components/ContactForm/ContactForm';
import { personalInfo } from '../../data/resume';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.contact}>
            <MetaTags
                title="Contact Nikhil Sahani | Hire Full Stack Developer"
                description="Get in touch with Nikhil Sahani — Full Stack MERN and Java Developer available for freelance projects, full-time roles, and collaboration. Based in India, working remotely."
                keywords="Hire Full Stack Developer India, Hire MERN Developer, Freelance React Developer India, Contact Nikhil Sahani, Full Stack Developer for Hire"
                canonical="https://nikhilsahani.dev/contact"
            />
            <div className={styles.contactInner}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Open Channel</p>
                    <h1 className="section-title">Comms</h1>
                </motion.div>

                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <ContactForm />
                    </motion.div>

                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className={styles.infoText}>
                            Ready to collaborate on a mission? Open a comms channel below
                            or use the secure form. Typical response time: 24 hours.
                        </p>

                        <div className={styles.channels}>
                            <a href={`mailto:${personalInfo.email}`} className={styles.channelItem} aria-label="Email">
                                <span className={styles.channelIcon} aria-hidden="true">✉</span>
                                <div>
                                    <div className={styles.channelLabel}>Email</div>
                                    <div className={styles.channelValue}>{personalInfo.email}</div>
                                </div>
                            </a>
                            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.channelItem} aria-label="GitHub">
                                <span className={styles.channelIcon} aria-hidden="true">⌨</span>
                                <div>
                                    <div className={styles.channelLabel}>GitHub</div>
                                    <div className={styles.channelValue}>github.com/nikhilsahani</div>
                                </div>
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.channelItem} aria-label="LinkedIn">
                                <span className={styles.channelIcon} aria-hidden="true">🔗</span>
                                <div>
                                    <div className={styles.channelLabel}>LinkedIn</div>
                                    <div className={styles.channelValue}>linkedin.com/in/nikhilsahani</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
