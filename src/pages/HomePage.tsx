import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/animations';
import { ServiceCard } from '../components/shared/ServiceCard';
import { ArticleCard } from '../components/shared/ArticleCard';
import { getFeaturedArticles } from '../content';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function HomePage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  useDocumentMeta('home', language);
  const featured = getFeaturedArticles();

  const heroParagraphs = t.hero.description.split('\n\n');
  const visibleParagraphs = heroParagraphs.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-therapy-warm-50 via-white to-therapy-sage-50/30">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74,65,55,0.1) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-14 md:pt-16 pb-0 w-full">
          <FadeIn delay={0.05}>
            <p className="text-xs tracking-[0.18em] uppercase text-therapy-sage-500 font-medium text-center mb-5 md:mb-6">
              {t.hero.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-2xl md:text-3xl lg:text-[2.2rem] font-serif text-therapy-warm-800 font-normal leading-[1.2] text-center mb-8 md:mb-10 max-w-xl mx-auto">
              {t.hero.title}
            </h1>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-end">
            <FadeIn delay={0.25} direction="right">
              <div className="aspect-[4/5] rounded-t-sm overflow-hidden max-w-md mx-auto md:mx-0"
                style={{ boxShadow: '0 -4px 30px -4px rgba(74,65,55,0.12)' }}>
                <img
                  src="/images/pataisyta tinklapiui copy copy copy copy copy copy copy copy copy copy.jpg"
                  alt="Psichoterapeutas Ramutis Klimanskis"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'brightness(1.04) contrast(0.96) saturate(0.92)' }}
                />
              </div>
            </FadeIn>
            <div className="space-y-5 pb-8 md:pb-10">
              <FadeIn delay={0.3}>
                <p className="text-base md:text-lg text-therapy-sage-700 font-normal">
                  {t.hero.subtitle}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4 text-therapy-warm-700">
                  {visibleParagraphs.map((para, i) => (
                    <p key={i} className="text-base md:text-[1.05rem] leading-[1.8]">
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.55}>
                <Link
                  to="/kontaktai"
                  className="inline-flex items-center justify-center border border-therapy-sage-500 text-therapy-sage-700 px-6 py-3 hover:bg-therapy-sage-50 transition-all duration-300 font-medium rounded-sm text-sm tracking-wide"
                >
                  {t.hero.cta}
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Intro block */}
      <section className="py-10 md:py-14 bg-therapy-sage-50/40 border-y border-therapy-warm-200/60">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-lg md:text-xl lg:text-[1.4rem] font-serif text-therapy-warm-800 mb-4 font-normal leading-snug">
              {t.introBlock.title}
            </h2>
            <p className="text-sm md:text-base text-therapy-warm-700 leading-relaxed">
              {t.introBlock.text}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two main directions */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <FadeIn>
              <ServiceCard
                title={t.services.couples.title}
                description={t.services.couples.description.split('\n\n')[0]}
                linkTo="/poru-terapija"
                linkLabel={language === 'lt' ? 'Apie porų terapiją' : 'About Couples Therapy'}
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ServiceCard
                title={t.services.individual.title}
                description={t.services.individual.description.split('\n\n')[0]}
                linkTo="/individuali-terapija"
                linkLabel={language === 'lt' ? 'Apie individualią terapiją' : 'About Individual Therapy'}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Articles section */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-lg md:text-xl font-serif text-therapy-warm-800 font-normal mb-3">
              {language === 'lt' ? 'Tekstai apie santykius ir terapiją' : 'Writing on Relationships and Therapy'}
            </h2>
            <p className="text-sm text-therapy-warm-600 leading-relaxed mb-8 md:mb-10 max-w-2xl">
              {language === 'lt'
                ? 'Kartais klausimai, su kuriais ateiname į terapiją, neturi greitų atsakymų. Čia dalijuosi mintimis apie santykius, artumą, neištikimybę, seksualumą, pažeidžiamumą ir tai, kas vyksta tarp žmonių.'
                : 'Some of the questions we bring to therapy do not have quick answers. Here I share reflections on relationships, intimacy, infidelity, sexuality, vulnerability, and what happens between people.'}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featured.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <ArticleCard article={article} language={language} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link
              to="/tekstai"
              className="inline-flex items-center text-sm font-medium text-therapy-sage-600 hover:text-therapy-sage-700 transition-colors"
            >
              {language === 'lt' ? 'Visi tekstai' : 'View all writing'}
              <span className="ml-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
