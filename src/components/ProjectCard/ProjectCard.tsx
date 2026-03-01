import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface Props {
    project: Project;
    index?: number;
}

const rarityClass: Record<string, string> = {
    Legendary: styles.rarityLegendary,
    Epic: styles.rarityEpic,
    Rare: styles.rarityRare,
    Common: styles.rarityCommon,
};

export default function ProjectCard({ project, index = 0 }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <Link
                to={`/projects/${project.slug}`}
                className={styles.slot}
                aria-label={`View mission report: ${project.title}`}
            >
                <div className={styles.slotHeader}>
                    <span className={styles.slotNum}>Slot {project.slotNumber}</span>
                    <span className={`${styles.rarity} ${rarityClass[project.rarity] || ''}`}>
                        {project.rarity}
                    </span>
                </div>

                <h3 className={styles.title}>{project.title}</h3>
                <span className={styles.type}>{project.type}</span>

                <div className={styles.tags}>
                    {project.techStack.slice(0, 4).map(tech => (
                        <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
                </div>

                <div className={styles.details}>
                    {project.shortDescription}
                </div>

                <span className={styles.viewLabel}>▶ Open Mission Report</span>
            </Link>
        </motion.div>
    );
}
