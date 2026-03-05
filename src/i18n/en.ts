import type { Translations } from "./pt";

const en: Translations = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    stack: "Stack",
    contact: "Contact",
  },

  hero: {
    eyebrow: "SOFTWARE ENGINEER & ENTREPRENEUR",
    imRicardo: "I'm Ricardo",
    typingWords: [
      "Founder of CodeCraftGenZ",
      "Full-Stack Developer",
      "Creator of the Craft Ecosystem",
      "Software Engineer",
    ],
    cta: "View Projects",
    downloadCv: "Download CV",
    scrollDown: "Scroll to explore",
  },

  about: {
    eyebrow: "ABOUT ME",
    heading: "My journey",
    bio: [
      "I am a 5th-semester Software Engineering student at Estácio, with a 700-hour technical certification in Systems Development from Senac. I work with web development using React and C#, and I also have hands-on experience in corporate environments providing Level 2 and Level 3 technical support.",
      "Beyond my professional experience, I founded CodeCraftGenZ — a platform that connects new-gen talent to real development projects. I also created the Craft Ecosystem: a suite of desktop applications that solve everyday problems.",
      "My focus is always on performance, quality, and scalable solutions. I believe technology solves problems — and my goal is to transform technical challenges into efficient solutions.",
    ],
    stats: {
      projects: "Projects",
      technologies: "Technologies",
      yearsCoding: "Years Coding",
      companyFounded: "Company Founded",
    },
    timelineTitle: "Journey",
    services: {
      webDev: "Web Development",
      desktopDev: "Desktop Development",
      techSupport: "Tech Support",
    },
  },

  projects: {
    eyebrow: "PROJECTS",
    heading: "Featured work",
    description:
      "A curated selection of projects that best represent my technical capabilities and product vision.",
    viewProject: "View Project",
    viewCode: "View Code",
    featured: "Featured",
  },

  stack: {
    eyebrow: "STACK",
    heading: "Technologies & Tools",
    description:
      "The technologies I use to turn ideas into real products.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      desktop: "Desktop",
      database: "Databases",
      infra: "Infrastructure",
      tools: "Tools",
    },
  },

  cta: {
    eyebrow: "LET'S WORK TOGETHER",
    heading: "Have a project in mind?",
    description:
      "I'm always open to new challenges and opportunities. Let's build something amazing together.",
    button: "Get in touch",
  },

  contact: {
    eyebrow: "CONTACT",
    heading: "Let's talk",
    description:
      "Have a project in mind or want to chat? Send me a message.",
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "your full name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again.",
    },
    info: {
      email: "Email",
      location: "Location",
      social: "Social Media",
    },
  },

  testimonials: {
    eyebrow: "TESTIMONIALS",
    heading: "What people say",
    description:
      "Feedback from colleagues and partners I've had the pleasure of working with.",
    items: {
      t1: {
        quote:
          "Ricardo is an extremely dedicated and creative developer. His ability to turn complex ideas into elegant solutions is impressive.",
        name: "Rafael Mendes",
        role: "Tech Lead — CodeCraftGenZ",
      },
      t2: {
        quote:
          "Working with Ricardo was an incredible experience. He delivers quality work, on time, and always goes above and beyond.",
        name: "Ana Luísa Costa",
        role: "Product Designer",
      },
      t3: {
        quote:
          "Ricardo's commitment to clean code and best practices makes him a standout professional. I recommend him without hesitation.",
        name: "Carlos Silva",
        role: "Senior Developer",
      },
    },
  },

  process: {
    eyebrow: "PROCESS",
    heading: "How I work",
    description:
      "A structured approach to turning ideas into high-quality digital products.",
    steps: {
      discovery: {
        title: "Discovery",
        description:
          "Understand the problem, research the market, and define project requirements and goals.",
      },
      design: {
        title: "Design",
        description:
          "Create wireframes and prototypes focused on user experience and intuitive interfaces.",
      },
      develop: {
        title: "Develop",
        description:
          "Code with best practices, clean architecture, and modern technologies.",
      },
      deploy: {
        title: "Deploy",
        description:
          "Test, optimize, and launch the product with continuous monitoring and support.",
      },
    },
  },

  footer: {
    made: "Made with",
    and: "and lots of coffee",
    rights: "All rights reserved.",
  },
};

export default en;
