import React, { useState } from 'react';
import { Section } from './ui/Section';
import { FadeIn } from './ui/animations';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { motion } from 'framer-motion';

function TopicList({ topics }: { topics: string[] }) {
  return (
    <ul className="space-y-2 mt-4">
      {topics.map((topic, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-therapy-warm-700">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-therapy-sage-500 flex-shrink-0" />
          {topic}
        </li>
      ))}
    </ul>
  );
}

export function Services() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <>
      {/* Intro block */}
      <section className="py-14 md:py-20 bg-therapy-sage-50/40 border-y border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 mb-5 font-normal leading-snug">
              {t.introBlock.title}
            </h2>
            <p className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
              {t.introBlock.text}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Couples therapy */}
      <Section id="poru-terapija" background="light" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
              {language === 'lt' ? 'Porų terapija Vilniuje' : 'Couples therapy Vilnius'}
            </span>
            <h2 className="section-title">{t.services.couples.title}</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-4">
              {t.services.couples.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-8 p-6 bg-therapy-warm-50 rounded-sm border border-therapy-warm-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-therapy-warm-600 mb-1">
                {language === 'lt' ? 'Dažniausios temos' : 'Common themes'}
              </h3>
              <TopicList topics={t.services.couples.topics} />
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-therapy-warm-500 italic">{t.services.couples.duration}</p>
              <a
                href="#kontaktai"
                className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-6 py-3 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm"
              >
                {t.contact.cta}
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Individual therapy */}
      <Section id="individuali-terapija" background="light" className="bg-therapy-warm-50/50">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
              {language === 'lt' ? 'Individuali psichoterapija Vilniuje' : 'Individual psychotherapy Vilnius'}
            </span>
            <h2 className="section-title">{t.services.individual.title}</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-4">
              {t.services.individual.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-8 p-6 bg-white rounded-sm border border-therapy-warm-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-therapy-warm-600 mb-1">
                {language === 'lt' ? 'Dažniausios temos' : 'Common themes'}
              </h3>
              <TopicList topics={t.services.individual.topics} />
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-therapy-warm-500 italic">{t.services.individual.duration}</p>
              <a
                href="#kontaktai"
                className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-6 py-3 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm"
              >
                {t.contact.cta}
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Sexuality & intimacy */}
      <Section id="seksualumas" background="light" className="bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
              {language === 'lt' ? 'Seksualumo ir artumo temos' : 'Sexuality and intimacy'}
            </span>
            <h2 className="section-title">{t.services.sexuality.title}</h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
              {t.services.sexuality.description}
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="mt-8 p-6 bg-therapy-warm-50 rounded-sm border border-therapy-warm-200">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-therapy-warm-600 mb-1">
                {language === 'lt' ? 'Galima tyrinėti' : 'Topics to explore'}
              </h3>
              <TopicList topics={t.services.sexuality.topics} />
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="mt-6 text-base md:text-lg text-therapy-warm-700 leading-relaxed italic border-l-2 border-therapy-sage-300 pl-5">
              {t.services.sexuality.note}
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="mt-6">
              <a
                href="#kontaktai"
                className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-6 py-3 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm"
              >
                {t.contact.cta}
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
