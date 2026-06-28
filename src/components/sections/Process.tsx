import React from 'react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Process() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const steps = [
    { title: t.process.steps.first.title, description: t.process.steps.first.description },
    { title: t.process.steps.safe.title, description: t.process.steps.safe.description },
    { title: t.process.steps.integration.title, description: t.process.steps.integration.description },
  ];

  return (
    <Section background="light" className="bg-therapy-warm-50/60 !pb-8 md:!pb-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="section-title">{t.process.title}</h2>
          <p className="text-base md:text-lg text-therapy-warm-700">{t.process.subtitle}</p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-therapy-sage-100 border border-therapy-sage-200 flex items-center justify-center mt-0.5">
                <span className="text-therapy-sage-700 text-sm font-medium">{index + 1}</span>
              </div>
              <div>
                <h3 className="service-title mb-2">{step.title}</h3>
                <p className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
