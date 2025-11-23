import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Section } from '../ui/Section';
import { FadeIn, ScaleIn } from '../ui/animations';

const testimonials = [
  {
    text: "Ramutis padėjo man suprasti savo emocijas ir rasti vidinę ramybę. Jo profesionalus, bet šiltas požiūris sukūrė saugią erdvę, kurioje galėjau atvirai kalbėti apie savo išgyvenimus.",
    author: "A. K.",
    service: "Individuali terapija",
    rating: 5
  },
  {
    text: "Porų terapija su Ramučiu išgelbėjo mūsų santykius. Jis padėjo mums išmokti klausytis vienas kito ir rasti bendrus sprendimus. Dabar jaučiamės daug arčiau.",
    author: "M. ir J.",
    service: "Porų konsultavimas", 
    rating: 5
  },
  {
    text: "Po trauminio įvykio nežinojau, kaip gyventi toliau. Ramutis padėjo man apdoroti patirtį ir rasti jėgų žengti į priekį. Esu dėkinga už jo profesionalumą ir empatiją.",
    author: "L. S.",
    service: "Traumų terapija",
    rating: 5
  },
  {
    text: "Nuotolinės konsultacijos buvo labai patogios. Ramutis sugebėjo sukurti artumą ir pasitikėjimą net per ekraną. Jaučiausi išgirsta ir supras ta.",
    author: "E. V.",
    service: "Nuotolinės konsultacijos",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <Section background="light" className="bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="section-title">Klientų atsiliepimai</h2>
            <p className="text-therapy-sand-700 max-w-2xl mx-auto">
              Svarbiausias mano darbo įvertinimas – tai klientų patirtis ir teigiami pokyčiai jų gyvenime.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScaleIn key={index} delay={index * 0.1}>
              <div className="card hover-lift h-full flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-therapy-sage-500 fill-current" size={16} />
                  ))}
                </div>
                
                <div className="relative mb-6 flex-grow">
                  <Quote className="absolute -top-2 -left-2 text-therapy-sage-200" size={24} />
                  <p className="text-therapy-sand-700 leading-relaxed pl-6">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-therapy-sand-100">
                  <div>
                    <div className="font-medium text-therapy-sand-800">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-therapy-sand-600">
                      {testimonial.service}
                    </div>
                  </div>
                  <div className="text-therapy-sage-600 text-sm font-medium">
                    Patikinta
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-therapy-sand-600 text-sm">
              Visi atsiliepimai paskelbti gavus klientų sutikimą. Vardai pakeisti privatumo sumetimais.
            </p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}