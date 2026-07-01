"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { Logo } from "./logo";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-[var(--glass-border)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" aria-label="EtherLabs home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-theme-muted transition-colors hover:text-theme"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#products"
            className="inline-flex h-9 items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 text-sm font-medium text-white shadow-md transition-colors hover:from-sky-400 hover:to-blue-500"
          >
            Explore Products
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-theme-muted hover-theme md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--glass-border)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-theme-muted transition-colors hover:text-theme"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#products"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-sm font-medium text-white shadow-md"
              onClick={() => setMobileOpen(false)}
            >
              Explore Products
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
