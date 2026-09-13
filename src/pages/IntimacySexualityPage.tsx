import React from 'react';
import { FadeIn } from '../components/ui/animations';
import { CTASection } from '../components/shared/CTASection';
import { ArticleCard } from '../components/shared/ArticleCard';
import { getArticlesForSexualityPage } from '../content';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslations } from '../translations';

export function IntimacySexualityPage() {
  const { language } = useLanguage();
  const t = useTranslations(language);
  const articles = getArticlesForSexualityPage();

  const aspects = [
    language === 'lt' ? 'Saugumas' : 'Safety',
    language === 'lt' ? 'Prisirišimas' : 'Attachment',
    language === 'lt' ? 'Gėda' : 'Shame',
    language === 'lt' ? 'Kūno patyrimas' : 'Body experience',
    language === 'lt' ? 'Troškimas' : 'Desire',
    language === 'lt' ? 'Atstūmimo baimė' : 'Fear of rejection',
    language === 'lt' ? 'Emocinis artumas' : 'Emotional intimacy',
    language === 'lt' ? 'Santykis su partneriu' : 'Relationship with partner',
  ];

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-14">
        <FadeIn>
          <span className="text-xs tracking-[0.15em] uppercase text-therapy-sage-600 font-medium mb-4 block">
            {language === 'lt' ? 'Artumas ir seksualumas' : 'Intimacy & sexuality'}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-therapy-warm-800 font-normal leading-tight mb-8">
            {t.services.sexuality.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="space-y-4">
            {t.services.sexuality.description.split('\n\n').map((para, i) => (
              <p key={i} className="text-base md:text-lg text-therapy-warm-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* What sexuality connects to */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-y border-therapy-warm-200/60">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-6">
              {language === 'lt' ? 'Seksualumas terapijoje dažnai susijęs ne tik su seksualiniu elgesiu' : 'Sexuality in therapy is often connected not only to sexual behavior'}
            </h2>
            <ul className="space-y-3">
              {aspects.map((aspect, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-therapy-warm-700">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-therapy-sage-500 flex-shrink-0" />
                  {aspect}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Topics to explore */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-xl md:text-2xl font-serif text-therapy-warm-800 font-normal mb-4">
              {language === 'lt' ? 'Galima tyrinėti' : 'Topics to explore'}
            </h2>
            <ul className="space-y-2.5 mt-4">
              {t.services.sexuality.topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-therapy-warm-700">
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-therapy-sage-500 flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-base md:text-lg text-therapy-warm-600 leading-relaxed italic border-l-2 border-therapy-sage-200 pl-5">
              {t.services.sexuality.note}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-12 md:py-16 bg-therapy-warm-50/60 border-t border-therapy-warm-200/60">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-lg md:text-xl font-serif text-therapy-warm-700 font-normal mb-6">
              {language === 'lt' ? 'Susiję tekstai' : 'Related texts'}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.1}>
                <ArticleCard article={article} compact />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={language === 'lt' ? 'Noriite pasikalbėti apie artumą ar seksualumą?' : 'Want to talk about intimacy or sexuality?'}
        buttonText={t.contact.cta}
      />
    </div>
  );
}
