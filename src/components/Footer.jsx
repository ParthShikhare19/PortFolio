import React from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white dark:text-white py-10 transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between items-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm text-gray-200 dark:text-gray-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-5">
            <motion.a
              href="https://www.instagram.com/parthshikhare_19/"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <FaInstagram size={22} />
            </motion.a>
            <motion.a
              href="https://x.com/_parthaaaa_"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <FaTwitter size={22} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/parth-shikhare-854567302/"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a
              href="https://github.com/ParthShikhare19"
              whileHover={{ scale: 1.2 }}
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <FaGithub size={22} />
            </motion.a>
          </div>
        </motion.div>
        <div className="h-[1px] bg-white/30 mt-4"></div>
        <motion.p
          className="text-center text-sm text-gray-300 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
