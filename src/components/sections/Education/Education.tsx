import React from 'react';
import { Section } from '../../ui/Section';
import { FormalEducation } from './FormalEducation';
import { ContinuousEducation } from './ContinuousEducation';

export function Education() {
  return (
    <Section background="light" className="bg-therapy-sand-50/80">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Išsilavinimas ir kvalifikacija</h2>
          <p className="text-therapy-sand-700 max-w-2xl mx-auto">
            Nuolatinis mokymasis ir profesinis tobulėjimas su žymiais psichoterapijos 
            specialistais leidžia man giliai suprasti terapinio proceso transformuojančią galią.
          </p>
        </div>

        <FormalEducation />
        
        <div className="section-divider"></div>
        
        <ContinuousEducation />
      </div>
    </Section>
  );
}