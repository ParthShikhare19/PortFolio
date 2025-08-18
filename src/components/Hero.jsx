import React from 'react';
import HeroImage from '../assets/main-image.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white text-center py-32" id="home">
      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-30 bg-gradient-to-r from-blue-600 to-teal-500 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-r from-purple-800 to-indigo-900 -z-20"></div>
      <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-teal-300 to-blue-500 opacity-20 transform scale-150"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
        >
          <img
            src={HeroImage}
            alt="Parth Shikhare"
            className="mx-auto mb-12 w-64 h-64 rounded-full object-cover transform transition-all duration-500 ease-in-out hover:scale-125 shadow-xl"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.3 }}
        >
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            Parth Shikhare
          </span>
          , Creative Problem-Solver
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-4 text-xl sm:text-2xl text-gray-200"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
        >
          A student passionate about building innovative applications and web projects, bringing creative solutions to life.
        </motion.p>

        {/* Resume Button Centered */}
        <div className="mt-10 flex justify-center">
          <motion.a
            href="public/parth_resume.pdf" // make sure the file is in the public folder
            download
            className="inline-block bg-gradient-to-r from-coral-400 to-amber-500 text-white text-lg font-semibold py-4 px-10 rounded-full shadow-xl transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-l"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.5 }}
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Shape Elements */}
      <div className="absolute top-20 left-0 w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-700 opacity-30 transform scale-150"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-bl from-teal-400 to-blue-500 opacity-20 transform scale-125"></div>
      <div className="absolute top-2/3 right-0 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-600 to-teal-300 opacity-10 transform scale-100"></div>
    </div>
  );
};

export default Hero;
