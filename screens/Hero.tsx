import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BRANCHES } from '../constants';
import { useAppStore } from '../store/useAppStore';

const Hero: React.FC = () => {
  const setHeroVisible = useAppStore((state) => state.setHeroVisible);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Force redirect to main menu
      setHeroVisible(false);
    }, 3500); // 3.5s total duration

    return () => clearTimeout(timer);
  }, [setHeroVisible, navigate]);

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
        className="mb-12 relative group"
      >
        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-white/40 blur-3xl rounded-full transform scale-150 opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />

        {/* Glass Container */}
        <div className="relative p-10 md:p-14 bg-white/30 backdrop-blur-2xl border border-white/40 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] flex items-center justify-center">
          <h1 className="font-display text-6xl md:text-8xl leading-none tracking-tight">
            <span className="text-red-500 drop-shadow-sm">i'</span><span className="text-brand-green drop-shadow-sm">simple</span>
          </h1>
        </div>
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
              className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 text-sm font-medium text-center shadow-sm border border-white/10"
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