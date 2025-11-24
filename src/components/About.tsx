import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function About() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="apie" className="py-12 md:py-16 bg-lacanian-real-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-lacanian-real-100 text-center mb-8">
            {t.about.title}
          </h2>

          <div className="space-y-6 text-lacanian-real-200 text-justify mb-12">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-lacanian-real-900 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group">
              <Brain className="text-lacanian-symbolic-500 mx-auto mb-3 group-hover:text-lacanian-symbolic-400" size={32} />
              <h3 className="font-serif text-lacanian-real-100 mb-2 text-center">{t.about.values.professional.title}</h3>
              <p className="text-sm text-lacanian-real-200 text-center">{t.about.values.professional.description}</p>
            </div>
            <div className="bg-lacanian-real-900 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group">
              <Heart className="text-lacanian-symbolic-500 mx-auto mb-3 group-hover:text-lacanian-symbolic-400" size={32} />
              <h3 className="font-serif text-lacanian-real-100 mb-2 text-center">{t.about.values.empathy.title}</h3>
              <p className="text-sm text-lacanian-real-200 text-center">{t.about.values.empathy.description}</p>
            </div>
            <div className="bg-lacanian-real-900 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group">
              <Sparkles className="text-lacanian-symbolic-500 mx-auto mb-3 group-hover:text-lacanian-symbolic-400" size={32} />
              <h3 className="font-serif text-lacanian-real-100 mb-2 text-center">{t.about.values.experience.title}</h3>
              <p className="text-sm text-lacanian-real-200 text-center">{t.about.values.experience.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}