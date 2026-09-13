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
        <div className="flex justify-between items-center h-[72px] md:h-[74px]">
          {/* Brand area ~26% */}
          <div className="flex-shrink-0 w-[26%]">
            <Logo />
          </div>

          {/* Navigation + actions ~74% */}
          <div className="hidden lg:flex items-center justify-end w-[74%]">
            <div className="flex items-center gap-9 mr-8">
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
              className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-4 py-2 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-[0.8rem]"
            >
              {t.contact.cta}
            </Link>
            <button
              onClick={() => changeLanguage(language === 'lt' ? 'en' : 'lt')}
              className="ml-4 text-xs text-therapy-warm-500 hover:text-therapy-sage-700 transition-colors uppercase tracking-wide font-medium"
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
              className="lg:hidden fixed inset-0 bg-black/30 z-30 top-[72px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="lg:hidden fixed left-0 right-0 top-[72px] bg-therapy-warm-50 shadow-xl z-40"
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
                      className="px-4 py-2.5 text-sm font-medium transition-colors text-therapy-warm-600 hover:text-therapy-sage-700 uppercase tracking-wide"
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
