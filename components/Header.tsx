"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Services", href: "/services" },
  { label: "Processus", href: "/processus" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== "/"
          ? "bg-white/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-transparent"
      }`}
      style={{ borderColor: "#caf0f8" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight" style={{ color: "#03045e" }}>
          &lt;<span style={{ color: "#0077b6" }}>EDS</span>/&gt;
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm transition-colors font-medium"
              style={{ color: pathname === l.href ? "#0077b6" : "#555" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-full text-white font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#0077b6" }}
          >
            Démarrer un projet
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          style={{ color: "#03045e" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "#caf0f8" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: pathname === l.href ? "#0077b6" : "#555" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm px-4 py-2 rounded-full text-white font-medium text-center"
            style={{ backgroundColor: "#0077b6" }}
          >
            Démarrer un projet
          </Link>
        </div>
      )}
    </header>
  );
}
