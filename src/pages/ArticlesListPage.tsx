import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FadeIn } from '../components/ui/animations';
import { ArticleCard } from '../components/shared/ArticleCard';
import { articles, CATEGORY_LABELS } from '../content';
import type { ArticleCategory } from '../content';
import { useLanguage } from '../hooks/useLanguage';

type FilterKey = 'visi' | ArticleCategory;

const FILTER_ORDER: FilterKey[] = [
  'visi',
  'Santykiai',
  'Porų terapija',
  'Psichoterapija',
  'Artumas ir seksualumas',
  'Gedėjimas',
  'English',
];

const QUERY_PARAM = 'kategorija';

const SLUG_BY_CATEGORY: Record<ArticleCategory, string> = {
  'Santykiai': 'santykiai',
  'Porų terapija': 'poru-terapija',
  'Psichoterapija': 'psichoterapija',
  'Artumas ir seksualumas': 'artumas-ir-seksualumas',
  'Gedėjimas': 'gedejimas',
  'English': 'english',
};

const CATEGORY_BY_SLUG: Record<string, ArticleCategory> = Object.entries(SLUG_BY_CATEGORY).reduce(
  (acc, [cat, slug]) => { acc[slug] = cat as ArticleCategory; return acc; },
  {} as Record<string, ArticleCategory>
);

export function ArticlesListPage() {
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const activeFilter: FilterKey = useMemo(() => {
    const param = searchParams.get(QUERY_PARAM);
    if (param && param in CATEGORY_BY_SLUG) {
      return CATEGORY_BY_SLUG[param];
    }
    return 'visi';
  }, [searchParams]);

  const sortedArticles = useMemo(() => {
    return [...articles].sort((a, b) => {
      if (a.language !== b.language) {
        return a.language === 'lt' ? -1 : 1;
      }
      return b.publishedAt.localeCompare(a.publishedAt);
    });
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeFilter === 'visi') return sortedArticles;
    return sortedArticles.filter((a) => a.category === activeFilter);
  }, [sortedArticles, activeFilter]);

  const handleFilterClick = (filter: FilterKey) => {
    if (filter === 'visi') {
      setSearchParams({});
    } else {
      const slug = SLUG_BY_CATEGORY[filter];
      setSearchParams({ [QUERY_PARAM]: slug });
    }
  };

  const filterLabel = (key: FilterKey): string => {
    if (key === 'visi') return language === 'lt' ? 'Visi' : 'All';
    return CATEGORY_LABELS[key];
  };

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
            {FILTER_ORDER.map((key) => {
              const isActiveFilter = activeFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => handleFilterClick(key)}
                  className={`text-sm transition-colors ${
                    isActiveFilter
                      ? 'text-therapy-warm-800 font-medium'
                      : 'text-therapy-warm-400 hover:text-therapy-warm-700'
                  }`}
                >
                  <span className={isActiveFilter ? 'border-b border-therapy-warm-800 pb-0.5' : ''}>
                    {filterLabel(key)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <p className="text-sm text-therapy-warm-400 italic">
              {language === 'lt' ? 'Šioje kategorijoje tekstų kol kas nėra.' : 'No texts in this category yet.'}
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {filteredArticles.map((article, i) => (
                <FadeIn key={article.slug} delay={(i % 2) * 0.1}>
                  <ArticleCard article={article} />
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
