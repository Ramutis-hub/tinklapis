import type { Article, ArticleCategory } from './types';
import { article1, article2, article3 } from './articles-1';
import { article4, article5 } from './articles-2';
import { article6, article7, article8 } from './articles-3';
import { article9, article10, article11 } from './articles-4';

export const articles: Article[] = [
  article1,
  article2,
  article3,
  article4,
  article5,
  article6,
  article7,
  article8,
  article9,
  article10,
  article11,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article): Article[] {
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== undefined);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return [
    getArticleBySlug('po-neistikimybes')!,
    getArticleBySlug('kai-artumas-tampa-atrama')!,
    getArticleBySlug('ar-as-esu-suauges')!,
  ];
}

export function getArticlesForCouplesPage(): Article[] {
  return [
    getArticleBySlug('po-neistikimybes')!,
    getArticleBySlug('kai-artumas-tampa-atrama')!,
    getArticleBySlug('meile-ir-savipakankamumo-iliuzija')!,
    getArticleBySlug('ar-mums-patogu-kalbeti-apie-seksualuma')!,
  ];
}

export function getArticlesForIndividualPage(): Article[] {
  return [
    getArticleBySlug('kai-norisi-kad-kas-nors-pasakytu-kaip-gyventi')!,
    getArticleBySlug('ar-terapija-turi-nuraminti')!,
    getArticleBySlug('ar-as-esu-suauges')!,
    getArticleBySlug('gedulas-ir-kalte')!,
    getArticleBySlug('kai-rysys-gydo')!,
  ];
}

export function getArticlesForSexualityPage(): Article[] {
  return [
    getArticleBySlug('ar-mums-patogu-kalbeti-apie-seksualuma')!,
    getArticleBySlug('some-reflections-on-sexuality-in-couples')!,
    getArticleBySlug('kai-artumas-tampa-atrama')!,
  ];
}

export { type Article, type ArticleCategory, CATEGORY_LABELS } from './types';
