import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/media/img1.png',
  '/media/img2.png',
  '/media/img3.png',
  '/media/img4.png',
  // …add as many as you like
];

export default function Media() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ticker = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 4000); // every 4 seconds
    return () => clearInterval(ticker);
  }, []);

  return (
    <section id="media" className="w-full px-4 py-12 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">Media Gallery</h3>
        <div className="relative overflow-hidden rounded-lg shadow-md h-64">
          <AnimatePresence>
            <motion.img
              key={images[index]}
              src={images[index]}
              alt={`Slide ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
