import React from "react";
import { motion } from "framer-motion";
import employeeMSImage from "../assets/VBM.jpeg";
import flask from "../assets/flask.webp";
import budgetImg from "../assets/Pennyplanner.jpg";
import nexus from "../assets/Dash.png";
import speed from "../assets/speed.png";
import weather from "../assets/weather.png";

const projects = [
  {
    id: 1,
    name: "Virtual Bank Management",
    description: "Simulates core banking functions like passbook, fund transfers and more.",
    image: employeeMSImage,
    github: "#",
  },
  {
    id: 2,
    name: "Taskify",
    description: "To-do app that helps users organize and track daily tasks with ease.",
    image: flask,
    github: "#",
  },
  {
    id: 3,
    name: "Pennyplanner",
    description: "Budget manager for tracking expenses and analyzing spending habits.",
    image: budgetImg,
    github: "#",
  },
  {
    id: 4,
    name: "Nexus Grid",
    description: "Monitors and streamlines IT infrastructure in real time.",
    image: nexus,
    github: "#",
  },
  {
    id: 5,
    name: "SpeedoType",
    description: "Typing speed tester with real-time WPM and accuracy tracking.",
    image: speed,
    github: "#",
  },
  {
    id: 6,
    name: "Weather App",
    description: "Displays real-time weather using API data for multiple cities.",
    image: weather,
    github: "#",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white py-20"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-6xl">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white/10 dark:bg-white/10 backdrop-blur-md px-6 pb-6 pt-4 rounded-xl shadow-lg text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              whileHover={{
                scale: 1.08,
                y: -10,
                boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover shadow-md"
              />
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                {project.name}
              </h3>
              <p className="text-gray-200 mt-2 mb-4 text-sm">{project.description}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-4 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
