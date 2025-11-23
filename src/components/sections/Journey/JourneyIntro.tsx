import React from 'react';
import { Heart, Brain, Sparkles } from 'lucide-react';

const qualities = [
  {
    icon: Heart,
    title: 'Empatija',
    description: 'Kuriu saugią ir palaikančią erdvę'
  },
  {
    icon: Brain,
    title: 'Profesionalumas',
    description: 'Remiuosi mokslu pagrįstais metodais'
  },
  {
    icon: Sparkles,
    title: 'Patirtis',
    description: 'Nuolatinis profesinis tobulėjimas'
  }
];

export function JourneyIntro() {
  return (
    <div>
      <h2 className="section-title text-center">Mano kelias</h2>
      <div className="space-y-6 text-therapy-sand-700 text-center mb-12 max-w-3xl mx-auto">
        <p>
          Psichologija ir psichoterapija visada buvo neatskiriama mano gyvenimo dalis. 
          Nuo pat jaunystės jaučiau ypatingą trauką žmogaus vidiniam pasauliui, 
          santykiams ir jų dinamikai.
        </p>
        <p>
          Nuo karo pradžios Ukrainoje palaikau artimą kolegialų ryšį su psichoterapeutais 
          ir treneriais iš Ukrainos. Ši patirtis leido man giliai susipažinti su traumos 
          tematika, smurto pasekmėmis, netekties išgyvenimais ir karinių konfliktų 
          keliamais skausmais žmogaus gyvenime.
        </p>
        <p>
          Kaip psichologas ir psichoterapijos praktikas, kuriu saugią erdvę, kurioje 
          galite tyrinėti savo patirtis, emocijas ir santykius. Tikiu, kad kiekvienas 
          žmogus savyje turi atsakymus, o mano vaidmuo – padėti juos atrasti per 
          profesionalų bendradarbiavimą ir abipusį pasitikėjimą.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {qualities.map((quality, index) => (
          <div key={index} className="card hover-lift">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-therapy-sage-50 w-12 h-12 rounded-sm flex items-center justify-center">
                <quality.icon className="text-therapy-sage-600" size={24} />
              </div>
              <div>
                <h3 className="font-serif text-therapy-sand-800 mb-1">{quality.title}</h3>
                <p className="text-sm text-therapy-sand-600">{quality.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}