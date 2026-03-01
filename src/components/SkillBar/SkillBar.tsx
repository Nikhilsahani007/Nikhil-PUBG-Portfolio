import { motion } from 'framer-motion';
import styles from './SkillBar.module.css';

interface Props {
    name: string;
    level: number;
}

export default function SkillBar({ name, level }: Props) {
    return (
        <div className={styles.bar}>
            <div className={styles.header}>
                <span className={styles.name}>{name}</span>
                <span className={styles.level}>{level}%</span>
            </div>
            <div className={styles.track} role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={`${name} proficiency: ${level}%`}>
                <motion.div
                    className={styles.fill}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
            </div>
        </div>
    );
}
