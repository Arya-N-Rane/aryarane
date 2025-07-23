import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Home = () => {
  const resumeUrl = 'https://drive.google.com/file/d/1h-BUZUMNzZYAcj-VY__ECZc376I1l1fQ/view?usp=sharing'; // Replace with your resume URL

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="home-section">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="home-content">
          <motion.h3 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            Hi, I'm
          </motion.h3>
          <motion.h1 
            variants={itemVariants}
            style={{ color: 'var(--primary-color)' }}
          >
            Arya Nilesh Rane
          </motion.h1>
          <motion.h2 variants={itemVariants}>
            Java Developer & Network Engineer
          </motion.h2>
          <motion.p variants={itemVariants}>
            I build efficient, user-friendly digital solutions with a focus on 
            Java development and network engineering.
          </motion.p>
          <motion.div variants={itemVariants} className="home-buttons">
            <a href="#contact" className="btn">
              Contact Me
            </a>
            <a 
              href={resumeUrl} 
              className="btn secondary-btn"
              download="Resume.pdf"
            >
              Download Resume <FaDownload style={{ marginLeft: '8px' }} />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        .home-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
        }
        
        .home-content {
          max-width: 800px;
        }
        
        .home-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--primary-color);
        }
        
        .home-content h1 {
          font-size: 3.5rem;
          margin-bottom: 15px;
          line-height: 1.2;
        }
        
        .home-content h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--text-color);
          opacity: 0.8;
        }
        
        .home-content p {
          font-size: 1.1rem;
          margin-bottom: 30px;
          max-width: 600px;
        }
        
        .home-buttons {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .secondary-btn {
          background-color: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        
        .secondary-btn:hover {
          background-color: var(--primary-color);
          color: white;
        }
        
        @media (max-width: 768px) {
          .home-content h1 {
            font-size: 2.5rem;
          }
          
          .home-content h2 {
            font-size: 1.5rem;
          }
          
          .home-buttons {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;