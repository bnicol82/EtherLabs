import { products } from "@/lib/constants";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              EtherLabs is the parent company behind EtherMail, EtherAgents, and
              TokenStream — building the communication and intelligence
              infrastructure for Web3.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Products</h3>
            <ul className="mt-4 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href={product.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
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
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#vision"
                  className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
                >
                  Vision
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://ethermail.io/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 transition-colors hover:text-violet-400"
                >
                  About EtherMail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {year} EtherLabs. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            EtherAgents was formerly known as Agent Task Force.
          </p>
        </div>
      </div>
    </footer>
  );
}
