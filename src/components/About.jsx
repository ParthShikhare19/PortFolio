import React from "react";
import AboutImage from "../assets/Main-Image.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";  // Import the hook

const About = () => {
  // Create inView hooks for scroll-triggered animations
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true, // This ensures that the animation only triggers once
    threshold: 0.2, // The percentage of the element visible in the viewport before triggering the animation
  });

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white dark:text-white py-20"
      id="about"
      ref={aboutRef} // Attach the ref to the container
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* About Image */}
          <motion.img
            src={AboutImage}
            alt="Parth Shikhare"
            className="w-72 h-80 rounded-lg object-cover mb-8 md:mb-0 shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: aboutInView ? 1 : 0,
              x: aboutInView ? 0 : -100,
            }}
            transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
          />

          {/* About Text */}
          <div className="flex-1">
            <motion.p
              className="text-lg mb-8 text-gray-200 dark:text-gray-300"
              initial={{ opacity: 0, x: 100 }}
              animate={{
                opacity: aboutInView ? 1 : 0,
                x: aboutInView ? 0 : 100,
              }}
              transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
            >
              Hi, I'm Parth — a passionate developer with a keen interest in creating elegant, user-friendly web experiences. I specialize in both frontend and backend technologies, continuously learning and evolving in the world of software development. My focus is on delivering seamless user experiences and creating scalable, high-performance applications.
            </motion.p>

            {/* Statistics Section */}
            <motion.div
              className="mt-12 flex justify-between text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: aboutInView ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2+
                </h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  15+
                </h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  5+
                </h3>
                <p className="text-sm text-gray-200 dark:text-gray-400">Technologies Used</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
