import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
    { to: '/blog', label: 'Blog' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const closeMobile = () => setMobileOpen(false);

    return (
        <nav className={styles.nav} role="navigation" aria-label="Main navigation">
            <div className={styles.navInner}>
                {/* Logo */}
                <Link to="/" className={styles.logo} aria-label="Nikhil Sahani Home">
                    <div className={styles.logoIcon}>NS</div>
                    <span className={styles.logoText}>
                        Nikhil<span className={styles.logoAccent}>.dev</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <ul className={styles.desktopLinks}>
                    {navLinks.map(link => (
                        <li key={link.to}>
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

                {/* Actions */}
                <div className={styles.navActions}>
                    <ThemeToggle />
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
            <div
                className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ''}`}
                aria-hidden={!mobileOpen}
            >
                {navLinks.map(link => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ''}`
                        }
                        onClick={closeMobile}
                        end={link.to === '/'}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
