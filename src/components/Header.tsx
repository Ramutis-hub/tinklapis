import React, { useState } from 'react';
import { Menu, X, Circle } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-lacanian-real-950 border-b border-lacanian-symbolic-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Circle className="text-lacanian-symbolic-500" size={24} />
            <div className="flex flex-col">
              <span className="text-xl font-serif text-lacanian-real-100">Dialogo Erdvė</span>
              <span className="text-sm text-lacanian-real-300">Ramutis Klimanskis</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a href="#paslaugos" className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors">Paslaugos</a>
            <a href="#apie" className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors">Apie mane</a>
            <a href="#kontaktai" className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors">Kontaktai</a>
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
                Paslaugos
              </a>
              <a 
                href="#apie" 
                className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Apie mane
              </a>
              <a 
                href="#kontaktai" 
                className="text-lacanian-real-200 hover:text-lacanian-symbolic-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontaktai
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}