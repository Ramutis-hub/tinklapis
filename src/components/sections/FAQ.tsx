import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { FadeIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FAQItem[] = [
    {
      question: t.faq.items.duration.question,
      answer: t.faq.items.duration.answer
    },
    {
      question: t.faq.items.frequency.question,
      answer: t.faq.items.frequency.answer
    },
    {
      question: t.faq.items.online.question,
      answer: t.faq.items.online.answer
    },
    {
      question: t.faq.items.confidentiality.question,
      answer: t.faq.items.confidentiality.answer
    },
    {
      question: t.faq.items.preparation.question,
      answer: t.faq.items.preparation.answer
    },
    {
      question: t.faq.items.approach.question,
      answer: t.faq.items.approach.answer
    },
    {
      question: t.faq.items.crisis.question,
      answer: t.faq.items.crisis.answer
    }
  ];

  return (
    <Section id="duk" background="light" className="bg-therapy-sand-50">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t.faq.title}
            </h2>
            <p className="text-therapy-sand-600 text-lg">
              {t.faq.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white rounded-lg shadow-sm border border-therapy-sand-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-therapy-sand-50 focus:bg-therapy-sand-50 transition-colors duration-200"
                  tabIndex={0}
                >
                  <h3 className="font-medium text-therapy-sand-800 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-therapy-sage-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-therapy-sage-600 flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-therapy-sand-100 pt-4">
                      <p className="text-therapy-sand-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.8}>
          <div className="text-center mt-12">
            <p className="text-therapy-sand-600 mb-6">
              {t.faq.contactPrompt}
            </p>
            <a
              href="#kontaktai"
              className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-6 py-3 rounded-sm hover:bg-therapy-sage-700 focus:bg-therapy-sage-700 transition-colors duration-200"
              tabIndex={0}
            >
              {t.faq.contactButton}
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}