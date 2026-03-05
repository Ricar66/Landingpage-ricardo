const pt = {
  // Navbar
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    stack: "Stack",
    contact: "Contato",
  },

  // Hero
  hero: {
    eyebrow: "SOFTWARE ENGINEER & ENTREPRENEUR",
    imRicardo: "Eu sou Ricardo",
    typingWords: [
      "Fundador da CodeCraftGenZ",
      "Full-Stack Developer",
      "Criador do Ecossistema Craft",
      "Engenheiro de Software",
    ],
    cta: "Ver Projetos",
    downloadCv: "Download CV",
    scrollDown: "Scroll para explorar",
  },

  // About
  about: {
    eyebrow: "SOBRE MIM",
    heading: "A minha jornada",
    bio: [
      "Sou estudante do 5º período de Engenharia de Software na Estácio, com certificação técnica de 700 horas em Desenvolvimento de Sistemas pelo Senac. Trabalho com desenvolvimento web usando React e C#, e tenho experiência prática em ambientes corporativos com suporte técnico de Nível 2 e 3.",
      "Além da minha experiência profissional, fundei a CodeCraftGenZ — uma plataforma que conecta talentos da nova geração a projetos reais de desenvolvimento. Também criei o Ecossistema Craft: uma suíte de aplicações desktop que resolve problemas do dia a dia.",
      "Meu foco está sempre em performance, qualidade e soluções escaláveis. Acredito que tecnologia resolve problemas — e meu objetivo é transformar desafios técnicos em soluções eficientes.",
    ],
    stats: {
      projects: "Projetos",
      technologies: "Tecnologias",
      yearsCoding: "Anos Codando",
      companyFounded: "Empresa Fundada",
    },
    timelineTitle: "Trajetória",
    services: {
      webDev: "Desenvolvimento Web",
      desktopDev: "Desenvolvimento Desktop",
      techSupport: "Suporte Técnico",
    },
  },

  // Projects
  projects: {
    eyebrow: "PROJETOS",
    heading: "Trabalhos em destaque",
    description:
      "Uma curadoria dos projetos que melhor representam minha capacidade técnica e visão de produto.",
    viewProject: "Ver Projeto",
    viewCode: "Ver Código",
    featured: "Destaque",
  },

  // Stack
  stack: {
    eyebrow: "STACK",
    heading: "Tecnologias & Ferramentas",
    description:
      "As tecnologias que uso para transformar ideias em produtos reais.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      desktop: "Desktop",
      database: "Banco de Dados",
      infra: "Infraestrutura",
      tools: "Ferramentas",
    },
  },

  // CTA
  cta: {
    eyebrow: "VAMOS TRABALHAR JUNTOS",
    heading: "Tem um projeto em mente?",
    description:
      "Estou sempre aberto a novos desafios e oportunidades. Vamos construir algo incrível juntos.",
    button: "Entre em contato",
  },

  // Contact
  contact: {
    eyebrow: "CONTATO",
    heading: "Vamos conversar",
    description:
      "Tem um projeto em mente ou quer trocar uma ideia? Me manda uma mensagem.",
    form: {
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      namePlaceholder: "seu nome completo",
      emailPlaceholder: "seu@email.com",
      messagePlaceholder: "conte-me sobre seu projeto...",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar. Tente novamente.",
    },
    info: {
      email: "E-mail",
      location: "Localização",
      social: "Redes Sociais",
    },
  },

  // Testimonials
  testimonials: {
    eyebrow: "DEPOIMENTOS",
    heading: "O que dizem sobre mim",
    description:
      "Feedback de colegas e parceiros com quem tive o prazer de trabalhar.",
    items: {
      t1: {
        quote:
          "Ricardo é um desenvolvedor extremamente dedicado e criativo. Sua capacidade de transformar ideias complexas em soluções elegantes é impressionante.",
        name: "Rafael Mendes",
        role: "Tech Lead — CodeCraftGenZ",
      },
      t2: {
        quote:
          "Trabalhar com o Ricardo foi uma experiência incrível. Ele entrega com qualidade, no prazo, e sempre vai além do esperado.",
        name: "Ana Luísa Costa",
        role: "Product Designer",
      },
      t3: {
        quote:
          "O comprometimento do Ricardo com código limpo e boas práticas faz dele um profissional diferenciado. Recomendo sem hesitar.",
        name: "Carlos Silva",
        role: "Senior Developer",
      },
    },
  },

  // Process
  process: {
    eyebrow: "PROCESSO",
    heading: "Como eu trabalho",
    description:
      "Uma abordagem estruturada para transformar ideias em produtos digitais de alta qualidade.",
    steps: {
      discovery: {
        title: "Descoberta",
        description:
          "Entendo o problema, pesquiso o mercado e defino os requisitos e objetivos do projeto.",
      },
      design: {
        title: "Design",
        description:
          "Crio wireframes e protótipos focados em experiência do usuário e interface intuitiva.",
      },
      develop: {
        title: "Desenvolvimento",
        description:
          "Codifico com as melhores práticas, código limpo e tecnologias modernas.",
      },
      deploy: {
        title: "Deploy",
        description:
          "Testo, otimizo e lanço o produto com monitoramento e suporte contínuo.",
      },
    },
  },

  // Footer
  footer: {
    made: "Feito com",
    and: "e muito café",
    rights: "Todos os direitos reservados.",
  },
};

type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends readonly string[]
      ? string[]
      : T[K] extends object
        ? DeepStringify<T[K]>
        : T[K];
};

export type Translations = DeepStringify<typeof pt>;
export default pt;
