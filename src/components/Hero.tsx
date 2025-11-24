import React from 'react';
import { IMAGES } from '../utils/images';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-lacanian-symbolic-50">
      <div className="absolute inset-0 bg-gradient-to-r from-lacanian-symbolic-50/98 to-lacanian-symbolic-50/95"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in">
            <h1 className="text-4xl md:text-5xl font-serif text-lacanian-real-800">
              Dialogo Erdvė
            </h1>
            <p className="text-xl text-lacanian-real-600 leading-relaxed">
              Geštalto terapija – tai kelionė į autentiško Aš atradimą ir gilesnį
              santykį su savimi bei Kitu. Kartu kuriame erdvę, kurioje atsiskleidžia
              jūsų vidinė išmintis ir stiprybė.
            </p>
            <button className="btn-primary rounded-sm">
              Pradėti kelionę
            </button>
          </div>

          <div className="relative fade-in flex justify-center md:justify-end">
            <div className="aspect-[4/5] bg-lacanian-symbolic-100 rounded-sm overflow-hidden shadow-sm max-w-[260px] w-full">
              <img
                src={IMAGES.PROFILE_PORTRAIT}
                alt="Psichoterapeutas Ramutis Klimanskis"
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lacanian-symbolic-100/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-lacanian-symbolic-500/60"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-lacanian-symbolic-500/60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}