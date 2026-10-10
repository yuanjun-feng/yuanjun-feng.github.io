// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-selected-work",
          title: "Selected Work",
          description: "Studies of AI behavior, human–AI collaboration, and the social contexts that shape both.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/selected-work/";
          },
        },{id: "nav-photography",
          title: "Photography",
          description: "Small moments, shifting light, and places along the way. Photographs by Yuanjun Feng.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "Research, education, teaching, and professional experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-join-unil-as-a-phd-student",
          title: 'Join UNIL as a PhD student!',
          description: "",
          section: "News",},{id: "news-attend-pujiang-innovation-forum-in-shanghai-️",
          title: 'Attend Pujiang Innovation Forum in Shanghai 🏙️',
          description: "",
          section: "News",},{id: "news-passed-the-candidacy-exam",
          title: 'Passed the candidacy exam!',
          description: "",
          section: "News",},{id: "news-participated-in-the-ai-usage-and-regulation-workshop-at-hec-lausanne-10-11-june-presenting-human-ai-interaction-in-the-age-of-llms",
          title: 'Participated in the AI Usage and Regulation Workshop at HEC Lausanne (10–11 June),...',
          description: "",
          section: "News",},{id: "news-two-first-author-papers-accepted-at-icwsm-2026",
          title: '🎉 Two first-author papers accepted at ICWSM 2026!',
          description: "",
          section: "News",},{id: "news-one-first-author-paper-accepted-at-emnlp-2025",
          title: '🎉 One first-author paper accepted at EMNLP 2025!',
          description: "",
          section: "News",},{id: "news-present-our-work-at-emnlp-2025-in-suzhou",
          title: 'Present our work at EMNLP 2025 in Suzhou 🪭',
          description: "",
          section: "News",},{id: "news-our-work-in-spotlight-at-ntu-news",
          title: 'Our work in spotlight at NTU News 🇸🇬📰',
          description: "",
          section: "News",},{id: "news-attended-the-foundation-models-fomo-winter-school-2026-in-amsterdam-24-27-march",
          title: 'Attended the Foundation Models (FoMo) Winter School 2026 in Amsterdam (24–27 March) 🇳🇱...',
          description: "",
          section: "News",},{id: "news-a-master-s-thesis-we-supervised-was-accepted-at-heal-chi-26-when-your-boss-is-an-ai-identity-label-bias-in-llm-task-allocation-decisions",
          title: '🎉 A master’s thesis we supervised was accepted at HEAL@CHI’26: “When Your Boss...',
          description: "",
          section: "News",},{id: "news-interviewed-on-the-spilling-research-tea-show-️",
          title: 'Interviewed on the “Spilling Research Tea” show 🎙️',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%75%61%6E%6A%75%6E.%66%65%6E%67@%75%6E%69%6C.%63%68", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/diana3135", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yuanjun-feng", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=mR7VyEwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
