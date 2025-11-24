import React from 'react';
import { IMAGES } from '../../utils/images';
import { FadeIn, SlideIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-therapy-warm-50 via-white to-therapy-sage-50/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74,65,55,0.08) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 md:pr-4">
            <FadeIn delay={0.2}>
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-serif text-therapy-warm-800 font-normal">
                  {t.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-therapy-sage-700 font-medium">
                  {t.hero.subtitle}
                </p>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <SlideIn delay={0.4}>
                <blockquote className="border-l-2 border-blue-300 pl-6">
                  <p className="quote-text mb-3">
                    {t.hero.quote}
                  </p>
                  <footer className="text-sm md:text-base text-therapy-sage-600 font-medium">
                    {t.hero.quoteAuthor}
                  </footer>
                </blockquote>
              </SlideIn>

              <div className="space-y-4 text-therapy-warm-700 leading-relaxed">
                <FadeIn delay={0.6}>
                  <p className="text-base md:text-lg leading-relaxed">
                    {t.hero.description}
                  </p>
                </FadeIn>
              </div>
            </div>
            
            <FadeIn delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#kontaktai" 
                  className="bg-therapy-sage-600 text-white px-6 md:px-8 py-3 md:py-4 hover:bg-therapy-sage-700 transition-all duration-300 shadow-sm text-center font-medium rounded-sm"
                >
                  {t.hero.cta}
                </a>
                <a 
                  href="#apie" 
                  className="border border-therapy-sage-600 text-therapy-sage-700 px-6 py-3 hover:bg-therapy-sage-50 transition-all duration-300 rounded-sm text-center font-medium"
                >
                  {t.hero.aboutButton}
                </a>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} direction="left">
            <div className="relative mt-8 md:mt-0 md:pl-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-sm max-w-md mx-auto">
                <div className="absolute inset-0 bg-therapy-warm-50/30 mix-blend-multiply"></div>
                <img
                  src="/images/pataisyta tinklapiui copy copy copy copy copy copy copy copy copy copy.jpg"
                  alt="Psichoterapeutas Ramutis Klimanskis"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  style={{
                    filter: 'brightness(1.05) contrast(0.95) saturate(0.95)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-therapy-warm-50/20"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}