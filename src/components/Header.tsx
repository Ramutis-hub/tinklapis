import React, { useState } from 'react';
import { Menu, X, Circle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <header className="bg-lacanian-real-950 border-b border-lacanian-symbolic-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Circle className="text-lacanian-symbolic-500" size={24} />
            <div className="flex flex-col">
              <span className="text-xl font-serif text-lacanian-real-100">
                {language === 'lt' ? 'Dialogo Erdvė' : 'Dialogue Space'}
              </span>
              <span className="text-sm text-lacanian-real-300">Ramutis Klimanskis</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a href="#paslaugos" className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors">{t.nav.services}</a>
            <a href="#apie" className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors">{t.nav.about}</a>
            <a href="#kontaktai" className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors">{t.nav.contact}</a>
          </div>
          <button
            className="md:hidden text-lacanian-real-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-0 right-0 bg-lacanian-real-950 border-b border-lacanian-symbolic-800 py-4 px-6 z-50">
            <div className="flex flex-col gap-4">
              <a
                href="#paslaugos"
                className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.services}
              </a>
              <a
                href="#apie"
                className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.about}
              </a>
              <a
                href="#kontaktai"
                className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}