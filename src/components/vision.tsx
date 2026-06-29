import { Globe, Layers, Shield, Zap } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "User sovereignty is non-negotiable. Every product is built so individuals control their data, identity, and communications.",
  },
  {
    icon: Zap,
    title: "Agent-Native",
    description:
      "The next billion users may be AI agents. We build infrastructure where humans and autonomous agents coexist seamlessly.",
  },
  {
    icon: Layers,
    title: "Composable Stack",
    description:
      "Email, agents, and token streams share a unified foundation — interoperable by design, not bolted on after the fact.",
  },
  {
    icon: Globe,
    title: "Web3 Native",
    description:
      "Wallet-linked identity, on-chain verification, and blockchain-synced data are core to everything we ship.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Bridging Web2 and Web3 through owned infrastructure
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-400">
              EtherLabs exists to build the communication and intelligence layer
              that Web3 has been missing. We believe email, AI agents, and
              real-time token data shouldn&apos;t live in silos — they should
              form a cohesive stack that empowers builders, communities, and
              end users alike.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              From EtherMail&apos;s wallet-native inbox to EtherAgents&apos;
              autonomous workflows and TokenStream&apos;s live on-chain feeds, we
              are assembling the tools the decentralized internet needs to scale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10">
                  <pillar.icon className="h-5 w-5 text-violet-400" />
                </div>
                <h3 className="font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
