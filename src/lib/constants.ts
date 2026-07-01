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
    tagline: "AI-integrated email with privacy built in",
    description:
      "Unified email and intelligent workspace where AI learns from your context — privately. Client-side retrieval, proactive assistance, and security-first design in one glass-clear app.",
    href: "https://bnicol82.github.io/EtherMail/",
    repo: "https://github.com/bnicol82/EtherMail",
    accent: "from-sky-400 to-blue-600",
    icon: "mail",
    features: [
      "AI learning — contextual assistant across email & notes",
      "Privacy — client-side RAG, data stays local",
      "Security — controlled AI access, optional external keys",
      "Unified inbox — email linked to your knowledge context",
      "Proactive AI — surfaces insights before you ask",
      "Knowledge graph — connects people, topics & messages",
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
  { value: "AI Learning", label: "Context-aware assistant" },
  { value: "Privacy", label: "Client-side, local-first" },
  { value: "Security", label: "Your data, your control" },
  { value: "Unified", label: "Email + intelligent workspace" },
] as const;

export const stats = [
  { value: "Private", label: "Client-side RAG AI" },
  { value: "Secure", label: "Local-first data" },
  { value: "AI", label: "Integrated learning" },
  { value: "Unified", label: "Email & intelligence" },
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
