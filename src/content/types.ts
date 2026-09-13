export type ArticleCategory =
  | 'Santykiai'
  | 'Porų terapija'
  | 'Psichoterapija'
  | 'Artumas ir seksualumas'
  | 'Gedėjimas';

export interface LocalizedText {
  lt: string;
  en: string;
}

export interface Article {
  slug: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  category: ArticleCategory;
  excerpt: LocalizedText;
  content: LocalizedText[];
  relatedSlugs: string[];
  publishedAt: string;
}

export const CATEGORY_LABELS: Record<ArticleCategory, { lt: string; en: string }> = {
  'Santykiai': { lt: 'Santykiai', en: 'Relationships' },
  'Porų terapija': { lt: 'Porų terapija', en: 'Couples therapy' },
  'Psichoterapija': { lt: 'Psichoterapija', en: 'Psychotherapy' },
  'Artumas ir seksualumas': { lt: 'Artumas ir seksualumas', en: 'Intimacy & sexuality' },
  'Gedėjimas': { lt: 'Gedėjimas', en: 'Grief' },
};
