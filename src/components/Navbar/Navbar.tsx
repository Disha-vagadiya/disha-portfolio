import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

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
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container container">
                <div className="navbar-brand" onClick={() => scrollToSection('home')}>
                    <span className="brand-text">
                        <span className="brand-name">Disha</span>
                        <span className="brand-dot">.</span>
                    </span>
                </div>

                <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a
                        href="#home"
                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
                    >
                        Projects
                    </a>
                    <a
                        href="#experience"
                        className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}
                    >
                        Experience
                    </a>
                    <a
                        href="#contact"
                        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                    >
                        Contact
                    </a>
                </div>

                <div className="navbar-actions">
                    {/* Theme Toggle Button */}
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
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
