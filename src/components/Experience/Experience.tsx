import React from 'react';
import './Experience.css';

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    location: string;
    responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
    {
        title: 'Frontend Development',
        company: 'Vedikinsolutions',
        period: 'Apr 2024 – Present',
        location: 'Gandhinagar, Gujarat',
        responsibilities: [
            'Designed and developed responsive, high-performance user interfaces using React.js, focusing on usability and maintainability',
            'Integrated RESTful APIs and implemented secure data handling to ensure smooth communication between frontend and backend',
            'Automated end-to-end test cases using Python, enhancing UX workflows and reducing manual testing efforts by over 40%',
            'Collaborated in agile sprints, participated in code reviews, and actively planned and code reviews to refine UI/UX and ensure seamless cross-platform improvements',
            'Optimized application performance using React Hooks, Context API, and lazy loading, resulting in faster load times and better user experience',
            'Worked closely with designers and backend developers to refine UI/UX and ensure seamless integration and team collaboration'
        ]
    },
    {
        title: 'Frontend Development Intern',
        company: 'Vedikinsolutions',
        period: 'Jul 2024',
        location: 'Gandhinagar, Gujarat',
        responsibilities: [
            'Assisted in the development of client-facing applications using React.js, focusing on performance, engagement and usability',
            'Gained hands-on experience in integrating APIs, managing application state, and debugging front-end issues',
            'Contributed to the creation of a family tree application using React.js, dynamically rendering tree structures with recursive logic',
            'Participated in code reviews and actively sought feedback to improve code quality and learn best practices'
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <p className="section-subtitle">
                    My journey in software development
                </p>

                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div
                            key={`${exp.company}-${exp.period}`}
                            className="timeline-item"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                            </div>

                            <div className="timeline-content glass">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-title">{exp.title}</h3>
                                        <div className="experience-company">
                                            <span className="company-name">{exp.company}</span>
                                            <span className="separator">•</span>
                                            <span className="location">{exp.location}</span>
                                        </div>
                                    </div>
                                    <div className="experience-period">{exp.period}</div>
                                </div>

                                <ul className="responsibilities-list">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
