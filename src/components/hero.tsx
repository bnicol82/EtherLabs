import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] bg-accent-soft px-4 py-1.5 text-sm text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Parent company for EtherMail, EtherAgents & TokenStream
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-theme sm:text-5xl md:text-6xl md:leading-[1.1]">
            Building the future of{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              intelligent workspaces
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-theme-muted md:text-xl">
            EtherLabs is the holding company behind your products — starting
            with EtherMail, where AI-integrated learning, privacy, and security
            come together in unified email and an intelligent workspace.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#ethermail"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 text-sm font-medium text-white shadow-md transition-all hover:from-sky-400 hover:to-blue-500 hover:shadow-lg"
            >
              Explore EtherMail
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#products"
              className="inline-flex h-12 items-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-8 text-sm font-medium text-theme-secondary backdrop-blur-sm transition-colors hover-theme"
            >
              All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
