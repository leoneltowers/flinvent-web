'use client';
import { motion } from 'framer-motion';
import { wordReveal } from '@/lib/animations';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export default function SplitText({
  text,
  className = '',
  delay = 0,
  stagger = 0.08,
  once = true,
}: SplitTextProps) {
  const words = text.split(' ');

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span
            className="inline-block"
            variants={wordReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}
