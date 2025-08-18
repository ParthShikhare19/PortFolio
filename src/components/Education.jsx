import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import dbit from "../assets/DBIT.jpeg";
import jgm from "../assets/jgm.png";
import svv from "../assets/svv.jpg";

const educationData = [
  {
    logo: dbit,
    duration: "2023 - 2027",
    title: "Don Bosco Institute of Technology",
    subtitle: "B.E. in Information Technology",
    details: ["CGPA: 9.00 (Avg. till 3rd sem)"],
  },
  {
    logo: jgm,
    duration: "2021 - 2023",
    title: "J. G. M College of Science",
    subtitle: "HSC (12th)",
    details: ["Result: 69.00%"],
  },
  {
    logo: svv,
    duration: "2010 - 2020",
    title: "Swami Vivekanand Vidyamandir School",
    subtitle: "SSC (10th)",
    details: [
      "Scored 89.90% overall",
    ],
  },
];

const Education = () => {
  const { ref: eduRef, inView: eduInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      id="education"
      ref={eduRef}
      className="bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: eduInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>

        <div className="relative flex flex-col items-center">
          {/* Timeline Line */}
          <div className="absolute w-1 bg-white/30 h-full left-1/2 transform -translate-x-1/2 z-0" />

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                className={`w-full md:w-1/2 mb-20 z-10 ${
                  isLeft ? "md:self-start md:pr-12" : "md:self-end md:pl-12"
                }`}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={{
                  opacity: eduInView ? 1 : 0,
                  x: eduInView ? 0 : isLeft ? -100 : 100,
                }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Logo on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full border-4 border-white dark:border-gray-800 z-20 shadow-lg">
                  <img
                    src={edu.logo}
                    alt={`${edu.title} logo`}
                    className="w-16 h-16 object-contain rounded-full"
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/10 backdrop-blur-md dark:bg-black/40 p-6 rounded-xl shadow-lg border border-white/10 transition-all duration-300 ease-in-out"
                >
                  <p className="text-sm text-gray-200 mb-1">{edu.duration}</p>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-400">
                    {edu.title}
                  </h3>
                  <p className="font-semibold text-blue-100 mb-3">{edu.subtitle}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-100">
                    {edu.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
