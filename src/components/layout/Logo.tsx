import React from 'react';
import { motion } from 'framer-motion';
import { DialogueLogo } from '../ui/icons/DialogueLogo';

export function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative">
        <DialogueLogo 
          size={40}
          className="text-therapy-sage-600 transform transition-transform duration-300 hover:scale-105" 
        />
        <motion.div
          className="absolute -inset-2 bg-therapy-sage-100 rounded-full blur-lg opacity-20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-serif text-therapy-warm-800 font-medium tracking-wide">
          Dialogo Erdvė
        </span>
        <span className="text-xs text-therapy-warm-600 tracking-wider">
          Psichoterapija · Ramutis Klimanskis
        </span>
      </div>
    </motion.div>
  );
}