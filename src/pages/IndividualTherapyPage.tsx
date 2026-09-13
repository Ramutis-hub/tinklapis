import React from 'react';
import { FadeIn } from '../components/ui/animations';
import { CTASection } from '../components/shared/CTASection';
import { ArticleCard } from '../components/shared/ArticleCard';
import { getArticlesForIndividualPage } from '../content';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function IndividualTherapyPage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  useDocumentMeta('individual', language);
  const articles = getArticlesForIndividualPage();

  const topics = [
    language === 'lt' ? 'Nerimas, įtampa, vidinis spaudimas' : 'Anxiety, tension and inner pressure',
    language === 'lt' ? 'Santykių sunkumai' : 'Relationship difficulties',
    language === 'lt' ? 'Vienišumas, atstūmimas, pavydas, gėda' : 'Loneliness, rejection, jealousy and shame',
    language === 'lt' ? 'Priklausomybės ir kompulsyvūs elgesio modeliai' : 'Addiction and compulsive patterns of behaviour',
    language === 'lt' ? 'Ribos ir savęs vertinimas' : 'Boundaries and self-worth',
    language === 'lt' ? 'Seksualumo, kūniškumo ir artumo tyrinėjimas' : 'Exploring sexuality, embodiment and intimacy',
    language === 'lt' ? 'Netektys, gedėjimas ir gyvenimo pokyčiai' : 'Loss, grief and life transitions',
    language === 'lt' ? 'Sunkumas jausti, pasirinkti ar būti savimi' : 'Difficulty feeling, making choices or being yourself',
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
              ? 'Terapijoje nesiekiu pateikti paruoštų atsakymų. Man svarbiau kartu tyrinėti, kas vyksta jūsų patirtyje, ir ieškoti daugiau erdvės jūsų pačių pasirinkimams.'
              : 'In therapy, I do not aim to provide ready-made answers. What matters more to me is exploring together what is happening in your experience and creating more space for your own choices.'}
          </p>
        </FadeIn>
      </div>

      {/* What can be explored */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-y border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Dažniausios temos' : 'Common themes'}
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

      {/* How therapy works */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt'
                ? 'Kaip vyksta individuali terapija?'
                : 'How does individual therapy work?'}
            </h2>
            <p className="text-base md:text-lg text-therapy-warm-700 leading-relaxed mb-8">
              {language === 'lt'
                ? 'Terapijoje nėra vienos iš anksto nustatytos schemos. Kiekvienas susitikimas formuojasi iš to, ką tuo metu atsinešate jūs ir kas atsiranda mūsų pokalbyje. Pradedame nuo to, kas šiuo metu jums svarbu, o toliau palaipsniui tyrinėjame jausmus, santykius, pasikartojančias situacijas ir tai, kaip esate pratę su jomis būti.'
                : 'There is no single predetermined formula for therapy. Each session develops from what you bring with you at that moment and from what emerges in our conversation. We begin with what feels important to you now, and gradually explore emotions, relationships, recurring situations, and the ways you have learned to respond to them.'}
            </p>
          </FadeIn>

          <div className="space-y-8">
            {[
              {
                title: language === 'lt' ? 'Pirmasis susitikimas' : 'The first meeting',
                body: language === 'lt'
                  ? [
                      'Susipažįstame ir kalbamės apie tai, kas jus atvedė į terapiją. Bandome suprasti, kas šiuo metu svarbiausia, kas kelia sunkumų ir ko tikitės iš mūsų darbo.',
                      'Jeigu nežinote, nuo ko pradėti, tai nėra problema. Pakanka ateiti su tuo, kas šiuo metu kelia nerimą, skausmą, sumaištį ar tiesiog norą geriau save suprasti.',
                    ]
                  : [
                      'We get to know one another and talk about what has brought you to therapy. We begin to understand what feels most important at the moment, what is causing difficulty, and what you hope for from our work together.',
                      'If you are not sure where to begin, that is not a problem. It is enough to come with whatever currently feels troubling, painful, confusing, or simply with a wish to understand yourself better.',
                    ],
              },
              {
                title: language === 'lt' ? 'Tyrinėjame tai, kas kartojasi' : 'Exploring what keeps repeating',
                body: language === 'lt'
                  ? [
                      'Terapijoje dėmesį kreipiame ne tik į tai, apie ką kalbate, bet ir į tai, kaip patiriate save, santykius ir kitus žmones. Pamažu gali išryškėti pasikartojantys būdai gintis, trauktis, prisitaikyti, ieškoti artumo ar jo vengti.',
                      'Man svarbu ne pateikti jums paruoštą atsakymą, o kartu tyrinėti, kas vyksta jūsų patirtyje ir ką tai jums reiškia.',
                    ]
                  : [
                      'In therapy, we pay attention not only to what you talk about, but also to how you experience yourself, your relationships and other people. Gradually, recurring ways of protecting yourself, withdrawing, adapting, seeking closeness or avoiding it may become clearer.',
                      'What matters to me is not giving you a ready-made answer, but exploring together what is happening in your experience and what it means to you.',
                    ],
              },
              {
                title: language === 'lt' ? 'Atsiranda daugiau pasirinkimo' : 'More room for choice',
                body: language === 'lt'
                  ? [
                      'Kai tai, kas anksčiau vyko beveik automatiškai, tampa aiškiau matoma ir išgyvenama, atsiranda daugiau galimybių rinktis.',
                      'Ne todėl, kad terapija pateikia vieną teisingą atsakymą, o todėl, kad geriau pažįstate save, savo poreikius, ribas ir tai, kaip kuriate savo gyvenimą bei santykius.',
                    ]
                  : [
                      'When patterns that previously happened almost automatically become more visible and can be experienced more consciously, there is more room for choice.',
                      'Not because therapy provides one correct answer, but because you come to know yourself, your needs, your boundaries, and the ways you shape your life and relationships more clearly.',
                    ],
              },
              {
                title: language === 'lt' ? 'Terapijos pabaiga' : 'Ending therapy',
                body: language === 'lt'
                  ? [
                      'Apie terapijos pabaigą kalbamės iš anksto. Kartu žiūrime, kas per laiką pasikeitė, ką pavyko geriau suprasti ir kas dar lieka svarbu.',
                      'Užbaigimas irgi yra terapinio proceso dalis. Jis gali atnešti palengvėjimo, liūdesio, dėkingumo ar kitų jausmų, todėl svarbu palikti vietos ir pačiam atsisveikinimui su terapiniu santykiu.',
                    ]
                  : [
                      'We talk about ending therapy in advance. Together, we look at what has changed over time, what has become clearer, and what still feels important.',
                      'Ending is also part of the therapeutic process. It can bring relief, sadness, gratitude or other feelings, so it is important to leave space for saying goodbye to the therapeutic relationship itself.',
                    ],
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={0.1 * (i + 1)}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-therapy-sage-100 border border-therapy-sage-200 flex items-center justify-center mt-0.5">
                    <span className="text-therapy-sage-700 text-sm font-medium">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-therapy-warm-800 font-normal mb-2">{step.title}</h3>
                    <div className="space-y-3">
                      {step.body.map((para, j) => (
                        <p key={j} className="text-sm md:text-base text-therapy-warm-700 leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practical information */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-y border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Praktinė informacija' : 'Practical information'}
            </h2>
            <ul className="space-y-3">
              {(language === 'lt'
                ? [
                    'Paprastai susitinkame kartą per savaitę.',
                    'Individuali sesija trunka 50 minučių.',
                    'Konsultuoju gyvai Vilniuje ir nuotoliu, lietuvių, anglų ir rusų kalbomis.',
                    'Terapijos trukmės iš anksto nenustatome. Ją aptariame eigoje, atsižvelgdami į jūsų situaciją, poreikius ir tai, kaip vystosi terapinis procesas.',
                    'Tai, kuo dalijatės terapijoje, yra konfidencialu.',
                  ]
                : [
                    'We usually meet once a week.',
                    'Individual sessions last 50 minutes.',
                    'I offer sessions in person in Vilnius and online, in Lithuanian, English and Russian.',
                    'The length of therapy is not determined in advance. We discuss it as the work develops, taking into account your situation, your needs and the therapeutic process.',
                    'What you share in therapy is confidential.',
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-therapy-warm-700 leading-relaxed">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-therapy-sage-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 font-normal mb-6">
              {language === 'lt' ? 'Tekstai apie terapiją ir žmogaus patirtį' : 'Writing about therapy and human experience'}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.08}>
                <ArticleCard article={article} language={language} compact />
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
