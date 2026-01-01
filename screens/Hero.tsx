import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BRANCHES } from '../constants';
import { useAppStore } from '../store/useAppStore';

const Hero: React.FC = () => {
  const setHeroVisible = useAppStore((state) => state.setHeroVisible);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(false);
    }, 3500); // 3.5s total duration

    return () => clearTimeout(timer);
  }, [setHeroVisible]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-brand-yellow to-brand-green p-6 text-white overflow-hidden"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="font-display text-6xl md:text-8xl drop-shadow-md">i simple</h1>
        <p className="font-light tracking-[0.2em] text-sm uppercase mt-2">Mobile QR Menu</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full max-w-sm"
      >
        <p className="text-center font-semibold text-white/90 mb-4 text-xs uppercase tracking-widest border-b border-white/20 pb-2">
          Наши филиалы
        </p>
        <div className="space-y-2">
          {BRANCHES.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.15 }}
              className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-sm font-medium text-center shadow-sm"
            >
              {branch.address}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;