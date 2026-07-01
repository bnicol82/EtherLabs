import { companyLinks, products } from "@/lib/constants";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--glass-border)] glass-strong">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-theme-muted">
              EtherLabs is the parent company behind EtherMail, EtherAgents, and
              TokenStream — knowledge vaults, AI agents, and real-time
              intelligence under one roof.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-theme">Products</h3>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.href.startsWith("http") ? product.href : `#${product.id}`}
                    className="text-sm text-theme-muted transition-colors hover:text-accent"
                    {...(product.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-theme">Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={companyLinks.etherMailDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted transition-colors hover:text-accent"
                >
                  EtherMail demo
                </a>
              </li>
              <li>
                <a
                  href={companyLinks.etherMailRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted transition-colors hover:text-accent"
                >
                  EtherMail on GitHub
                </a>
              </li>
              <li>
                <a
                  href={companyLinks.etherLabsRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted transition-colors hover:text-accent"
                >
                  EtherLabs on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--glass-border)] pt-8 sm:flex-row">
          <p className="text-sm text-theme-muted">
            &copy; {year} EtherLabs. All rights reserved.
          </p>
          <p className="text-sm text-theme-muted">
            EtherAgents was formerly known as Agent Task Force.
          </p>
        </div>
      </div>
    </footer>
  );
}
