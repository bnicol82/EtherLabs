import { Activity, ArrowUpRight, Bot, Check, Mail } from "lucide-react";
import { companyLinks, products } from "@/lib/constants";

const iconMap = {
  mail: Mail,
  bot: Bot,
  activity: Activity,
} as const;

export function Products() {
  return (
    <section id="products" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Our Ecosystem
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-theme md:text-4xl">
            Three products. One mission.
          </h2>
          <p className="mt-4 text-theme-muted">
            EtherLabs builds privacy-conscious, AI-powered tools — from EtherMail
            to EtherAgents and TokenStream.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
                className="group glass flex flex-col rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div
                  className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent} shadow-md`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-theme">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {product.tagline}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-theme-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-theme-muted">
                  {product.description}
                </p>

                {product.features && (
                  <ul className="mt-4 space-y-2 border-t border-[var(--glass-border)] pt-4">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-theme-muted"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {product.id === "etheragents" && (
                  <span className="mt-4 inline-flex w-fit rounded-full border border-[var(--accent-border)] bg-accent-soft px-3 py-1 text-xs text-accent">
                    Formerly Agent Task Force
                  </span>
                )}

                {product.repo && (
                  <span className="mt-4 text-xs text-theme-muted">
                    Live demo &amp; source on GitHub
                  </span>
                )}
              </a>
            );
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a
            href={companyLinks.etherMailDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Try EtherMail demo →
          </a>
          <span className="text-theme-muted">·</span>
          <a
            href={companyLinks.etherMailRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            View EtherMail repo →
          </a>
        </div>
      </div>
    </section>
  );
}
