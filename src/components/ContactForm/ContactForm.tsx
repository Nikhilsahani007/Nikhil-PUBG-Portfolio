import { useState, type FormEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validate = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Call sign required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Comms channel required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid comms format';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mission brief required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Brief too short (min 10 chars)';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        // Simulate submission
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
                <label htmlFor="contact-name" className={styles.label}>
                    Call Sign <span className={styles.required}>*</span>
                </label>
                <input
                    id="contact-name"
                    type="text"
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    placeholder="Enter your name..."
                    value={formData.name}
                    onChange={e => {
                        setFormData(prev => ({ ...prev, name: e.target.value }));
                        if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                    <span id="name-error" className={styles.errorText} role="alert">
                        {errors.name}
                    </span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="contact-email" className={styles.label}>
                    Comms Channel <span className={styles.required}>*</span>
                </label>
                <input
                    id="contact-email"
                    type="email"
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => {
                        setFormData(prev => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                    <span id="email-error" className={styles.errorText} role="alert">
                        {errors.email}
                    </span>
                )}
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="contact-message" className={styles.label}>
                    Mission Brief <span className={styles.required}>*</span>
                </label>
                <textarea
                    id="contact-message"
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    placeholder="Describe your mission..."
                    value={formData.message}
                    onChange={e => {
                        setFormData(prev => ({ ...prev, message: e.target.value }));
                        if (errors.message) setErrors(prev => ({ ...prev, message: undefined }));
                    }}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                    <span id="message-error" className={styles.errorText} role="alert">
                        {errors.message}
                    </span>
                )}
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                ▶ Transmit Message
            </button>

            {status === 'success' && (
                <div className={styles.successMsg} role="status">
                    ✓ Transmission successful — message received at HQ
                </div>
            )}

            {status === 'error' && (
                <div className={styles.errorMsg} role="alert">
                    ✗ Transmission failed — retry or use alternative comms
                </div>
            )}
        </form>
    );
}
