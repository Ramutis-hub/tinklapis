import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../content';
import { CATEGORY_LABELS } from '../../content';
import type { Language } from '../../hooks/useLanguage';

interface ArticleCardProps {
  article: Article;
  language: Language;
  compact?: boolean;
}

export function ArticleCard({ article, language, compact = false }: ArticleCardProps) {
  const lang = language;
  return (
    <Link
      to={`/tekstai/${article.slug}`}
      className="group block h-full"
    >
      <article className="flex flex-col h-full pb-5 border-b border-therapy-warm-200 transition-all duration-300 hover:border-therapy-sage-300">
        <span className="text-xs font-medium text-therapy-sage-600 tracking-wide mb-3">
          {CATEGORY_LABELS[article.category][lang]}
        </span>
        <h3 className={`font-serif text-therapy-warm-800 font-normal leading-snug mb-3 group-hover:text-therapy-sage-700 transition-colors ${compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
          {article.title[lang]}
        </h3>
        {!compact && (
          <p className="flex-1 text-sm text-therapy-warm-500 leading-relaxed mb-4">
            {article.excerpt[lang]}
          </p>
        )}
        <span className="inline-flex items-center text-sm text-therapy-sage-600 font-medium group-hover:text-therapy-sage-700 transition-colors mt-auto">
          {lang === 'en' ? 'Read' : 'Skaityti'}
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </article>
    </Link>
  );
}
