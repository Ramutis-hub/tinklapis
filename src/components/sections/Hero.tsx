import React from 'react';
import { IMAGES } from '../../utils/images';
import { FadeIn, SlideIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-therapy-warm-50 via-white to-therapy-sage-50/30">
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74,65,55,0.08) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 md:pr-4">
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.18em] uppercase text-therapy-sage-600 font-medium">
                {t.hero.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-therapy-warm-800 font-normal leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-base md:text-lg text-therapy-sage-700 font-medium">
                  {t.hero.subtitle}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4 text-therapy-warm-700 leading-relaxed">
                {t.hero.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#kontaktai"
                  className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-6 py-3.5 hover:bg-therapy-sage-700 transition-all duration-300 shadow-sm font-medium rounded-sm text-sm md:text-base"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#poru-terapija"
                  className="inline-flex items-center justify-center border border-therapy-warm-400 text-therapy-warm-800 px-6 py-3.5 hover:border-therapy-sage-500 hover:text-therapy-sage-700 hover:bg-therapy-sage-50 transition-all duration-300 font-medium rounded-sm text-sm md:text-base"
                >
                  {t.hero.ctaCouples}
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Portrait */}
          <FadeIn delay={0.5} direction="left">
            <div className="relative mt-8 md:mt-0 md:pl-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-sm max-w-md mx-auto">
                <img
                  src="/images/pataisyta tinklapiui copy copy copy copy copy copy copy copy copy copy.jpg"
                  alt="Psichoterapeutas Ramutis Klimanskis"
                  className="w-full h-full object-cover object-center transition-all duration-500"
                  style={{ filter: 'brightness(1.05) contrast(0.95) saturate(0.95)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-therapy-warm-50/20" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
