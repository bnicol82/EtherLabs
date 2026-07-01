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
      "The next wave of software is AI-driven. We build infrastructure where humans and autonomous agents work together seamlessly.",
  },
  {
    icon: Layers,
    title: "Composable Stack",
    description:
      "Email, agents, and token streams share a unified foundation — interoperable by design, not bolted on after the fact.",
  },
  {
    icon: Globe,
    title: "Knowledge-Centric",
    description:
      "Inspired by EtherMail's vault-first approach — linked notes, graphs, and context-aware AI at the core of every product.",
  },
];

export function Vision() {
  return (
    <section id="vision" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-theme md:text-4xl">
              One design language. Multiple products.
            </h2>
            <p className="mt-6 leading-relaxed text-theme-muted">
              EtherLabs exists to build communication and intelligence tools
              with the same professional, glass-clear aesthetic as EtherMail —
              airy gradients, frosted panels, and a focus on clarity.
            </p>
            <p className="mt-4 leading-relaxed text-theme-muted">
              From EtherMail&apos;s knowledge vault and unified inbox to
              EtherAgents&apos; autonomous workflows and TokenStream&apos;s live
              on-chain feeds, we are assembling a cohesive product family.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="glass rounded-xl p-6">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
                  <pillar.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-theme">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-theme-muted">
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
