import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './Home.module.css';

const featured = projects.filter(p => p.featured);

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section className={styles.hero}>
                <AnimatedBackground />
                <div className={styles.heroContent}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className={styles.statusLine}>
                            <span className={styles.statusDot} />
                            System Online // All Operations Active
                        </div>
                    </motion.div>

                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        Nikhil Sahani
                        <span className={styles.heroAccent}>Full-Stack Developer</span>
                    </motion.h1>

                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Building production-grade web applications with modern technologies.
                        React • Node.js • TypeScript — Mission Ready.
                    </motion.p>

                    <motion.div
                        className={styles.heroCtas}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.45 }}
                    >
                        <Link to="/projects" className="btn btn-primary">
                            ▶ View Projects
                        </Link>
                        <Link to="/resume" className="btn btn-secondary">
                            ↓ Download Resume
                        </Link>
                    </motion.div>

                    <motion.div
                        className={styles.heroStats}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <div className={styles.stat}>
                            <div className={styles.statValue}>5+</div>
                            <div className={styles.statLabel}>Projects</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>8+</div>
                            <div className={styles.statLabel}>Technologies</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>1</div>
                            <div className={styles.statLabel}>Internship</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>2026</div>
                            <div className={styles.statLabel}>Graduating</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className={styles.featured}>
                <div className={styles.featuredInner}>
                    <div className={styles.sectionHeader}>
                        <div>
                            <p className="section-subtitle">// Featured Missions</p>
                            <h2 className="section-title">Project Highlights</h2>
                        </div>
                        <Link to="/projects" className="btn btn-ghost">
                            All Missions →
                        </Link>
                    </div>

                    <div className={styles.projectsGrid}>
                        {featured.map((project, i) => (
                            <ProjectCard key={project.id} project={project} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
