import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);
    
    // Replace with your EmailJS service ID, template ID, and user ID
    emailjs.send(
      'service_ywjxfv2',
      'template_z3jx1px',
      formData,
      'qbAllA7S9Q-wCnppn'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <div className="contact-section">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="container contact-container">
        <motion.div 
          className="contact-form-container"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="btn submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                Failed to send message. Please try again later or contact me directly at raneaarya23@gmail.com
              </div>
                      )}
                      </form>
                    </motion.div>
                    
                    <motion.div 
                      className="contact-info"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h3>Contact Information</h3>
                      
                      <div className="info-item">
                        <h4>Email</h4>
                        <a href="mailto:raneaarya23@gmail.com">raneaarya23@gmail.com</a>
                      </div>
                      
                      <div className="info-item">
                        <h4>Phone</h4>
                        <a href="tel:+919324489943">+91 9324489943</a>
                      </div>
                      
                      <div className="social-links">
                        <h4>Connect With Me</h4>
                        <div className="links">
                          <a 
                            href="https://www.linkedin.com/in/your-linkedin" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <FaLinkedin size={24} />
                          </a>
                          <a 
                            href="https://github.com/your-github" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                          >
                            <FaGithub size={24} />
                          </a>
                          <a 
                            href="mailto:raneaarya23@gmail.com" 
                            aria-label="Email"
                          >
                            <FaEnvelope size={24} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                
                  <style>{`
                    .contact-container {
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 50px;
                    }
                    
                    .contact-form {
                      display: flex;
                      flex-direction: column;
                      gap: 20px;
                    }
                    
                    .form-group {
                      display: flex;
                      flex-direction: column;
                      gap: 8px;
                    }
                    
                    .form-group label {
                      font-weight: 500;
                    }
                    
                    .form-group input,
                    .form-group textarea {
                      padding: 12px;
                      border-radius: 4px;
                      border: 1px solid var(--card-bg-color);
                      background-color: var(--card-bg-color);
                      color: var(--text-color);
                      transition: var(--transition);
                    }
                    
                    .form-group input:focus,
                    .form-group textarea:focus {
                      outline: none;
                      border-color: var(--primary-color);
                      box-shadow: 0 0 0 2px rgba(74, 111, 165, 0.2);
                    }
                    
                    .form-group textarea {
                      resize: vertical;
                      min-height: 120px;
                    }
                    
                    .error {
                      border-color: #ff4d4f !important;
                    }
                    
                    .error-message {
                      color: #ff4d4f;
                      font-size: 0.8rem;
                    }
                    
                    .submit-btn {
                      align-self: flex-start;
                    }
                    
                    .success-message {
                      color: #52c41a;
                      margin-top: 10px;
                    }
                    
                    .contact-info {
                      display: flex;
                      flex-direction: column;
                      gap: 30px;
                    }
                    
                    .contact-info h3 {
                      font-size: 1.5rem;
                      margin-bottom: 10px;
                      color: var(--primary-color);
                    }
                    
                    .info-item h4 {
                      font-size: 1.1rem;
                      margin-bottom: 5px;
                      color: var(--primary-color);
                    }
                    
                    .info-item a {
                      color: var(--text-color);
                      transition: var(--transition);
                    }
                    
                    .info-item a:hover {
                      color: var(--primary-color);
                    }
                    
                    .social-links h4 {
                      font-size: 1.1rem;
                      margin-bottom: 15px;
                      color: var(--primary-color);
                    }
                    
                    .links {
                      display: flex;
                      gap: 20px;
                    }
                    
                    .links a {
                      color: var(--text-color);
                      transition: var(--transition);
                    }
                    
                    .links a:hover {
                      color: var(--primary-color);
                      transform: translateY(-3px);
                    }
                    
                    @media (max-width: 768px) {
                      .contact-container {
                        grid-template-columns: 1fr;
                      }
                    }
            `}</style>
        </div>
    );
};
            
export default Contact;