import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function Contact() {
  const { language } = useLanguage();
  const t = useTranslations(language);

  return (
    <section id="kontaktai" className="py-16 md:py-24 bg-therapy-warm-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-therapy-sage-300/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-therapy-sage-300/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-title text-white mb-5">{t.contact.title}</h2>
          <p className="text-therapy-warm-100 text-base md:text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          <a
            href="tel:+37062176092"
            className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-8 py-3.5 hover:bg-therapy-sage-500 transition-all duration-300 font-medium rounded-sm text-sm md:text-base"
          >
            {t.contact.cta}
          </a>
          <a
            href="mailto:ramutis.klimanskis@gmail.com"
            className="inline-flex items-center justify-center border border-therapy-warm-500 text-therapy-warm-100 px-8 py-3.5 hover:border-therapy-warm-300 hover:text-white transition-all duration-300 font-medium rounded-sm text-sm md:text-base"
          >
            {t.contact.ctaContact}
          </a>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div className="flex items-start gap-3 group">
            <Phone className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={18} />
            <div>
              <p className="text-therapy-warm-400 text-xs font-medium mb-0.5">{t.contact.phone}</p>
              <a href="tel:+37062176092" className="text-white font-medium hover:text-therapy-sage-300 transition-colors text-sm md:text-base">
                +370 621 76092
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <Mail className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={18} />
            <div>
              <p className="text-therapy-warm-400 text-xs font-medium mb-0.5">{t.contact.email}</p>
              <a href="mailto:ramutis.klimanskis@gmail.com" className="text-white font-medium hover:text-therapy-sage-300 transition-colors break-all text-sm">
                ramutis.klimanskis@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <MapPin className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={18} />
            <div>
              <p className="text-therapy-warm-400 text-xs font-medium mb-0.5">{t.contact.address}</p>
              <p className="text-white font-medium text-sm md:text-base">Kęstučio g. 17, Vilnius</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <Clock className="text-therapy-sage-400 flex-shrink-0 mt-0.5 group-hover:text-therapy-sage-300 transition-colors" size={18} />
            <div>
              <p className="text-therapy-warm-400 text-xs font-medium mb-0.5">{t.contact.hours}</p>
              <p className="text-white font-medium text-sm md:text-base">{t.contact.workingHours}</p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mb-10 space-y-1.5">
          <p className="text-therapy-warm-200 text-sm">{t.contact.description}</p>
          <p className="text-therapy-warm-300 text-sm">{t.contact.languages}</p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <span className="w-1 h-1 bg-therapy-sage-400 rounded-full" />
            <p className="text-therapy-warm-300 text-xs font-medium">{t.contact.lgbtFriendly}</p>
            <span className="w-1 h-1 bg-therapy-sage-400 rounded-full" />
          </div>
        </div>

        {/* Cancellation */}
        <div className="pt-8 border-t border-therapy-warm-600/30">
          <div className="space-y-2 text-center">
            <p className="text-therapy-warm-200 text-sm font-medium">{t.contact.cancellationTitle}</p>
            <p className="text-therapy-warm-300 text-xs md:text-sm leading-relaxed">{t.contact.cancellationPolicy}</p>
            <p className="text-therapy-warm-300 text-xs md:text-sm">{t.contact.paymentNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
