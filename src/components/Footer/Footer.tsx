import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} role="contentinfo" aria-label="Site footer">
            <div className={styles.footerInner}>
                <span className={styles.footerBrand}>
                    Nikhil<span className={styles.footerAccent}>.dev</span>
                </span>

                {/* Internal navigation links for SEO & usability */}
                <nav aria-label="Footer navigation">
                    <ul className={styles.footerLinks}>
                        <li><a href="#mission" className={styles.footerLink}>Home</a></li>
                        <li><a href="#intel" className={styles.footerLink}>About</a></li>
                        <li><a href="#loadout" className={styles.footerLink}>Projects</a></li>
                        <li><a href="#dossier" className={styles.footerLink}>Resume</a></li>
                        <li><a href="#comms" className={styles.footerLink}>Contact</a></li>
                    </ul>
                </nav>

                {/* External / social links */}
                <ul className={styles.footerLinks}>
                    <li><a href="https://github.com/Nikhilsahani007" target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="Nikhil Sahani on GitHub">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/nikhil-sahani-o07/" target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="Nikhil Sahani on LinkedIn">LinkedIn</a></li>
                    <li><a href="mailto:nikhils63041@gmail.com" className={styles.footerLink} aria-label="Email Nikhil Sahani">Email</a></li>
                </ul>
            </div>

            <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 var(--container-padding)' }}>
                <p className={styles.copyright}>
                    © {year} Nikhil Sahani — Software Developer // Built with React + TypeScript
                </p>
            </div>
        </footer>
    );
}
