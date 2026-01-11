import React from 'react';
import './About.css';

const About: React.FC = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title animate-fade-in-up">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass animate-fade-in-up">
                        <p className="about-intro">
                            <span className="highlight">Goal-oriented and versatile Software Developer</span> with 1.5 years of professional experience
                            and 9 months of internship at <strong>Vedikinsolutions</strong>.
                        </p>

                        <p>
                            Contributing to full-cycle development of modern web and mobile applications. Proficient in <strong>React.js</strong>, <strong>React Native</strong>,
                            and <strong>Python</strong>, with hands-on experience in building scalable, user-focused interfaces and automating functional test cases.
                        </p>

                        <p>
                            Skilled in collaborating within <strong>agile development teams</strong>, applying component-based architecture,
                            and optimizing front-end performance. Passionate about <strong>clean code</strong>, <strong>UI/UX design</strong>,
                            and continuous learning.
                        </p>

                        <p>
                            Eager to contribute to innovative and forward-thinking teams that value <strong>quality</strong>, <strong>growth</strong>,
                            and <strong>collaboration</strong>.
                        </p>

                        <div className="about-highlights">
                            <div className="highlight-item">
                                <div className="highlight-icon">🎯</div>
                                <div className="highlight-content">
                                    <h4>Goal-Oriented</h4>
                                    <p>Focused on delivering high-quality solutions that meet business objectives</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">⚡</div>
                                <div className="highlight-content">
                                    <h4>Performance First</h4>
                                    <p>Optimizing applications for speed, efficiency, and smooth user experience</p>
                                </div>
                            </div>

                            <div className="highlight-item">
                                <div className="highlight-icon">🎨</div>
                                <div className="highlight-content">
                                    <h4>Clean Code Advocate</h4>
                                    <p>Writing maintainable, scalable code with best practices and design patterns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
