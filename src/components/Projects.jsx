import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Service Feedback Form',
    description: 'Service Feedback Form is a full-stack web application designed to collect, manage, and analyze customer feedback for a service-based organization. The system supports both user-facing and admin-facing interfaces with image upload functionality and real-time data handling.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase'],
    githubLink: 'https://github.com/Arya-N-Rane/Feedback-Form-',
    demoLink: 'https://feedback-form-liard-psi.vercel.app/'
  },
  {
    title: 'Java E-Commerce Platform',
    description: 'A full-stack e-commerce application built with Java, Spring Boot, and MySQL.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS'],
    githubLink: '#',
    demoLink: '#'
  },
  {
    title: 'Network Monitoring Tool',
    description: 'A tool to monitor network traffic and detect anomalies in real-time.',
    technologies: ['Python', 'CCNA', 'Network Protocols'],
    githubLink: '#',
    demoLink: '#'
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing complex datasets.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL'],
    githubLink: '#',
    demoLink: '#'
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      <div className="container">
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="project-image">
                  <div className="placeholder-image" />
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="technologies">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-links">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaGithub /> View Code
                      </a>
                    )}
                    
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 80px 0;
        }
        
        .projects-container {
          width: 100%;
          margin-top: 40px;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        
        .project-card {
          background-color: var(--card-bg-color);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          transition: var(--transition);
        }
        
        .project-image {
          height: 200px;
          background-color: var(--background-color);
        }
        
        .placeholder-image {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: var(--text-color);
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          opacity: 0.8;
        }
        
        .project-content {
          padding: 25px;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        
        .project-content h3 {
          font-size: 1.5rem;
          color: var(--primary-color);
        }
        
        .technologies h4 {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--primary-color);
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tech-tag {
          background-color: var(--primary-color);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .project-links {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--primary-color);
          font-weight: 500;
          transition: var(--transition);
        }
        
        .project-link:hover {
          color: var(--secondary-color);
        }
        
        @media (max-width: 992px) {
          .projects-grid {
            gap: 25px;
          }
          
          .project-image {
            height: 180px;
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .project-image {
            height: 220px;
          }
        }
        
        @media (max-width: 480px) {
          .project-content {
            padding: 20px;
          }
          
          .project-links {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;