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
      <Link to="/" className="inline-flex flex-col items-center text-center no-underline" style={{ gap: '5px' }}>
        <span
          className="text-therapy-warm-800 leading-none"
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: '16.5px',
            fontWeight: 600,
            letterSpacing: '0.02em',
            lineHeight: 1.05,
          }}
        >
          Ramutis Klimanskis
        </span>
        <span
          className="text-therapy-warm-500 leading-none hidden sm:block uppercase"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: '9px',
            fontWeight: 500,
            letterSpacing: '0.18em',
            lineHeight: 1,
          }}
        >
          {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
        </span>
      </Link>
    </motion.div>
  );
}
