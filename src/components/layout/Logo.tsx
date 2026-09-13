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
      <Link to="/" className="flex flex-col justify-center gap-[3px]">
        <span className="text-[13.5px] sm:text-[14.5px] font-serif font-medium uppercase tracking-[0.07em] text-therapy-warm-800 leading-[1.05]">
          Ramutis Klimanskis
        </span>
        <span className="text-[8.5px] sm:text-[9px] font-sans font-normal uppercase tracking-[0.16em] text-therapy-warm-500 leading-[1.05] hidden sm:block">
          {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
        </span>
      </Link>
    </motion.div>
  );
}
