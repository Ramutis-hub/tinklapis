import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import type { Article } from '../../content';
import { CATEGORY_LABELS } from '../../content';
import { AuthorBio } from './AuthorBio';
import { RelatedArticles } from './RelatedArticles';

interface ArticleLayoutProps {
  article: Article;
}

export function ArticleLayout({ article }: ArticleLayoutProps) {
  const isEnglish = article.language === 'en';

  return (
    <article className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-8 md:pt-12 pb-10 md:pb-16">
        <Link
          to="/tekstai"
          className="inline-flex items-center gap-2 text-sm text-therapy-warm-500 hover:text-therapy-sage-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          {isEnglish ? 'All texts' : 'Visi tekstai'}
        </Link>

        <div className="mb-3">
          <span className="text-xs font-medium text-therapy-sage-600 tracking-wide">
            {CATEGORY_LABELS[article.category]}
          </span>
        </div>

        <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-therapy-warm-800 font-normal leading-tight mb-8 md:mb-10">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-base md:text-lg text-therapy-warm-500 font-normal italic mb-8 leading-relaxed">
            {article.subtitle}
          </p>
        )}

        <div className="space-y-5 md:space-y-6">
          {article.content.map((paragraph, i) => (
            <p
              key={i}
              className="text-base md:text-[1.0625rem] text-therapy-warm-700 leading-[1.85]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6">
        <AuthorBio isEnglish={isEnglish} />
      </div>

      <RelatedArticles article={article} />
    </article>
  );
}
