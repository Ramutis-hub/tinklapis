import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  title: string;
  institution?: string;
  description: string;
  benefit: string;
}

export function EducationCard({ 
  title, 
  institution, 
  description, 
  benefit 
}: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card hover-lift"
    >
      <div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
          <h3 className="text-lg font-serif text-therapy-sand-800">{title}</h3>
          {institution && (
            <span className="text-therapy-sage-600 text-sm">{institution}</span>
          )}
        </div>
        <p className="text-therapy-sand-700 text-sm mb-3">{description}</p>
        <p className="text-therapy-sand-600 text-sm italic border-l-2 border-therapy-sage-200 pl-3">
          {benefit}
        </p>
      </div>
    </motion.div>
  );
}