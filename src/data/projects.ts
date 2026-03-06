import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "codecraftgenz",
    title: "CodeCraftGenZ",
    shortDescription:
      "Plataforma marketplace que conecta desenvolvedores juniores a empresas para projetos reais de desenvolvimento.",
    longDescription:
      "Plataforma full-stack com marketplace de aplicações, sistema de pagamentos integrado com Mercado Pago (PIX, cartão, boleto), licenciamento hardware-locked, geração de NFS-e, dashboard administrativo completo e sistema de desafios/ranking para desenvolvedores.",
    thumbnail: "/images/projects/codecraftgenz.mp4",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "MySQL",
      "Mercado Pago",
      "Tailwind CSS",
      "Docker",
    ],
    category: "saas",
    demoUrl: "https://codecraftgenz.com.br",
    featured: true,
    year: 2025,
    highlights: [
      "Integração completa com Mercado Pago (PIX, cartão até 4x, boleto)",
      "Sistema de licenciamento hardware-locked",
      "Dashboard administrativo com gestão de crafters, projetos e finanças",
      "Geração automática de NFS-e (notas fiscais)",
      "Sistema de desafios CTF com ranking",
    ],
    accent: "#3B82F6",
  },
  {
    id: "quizcraft",
    title: "QuizCraft",
    shortDescription:
      "Plataforma inteligente de estudo com repetição espaçada SM-2 e 4 modos de quiz.",
    longDescription:
      "Aplicação desktop para criação de bancos de questões customizados, estudo com algoritmo de repetição espaçada SM-2, e acompanhamento de performance através de dashboards visuais. 100% offline com backup automático.",
    thumbnail: "/images/projects/quizcraft.png",
    technologies: [".NET 9", "WPF", "C#", "SQLite", "MVVM", "xUnit"],
    category: "desktop",
    year: 2025,
    highlights: [
      "Algoritmo de repetição espaçada SM-2",
      "4 modos de quiz: Treino, Prova, Revisão de Erros, Repetição Espaçada",
      "Dashboard com estatísticas e gráficos de progresso",
      "75 testes automatizados",
      "Sistema de maestria por tópico",
    ],
    accent: "#10B981",
  },
  {
    id: "deskcraft",
    title: "DeskCraft",
    shortDescription:
      "Gerenciador de tarefas desktop cross-platform com editor markdown.",
    longDescription:
      "Aplicação desktop construída com Tauri 2 para gerenciamento de tarefas e notas, com editor markdown rico, state management via Zustand e interface moderna com Tailwind CSS.",
    thumbnail: "/images/projects/deskcraft.png",
    technologies: [
      "Tauri 2",
      "React",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Framer Motion",
    ],
    category: "desktop",
    year: 2025,
    highlights: [
      "Cross-platform (Windows/Mac/Linux) via Tauri 2",
      "Editor markdown rico com preview",
      "State management reativo com Zustand",
      "Animações fluidas com Framer Motion",
    ],
    accent: "#8B5CF6",
  },
  {
    id: "vaultcraft",
    title: "VaultCraft",
    shortDescription:
      "Cofre pessoal de documentos offline com busca full-text instantânea.",
    longDescription:
      "Aplicação desktop para organizar documentos, notas e checklists com anexos. Busca full-text via FTS5, pastas hierárquicas ilimitadas, backup em 1 clique, exportação HTML/PDF/CSV e log de auditoria completo. 100% offline.",
    thumbnail: "/images/projects/vaultcraft.png",
    technologies: [
      "Tauri 2",
      "React",
      "TypeScript",
      "Rust",
      "SQLite",
      "FTS5",
      "Zustand",
    ],
    category: "desktop",
    year: 2025,
    highlights: [
      "Busca full-text instantânea via SQLite FTS5",
      "Backend em Rust com 46 comandos Tauri",
      "Pastas hierárquicas com profundidade ilimitada",
      "Sistema de licenciamento com fingerprint de hardware",
      "Backup e export em múltiplos formatos",
    ],
    accent: "#F59E0B",
  },
  {
    id: "coincraft",
    title: "CoinCraft",
    shortDescription:
      "Sistema de gestão financeira pessoal com dashboards interativos.",
    longDescription:
      "Aplicação WPF robusta para controle de finanças pessoais com dashboards interativos (LiveCharts), importação OFX/CSV para conciliação bancária, metas orçamentárias e automação de transações recorrentes.",
    thumbnail: "/images/projects/coincraft.png",
    technologies: [
      ".NET 8",
      "WPF",
      "C#",
      "SQLite",
      "LiveCharts",
      "MVVM",
    ],
    category: "desktop",
    year: 2025,
    highlights: [
      "Dashboards interativos com gráficos de fluxo de caixa",
      "Importação OFX/CSV para conciliação bancária",
      "Metas orçamentárias com limites de gastos",
      "Automação de transações recorrentes",
      "Arquitetura em camadas (Domain, Infrastructure, App)",
    ],
    accent: "#F43F5E",
  },
  {
    id: "codecrafthub",
    title: "CodeCraftHub",
    shortDescription:
      "Launcher central do ecossistema Craft com download e licenciamento automático.",
    longDescription:
      "Hub central para todas as aplicações CodeCraft. Usuários podem visualizar apps disponíveis, baixar/instalar com um clique, abrir apps instalados, receber notificações de atualização e gerenciar licenças automaticamente.",
    thumbnail: "/images/projects/codecrafthub.png",
    technologies: [
      "Tauri 2",
      "React",
      "TypeScript",
      "Rust",
      "SQLite",
      "Zustand",
    ],
    category: "desktop",
    year: 2025,
    highlights: [
      "Download e instalação em 1 clique",
      "Gerenciamento automático de licenças",
      "Verificação de integridade de arquivos",
      "Notificações de atualização",
      "Hardware fingerprint para licenciamento",
    ],
    accent: "#06B6D4",
  },
];
