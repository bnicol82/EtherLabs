import { Activity, ArrowUpRight, Bot, Mail } from "lucide-react";
import { products } from "@/lib/constants";

const iconMap = {
  mail: Mail,
  bot: Bot,
  activity: Activity,
} as const;

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
            Our Ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Three products. One mission.
          </h2>
          <p className="mt-4 text-zinc-400">
            Each EtherLabs company solves a distinct challenge in the Web3 stack —
            from human communication to autonomous agents to live token intelligence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.map((product) => {
            const Icon = iconMap[product.icon];
            const isExternal = product.href.startsWith("http");

            return (
              <a
                key={product.id}
                href={product.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group relative flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.04]"
              >
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-violet-400">
                      {product.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-400" />
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                  {product.description}
                </p>

                {product.id === "etheragents" && (
                  <span className="mt-4 inline-flex w-fit rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                    Formerly Agent Task Force
                  </span>
                )}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/0 to-transparent transition-all group-hover:via-violet-500/50" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
