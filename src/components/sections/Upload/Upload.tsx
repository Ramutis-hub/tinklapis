import React from 'react';
import { Section } from '../../ui/Section';
import { UploadContainer } from './UploadContainer';

export function Upload() {
  return (
    <Section background="light" className="bg-therapy-sand-50/80">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-title text-center">Dokumentų įkėlimas</h2>
        <UploadContainer />
      </div>
    </Section>
  );
}