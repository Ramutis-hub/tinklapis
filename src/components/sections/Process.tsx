import React from 'react';
import { CircleUser as UserCircle, Sparkles, CircleDot } from 'lucide-react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Process() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const steps = [
    {
      icon: UserCircle,
      title: t.process.steps.first.title,
      description: t.process.steps.first.description
    },
    {
      icon: CircleDot,
      title: t.process.steps.safe.title,
      description: t.process.steps.safe.description
    },
    {
      icon: Sparkles,
      title: t.process.steps.integration.title,
      description: t.process.steps.integration.description
    }
  ];

  return (
    <Section background="light" className="bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">{t.process.title}</h2>
          <p className="text-base md:text-lg text-therapy-warm-700">
            {t.process.subtitle}
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex gap-6 md:gap-8 items-start hover-lift transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-therapy-sage-50 w-14 h-14 md:w-16 md:h-16 rounded-sm flex items-center justify-center flex-shrink-0">
                <step.icon className="text-therapy-sage-600" size={28} />
              </div>
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
      </div>
    </Section>
  );
}