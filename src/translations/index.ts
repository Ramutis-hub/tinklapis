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
    sessionInfo: string;
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
      integration: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    title: string;
    paragraphs: string[];
    values: {
      professional: {
        title: string;
        description: string;
      };
      empathy: {
        title: string;
        description: string;
      };
      experience: {
        title: string;
        description: string;
      };
    };
    education: {
      title: string;
      items: {
        title: string;
        institution: string;
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
          'Potrauminio augimo galimybės'
        ]
      },
      couples: {
        title: 'Porų konsultacijos',
        description: 'Pagalba sprendžiant santykių sunkumus ir atkuriant artimumą.',
        keywords: [
          'Konfliktų sprendimas',
          'Sveikų ribų nustatymas',
          'Pasitikėjimo ir artumo stiprinimas'
        ]
      }
    },
    process: {
      title: 'Kaip vyksta terapija?',
      subtitle: 'Terapijos procesas, kuris padeda atrasti naują perspektyvą ir sprendimus. Viena sesija trunka 50 minučių. Susitikimai paprastai vyksta vieną kartą per savaitę.',
      sessionInfo: '',
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
      values: {
        professional: {
          title: 'Profesionalus požiūris',
          description: 'Remiuosi mokslu pagrįstais metodais'
        },
        empathy: {
          title: 'Empatija',
          description: 'Kuriu saugią ir palaikančią erdvę'
        },
        experience: {
          title: 'Patirtis',
          description: 'Nuolatinis profesinis tobulėjimas'
        }
      },
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
      cancellationTitle: 'Atšaukimas ir apmokėjimas',
      cancellationPolicy: 'Prašau pranešti apie atšaukimą ne vėliau kaip prieš 24 valandas iki sesijos. Kai tik įmanoma, stengiuosi būti lankstus ir perkelti susitikimą į tą pačią savaitę. Vėliau nei 24 valandas iki sesijos atšauktos ar praleistos sesijos apmokamos pilna kaina.',
      paymentNote: 'Apmokėjimas atliekamas prieš sesiją arba iš karto po jos.'
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
          'Post-traumatic growth opportunities'
        ]
      },
      couples: {
        title: 'Couples Counseling',
        description: 'Help in resolving relationship difficulties and restoring intimacy.',
        keywords: [
          'Conflict resolution',
          'Setting healthy boundaries',
          'Strengthening trust and intimacy'
        ]
      }
    },
    process: {
      title: 'How does therapy work?',
      subtitle: 'A therapeutic process that helps discover new perspectives and solutions. One session lasts 50 minutes. Sessions typically occur once a week.',
      sessionInfo: '',
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
        'As a therapist, I pay close attention to what happens between us in the moment — in our conversation, in the pauses, in what feels easy and in what feels difficult. I believe that real change begins when we can meet each other honestly, without rushing, and simply stay with what is true for you right now.',
        'My path in this work has been shaped by clinical psychology, my studies in France, and long-term training in Lacanian psychoanalysis and Gestalt therapy. Over the years, I\'ve learned that change happens when a person becomes more aware of what moves them — not only their feelings, but also their patterns, wishes, conflicts, defenses, the stories they tell and the ones they avoid, the things that return again and again, and even the moments where words fail. When these layers become more visible, life often starts to feel less fixed and more open.',
        'In therapy, I don\'t come with a fixed plan or ready-made answers. Instead, I try to meet you as you are. I bring openness, curiosity, and a willingness to stay present with whatever you\'re experiencing — whether it\'s confusion, pain, clarity, or something in between.',
        'People come to me with many different struggles: relationship difficulties, emotional pain, anxiety, burnout, or simply a sense that something inside feels stuck. Together, we take time to understand what is happening beneath the surface and what needs attention.',
        'I see therapy as something we create together. Each session is unique because it\'s shaped by the two of us — your honesty and readiness to explore, and my commitment to meet you respectfully, thoughtfully, and with care.',
        'My hope is to offer a space where you can breathe a little easier, hear yourself more clearly, and reconnect with parts of you that may have been silent for a long time — so you can move toward a life that feels more free, grounded, and your own.'
      ],
      values: {
        professional: {
          title: 'Professional Approach',
          description: 'Based on evidence-based methods'
        },
        empathy: {
          title: 'Empathy',
          description: 'Creating a safe and supportive space'
        },
        experience: {
          title: 'Experience',
          description: 'Continuous professional development'
        }
      },
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
      cancellationTitle: 'Cancellation and payment',
      cancellationPolicy: 'Please notify about cancellation at least 24 hours before your session. Whenever possible, I try to be flexible and reschedule within the same week. Sessions cancelled or missed with less than 24 hours notice are charged in full.',
      paymentNote: 'Payment is made before the session or immediately after.'
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