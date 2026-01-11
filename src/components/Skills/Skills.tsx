import React from 'react';
import './Skills.css';

interface Skill {
    name: string;
    icon: string;
    category: string;
}

const skillsData: Skill[] = [
    // Languages & Frameworks
    { name: 'HTML', icon: '🌐', category: 'Languages & Frameworks' },
    { name: 'CSS', icon: '🎨', category: 'Languages & Frameworks' },
    { name: 'JavaScript', icon: '⚡', category: 'Languages & Frameworks' },
    { name: 'jQuery', icon: '📜', category: 'Languages & Frameworks' },
    { name: 'React.js', icon: '⚛️', category: 'Languages & Frameworks' },
    { name: 'React Native', icon: '📱', category: 'Languages & Frameworks' },
    { name: 'Python', icon: '🐍', category: 'Languages & Frameworks' },
    { name: 'PHP', icon: '🐘', category: 'Languages & Frameworks' },

    // Tools & Platforms
    { name: 'Git', icon: '🔀', category: 'Tools & Platforms' },
    { name: 'Firebase', icon: '🔥', category: 'Tools & Platforms' },
    { name: 'REST APIs', icon: '🔌', category: 'Tools & Platforms' },
    { name: 'Agile', icon: '🔄', category: 'Tools & Platforms' },
    { name: 'n8n', icon: '⚙️', category: 'Tools & Platforms' },
];

const Skills: React.FC = () => {
    const categories = Array.from(new Set(skillsData.map(skill => skill.category)));

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">
                    Technologies and tools I use to bring ideas to life
                </p>

                <div className="skills-container">
                    {categories.map((category, categoryIndex) => (
                        <div key={category} className="skill-category">
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-grid">
                                {skillsData
                                    .filter(skill => skill.category === category)
                                    .map((skill, index) => (
                                        <div
                                            key={skill.name}
                                            className="skill-card glass"
                                            style={{
                                                animationDelay: `${(categoryIndex * 0.1) + (index * 0.1)}s`
                                            }}
                                        >
                                            <div className="skill-icon">{skill.icon}</div>
                                            <div className="skill-name">{skill.name}</div>
                                            <div className="skill-glow"></div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
