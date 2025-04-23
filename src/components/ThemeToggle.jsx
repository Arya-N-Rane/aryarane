import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      whileTap={{ scale: 0.95 }}
    >
      <div className={`toggle-container ${theme}`}>
        <motion.div
          className="toggle-track"
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <div className="toggle-thumb">
            {theme === 'dark' ? (
              <FaSun className="sun-icon" />
            ) : (
              <FaMoon className="moon-icon" />
            )}
          </div>
        </motion.div>
        <span className="toggle-label">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </div>
      
      <style jsx>{`
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
        }
        
        .toggle-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .toggle-track {
          width: 60px;
          height: 30px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          padding: 0 3px;
          position: relative;
        }
        
        .toggle-track.dark {
          background: linear-gradient(to right, #4a6fa5, #6e48aa);
          justify-content: flex-end;
        }
        
        .toggle-track.light {
          background: linear-gradient(to right, #8E54E9, #4776E6);
          justify-content: flex-start;
        }
        
        .toggle-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .sun-icon {
          color: #FFD700;
          font-size: 50px;
        }
        
        .moon-icon {
          color: #4a6fa5;
          font-size: 50px;
        }
        
        .toggle-label {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-color);
          transition: color 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .toggle-label {
            display: none;
          }
        }
      `}</style>
    </motion.button>
  );
};

export default ThemeToggle;