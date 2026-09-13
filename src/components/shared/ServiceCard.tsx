import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  linkTo: string;
  linkLabel: string;
}

export function ServiceCard({ title, description, linkTo, linkLabel }: ServiceCardProps) {
  return (
    <div className="pl-6 border-l border-therapy-warm-200 transition-all duration-300 hover:border-therapy-sage-400">
      <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-4 leading-snug">
        {title}
      </h2>
      <p className="text-sm md:text-base text-therapy-warm-600 leading-relaxed mb-5">
        {description}
      </p>
      <Link
        to={linkTo}
        className="inline-flex items-center text-sm font-medium text-therapy-sage-600 hover:text-therapy-sage-700 transition-colors"
      >
        {linkLabel}
        <span className="ml-1.5 transition-transform duration-200 hover:translate-x-1">→</span>
      </Link>
    </div>
  );
}
