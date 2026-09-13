import React from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/ui/animations';
import { ServiceCard } from '../components/shared/ServiceCard';
import { ArticleCard } from '../components/shared/ArticleCard';
import { getFeaturedArticles } from '../content';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function HomePage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const featured = getFeaturedArticles();

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
        <div className="max-w-6xl mx-auto px-6 relative z-10 pt-20 md:pt-24 pb-0 w-full">
          <FadeIn delay={0.05}>
            <p className="text-xs tracking-[0.18em] uppercase text-therapy-sage-500 font-medium text-center mb-6 md:mb-8">
              {t.hero.intro}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="text-3xl md:text-4xl lg:text-[2.85rem] font-serif text-therapy-warm-800 font-normal leading-[1.15] text-center mb-10 md:mb-14 max-w-2xl mx-auto">
              {t.hero.title}
            </h1>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-end">
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
            <div className="space-y-7 pb-12 md:pb-16">
              <FadeIn delay={0.3}>
                <p className="text-base md:text-lg text-therapy-sage-700 font-normal">
                  {t.hero.subtitle}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="space-y-4 text-therapy-warm-700">
                  {t.hero.description.split('\n\n').map((para, i) => (
                    <p key={i} className="text-base md:text-[1.05rem] leading-[1.8]">
                      {para}
                    </p>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.55}>
                <Link
                  to="/kontaktai"
                  className="inline-flex items-center justify-center bg-therapy-sage-600 text-white px-7 py-3.5 hover:bg-therapy-sage-700 transition-all duration-300 font-medium rounded-sm text-sm tracking-wide"
                >
                  {t.hero.cta}
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Intro block */}
      <section className="py-16 md:py-24 bg-therapy-sage-50/40 border-y border-therapy-warm-200/60">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-xl md:text-2xl lg:text-[1.6rem] font-serif text-therapy-warm-800 mb-6 font-normal leading-snug">
              {t.introBlock.title}
            </h2>
            <p className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
              {t.introBlock.text}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two main directions */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <FadeIn>
              <ServiceCard
                title={t.services.couples.title}
                description={t.services.couples.description.split('\n\n')[0]}
                linkTo="/poru-terapija"
                linkLabel={language === 'lt' ? 'Apie porų terapiją' : 'About couples therapy'}
              />
            </FadeIn>
            <FadeIn delay={0.15}>
              <ServiceCard
                title={t.services.individual.title}
                description={t.services.individual.description.split('\n\n')[0]}
                linkTo="/individuali-terapija"
                linkLabel={language === 'lt' ? 'Apie individualią terapiją' : 'About individual therapy'}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Articles section */}
      <section className="py-14 md:py-20 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-4">
              {language === 'lt' ? 'Apie santykius ir terapiją' : 'On relationships and therapy'}
            </h2>
            <p className="text-sm md:text-base text-therapy-warm-600 leading-relaxed mb-8 md:mb-10 max-w-2xl">
              {language === 'lt'
                ? 'Kartais klausimai, su kuriais ateiname į terapiją, neturi greitų atsakymų. Čia rašau apie santykius, artumą, neištikimybę, seksualumą, pažeidžiamumą ir tai, kas vyksta tarp žmonių.'
                : 'Sometimes the questions we bring to therapy don\'t have quick answers. Here I write about relationships, intimacy, infidelity, sexuality, vulnerability and what happens between people.'}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {featured.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <Link
              to="/tekstai"
              className="inline-flex items-center text-sm font-medium text-therapy-sage-600 hover:text-therapy-sage-700 transition-colors"
            >
              {language === 'lt' ? 'Visi tekstai' : 'All texts'}
              <span className="ml-1.5">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
