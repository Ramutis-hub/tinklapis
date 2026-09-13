import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function NotFoundPage() {
  const { language } = useLanguage();
  useDocumentMeta('notFound', language);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-therapy-warm-50">
      <div className="text-center px-6">
        <h1 className="text-2xl md:text-3xl font-serif text-therapy-warm-800 font-normal mb-4">
          {language === 'lt' ? 'Puslapis nerastas' : 'Page not found'}
        </h1>
        <p className="text-sm md:text-base text-therapy-warm-600 mb-8">
          {language === 'lt' ? 'Toks puslapis neegzistuoja.' : 'This page does not exist.'}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-therapy-warm-900 text-white px-6 py-3 hover:bg-therapy-warm-800 transition-all duration-300 font-medium rounded-sm text-sm"
        >
          {language === 'lt' ? 'Į pradžią' : 'Home'}
        </Link>
      </div>
    </div>
  );
}
