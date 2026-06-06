"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Mes services", href: "/services" },
  { label: "Comment je fonctionne ?", href: "/processus" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const floating = scrolled || pathname !== "/";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">

      {/* Header pill */}
      <header
        className="pointer-events-auto w-full transition-all duration-500"
        style={{
          maxWidth: floating ? "720px" : "1152px",
          borderRadius: "9999px",
          backgroundColor: floating ? "rgba(255,255,255,0.9)" : "rgba(0,0,0,0.15)",
          backdropFilter: "blur(16px)",
          border: floating ? "1.5px solid rgba(255,237,213,0.8)" : "1.5px solid rgba(255,255,255,0.15)",
          boxShadow: floating ? "0 8px 32px rgba(220,47,2,0.08)" : "none",
        }}
      >
        <div
          className="flex items-center justify-between transition-all duration-500"
          style={{ padding: floating ? "10px 20px" : "12px 24px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="font-mono font-bold tracking-tight shrink-0 transition-all duration-300"
            style={{
              color: floating ? "#dc2f02" : "#ffffff",
              fontSize: floating ? "15px" : "18px",
            }}
          >
            &lt;<span style={{ color: floating ? "#e85d04" : "#faa307" }}>EDS</span>/&gt;
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-base font-medium px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  color: pathname === l.href ? "#f48c06" : floating ? "#111" : "rgba(255,255,255,0.9)",
                  backgroundColor: pathname === l.href
                    ? floating ? "rgba(244,140,6,0.1)" : "rgba(255,255,255,0.15)"
                    : "transparent",
                }}
              >
                {l.label}
                {pathname === l.href && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#f48c06" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-base font-semibold px-4 py-2 rounded-full text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #dc2f02, #f48c06)",
                boxShadow: "0 4px 12px rgba(220,47,2,0.25)",
              }}
            >
              <span>✦</span> Démarrer un projet
            </Link>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                color: floating ? "#dc2f02" : "#ffffff",
                backgroundColor: open
                  ? floating ? "rgba(220,47,2,0.1)" : "rgba(255,255,255,0.2)"
                  : "transparent",
              }}
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
        </div>
      </header>

      {/* Menu mobile — card séparée sous le pill */}
      {open && (
        <div
          className="pointer-events-auto md:hidden absolute top-20 left-4 right-4 rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            border: "1.5px solid rgba(255,237,213,0.8)",
            boxShadow: "0 16px 48px rgba(220,47,2,0.12)",
          }}
        >
          <div className="p-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors text-sm font-medium"
                style={{
                  color: pathname === l.href ? "#e85d04" : "#333",
                  backgroundColor: pathname === l.href ? "rgba(244,140,6,0.08)" : "transparent",
                }}
              >
                {l.label}
                {pathname === l.href && (
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#e85d04" }} />
                )}
              </Link>
            ))}

            <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(244,140,6,0.15)" }}>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-semibold text-sm transition-all"
                style={{
                  background: "linear-gradient(135deg, #dc2f02, #f48c06)",
                  boxShadow: "0 4px 16px rgba(220,47,2,0.25)",
                }}
              >
                ✦ Démarrer un projet
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
