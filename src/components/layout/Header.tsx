import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';
import { motion } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = useTranslations(language);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/poru-terapija', label: language === 'lt' ? 'Porų terapija' : 'Couples therapy' },
    { to: '/individuali-terapija', label: language === 'lt' ? 'Individuali terapija' : 'Individual therapy' },
    { to: '/tekstai', label: language === 'lt' ? 'Tekstai' : 'Texts' },
    { to: '/apie-mane', label: t.nav.about },
    { to: '/kontaktai', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      className={`sticky top-0 z-50 safe-area-inset transition-all duration-300
        ${isScrolled ? 'bg-therapy-warm-50/96 shadow-sm' : 'bg-therapy-warm-50/90'}
        backdrop-blur-sm border-b border-therapy-warm-200/70`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Logo />

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm transition-colors font-medium ${
                    isActive(link.to)
                      ? 'text-therapy-sage-700'
                      : 'text-therapy-warm-800 hover:text-therapy-sage-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              to="/kontaktai"
              className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-5 py-2.5 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm"
            >
              {t.contact.cta}
            </Link>
            <button
              onClick={() => changeLanguage(language === 'lt' ? 'en' : 'lt')}
              className="px-3 py-1.5 text-xs font-semibold tracking-wider text-therapy-warm-700 hover:text-therapy-sage-700 transition-colors border border-therapy-warm-300 rounded hover:border-therapy-sage-400 hover:bg-therapy-warm-100 uppercase"
            >
              {language === 'lt' ? 'EN' : 'LT'}
            </button>
          </div>

          <button
            className="lg:hidden p-2 text-therapy-warm-700 hover:text-therapy-sage-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <>
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/30 z-30 top-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="lg:hidden fixed left-0 right-0 top-16 bg-therapy-warm-50 shadow-xl z-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="px-6 py-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`text-base font-medium transition-colors py-3 border-b border-therapy-warm-200 ${
                        isActive(link.to)
                          ? 'text-therapy-sage-700'
                          : 'text-therapy-warm-800 hover:text-therapy-sage-600'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="pt-4 flex items-center gap-3">
                    <Link
                      to="/kontaktai"
                      className="flex-1 inline-flex items-center justify-center bg-therapy-sage-600 text-white px-5 py-2.5 rounded-sm text-sm font-medium"
                    >
                      {t.contact.cta}
                    </Link>
                    <button
                      onClick={() => {
                        changeLanguage(language === 'lt' ? 'en' : 'lt');
                        setIsMenuOpen(false);
                      }}
                      className="px-4 py-2.5 rounded-sm text-sm font-medium transition-colors bg-therapy-warm-100 text-therapy-warm-700 hover:bg-therapy-warm-200 border border-therapy-warm-300 uppercase"
                    >
                      {language === 'lt' ? 'EN' : 'LT'}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </nav>
    </motion.header>
  );
}
