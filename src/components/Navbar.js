import React from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle.js';

export default function Navbar() {
  return (
    <motion.nav
      className="bg-white shadow-md dark:bg-gray-800"
      initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="1VACR Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">1VACR</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#about" className="hover:underline text-gray-800 dark:text-gray-200">About</a>
          <a href="#calendar" className="hover:underline text-gray-800 dark:text-gray-200">Calendar</a>
          <a href="#join" className="hover:underline text-gray-800 dark:text-gray-200">Join Up</a>
          <a href="#rules" className="hover:underline text-gray-800 dark:text-gray-200">Rules</a>
          <a href="#contact" className="hover:underline text-gray-800 dark:text-gray-200">Contact</a>
          <a
            href="https://monitor.cutland.host/status/chc-game-services"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >Server Status</a>
          <DarkModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}