import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <main className={styles.projects}>
            <div className={styles.projectsInner}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Equipment Inventory</p>
                    <h1 className="section-title">All Loadout Slots</h1>
                    <p className={styles.count}>{projects.length} systems in inventory</p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} />
                    ))}
                </div>
            </div>
        </main>
    );
}
