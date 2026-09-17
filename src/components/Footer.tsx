import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Footer() {
  const { language } = useLanguage();
  const t = useTranslations(language);

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
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="inline-flex flex-col items-center text-center no-underline" style={{ gap: '5px' }}>
              <span
                className="text-therapy-warm-100 leading-none"
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  lineHeight: 1.05,
                }}
              >
                Ramutis Klimanskis
              </span>
              <span
                className="text-therapy-warm-400 leading-none uppercase"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: '8px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  lineHeight: 1,
                }}
              >
                {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
              </span>
            </Link>
          </motion.div>

          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-therapy-warm-300 text-sm mb-2 italic">
              {t.footer.quote}
            </div>
            <div className="text-therapy-warm-300 text-xs md:text-sm">
              {t.footer.copyright}
            </div>
            <div className="text-therapy-warm-400 text-xs">
              {t.footer.rights}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
