import React from 'react';
import { motion } from 'framer-motion';
import { DialogueLogo } from './ui/icons/DialogueLogo';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-therapy-warm-900 py-8 border-t border-therapy-warm-700/30">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <DialogueLogo 
                size={32}
                className="text-therapy-sage-400 transform transition-transform duration-300 hover:scale-105" 
              />
              <motion.div
                className="absolute -inset-2 bg-therapy-sage-600 rounded-full blur-lg opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-serif text-therapy-warm-100 font-medium tracking-wide">
                Dialogo Erdvė
              </span>
              <span className="text-xs md:text-sm text-therapy-warm-300 tracking-wider">
                Psichoterapija · Ramutis Klimanskis
              </span>
            </div>
          </motion.div>

          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-therapy-warm-300 text-sm mb-2 italic">
              „Terapija nėra receptas. Tai kelionė į save."
            </div>
            <div className="text-therapy-warm-300 text-xs md:text-sm">
              © {new Date().getFullYear()} Dialogo Erdvė
            </div>
            <div className="text-therapy-warm-400 text-xs">
              Visos teisės saugomos
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}