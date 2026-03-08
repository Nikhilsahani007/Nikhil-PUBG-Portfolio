import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../../data/resume';
import styles from './CommsSection.module.css';

export default function CommsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.fade-in-up').forEach((el, i) => {
                            setTimeout(() => el.classList.add('visible'), i * 100);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate send
        setTimeout(() => setStatus('sent'), 1800);
    };

    return (
        <section id="comms" className={`section ${styles.comms}`} ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-in-up">
                    <p className="section-label">▸ SECTOR 05</p>
                    <h2 className="section-title">Comms</h2>
                </div>

                <div className={styles.grid}>
                    {/* Left — info */}
                    <div className={styles.infoPanel}>
                        <div className={`hud-card ${styles.infoCard} fade-in-up`}>
                            <p className={styles.infoTitle}>ESTABLISH CONTACT</p>
                            <p className={styles.infoText}>
                                Ready to deploy on your next mission. Whether it's a new project, a freelance
                                contract, or a full-time opportunity — drop a transmission and I'll respond within
                                24 hours.
                            </p>

                            <div className={styles.contactList}>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>✉</span>
                                    <div>
                                        <p className={styles.contactLabel}>EMAIL</p>
                                        <a href={`mailto:${personalInfo.email}`} className={styles.contactVal}>
                                            {personalInfo.email}
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>⎇</span>
                                    <div>
                                        <p className={styles.contactLabel}>GITHUB</p>
                                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.contactVal}>
                                            github.com/Nikhilsahani007
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>◈</span>
                                    <div>
                                        <p className={styles.contactLabel}>LINKEDIN</p>
                                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.contactVal}>
                                            linkedin.com/in/nikhil-sahani-o07
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.contactItem}>
                                    <span className={styles.contactIcon}>⊙</span>
                                    <div>
                                        <p className={styles.contactLabel}>LOCATION</p>
                                        <span className={styles.contactVal}>{personalInfo.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.statusRow}>
                                <span className={styles.statusDot} />
                                <span className={styles.statusText}>AVAILABLE FOR NEW MISSIONS</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className={`hud-card ${styles.formCard} fade-in-up`}>
                        <p className={styles.formTitle}>TRANSMISSION FORM</p>

                        {status === 'sent' ? (
                            <div className={styles.successMsg}>
                                <span className={styles.successIcon}>✓</span>
                                <p className={styles.successText}>TRANSMISSION SENT</p>
                                <p className={styles.successSub}>Message received. Expect a reply within 24 hours.</p>
                                <button className="btn btn-primary" onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', subject: '', message: '' }); }}>
                                    SEND ANOTHER
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.fieldRow}>
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor="comms-name">OPERATOR NAME</label>
                                        <input
                                            id="comms-name"
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label className={styles.label} htmlFor="comms-email">EMAIL CHANNEL</label>
                                        <input
                                            id="comms-email"
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor="comms-subject">MISSION SUBJECT</label>
                                    <input
                                        id="comms-subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Project inquiry / collaboration / etc."
                                        required
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor="comms-message">MESSAGE</label>
                                    <textarea
                                        id="comms-message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`${styles.input} ${styles.textarea}`}
                                        placeholder="Describe your mission objectives..."
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={status === 'sending'}>
                                    {status === 'sending' ? '◌ TRANSMITTING...' : '▶ SEND TRANSMISSION'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
