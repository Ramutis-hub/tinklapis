import React from 'react';
import { Heart, User, Shield, Sparkles, Clock } from 'lucide-react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/animations';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Services() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const isLt = language === 'lt';
  const specializationLabel = isLt ? 'Specializacija' : 'Specialization';

  const individualService = {
    title: t.services.individual.title,
    description: t.services.individual.description,
    duration: t.services.individual.duration,
    keywords: t.services.individual.keywords,
    icon: User,
    featured: false
  };

  const couplesService = {
    title: t.services.couples.title,
    description: t.services.couples.description,
    duration: t.services.couples.duration,
    keywords: t.services.couples.keywords,
    icon: Heart,
    featured: true
  };

  const traumaService = {
    title: t.services.trauma.title,
    description: t.services.trauma.description,
    duration: t.services.trauma.duration,
    keywords: t.services.trauma.keywords,
    icon: Shield,
    featured: false
  };

  const services = [individualService, couplesService, traumaService];

  return (
    <Section id="paslaugos" background="light" className="bg-therapy-warm-50/50">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title">
              {t.services.title}
            </h2>
            <p className="text-therapy-warm-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              {t.services.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6 md:space-y-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeatured = service.featured;

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div
                  className={`relative overflow-hidden rounded-sm transition-all duration-500 ${
                    isFeatured
                      ? 'bg-gradient-to-br from-therapy-sage-50 via-white to-therapy-warm-50/60 border-2 border-therapy-sage-300 shadow-lg md:scale-[1.02]'
                      : 'bg-white/60 border border-therapy-warm-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute top-0 right-0 bg-therapy-sage-600 text-white text-xs font-medium px-4 py-1.5 rounded-bl-sm tracking-wide uppercase">
                      {specializationLabel}
                    </div>
                  )}

                  <div className={`p-6 md:p-10 ${isFeatured ? 'pt-12 md:pt-12' : ''}`}>
                    <div className="flex flex-col items-center text-center mb-6">
                      <div
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                          isFeatured
                            ? 'bg-therapy-sage-100 text-therapy-sage-700'
                            : 'bg-therapy-warm-100 text-therapy-warm-700'
                        }`}
                      >
                        <Icon size={isFeatured ? 30 : 26} strokeWidth={1.5} />
                      </div>
                      <h3
                        className={`font-serif text-therapy-warm-900 mb-3 ${
                          isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-therapy-warm-700 leading-relaxed max-w-2xl ${
                          isFeatured ? 'text-base md:text-lg' : 'text-base md:text-lg'
                        }`}
                      >
                        {service.description}
                      </p>

                      <div
                        className={`inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full text-sm font-medium ${
                          isFeatured
                            ? 'bg-therapy-sage-100 text-therapy-sage-800'
                            : 'bg-therapy-warm-100 text-therapy-warm-800'
                        }`}
                      >
                        <Clock size={15} strokeWidth={2} />
                        <span>{t.services.durationLabel}: {service.duration}</span>
                      </div>
                    </div>

                    <ul className={`grid gap-3 max-w-2xl mx-auto ${
                      service.keywords.length === 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'
                    }`}>
                      {service.keywords.map((keyword, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-sm md:text-base ${
                            isFeatured ? 'text-therapy-warm-800' : 'text-therapy-warm-700'
                          }`}
                        >
                          <Sparkles
                            className={`flex-shrink-0 mt-0.5 ${
                              isFeatured ? 'text-therapy-sage-600' : 'text-therapy-sage-500'
                            }`}
                            size={16}
                          />
                          <span className="leading-relaxed">{keyword}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
