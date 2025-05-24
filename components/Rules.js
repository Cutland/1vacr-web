import React from 'react';
import { motion } from 'framer-motion';

export default function Rules() {
  return (
    <motion.section
      id="rules"
      className="w-full px-4 py-12 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Rules & Policies</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
          <li>No cheating or griefing – respect the fair play spirit.</li>
          <li>Use clear radio comms: brevity, accuracy, callsigns.</li>
          <li>Respect all members; abusive language or harassment won't be tolerated.</li>
          <li>Attend scheduled ops on time; if you can't make it, let us know.</li>
          <li>Follow mission briefings and CO instructions for safety and cohesion.</li>
        </ul>
      </div>
    </motion.section>
  );
}