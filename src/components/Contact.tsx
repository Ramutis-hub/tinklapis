import React from 'react';
import { Phone, Mail, Video, Clock, Circle, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="kontaktai" className="py-12 md:py-14 bg-therapy-warm-800 relative overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Professional Portrait */}
          <div className="order-1 lg:order-1">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl max-w-[280px] mx-auto lg:mx-0">
              <img
                src="/images/apie mane copy copy copy copy copy.jpg"
                alt="Psichoterapeutas Ramutis Klimanskis"
                className="w-full h-full object-cover object-center"
                style={{
                  filter: 'brightness(1.05) contrast(0.95) saturate(0.95)',
                }}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-2 lg:order-2 space-y-6">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <Phone className="text-therapy-sage-400 group-hover:text-therapy-sage-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-therapy-warm-100 text-sm font-medium mb-1">{t.contact.phone}</h3>
                <a href="tel:+37062176092" className="text-white text-lg font-medium hover:text-therapy-sage-300 transition-colors">
                  +370 621 76092
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <Mail className="text-therapy-sage-400 group-hover:text-therapy-sage-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-therapy-warm-100 text-sm font-medium mb-1">{t.contact.email}</h3>
                <a href="mailto:ramutis.klimanskis@gmail.com" className="text-white text-base font-medium hover:text-therapy-sage-300 transition-colors break-all">
                  ramutis.klimanskis@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <MapPin className="text-therapy-sage-400 group-hover:text-therapy-sage-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-therapy-warm-100 text-sm font-medium mb-1">{t.contact.address}</h3>
                <p className="text-white text-lg font-medium">Kęstučio g. 17, Vilnius</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <Clock className="text-therapy-sage-400 group-hover:text-therapy-sage-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-therapy-warm-100 text-sm font-medium mb-1">{t.contact.hours}</h3>
                <p className="text-white text-lg font-medium">{t.contact.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-therapy-warm-600/30">
          <div className="max-w-2xl mx-auto space-y-3 text-center">
            <p className="text-therapy-warm-200 text-sm font-medium">
              {t.contact.cancellationTitle}
            </p>
            <p className="text-therapy-warm-300 text-xs md:text-sm leading-relaxed">
              {t.contact.cancellationPolicy}
            </p>
            <p className="text-therapy-warm-300 text-xs md:text-sm font-medium">
              {t.contact.paymentNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}