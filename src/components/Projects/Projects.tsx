import React from 'react';
import './Projects.css';

interface Project {
    title: string;
    description: string;
    technologies: string[];
    icon: string;
    gradient: string;
}

const projectsData: Project[] = [
    // Company Projects - Vedikinsolutions
    {
        title: 'Vedikin Chatbot Landing Page',
        description: 'Designed and developed an interactive landing page for Vedikin AI Chatbot with modern UI/UX and smooth animations.',
        technologies: ['React.js', 'UI/UX', 'Animations'],
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        title: 'Vedikin AI Portfolio',
        description: 'Built an AI-powered portfolio showcase platform with dynamic content generation and intelligent project recommendations.',
        technologies: ['React.js', 'AI Integration', 'TypeScript'],
        icon: '🎨',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        title: 'Vedikin Task Timeline',
        description: 'Created a visual task timeline management system with drag-and-drop functionality and real-time collaboration features.',
        technologies: ['React.js', 'Drag & Drop', 'Real-time'],
        icon: '📅',
        gradient: 'linear-gradient(135deg, #13b0f5 0%, #e70faa 100%)'
    },
    {
        title: 'Vedikin Kanban Board',
        description: 'Developed a Kanban-style project management board with customizable workflows and team collaboration tools.',
        technologies: ['React.js', 'State Management', 'Collaboration'],
        icon: '📊',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        title: 'Mobile TODO App',
        description: 'Built a cross-platform mobile TODO application with offline support, reminders, and cloud synchronization.',
        technologies: ['React Native', 'Mobile', 'Cloud Sync'],
        icon: '✅',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
        title: 'Data Extractor (TD, JD)',
        description: 'Developed an automated data extraction tool for processing technical documents and job descriptions with AI-powered parsing.',
        technologies: ['Python', 'AI/ML', 'Data Processing'],
        icon: '📄',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        title: 'n8n Flows (TODO & Invoice)',
        description: 'Created automated workflows for TODO management and invoice generation using n8n, integrating multiple APIs and services.',
        technologies: ['n8n', 'Automation', 'API Integration'],
        icon: '⚙️',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
        title: 'AI Videos Generator',
        description: 'Built an AI-powered video generation platform that creates dynamic videos from text prompts and templates.',
        technologies: ['AI/ML', 'Video Processing', 'React.js'],
        icon: '🎬',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },

    // Previous Projects
    {
        title: 'Survey Application',
        description: 'Developed a real-time survey app using React Native with REST API integration and optimized UI for smooth Android performance.',
        technologies: ['React Native', 'Android', 'REST APIs'],
        icon: '📋',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
        title: 'Family Tree Visualization',
        description: 'Built a dynamic family tree web app using recursive rendering logic and React.js for interactive, data-driven visualization.',
        technologies: ['React.js', 'Recursive Logic', 'Data Visualization'],
        icon: '🌳',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        title: 'Food Delivery App',
        description: 'Built a responsive food delivery web app using React.js with real-time order management and user authentication.',
        technologies: ['React.js', 'Authentication', 'Real-time'],
        icon: '🍔',
        gradient: 'linear-gradient(135deg, #13b0f5 0%, #e70faa 100%)'
    },
    {
        title: 'Data Mining Tool',
        description: 'Developed a Python-based data mining tool for analyzing large datasets and extracting meaningful patterns efficiently.',
        technologies: ['Python', 'Data Analysis'],
        icon: '⛏️',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
        title: 'PMS Aastha Techno',
        description: 'Created modules for project tracking and employee management in a PHP-based PMS with efficient MySQL data handling.',
        technologies: ['PHP', 'MySQL', 'Project Management'],
        icon: '📊',
        gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
        title: 'n8n Workflow Automation',
        description: 'Designed automation workflows in n8n to streamline processes and integrate APIs, reducing manual work and errors.',
        technologies: ['n8n', 'API Integration', 'Automation'],
        icon: '🔄',
        gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
        title: 'osiansoftcon',
        description: 'Developed responsive, cross-browser company web pages with interactive front-end features and modern UI elements.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        icon: '🌐',
        gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
        title: 'Karmagrid',
        description: 'Implemented static client showcase pages with jQuery interactivity and performance-focused HTML/CSS layout design.',
        technologies: ['HTML', 'CSS', 'jQuery'],
        icon: '🎯',
        gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    }
];

const Projects: React.FC = () => {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">
                    A showcase of my recent work and technical expertise
                </p>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div
                            key={project.title}
                            className="project-card glass"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            <div className="project-icon-wrapper" style={{ background: project.gradient }}>
                                <div className="project-icon">{project.icon}</div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-overlay" style={{ background: project.gradient }}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
