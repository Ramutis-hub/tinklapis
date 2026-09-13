import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug } from '../content';
import { ArticleLayout } from '../components/shared/ArticleLayout';
import { useLanguage } from '../hooks/useLanguage';

export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/tekstai" replace />;
  }

  return <ArticleLayout article={article} language={language} />;
}
