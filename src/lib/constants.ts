export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  repo?: string;
  accent: string;
  icon: "mail" | "bot" | "activity";
  features?: readonly string[];
};

export const products: readonly Product[] = [
  {
    id: "ethermail",
    name: "EtherMail",
    tagline: "Obsidian-style knowledge vault + unified email",
    description:
      "Phase 1 MVP — markdown vault, unified inbox, knowledge graph, and private RAG AI in one glass-clear workspace. Built with React, Vite, and Tailwind.",
    href: "https://bnicol82.github.io/EtherMail/",
    repo: "https://github.com/bnicol82/EtherMail",
    accent: "from-sky-400 to-blue-600",
    icon: "mail",
    features: [
      "Vault — notes, [[links]], tags & backlinks",
      "Email — unified inbox linked to notes",
      "Knowledge graph — notes, emails & people",
      "Vault AI — private RAG assistant",
      "Command bar — ⌘K global search",
      "Mobile — responsive, collapsible nav",
    ],
  },
  {
    id: "etheragents",
    name: "EtherAgents",
    tagline: "AI agent infrastructure",
    description:
      "Autonomous AI agents for orchestration and task execution. Formerly Agent Task Force — now rebranded as part of the EtherLabs ecosystem.",
    href: "#",
    accent: "from-sky-500 to-indigo-600",
    icon: "bot",
  },
  {
    id: "tokenstream",
    name: "TokenStream",
    tagline: "Real-time token intelligence",
    description:
      "Live data streams and token analytics for builders. Monitor markets, track assets, and act on events in real time.",
    href: "#",
    accent: "from-cyan-400 to-blue-600",
    icon: "activity",
  },
];

export const etherMailHighlights = [
  { value: "Vault", label: "Markdown notes & links" },
  { value: "Inbox", label: "Unified email" },
  { value: "Graph", label: "Knowledge visualization" },
  { value: "RAG AI", label: "Private assistant" },
] as const;

export const stats = [
  { value: "3", label: "EtherLabs products" },
  { value: "Phase 1", label: "EtherMail MVP live" },
  { value: "⌘K", label: "Command bar search" },
  { value: "Local", label: "Client-side RAG AI" },
] as const;

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "EtherMail", href: "#ethermail" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
] as const;

export const companyLinks = {
  etherMailDemo: "https://bnicol82.github.io/EtherMail/",
  etherMailRepo: "https://github.com/bnicol82/EtherMail",
  etherLabsRepo: "https://github.com/bnicol82/EtherLabs",
} as const;
