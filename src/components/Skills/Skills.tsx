import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5, SiBootstrap, SiPhp, SiMysql, SiGit, SiGithub, SiFigma, SiCss, SiMui, SiJquery, SiN8N, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbBrandReactNative } from 'react-icons/tb';
import './Skills.css';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  proficiency: number;
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'Frontend', proficiency: 95, icon: <SiReact /> },
  { name: 'Next.js', category: 'Frontend', proficiency: 92, icon: <SiNextdotjs /> },
  { name: 'React Native', category: 'Frontend', proficiency: 88, icon: <TbBrandReactNative /> },
  { name: 'JavaScript', category: 'Frontend', proficiency: 95, icon: <SiJavascript /> },
  { name: 'TypeScript', category: 'Frontend', proficiency: 90, icon: <SiTypescript /> },
  { name: 'jQuery', category: 'Frontend', proficiency: 85, icon: <SiJquery /> },
  { name: 'HTML5', category: 'Frontend', proficiency: 98, icon: <SiHtml5 /> },
  { name: 'CSS3', category: 'Frontend', proficiency: 95, icon: <SiCss /> },
  { name: 'Bootstrap', category: 'Frontend', proficiency: 90, icon: <SiBootstrap /> },
  { name: 'Material UI', category: 'Frontend', proficiency: 88, icon: <SiMui /> },

  // Backend
  { name: 'PHP', category: 'Backend', proficiency: 85, icon: <SiPhp /> },
  // { name: 'Laravel', category: 'Backend', proficiency: 80, icon: <SiLaravel /> },
  // { name: 'Node.js', category: 'Backend', proficiency: 82, icon: <SiNodedotjs /> },
  // { name: 'Express.js', category: 'Backend', proficiency: 80, icon: <SiExpress /> },
  { name: 'RESTful API', category: 'Backend', proficiency: 92, icon: <SiPostman /> },

  // Database
  { name: 'MySQL', category: 'Database', proficiency: 88, icon: <SiMysql /> },
  // { name: 'MongoDB', category: 'Database', proficiency: 82, icon: <SiMongodb /> },

  // Tools
  { name: 'Git', category: 'Tools', proficiency: 92, icon: <SiGit /> },
  { name: 'GitHub', category: 'Tools', proficiency: 94, icon: <SiGithub /> },
  { name: 'N8N Automation', category: 'Tools', proficiency: 85, icon: <SiN8N /> },
  { name: 'VS Code', category: 'Tools', proficiency: 95, icon: <VscCode /> },
  { name: 'Figma', category: 'Tools', proficiency: 80, icon: <SiFigma /> },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools'>('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle text-center">Technologies and tools I use to bring ideas to life</p>

        {/* Tab category selector */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px'
          }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className="btn"
              style={{
                background: activeCategory === category ? 'var(--gradient-cyan-purple)' : 'var(--glass-bg)',
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
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="skill-card glass"
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name">{skill.name}</div>
                
                {/* Horizontal progress bar inside card */}
                <div style={{ width: '100%', marginTop: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'between', fontSize: '10px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: `${skill.proficiency}%`, height: '100%', background: 'var(--gradient-cyan-purple)' }} />
                  </div>
                </div>

                <div className="skill-glow"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
