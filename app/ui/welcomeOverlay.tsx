'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const WelcomeOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000); // Auto close in 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-green-900 to-[#d59f0f] z-[9999] flex flex-col justify-center items-center text-white"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <Image
              src='/school_logo.png'
              alt="School Logo"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
              priority
            />
          </motion.div>

          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl font-bold text-center"
          >
            Welcome to The Erudite World School
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg mt-4 text-center max-w-xl px-4"
          >
            Empowering young minds for a brighter future.
          </motion.p>

          <motion.button
            onClick={() => setIsVisible(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-8 px-6 py-3 bg-white text-[#d59f0f] font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
          >
            Enter Site
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeOverlay;
