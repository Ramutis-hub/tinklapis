import React from 'react';
import { Leaf } from 'lucide-react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/animations';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Services() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const services = [
    {
      title: t.services.individual.title,
      description: t.services.individual.description,
      keywords: t.services.individual.keywords
    },
    {
      title: t.services.trauma.title,
      description: t.services.trauma.description,
      keywords: t.services.trauma.keywords
    },
    {
      title: t.services.couples.title,
      description: t.services.couples.description,
      keywords: t.services.couples.keywords
    }
  ];

  return (
    <Section id="paslaugos" background="light" className="bg-therapy-warm-50/50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t.services.title}
            </h2>
            <p className="text-therapy-warm-700 text-lg">
              {t.services.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="card hover-lift h-full flex flex-col">
                <h3 className="service-title mb-4 text-center flex-shrink-0">
                  {service.title}
                </h3>
                <p className="text-base md:text-lg text-therapy-warm-700 mb-6 flex-grow leading-relaxed text-center">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-3">
                  {service.keywords.map((keyword, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-therapy-warm-700">
                      <Leaf className="text-therapy-sage-500 flex-shrink-0 mt-1" size={16} />
                      <span>{keyword}</span>
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}