import { useEffect, useRef } from 'react';
import GlobeScene from '../../components/GlobeScene/GlobeScene';
import { operatorStats } from '../../data/skills';
import styles from './MissionSection.module.css';

export default function MissionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const skillBarsRef = useRef<HTMLDivElement>(null);

    // Animate skill bars on scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll<HTMLElement>('[data-width]');
                        bars.forEach((bar, i) => {
                            setTimeout(() => {
                                bar.style.width = bar.dataset.width || '0%';
                                bar.style.opacity = '1';
                            }, i * 150);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );
        if (skillBarsRef.current) observer.observe(skillBarsRef.current);
        return () => observer.disconnect();
    }, []);

    // Fade-in-up for hero content
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 120);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="mission" className={styles.mission} ref={sectionRef}>
            {/* HUD corner decorations */}
            <div className={styles.cornerTL} />
            <div className={styles.cornerBR} />

            <div className={`${styles.inner} container`}>
                {/* LEFT — Globe */}
                <div className={styles.globeWrap}>
                    <div className={styles.globeContainer}>
                        <GlobeScene />
                    </div>
                    <div className={styles.globeRing} />
                    <div className={styles.globeLabel}>
                        <span className={styles.globeLabelText}>GLOBAL NETWORK</span>
                    </div>
                </div>

                {/* RIGHT — Content */}
                <div className={styles.content}>
                    <p className={`${styles.sectionLabel} fade-in-up`}>
                        <span className={styles.labelDash}>—</span> MISSION BRIEF
                    </p>

                    <h1 className={`${styles.name} fade-in-up`}>
                        Nikhil<br />
                        <span className={styles.nameAccent}>Sahani</span>
                    </h1>

                    <div className={`${styles.titleRow} fade-in-up`}>
                        <span className={styles.titleText}>Full-Stack Developer</span>
                    </div>

                    <p className={`${styles.subtitle} fade-in-up`}>
                        Software Developer · Founder of NS SiteCraft Solutions · Building production-grade systems with modern tech.
                    </p>

                    {/* Skill Bars */}
                    <div className={`${styles.skillBars} fade-in-up`} ref={skillBarsRef}>
                        <p className={styles.skillsLabel}>OPERATOR STATS</p>
                        {operatorStats.map(stat => (
                            <div key={stat.name} className={styles.skillRow}>
                                <div className={styles.skillMeta}>
                                    <span className={styles.skillName}>{stat.name}</span>
                                    <span className={styles.skillLevel} style={{ color: stat.color }}>
                                        LVL {stat.level}
                                    </span>
                                </div>
                                <div className={styles.skillTrack}>
                                    <div
                                        className={styles.skillFill}
                                        data-width={`${stat.level}%`}
                                        style={{
                                            '--fill-color': stat.color,
                                            width: 0,
                                            opacity: 0,
                                            transition: 'width 0.9s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease',
                                        } as React.CSSProperties}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className={`${styles.ctas} fade-in-up`}>
                        <a
                            href="#dossier"
                            className="btn btn-primary"
                            onClick={e => {
                                e.preventDefault();
                                document.getElementById('dossier')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            ▶ VIEW DOSSIER
                        </a>
                        <a
                            href="#comms"
                            className="btn btn-gold"
                            onClick={e => {
                                e.preventDefault();
                                document.getElementById('comms')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            ◈ INITIATE COMMS
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
