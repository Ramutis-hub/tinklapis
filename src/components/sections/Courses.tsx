import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Courses() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <Section background="light" className="bg-therapy-sand-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-3 mx-auto hover:text-therapy-sage-700 transition-colors"
          >
            <h2 className="section-title mb-0">{t.courses.title}</h2>
            {isExpanded ? (
              <ChevronUp className="text-therapy-sage-600 group-hover:text-therapy-sage-700 transition-colors" size={24} />
            ) : (
              <ChevronDown className="text-therapy-sage-600 group-hover:text-therapy-sage-700 transition-colors" size={24} />
            )}
          </button>
          {!isExpanded && (
            <p className="text-therapy-sand-700 max-w-3xl mx-auto mt-4">
              {t.courses.subtitle}
            </p>
          )}
        </div>

        {isExpanded && (
          <div className="bg-white rounded-sm shadow-warm p-8 mt-6 border border-therapy-sand-200 animate-in slide-in-from-top-4 duration-500 ease-out">
            <p className="text-therapy-sand-700 max-w-3xl mx-auto mb-8 text-center">
              {t.courses.subtitle}
            </p>
            <ul className="space-y-4 max-h-96 overflow-y-auto">
              {t.courses.list.map((course, index) => (
                <li key={index} className="border-b border-therapy-sand-100 last:border-b-0 pb-4 last:pb-0 hover:bg-therapy-sand-50/50 px-2 py-1 rounded-sm transition-colors">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-therapy-sand-800 text-sm leading-snug">
                      {course.title}
                    </h3>
                    {course.instructor && (
                      <p className="text-therapy-sage-600 text-sm font-medium">
                        {course.instructor}
                      </p>
                    )}
                    <div className="flex items-center gap-2 text-xs text-therapy-sand-600">
                      <span>{course.year}</span>
                      {course.location && (
                        <>
                          <span>•</span>
                          <span>{course.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}