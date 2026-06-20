import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiSmartphone, FiLayout, FiCompass, FiZap, FiLink, FiCpu, FiTool } from 'react-icons/fi';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const servicesData: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Developing high-performance, accessible, and structured frontend architectures using modern standards.',
    icon: <FiCode className="w-6 h-6" />,
    color: 'var(--color-accent-cyan)'
  },
  {
    title: 'React.js Development',
    description: 'Building interactive and reusable component-based architectures with state management and optimized rendering.',
    icon: <FiCpu className="w-6 h-6" />,
    color: 'var(--color-accent-purple)'
  },
  {
    title: 'Responsive Web Design',
    description: 'Crafting fluid layout schemes that adjust seamlessly across mobile, tablet, laptop, and desktop displays.',
    icon: <FiSmartphone className="w-6 h-6" />,
    color: 'var(--color-accent-pink)'
  },
  {
    title: 'Landing Page Development',
    description: 'Designing highly optimized, visually stunning, conversion-focused promotional interfaces.',
    icon: <FiLayout className="w-6 h-6" />,
    color: 'var(--color-accent-cyan)'
  },
  {
    title: 'UI/UX Development',
    description: 'Bridging design mockups to robust implementations, keeping usability and interaction depth at the core.',
    icon: <FiCompass className="w-6 h-6" />,
    color: 'var(--color-accent-purple)'
  },
  {
    title: 'Website Optimization',
    description: 'Improving Lighthouse auditing indices, asset compression, page load thresholds, and rendering speed.',
    icon: <FiZap className="w-6 h-6" />,
    color: 'var(--color-accent-pink)'
  },
  {
    title: 'API Integration',
    description: 'Connecting user interfaces to RESTful APIs, WebSockets, database microservices, and external systems.',
    icon: <FiLink className="w-6 h-6" />,
    color: 'var(--color-accent-cyan)'
  },
  {
    title: 'Maintenance & Support',
    description: 'Providing ongoing version updates, performance health checks, code debugging, and stability enhancements.',
    icon: <FiTool className="w-6 h-6" />,
    color: 'var(--color-accent-purple)'
  }
];

const Services: React.FC = () => {
  return (
    <section className="section" id="services" style={{ background: 'var(--color-bg-primary)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 className="section-title">Services Offered</h2>
          <div style={{ height: '3px', width: '80px', background: 'var(--gradient-cyan-purple)', margin: '16px auto', borderRadius: '99px' }} />
          <p className="section-subtitle">
            Providing tailored development solutions to optimize systems, user engagement, and product success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-4">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px'
              }}
            >
              <div>
                {/* Icon wrapper */}
                <div 
                  style={{
                    padding: '12px',
                    width: 'fit-content',
                    borderRadius: '12px',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--glass-border)',
                    marginBottom: '24px',
                    color: service.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {service.icon}
                </div>

                <h3 
                  style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: 'white',
                    marginBottom: '12px'
                  }}
                >
                  {service.title}
                </h3>

                <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                  {service.description}
                </p>
              </div>

              {/* Glowing indicator */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
