import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
    return (
        <div className={styles.background} aria-hidden="true">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className={styles.particle} />
            ))}
            <div className={styles.scanBeam} />
            <div className={styles.vignetteOverlay} />
        </div>
    );
}
