import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo & Info */}
          <div className="footer-brand">
            <h3 className="footer-title">
              Disha <span className="brand-name" style={{ background: 'var(--gradient-cyan-purple)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Vagadiya</span>
            </h3>
            <p className="footer-tagline">
              Full Stack Developer | React.js Specialist | UI/UX Developer. Building performant, modern, and visually stunning digital products.
            </p>
            <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
              {[
                { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/disha-vagadiya-8a91a0266/', label: 'LinkedIn' },
                { icon: <FiGithub size={18} />, href: 'https://github.com/dishavagadiya', label: 'GitHub' },
                { icon: <FiMail size={18} />, href: 'mailto:dishavagdiya13@gmail.com', label: 'Email' },
                { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/919265444373', label: 'WhatsApp' }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--color-text-secondary)',
                    transition: 'all 0.3s'
                  }}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links & Sections */}
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Connect</h4>
              <ul className="space-y-2">
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Disha Vagadiya. All rights reserved.</p>
          <p className="footer-credit">
            <span>Designed & Built with </span>
            <span style={{ color: 'var(--color-accent-pink)' }}>❤️</span>
            <span> and React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
