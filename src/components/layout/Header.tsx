import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { useLanguage } from '../../hooks/useLanguage';
import type { Language } from '../../hooks/useLanguage';
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
    { to: '/individuali-terapija', label: language === 'lt' ? 'Individuali terapija' : 'Individual Therapy' },
    { to: '/tekstai', label: language === 'lt' ? 'Tekstai' : 'Writing' },
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
      <nav className="mx-auto max-w-[1240px] px-6 md:px-8">
        <div className="flex justify-between items-center h-[68px] md:h-[72px]">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop navigation + actions */}
          <div className="hidden lg:flex h-full items-center">
            <div className="flex h-full items-center gap-7 mr-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`inline-flex h-full items-center leading-none text-sm transition-colors font-medium ${
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
              className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-4 py-2 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-[0.8rem] h-[40px]"
            >
              {t.contact.cta}
            </Link>
            <div className="ml-5 flex items-center gap-1.5 text-xs text-therapy-warm-400">
              <button
                onClick={() => changeLanguage('lt')}
                className={`transition-colors font-medium ${language === 'lt' ? 'text-therapy-warm-800 border-b border-therapy-warm-800 pb-0.5' : 'hover:text-therapy-warm-700'}`}
              >
                LT
              </button>
              <span className="text-therapy-warm-300">·</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`transition-colors font-medium ${language === 'en' ? 'text-therapy-warm-800 border-b border-therapy-warm-800 pb-0.5' : 'hover:text-therapy-warm-700'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
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
              className="lg:hidden fixed inset-0 bg-black/30 z-30 top-[68px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="lg:hidden fixed left-0 right-0 top-[68px] bg-therapy-warm-50 shadow-xl z-40"
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
                    <div className="flex items-center gap-1.5 text-sm text-therapy-warm-400">
                      <button
                        onClick={() => {
                          changeLanguage('lt');
                          setIsMenuOpen(false);
                        }}
                        className={`font-medium transition-colors ${language === 'lt' ? 'text-therapy-warm-800' : 'hover:text-therapy-warm-700'}`}
                      >
                        LT
                      </button>
                      <span className="text-therapy-warm-300">·</span>
                      <button
                        onClick={() => {
                          changeLanguage('en');
                          setIsMenuOpen(false);
                        }}
                        className={`font-medium transition-colors ${language === 'en' ? 'text-therapy-warm-800' : 'hover:text-therapy-warm-700'}`}
                      >
                        EN
                      </button>
                    </div>
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
