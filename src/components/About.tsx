import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <section id="apie" className="py-20 bg-lacanian-real-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-lacanian-real-100 text-center mb-8">
            Apie mane
          </h2>
          
          <div className="space-y-6 text-lacanian-real-200 text-center mb-12">
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
            <div className="bg-lacanian-real-900 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group">
              <Brain className="text-lacanian-symbolic-500 mx-auto mb-3 group-hover:text-lacanian-symbolic-400" size={32} />
              <h3 className="font-serif text-lacanian-real-100 mb-2 text-center">Profesionalus požiūris</h3>
              <p className="text-sm text-lacanian-real-200 text-center">Remiuosi mokslu pagrįstais metodais</p>
            </div>
            <div className="bg-lacanian-real-900 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group">
              <Heart className="text-lacanian-symbolic-500 mx-auto mb-3 group-hover:text-lacanian-symbolic-400" size={32} />
              <h3 className="font-serif text-lacanian-real-100 mb-2 text-center">Empatija</h3>
              <p className="text-sm text-lacanian-real-200 text-center">Kuriu saugią ir palaikančią erdvę</p>
            </div>
            <div className="bg-lacanian-real-900 p-6 rounded-sm border border-lacanian-symbolic-800 hover:border-lacanian-symbolic-700 transition-all duration-300 group">
              <Sparkles className="text-lacanian-symbolic-500 mx-auto mb-3 group-hover:text-lacanian-symbolic-400" size={32} />
              <h3 className="font-serif text-lacanian-real-100 mb-2 text-center">Patirtis</h3>
              <p className="text-sm text-lacanian-real-200 text-center">Nuolatinis profesinis tobulėjimas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}