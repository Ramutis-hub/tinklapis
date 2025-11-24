import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-50 safe-area-inset transition-all duration-300
        ${isScrolled ? 'bg-therapy-warm-50/95 shadow-sm' : 'bg-transparent'}
        backdrop-blur-sm border-b border-therapy-warm-200/80`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <motion.div className="flex items-center gap-8">
              <a href="#paslaugos" className="nav-link">{t.nav.services}</a>
              <a href="#apie" className="nav-link">{t.nav.about}</a>
              <a href="#kontaktai" className="nav-link">{t.nav.contact}</a>
            </motion.div>
            
            {/* Language Switcher - Desktop */}
            <motion.div className="flex items-center ml-4">
              <div className="flex bg-therapy-warm-100 rounded-sm overflow-hidden">
                <button
                  onClick={() => changeLanguage('lt')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'lt' 
                      ? 'bg-therapy-sage-600 text-white' 
                      : 'text-therapy-warm-700 hover:bg-therapy-warm-200'
                  }`}
                >
                  LT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'en' 
                      ? 'bg-therapy-sage-600 text-white' 
                      : 'text-therapy-warm-700 hover:bg-therapy-warm-200'
                  }`}
                >
                  EN
                </button>
              </div>
            </motion.div>
          </div>

          <button 
            className="md:hidden p-2 text-therapy-warm-700 hover:text-therapy-sage-700 transition-colors"
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
              className="md:hidden fixed inset-0 bg-black/30 z-30 top-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="md:hidden fixed left-0 right-0 top-16 bg-therapy-warm-50 shadow-xl z-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="px-6 py-6">
                <div className="flex flex-col gap-4">
                  <a
                    href="#paslaugos"
                    className="text-lg font-medium text-therapy-warm-800 hover:text-therapy-sage-600 transition-colors py-3 border-b border-therapy-warm-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.services}
                  </a>
                  <a
                    href="#apie"
                    className="text-lg font-medium text-therapy-warm-800 hover:text-therapy-sage-600 transition-colors py-3 border-b border-therapy-warm-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.about}
                  </a>
                  <a
                    href="#kontaktai"
                    className="text-lg font-medium text-therapy-warm-800 hover:text-therapy-sage-600 transition-colors py-3 border-b border-therapy-warm-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </a>

                  <div className="pt-2">
                    <div className="mb-3">
                      <span className="text-sm text-therapy-warm-600 font-medium">Kalba / Language</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => {
                          changeLanguage('lt');
                          setIsMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                          language === 'lt'
                            ? 'bg-therapy-sage-600 text-white shadow-sm'
                            : 'bg-therapy-warm-100 text-therapy-warm-700 hover:bg-therapy-warm-200'
                        }`}
                      >
                        Lietuvių
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage('en');
                          setIsMenuOpen(false);
                        }}
                        className={`flex-1 px-4 py-2.5 rounded-sm text-sm font-medium transition-colors ${
                          language === 'en'
                            ? 'bg-therapy-sage-600 text-white shadow-sm'
                            : 'bg-therapy-warm-100 text-therapy-warm-700 hover:bg-therapy-warm-200'
                        }`}
                      >
                        English
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