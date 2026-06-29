export const products = [
  {
    id: "ethermail",
    name: "EtherMail",
    tagline: "Email for Web3",
    description:
      "The wallet-native communication layer for Web3. Secure, anonymous, and encrypted wallet-to-wallet email that gives users full ownership of their inbox.",
    href: "https://ethermail.io",
    accent: "from-violet-500 to-purple-600",
    icon: "mail",
  },
  {
    id: "etheragents",
    name: "EtherAgents",
    tagline: "AI Agent Infrastructure",
    description:
      "Autonomous AI agents built for the decentralized web. Deploy, orchestrate, and scale intelligent agents that communicate, transact, and operate across Web3.",
    href: "#",
    accent: "from-indigo-500 to-blue-600",
    icon: "bot",
  },
  {
    id: "tokenstream",
    name: "TokenStream",
    tagline: "Real-Time Token Intelligence",
    description:
      "Live blockchain data streams and token analytics for builders and institutions. Monitor markets, track assets, and act on on-chain events in real time.",
    href: "#",
    accent: "from-fuchsia-500 to-pink-600",
    icon: "activity",
  },
] as const;

export const stats = [
  { value: "3M+", label: "Verified Web3 accounts" },
  { value: "50M+", label: "Connected wallets" },
  { value: "100+", label: "Web3 communities" },
  { value: "3", label: "Product lines" },
] as const;

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Vision", href: "#vision" },
  { label: "About", href: "#about" },
] as const;
