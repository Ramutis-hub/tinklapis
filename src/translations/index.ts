export type Language = 'lt' | 'en';

export interface Translations {
  nav: {
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    aboutButton: string;
    quote: string;
    quoteAuthor: string;
  };
  services: {
    title: string;
    subtitle: string;
    individual: {
      title: string;
      description: string;
      keywords: string[];
    };
    trauma: {
      title: string;
      description: string;
      keywords: string[];
    };
    couples: {
      title: string;
      description: string;
      keywords: string[];
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      first: {
        title: string;
        description: string;
      };
      safe: {
        title: string;
        items: string[];
        description: string;
      };
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    education: {
      title: string;
      items: {
        title: string;
        institution: string;
      }[];
        title: string;
        institution: string;
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
    sessionDuration: string;
    cancellationTitle: string;
    cancellationPolicy: string;
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
      services: 'Paslaugos',
      about: 'Apie mane',
      contact: 'Kontaktai'
    },
    hero: {
      title: 'Ramutis Klimanskis',
      subtitle: 'Klinikinis psichologas, psichoterapeutas',
      description: 'Padedu žmonėms, kurie susiduria su nerimu, santykių sunkumais ar nori geriau suprasti save. Terapijoje man svarbiausia – įsiklausymas, pagarba ir tikras dialogas.',
      cta: 'Registruotis konsultacijai',
      aboutButton: 'Apie mane',
      quote: '„Klausytis – tai ne tik girdėti žodžius, bet ir tai, kas slepiasi už jų."',
      quoteAuthor: '— J. Lacan'
    },
    services: {
      title: 'Teikiamos paslaugos',
      subtitle: 'Individuali pagalba, pritaikyta jūsų poreikiams ir situacijai.',
      individual: {
        title: 'Individuali geštalto terapija',
        description: 'Padeda giliau pažinti save, tyrinėti santykius ir gyvenimo modelius.',
        keywords: [
          'Savęs pažinimas',
          'Kūno ir emocijų ryšio tyrinėjimas',
          'Gyvenimo krizių įveikimas',
          'LGBT+ identiteto klausimų tyrinėjimas'
        ]
      },
      trauma: {
        title: 'Traumų terapija',
        description: 'Saugios erdvės sukūrimas trauminiams išgyvenimams apdoroti ir integruoti.',
        keywords: [
          'Darbas su netektimis, smurtu, karo patirtimis',
          'Emocijų reguliacija ir saugaus ryšio kūrimas',
          'Potrauminio augimo galimybės',
          'Diskriminacijos patirčių apdorojimas'
        ]
      },
      couples: {
        title: 'Porų konsultacijos',
        description: 'Pagalba sprendžiant santykių sunkumus ir atkuriant artimumą.',
        keywords: [
          'Konfliktų sprendimas',
          'Sveikų ribų nustatymas',
          'Pasitikėjimo ir artumo stiprinimas',
          'Įvairių santykių formų palaikymas'
        ]
      }
    },
    process: {
      title: 'Kaip vyksta terapija?',
      subtitle: 'Terapijos procesas, kuris padeda atrasti naują perspektyvą ir sprendimus.',
      steps: {
        first: {
          title: 'Pirmasis susitikimas',
          description: 'Susipažįstame ir aptariame jūsų situaciją. Tyrinėjame, kas jus atvedė į terapiją ir kokių lūkesčių turite.'
        },
        safe: {
          title: 'Saugus procesas',
          description: 'Kuriame pasitikėjimu grįstą terapinį santykį. Čia ir dabar tyrinėjame mintis, jausmus ir kūno pojūčius.'
        },
        integration: {
          title: 'Patirties integracija',
          description: 'Terapijos metu atrandate naujas prasmes ir būdus integruoti patirtis į savo gyvenimą.'
        }
      }
    },
    about: {
      title: 'Apie mane',
      paragraphs: [
        'Kaip terapeutas, dirbu interaktyviai, orientuodamasis į tai, kas vyksta tarp mūsų čia ir dabar. Tikiu, kad terapinis santykis pats savaime yra gydantis – autentiškas ryšys ir atviras dialogas gali atverti kelią pokyčiams.',
        'Mokydamasis Prancūzijoje, gilindamasis į Lacano psichoanalizę ir Gestalt terapiją tarptautiniuose mokymuose, atradau, kad didžiausi pokyčiai įvyksta tada, kai žmogus tampa sąmoningesnis savo jausmams ir patirtims. Tai leidžia įveikti vidinius blokus ir atrasti daugiau laisvės gyventi.',
        'Kiekviena terapija yra unikali, nes ją kuria abu – tiek jūs, tiek aš. Į mūsų susitikimus ateinu su atvirumu, smalsumu, lankstumu ir pagarba jūsų keliui.'
      ],
      education: {
        title: 'Išsilavinimas',
        items: [
          {
            title: 'Klinikinės psichologijos magistras (psichoanalitinė specializacija)',
            institution: 'Université Côte d\'Azur, Prancūzija'
          },
          {
            title: 'Psichologijos bakalauras',
            institution: 'Mykolo Romerio universitetas, Lietuva'
          },
          {
            title: 'Geštalto terapijos mokymai (GATLA programa)',
            institution: 'Gestalt Associates Training Los Angeles, JAV'
          },
          {
            title: 'Psichoterapijos ir psichodramos studijos',
            institution: 'Київський інститут гештальту та психодрами, Ukraina'
          },
          {
            title: 'Psichoanalitinė porų terapija',
            institution: 'Міжнародний інститут глибинної психології, Ukraina'
          },
          {
            title: 'Psichoterapijos studijos',
            institution: 'Scuola di Psicoterapia Torino – IPSIG, Italija'
          }
        ],
        note: 'Nuolat gilinuosi tarptautiniuose mokymuose ir bendradarbiauju su kolegomis iš įvairių šalių'
      }
    },
    contact: {
      title: 'Kontaktai',
      subtitle: 'Kviečiu jus į saugią, draugišką ir konfidencialią erdvę, kurioje galime kartu dirbti.',
      description: 'Konsultuoju gyvai Vilniuje ir internetu',
      languages: 'Dirbu lietuvių, anglų ir rusų kalbomis',
      lgbtFriendly: 'LGBT+ draugiška erdvė',
      phone: 'Telefonas',
      email: 'El. paštas',
      address: 'Adresas',
      hours: 'Darbo laikas',
      workingHours: 'I-V 8.00-20.00',
      sessionDuration: 'Sesijos trukmė: 50 min.',
      cancellationTitle: 'ATŠAUKIMO POLITIKA:',
      cancellationPolicy: 'Praleistos ar atšauktos sesijos apmokestinamos, jei nesusisiekiate ne vėliau kaip 24 valandas iki susitikimo. Tačiau būčiau dėkingas, jei apie atšaukimą praneštumėte kuo greičiau. Kai įmanoma, stengiuosi būti lankstus ir perkelti jūsų sesiją į tą pačią savaitę. Jei aš vėluoju, atidirbinu prarastą laiką (taigi gaunate pilną sesiją). Jei jūs vėluojate, prarastas laikas neatidirbamas.'
    },
    footer: {
      quote: '„Terapija nėra receptas. Tai kelionė į save."',
      copyright: `© ${new Date().getFullYear()} Dialogo Erdvė`,
      rights: 'Visos teisės saugomos'
    }
  },
  en: {
    nav: {
      services: 'Services',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Ramutis Klimanskis',
      subtitle: 'Clinical Psychologist, Psychotherapist',
      description: 'I help people who face anxiety, relationship difficulties, or want to better understand themselves. In therapy, what matters most to me is listening, respect, and genuine dialogue.',
      cta: 'Book a consultation',
      aboutButton: 'About me',
      quote: '"To listen is not only to hear words, but also what lies behind them."',
      quoteAuthor: '— J. Lacan'
    },
    services: {
      title: 'Services Offered',
      subtitle: 'Individual support tailored to your needs and situation.',
      individual: {
        title: 'Individual Gestalt Therapy',
        description: 'Helps you get to know yourself better, explore relationships and life patterns.',
        keywords: [
          'Self-awareness',
          'Exploring body-emotion connection',
          'Overcoming life crises',
          'Exploring LGBT+ identity questions'
        ]
      },
      trauma: {
        title: 'Trauma Therapy',
        description: 'Creating a safe space to process and integrate traumatic experiences.',
        keywords: [
          'Working with loss, violence, war experiences',
          'Emotion regulation and safe attachment',
          'Post-traumatic growth opportunities',
          'Processing discrimination experiences'
        ]
      },
      couples: {
        title: 'Couples Counseling',
        description: 'Help in resolving relationship difficulties and restoring intimacy.',
        keywords: [
          'Conflict resolution',
          'Setting healthy boundaries',
          'Strengthening trust and intimacy',
          'Supporting various relationship forms'
        ]
      }
    },
    process: {
      title: 'How does therapy work?',
      subtitle: 'A therapeutic process that helps discover new perspectives and solutions.',
      steps: {
        first: {
          title: 'First meeting',
          description: 'We get acquainted and discuss your situation. We explore what brought you to therapy and what expectations you have.'
        },
        safe: {
          title: 'Safe process',
          description: 'We create a trust-based therapeutic relationship. Here and now we explore thoughts, feelings, and bodily sensations.'
        },
        integration: {
          title: 'Experience integration',
          description: 'During therapy, you discover new meanings and ways to integrate experiences into your life.'
        }
      }
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'As a therapist, I work interactively, focusing on what happens between us here and now. I believe that the therapeutic relationship itself is healing – authentic connection and open dialogue can open the path to change.',
        'Studying in France, delving into Lacanian psychoanalysis and Gestalt therapy in international trainings, I discovered that the greatest changes occur when a person becomes more conscious of their feelings and experiences. This allows overcoming internal blocks and finding more freedom to live.',
        'Each therapy is unique because it is created by both of us – you and me. I come to our meetings with openness, curiosity, flexibility, and respect for your journey.'
      ],
      education: {
        title: 'Education',
        items: [
          {
            title: 'Master\'s in Clinical Psychology (psychoanalytic specialization)',
            institution: 'Université Côte d\'Azur, France'
          },
          {
            title: 'Bachelor\'s in Psychology',
            institution: 'Mykolas Romeris University, Lithuania'
          },
          {
            title: 'Gestalt Therapy Training (GATLA program)',
            institution: 'Gestalt Associates Training Los Angeles, USA'
          },
          {
            title: 'Psychotherapy and Psychodrama Studies',
            institution: 'Kyiv Institute of Gestalt and Psychodrama, Ukraine'
          },
          {
            title: 'Psychoanalytic Couples Therapy',
            institution: 'International Institute of Depth Psychology, Ukraine'
          },
          {
            title: 'Psychotherapy Studies',
            institution: 'Scuola di Psicoterapia Torino – IPSIG, Italy'
          }
        ],
        note: 'Continuously deepening knowledge through international trainings and collaborating with colleagues from various countries'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'I invite you to a safe, friendly, and confidential space where we can work together.',
      description: 'I provide consultations in person in Vilnius and online',
      languages: 'I work in Lithuanian, English, and Russian',
      lgbtFriendly: 'LGBT+ friendly space',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working hours',
      workingHours: 'Mon-Fri 8:00-20:00',
      sessionDuration: 'Session duration: 50 min.',
      cancellationTitle: 'CANCELLATION POLICY:',
      cancellationPolicy: 'I do charge for missed or cancelled sessions unless I am notified 24 hours before the time of your appointment. However, I would appreciate knowing about the cancellations as soon as possible. When I can, I try to be as flexible as possible to reschedule your session in the same week. If I am late, I make up the lost time (so you get your full session). If you are late, I do not make up the lost time.'
    },
    footer: {
      quote: '"Therapy is not a prescription. It\'s a journey to yourself."',
      copyright: `© ${new Date().getFullYear()} Dialogue Space`,
      rights: 'All rights reserved'
    }
  }
};

export function useTranslations(language: Language): Translations {
  return translations[language];
}