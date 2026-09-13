import React from 'react';
import { Link } from 'react-router-dom';

interface AuthorBioProps {
  isEnglish?: boolean;
}

export function AuthorBio({ isEnglish = false }: AuthorBioProps) {
  return (
    <div className="py-10 md:py-12 border-t border-therapy-warm-200">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-sm overflow-hidden">
            <img
              src="/images/instagram copy copy.jpg"
              alt="Ramutis Klimanskis"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-serif text-lg text-therapy-warm-800 font-normal mb-1">
            Ramutis Klimanskis
          </p>
          <p className="text-sm text-therapy-warm-600 mb-4 leading-relaxed">
            {isEnglish
              ? 'Clinical psychologist, psychotherapist. I work individually and with couples in Vilnius and online.'
              : 'Klinikinis psichologas, psichoterapeutas. Dirbu individualiai ir su poromis Vilniuje bei nuotoliu.'}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/apie-mane"
              className="inline-flex items-center justify-center border border-therapy-warm-400 text-therapy-warm-800 px-5 py-2.5 hover:border-therapy-sage-500 hover:text-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm"
            >
              {isEnglish ? 'About me' : 'Apie mane'}
            </Link>
            <Link
              to="/kontaktai"
              className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-5 py-2.5 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm"
            >
              {isEnglish ? 'Book a consultation' : 'Registruotis konsultacijai'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
