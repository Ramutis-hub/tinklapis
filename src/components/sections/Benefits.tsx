import React from 'react';
import { Heart, Brain, Leaf, Shield } from 'lucide-react';
import { Section } from '../ui/Section';
import { FadeIn, ScaleIn } from '../ui/animations';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslations } from '../../translations';

export function Benefits() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  const benefits = [
    {
      icon: Heart,
      title: "Priėmimas",
      description: "Galėsite kalbėti apie savo patirtis be vertinimo. Kuriu saugią erdvę, kurioje kiekvienas jūsų žodis yra svarbus ir girdimas."
    },
    {
      icon: Brain,
      title: "Profesionali pagalba",
      description: "Remiuosi klinikinės psichologijos, psichoanalizės ir Gestalt principais. Kiekvienas seansas pritaikytas jūsų individualių poreikių."
    },
    {
      icon: Shield,
      title: "Patirtis",
      description: "Magistrą baigiau Prancūzijoje, nuolat mokausi tarptautiniuose mokymuose. Turiu patirties su įvairiomis temomis – nuo kasdienių iššūkių iki traumų."
    },
    {
      icon: Leaf,
      title: "Augimo galimybės",
      description: "Terapija padeda atrasti naujus būdus įveikti sunkumus ir gyventi prasmingiau. Kartu tyrinėsime jūsų stiprybes ir augimo galimybes."
    }
  ];

  return (
    <Section background="light" className="bg-amber-50/30">
      <FadeIn>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">Kas jūsų laukia terapijoje?</h2>
          <p className="text-slate-700 text-lg">
            Terapijos principai, kurie padeda kurti saugią ir efektyvią terapinę erdvę.
          </p>
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <ScaleIn key={index} delay={index * 0.1}>
            <div className="bg-white p-8 rounded-sm shadow-lg border border-amber-200 hover:border-amber-300 transition-all duration-300 hover-lift">
              <div className="bg-amber-50 w-14 h-14 rounded-sm flex items-center justify-center mb-6">
                <benefit.icon className="text-amber-600" size={28} />
              </div>
              <h3 className="text-xl font-serif text-slate-700 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </ScaleIn>
        ))}
      </div>
    </Section>
  );
}