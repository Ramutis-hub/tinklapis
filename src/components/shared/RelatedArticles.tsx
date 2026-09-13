import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../content';
import { getRelatedArticles, CATEGORY_LABELS } from '../../content';
import type { Language } from '../../hooks/useLanguage';

interface RelatedArticlesProps {
  article: Article;
  language: Language;
}

export function RelatedArticles({ article, language }: RelatedArticlesProps) {
  const related = getRelatedArticles(article);
  if (related.length === 0) return null;

  const lang = language;

  return (
    <section className="bg-therapy-warm-50/60 border-t border-therapy-warm-200/60 py-12 md:py-16">
      <div className="max-w-[44rem] mx-auto px-6">
        <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 font-normal mb-6">
          {lang === 'en' ? 'Related writing' : 'Susiję tekstai'}
        </h2>
        <div className="space-y-4">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              to={`/tekstai/${rel.slug}`}
              className="group block"
            >
              <div className="bg-white border border-therapy-warm-200 rounded-sm p-5 transition-all duration-300 hover:border-therapy-sage-300">
                <span className="text-xs font-medium text-therapy-sage-600 tracking-wide block mb-1.5">
                  {CATEGORY_LABELS[rel.category][lang]}
                </span>
                <h3 className="text-base md:text-lg font-serif text-therapy-warm-800 font-normal leading-snug group-hover:text-therapy-sage-700 transition-colors">
                  {rel.title[lang]}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
