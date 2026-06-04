'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= 100) { clearInterval(interval); return 100; }
        return c + Math.ceil(Math.random() * 8);
      });
    }, 18);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 400);
    }, 1600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070709]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-32 h-12 relative">
              <Image
                src="/logo-white.png"
                alt="Flinvent"
                fill
                className="object-contain"
                priority
              />
            </div>

            <span className="font-mono text-xs text-slate-500 tabular-nums">
              {String(Math.min(count, 100)).padStart(2, '0')}
            </span>

            <div className="w-48 h-px bg-white/10 overflow-hidden rounded">
              <motion.div
                className="h-full bg-cyan-400"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(count, 100)}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
