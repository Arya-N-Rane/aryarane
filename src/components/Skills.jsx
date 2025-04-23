import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaNetworkWired, FaDatabase, FaCode, FaServer } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'CCNA', icon: <FaNetworkWired /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Data Analytics', icon: <FaDatabase /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="container">
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <h3>{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 80px 0;
        }
        
        .skills-container {
          width: 100%;
          margin-top: 40px;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          justify-items: center;
        }
        
        .skill-card {
          width: 100%;
          aspect-ratio: 1/1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: var(--card-bg-color);
          padding: 20px;
          border-radius: 12px;
          box-shadow: var(--card-shadow);
          transition: var(--transition);
          text-align: center;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .skill-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          color: var(--primary-color);
        }
        
        .skill-card h3 {
          font-size: 1.1rem;
          margin: 0;
        }
        
        @media (max-width: 992px) {
          .skills-grid {
            gap: 20px;
          }
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
            max-width: 300px;
            margin: 0 auto;
          }
          
          .skill-card {
            aspect-ratio: unset;
            height: 100px;
            flex-direction: row;
            justify-content: flex-start;
            padding: 15px 20px;
            gap: 15px;
          }
          
          .skill-icon {
            margin-bottom: 0;
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Skills;