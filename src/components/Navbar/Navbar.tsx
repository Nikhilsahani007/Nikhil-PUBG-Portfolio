import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { personalInfo } from '../../data/resume';
import styles from './Navbar.module.css';

const navLinks = [
    { to: '/', label: 'Mission' },
    { to: '/about', label: 'Intel' },
    { to: '/projects', label: 'Loadout' },
    { to: '/resume', label: 'Dossier' },
    { to: '/contact', label: 'Comms' },
    { to: '/blog', label: 'Logs' },
];

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className={styles.hud} role="navigation" aria-label="Main navigation">
            <div className={styles.hudInner}>
                {/* Left — Operator */}
                <Link to="/" className={styles.operatorInfo} aria-label="Home">
                    <div>
                        <div className={styles.operatorLabel}>Operator</div>
                        <div className={styles.operatorName}>{personalInfo.callsign}</div>
                    </div>
                    <span className={styles.rankBadge}>{personalInfo.rank}</span>
                </Link>

                {/* Center — Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link, i) => (
                        <li key={link.to} style={{ display: 'flex', alignItems: 'center' }}>
                            {i > 0 && <span className={styles.navSeparator}>|</span>}
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                }
                                end={link.to === '/'}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right — Status + Theme + Hamburger */}
                <div className={styles.rightSection}>
                    <div className={styles.statusIndicator}>
                        <span className={styles.statusDot} />
                        {personalInfo.status}
                    </div>

                    <button
                        className={styles.themeBtn}
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'Light Ops' : 'Dark Tactical'} theme`}
                    >
                        <span aria-hidden="true">{theme === 'dark' ? '☀︎' : '☾'}</span>
                        <span className={styles.themeBtnLabel}>
                            {theme === 'dark' ? 'OPS' : 'TAC'}
                        </span>
                    </button>

                    <button
                        className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileOpen}
                    >
                        <span className={styles.hamburgerLine} />
                        <span className={styles.hamburgerLine} />
                        <span className={styles.hamburgerLine} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`} aria-hidden={!mobileOpen}>
                {navLinks.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                        }
                        onClick={() => setMobileOpen(false)}
                        end={link.to === '/'}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
