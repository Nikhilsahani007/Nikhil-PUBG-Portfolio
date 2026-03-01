import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light Ops' : 'Dark Tactical'} theme`}
            title={`Switch to ${theme === 'dark' ? 'Light Ops' : 'Dark Tactical'} mode`}
        >
            <span className={styles.icon} aria-hidden="true">
                {theme === 'dark' ? '☀️' : '🌙'}
            </span>
            <span className={styles.label}>
                {theme === 'dark' ? 'Ops' : 'Tactical'}
            </span>
        </button>
    );
}
