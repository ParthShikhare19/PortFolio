import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md text-black dark:text-white shadow-md transition-all duration-300 ${
        darkMode
          ? 'bg-blue-900/40 dark:bg-black/60'
          : 'bg-white/80 dark:bg-blue-900/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className={`text-3xl font-extrabold tracking-tight bg-gradient-to-r ${
            darkMode ? 'from-blue-400 to-blue-600' : 'from-blue-500 via-blue-400 to-blue-300'
          } bg-clip-text text-transparent`}
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map((text) => (
            <motion.a
              key={text}
              href={`#${text.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-200">
                {text}
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/parth-shikhare-854567302/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.06,
              boxShadow: '0px 0px 18px rgba(96, 165, 250, 0.6)',
              filter: 'brightness(1.15)',
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            className={`bg-gradient-to-r ${
              darkMode ? 'from-blue-500 to-blue-600' : 'from-blue-400 to-blue-500'
            } text-white text-sm md:text-base font-semibold px-5 py-2.5 rounded-full shadow-md hidden md:inline transition-all duration-300`}
          >
            Connect Me
          </motion.a>

          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ rotate: 360 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`w-10 h-10 flex items-center justify-center border ${
              darkMode ? 'border-blue-600' : 'border-gray-300'
            } dark:border-blue-600 rounded-full text-xl transition-all duration-300 hover:rotate-12 hover:scale-110`}
          >
            {darkMode ? '☀️' : '🌙'}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
