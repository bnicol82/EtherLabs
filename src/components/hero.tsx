import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-40" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300">
            <Sparkles className="h-3.5 w-3.5" />
            Building the infrastructure for Web3
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.1]">
            The parent company powering{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              decentralized communication
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            EtherLabs is the holding company behind EtherMail, EtherAgents, and
            TokenStream — a unified ecosystem connecting people, agents, and
            on-chain data across Web3.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-violet-500/25"
            >
              View Our Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#vision"
              className="inline-flex h-12 items-center rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              Our Vision
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
