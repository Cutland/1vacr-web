import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/banner.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <motion.div
        className="relative z-10 flex items-center justify-center h-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">1st Virtual Australian Combat Regiment</h2>
          <p className="text-lg md:text-2xl">Join us in DCS World &amp; ARMA Operations</p>
        </div>
      </motion.div>
    </section>
  );
}