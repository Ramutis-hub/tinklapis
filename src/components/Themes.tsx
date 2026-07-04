import React from 'react';
import { FadeIn } from './ui/animations';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { motion } from 'framer-motion';

export function Themes() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section className="py-14 md:py-20 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 mb-3 font-normal">
              {t.themes.title}
            </h2>
            <p className="text-sm md:text-base text-therapy-warm-500 leading-relaxed max-w-xl mx-auto">
              {t.themes.intro}
            </p>
          </div>
        </FadeIn>

        <motion.div
          className="flex flex-wrap justify-center gap-2.5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {t.themes.items.map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border border-therapy-warm-200 text-therapy-warm-700 text-sm rounded-sm hover:border-therapy-sage-300 hover:text-therapy-sage-700 transition-colors duration-200 cursor-default"
            >
              {item.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
