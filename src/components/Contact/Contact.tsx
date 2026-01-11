import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            // Form is valid - in a real app, you'd send this to a backend
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        }
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Let's discuss your next project or opportunity
                </p>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card glass animate-fade-in-up">
                            <div className="info-icon">📧</div>
                            <h3>Email</h3>
                            <a href="mailto:dishavagdiya13@gmail.com">dishavagdiya13@gmail.com</a>
                        </div>

                        <div className="info-card glass animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="info-icon">💼</div>
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/disha-vagadiya-8a91a0266/" target="_blank" rel="noopener noreferrer">
                                Connect with me
                            </a>
                        </div>

                        <div className="info-card glass animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="info-icon">💻</div>
                            <h3>GitHub</h3>
                            <a href="https://github.com/dishavagadiya" target="_blank" rel="noopener noreferrer">
                                View my code
                            </a>
                        </div>

                        <div className="info-card glass animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="info-icon">📍</div>
                            <h3>Location</h3>
                            <p>Gandhinagar, Gujarat, India</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact-form glass animate-fade-in-up" onSubmit={handleSubmit} style={{ animationDelay: '0.2s' }}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? 'error' : ''}
                                placeholder="Your name"
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                rows={6}
                                placeholder="Your message..."
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            <span>Send Message</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
