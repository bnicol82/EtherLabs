import { Brain, Lock, Mail, Shield } from "lucide-react";
import { companyLinks, etherMailHighlights } from "@/lib/constants";

const featureIcons = [Brain, Lock, Shield, Mail] as const;

export function EtherMailSpotlight() {
  return (
    <section id="ethermail" className="px-6 pb-4">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong rounded-2xl p-8 md:p-10">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Flagship Product
              </p>
              <h2 className="mt-2 text-2xl font-bold text-theme md:text-3xl">
                EtherMail — AI learning, privacy &amp; security
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-theme-muted md:text-base">
                EtherMail brings unified email together with AI that learns from
                your context — without sacrificing privacy. Client-side RAG
                retrieval keeps intelligence local, proactive assistants surface
                what matters, and you stay in control of every connection and
                API key.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={companyLinks.etherMailDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 text-sm font-medium text-white shadow-md hover:from-sky-400 hover:to-blue-500"
                >
                  Open live demo
                </a>
                <a
                  href={companyLinks.etherMailRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-xl border border-[var(--glass-border)] px-5 text-sm font-medium text-theme-secondary hover-theme"
                >
                  GitHub repo
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {etherMailHighlights.map((item, index) => {
                const Icon = featureIcons[index] ?? Brain;
                return (
                  <div key={item.label} className="glass rounded-xl p-4">
                    <Icon className="mb-2 h-5 w-5 text-accent" />
                    <p className="font-semibold text-theme">{item.value}</p>
                    <p className="mt-1 text-xs text-theme-muted">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--glass-border)] pt-6">
            <p className="text-xs font-medium uppercase tracking-wider text-theme-muted">
              Built for trust
            </p>
            <div className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-lg bg-accent-soft px-4 py-3 text-theme-secondary">
                <span className="font-medium text-accent">AI Learning</span>
                <p className="mt-1 text-xs text-theme-muted">
                  Hybrid retrieval across email and notes so the assistant
                  understands your full context.
                </p>
              </div>
              <div className="rounded-lg px-4 py-3 text-theme-muted">
                <span className="font-medium text-theme">Privacy</span>
                <p className="mt-1 text-xs">
                  Client-side RAG and local persistence — your inbox and
                  intelligence stay on your terms.
                </p>
              </div>
              <div className="rounded-lg px-4 py-3 text-theme-muted">
                <span className="font-medium text-theme">Security</span>
                <p className="mt-1 text-xs">
                  Controlled AI access with optional external providers. You
                  decide what connects and what stays private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
