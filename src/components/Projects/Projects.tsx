import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  url: string;
  categories: string[];
  technologies: string[];
  gradient: string;
  icon: string;
}

const projectsData: Project[] = [
  {
    title: 'Sitegemini',
    description: 'Built reusable UI components and integrated APIs for an AI chatbot platform focused on automated customer engagement and responsive user experience.',
    url: 'http://sitegemini.com/',
    categories: ['React', 'AI', 'Business'],
    technologies: ['React.js', 'Next.js', 'API Integration', 'UI Components'],
    gradient: 'linear-gradient(135deg, #00F5FF 0%, #7C3AED 100%)',
    icon: '🤖'
  },
  {
    title: 'Karmagrid',
    description: 'Implemented static client showcase pages with jQuery interactivity and performance-focused HTML/CSS layout design.',
    url: 'https://karmagridsystems.com/',
    categories: ['Business'],
    technologies: ['HTML5', 'CSS3', 'jQuery', 'Responsive Design'],
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
    icon: '🎯'
  },
  {
    title: 'OsianSoftcon',
    description: 'Developed responsive, cross-browser company web pages with interactive front-end features and modern UI elements.',
    url: 'https://www.osiansoftcon.com/',
    categories: ['Business'],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Cross-browser'],
    gradient: 'linear-gradient(135deg, #00F5FF 0%, #7C3AED 100%)',
    icon: '🌐'
  },
  {
    title: 'PMS Aastha Techno',
    description: 'Created modules for project tracking and employee management in a PHP-based PMS with efficient MySQL data handling.',
    url: 'https://pms.aasthatechno.in/pms/',
    categories: ['CRM', 'Business'],
    technologies: ['PHP', 'MySQL', 'Project Tracking', 'Bootstrap'],
    gradient: 'linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)',
    icon: '📊'
  },
  {
    title: 'Survey Application',
    description: 'Developed a real-time survey application using React Native with REST API integration and optimized UI for smooth Android performance.',
    url: '#',
    categories: ['Healthcare'],
    technologies: ['React Native', 'Android', 'REST APIs', 'UI Optimization'],
    gradient: 'linear-gradient(135deg, #00F5FF 0%, #7C3AED 100%)',
    icon: '🩺'
  },

  {
    title: 'Family Tree Visualization',
    description: 'Built a dynamic family tree web application using recursive rendering logic and React.js for interactive, data-driven visualization.',
    url: 'https://familytree.thcitsolutions.com/',
    categories: ['React'],
    technologies: ['React.js', 'Recursive Rendering', 'Data Visualization'],
    gradient: 'linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)',
    icon: '🌳'
  },
  {
    title: 'Marketing Automation Tool',
    description: 'Developed a social media marketing platform enabling users to automatically create and publish posts across LinkedIn, Facebook, Instagram, and Twitter through APIs.',
    url: 'https://marketing.thcitsolutions.com/',
    categories: ['AI', 'Business', 'React'],
    technologies: ['React.js', 'Post Scheduling', 'APIs', 'Workflow Management'],
    gradient: 'linear-gradient(135deg, #00F5FF 0%, #EC4899 100%)',
    icon: '📢'
  },
  {
    title: 'n8n Workflow Automation',
    description: 'Designed automation workflows in n8n to streamline processes and integrate APIs, reducing manual work and errors.',
        url: 'http://dev.thcitsolutions.com/ai-business',

    categories: ['Business'],
    technologies: ['N8N', 'API Integration', 'Automation Scripts'],
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #00F5FF 100%)',
    icon: '⚙️'
  },
  {
    title: 'Data Mining Tool',
    description: 'Developed a Python-based data mining tool for analyzing large datasets and extracting meaningful patterns efficiently.',
    url: '#',
    categories: ['Business', 'CRM'],
    technologies: ['Python', 'Data Mining', 'Data Analysis'],
    gradient: 'linear-gradient(135deg, #00F5FF 0%, #7C3AED 100%)',
    icon: '⛏️'
  }
];

const categories = ['All', 'React', 'Business', 'Healthcare', 'CRM', 'AI'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.categories.includes(filter));

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Exploring premium responsive web solutions, SaaS interfaces, and interactive software applications</p>

        {/* Filter buttons */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="btn"
              style={{
                background: filter === cat ? 'var(--gradient-cyan-purple)' : 'var(--glass-bg)',
                color: 'white',
                border: '1px solid var(--glass-border)',
                padding: '10px 24px',
                borderRadius: '9999px',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="project-card glass"
              >
                <div 
                  className="project-icon-wrapper" 
                  style={{ background: project.gradient }}
                >
                  <span className="project-icon">{project.icon}</span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      marginTop: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    <span>Visit Live Site</span>
                    <FiExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
