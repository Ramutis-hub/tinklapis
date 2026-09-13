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
            className="flex flex-col gap-[3px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/" className="text-[13px] font-serif font-medium uppercase tracking-[0.07em] text-therapy-warm-100 leading-none">
              Ramutis Klimanskis
            </Link>
            <span className="text-[8px] font-sans font-normal uppercase tracking-[0.16em] text-therapy-warm-400 leading-none">
              {language === 'lt' ? 'Psichoterapija' : 'Psychotherapy'}
            </span>
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
