import { Brain, Lock, Shield, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI-Integrated Learning",
    description:
      "EtherMail's assistant learns from your email and workspace context — surfacing insights, answering questions, and getting smarter over time.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description:
      "Client-side RAG retrieval and local-first storage mean your data isn't sent to the cloud by default. Intelligence stays close to you.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Controlled AI connections, optional external API keys, and a clear boundary between your private workspace and third-party services.",
  },
  {
    icon: Sparkles,
    title: "Unified Intelligence",
    description:
      "Email, notes, calendar, and AI share one workspace — so learning compounds across everything you do, not in silos.",
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
              Intelligent tools you can trust.
            </h2>
            <p className="mt-6 leading-relaxed text-theme-muted">
              EtherLabs builds products where AI integrated learning, privacy,
              and security are foundational — not afterthoughts. EtherMail
              leads with private, context-aware intelligence in every inbox.
            </p>
            <p className="mt-4 leading-relaxed text-theme-muted">
              EtherAgents and TokenStream extend that same philosophy into
              autonomous orchestration and real-time market intelligence.
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
