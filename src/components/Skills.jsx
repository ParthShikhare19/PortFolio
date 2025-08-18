import React from "react";
import flask from "../assets/flask.png";
import django from "../assets/django.png";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import java from "../assets/java.png";
import python from "../assets/python.jpg";
import mysql from "../assets/mysql.png";
import c from "../assets/c.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import { motion } from "framer-motion";

const skills = [
  { id: 1, title: "HTML 5", image: html },
  { id: 2, title: "CSS 3", image: css },
  { id: 3, title: "JavaScript", image: js },
  { id: 4, title: "C Programming", image: c },
  { id: 5, title: "Java", image: java },
  { id: 6, title: "MySQL", image: mysql },
  { id: 7, title: "Python", image: python },
  { id: 8, title: "Django", image: django },
  { id: 9, title: "MongoDB", image: mongo },
  { id: 10, title: "Express.JS", image: express },
  { id: 11, title: "React.JS", image: react },
  { id: 12, title: "NodeJ.S", image: node },
];

const Skills = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white py-16" id="skills">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-10 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Skillset
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white/10 dark:bg-white/10 backdrop-blur-md px-6 pb-6 rounded-lg shadow-md text-center flex flex-col items-center"
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
                src={skill.image}
                alt={skill.title}
                className="rounded-lg mb-4 w-24 h-24 object-cover transform transition-all duration-300 ease-in-out"
              />
              <h3 className="mt-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                {skill.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
