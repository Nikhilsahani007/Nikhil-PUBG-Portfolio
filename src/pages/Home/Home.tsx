import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MetaTags from '../../components/MetaTags/MetaTags';
import Scene3D from '../../components/Scene3D/Scene3D';
import StatPanel from '../../components/StatPanel/StatPanel';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import StatCounter from '../../components/StatCounter/StatCounter';
import { operatorStats } from '../../data/skills';
import { projects } from '../../data/projects';
import { missionStats } from '../../data/resume';
import styles from './Home.module.css';

const featured = projects.filter(p => p.featured);

export default function Home() {
    return (
        <>
            <MetaTags
                title="Nikhil Sahani | Full Stack MERN & Java Developer"
                description="Nikhil Sahani is a Full Stack Developer specializing in MERN stack and Java backend systems. Founder of NS SiteCraft Solutions. Available for freelance and full-time roles in India."
                keywords="Nikhil Sahani, Full Stack Developer India, MERN Stack Developer, Java Backend Developer, React Developer, Node.js Developer, Freelance Web Developer India, NS SiteCraft Solutions"
                canonical="https://nikhilsahani.dev/"
            />
            {/* ===== HERO (3D Loadout Screen) ===== */}
            <section className={styles.hero}>
                <div className={styles.heroGrid}>
                    {/* Left — 3D Avatar (desktop) */}
                    <div className={styles.avatarSection}>
                        <Scene3D />
                    </div>

                    {/* Mobile avatar fallback */}
                    <div className={styles.mobileAvatar}>
                        <div className={styles.mobileAvatarIcon} aria-hidden="true">NS</div>
                    </div>

                    {/* Right — Stats & CTA */}
                    <div className={styles.statsSection}>
                        <motion.div
                            className={styles.operatorTag}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className={styles.operatorTagDot} />
                            Operator Profile Active
                        </motion.div>

                        <motion.h1
                            className={styles.heroTitle}
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            Nikhil Sahani
                            <span className={styles.heroAccent}>Full-Stack Developer</span>
                        </motion.h1>

                        <motion.p
                            className={styles.heroSubtitle}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                        >
                            Software Developer ·
                            Founder of NS SiteCraft Solutions ·
                            Building production-grade systems with modern tech.
                        </motion.p>

                        {/* Stat Panels */}
                        <div className={styles.statPanels}>
                            {operatorStats.map((stat, i) => (
                                <StatPanel key={stat.name} stat={stat} index={i} />
                            ))}
                        </div>

                        <motion.div
                            className={styles.heroCtas}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Link to="/contact" className="btn btn-primary">▶ Initiate Contact</Link>
                            <Link to="/resume" className="btn btn-secondary">↓ View Dossier</Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== INVENTORY (Featured Projects) ===== */}
            <section className={styles.inventorySection}>
                <div className={styles.inventoryInner}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <p className="section-label">Equipment Loadout</p>
                            <h2 className="section-title">Project Inventory</h2>
                        </div>
                        <Link to="/projects" className="btn btn-secondary">All Slots →</Link>
                    </div>

                    <div className={styles.inventoryGrid}>
                        {featured.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== MISSION STATISTICS ===== */}
            <section className={styles.statsSection2}>
                <div className={styles.statsInner}>
                    <p className="section-label">Mission Statistics</p>
                    <h2 className="section-title">Operations Overview</h2>

                    <div className={styles.statsGrid}>
                        <StatCounter value={missionStats.projectsDeployed} label="Projects Deployed" index={0} />
                        <StatCounter value={missionStats.systemsBuilt} label="Systems Built" index={1} />
                        <StatCounter value={missionStats.apisDeveloped} label="APIs Developed" index={2} />
                        <StatCounter value={missionStats.clientsServed} label="Clients Served" index={3} />
                    </div>
                </div>
            </section>
        </>
    );
}
