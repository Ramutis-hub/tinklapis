import React from 'react';
import { FadeIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Hero() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-therapy-warm-50 via-white to-therapy-sage-50/30">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74,65,55,0.1) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-20 md:pt-24 pb-0 w-full">
        {/* Top specialty tags */}
        <FadeIn delay={0.05}>
          <p className="text-xs tracking-[0.18em] uppercase text-therapy-sage-500 font-medium text-center mb-6 md:mb-8">
            {t.hero.intro}
          </p>
        </FadeIn>

        {/* Main title – full width */}
        <FadeIn delay={0.15}>
          <h1 className="text-3xl md:text-4xl lg:text-[2.85rem] font-serif text-therapy-warm-800 font-normal leading-[1.15] text-center mb-10 md:mb-14 max-w-2xl mx-auto">
            {t.hero.title}
          </h1>
        </FadeIn>

        {/* Grid: photo left, text right */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end">
          {/* Portrait – left column */}
          <FadeIn delay={0.25} direction="right">
            <div className="aspect-[4/5] rounded-t-sm overflow-hidden max-w-md mx-auto md:mx-0"
              style={{ boxShadow: '0 -4px 30px -4px rgba(74,65,55,0.12)' }}>
              <img
                src="/images/pataisyta tinklapiui copy copy copy copy copy copy copy copy copy copy.jpg"
                alt="Psichoterapeutas Ramutis Klimanskis"
                className="w-full h-full object-cover object-center"
                style={{ filter: 'brightness(1.04) contrast(0.96) saturate(0.92)' }}
              />
            </div>
          </FadeIn>

          {/* Text – right column */}
          <div className="space-y-7 pb-12 md:pb-16">
            <FadeIn delay={0.3}>
              <p className="text-base md:text-lg text-therapy-sage-700 font-normal">
                {t.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4 text-therapy-warm-700">
                {t.hero.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base md:text-[1.05rem] leading-[1.8]">
                    {para}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
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
        </div>
      </div>
    </section>
  );
}
