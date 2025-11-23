import React from 'react';
import { motion } from 'framer-motion';

interface DialogueLogoProps {
  className?: string;
  size?: number;
}

export function DialogueLogo({ className = '', size = 24 }: DialogueLogoProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="realGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#46382b" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#5a4736" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="symbolicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#526152" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#687968" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="imaginaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#506b85" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6585a1" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* The Real (bottom left) */}
        <motion.circle
          cx="35"
          cy="65"
          r="20"
          fill="url(#realGradient)"
          className="mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        
        {/* The Symbolic (bottom right) */}
        <motion.circle
          cx="65"
          cy="65"
          r="20"
          fill="url(#symbolicGradient)"
          className="mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        />
        
        {/* The Imaginary (top) */}
        <motion.circle
          cx="50"
          cy="35"
          r="20"
          fill="url(#imaginaryGradient)"
          className="mix-blend-multiply"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />

        {/* Central void (object petit a) */}
        <motion.circle
          cx="50"
          cy="50"
          r="6"
          fill="#f9f7f4"
          className="mix-blend-overlay"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring" }}
        />

        {/* Gestalt figure-ground outline */}
        <motion.path
          d="M50,20 
             A30,30 0 1,1 50,80 
             A30,30 0 1,1 50,20 
             Z"
          fill="none"
          stroke="#46382b"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </motion.g>
    </svg>
  );
}