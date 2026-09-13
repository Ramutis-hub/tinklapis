import React from 'react';
import { FadeIn } from '../components/ui/animations';
import { ArticleCard } from '../components/shared/ArticleCard';
import { articles, CATEGORY_LABELS } from '../content';
import type { ArticleCategory } from '../content';
import { useLanguage } from '../hooks/useLanguage';

export function ArticlesListPage() {
  const { language } = useLanguage();

  const categories = Object.keys(CATEGORY_LABELS) as ArticleCategory[];
  const sortedArticles = [...articles].sort((a, b) => {
    if (a.language !== b.language) {
      return a.language === 'lt' ? -1 : 1;
    }
    return b.publishedAt.localeCompare(a.publishedAt);
  });

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-14">
        <FadeIn>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-therapy-warm-800 font-normal leading-tight mb-4">
            {language === 'lt' ? 'Tekstai' : 'Texts'}
          </h1>
          <p className="text-base md:text-lg text-therapy-warm-600 leading-relaxed max-w-2xl">
            {language === 'lt'
              ? 'Mintys apie santykius, psichoterapiją, artumą ir žmogaus patirtį.'
              : 'Thoughts on relationships, psychotherapy, intimacy and human experience.'}
          </p>
        </FadeIn>
      </div>

      <section className="py-6 md:py-8 border-y border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-sm text-therapy-warm-500"
              >
                {CATEGORY_LABELS[cat]}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {sortedArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={(i % 2) * 0.1}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
