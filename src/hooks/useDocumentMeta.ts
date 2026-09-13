import { useEffect } from 'react';
import type { Language } from './useLanguage';

interface MetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

const META_BY_PAGE: Record<string, { lt: MetaContent; en: MetaContent }> = {
  home: {
    lt: {
      title: 'Psichoterapija poroms ir individualiai | Ramutis Klimanskis',
      description: 'Psichoterapeutas Vilniuje ir online. Porų terapija, individuali psichoterapija, santykių sunkumai, seksualumo ir artumo temos.',
      ogTitle: 'Ramutis Klimanskis – psichoterapeutas Vilniuje ir online',
      ogDescription: 'Psichoterapeutas Vilniuje ir online. Porų terapija, individuali psichoterapija, santykių sunkumai, seksualumo ir artumo temos.',
    },
    en: {
      title: 'Psychotherapy for Couples and Individuals | Ramutis Klimanskis',
      description: 'Psychotherapist in Vilnius and online. Couples therapy, individual psychotherapy, relationship difficulties, sexuality and intimacy.',
      ogTitle: 'Ramutis Klimanskis – psychotherapist in Vilnius and online',
      ogDescription: 'Psychotherapist in Vilnius and online. Couples therapy, individual psychotherapy, relationship difficulties, sexuality and intimacy.',
    },
  },
  couples: {
    lt: {
      title: 'Porų terapija Vilniuje ir online | Ramutis Klimanskis',
      description: 'Porų terapija gali padėti, kai santykyje daugėja konfliktų, tylos ar atsitraukimo. Konsultacijos gyvai Vilniuje ir internetu.',
      ogTitle: 'Porų terapija | Ramutis Klimanskis',
      ogDescription: 'Porų terapija gali padėti, kai santykyje daugėja konfliktų, tylos ar atsitraukimo.',
    },
    en: {
      title: 'Couples Therapy in Vilnius and Online | Ramutis Klimanskis',
      description: 'Couples therapy can help when conflict, silence, withdrawal or anger take up more space in the relationship. Sessions in person in Vilnius and online.',
      ogTitle: 'Couples Therapy | Ramutis Klimanskis',
      ogDescription: 'Couples therapy can help when conflict, silence, withdrawal or anger take up more space in the relationship.',
    },
  },
  individual: {
    lt: {
      title: 'Individuali psichoterapija Vilniuje ir online | Ramutis Klimanskis',
      description: 'Individuali psichoterapija – erdvė tyrinėti savo vidinį gyvenimą, santykių modelius ir pasikartojančias situacijas.',
      ogTitle: 'Individuali psichoterapija | Ramutis Klimanskis',
      ogDescription: 'Individuali psichoterapija – erdvė tyrinėti savo vidinį gyvenimą, santykių modelius ir pasikartojančias situacijas.',
    },
    en: {
      title: 'Individual Psychotherapy in Vilnius and Online | Ramutis Klimanskis',
      description: 'Individual psychotherapy offers a space to explore your inner life, relationship patterns, emotional difficulties and situations that keep repeating.',
      ogTitle: 'Individual Psychotherapy | Ramutis Klimanskis',
      ogDescription: 'Individual psychotherapy offers a space to explore your inner life, relationship patterns, emotional difficulties and situations that keep repeating.',
    },
  },
  sexuality: {
    lt: {
      title: 'Artumas ir seksualumas terapijoje | Ramutis Klimanskis',
      description: 'Seksualumas terapijoje – jautri sritis, susijusi su santykiu su savimi, kūnu, gėda, troškimu ir ribomis.',
      ogTitle: 'Artumas ir seksualumas | Ramutis Klimanskis',
      ogDescription: 'Seksualumas terapijoje – jautri sritis, susijusi su santykiu su savimi, kūnu, gėda, troškimu ir ribomis.',
    },
    en: {
      title: 'Intimacy & Sexuality in Therapy | Ramutis Klimanskis',
      description: 'In therapy, sexuality is a sensitive area involving our relationship with ourselves, the body, shame, desire, boundaries and another person.',
      ogTitle: 'Intimacy & Sexuality | Ramutis Klimanskis',
      ogDescription: 'In therapy, sexuality is a sensitive area involving our relationship with ourselves, the body, shame, desire, boundaries and another person.',
    },
  },
  writing: {
    lt: {
      title: 'Tekstai apie santykius ir terapiją | Ramutis Klimanskis',
      description: 'Mintys apie santykius, psichoterapiją, artumą ir žmogaus patirtį.',
      ogTitle: 'Tekstai | Ramutis Klimanskis',
      ogDescription: 'Mintys apie santykius, psichoterapiją, artumą ir žmogaus patirtį.',
    },
    en: {
      title: 'Writing on Relationships and Psychotherapy | Ramutis Klimanskis',
      description: 'Reflections on relationships, psychotherapy, intimacy and human experience.',
      ogTitle: 'Writing | Ramutis Klimanskis',
      ogDescription: 'Reflections on relationships, psychotherapy, intimacy and human experience.',
    },
  },
  about: {
    lt: {
      title: 'Apie mane | Ramutis Klimanskis',
      description: 'Psichoterapeutas Ramutis Klimanskis. Dirbu individualiai ir su poromis Vilniuje bei nuotoliu.',
      ogTitle: 'Apie mane | Ramutis Klimanskis',
      ogDescription: 'Psichoterapeutas Ramutis Klimanskis. Dirbu individualiai ir su poromis Vilniuje bei nuotoliu.',
    },
    en: {
      title: 'About | Ramutis Klimanskis',
      description: 'Psychotherapist Ramutis Klimanskis. I work with individuals and couples in Vilnius and online.',
      ogTitle: 'About | Ramutis Klimanskis',
      ogDescription: 'Psychotherapist Ramutis Klimanskis. I work with individuals and couples in Vilnius and online.',
    },
  },
  contact: {
    lt: {
      title: 'Kontaktai | Ramutis Klimanskis',
      description: 'Susisiekite dėl psichoterapijos konsultacijos. Telefonas, el. paštas, adresas Kęstučio g. 17, Vilnius.',
      ogTitle: 'Kontaktai | Ramutis Klimanskis',
      ogDescription: 'Susisiekite dėl psichoterapijos konsultacijos.',
    },
    en: {
      title: 'Contact | Ramutis Klimanskis',
      description: 'Get in touch to arrange a consultation. Phone, email, address Kęstučio g. 17, Vilnius.',
      ogTitle: 'Contact | Ramutis Klimanskis',
      ogDescription: 'Get in touch to arrange a consultation.',
    },
  },
  article: {
    lt: {
      title: 'Tekstas | Ramutis Klimanskis',
      description: 'Tekstas apie santykius ir terapiją.',
      ogTitle: 'Tekstas | Ramutis Klimanskis',
      ogDescription: 'Tekstas apie santykius ir terapiją.',
    },
    en: {
      title: 'Writing | Ramutis Klimanskis',
      description: 'Writing on relationships and therapy.',
      ogTitle: 'Writing | Ramutis Klimanskis',
      ogDescription: 'Writing on relationships and therapy.',
    },
  },
  notFound: {
    lt: {
      title: 'Puslapis nerastas | Ramutis Klimanskis',
      description: 'Puslapis nerastas.',
      ogTitle: 'Puslapis nerastas | Ramutis Klimanskis',
      ogDescription: 'Puslapis nerastas.',
    },
    en: {
      title: 'Page Not Found | Ramutis Klimanskis',
      description: 'Page not found.',
      ogTitle: 'Page Not Found | Ramutis Klimanskis',
      ogDescription: 'Page not found.',
    },
  },
};

export type MetaPageKey = keyof typeof META_BY_PAGE;

function setMetaTag(selector: string, attribute: string, content: string) {
  let element = document.head.querySelector(selector) as HTMLElement | null;
  if (!element) {
    element = document.createElement('meta');
    const [, attr, value] = selector.match(/\[(\w+)="([^"]+)"\]/) || [];
    if (attr && value) element.setAttribute(attr, value);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, content);
}

export function useDocumentMeta(pageKey: MetaPageKey, language: Language, customTitle?: string, customDescription?: string) {
  useEffect(() => {
    const meta = META_BY_PAGE[pageKey][language];
    const title = customTitle || meta.title;
    const description = customDescription || meta.description;

    document.title = title;
    document.documentElement.lang = language;

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[property="og:title"]', 'content', customTitle || meta.ogTitle);
    setMetaTag('meta[property="og:description"]', 'content', customDescription || meta.ogDescription);
    setMetaTag('meta[property="og:locale"]', 'content', language === 'lt' ? 'lt_LT' : 'en_GB');
    setMetaTag('meta[name="twitter:title"]', 'content', customTitle || meta.ogTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', customDescription || meta.ogDescription);
  }, [pageKey, language, customTitle, customDescription]);
}
