import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Header = ({ toggleTheme, theme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="navbar"
      >
        <div className="container">
          <a href="#home" className="logo">
            <span style={{ color: 'var(--primary-color)' }}>Arya</span> Rane
          </a>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.05, color: 'var(--primary-color)' }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="nav-right">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            
            <button className="menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background-color: var(--nav-bg-color);
          backdrop-filter: blur(10px);
        }
        
        .navbar {
          padding: 20px 0;
        }
        
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
        }
        
        .nav-links {
          display: flex;
          gap: 30px;
        }
        
        .nav-links a {
          font-weight: 500;
          color: var(--text-color);
        }
        
        .nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .menu-btn {
          background: none;
          border: none;
          color: var(--text-color);
          font-size: 1.5rem;
          cursor: pointer;
          display: none;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background-color: var(--nav-bg-color);
            backdrop-filter: blur(10px);
            flex-direction: column;
            align-items: center;
            padding: 20px 0;
            gap: 15px;
            clip-path: circle(0px at 90% -10%);
            transition: all 0.5s ease-out;
            pointer-events: none;
          }
          
          .nav-links.active {
            clip-path: circle(1000px at 90% -10%);
            pointer-events: all;
          }
          
          .menu-btn {
            display: block;
            z-index: 1000;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;