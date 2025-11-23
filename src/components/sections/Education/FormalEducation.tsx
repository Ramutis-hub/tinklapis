import React from 'react';
import { EducationCard } from './EducationCard';
import { formalEducation } from './educationData';

export function FormalEducation() {
  return (
    <div className="space-y-6 mb-12">
      {formalEducation.map((item, index) => (
        <EducationCard key={index} {...item} />
      ))}
    </div>
  );
}