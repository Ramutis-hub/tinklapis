export type Language = 'lt' | 'en';

export interface Translations {
  nav: {
    couples: string;
    individual: string;
    sexuality: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    intro: string;
    description: string;
    cta: string;
    ctaCouples: string;
    quote: string;
    quoteAuthor: string;
  };
  introBlock: {
    title: string;
    text: string;
  };
  services: {
    title: string;
    subtitle: string;
    couples: {
      title: string;
      description: string;
      topics: string[];
      duration: string;
    };
    individual: {
      title: string;
      description: string;
      topics: string[];
      duration: string;
    };
    sexuality: {
      title: string;
      description: string;
      topics: string[];
      note: string;
    };
  };
  process: {
    title: string;
    subtitle: string;
    sessionInfo: string;
    steps: {
      first: {
        title: string;
        description: string;
      };
      safe: {
        title: string;
        description: string;
      };
      integration: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    approachTitle: string;
    approach: string;
    education: {
      title: string;
      items: {
        title: string;
        institution: string;
        details?: string;
      }[];
      note: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    description: string;
    languages: string;
    lgbtFriendly: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    workingHours: string;
    cancellationTitle: string;
    cancellationPolicy: string;
    paymentNote: string;
    cta: string;
  };
  footer: {
    quote: string;
    copyright: string;
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  lt: {
    nav: {
      couples: 'Porų terapija',
      individual: 'Individuali terapija',
      sexuality: 'Seksualumas ir artumas',
      about: 'Apie mane',
      contact: 'Kontaktai',
    },
    hero: {
      title: 'Psichoterapija poroms ir individualiai',
      subtitle: 'Ramutis Klimanskis · psichoterapeutas Vilniuje',
      intro: 'Porų terapija · Individuali psichoterapija · Santykių sunkumai · Seksualumo ir artumo temos',
      description:
        'Padedu žmonėms ir poroms tyrinėti tai, kas vyksta santykyje: konfliktus, nutolimą, artumo baimę, pasikartojančius emocinius ciklus, seksualumo temas ir sunkumus būti išgirstam.\n\nTerapijoje kviečiu ne ieškoti greitų atsakymų, o sustoti prie to, kas kartojasi: kaip mes ginamės, kaip trokštame artumo, kaip prarandame ryšį ir kaip galime jį atkurti.\n\nMano darbe svarbios Gestalt terapijos, dialogo, lauko teorijos, psichoanalitinio mąstymo ir emociškai fokusuotos terapijos / EFT perspektyvos.',
      cta: 'Registruotis konsultacijai',
      ctaCouples: 'Sužinoti apie porų terapiją',
      quote: '„Klausytis – tai ne tik girdėti žodžius, bet ir tai, kas slepiasi už jų."',
      quoteAuthor: '— J. Lacan',
    },
    introBlock: {
      title: 'Kai ryšys tampa sunkus, terapijoje galima pradėti jį girdėti iš naujo.',
      text: 'Kartais poros ateina ne todėl, kad meilė baigėsi, o todėl, kad nebežino, kaip vienas kitą pasiekti. Išoriškai tai gali atrodyti kaip konfliktai dėl buities, vaikų, pinigų, seksualumo ar dėmesio. Tačiau po tais ginčais dažnai slypi jautresni klausimai: ar aš tau dar svarbus? Ar tu mane matai? Ar galiu prie tavęs būti savimi?',
    },
    services: {
      title: 'Kaip galiu padėti',
      subtitle: '',
      couples: {
        title: 'Porų terapija',
        description:
          'Porų terapija gali būti naudinga, kai santykyje daugėja konfliktų, tylos, atsitraukimo, pykčio ar jausmo, kad vienas kito nebepasiekiate.\n\nTerapijoje padedu tyrinėti ne tik ginčo turinį, bet ir gilesnį emocinį ciklą: kas vyksta tarp jūsų, kai vienas puola, kitas atsitraukia; kai vienas ilgisi artumo, o kitas jaučiasi spaudžiamas; kai abu nori ryšio, bet neberanda kelio vienas pas kitą.\n\nDirbu tiek su poromis, tiek individualiai.',
        topics: [
          'Pasikartojantys konfliktai',
          'Emocinis ar fizinis nutolimas',
          'Pasitikėjimo sunkumai',
          'Neištikimybės, pavydo ar nesaugumo temos',
          'Seksualumo, noro ir artumo klausimai',
          'Sunkumai kalbėti apie poreikius',
          'Santykio krizės, skyrybų ar apsisprendimo klausimai',
        ],
        duration: 'Sesija – 80 min (poroms) arba 50 min (individualiai)',
      },
      individual: {
        title: 'Individuali psichoterapija',
        description:
          'Individuali terapija yra erdvė tyrinėti savo vidinį gyvenimą, santykių modelius, emocinius sunkumus ir pasikartojančias situacijas.\n\nĮ terapiją galima ateiti ne tik tada, kai „viskas blogai". Kartais žmogus ateina, nes jaučia, kad gyvenime kažkas nebeatitinka jo paties: santykiai neteikia gyvumo, darbe sunku jausti prasmę, kūne daug įtampos, o viduje kartojasi nerimas, kaltė, gėda ar tuštuma.',
        topics: [
          'Nerimas, įtampa, vidinis spaudimas',
          'Santykių sunkumai',
          'Vienišumas, atstūmimas, pavydas, gėda',
          'Priklausomybės ir kompulsyvūs elgesio modeliai',
          'Savivertės ir tapatumo klausimai',
          'Seksualumo, kūniškumo ir artumo tyrinėjimas',
          'Gyvenimo krizės, netektys, pokyčiai',
          'Sunkumas jausti, pasirinkti ar būti savimi',
        ],
        duration: 'Sesija – 50 minučių',
      },
      sexuality: {
        title: 'Seksualumas ir artumas',
        description:
          'Seksualumas terapijoje nėra tik apie techniką ar „funkcionavimą". Dažnai tai yra jautri santykio su savimi, kūnu, gėda, troškimu, artumu ir kitu žmogumi sritis.',
        topics: [
          'Sumažėjęs ar pasikeitęs seksualinis noras',
          'Gėda, kaltė ar įtampa dėl seksualumo',
          'Sunkumas kalbėti apie poreikius',
          'Skirtingas partnerių noras poroje',
          'Seksualumo ir emocinio artumo ryšys',
          'Ankstesnių patirčių įtaka dabartiniam santykiui',
          'Pavydas, fantazijos, ribos, ištikimybės klausimai',
        ],
        note: 'Ši tema terapijoje tyrinėjama pagarbiai, be spaudimo ir be vertinimo. Man svarbu padėti žmogui ar porai suprasti, kokią prasmę seksualumas turi jų santykyje ir vidiniame gyvenime.',
      },
    },
    process: {
      title: 'Kaip vyksta terapija?',
      subtitle: 'Kiekvienas susitikimas yra kitoks, nes jį kuria du žmonės. Paprastai susitinkame kartą per savaitę.',
      sessionInfo: '',
      steps: {
        first: {
          title: 'Pirmasis susitikimas',
          description:
            'Susipažįstame ir aptariame jūsų situaciją. Tyrinėjame, kas jus atvedė į terapiją ir kokių lūkesčių turite. Neskubame.',
        },
        safe: {
          title: 'Saugus dialogas',
          description:
            'Kuriame pasitikėjimu grįstą terapinį santykį. Dėmesys tam, kas vyksta čia ir dabar – tarp mūsų, kūne, jausmuose.',
        },
        integration: {
          title: 'Patirties integracija',
          description:
            'Terapijos metu atrandate naujas prasmes, giliau suprantate pasikartojančius ciklus ir atgaunate vidinę erdvę rinktis.',
        },
      },
    },
    about: {
      title: 'Apie mane',
      paragraphs: [
        'Kaip terapeutas, pirmiausia stengiuosi matyti, kas vyksta tarp mūsų čia ir dabar – tiek pokalbyje, tiek tylos momentuose, tiek tame, kas abiem jaučiasi artima ar nepatogu. Man svarbu, kad mūsų susitikimuose būtų vietos atvirumui ir ramiam tempui, kad galėtumėte būti su tuo, kas jums šiuo metu tikra.',
        'Per savo praktiką vis labiau matau, kad pokytis prasideda tada, kai žmogus ima aiškiau suprasti, kas jį veikia – savo jausmus, įpročius, pasikartojančius elgesio modelius, vidinius konfliktus, gynybas ir tai, kaip esate pratę matyti save.',
        'Į sesijas neateinu su iš anksto paruoštu planu ar atsakymais. Man svarbu sutikti jus ten, kur jūs esate. Kartu tyrinėjame tai, kas kyla – ar tai būtų skausmas, nerimas, pasimetimas, aiškumas ar tiesiog sunkiai įvardijama būsena.',
        'Terapiją matau kaip bendrą procesą. Kiekvienas susitikimas yra kitoks, nes jį kuria du žmonės: jūsų atvirumas ir noras suprasti save susitinka su mano dėmesiu, buvimu ir pagarba jūsų patirčiai.',
      ],
      approachTitle: 'Apie mano darbo kryptį',
      approach:
        'Mano terapinis darbas remiasi dialogu, gyvu susitikimu ir dėmesiu tam, kas vyksta čia ir dabar – tarp terapeuto ir kliento, tarp partnerių, tarp žmogaus ir jo paties patirties.\n\nStudijuoju ir gilinuosi į Gestalt psichoterapiją, psichoanalitinį mąstymą, porų terapiją ir emociškai fokusuotą terapiją / EFT. EFT man svarbi kaip kryptis, padedanti porose matyti prisirišimo poreikius, emocinius ciklus ir saugaus ryšio atkūrimo galimybę.',
      education: {
        title: 'Išsilavinimas',
        items: [
          {
            title: 'Klinikinės psichologijos magistras, su pagyrimu',
            institution: 'Université Côte d\'Azur, Prancūzija',
            details: 'Mokymai su Lakaniškos psichoanalitinės teorijos akcentu',
          },
          {
            title: 'Psichologijos bakalauras',
            institution: 'Mykolo Romerio universitetas, Lietuva',
          },
          {
            title: 'Geštalto terapijos mokymai (GATLA programa)',
            institution: 'Gestalt Associates Training Los Angeles, JAV',
          },
          {
            title: 'Psichoterapijos ir psichodramos studijos',
            institution: 'Київський інститут гештальту та психодрами, Ukraina',
          },
          {
            title: 'Psichoanalitinė porų terapija',
            institution: 'Міжнародний інститут глибинної психології, Ukraina',
          },
          {
            title: 'Psichoterapijos studijos',
            institution: 'Scuola di Psicoterapia Torino – IPSIG, Italija',
          },
        ],
        note: 'Nuolat gilinuosi tarptautiniuose mokymuose ir bendradarbiauju su kolegomis iš įvairių šalių',
      },
    },
    contact: {
      title: 'Kontaktai',
      subtitle:
        'Jeigu jaučiate, kad norėtumėte pradėti terapiją individualiai arba kartu su partneriu / partnere, galite susisiekti dėl pirmos konsultacijos.',
      description: 'Konsultuoju gyvai Vilniuje ir internetu',
      languages: 'Dirbu lietuvių, anglų ir rusų kalbomis',
      lgbtFriendly: 'LGBT+ draugiška erdvė',
      phone: 'Telefonas',
      email: 'El. paštas',
      address: 'Adresas',
      hours: 'Darbo laikas',
      workingHours: 'I–V 8.00–20.00',
      cancellationTitle: 'Atšaukimas ir apmokėjimas',
      cancellationPolicy:
        'Prašau pranešti apie atšaukimą ne vėliau kaip prieš 24 valandas iki sesijos. Kai tik įmanoma, stengiuosi būti lankstus ir perkelti susitikimą į tą pačią savaitę. Vėliau nei 24 valandas iki sesijos atšauktos ar praleistos sesijos apmokamos pilna kaina.',
      paymentNote: 'Apmokėjimas atliekamas prieš sesiją arba iš karto po jos.',
      cta: 'Registruotis konsultacijai',
    },
    footer: {
      quote: '„Terapija nėra receptas. Tai kelionė į save."',
      copyright: `© ${new Date().getFullYear()} Ramutis Klimanskis`,
      rights: 'Psichoterapija · Vilnius',
    },
  },
  en: {
    nav: {
      couples: 'Couples therapy',
      individual: 'Individual therapy',
      sexuality: 'Sexuality & intimacy',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Psychotherapy for couples and individuals',
      subtitle: 'Ramutis Klimanskis · psychotherapist in Vilnius',
      intro: 'Couples therapy · Individual psychotherapy · Relationship difficulties · Sexuality and intimacy',
      description:
        'I help people and couples explore what happens in their relationship: conflicts, distance, fear of intimacy, recurring emotional cycles, sexuality and the difficulty of being heard.\n\nIn therapy, I invite you not to look for quick answers, but to pause at what keeps repeating: how we protect ourselves, how we long for closeness, how we lose connection and how we can restore it.\n\nMy work draws on Gestalt therapy, dialogue, field theory, psychoanalytic thinking and emotionally focused therapy / EFT.',
      cta: 'Book a consultation',
      ctaCouples: 'Learn about couples therapy',
      quote: '"To listen is not only to hear words, but also what lies behind them."',
      quoteAuthor: '— J. Lacan',
    },
    introBlock: {
      title: 'When connection becomes difficult, therapy can help you hear it again.',
      text: 'Couples sometimes come not because love has ended, but because they no longer know how to reach each other. On the surface it may look like conflicts about daily life, children, money, sexuality or attention. But beneath those arguments often lie more tender questions: am I still important to you? Do you see me? Can I be myself with you?',
    },
    services: {
      title: 'How I can help',
      subtitle: '',
      couples: {
        title: 'Couples therapy',
        description:
          'Couples therapy can be helpful when a relationship is marked by growing conflict, silence, withdrawal, anger or the feeling that you can no longer reach each other.\n\nIn therapy I help explore not just the content of arguments, but the deeper emotional cycle: what happens between you when one pursues and the other withdraws; when one longs for closeness while the other feels pressured; when both want connection but can no longer find the way.\n\nI work with both couples and individuals.',
        topics: [
          'Recurring conflicts',
          'Emotional or physical distance',
          'Difficulties with trust',
          'Infidelity, jealousy or insecurity',
          'Sexuality, desire and intimacy',
          'Difficulty expressing needs',
          'Relationship crises, separation or decision-making',
        ],
        duration: 'Session – 80 min (couples) or 50 min (individual)',
      },
      individual: {
        title: 'Individual psychotherapy',
        description:
          'Individual therapy is a space to explore your inner life, relationship patterns, emotional difficulties and recurring situations.\n\nYou don\'t have to wait until "everything is falling apart". Sometimes people come because something in their life no longer feels right: relationships feel hollow, work feels meaningless, the body holds tension, and inside there is recurring anxiety, guilt, shame or emptiness.',
        topics: [
          'Anxiety, tension, inner pressure',
          'Relationship difficulties',
          'Loneliness, rejection, jealousy, shame',
          'Compulsive patterns and dependencies',
          'Self-worth and identity questions',
          'Sexuality, embodiment and intimacy',
          'Life crises, loss, transitions',
          'Difficulty feeling, choosing or being yourself',
        ],
        duration: 'Session – 50 minutes',
      },
      sexuality: {
        title: 'Sexuality and intimacy',
        description:
          'Sexuality in therapy is not only about technique or "functioning". It is often a tender area of relationship with oneself, the body, shame, desire, closeness and another person.',
        topics: [
          'Reduced or changed sexual desire',
          'Shame, guilt or tension around sexuality',
          'Difficulty talking about needs',
          'Mismatched desire in a relationship',
          'The connection between sexuality and emotional intimacy',
          'How past experiences shape current relationships',
          'Jealousy, fantasy, boundaries, fidelity questions',
        ],
        note: 'This topic is explored in therapy with respect, without pressure and without judgment. I want to help the person or couple understand what meaning sexuality holds in their relationship and inner life.',
      },
    },
    process: {
      title: 'How does therapy work?',
      subtitle: 'Each session is unique because it is shaped by two people. We usually meet once a week.',
      sessionInfo: '',
      steps: {
        first: {
          title: 'First meeting',
          description:
            'We get acquainted and discuss your situation. We explore what brought you to therapy and what you hope for. There is no rush.',
        },
        safe: {
          title: 'Safe dialogue',
          description:
            'We build a trust-based therapeutic relationship. Attention to what is happening here and now – between us, in the body, in feelings.',
        },
        integration: {
          title: 'Experience integration',
          description:
            'During therapy you discover new meanings, come to understand recurring cycles more deeply, and regain inner space to make choices.',
        },
      },
    },
    about: {
      title: 'About me',
      paragraphs: [
        'As a therapist, I pay close attention to what happens between us in the moment — in our conversation, in the pauses, in what feels easy and in what feels difficult. I believe that real change begins when we can meet each other honestly, without rushing, and simply stay with what is true for you right now.',
        'Over the years I have come to see that change happens when a person becomes more aware of what moves them — not only their feelings, but also their patterns, defences, and the stories they return to again and again.',
        'I don\'t come to sessions with a fixed plan or ready-made answers. I try to meet you as you are. I bring openness, curiosity, and a willingness to stay present with whatever you\'re experiencing — confusion, pain, clarity, or something in between.',
        'I see therapy as something we create together. Each session is unique because it is shaped by the two of us — your honesty and readiness to explore, and my commitment to meet you respectfully, thoughtfully, and with care.',
      ],
      approachTitle: 'My approach',
      approach:
        'My therapeutic work is rooted in dialogue, genuine encounter, and attention to what is happening here and now — between therapist and client, between partners, between a person and their own experience.\n\nI study and deepen my knowledge in Gestalt psychotherapy, psychoanalytic thinking, couples therapy and emotionally focused therapy / EFT. EFT is important to me as a framework for seeing attachment needs, emotional cycles, and the possibility of restoring secure connection in couples.',
      education: {
        title: 'Education',
        items: [
          {
            title: 'Master\'s in Clinical Psychology, with honours',
            institution: 'Université Côte d\'Azur, France',
            details: 'Training with a strong focus on Lacanian psychoanalytic theory',
          },
          {
            title: 'Bachelor\'s in Psychology',
            institution: 'Mykolas Romeris University, Lithuania',
          },
          {
            title: 'Gestalt Therapy Training (GATLA programme)',
            institution: 'Gestalt Associates Training Los Angeles, USA',
          },
          {
            title: 'Psychotherapy and Psychodrama Studies',
            institution: 'Kyiv Institute of Gestalt and Psychodrama, Ukraine',
          },
          {
            title: 'Psychoanalytic Couples Therapy',
            institution: 'International Institute of Depth Psychology, Ukraine',
          },
          {
            title: 'Psychotherapy Studies',
            institution: 'Scuola di Psicoterapia Torino – IPSIG, Italy',
          },
        ],
        note: 'Continuously deepening knowledge through international trainings and collaborating with colleagues from various countries',
      },
    },
    contact: {
      title: 'Contact',
      subtitle:
        'If you feel you would like to start therapy individually or together with your partner, please get in touch to arrange a first consultation.',
      description: 'I work in person in Vilnius and online',
      languages: 'I work in Lithuanian, English and Russian',
      lgbtFriendly: 'LGBT+ friendly space',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working hours',
      workingHours: 'Mon–Fri 8:00–20:00',
      cancellationTitle: 'Cancellation and payment',
      cancellationPolicy:
        'Please notify about cancellation at least 24 hours before your session. Whenever possible, I try to be flexible and reschedule within the same week. Sessions cancelled or missed with less than 24 hours notice are charged in full.',
      paymentNote: 'Payment is made before the session or immediately after.',
      cta: 'Book a consultation',
    },
    footer: {
      quote: '"Therapy is not a prescription. It is a journey to yourself."',
      copyright: `© ${new Date().getFullYear()} Ramutis Klimanskis`,
      rights: 'Psychotherapy · Vilnius',
    },
  },
};

export function useTranslations(language: Language): Translations {
  return translations[language];
}
