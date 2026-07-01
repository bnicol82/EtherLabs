export const products = [
  {
    id: "ethermail",
    name: "EtherMail",
    tagline: "Knowledge vault + unified email",
    description:
      "Obsidian-style knowledge vault with unified email, knowledge graph, and private AI. Notes, inbox, and assistant in one glass-clear workspace.",
    href: "https://bnicol82.github.io/EtherMail/",
    repo: "https://github.com/bnicol82/EtherMail",
    accent: "from-sky-400 to-blue-600",
    icon: "mail",
  },
  {
    id: "etheragents",
    name: "EtherAgents",
    tagline: "AI agent infrastructure",
    description:
      "Autonomous AI agents for orchestration and task execution. Deploy, coordinate, and scale intelligent agents across your product stack.",
    href: "#",
    accent: "from-sky-500 to-indigo-600",
    icon: "bot",
  },
  {
    id: "tokenstream",
    name: "TokenStream",
    tagline: "Real-time token intelligence",
    description:
      "Live blockchain data streams and token analytics for builders. Monitor markets, track assets, and act on on-chain events in real time.",
    href: "#",
    accent: "from-cyan-400 to-blue-600",
    icon: "activity",
  },
] as const;

export const stats = [
  { value: "3", label: "Product lines" },
  { value: "Vault", label: "Knowledge-first email" },
  { value: "AI", label: "Private RAG assistant" },
  { value: "Graph", label: "Linked knowledge" },
] as const;

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
] as const;
