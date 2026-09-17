import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';

export function Logo() {
  const { language } = useLanguage();

  return (
    <motion.div
      className="flex items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link to="/" className="inline-flex flex-col items-center text-center gap-[4px]">
        <span className="text-[15px] sm:text-[15.5px] font-serif font-medium tracking-[0.045em] text-therapy-warm-800 leading-[1.05]">
          Ramutis Klimanskis
        </span>
        <span className="text-[8.5px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.18em] text-therapy-warm-500 leading-[1] hidden sm:block">
          {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
        </span>
      </Link>
    </motion.div>
  );
}
