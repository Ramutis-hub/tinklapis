import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

export function Logo() {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to="/" className="flex flex-col leading-tight">
        <span className="text-base font-serif text-therapy-warm-800 font-medium tracking-wide">
          Ramutis Klimanskis
        </span>
        <span className="text-[10px] text-therapy-warm-500 tracking-wider hidden sm:inline">
          {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
        </span>
      </Link>
    </motion.div>
  );
}
