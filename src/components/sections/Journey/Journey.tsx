import React from 'react';
import { Section } from '../../ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../../../hooks/useLanguage';
import { useTranslations } from '../../../translations';

export function Journey() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <Section id="apie" background="light" className="bg-white !pt-8 md:!pt-10">
      <div className="max-w-3xl mx-auto">
        {/* About paragraphs */}
        <div className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h2 className="section-title text-center">{t.about.title}</h2>
          </div>
          <motion.div
            className="space-y-5 text-base md:text-lg leading-relaxed text-therapy-warm-700"
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

        {/* Photo (mobile only) – between About and Approach */}
        <motion.div
          className="mb-10 md:hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[4/3] rounded-sm overflow-hidden max-w-sm mx-auto"
            style={{ boxShadow: '0 6px 30px -6px rgba(74,65,55,0.15)' }}>
            <img
              src="/images/instagram copy copy.jpg"
              alt="Ramutis Klimanskis"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Approach + Photo (desktop: side by side) */}
        <div className="mb-12 md:mb-16">
          <div className="md:grid md:grid-cols-[1fr_280px] md:gap-8 items-start">
            <motion.div
              className="p-6 md:p-8 bg-therapy-warm-50 rounded-sm border border-therapy-warm-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-serif text-therapy-warm-800 mb-5 font-normal">
                {t.about.approachTitle}
              </h3>
              <div className="space-y-4">
                {t.about.approach.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Photo (desktop only) – beside Approach */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[3/4] rounded-sm overflow-hidden w-full"
                style={{ boxShadow: '0 6px 30px -6px rgba(74,65,55,0.15)' }}>
                <img
                  src="/images/instagram copy copy.jpg"
                  alt="Ramutis Klimanskis"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-serif text-therapy-warm-800 mb-6 md:mb-8 text-center font-normal">
            {t.about.education.title}
          </h3>
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
        </motion.div>
      </div>
    </Section>
  );
}
