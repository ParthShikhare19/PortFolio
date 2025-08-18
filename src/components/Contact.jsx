import React, { useRef, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_123456", // Replace with your actual EmailJS service ID
        "template_123456", // Replace with your actual EmailJS template ID
        form.current,
        "3D-pyZPI6cgPry8e6" // Replace with your actual EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("Email send error:", error.text);
          setSuccessMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-500 via-teal-500 to-purple-600 dark:from-indigo-900 dark:via-blue-800 dark:to-purple-900 text-white py-24"
      id="contact"
    >
      <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start lg:space-x-20">
          <motion.div
            className="flex-1 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-500 mb-4">
              Let’s Talk
            </h3>
            <p className="text-lg">
              I’m open to collaborating on tech projects, exploring partnership
              opportunities, and discussing innovative ideas in app and web development.
            </p>
            <div className="mt-6">
              <FaEnvelope className="inline-block text-yellow-300 mr-3" />
              <a
                href="mailto:parthshikhare21@gmail.com"
                className="hover:underline text-white"
              >
                parthshikhare21@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 w-full space-y-5 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block mb-2 text-lg font-semibold">Your Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter Your Name"
                required
                className="w-full p-3 rounded border border-white/30 text-white placeholder-white/60 bg-transparent focus:outline-none focus:border-yellow-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter Your Email"
                required
                className="w-full p-3 rounded border border-white/30 text-white placeholder-white/60 bg-transparent focus:outline-none focus:border-yellow-300"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Enter Your Message"
                required
                className="w-full p-3 rounded border border-white/30 text-white placeholder-white/60 bg-transparent focus:outline-none focus:border-yellow-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 text-white font-bold py-3 rounded-full hover:opacity-90 transition-transform duration-300 transform hover:scale-105"
            >
              Send
            </button>
            {successMessage && (
              <p className="text-yellow-300 mt-4 text-center">{successMessage}</p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
