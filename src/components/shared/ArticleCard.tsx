import React from 'react';
import { Link } from 'react-router-dom';
import type { Article } from '../../content';
import { CATEGORY_LABELS } from '../../content';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <Link
      to={`/tekstai/${article.slug}`}
      className="group block"
    >
      <article className={`bg-white border border-therapy-warm-200 rounded-sm transition-all duration-300 hover:border-therapy-sage-300 ${compact ? 'p-5' : 'p-6 md:p-7'}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium text-therapy-sage-600 tracking-wide">
            {CATEGORY_LABELS[article.category]}
          </span>
        </div>
        <h3 className={`font-serif text-therapy-warm-800 font-normal leading-snug mb-2 group-hover:text-therapy-sage-700 transition-colors ${compact ? 'text-base md:text-lg' : 'text-lg md:text-xl'}`}>
          {article.title}
        </h3>
        {!compact && (
          <p className="text-sm md:text-base text-therapy-warm-600 leading-relaxed mb-4">
            {article.excerpt}
          </p>
        )}
        <span className="inline-flex items-center text-sm text-therapy-sage-600 font-medium group-hover:text-therapy-sage-700 transition-colors">
          {article.language === 'en' ? 'Read' : 'Skaityti'}
          <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </span>
      </article>
    </Link>
  );
}
