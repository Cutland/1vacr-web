import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="w-full px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Contact Us
        </h3>
        <p className="text-gray-800 dark:text-gray-200">
          Discord:{' '}
          <a
            href="https://discord.gg/4tuMAj483v"
            target="_blank"
            className="hover:underline text-blue-600 dark:text-blue-400"
          >
            Join our Discord
          </a>
        </p>
      </div>
    </motion.section>
  );
}