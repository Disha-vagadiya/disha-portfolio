import React, { useEffect, useState } from 'react';
import { animate } from 'framer-motion';
import './About.css';

const Counter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      ease: 'easeOut',
      onUpdate: (val) => setDisplayValue(Math.floor(val)),
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My professional journey and philosophy</p>

        <div className="about-content">
          <div className="about-text card">
            <p className="about-intro">
              <span className="highlight">Dynamic Front-End Developer</span> with 2 years of professional experience in building responsive and scalable web applications.
            </p>

            <p>
              I specialize in designing and developing responsive, high-performance web systems using <strong>React.js</strong>, <strong>Next.js</strong>, <strong>React Native</strong>, <strong>JavaScript</strong>, and <strong>TypeScript</strong>. I bridge complex client requirements to robust front-end architectures that scale.
            </p>

            <p>
              Collaborating within agile sprints, I focus on clean code patterns, optimized API structures, and state management using Redux to deliver exceptional user experiences.
            </p>

            <div className="about-highlights">
              {[
                {
                  icon: '🎯',
                  title: 'Professional Skillset',
                  desc: 'Skilled in developing reusable UI components, optimizing application performance, and implementing responsive designs.'
                },
                {
                  icon: '🎓',
                  title: 'Education',
                  desc: 'B.Tech in Computer Engineering from Gujarat Technological University (8.46 CGPA).'
                },
                {
                  icon: '🛠️',
                  title: 'Clean Code Standards',
                  desc: 'Writing structured, reusable component patterns with detailed typing and type safety.'
                }
              ].map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-content">
                    <h4>{highlight.title}</h4>
                    <p>{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Counters / Stats Grid */}
            <div 
              style={{
                marginTop: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '20px',
                width: '100%'
              }}
            >
              {[
                { label: 'Completed Projects', value: 10, suffix: '+', color: 'var(--color-accent-cyan)' },
                { label: 'Years Experience', value: 2, suffix: '+', color: 'var(--color-accent-purple)' },
                { label: 'Responsive Design', value: 100, suffix: '%', color: 'var(--color-accent-pink)' },
                { label: 'Client Support', value: 100, suffix: '%', color: 'var(--color-accent-cyan)' }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="card"
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <h4 style={{ fontSize: '32px', color: stat.color, marginBottom: '8px' }}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
