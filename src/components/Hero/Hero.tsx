import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            {/* 3D Background with CSS */}
            <div className="hero-background">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
                <div className="floating-shape shape-5"></div>
                <div className="particle-container">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${2 + Math.random() * 1}s`
                        }}></div>
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <div className="hero-content container">
                <div className="hero-text">
                    <div className="hero-greeting animate-fade-in-down">
                        <span className="wave">👋</span> Hi, I'm
                    </div>
                    <h1 className="hero-name animate-fade-in-up">
                        Disha <span className="gradient-text">Vagadiyaa</span>
                    </h1>
                    <div className="hero-subtitle animate-fade-in-up">
                        <span className="typing-text">Frontend Developer</span>
                        <span className="separator">|</span>
                        <span className="tech-stack">React</span>
                        <span className="separator">|</span>
                        <span className="tech-stack">React Native</span>
                        <span className="separator">|</span>
                        <span className="tech-stack">TypeScript</span>
                    </div>
                    <p className="hero-description animate-fade-in-up">
                        Crafting beautiful, performant, and user-centric web and mobile applications
                        with modern technologies and clean code practices.
                    </p>
                    <div className="hero-cta animate-fade-in-up">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="/src/assets/Disha_Vagadiyaa_Resume.pdf" download="Disha_Vagadiyaa_Resume.pdf" className="btn btn-outline">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13L10 3M10 13L7 10M10 13L13 10M3 17L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Download Resume</span>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <span>Contact Me</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="hero-social animate-fade-in">
                        <a href="https://www.linkedin.com/in/disha-vagadiya-8a91a0266/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://github.com/dishavagadiya" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="mailto:dishavagdiya13@gmail.com" className="social-link" aria-label="Email">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                        <a href="tel:+919265444373" className="social-link" aria-label="Phone">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* 3D Card Element */}
                <div className="hero-visual">
                    <div className="card-3d">
                        <div className="card-3d-inner">
                            <div className="card-face card-front glass">
                                <div className="code-snippet">
                                    <div className="code-line">
                                        <span className="code-keyword">const</span>{' '}
                                        <span className="code-variable">developer</span> = {'{'}
                                    </div>
                                    <div className="code-line code-indent">
                                        <span className="code-property">name:</span>{' '}
                                        <span className="code-string">'Disha'</span>,
                                    </div>
                                    <div className="code-line code-indent">
                                        <span className="code-property">skills:</span> [
                                    </div>
                                    <div className="code-line code-indent-2">
                                        <span className="code-string">'React'</span>,
                                    </div>
                                    <div className="code-line code-indent-2">
                                        <span className="code-string">'TypeScript'</span>,
                                    </div>
                                    <div className="code-line code-indent-2">
                                        <span className="code-string">'React Native'</span>
                                    </div>
                                    <div className="code-line code-indent">
                                        ],
                                    </div>
                                    <div className="code-line code-indent">
                                        <span className="code-property">passion:</span>{' '}
                                        <span className="code-string">'Building Amazing UIs'</span>
                                    </div>
                                    <div className="code-line">{'};'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator animate-float">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <div className="scroll-text">Scroll Down</div>
            </div>
        </section>
    );
};

export default Hero;
