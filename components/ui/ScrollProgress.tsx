'use client';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed right-0 top-0 w-0.5 h-full z-50 hidden md:block">
      <motion.div
        className="w-full bg-cyan-400 origin-top"
        style={{
          scaleY: scrollYProgress,
          boxShadow: '0 0 8px rgba(0,229,255,0.6)',
        }}
      />
    </div>
  );
}
