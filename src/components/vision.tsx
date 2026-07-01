import { BookOpen, Brain, Layers, Shield } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Vault-First",
    description:
      "Markdown notes, bi-directional links, tags, and backlinks — the same foundation that powers EtherMail.",
  },
  {
    icon: Brain,
    title: "Private AI",
    description:
      "Client-side RAG retrieval keeps your vault and inbox context local. External AI keys are optional.",
  },
  {
    icon: Layers,
    title: "Unified Workspace",
    description:
      "Email, notes, calendar, and graph views share one glass UI — not scattered across separate apps.",
  },
  {
    icon: Shield,
    title: "Your Data",
    description:
      "Built for individuals who want control — local persistence, clear privacy, and no vendor lock-in.",
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
              EtherLabs builds tools with the same professional, glass-clear
              aesthetic as EtherMail — airy gradients, frosted panels, and a
              focus on clarity over clutter.
            </p>
            <p className="mt-4 leading-relaxed text-theme-muted">
              EtherMail proved the model: vault, inbox, graph, and AI in one
              place. EtherAgents and TokenStream extend that vision into agent
              orchestration and live market intelligence.
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
