import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface Props {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Link
                to={`/projects/${project.slug}`}
                className={styles.card}
                aria-label={`View details for ${project.title}`}
            >
                <div className={styles.thumbnailWrap}>
                    {project.thumbnail ? (
                        <img
                            className={styles.thumbnail}
                            src={project.thumbnail}
                            alt={`${project.title} preview`}
                            loading="lazy"
                        />
                    ) : (
                        <div className={styles.thumbnailPlaceholder} aria-hidden="true">
                            {project.title
                                .split(' ')
                                .map(w => w[0])
                                .join('')
                                .slice(0, 3)}
                        </div>
                    )}
                    <span className={styles.categoryBadge}>{project.category}</span>
                    <span className={styles.viewBtn}>View Mission</span>
                </div>
                <div className={styles.body}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.shortDescription}</p>
                    <div className={styles.tags}>
                        {project.techStack.slice(0, 4).map(tech => (
                            <span key={tech} className={styles.tag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
