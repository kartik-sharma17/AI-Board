"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "#product", label: "Product", color: "var(--primary)" },
  { href: "#how-it-works", label: "How it works", color: "var(--marker-sky)" },
  { href: "#solutions", label: "Solutions", color: "var(--accent)" },
  { href: "#pricing", label: "Pricing", color: "var(--marker-pink)" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="9" cy="9" r="5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="12.5" y="12.5" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight">AU Board</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 transition-colors duration-200 hover:[color:var(--link-color)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--link-color)] after:transition-all after:duration-300 hover:after:w-full"
                style={{ ["--link-color" as string]: l.color }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#" className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              Log in
            </a>
            <a
              href="#"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start free
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="space-y-3 border-t border-border bg-background px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm text-muted-foreground">
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            <a href="#" className="flex-1 rounded-lg border border-border px-4 py-2 text-center text-sm">
              Log in
            </a>
            <a href="#" className="flex-1 rounded-lg bg-primary px-4 py-2 text-center text-sm text-primary-foreground">
              Start free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
