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
    ctaIndividual: string;
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
      accessibilityTitle: string;
      accessibilityText: string;
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
      first: { title: string; description: string };
      safe: { title: string; description: string };
      integration: { title: string; description: string };
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    approachTitle: string;
    approach: string;
    education: {
      title: string;
      items: { title: string; institution: string; details?: string }[];
      note: string;
    };
  };
  themes: {
    title: string;
    intro: string;
    items: { label: string }[];
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
    ctaContact: string;
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
      individual: 'Individuali psichoterapija',
      sexuality: 'Artumas ir seksualumas',
      about: 'Apie mane',
      contact: 'Kontaktai',
    },
    hero: {
      title: 'Psichoterapija poroms ir individualiai',
      subtitle: 'Ramutis Klimanskis – psichoterapeutas Vilniuje ir online',
      intro: 'Porų terapija · Individuali psichoterapija · Santykių sunkumai · Seksualumo ir artumo temos',
      description:
        'Padedu žmonėms ir poroms tyrinėti tai, kas vyksta santykyje: konfliktus, nutolimą, artumo baimę, pasikartojančius emocinius ciklus, seksualumo temas ir sunkumus būti išgirstam.\n\nTerapijoje kviečiu ne ieškoti greitų atsakymų, o sustoti ties tuo, kas kartojasi: kaip mes ginamės, kaip trokštame artumo, kaip prarandame ryšį ir kaip galime jį atkurti.\n\nDirbu su poromis ir individualiai. Mano darbe svarbios Geštalto terapijos, dialogo, lauko teorijos, psichoanalitinio mąstymo ir emociškai fokusuotos terapijos / EFT perspektyvos.',
      cta: 'Registruotis konsultacijai',
      ctaCouples: 'Porų terapija',
      ctaIndividual: 'Individuali terapija',
      quote: '„Klausytis – tai ne tik girdėti žodžius, bet ir tai, kas slepiasi už jų.”',
      quoteAuthor: '— J. Lacan',
    },
    introBlock: {
      title: 'Kai ryšys tampa sunkus, terapijoje galima pradėti jį kurti iš naujo.',
      text: 'Kartais poros ateina ne todėl, kad meilė baigėsi, o todėl, kad nebežino, kaip vienas kitą pasiekti. Išoriškai tai gali atrodyti kaip konfliktai dėl buities, vaikų, pinigų, seksualumo ar dėmesio. Tačiau po tais ginčais dažnai slypi jautresni klausimai: ar aš tau dar svarbus? Ar tu mane matai? Ar galiu prie tavęs būti savimi?',
    },
    services: {
      title: 'Kaip galiu padėti',
      subtitle: '',
      couples: {
        title: 'Porų terapija',
        description:
          'Porų terapija gali būti naudinga, kai santykyje daugėja konfliktų, tylos, atsitraukimo, pykčio ar jausmo, kad vienas kito nebepasiekiate.\n\nTerapijoje padedu tyrinėti ne tik ginčo turinį, bet ir gilesnį emocinį ciklą: kas vyksta tarp jūsų, kai vienas puola, kitas atsitraukia; kai vienas ilgisi artumo, o kitas jaučiasi spaudžiamas; kai abu nori ryšio, bet neberanda kelio vienas pas kitą.',
        topics: [
          'Pasikartojantys konfliktai',
          'Emocinis ar fizinis nutolimas',
          'Pasitikėjimo sunkumai',
          'Neištikimybės, pavydo ar nesaugumo temos',
          'Seksualumo, noro ir artumo klausimai',
          'Sunkumai kalbėti apie poreikius',
          'Santykio krizės, skyrybų ar apsisprendimo klausimai',
        ],
        duration: 'Sesija – 60 minučių',
      },
      individual: {
        title: 'Individuali psichoterapija',
        description:
          'Individuali psichoterapija yra erdvė tyrinėti savo vidinį gyvenimą, santykių modelius, emocinius sunkumus ir pasikartojančias situacijas.\n\nĮ terapiją galima ateiti ne tik tada, kai „viskas blogai”. Kartais žmogus ateina, nes jaučia, kad gyvenime kažkas nebeatitinka jo paties: santykiai neteikia gyvumo, darbe sunku jausti prasmę, kūne daug įtampos, o viduje kartojasi nerimas, kaltė, gėda ar tuštuma.',
        topics: [
          'Nerimas, įtampa, vidinis spaudimas',
          'Santykių sunkumai',
          'Vienišumas, atstūmimas, pavydas, gėda',
          'Priklausomybės ir kompulsyvūs elgesio modeliai',
          'Ribos ir savęs vertinimas',
          'Seksualumo, kūniškumo ir artumo tyrinėjimas',
          'Netektys, gedėjimas ir gyvenimo pokyčiai',
          'Sunkumas jausti, pasirinkti ar būti savimi',
        ],
        duration: 'Sesija – 50 minučių',
        accessibilityTitle: 'Terapijos prieinamumas',
        accessibilityText:
          'Savo praktikoje turiu keletą vietų individualiai terapijai už mažesnę kainą studentams ir žmonėms, kuriems šiuo metu įprasta terapijos kaina būtų sunkiai prieinama. Jei tai Jums aktualu, galite apie tai parašyti kreipdamiesi dėl konsultacijos.',
      },
      sexuality: {
        title: 'Artumas ir seksualumas',
        description:
          'Seksualumas terapijoje nėra tik apie techniką, funkciją ar „problemą”. Dažnai tai jautri santykio su savimi, kūnu, gėda, troškimu, ribomis ir kitu žmogumi sritis.\n\nPorose seksualumo tema dažnai susijusi su emociniu saugumu: ar galiu būti matomas, ar galiu kalbėti apie savo poreikius, ar galiu būti priimtas su savo pažeidžiamumu.\n\nIndividualioje terapijoje seksualumas gali atsiverti kaip santykio su kūnu, artumo baimės, kaltės, ankstesnių patirčių ar vidinių konfliktų tema.',
        topics: [
          'Sumažėjęs ar pasikeitęs seksualinis noras',
          'Gėda, kaltė ar įtampa dėl seksualumo',
          'Sunkumas kalbėti apie poreikius',
          'Skirtingas partnerių noras poroje',
          'Seksualumo ir emocinio artumo ryšys',
          'Ankstesnių patirčių įtaka dabartiniam santykiui',
          'Pavydas, fantazijos, ribos, ištikimybės klausimai',
        ],
        note: 'Ši tema terapijoje tyrinėjama pagarbiai, be spaudimo ir be vertinimo.',
      },
    },
    process: {
      title: 'Kaip vyksta terapija?',
      subtitle: 'Kiekvienas susitikimas yra unikalus, nes jį kuria du žmonės. Paprastai susitinkame kartą per savaitę.',
      sessionInfo: '',
      steps: {
        first: {
          title: 'Pirmasis susitikimas',
          description: 'Susipažįstame ir aptariame jūsų situaciją. Tyrinėjame, kas jus atvedė į terapiją ir kokių lūkesčių turite.',
        },
        safe: {
          title: 'Saugus dialogas',
          description: 'Kuriame pasitikėjimu grįstą terapinį santykį. Dėmesys tam, kas vyksta čia ir dabar – tarp mūsų, kūne, jausmuose.',
        },
        integration: {
          title: 'Patirties integracija',
          description: 'Terapijos metu atrandate naujas prasmes, giliau suprantate pasikartojančius ciklus ir atgaunate vidinę erdvę rinktis.',
        },
      },
    },
    about: {
      title: 'Apie mane',
      paragraphs: [
        'Kaip terapeutas pirmiausia stengiuosi matyti, kas vyksta tarp mūsų čia ir dabar – tiek pokalbyje, tiek tylos momentuose, tiek tame, kas tarp mūsų jaučiasi artima ar nepatogu. Man svarbu, kad mūsų susitikimuose būtų vietos atvirumui ir ramiam tempui, kad galėtumėte būti su tuo, kas jums šiuo metu tikra.',
        'Savo praktikoje vis labiau matau, kad pokytis prasideda tada, kai žmogus ima aiškiau suprasti savo jausmus, įpročius, pasikartojančius elgesio modelius, vidinius konfliktus, gynybas ir tai, kaip yra pratęs matyti save.',
        'Į sesijas neateinu su iš anksto paruoštu planu ar atsakymais. Man svarbu sutikti jus ten, kur jūs esate. Kartu tyrinėjame tai, kas kyla – ar tai būtų skausmas, nerimas, pasimetimas, aiškumas ar tiesiog sunkiai įvardijama būsena.',
        'Terapiją matau kaip bendrą procesą. Kiekvienas susitikimas yra kitoks, nes jame susitinkame dviese: jūsų atvirumas ir noras suprasti save susitinka su mano dėmesiu, buvimu ir pagarba jūsų patirčiai.',
      ],
      approachTitle: 'Apie mano darbo kryptį',
      approach:
        'Mano terapinis darbas remiasi dialogu, gyvu susitikimu ir dėmesiu tam, kas vyksta čia ir dabar – tarp terapeuto ir kliento, tarp partnerių, tarp žmogaus ir jo paties patirties.\n\nStudijuoju ir gilinuosi į Geštalto psichoterapiją, psichoanalitinį mąstymą, porų terapiją ir emociškai fokusuotą terapiją / EFT. EFT man artima kaip kryptis, padedanti porose matyti prisirišimo poreikius, emocinius ciklus ir saugaus ryšio atkūrimo galimybę.',
      education: {
        title: 'Išsilavinimas ir mokymai',
        items: [
          {
            title: 'Klinikinės psichologijos magistras, su pagyrimu',
            institution: 'Université Côte d\'Azur, Prancūzija',
            details: 'Mokymai, kuriuose daug dėmesio skirta lakaniškai psichoanalitinei teorijai',
          },
          { title: 'Psichologijos bakalauras', institution: 'Mykolo Romerio universitetas, Lietuva' },
          { title: 'Geštalto terapijos mokymai (GATLA programa)', institution: 'Gestalt Associates Training Los Angeles, JAV' },
          { title: 'Psichoterapijos ir psichodramos studijos', institution: 'Київський інститут гештальту та психодрами, Ukraina' },
          { title: 'Psichoanalitinė porų terapija', institution: 'Міжнародний інститут глибинної психології, Ukraina' },
          { title: 'Psichoterapijos studijos', institution: 'Scuola di Psicoterapia Torino – IPSIG, Italija' },
        ],
        note: 'Nuolat gilinuosi tarptautiniuose mokymuose ir bendradarbiauju su kolegomis iš įvairių šalių.',
      },
    },
    themes: {
      title: 'Temos, kurios gali atsiverti terapijoje',
      intro: 'Terapijoje žmogus dažnai ateina ne su viena aiškia problema, o su patirties mazgu, kuriame susipina santykiai, kūnas, savivertė, praeitis ir dabartiniai pasirinkimai.',
      items: [
        { label: 'Santykių sunkumai' },
        { label: 'Ribos ir savęs vertinimas' },
        { label: 'Netektys ir gedėjimas' },
        { label: 'Trauminės patirtys' },
        { label: 'Psichosomatiniai simptomai ir emocinis stresas' },
        { label: 'Ankstyvosios patirtys ir „vidinio vaiko” tema' },
        { label: 'Tapatumo, priklausymo ir savęs priėmimo klausimai' },
        { label: 'LGBTIQA+ žmonių patirtys, santykiai ir savęs priėmimas' },
      ],
    },
    contact: {
      title: 'Kontaktai',
      subtitle: 'Jeigu jaučiate, kad norėtumėte pradėti terapiją individualiai arba kartu su partneriu / partnere, galite susisiekti dėl pirmos konsultacijos.',
      description: 'Konsultuoju gyvai Vilniuje ir internetu',
      languages: 'Dirbu lietuvių, anglų ir rusų kalbomis',
      lgbtFriendly: 'LGBT+ draugiška erdvė',
      phone: 'Telefonas',
      email: 'El. paštas',
      address: 'Adresas',
      hours: 'Darbo laikas',
      workingHours: 'I–V 8.00–19.00',
      cancellationTitle: 'Atšaukimas ir apmokėjimas',
      cancellationPolicy: 'Prašau pranešti apie atšaukimą ne vėliau kaip prieš 24 valandas iki sesijos. Kai tik įmanoma, stengiuosi būti lankstus ir perkelti susitikimą į tą pačią savaitę. Vėliau nei 24 valandas iki sesijos atšauktos ar praleistos sesijos apmokamos pilna kaina.',
      paymentNote: 'Apmokėjimas atliekamas prieš sesiją arba iš karto po jos.',
      cta: 'Registruotis konsultacijai',
      ctaContact: 'Susisiekti',
    },
    footer: {
      quote: '„Terapija nėra receptas. Tai kelionė į save.”',
      copyright: `© ${new Date().getFullYear()} Ramutis Klimanskis`,
      rights: 'Psichoterapija · Vilnius',
    },
  },
  en: {
    nav: {
      couples: 'Couples Therapy',
      individual: 'Individual Therapy',
      sexuality: 'Intimacy & Sexuality',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Psychotherapy for Couples and Individuals',
      subtitle: 'Ramutis Klimanskis – psychotherapist in Vilnius and online',
      intro: 'Couples therapy · Individual psychotherapy · Relationship difficulties · Sexuality and intimacy',
      description:
        'I work with individuals and couples to explore what happens in relationships: conflict, emotional distance, fear of intimacy, recurring emotional cycles, questions around sexuality, and the difficulty of feeling heard.\n\nIn therapy, rather than searching for quick answers, I invite you to pause and explore what keeps repeating: how we protect ourselves, how we long for closeness, how connection gets lost, and how it might be restored.\n\nI work with couples and individually. My work draws on Gestalt therapy, dialogue, field theory, psychoanalytic thinking and emotionally focused therapy / EFT.',
      cta: 'Book a consultation',
      ctaCouples: 'Couples therapy',
      ctaIndividual: 'Individual therapy',
      quote: '"To listen is not only to hear words, but also what lies behind them."',
      quoteAuthor: '— J. Lacan',
    },
    introBlock: {
      title: 'When connection becomes difficult, therapy can offer a place to begin rebuilding it.',
      text: 'Sometimes couples come to therapy not because love has ended, but because they no longer know how to reach one another. On the surface, this may look like conflict about everyday responsibilities, children, money, sexuality or attention. Yet beneath these arguments there are often more vulnerable questions: Do I still matter to you? Do you see me? Can I be myself with you?',
    },
    services: {
      title: 'How I can help',
      subtitle: '',
      couples: {
        title: 'Couples Therapy',
        description:
          'Couples therapy can be helpful when conflict, silence, withdrawal or anger begin to take up more space in the relationship, or when you feel that you can no longer reach one another.\n\nIn therapy, we explore not only what you argue about, but also the deeper emotional cycle between you: what happens when one partner pursues and the other withdraws; when one longs for closeness while the other feels pressured; when both want connection but can no longer find a way towards one another.',
        topics: [
          'Recurring conflict',
          'Emotional or physical distance',
          'Difficulties with trust',
          'Infidelity, jealousy or insecurity',
          'Sexuality, desire and intimacy',
          'Difficulty talking about needs',
          'Relationship crises, separation or uncertainty about whether to stay together',
        ],
        duration: 'Session – 60 minutes',
      },
      individual: {
        title: 'Individual Psychotherapy',
        description:
          'Individual psychotherapy offers a space to explore your inner life, relationship patterns, emotional difficulties and situations that keep repeating.\n\nYou do not have to wait until "everything is falling apart" to come to therapy. Sometimes people seek therapy because something in their life no longer feels aligned with who they are: relationships no longer feel alive, work has lost its sense of meaning, the body carries a great deal of tension, or anxiety, guilt, shame or emptiness keep returning.',
        topics: [
          'Anxiety, tension and inner pressure',
          'Relationship difficulties',
          'Loneliness, rejection, jealousy and shame',
          'Addiction and compulsive patterns of behaviour',
          'Boundaries and self-worth',
          'Exploring sexuality, embodiment and intimacy',
          'Loss, grief and life transitions',
          'Difficulty feeling, making choices or being yourself',
        ],
        duration: 'Session – 50 minutes',
        accessibilityTitle: 'Therapy accessibility',
        accessibilityText:
          'I keep a small number of lower-fee places for individual therapy for students and people for whom the standard therapy fee would currently be difficult to afford. If this is relevant to you, you are welcome to mention it when contacting me about a consultation.',
      },
      sexuality: {
        title: 'Intimacy & Sexuality',
        description:
          'In therapy, sexuality is not only about technique, function or a "problem". It is often a sensitive area involving our relationship with ourselves, the body, shame, desire, boundaries and another person.\n\nIn couples, sexuality is often closely connected with emotional safety: Can I allow myself to be seen? Can I speak about what I need? Can I be accepted with my vulnerability?\n\nIn individual therapy, sexuality may emerge through questions about one\u2019s relationship with the body, fear of intimacy, guilt, earlier experiences or inner conflicts.',
        topics: [
          'Reduced or changing sexual desire',
          'Shame, guilt or tension around sexuality',
          'Difficulty talking about needs',
          'Differences in sexual desire between partners',
          'The relationship between sexuality and emotional intimacy',
          'The influence of earlier experiences on current relationships',
          'Jealousy, fantasies, boundaries and questions of fidelity',
        ],
        note: 'These experiences are explored in therapy respectfully, without pressure or judgement.',
      },
    },
    process: {
      title: 'How does therapy work?',
      subtitle: 'Each session is unique, shaped by two people. We usually meet once a week.',
      sessionInfo: '',
      steps: {
        first: {
          title: 'First meeting',
          description: 'We get acquainted and discuss your situation. We explore what brought you to therapy and what you hope for.',
        },
        safe: {
          title: 'Safe dialogue',
          description: 'We build a trust-based therapeutic relationship. Attention to what is happening here and now \u2013 between us, in the body, in feelings.',
        },
        integration: {
          title: 'Experience integration',
          description: 'During therapy you discover new meanings, come to understand recurring cycles more deeply, and regain inner space to make choices.',
        },
      },
    },
    about: {
      title: 'About me',
      paragraphs: [
        'As a therapist, I first try to notice what is happening between us here and now \u2014 in conversation, in moments of silence, and in what feels close, difficult or uncomfortable. It is important to me that our meetings allow space for openness and an unhurried pace, so that you can stay with what feels real for you at this moment.',
        'Through my work, I increasingly see that change begins when a person starts to understand more clearly what shapes their experience \u2014 their feelings, habits, recurring patterns of behaviour, inner conflicts, defences and the ways they have learned to see themselves.',
        'I do not come into sessions with a predetermined plan or ready-made answers. What matters to me is meeting you where you are. Together, we explore what emerges \u2014 whether it is pain, anxiety, uncertainty, clarity or simply an experience that is difficult to put into words.',
        'I see therapy as a shared process. Every meeting is different because it is created between two people: your openness and wish to understand yourself meet my attention, presence and respect for your experience.',
      ],
      approachTitle: 'My therapeutic approach',
      approach:
        'My therapeutic work is grounded in dialogue, genuine encounter and attention to what is happening here and now \u2014 between therapist and client, between partners, and between a person and their own experience.\n\nMy ongoing training and study include Gestalt psychotherapy, psychoanalytic thinking, couples therapy and Emotionally Focused Therapy (EFT). I value EFT as an approach that helps us understand attachment needs, emotional cycles and the possibility of rebuilding a secure connection within a couple.',
      education: {
        title: 'Education & Training',
        items: [
          {
            title: 'Master\u2019s degree in Clinical Psychology, with honours',
            institution: 'Université Côte d\'Azur, France',
            details: 'Training with an emphasis on Lacanian psychoanalytic theory',
          },
          { title: 'Bachelor\u2019s degree in Psychology', institution: 'Mykolas Romeris University, Lithuania' },
          { title: 'Gestalt Therapy Training (GATLA programme)', institution: 'Gestalt Associates Training Los Angeles, USA' },
          { title: 'Studies in Psychotherapy and Psychodrama', institution: 'Київський інститут гештальту та психодрами, Ukraine' },
          { title: 'Psychoanalytic Couples Therapy', institution: 'Міжнародний інститут глибинної психології, Ukraine' },
          { title: 'Psychotherapy Studies', institution: 'Scuola di Psicoterapia Torino \u2013 IPSIG, Italy' },
        ],
        note: 'I continue my professional development through international training and collaboration with colleagues from different countries.',
      },
    },
    themes: {
      title: 'Themes that may arise in therapy',
      intro: 'People often come to therapy not with one clear problem, but with a tangle of experience in which relationships, the body, self-worth, the past and present choices are all intertwined.',
      items: [
        { label: 'Relationship difficulties' },
        { label: 'Boundaries and self-worth' },
        { label: 'Loss and grief' },
        { label: 'Traumatic experiences' },
        { label: 'Psychosomatic symptoms and emotional stress' },
        { label: 'Early experiences and the "inner child" theme' },
        { label: 'Identity, belonging and self-acceptance' },
        { label: 'LGBTIQA+ experiences, relationships and self-acceptance' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'If you feel you would like to start therapy individually or together with your partner, please get in touch to arrange a first consultation.',
      description: 'I offer sessions in person in Vilnius and online.',
      languages: 'I work in Lithuanian, English and Russian.',
      lgbtFriendly: 'LGBT+ friendly practice',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working hours',
      workingHours: 'Monday\u2013Friday, 8:00\u201320:00',
      cancellationTitle: 'Cancellation and Payment',
      cancellationPolicy: 'Please let me know about cancellations at least 24 hours before the session. Whenever possible, I try to be flexible and reschedule the appointment within the same week. Sessions cancelled less than 24 hours in advance, as well as missed sessions, are charged at the full fee.',
      paymentNote: 'Payment is made before the session or immediately afterwards.',
      cta: 'Book a consultation',
      ctaContact: 'Contact me',
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
