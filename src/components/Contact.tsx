import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="kontaktai" className="py-14 md:py-20 bg-therapy-warm-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-therapy-sage-300/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-therapy-sage-300/4 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="section-title text-center text-white mb-4">
          {t.contact.title}
        </h2>

        <div className="text-center mb-10 md:mb-12">
          <p className="text-therapy-warm-100 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
          <div className="flex items-start gap-3 group">
            <Phone className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={20} />
            <div>
              <p className="text-therapy-warm-300 text-xs font-medium mb-0.5">{t.contact.phone}</p>
              <a href="tel:+37062176092" className="text-white font-medium hover:text-therapy-sage-300 transition-colors">
                +370 621 76092
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <Mail className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={20} />
            <div>
              <p className="text-therapy-warm-300 text-xs font-medium mb-0.5">{t.contact.email}</p>
              <a href="mailto:ramutis.klimanskis@gmail.com" className="text-white font-medium hover:text-therapy-sage-300 transition-colors break-all text-sm">
                ramutis.klimanskis@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <MapPin className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={20} />
            <div>
              <p className="text-therapy-warm-300 text-xs font-medium mb-0.5">{t.contact.address}</p>
              <p className="text-white font-medium">Kęstučio g. 17, Vilnius</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <Clock className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={20} />
            <div>
              <p className="text-therapy-warm-300 text-xs font-medium mb-0.5">{t.contact.hours}</p>
              <p className="text-white font-medium">{t.contact.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mb-8 space-y-1.5">
          <p className="text-therapy-warm-200 text-sm">{t.contact.description}</p>
          <p className="text-therapy-warm-300 text-sm">{t.contact.languages}</p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="w-1.5 h-1.5 bg-therapy-sage-400 rounded-full" />
            <p className="text-therapy-warm-300 text-xs font-medium">{t.contact.lgbtFriendly}</p>
            <span className="w-1.5 h-1.5 bg-therapy-sage-400 rounded-full" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mb-10">
          <a
            href="tel:+37062176092"
            className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-8 py-3.5 hover:bg-therapy-sage-500 transition-all duration-300 font-medium rounded-sm text-sm md:text-base"
          >
            {t.contact.cta}
          </a>
        </div>

        {/* Cancellation */}
        <div className="pt-8 border-t border-therapy-warm-600/30">
          <div className="max-w-xl mx-auto space-y-2 text-center">
            <p className="text-therapy-warm-200 text-sm font-medium">{t.contact.cancellationTitle}</p>
            <p className="text-therapy-warm-300 text-xs md:text-sm leading-relaxed">{t.contact.cancellationPolicy}</p>
            <p className="text-therapy-warm-300 text-xs md:text-sm font-medium">{t.contact.paymentNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
