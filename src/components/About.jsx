import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Correct import path

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>
      
      <div className="container about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            I'm specialized in Information Technology. I'm passionate about building 
            efficient, user-friendly digital solutions. My areas of interest include 
            java development, data structures, network engineering and cybersecurity.
          </p>
          <p>
            I've around 14 months of experience in project management and as a Subject 
            Matter Expert (SME), I have honed my ability to build effective models and 
            deliver results that align with business goals. 
          </p>
          <p>
            When I'm not coding or configuring networks, you can find me exploring 
            new technologies or learning about the latest advancements in cybersecurity.
          </p>
        </motion.div>
        
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <img 
              src={profileImage} // Use the imported image variable
              alt="Arya Nilesh Rane" 
              className="profile-image"
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-container {
          display: flex;
          align-items: center;
          gap: 50px;
        }
        
        .about-content {
          flex: 1;
        }
        
        .about-content p {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }
        
        .about-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }
        
        .image-wrapper {
          width: 350px;
          height: 350px;
          border-radius: 20px;
          overflow: hidden;
          border: 5px solid var(--primary-color);
          box-shadow: var(--card-shadow);
        }
        
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        
        @media (max-width: 992px) {
          .about-container {
            flex-direction: column;
          }
          
          .about-image {
            order: -1;
          }
          
          .image-wrapper {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;