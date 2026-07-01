import { companyLinks } from "@/lib/constants";

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-theme md:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-theme-muted">
              EtherLabs is the parent company for EtherMail, EtherAgents, and
              TokenStream. Try the EtherMail demo or explore the source on
              GitHub.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={companyLinks.etherMailDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 text-sm font-medium text-white shadow-md transition-colors hover:from-sky-400 hover:to-blue-500"
              >
                Try EtherMail Demo
              </a>
              <a
                href={companyLinks.etherMailRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-8 text-sm font-medium text-theme-secondary backdrop-blur-sm transition-colors hover-theme"
              >
                EtherMail on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
