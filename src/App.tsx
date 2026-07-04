import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Process } from './components/sections/Process';
import { Journey } from './components/sections/Journey/Journey';
import { Services } from './components/Services';
import { Themes } from './components/Themes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLanguage } from './hooks/useLanguage';

export function App() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-therapy-sand-50">
      <Header key={`header-${language}`} />
      <main key={`main-${language}`}>
        <Hero key={`hero-${language}`} />
        <Services key={`services-${language}`} />
        <Process key={`process-${language}`} />
        <Themes key={`themes-${language}`} />
        <Journey key={`journey-${language}`} />
        <Contact key={`contact-${language}`} />
      </main>
      <Footer key={`footer-${language}`} />
    </div>
  );
}

export default App;