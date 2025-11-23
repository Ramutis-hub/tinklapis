import React from 'react';

export function Journey() {
  return (
    <section className="py-20 bg-lacanian-real-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-serif text-lacanian-real-100 mb-6">
              Mano kelias į psichoterapiją
            </h2>
            <div className="space-y-6 text-lacanian-real-200">
              <p className="leading-relaxed">
                Psichologija ir psichoterapija visada buvo neatskiriama mano gyvenimo dalis. 
                Nuo pat jaunystės jaučiau ypatingą trauką žmogaus vidiniam pasauliui, 
                santykiams ir jų dinamikai. Šis natūralus smalsumas ir noras suprasti 
                žmogaus prigimtį vedė mane profesinio tobulėjimo keliu.
              </p>
              <p className="leading-relaxed">
                Gyvenimas dažnai atveda mus prie gilių egzistencinių klausimų ir prasmės 
                paieškų. Mano kelyje tokiu lemiamu momentu tapo asmeninė transformacija – 
                laikotarpis, kai pradėjau giliau tyrinėti save ir savo santykį su pasauliu. 
                Individualios terapijos patirtis atskleidė man ypatingą terapinio santykio 
                transformuojančią galią.
              </p>
              <p className="leading-relaxed">
                Nuo karo pradžios Ukrainoje palaikau artimą kolegialų ryšį su psichoterapeutais 
                ir treneriais iš Ukrainos. Ši patirtis leido man giliai susipažinti su traumos 
                tematika, smurto pasekmėmis, netekties išgyvenimais ir karinių konfliktų 
                keliamais skausmais žmogaus gyvenime.
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[600px] h-[600px]">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9F8B75" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#7A6952" stopOpacity="0.8"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Borromean Rings with enhanced styling */}
                <g transform="translate(200,200)">
                  {/* Imaginary (top) */}
                  <circle 
                    cx="0" 
                    cy="-80" 
                    r="100" 
                    fill="none" 
                    stroke="url(#ringGradient)" 
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="opacity-90"
                  />
                  <text 
                    x="0" 
                    y="-140" 
                    fill="#9F8B75" 
                    textAnchor="middle" 
                    className="text-sm font-serif"
                    filter="url(#glow)"
                  >
                    Imaginary
                  </text>

                  {/* Symbolic (bottom right) */}
                  <circle 
                    cx="70" 
                    cy="40" 
                    r="100" 
                    fill="none" 
                    stroke="url(#ringGradient)" 
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="opacity-90"
                  />
                  <text 
                    x="70" 
                    y="120" 
                    fill="#9F8B75" 
                    textAnchor="middle" 
                    className="text-sm font-serif"
                    filter="url(#glow)"
                  >
                    Symbolic
                  </text>

                  {/* Real (bottom left) */}
                  <circle 
                    cx="-70" 
                    cy="40" 
                    r="100" 
                    fill="none" 
                    stroke="url(#ringGradient)" 
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="opacity-90"
                  />
                  <text 
                    x="-70" 
                    y="120" 
                    fill="#9F8B75" 
                    textAnchor="middle" 
                    className="text-sm font-serif"
                    filter="url(#glow)"
                  >
                    Real
                  </text>

                  {/* Central object petit a */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r="15" 
                    fill="none" 
                    stroke="#9F8B75" 
                    strokeWidth="1.5"
                    filter="url(#glow)"
                    className="opacity-80"
                  />
                  <text 
                    x="0" 
                    y="5" 
                    fill="#9F8B75" 
                    textAnchor="middle" 
                    className="text-sm font-serif"
                    filter="url(#glow)"
                  >
                    a
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}