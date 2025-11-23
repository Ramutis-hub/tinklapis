import React from 'react';
import { GraduationCap, Award, BookOpen, Star, Users } from 'lucide-react';

const educationItems = [
  {
    icon: GraduationCap,
    title: 'Klinikinės psichologijos magistrantūra',
    institution: 'Université Côte d\'Azur (Prancūzija)',
    description: 'Specializacija psichoanalizėje, paskutinis kursas'
  },
  {
    icon: GraduationCap,
    title: 'Psichologijos bakalauras',
    institution: 'Mykolo Romerio universitetas (Lietuva)',
    description: 'Fundamentalios psichologijos žinios ir praktika'
  },
  {
    icon: Award,
    title: 'Psichoanalitinė specializacija',
    institution: 'Tarptautinis Giliosios Psichologijos Institutas (Ukraina)',
    description: 'Santykių klinika ir psichoanalitinė praktika'
  },
  {
    icon: Award,
    title: 'Geštalto terapijos studijos',
    institution: 'Kijevo geštalto ir Psichodramos institutas (Ukraina)',
    description: 'Nuolatinis profesinis tobulėjimas ir praktika'
  },
  {
    icon: BookOpen,
    title: 'Geštalto terapijos specializacija',
    institution: 'Los Andželo geštalto institutas (GATLA, JAV)',
    description: 'Gilinimasis į geštalto terapijos metodologiją su pasaulinio lygio specialistais'
  },
  {
    icon: Users,
    title: 'Mokymasis pas žymius geštalto terapeutus',
    institution: 'Tarptautiniai seminarai',
    description: 'Jean-Marie Robine, Margherita Spagnuolo Lobb, Gianni Francesetti, Erving Polster, Bob Resnick, Lynn Jacobs, Peter Philipson, Yan Rubal ir kiti.'
  },
  {
    icon: Star,
    title: 'Nuolatinis profesinis tobulėjimas',
    institution: 'Lietuvoje ir užsienyje',
    description: 'Aktyvus dalyvavimas konferencijose ir supervizijose, siekiant gilinti terapinę praktiką'
  }
];

export function Education() {
  return (
    <section className="py-20 bg-lacanian-real-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-lacanian-real-100 text-center mb-4">
          Išsilavinimas ir kvalifikacija
        </h2>
        <p className="text-lacanian-real-200 text-center max-w-2xl mx-auto mb-12">
          Mokymasis ir profesinis tobulėjimas su žymiais psichoterapijos specialistais 
          leidžia man giliai suprasti terapinio proceso transformuojančią galią.
        </p>
        <div className="space-y-6">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-lacanian-real-900/90 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 flex gap-6 items-start group backdrop-blur-sm"
            >
              <div className="bg-lacanian-symbolic-900/90 p-3 rounded-sm">
                <item.icon className="text-lacanian-symbolic-500 group-hover:text-lacanian-symbolic-400 transition-colors" size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-2">
                  <h3 className="text-xl font-serif text-lacanian-real-100">{item.title}</h3>
                  <span className="text-lacanian-symbolic-500 font-medium">{item.institution}</span>
                </div>
                <p className="text-lacanian-real-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}