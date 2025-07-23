import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  const loadingContainerVariants = {
    start: {
      transition: {
        staggerChildren: 0.1
      }
    },
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const loadingCircleVariants = {
    start: {
      y: "0%"
    },
    end: {
      y: "100%"
    }
  };

  const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="loader-circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <motion.span
          className="loader-circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
        <motion.span
          className="loader-circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
          style={{ backgroundColor: 'var(--primary-color)' }}
        />
      </motion.div>

      <style>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--background-color);
          z-index: 9999;
        }
        
        .loader {
          width: 100px;
          height: 50px;
          display: flex;
          justify-content: space-around;
        }
        
        .loader-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default Loader;