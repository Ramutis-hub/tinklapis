import React from 'react';
import { EducationCard } from './EducationCard';
import { continuousLearning } from './educationData';

export function ContinuousEducation() {
  return (
    <>
      <div className="text-center mb-8">
        <h3 className="text-xl font-serif text-therapy-sand-800">
          Nuolatinis profesinis tobulėjimas
        </h3>
        <p className="text-therapy-sand-700 mt-2">
          Aktyvus dalyvavimas specializuotuose mokymuose ir supervizijose
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {continuousLearning.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </>
  );
}