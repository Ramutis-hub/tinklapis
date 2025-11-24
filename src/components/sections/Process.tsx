import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Process() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const steps = [
    {
      title: t.process.steps.first.title,
      description: t.process.steps.first.description
    },
    {
      title: t.process.steps.safe.title,
      description: t.process.steps.safe.description
    },
    {
      title: t.process.steps.integration.title,
      description: t.process.steps.integration.description
    }
  ];

  return (
    <Section background="light" className="bg-white !pb-8 md:!pb-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="section-title">{t.process.title}</h2>
          <p className="text-base md:text-lg text-therapy-warm-700">
            {t.process.subtitle}
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="hover-lift transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="service-title mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-therapy-warm-200">
          <p className="text-center text-therapy-warm-700 text-base md:text-lg">
            {t.process.sessionInfo}
          </p>
        </div>
      </div>
    </Section>
  );
}