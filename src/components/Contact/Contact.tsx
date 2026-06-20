import React, { useState } from 'react';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = { name: '', email: '', subject: '', message: '' };
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
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Fetch EmailJS credentials if configured in environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    try {
      if (serviceId !== 'service_placeholder' && templateId !== 'template_placeholder' && publicKey !== 'public_key_placeholder') {
        // Send email using real EmailJS instance
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );
      } else {
        // Mock successful delivery after a short delay
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Fire confetti animation
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#00F5FF', '#7C3AED', '#EC4899']
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project or opportunity</p>

        <div className="contact-content">
          {/* Info cards */}
          <div className="contact-info">
            <div className="info-card glass">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <a href="mailto:dishavagdiya13@gmail.com">dishavagdiya13@gmail.com</a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <a href="https://wa.me/919265444373" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/disha-vagadiya-8a91a0266/" target="_blank" rel="noopener noreferrer">Connect with me</a>
            </div>

            <div className="info-card glass">
              <div className="info-icon">💻</div>
              <h3>GitHub</h3>
              <a href="https://github.com/dishavagadiya" target="_blank" rel="noopener noreferrer">Explore my codebases</a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form glass">
            {submitStatus === 'success' && (
              <div 
                style={{
                  padding: '16px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px'
                }}
              >
                <FiCheckCircle size={20} />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Message delivered successfully! I will reach out soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div 
                style={{
                  padding: '16px',
                  background: 'rgba(244, 63, 94, 0.1)',
                  border: '1px solid rgba(244, 63, 94, 0.2)',
                  color: '#f43f5e',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px'
                }}
              >
                <FiCheckCircle size={20} style={{ transform: 'rotate(180deg)' }} />
                <span style={{ fontSize: '14px', fontWeight: '600' }}>Failed to send message. Please verify connectivity and try again.</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <p style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '600', marginTop: '4px' }}>{errors.name}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <p style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '600', marginTop: '4px' }}>{errors.email}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Collaboration Opportunity"
                className={errors.subject ? 'error' : ''}
              />
              {errors.subject && <p style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '600', marginTop: '4px' }}>{errors.subject}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project parameters..."
                className={errors.message ? 'error' : ''}
                style={{ resize: 'none' }}
              />
              {errors.message && <p style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '600', marginTop: '4px' }}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 20px',
                borderRadius: '12px'
              }}
            >
              <span>{isSubmitting ? 'Sending Transmission...' : 'Transmit Message'}</span>
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
