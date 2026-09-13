import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/animations';
import { CTASection } from '../components/shared/CTASection';
import { ArticleCard } from '../components/shared/ArticleCard';
import { getArticlesForCouplesPage } from '../content';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function CouplesTherapyPage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const articles = getArticlesForCouplesPage();

  const topics = [
    language === 'lt' ? 'Emocinis atitolimas' : 'Emotional distance',
    language === 'lt' ? 'Pasikartojantys konfliktai' : 'Recurring conflicts',
    language === 'lt' ? 'Sunkumas susikalbėti' : 'Difficulty communicating',
    language === 'lt' ? 'Neištikimybė' : 'Infidelity',
    language === 'lt' ? 'Pasitikėjimo praradimas' : 'Loss of trust',
    language === 'lt' ? 'Seksualinio ir emocinio artumo sunkumai' : 'Sexual and emotional intimacy difficulties',
    language === 'lt' ? 'Gyvenimas tarsi „kartu, bet atskirai"' : 'Living "together but apart"',
    language === 'lt' ? 'Skyrybų ar santykių tęstinumo klausimas' : 'Questions about separation or continuing',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-14">
        <FadeIn>
          <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
            {language === 'lt' ? 'Porų terapija Vilniuje' : 'Couples therapy · Vilnius'}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-therapy-warm-800 font-normal leading-tight mb-8">
            {t.services.couples.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4">
            {t.services.couples.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* When couples seek therapy */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-y border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Kada poros kreipiasi į terapiją?' : 'When couples seek therapy'}
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

      {/* What happens between us */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Kas vyksta tarp mūsų?' : 'What happens between us?'}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-therapy-warm-700 leading-relaxed">
              <p>
                {language === 'lt'
                  ? 'Kartais poroje susiformuoja ciklas: kuo labiau vienas siekia kontakto, spaudžia, klausia ar kritikuoja, tuo labiau kitas ginasi ar atsitraukia. O kuo labiau vienas atsitraukia, tuo labiau kitam kyla nerimas, pyktis ir noras pasiekti partnerį.'
                  : 'Sometimes a cycle forms in the relationship: the more one seeks contact, pushes, asks or criticizes, the more the other defends or withdraws. And the more one withdraws, the more the other feels anxiety, anger and a need to reach their partner.'}
              </p>
              <p>
                {language === 'lt'
                  ? 'Terapijos tikslas nėra nustatyti, kuris iš partnerių „kaltas". Jis yra padėti pamatyti, kas vyksta tarp jų ir kas slypi po jų reakcijomis.'
                  : 'The goal of therapy is not to determine which partner is "at fault". It is to help see what happens between them and what lies beneath their reactions.'}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How therapy works */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Kaip vyksta porų terapija?' : 'How does couples therapy work?'}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-therapy-warm-700 leading-relaxed">
              <p>{t.process.subtitle}</p>
              <p className="text-sm text-therapy-warm-500 italic">{t.services.couples.duration}</p>
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
            <div className="mt-8 p-5 bg-white rounded-sm border border-therapy-warm-200">
              <p className="text-sm font-medium text-therapy-warm-700 mb-1">{t.contact.cancellationTitle}</p>
              <p className="text-sm text-therapy-warm-600 leading-relaxed mb-2">{t.contact.cancellationPolicy}</p>
              <p className="text-sm text-therapy-warm-600">{t.contact.paymentNote}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-12 md:py-16 bg-white border-t border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 font-normal mb-6">
              {language === 'lt' ? 'Tekstai apie porų santykius' : 'Texts about couples relationships'}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <ArticleCard article={article} language={language} compact />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={language === 'lt' ? 'Jaučiate, kad porų terapija galėtų padėti?' : 'Feel couples therapy could help?'}
        buttonText={t.contact.cta}
      />
    </div>
  );
}
