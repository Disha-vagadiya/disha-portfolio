import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3 className="footer-title">
                            Disha <span className="gradient-text">Vagadiyaa</span>
                        </h3>
                        <p className="footer-tagline">
                            Frontend Developer | Building Beautiful Digital Experiences
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4>Connect</h4>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/disha-vagadiya-4d5fc026b/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/dishavagadiya" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:dishavagdiya13@gmail.com">
                                        Email
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Disha Vagadiyaa. All rights reserved.</p>
                    <p className="footer-credit">
                        Designed & Built with <span className="heart">❤️</span> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
