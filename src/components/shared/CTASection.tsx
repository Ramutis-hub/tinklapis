import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  buttonText?: string;
}

export function CTASection({
  title,
  buttonText,
}: CTASectionProps) {
  return (
    <section className="py-14 md:py-20 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 font-normal mb-6 leading-snug">
          {title}
        </h2>
        <Link
          to="/kontaktai"
          className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-7 py-3.5 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm tracking-wide"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
