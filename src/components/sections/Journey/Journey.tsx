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

        {/* Approach box with photo inside */}
        <motion.div
          className="mb-12 md:mb-16 p-6 md:p-8 bg-therapy-warm-50 rounded-sm border border-therapy-warm-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="md:flex md:gap-7 md:items-start">
            <div className="flex-1 min-w-0">
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
            </div>

            {/* Photo inside the box */}
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
        </motion.div>

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
