import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/animations';
import { CTASection } from '../components/shared/CTASection';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function AboutPage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  useDocumentMeta('about', language);

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-14">
        <FadeIn>
          <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
            {language === 'lt' ? 'Apie mane' : 'About me'}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-therapy-warm-800 font-normal leading-tight mb-10">
            {t.about.title}
          </h1>
        </FadeIn>

        {/* About paragraphs */}
        <FadeIn delay={0.1}>
          <div className="space-y-5 text-base md:text-lg leading-relaxed text-therapy-warm-700">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        {/* Approach box with photo */}
        <FadeIn delay={0.2}>
          <div className="mt-12 p-6 md:p-8 bg-therapy-warm-50 rounded-sm border border-therapy-warm-200">
            <div className="md:flex md:gap-7 md:items-start">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 mb-5 font-normal">
                  {t.about.approachTitle}
                </h2>
                <div className="space-y-4">
                  {t.about.approach.split('\n\n').map((para, i) => (
                    <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-7 md:mt-0 md:flex-shrink-0 md:w-52">
                <div className="aspect-[3/4] rounded-sm overflow-hidden"
                  style={{ boxShadow: '0 4px 20px -4px rgba(74,65,55,0.14)' }}>
                  <img
                    src="/images/instagram copy copy.jpg"
                    alt="Ramutis Klimanskis"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Education */}
        <FadeIn delay={0.3}>
          <div className="mt-12">
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 mb-6 md:mb-8 font-normal">
              {t.about.education.title}
            </h2>
            <div className="space-y-5 text-therapy-warm-700">
              {t.about.education.items.map((item, index) => (
                <div key={index} className="text-sm md:text-base leading-relaxed pl-4 border-l border-therapy-warm-200">
                  <div className="font-medium text-therapy-warm-900 mb-0.5">{item.title}</div>
                  <div className="text-therapy-sage-600">{item.institution}</div>
                  {item.details && (
                    <div className="text-therapy-warm-500 text-sm mt-0.5 italic">{item.details}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-therapy-warm-200">
              <p className="text-therapy-warm-500 text-center text-sm italic">
                {t.about.education.note}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <CTASection
        title={language === 'lt' ? 'Norite susisiekti?' : 'Want to get in touch?'}
        buttonText={t.contact.cta}
      />
    </div>
  );
}
