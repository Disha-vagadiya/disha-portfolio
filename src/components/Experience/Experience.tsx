import React from 'react';
import { motion } from 'framer-motion';
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
    title: 'Front-End Web Developer',
    company: 'Vedikin Solutions',
    period: '04/2024 to 04/2026',
    location: 'Gandhinagar, India',
    responsibilities: [
      'Developed and maintained responsive web applications using React.js, Next.js, and TypeScript',
      'Created reusable UI components, forms, and user interfaces to enhance application scalability and maintainability',
      'Integrated RESTful APIs and managed application state using Redux for efficient data handling',
      'Implemented responsive and SEO-friendly user interfaces using Next.js features such as routing, server-side rendering (SSR), and page optimization',
      'Utilized TypeScript to improve code quality, maintainability, and type safety across projects',
      'Wrote clean, maintainable, and reusable code following industry best practices and coding standards',
      'Ensured cross-browser compatibility and responsive design using HTML5, CSS3, JavaScript, Bootstrap, Material UI, and jQuery',
      'Collaborated with team members to deliver high-quality features and optimize application performance'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Vedikin Solutions',
    period: '07/2023 to 03/2024',
    location: 'Gandhinagar, India',
    responsibilities: [
      'Designed and developed user-friendly web applications for various client projects',
      'Utilized version control systems (Git) to manage code changes efficiently and collaborate with team members',
      'Developed scripts to automate routine tasks, improving workflow efficiency',
      'Collaborated with other developers on design, coding, and debugging tasks'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My journey in software development</p>

        <div className="timeline">
          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
              </div>

              <div className="timeline-content glass">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{item.title}</h3>
                    <div className="experience-company">
                      <span className="company-name">{item.company}</span>
                      <span className="separator">•</span>
                      <span className="location">{item.location}</span>
                    </div>
                  </div>
                  <div className="experience-period">{item.period}</div>
                </div>

                <ul className="responsibilities-list">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
