import { useEffect, useRef } from 'react';
import { personalInfo, summary, missionStats } from '../../data/resume';
import styles from './IntelSection.module.css';

const STATS = [
    { label: 'Projects Deployed', value: missionStats.projectsDeployed, suffix: '+' },
    { label: 'Systems Built', value: missionStats.systemsBuilt, suffix: '+' },
    { label: 'APIs Developed', value: missionStats.apisDeveloped, suffix: '+' },
    { label: 'Clients Served', value: missionStats.clientsServed, suffix: '' },
];

export default function IntelSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="intel" className={`section ${styles.intel}`} ref={sectionRef}>
            <div className="container">
                <div className={`section-header fade-in-up`}>
                    <p className="section-label">▸ SECTOR 02</p>
                    <h2 className="section-title">Intel</h2>
                </div>

                <div className={styles.grid}>
                    {/* Bio card */}
                    <div className={`hud-card ${styles.bioCard} fade-in-up`}>
                        <div className={styles.cardHeader}>
                            <span className={styles.cardTag}>CLASSIFIED FILE</span>
                            <span className={styles.cardId}>ID-{personalInfo.callsign}</span>
                        </div>

                        <div className={styles.profile}>
                            <div className={styles.avatarWrap}>
                                <div className={styles.avatar}>NS</div>
                                <div className={styles.avatarGlow} />
                            </div>
                            <div className={styles.profileInfo}>
                                <h3 className={styles.profileName}>{personalInfo.name}</h3>
                                <p className={styles.profileTitle}>{personalInfo.title}</p>
                                <p className={styles.profileSub}>{personalInfo.subtitle}</p>
                                <span className={styles.onlineTag}>● {personalInfo.status}</span>
                            </div>
                        </div>

                        <p className={styles.bio}>{summary}</p>

                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>LOCATION</span>
                                <span className={styles.infoVal}>{personalInfo.location}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>RANK</span>
                                <span className={styles.infoVal}>{personalInfo.rank}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>SPECIALTY</span>
                                <span className={styles.infoVal}>{personalInfo.tagline}</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.infoLabel}>STATUS</span>
                                <span className={styles.infoVal} style={{ color: 'var(--green)' }}>AVAILABLE FOR OPS</span>
                            </div>
                        </div>
                    </div>

                    {/* Stats panel */}
                    <div className={styles.statsPanel}>
                        <p className={styles.statsPanelLabel}>MISSION STATS</p>
                        <div className={styles.statsGrid}>
                            {STATS.map((s, i) => (
                                <div key={i} className={`hud-card ${styles.statCard} fade-in-up`}>
                                    <span className={styles.statValue}>
                                        {s.value}{s.suffix}
                                    </span>
                                    <span className={styles.statLabel}>{s.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* What I do */}
                        <div className={`hud-card ${styles.whatCard} fade-in-up`}>
                            <p className={styles.whatTitle}>CORE OPERATIONS</p>
                            <ul className={styles.whatList}>
                                {[
                                    'Full-stack SaaS & web applications',
                                    'AI-powered systems & ML pipelines',
                                    'REST API design & backend architecture',
                                    'Performance-optimized React frontends',
                                    'Docker containerization & CI/CD',
                                    'Founding & scaling NS SiteCraft Solutions',
                                ].map((item, i) => (
                                    <li key={i} className={styles.whatItem}>
                                        <span className={styles.bullet}>▸</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
