
import { type ContentStructure, type Language } from '../types';

export type { Language } from '../types';
export type { StageKey } from '../types';

export const content: Record<Language, ContentStructure> = {
  de: {
    ui: {
      pageTitle: "Entdecke deine",
      pageTitleHighlight: "Zukunft",
      pageSubtitle: "Wähle deine aktuelle Stufe und erfahre mehr über deine vielfältigen Möglichkeiten nach der Schule.",
      detailsTitle: "Warum eine Berufsausbildung?",
      backButton: "Zurück zur Auswahl",
      languageSelector: "Sprache",
      emailFormTitle: "Bleiben Sie auf dem Laufenden!",
      emailPlaceholder: "Ihre E-Mail-Adresse",
      emailSubmitButton: "Abonnieren",
      emailSuccessMessage: "Vielen Dank! Sie haben sich erfolgreich angemeldet.",
      languages: {
        de: "Deutsch",
        uk: "Українська",
        tr: "Türkçe",
        en: "English",
        ru: "Русский"
      }
    },
    stages: {
      klasse7: {
        title: "Klasse 7",
        advantages: [
          "Du kannst praktische Erfahrung sammeln, bei einem Girls oder Boys Day.",
          "Du hast jetzt schon Ideen für ein Praktikum im nächsten Jahr.",
          "Du hast noch 2 Jahre Zeit, dir über deine berufliche Zukunft Gedanken zu machen."
        ]
      },
      klasse8: {
        title: "Klasse 8",
        advantages: [
          "Jetzt ist die perfekte Zeit für dein erstes Schülerpraktikum.",
          "Du lernst Berufsfelder kennen, die dich wirklich interessieren.",
          "Sammle wertvolle Erfahrungen, die dir bei der Berufswahl helfen."
        ]
      },
      klasse9: {
        title: "Klasse 9",
        advantages: [
          "Du hast deinen Hauptschulabschluss in der Tasche, bestenfalls den Quali.",
          "Du gehst in Ausbildung und verdienst dein eigenes Geld.",
          "Mit Abschluss der Ausbildung kannst du die Mittlere Reife erlangen.",
          "Mit Abschluss der Ausbildung, kannst du den Meister dranhängen und hast die Fachhochschulreife, um zu studieren oder eröffnest deinen eigenen Betrieb."
        ]
      },
      klasse10: {
        title: "Klasse 10",
        advantages: [
          "Du hast deine mittlere Reife, oder den geprüften Hauptschulabschluss.",
          "Mit mittlerer Reife Abschluss, kannst du die Ausbildung verkürzen.",
          "Während der Ausbildung verdienst du dein eigenes Geld.",
          "Mit Abschluss der Ausbildung kannst du den Meister dranhängen und hast die Fachhochschulreife.",
        ]
      },
      realschulabschluss: {
        title: "Realschulabschluss",
        advantages: [
          "Dir stehen fast alle Ausbildungsberufe offen.",
          "Du kannst eine duale Ausbildung beginnen und Theorie mit Praxis verbinden.",
          "Mit einer abgeschlossenen Ausbildung und Berufserfahrung kannst du später studieren."
        ]
      },
      foerderschulabschluss: {
        title: "Förderschulabschluss",
        advantages: [
          "Du hast die Möglichkeit eine Fachpraktiker-Ausbildung zu starten.",
          "Sammle deine Erfahrungen in einem Praktikum.",
          "Du kannst dich auf deine Wunsch-Ausbildung bewerben."
        ]
      },
      ohneAbschluss: {
        title: "Ohne Abschluss",
        advantages: [
          "Ohne Abschluss kannst du auch eine Ausbildung starten; danach hast du ebenfalls deinen Hauptschulabschluss.",
          "Vorteil: In der Ausbildung verdienst du dein eigenes Geld.",
          "Du zeigst Engagement und den Willen, beruflich durchzustarten."
        ]
      },
      abitur: {
        title: "Abitur",
        advantages: [
          "Ein duales Studium kombiniert Uni-Theorie mit Unternehmenspraxis und Gehalt.",
          "Eine anspruchsvolle Ausbildung kann eine Alternative zum Studium sein.",
          "Mit Abitur kannst du oft die Ausbildungszeit verkürzen."
        ]
      }
    },
    footer: {
      copyright: "© 2025 Handwerkskammer Frankfurt-Rhein-Main. Alle Rechte vorbehalten."
    }
  },
  uk: {
    ui: {
      pageTitle: "Відкрий своє",
      pageTitleHighlight: "майбутнє",
      pageSubtitle: "Виберіть свій поточний рівень і дізнайтеся більше про різноманітні можливості після школи.",
      detailsTitle: "Чому варто обрати професійну освіту?",
      backButton: "Назад до вибору",
      languageSelector: "Мова",
      emailFormTitle: "Будьте в курсі!",
      emailPlaceholder: "Ваша електронна адреса",
      emailSubmitButton: "Підписатися",
      emailSuccessMessage: "Дякуємо! Ви успішно підписалися.",
      languages: {
        de: "Deutsch",
        uk: "Українська",
        tr: "Türkçe",
        en: "English",
        ru: "Русский"
      }
    },
    stages: {
      klasse7: {
        title: "7 клас",
        advantages: [
          "Ви можете отримати практичний досвід на Дні дівчат або хлопців.",
          "У вас вже є ідеї для стажування на наступний рік.",
          "У вас є ще 2 роки, щоб подумати про своє професійне майбутнє."
        ]
      },
      klasse8: {
        title: "8 клас",
        advantages: [
          "Зараз ідеальний час для вашої першої шкільної практики.",
          "Ви познайомитеся з професіями, які вас дійсно цікавлять.",
          "Накопичуйте цінний досвід, який допоможе вам у виборі професії."
        ]
      },
      klasse9: {
        title: "9 клас",
        advantages: [
          "Ви отримали атестат про базову середню освіту.",
          "Ви починаєте навчання і заробляєте власні гроші.",
          "Після закінчення навчання ви можете отримати атестат про повну середню освіту.",
          "Після навчання ви можете стати майстром і отримати право на вступ до вищого навчального закладу."
        ]
      },
      klasse10: {
        title: "10 клас",
        advantages: [
          "Ви отримали атестат про повну середню освіту.",
          "З атестатом про повну середню освіту ви можете скоротити термін навчання.",
          "Під час навчання ви заробляєте власні гроші.",
          "Після навчання ви можете стати майстром і отримати право на вступ до вищого навчального закладу."
        ]
      },
      realschulabschluss: {
        title: "Атестат про повну середню освіту",
        advantages: [
          "Для вас відкриті майже всі професії.",
          "Ви можете розпочати дуальну освіту, поєднуючи теорію з практикою.",
          "Зі здобутою освітою та досвідом роботи ви зможете пізніше навчатися в університеті."
        ]
      },
      foerderschulabschluss: {
        title: "Атестат спеціальної школи",
        advantages: [
          "У вас є можливість розпочати навчання на фахівця-практика.",
          "Накопичуйте досвід під час стажування.",
          "Ви можете подати заявку на бажану освіту."
        ]
      },
      ohneAbschluss: {
        title: "Без атестата",
        advantages: [
          "Ви також можете розпочати навчання без атестата; після цього ви отримаєте атестат про базову середню освіту.",
          "Перевага: під час навчання ви заробляєте власні гроші.",
          "Ви демонструєте відданість і бажання розпочати кар'єру."
        ]
      },
      abitur: {
        title: "Абітур",
        advantages: [
          "Дуальна освіта поєднує університетську теорію з практикою в компанії та зарплатою.",
          "Складна професійна освіта може бути альтернативою навчанню в університеті.",
          "З атестатом зрілості ви часто можете скоротити термін навчання."
        ]
      }
    },
    footer: {
      copyright: "© 2025 Палата ремесел Франкфурт-Рейн-Майн. Всі права захищені."
    }
  },
  tr: {
    ui: {
      pageTitle: "Geleceğini bizimle",
      pageTitleHighlight: "keşfet",
      pageSubtitle: "Mevcut seviyenizi seçin ve okuldan sonraki çeşitli fırsatlar hakkında daha fazla bilgi edinin.",
      detailsTitle: "Neden mesleki eğitim?",
      backButton: "Seçime geri dön",
      languageSelector: "Dil",
      emailFormTitle: "Güncel kalın!",
      emailPlaceholder: "E-posta adresiniz",
      emailSubmitButton: "Abone ol",
      emailSuccessMessage: "Teşekkürler! Başarıyla abone oldunuz.",
      languages: {
        de: "Deutsch",
        uk: "Українська",
        tr: "Türkçe",
        en: "English",
        ru: "Русский"
      }
    },
    stages: {
      klasse7: {
        title: "7. Sınıf",
        advantages: [
          "Kızlar veya Erkekler Günü'nde pratik deneyim kazanabilirsiniz.",
          "Gelecek yılki stajınız için şimdiden fikirleriniz var.",
          "Mesleki geleceğiniz hakkında düşünmek için 2 yılınız daha var."
        ]
      },
      klasse8: {
        title: "8. Sınıf",
        advantages: [
          "İlk öğrenci stajınız için mükemmel bir zaman.",
          "Sizi gerçekten ilgilendiren meslek alanlarını tanıyacaksınız.",
          "Meslek seçiminde size yardımcı olacak değerli deneyimler kazanın."
        ]
      },
      klasse9: {
        title: "9. Sınıf",
        advantages: [
          "Ortaokul diplomanız cebinizde, en iyi ihtimalle yeterlilikle.",
          "Eğitime başlayıp kendi paranızı kazanıyorsunuz.",
          "Eğitimi tamamladıktan sonra lise diploması alabilirsiniz.",
          "Eğitimi tamamladıktan sonra usta olabilir, üniversiteye gitmek için yeterlilik kazanabilir veya kendi işinizi kurabilirsiniz."
        ]
      },
      klasse10: {
        title: "10. Sınıf",
        advantages: [
          "Lise diplomanız veya onaylı ortaokul diplomanız var.",
          "Lise diploması ile eğitim süresini kısaltabilirsiniz.",
          "Eğitim sırasında kendi paranızı kazanırsınız.",
          "Eğitimi tamamladıktan sonra usta olabilir ve üniversite yeterliliği kazanabilirsiniz."
        ]
      },
      realschulabschluss: {
        title: "Lise Diploması",
        advantages: [
          "Neredeyse tüm meslekler size açık.",
          "İkili eğitime başlayabilir, teoriyi pratikle birleştirebilirsiniz.",
          "Tamamlanmış bir eğitim ve iş tecrübesi ile daha sonra üniversitede okuyabilirsiniz."
        ]
      },
      foerderschulabschluss: {
        title: "Destek Okulu Diploması",
        advantages: [
          "Uygulama odaklı bir meslek eğitimine başlama imkanınız var.",
          "Staj yaparak deneyim kazanın.",
          "İstediğiniz eğitime başvurabilirsiniz."
        ]
      },
      ohneAbschluss: {
        title: "Diplomasız",
        advantages: [
          "Diplomasız da bir eğitime başlayabilirsiniz; sonrasında yine ortaokul diplomanızı alırsınız.",
          "Avantaj: Eğitim sırasında kendi paranızı kazanırsınız.",
          " bağlılığınızı ve mesleki olarak başlama isteğinizi gösterirsiniz."
        ]
      },
      abitur: {
        title: "Abitur (Lise Bitirme)",
        advantages: [
          "İkili üniversite eğitimi, üniversite teorisini şirket pratiği ve maaşla birleştirir.",
          "Zorlu bir mesleki eğitim, üniversiteye bir alternatif olabilir.",
          "Abitur ile genellikle eğitim süresini kısaltabilirsiniz."
        ]
      }
    },
    footer: {
      copyright: "© 2025 Frankfurt-Rhein-Main Esnaf ve Sanatkarlar Odası. Tüm hakları saklıdır."
    }
  },
  en: {
    ui: {
      pageTitle: "Discover your",
      pageTitleHighlight: "Future",
      pageSubtitle: "Choose your current level and learn more about your diverse opportunities after school.",
      detailsTitle: "Why Vocational Training?",
      backButton: "Back to selection",
      languageSelector: "Language",
      emailFormTitle: "Stay up to date!",
      emailPlaceholder: "Your email address",
      emailSubmitButton: "Subscribe",
      emailSuccessMessage: "Thank you! You have successfully subscribed.",
      languages: {
        de: "Deutsch",
        uk: "Українська",
        tr: "Türkçe",
        en: "English",
        ru: "Русский"
      }
    },
    stages: {
      klasse7: {
        title: "Grade 7",
        advantages: [
          "You can gain practical experience at a Girls' or Boys' Day.",
          "You already have ideas for an internship next year.",
          "You still have 2 years to think about your professional future."
        ]
      },
      klasse8: {
        title: "Grade 8",
        advantages: [
          "Now is the perfect time for your first student internship.",
          "You get to know professional fields that really interest you.",
          "Gain valuable experience that will help you choose a career."
        ]
      },
      klasse9: {
        title: "Grade 9",
        advantages: [
          "You have your secondary school certificate.",
          "You start an apprenticeship and earn your own money.",
          "Upon completion, you can obtain a higher school certificate.",
          "After your apprenticeship, you can become a master craftsman, qualify for university, or start your own business."
        ]
      },
      klasse10: {
        title: "Grade 10",
        advantages: [
          "You have your intermediate school leaving certificate.",
          "With this certificate, you can shorten your apprenticeship.",
          "You earn your own money during your training.",
          "After your apprenticeship, you can become a master craftsman and qualify for university studies."
        ]
      },
      realschulabschluss: {
        title: "Intermediate School Certificate",
        advantages: [
          "Almost all apprenticeships are open to you.",
          "You can start a dual apprenticeship, combining theory and practice.",
          "With a completed apprenticeship and professional experience, you can study at a university later."
        ]
      },
      foerderschulabschluss: {
        title: "Special Needs School Certificate",
        advantages: [
          "You have the opportunity to start a specialized practical training.",
          "Gain experience through an internship.",
          "You can apply for the apprenticeship of your choice."
        ]
      },
      ohneAbschluss: {
        title: "Without a Certificate",
        advantages: [
          "You can also start an apprenticeship without a certificate; afterwards, you will also have your secondary school certificate.",
          "Advantage: You earn your own money during the training.",
          "You show commitment and the will to start your career."
        ]
      },
      abitur: {
        title: "Abitur (University Entrance Qualification)",
        advantages: [
          "A dual study program combines university theory with company practice and a salary.",
          "A demanding apprenticeship can be an alternative to university.",
          "With the Abitur, you can often shorten the duration of your apprenticeship."
        ]
      }
    },
    footer: {
      copyright: "© 2025 Chamber of Crafts Frankfurt-Rhein-Main. All rights reserved."
    }
  },
  ru: {
    ui: {
      pageTitle: "Открой свое",
      pageTitleHighlight: "будущее",
      pageSubtitle: "Выберите свой текущий уровень и узнайте больше о разнообразных возможностях после школы.",
      detailsTitle: "Почему стоит выбрать профессиональное образование?",
      backButton: "Назад к выбору",
      languageSelector: "Язык",
      emailFormTitle: "Будьте в курсе!",
      emailPlaceholder: "Ваш адрес электронной почты",
      emailSubmitButton: "Подписаться",
      emailSuccessMessage: "Спасибо! Вы успешно подписались.",
      languages: {
        de: "Deutsch",
        uk: "Українська",
        tr: "Türkçe",
        en: "English",
        ru: "Русский"
      }
    },
    stages: {
      klasse7: {
        title: "7 класс",
        advantages: [
          "Вы можете получить практический опыт на Дне девочек или мальчиков.",
          "У вас уже есть идеи для стажировки на следующий год.",
          "У вас есть еще 2 года, чтобы подумать о своем профессиональном будущем."
        ]
      },
      klasse8: {
        title: "8 класс",
        advantages: [
          "Сейчас идеальное время для вашей первой школьной практики.",
          "Вы познакомитесь с профессиями, которые вас действительно интересуют.",
          "Накапливайте ценный опыт, который поможет вам в выборе профессии."
        ]
      },
      klasse9: {
        title: "9 класс",
        advantages: [
          "Вы получили аттестат об основном общем образовании.",
          "Вы начинаете обучение и зарабатываете собственные деньги.",
          "После окончания обучения вы можете получить аттестат о среднем общем образовании.",
          "После обучения вы можете стать мастером и получить право на поступление в вуз."
        ]
      },
      klasse10: {
        title: "10 класс",
        advantages: [
          "Вы получили аттестат о среднем общем образовании.",
          "С аттестатом о среднем общем образовании вы можете сократить срок обучения.",
          "Во время обучения вы зарабатываете собственные деньги.",
          "После обучения вы можете стать мастером и получить право на поступление в вуз."
        ]
      },
      realschulabschluss: {
        title: "Аттестат о среднем образовании",
        advantages: [
          "Для вас открыты почти все профессии.",
          "Вы можете начать дуальное обучение, совмещая теорию с практикой.",
          "С полученным образованием и опытом работы вы сможете позже учиться в университете."
        ]
      },
      foerderschulabschluss: {
        title: "Аттестат специальной школы",
        advantages: [
          "У вас есть возможность начать обучение по специальности практика.",
          "Накапливайте опыт во время стажировки.",
          "Вы можете подать заявку на желаемое обучение."
        ]
      },
      ohneAbschluss: {
        title: "Без аттестата",
        advantages: [
          "Вы также можете начать обучение без аттестата; после этого вы получите аттестат об основном общем образовании.",
          "Преимущество: во время обучения вы зарабатываете собственные деньги.",
          "Вы демонстрируете преданность и желание начать карьеру."
        ]
      },
      abitur: {
        title: "Абитур (Аттестат зрелости)",
        advantages: [
          "Дуальное обучение сочетает университетскую теорию с практикой в компании и зарплатой.",
          "Сложное профессиональное обучение может быть альтернативой учебе в университете.",
          "С аттестатом зрелости вы часто можете сократить срок обучения."
        ]
      }
    },
    footer: {
      copyright: "© 2025 Ремесленная палата Франкфурт-Рейн-Майн. Все права защищены."
    }
  },
};
