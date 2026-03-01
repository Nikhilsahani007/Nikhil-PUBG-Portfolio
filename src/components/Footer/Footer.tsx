import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.footerInner}>
                <div className={styles.footerBrand}>
                    <span className={styles.footerLogo}>
                        Nikhil<span className={styles.footerAccent}>.dev</span>
                    </span>
                </div>

                <ul className={styles.footerLinks}>
                    <li>
                        <a
                            href="https://github.com/nikhilsahani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerLink}
                            aria-label="GitHub profile"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://linkedin.com/in/nikhilsahani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footerLink}
                            aria-label="LinkedIn profile"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a
                            href="mailto:nikhilsahani@example.com"
                            className={styles.footerLink}
                            aria-label="Send email"
                        >
                            Email
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.footerInner}>
                <div className={styles.divider} />
            </div>

            <div className={styles.footerInner}>
                <p className={styles.copyright}>
                    © {year} Nikhil Sahani // All systems operational // Built with React + TypeScript
                </p>
            </div>
        </footer>
    );
}
