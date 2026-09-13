export type ArticleCategory =
  | 'Santykiai'
  | 'Porų terapija'
  | 'Psichoterapija'
  | 'Artumas ir seksualumas'
  | 'Gedėjimas'
  | 'English';

export interface ArticleParagraph {
  text: string;
}

export interface Article {
  slug: string;
  title: string;
  subtitle?: string;
  category: ArticleCategory;
  language: 'lt' | 'en';
  excerpt: string;
  content: string[];
  relatedSlugs: string[];
  publishedAt: string;
}

export const CATEGORY_LABELS: Record<ArticleCategory, string> = {
  'Santykiai': 'Santykiai',
  'Porų terapija': 'Porų terapija',
  'Psichoterapija': 'Psichoterapija',
  'Artumas ir seksualumas': 'Artumas ir seksualumas',
  'Gedėjimas': 'Gedėjimas',
  'English': 'English',
};
