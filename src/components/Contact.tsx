import React from 'react';
import { Phone, Mail, Video, Clock, Circle, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="kontaktai" className="py-16 bg-therapy-warm-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-therapy-sage-300/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-therapy-sage-300/4 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="section-title text-center text-white mb-6">
          {t.contact.title}
        </h2>
        
        <div className="text-center mb-8">
          <p className="text-therapy-warm-100 text-lg md:text-xl font-medium mb-4">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="space-y-3">
            <p className="text-therapy-warm-100 text-base md:text-lg">{t.contact.description}</p>
            <p className="text-therapy-warm-200 text-sm md:text-base">{t.contact.languages}</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-therapy-sage-400 rounded-full"></div>
              <p className="text-therapy-warm-200 text-xs md:text-sm font-medium">
                {t.contact.lgbtFriendly}
              </p>
              <div className="w-2 h-2 bg-therapy-sage-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Professional Portrait */}
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl max-w-xs mx-auto lg:max-w-sm">
              <img
                src="/images/apie mane copy copy copy copy copy.jpg"
                alt="Psichoterapeutas Ramutis Klimanskis"
                className="w-full h-full object-cover object-center transition-all duration-500"
                style={{
                  filter: 'brightness(1.05) contrast(0.95) saturate(0.95)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20"></div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 md:p-8 rounded-sm border border-therapy-warm-200 hover:border-therapy-sage-300 transition-all duration-300 shadow-sm">
              <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                <div className="bg-therapy-sage-50 p-4 rounded-sm">
                  <Phone className="text-therapy-sage-600" size={28} />
                </div>
                <div>
                  <h3 className="contact-title mb-3">{t.contact.phone}</h3>
                  <a href="tel:+37062176092" className="text-therapy-warm-700 text-base md:text-lg font-medium hover:text-therapy-sage-600 transition-colors">
                    +370 621 76092
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm border border-therapy-warm-200 hover:border-therapy-sage-300 transition-all duration-300 shadow-sm">
              <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                <div className="bg-therapy-sage-50 p-4 rounded-sm">
                  <Mail className="text-therapy-sage-600" size={28} />
                </div>
                <div>
                  <h3 className="contact-title mb-3">{t.contact.email}</h3>
                  <a href="mailto:ramutis.klimanskis@gmail.com" className="text-therapy-warm-700 font-medium hover:text-therapy-sage-600 transition-colors text-sm md:text-base break-all">
                    ramutis.klimanskis@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm border border-therapy-warm-200 hover:border-therapy-sage-300 transition-all duration-300 shadow-sm">
              <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                <div className="bg-therapy-sage-50 p-4 rounded-sm">
                  <MapPin className="text-therapy-sage-600" size={28} />
                </div>
                <div>
                  <h3 className="contact-title mb-3">{t.contact.address}</h3>
                  <p className="text-therapy-warm-700 text-base md:text-lg font-medium">Kęstučio g. 17, Vilnius</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm border border-therapy-warm-200 hover:border-therapy-sage-300 transition-all duration-300 shadow-sm">
              <div className="flex flex-col items-center text-center gap-4 h-full justify-center">
                <div className="bg-therapy-sage-50 p-4 rounded-sm">
                  <Clock className="text-therapy-sage-600" size={28} />
                </div>
                <div>
                  <h3 className="contact-title mb-3">{t.contact.hours}</h3>
                  <p className="text-therapy-warm-700 text-base md:text-lg font-medium">I-V 8.00-20.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}