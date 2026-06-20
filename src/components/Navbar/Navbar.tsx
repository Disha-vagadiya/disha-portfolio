import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section tracker
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.offsetTop - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Services', id: 'services' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Brand */}
        <div className="navbar-brand" onClick={() => scrollToSection('home')}>
          <span className="brand-text">
            <span className="brand-name">Disha</span>
            <span className="brand-dot">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>

          {/* Hamburger menu for mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
