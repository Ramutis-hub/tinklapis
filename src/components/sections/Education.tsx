import React from 'react';
import { GraduationCap, Award, BookOpen, Star, Users } from 'lucide-react';
import { Section } from '../ui/Section';
import { motion } from 'framer-motion';

const education = [
  {
    icon: GraduationCap,
    title: 'Klinikinės psichologijos magistrantūra',
    institution: 'Université Côte d\'Azur (Prancūzija)',
    description: 'Specializacija psichoanalizėje, paskutinis kursas',
    details: 'Gilinimasis į psichoanalitinę teoriją ir praktiką'
  },
  {
    icon: GraduationCap,
    title: 'Psichologijos bakalauras',
    institution: 'Mykolo Romerio universitetas (Lietuva)',
    description: 'Fundamentalios psichologijos žinios ir praktika',
    details: 'Bazinis psichologijos išsilavinimas ir praktinė patirtis'
  },
  {
    icon: Award,
    title: 'Geštalto terapijos specializacija',
    institution: 'Los Andželo geštalto institutas (GATLA, JAV)',
    description: 'Gilinimasis į geštalto terapijos metodologiją',
    details: 'Mokymasis pas pasaulinio lygio specialistus'
  },
  {
    icon: BookOpen,
    title: 'Psichoanalitinė specializacija',
    institution: 'Tarptautinis Giliosios Psichologijos Institutas (Ukraina)',
    description: 'Santykių klinika ir psichoanalitinė praktika',
    details: 'Gilinimasis į psichoanalitinę teoriją ir praktiką'
  }
];

const additionalTraining = [
  {
    icon: Users,
    title: 'Mokymasis pas žymius geštalto terapeutus',
    description: 'Jean-Marie Robine, Margherita Spagnuolo Lobb, Gianni Francesetti, Bob Resnick, Lynn Jacobs, Peter Philipson, Yan Rubal ir kiti.',
  },
  {
    icon: Star,
    title: 'Nuolatinis profesinis tobulėjimas',
    description: 'Aktyvus dalyvavimas konferencijose ir supervizijose Lietuvoje ir užsienyje.',
  }
];

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

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift"
            >
              <div className="flex gap-6">
                <div className="bg-therapy-sage-50 w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-therapy-sage-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-serif text-therapy-sand-800">{item.title}</h3>
                    <span className="text-therapy-sage-600 text-sm">{item.institution}</span>
                  </div>
                  <p className="text-therapy-sand-700">{item.description}</p>
                  <p className="text-sm text-therapy-sand-600 mt-1">{item.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="section-divider"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {additionalTraining.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card hover-lift"
            >
              <div className="flex gap-4">
                <div className="bg-therapy-sage-50 w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-therapy-sage-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-serif text-therapy-sand-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-therapy-sand-600">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}