import { useEffect, useState, useRef } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'Mission', href: '#mission' },
    { label: 'Intel', href: '#intel' },
    { label: 'Loadout', href: '#loadout' },
    { label: 'Dossier', href: '#dossier' },
    { label: 'Comms', href: '#comms' },
    { label: 'Logs', href: '#logs' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('mission');
    const [time, setTime] = useState('');
    const tickRef = useRef<number>(0);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        };
        updateTime();
        const id = setInterval(updateTime, 1000);
        return () => clearInterval(id);
    }, []);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = NAV_LINKS.map(l => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -50% 0px' }
        );
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        tickRef.current = window.setInterval(() => { }, 500);
        return () => clearInterval(tickRef.current);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offset = 60;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.inner}>
                {/* LEFT — Identity */}
                <div className={styles.left}>
                    <span className={styles.operatorLabel}>OPERATOR:</span>
                    <span className={styles.callsign}>Nikhil_S</span>
                    <span className={styles.badge}>FULL STACK VANGUARD</span>
                </div>

                {/* CENTER — Nav Links */}
                <ul className={styles.navLinks}>
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* RIGHT — Status */}
                <div className={styles.right}>
                    <span className={styles.online}>
                        <span className={styles.onlineDot} />
                        ONLINE
                    </span>
                    <span className={styles.time}>{time}</span>
                    <span className={styles.opsBadge}>⚙ OPS</span>
                </div>
            </div>
        </nav>
    );
}
