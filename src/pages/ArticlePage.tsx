import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug } from '../content';
import { ArticleLayout } from '../components/shared/ArticleLayout';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const article = slug ? getArticleBySlug(slug) : undefined;
  useDocumentMeta('article', language, article ? article.title[language] : undefined, article ? article.excerpt[language] : undefined);

  if (!article) {
    return <Navigate to="/tekstai" replace />;
  }

  return <ArticleLayout article={article} language={language} />;
}
