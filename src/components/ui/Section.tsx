import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'light' | 'dark';
}

export function Section({ 
  children, 
  className = '', 
  id,
  background = 'light'
}: SectionProps) {
  const backgrounds = {
    light: 'bg-therapy-warm-50',
    dark: 'bg-therapy-warm-900'
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${backgrounds[background]} ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}