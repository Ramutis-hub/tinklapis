import React from 'react';
import { BookOpen, Users, Compass, Lightbulb } from 'lucide-react';

const philosophies = [
  {
    icon: BookOpen,
    title: 'Teorinis pagrindas',
    description: 'Remiuosi Byung-Chul Han, Lacan, Martin Buber ir kitų mąstytojų įžvalgomis apie žmogaus prigimtį ir santykius.'
  },
  {
    icon: Users,
    title: 'Santykio svarba',
    description: 'Terapijoje vadovaujuosi Buber "Aš-Tu" filosofija ir Lacano Kito priėmimo principais.'
  },
  {
    icon: Compass,
    title: 'Geštalto metodas',
    description: 'Naudoju Fritz Perls ir Bob Resnick geštalto terapijos metodus, padedančius atrasti save.'
  },
  {
    icon: Lightbulb,
    title: 'Holistinis požiūris',
    description: 'Derinu psichoanalizės ir geštalto terapijos elementus, siekdamas gilesnio savęs pažinimo.'
  }
];

export function Philosophy() {
  return (
    <section className="py-20 bg-lacanian-real-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-lacanian-real-100 text-center mb-4">
          Terapijos filosofija
        </h2>
        <p className="text-lacanian-real-200 text-center max-w-2xl mx-auto mb-12">
          Mano terapinis metodas remiasi giliu teoriniu pagrindu ir asmenine patirtimi, 
          derinant klasikinės psichoanalizės įžvalgas su šiuolaikiniais geštalto terapijos metodais.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {philosophies.map((item, index) => (
            <div 
              key={index} 
              className="bg-lacanian-real-900/80 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group"
            >
              <div className="bg-lacanian-symbolic-900 p-3 rounded-sm inline-block mb-4">
                <item.icon className="text-lacanian-symbolic-500 group-hover:text-lacanian-symbolic-400" size={24} />
              </div>
              <h3 className="text-xl font-serif text-lacanian-real-100 mb-2">{item.title}</h3>
              <p className="text-lacanian-real-200">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}