import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="footer-content"
        >
          <div className="copyright">
            &copy; {new Date().getFullYear()} Arya Nilesh Rane. All rights reserved.
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .footer {
          background-color: var(--card-bg-color);
          padding: 30px 0;
          text-align: center;
        }
        
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        
        .copyright {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        .footer-links {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .footer-links a {
          color: var(--text-color);
          transition: var(--transition);
        }
        
        .footer-links a:hover {
          color: var(--primary-color);
        }
        
        @media (max-width: 576px) {
          .footer-links {
            gap: 15px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;