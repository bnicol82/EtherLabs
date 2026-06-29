export function About() {
  return (
    <section id="about" className="border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-violet-950/40 via-[#0a0a12] to-indigo-950/30 p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Join us in shaping the future
            </h2>
            <p className="mt-4 text-zinc-400">
              EtherLabs is building the backbone of decentralized communication.
              Whether you&apos;re a developer, partner, or community — we&apos;d
              love to hear from you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@etherlabs.io"
                className="inline-flex h-12 items-center rounded-full bg-white px-8 text-sm font-medium text-[#08080f] transition-opacity hover:opacity-90"
              >
                Get in Touch
              </a>
              <a
                href="https://ethermail.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-white/10 px-8 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
              >
                Visit EtherMail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
