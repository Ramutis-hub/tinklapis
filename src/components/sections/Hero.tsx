import React from 'react';
import { FadeIn, SlideIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-therapy-warm-50 via-white to-therapy-sage-50/30">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74,65,55,0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-20 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text column */}
          <div className="space-y-8 md:pr-4">
            <FadeIn delay={0.1}>
              <p className="text-xs tracking-[0.2em] uppercase text-therapy-sage-600 font-medium">
                {t.hero.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-therapy-warm-800 font-normal leading-[1.15]">
                {t.hero.title}
              </h1>
            </FadeIn>

            {/* Portrait – mobile only, after title */}
            <FadeIn delay={0.3} className="md:hidden">
              <div className="aspect-[4/5] rounded-sm overflow-hidden max-w-xs mx-auto"
                style={{ boxShadow: '0 8px 40px -8px rgba(74,65,55,0.18)' }}>
                <img
                  src="/images/pataisyta tinklapiui copy copy copy copy copy copy copy copy copy copy.jpg"
                  alt="Psichoterapeutas Ramutis Klimanskis"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'brightness(1.04) contrast(0.96) saturate(0.92)' }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="text-base md:text-lg text-therapy-sage-700 font-normal">
                {t.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="space-y-4 text-therapy-warm-700">
                {t.hero.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base md:text-[1.05rem] leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
                <a
                  href="#kontaktai"
                  className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-7 py-3.5 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm tracking-wide"
                >
                  {t.hero.cta}
                </a>
                <a
                  href="#poru-terapija"
                  className="inline-flex items-center justify-center border border-therapy-warm-400 text-therapy-warm-800 px-6 py-3.5 hover:border-therapy-sage-500 hover:text-therapy-sage-700 hover:bg-therapy-sage-50/60 transition-all duration-300 font-medium rounded-sm text-sm"
                >
                  {t.hero.ctaCouples}
                </a>
                <a
                  href="#individuali-terapija"
                  className="inline-flex items-center justify-center border border-therapy-warm-400 text-therapy-warm-800 px-6 py-3.5 hover:border-therapy-sage-500 hover:text-therapy-sage-700 hover:bg-therapy-sage-50/60 transition-all duration-300 font-medium rounded-sm text-sm"
                >
                  {t.hero.ctaIndividual}
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Portrait – desktop only, right column */}
          <FadeIn delay={0.5} direction="left" className="hidden md:block">
            <div className="relative mt-8 md:mt-0 md:pl-4">
              <div className="aspect-[4/5] rounded-sm overflow-hidden max-w-md mx-auto"
                style={{ boxShadow: '0 8px 40px -8px rgba(74,65,55,0.18)' }}>
                <img
                  src="/images/pataisyta tinklapiui copy copy copy copy copy copy copy copy copy copy.jpg"
                  alt="Psichoterapeutas Ramutis Klimanskis"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'brightness(1.04) contrast(0.96) saturate(0.92)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-therapy-warm-50/10" />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
