import React from 'react';
import { motion } from 'framer-motion';

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'left' | 'right';
}

export function SlideIn({ 
  children, 
  delay = 0, 
  duration = 0.5,
  direction = 'left'
}: SlideInProps) {
  const x = direction === 'left' ? -50 : 50;

  return (
    <motion.div
      initial={{ x, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
}