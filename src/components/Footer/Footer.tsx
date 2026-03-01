import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.footerInner}>
                <span className={styles.footerBrand}>
                    Nikhil<span className={styles.footerAccent}>.dev</span>
                </span>

                <ul className={styles.footerLinks}>
                    <li><a href="https://github.com/nikhilsahani" target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="GitHub">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/nikhilsahani" target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="LinkedIn">LinkedIn</a></li>
                    <li><a href="mailto:nikhilsahani@example.com" className={styles.footerLink} aria-label="Email">Email</a></li>
                </ul>
            </div>

            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
                <p className={styles.copyright}>
                    © {year} Nikhil Sahani // All systems operational // Built with React + TypeScript + Three.js
                </p>
            </div>
        </footer>
    );
}
