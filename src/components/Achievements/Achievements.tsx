import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';
import { FiAward, FiCheckCircle, FiUsers, FiClock } from 'react-icons/fi';

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

interface Achievement {
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const achievementsData: Achievement[] = [
  {
    title: 'Completed Projects',
    value: 10,
    suffix: '+',
    description: 'Dynamic portfolios, CMS portals, healthcare platforms, and AI dashboards.',
    icon: <FiCheckCircle className="w-8 h-8" />,
    color: 'var(--color-accent-cyan)'
  },
  {
    title: 'Years Experience',
    value: 5,
    suffix: '+',
    description: 'Years of dedicated study, internships, and professional software engineering.',
    icon: <FiClock className="w-8 h-8" />,
    color: 'var(--color-accent-purple)'
  },
  {
    title: 'Responsive Websites',
    value: 100,
    suffix: '%',
    description: 'Optimized layouts matching mobile, tablet, laptop, and desktop viewport matrices.',
    icon: <FiAward className="w-8 h-8" />,
    color: 'var(--color-accent-pink)'
  },
  {
    title: 'Client Support',
    value: 100,
    suffix: '%',
    description: 'Active collaboration, deployment assistance, QA optimization, and maintenance.',
    icon: <FiUsers className="w-8 h-8" />,
    color: 'var(--color-accent-cyan)'
  }
];

const Achievements: React.FC = () => {
  return (
    <section className="section" id="achievements" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 className="section-title">Key Achievements</h2>
          <div style={{ height: '3px', width: '80px', background: 'var(--gradient-cyan-purple)', margin: '16px auto', borderRadius: '99px' }} />
          <p className="section-subtitle">
            Quantifiable stats and milestones representing technical output, responsiveness, and service consistency.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-4">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="card"
              style={{
                textAlign: 'center',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* Icon */}
              <div 
                style={{
                  marginBottom: '24px',
                  padding: '16px',
                  borderRadius: '16px',
                  background: 'var(--color-bg-secondary)',
                  border: '1px solid var(--glass-border)',
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {item.icon}
              </div>

              {/* Value / Number */}
              <h3 
                style={{ 
                  fontSize: '44px', 
                  fontWeight: '900', 
                  color: 'white', 
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-1px'
                }}
              >
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              {/* Title */}
              <h4 
                style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  color: 'var(--color-text-primary)', 
                  marginBottom: '12px',
                  fontFamily: 'var(--font-display)'
                }}
              >
                {item.title}
              </h4>

              {/* Description */}
              <p style={{ color: 'var(--color-text-muted)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
