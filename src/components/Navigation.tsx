"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/aanbod", label: "Aanbod" },
  { href: "/voor-bedrijven", label: "Voor bedrijven" },
  { href: "/praktisch", label: "Praktisch" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-stone-50/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-dm-serif)] text-xl text-sage-800 tracking-wide"
        >
          Romy Tielens
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm tracking-wide transition-colors hover:text-sage-600 ${
                    pathname === href
                      ? "text-sage-700 font-semibold"
                      : "text-sage-800/70"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 ml-2">
            <Link
              href="/contact"
              className="bg-sage-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-sage-700 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 border-t border-sage-100">
          <ul className="space-y-3 pt-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-1 text-sm ${
                    pathname === href
                      ? "text-sage-700 font-semibold"
                      : "text-sage-800/70"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="block bg-sage-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sage-700 transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            Maak een afspraak
          </Link>
        </div>
      )}
    </header>
  );
}
