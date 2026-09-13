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
      <Link to="/" className="flex flex-col gap-[3px]">
        <span className="text-[13px] sm:text-[14.5px] font-serif font-medium uppercase tracking-[0.07em] text-therapy-warm-800 leading-none">
          Ramutis Klimanskis
        </span>
        <span className="text-[8px] sm:text-[9px] font-sans font-normal uppercase tracking-[0.16em] text-therapy-warm-500 leading-none hidden sm:block">
          {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
        </span>
      </Link>
    </motion.div>
  );
}
