import React from 'react';
import { FadeIn } from '../components/ui/animations';
import { CTASection } from '../components/shared/CTASection';
import { ArticleCard } from '../components/shared/ArticleCard';
import { getArticlesForIndividualPage } from '../content';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function IndividualTherapyPage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const articles = getArticlesForIndividualPage();

  const topics = [
    language === 'lt' ? 'Pasikartojantys santykių būdai' : 'Recurring relationship patterns',
    language === 'lt' ? 'Nerimas' : 'Anxiety',
    language === 'lt' ? 'Vienišumas' : 'Loneliness',
    language === 'lt' ? 'Gyvenimo krypties klausimai' : 'Questions about life direction',
    language === 'lt' ? 'Santykių krizės' : 'Relationship crises',
    language === 'lt' ? 'Savivertė' : 'Self-worth',
    language === 'lt' ? 'Gėda' : 'Shame',
    language === 'lt' ? 'Kaltė' : 'Guilt',
    language === 'lt' ? 'Netektis' : 'Loss',
    language === 'lt' ? 'Artumo sunkumai' : 'Intimacy difficulties',
    language === 'lt' ? 'Savo norų ir ribų pajautimas' : 'Sense of own desires and boundaries',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-14">
        <FadeIn>
          <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
            {language === 'lt' ? 'Individuali psichoterapija Vilniuje' : 'Individual psychotherapy · Vilnius'}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-therapy-warm-800 font-normal leading-tight mb-8">
            {t.services.individual.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4">
            {t.services.individual.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="mt-6 text-base md:text-lg text-therapy-warm-700 leading-relaxed italic border-l-2 border-therapy-sage-200 pl-5">
            {language === 'lt'
              ? 'Terapijoje nesiekiu tapti žmogumi, kuris geriau už klientą žino, kaip jam reikia gyventi.'
              : 'In therapy I do not aim to become the person who knows better than the client how they should live.'}
          </p>
        </FadeIn>
      </div>

      {/* What can be explored */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-y border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Galiu padėti tyrinėti' : 'I can help explore'}
            </h2>
            <ul className="space-y-3">
              {topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-therapy-warm-700">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-therapy-sage-500 flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Practical info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Kaip vyksta terapija?' : 'How does therapy work?'}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-therapy-warm-700 leading-relaxed">
              <p>{t.process.subtitle}</p>
              <p className="text-sm text-therapy-warm-500 italic">{t.services.individual.duration}</p>
              <p>{t.contact.description}. {t.contact.languages}.</p>
            </div>
            <div className="mt-8 space-y-8">
              {[
                { title: t.process.steps.first.title, description: t.process.steps.first.description },
                { title: t.process.steps.safe.title, description: t.process.steps.safe.description },
                { title: t.process.steps.integration.title, description: t.process.steps.integration.description },
              ].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-therapy-sage-100 border border-therapy-sage-200 flex items-center justify-center mt-0.5">
                    <span className="text-therapy-sage-700 text-sm font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-therapy-warm-800 font-normal mb-1.5">{step.title}</h3>
                    <p className="text-sm md:text-base text-therapy-warm-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 bg-therapy-warm-50 rounded-sm border border-therapy-warm-200">
              <p className="text-sm font-medium text-therapy-warm-700 mb-1">{t.services.individual.accessibilityTitle}</p>
              <p className="text-sm text-therapy-warm-600 leading-relaxed">{t.services.individual.accessibilityText}</p>
            </div>
            <div className="mt-4 p-5 bg-white rounded-sm border border-therapy-warm-200">
              <p className="text-sm font-medium text-therapy-warm-700 mb-1">{t.contact.cancellationTitle}</p>
              <p className="text-sm text-therapy-warm-600 leading-relaxed mb-2">{t.contact.cancellationPolicy}</p>
              <p className="text-sm text-therapy-warm-600">{t.contact.paymentNote}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 font-normal mb-6">
              {language === 'lt' ? 'Tekstai apie terapiją ir žmogaus patirtį' : 'Texts about therapy and human experience'}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.08}>
                <ArticleCard article={article} compact />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={language === 'lt' ? 'Jaučiate, kad terapija galėtų padėti?' : 'Feel therapy could help?'}
        buttonText={t.contact.cta}
      />
    </div>
  );
}
