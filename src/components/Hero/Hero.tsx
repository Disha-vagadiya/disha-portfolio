import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Workspace3D from './Workspace3D';
import { FiArrowRight, FiDownload, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import resumePdf from '../../assets/Disha_Vagadiya_Resume.pdf';
import './Hero.css';

const roles = ["Full Stack Developer", "React.js Developer", "UI/UX Specialist"];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let timer: any;
    const fullText = roles[roleIndex];
    const speed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause before starting deletion
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // Mouse coordinate tracking for glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="hero" id="home">
      {/* 3D Canvas Background */}
      <Workspace3D />

      {/* Mouse Glow Backdrop */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          position: 'fixed',
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 100%)'
        }}
        className="mouse-glow-backdrop"
      />

      {/* Hero Content */}
      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </div>
          
          <h1 className="hero-name">
            Disha <span className="brand-name" style={{ background: 'var(--gradient-cyan-purple)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Vagadiya</span>
          </h1>

          <div className="hero-subtitle">
            <span className="typing-text">{currentText}</span>
            <span className="separator">|</span>
            <span className="tech-stack">React</span>
            <span className="separator">|</span>
            <span className="tech-stack">TypeScript</span>
            <span className="separator">|</span>
            <span className="tech-stack">UI/UX</span>
          </div>

          <p className="hero-description">
            Crafting responsive web interfaces, robust component architectures, and premium client portals with a pixel-perfect design aesthetic.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <FiArrowRight style={{ marginLeft: '8px' }} />
            </a>
            <a href={resumePdf} download="Disha_Vagadiya_Resume.pdf" className="btn btn-outline">
              <FiDownload style={{ marginRight: '8px', color: 'var(--color-accent-pink)' }} />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="btn btn-outline">
              <FiMail style={{ marginRight: '8px' }} />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-social">
            <a href="https://www.linkedin.com/in/disha-vagadiya-8a91a0266/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://github.com/dishavagadiya" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="mailto:dishavagdiya13@gmail.com" className="social-link" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>

        {/* Visual Code Representation Card */}
        <div className="hero-visual">
          <div className="card-3d">
            <div className="card-3d-inner">
              <div className="card-face card-front card">
                <div className="code-snippet" style={{ textAlign: 'left', fontFamily: 'monospace' }}>
                  <div className="code-line">
                    <span style={{ color: 'var(--color-accent-purple)' }}>const</span>{' '}
                    <span style={{ color: 'var(--color-accent-cyan)' }}>developer</span> = {'{'}
                  </div>
                  <div style={{ paddingLeft: '20px' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>name:</span>{' '}
                    <span style={{ color: 'var(--color-accent-pink)' }}>'Disha'</span>,
                  </div>
                  <div style={{ paddingLeft: '20px' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>skills:</span> [
                  </div>
                  <div style={{ paddingLeft: '40px' }}>
                    <span style={{ color: 'var(--color-accent-pink)' }}>'React'</span>,
                  </div>
                  <div style={{ paddingLeft: '40px' }}>
                    <span style={{ color: 'var(--color-accent-pink)' }}>'TypeScript'</span>,
                  </div>
                  <div style={{ paddingLeft: '40px' }}>
                    <span style={{ color: 'var(--color-accent-pink)' }}>'Node.js'</span>
                  </div>
                  <div style={{ paddingLeft: '20px' }}>
                    ],
                  </div>
                  <div style={{ paddingLeft: '20px' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>passion:</span>{' '}
                    <span style={{ color: 'var(--color-accent-pink)' }}>'Stunning UI & Core Performance'</span>
                  </div>
                  <div className="code-line">{'};'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
