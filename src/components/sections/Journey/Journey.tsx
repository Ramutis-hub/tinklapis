import React from 'react';
import { Section } from '../../ui/Section';
import { motion } from 'framer-motion';
import { EducationCard } from '../Education/EducationCard';
import { Courses } from '../Courses';
import { useLanguage } from '../../../hooks/useLanguage';
import { useTranslations } from '../../../translations';

export function Journey() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <Section id="apie" background="light" className="bg-white !pt-8 md:!pt-10">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 md:space-y-8 text-slate-700 mb-10 md:mb-12">
          <div className="text-center">
            <h2 className="section-title text-center">{t.about.title}</h2>
          </div>
          
          <motion.div 
            className="space-y-6 text-base md:text-lg leading-relaxed text-therapy-warm-700 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-10 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-serif text-therapy-warm-800 mb-6 md:mb-8 text-center">{t.about.education.title}</h3>
          <div className="space-y-6 text-therapy-warm-700 max-w-3xl mx-auto">
            {t.about.education.items.map((item, index) => (
              <div key={index} className="text-sm md:text-base leading-relaxed">
                <div className="font-medium text-therapy-warm-900 mb-1">{item.title}</div>
                <div className="text-therapy-sage-600">{item.institution}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 md:mt-8 pt-4 md:pt-6">
            <p className="text-therapy-warm-600 text-center text-sm italic max-w-2xl mx-auto">
              {t.about.education.note}
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}