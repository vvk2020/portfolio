export const PORTFOLIO_DATA = {
  person: {
    firstName: 'Вячеслав',
    lastName: 'Викторович',
    surName: 'Кузнецов',
    city: 'Саранск',
    engLevel: "B1",
    contacts: [
      {
        text: "+7 (917) 693-24-84",
        value: 'tel:+79176932484',
        logo: "images/logo/phone.svg"
      },
      {
        text: "dev.vvk@yandex.ru",
        value: 'mailto:dev.vvk@yandex.ru',
        logo: "images/logo/yandex-mail.svg"
      },
      {
        text: "https://github.com/vvk2020",
        value: "https://github.com/vvk2020",
        logo: "images/logo/github.svg",
      },
      {
        text: "https://teams.live.com/meet/9342139911991?p=l79OCMaWVNhs0y4jeE",
        value: "https://teams.live.com/meet/9342139911991?p=l79OCMaWVNhs0y4jeE",
        logo: "images/logo/ms-teams.svg"
      },
    ],
    course:
    {
      goals: [
        "углубление знаний и развитие навыков работы с фрейвороком Angular",
        "изучение особенностей работы с RxJS, сигналами, окружением, Change Detection и DI",
      ],
      howKnow: "интернет, коллеги"
    }
  },
  position: 'Angular-разработчик',
  education: [
    {
      speciality: 'Фронтенд-разработка',
      organization: 'АНО ДПО «Образовательные технологии Яндекса»',
      qualification: 'фронтенд-разработчик'
    },
    {
      speciality: 'Мат. моделирование, численные методы и комплексы программ',
      organization: 'Мордовский госуниверситет',
      qualification: 'кандидат технических наук'
    },
    {
      speciality: 'Инженер-механик',
      organization: 'Мордовский госуниверситет',
      qualification: 'специалист'
    },
  ],

  experience: [
    {
      position: 'Программист',
      company: 'MedPoint, фриланс',
      options: [
        "разработка модулей клиент-серверного приложения MedPoint для управления медицинской организацией"
      ],
      achievements: [
        {
          description: "официальный сайт MedPoint",
          url: "http://medpoint.online/",
        }
      ]
    },
    {
      position: 'Преподаватель',
      company: 'Мордовский госуниверситет',
      options: [
        "разработка и поддержка первой версии сайта лаборатории кафедры",
        "разработка алгоритмов решения научно-исследовательских задач",
        "разработка и чтение курсов учебных дисциплин в области информационных технологий"
      ],
      achievement: [
        "разработана первая (статическая) версия сайта лаборатории (HTML/CSS)",
        "разработана архитектура и подготовлен Figma-макет второй версии сайта лаборатории"
      ],
      achievements: [
        {
          description: "официальный сайт лаборатории",
          url: "https://estprm.mrsu.ru/",
        }
      ],
    },
    {
      position: "Программист",
      company: "ФГБУ «Государственный центр агрохимической службы «Мордовский»",
      options: [
        "Разработка и поддержка приложения «КОРМА» для анализа состава образцов почв Республики Мордовия"
      ],
      achievement: [
        "разработано и внедрено клиент-серверное приложение «КОРМА» для анализа образцов почв (ООП, SQL, СУБД Firebird)",
      ],
    }
  ],
  hardSkills: [
    'ООП, DOM, BOM, MVC/MVP-архитектура',
    "HTML, CSS / SCSS, PostCSS, Flexbox, Grid, Figma / Pixel Perfect",
    "JavaScript (ES6+), TypeScript, Angular",
    "REST-API",
    "SQL (Firebird, IBExpert), NoSQL(MongoDB, MongoDBCompass)",
    "C++, STL, Pascal (Delphi), FIB, Fortran",
    "Git, Bash",
    "точная верстка по Figma-макетам с учетом семантики тегов",
    "разработка клиент-серверных СУБД",
    "понимание Agile-принципов и опыт работы в командах, их реализующих",
    "разработка систем управления оборудованием, машинами и приборами",
    "разработка компьютерных моделей процессов",
  ],
  softSkills: [
    "Стремление к саморазвитию",
    "Ответственность",
    "Коммуникабельность",
    "Стрессоустойчивость",
    "Умение работать в команде",
  ],
  projects: {
    commercial: [
      {
        title: "Сайт магазина товаров для собак",
        description: "Точная верстка сайта по Figma-макету. Стек: HTML, CSS",
        url: "https://vvk2020.github.io/dog-copilot/",
        year: "2025-02-01",
      },
      {
        title: "Cайт лаборатории кафедры",
        description: "Первая версия сайта. Стек: HTML, CSS",
        url: "https://estprm.mrsu.ru/",
        year: "2019-09-01",
      }
    ],
    pet: [
      {
        title: "Сайт-фотогалерея «Место»",
        description: "Верстка по Figma-макету | HTML, CSS, JS",
        url: "https://vvk2020.github.io/mesto-project-ff",
        year: "2025-04-01",
      },
      {
        title: "Закрывающий тег",
        description: "Верстка по Figma-макету, декорирование, анимации, адаптивность, доступность | HTML, CSS, JS",
        url: "https://vvk2020.github.io/zakrivayuschiy-teg-f/",
        year: "2025-01-01",
      },
      {
        title: "no focus",
        description: "Верстка по Figma-макету, анимации, темная / светлая темы, адаптивность | HTML, CSS, JS.",
        url: "https://vvk2020.github.io/slozhno-sosredotochitsya-fd/",
        year: "2024-12-01",
      },
      {
        title: "Посмотри в окно",
        description: "Верстка по Figma-макету, работа с видеоконтентом | HTML, CSS, JS",
        url: "https://vvk2020.github.io/posmotri_v_okno/",
        year: "2024-09-01",
      },
      {
        title: "Frendy cookies",
        description: "Магазин продажи печенья | HTML, CSS, TypeScript, Angular",
        url: "https://vvk2020.github.io/cookies/",
        year: "2024-06-01",
      },

    ],
  }
};
