import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm/ContactForm';
import styles from './Contact.module.css';

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function Contact() {
    return (
        <main className={styles.contact}>
            <div className={styles.contactInner}>
                <motion.div {...fadeUp}>
                    <p className="section-subtitle">// Open Channel</p>
                    <h1 className="section-title">Contact</h1>
                </motion.div>

                <div className={styles.grid}>
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <p className={styles.infoText}>
                            Ready to collaborate on your next mission? Reach out through the comm channels below
                            or use the secure form. I typically respond within 24 hours.
                        </p>

                        <div className={styles.channels}>
                            <a
                                href="mailto:nikhilsahani@example.com"
                                className={styles.channelItem}
                                aria-label="Send email"
                            >
                                <span className={styles.channelIcon} aria-hidden="true">✉</span>
                                <div>
                                    <div className={styles.channelLabel}>Email</div>
                                    <div className={styles.channelValue}>nikhilsahani@example.com</div>
                                </div>
                            </a>

                            <a
                                href="https://github.com/nikhilsahani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.channelItem}
                                aria-label="GitHub profile"
                            >
                                <span className={styles.channelIcon} aria-hidden="true">⌨</span>
                                <div>
                                    <div className={styles.channelLabel}>GitHub</div>
                                    <div className={styles.channelValue}>github.com/nikhilsahani</div>
                                </div>
                            </a>

                            <a
                                href="https://linkedin.com/in/nikhilsahani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.channelItem}
                                aria-label="LinkedIn profile"
                            >
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
