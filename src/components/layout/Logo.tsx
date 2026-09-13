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
      <Link to="/" className="flex flex-col gap-0.5">
        <span className="text-[15px] sm:text-[16px] font-sans font-semibold uppercase tracking-[0.14em] text-therapy-warm-800 leading-none">
          Ramutis Klimanskis
        </span>
        <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.24em] text-therapy-warm-500 leading-none hidden sm:block">
          {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
        </span>
      </Link>
    </motion.div>
  );
}
