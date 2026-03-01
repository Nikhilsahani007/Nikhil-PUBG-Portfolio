import { motion } from 'framer-motion';
import type { OperatorStat } from '../../data/skills';
import styles from './StatPanel.module.css';

interface Props {
    stat: OperatorStat;
    index?: number;
}

export default function StatPanel({ stat, index = 0 }: Props) {
    return (
        <motion.div
            className={styles.panel}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
        >
            <div className={styles.header}>
                <span className={styles.name}>{stat.name}</span>
                <span className={styles.levelBadge} style={{ color: stat.color }}>
                    LVL {stat.level}
                </span>
            </div>
            <div className={styles.track} role="progressbar" aria-valuenow={stat.level} aria-valuemin={0} aria-valuemax={stat.maxLevel} aria-label={`${stat.name}: level ${stat.level}`}>
                <motion.div
                    className={styles.fill}
                    style={{
                        background: `linear-gradient(90deg, ${stat.color}, ${stat.color}bb)`,
                        boxShadow: `0 0 8px ${stat.color}66`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(stat.level / stat.maxLevel) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}
