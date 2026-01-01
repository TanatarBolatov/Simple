import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useAppStore } from '../store/useAppStore';
import { UI_TEXT } from '../constants';

const BannerSlider: React.FC = () => {
    const { language } = useAppStore();
    const t = UI_TEXT[language];

    const BANNERS = [
        {
            id: 1,
            badge: t.new,
            title: t.seasonal,
            subtitle: t.seasonalDesc,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
            color: "from-brand-yellow to-brand-green",
            textColor: "text-brand-dark"
        },
        {
            id: 2,
            badge: t.breakfast,
            title: t.morning,
            subtitle: t.morningDesc,
            image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=1200&q=80",
            color: "from-orange-400 to-red-500",
            textColor: "text-white"
        },
        {
            id: 3,
            badge: t.discount,
            title: t.sweetHour,
            subtitle: t.sweetHourDesc,
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=80",
            color: "from-purple-600 to-indigo-600",
            textColor: "text-white"
        }
    ];

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [index]);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % BANNERS.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? BANNERS.length - 1 : prev - 1));
    };

    // Drag logic for mobile swipe
    const handleDragEnd = (event: any, info: any) => {
        if (info.offset.x < -50) {
            nextSlide();
        } else if (info.offset.x > 50) {
            prevSlide();
        }
    };

    const currentBanner = BANNERS[index];

    // Animation Variants for Staggered Effect
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 50 }
        }
    };

    const imageVariants: Variants = {
        initial: { scale: 1.1, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
        exit: { opacity: 0 }
    };

    return (
        <div className="relative w-full h-56 rounded-2xl overflow-hidden bg-gray-200 shadow-lg group touch-pan-y">
            <AnimatePresence initial={false} mode="wait">
                <motion.div
                    key={index}
                    className="absolute inset-0 w-full h-full"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                >
                    {/* Background Image */}
                    <motion.img
                        src={currentBanner.image}
                        alt={currentBanner.title}
                        className="w-full h-full object-cover absolute inset-0"
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content Container */}
                    <motion.div
                        className="absolute inset-0 p-6 flex flex-col justify-end items-start"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Badge */}
                        <motion.span
                            variants={itemVariants}
                            className={`bg-gradient-to-r ${currentBanner.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-md`}
                        >
                            {currentBanner.badge}
                        </motion.span>

                        {/* Title */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-white font-display text-3xl mb-1 leading-tight drop-shadow-sm"
                        >
                            {currentBanner.title}
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className="text-white/90 text-sm font-medium leading-snug max-w-[80%] mb-4"
                        >
                            {currentBanner.subtitle}
                        </motion.p>
                    </motion.div>
                </motion.div>
            </AnimatePresence>

            {/* Indicators (Trails) */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                {BANNERS.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setDirection(i > index ? 1 : -1);
                            setIndex(i);
                        }}
                        className="h-1.5 rounded-full transition-all duration-500 cursor-pointer backdrop-blur-sm"
                        style={{
                            width: i === index ? '24px' : '8px',
                            backgroundColor: i === index ? '#FACC15' : 'rgba(255,255,255,0.5)'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;