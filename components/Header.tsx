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
      <header
        className="pointer-events-auto w-full transition-all duration-500"
        style={{
          maxWidth: floating ? "720px" : "1152px",
          borderRadius: floating ? "9999px" : "0px",
          backgroundColor: floating ? "rgba(255,255,255,0.85)" : "transparent",
          backdropFilter: floating ? "blur(16px)" : "none",
          border: floating ? "1.5px solid rgba(202,240,248,0.8)" : "none",
          boxShadow: floating ? "0 8px 32px rgba(3,4,94,0.10)" : "none",
          padding: floating ? "0" : "0",
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
              color: "#dc2f02",
              fontSize: floating ? "15px" : "18px",
            }}
          >
            &lt;<span style={{ color: "#e85d04" }}>EDS</span>/&gt;
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  color: pathname === l.href ? "#f97316" : "#444",
                  backgroundColor: pathname === l.href ? "rgba(249,115,22,0.08)" : "transparent",
                }}
              >
                {l.label}
                {pathname === l.href && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ backgroundColor: "#f97316" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
              style={{
                background: "linear-gradient(135deg, #dc2f02, #f48c06)",
                boxShadow: "0 4px 12px rgba(0,119,182,0.25)",
              }}
            >
              <span>✦</span> Démarrer un projet
            </Link>

            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors"
              style={{
                color: "#dc2f02",
                backgroundColor: open ? "rgba(0,119,182,0.1)" : "transparent",
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

        {/* Menu mobile */}
        {open && (
          <div
            className="md:hidden flex flex-col gap-1 px-4 pb-4"
            style={{ borderTop: "1px solid rgba(202,240,248,0.8)" }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium px-4 py-3 rounded-2xl transition-colors"
                style={{
                  color: pathname === l.href ? "#f97316" : "#444",
                  backgroundColor: pathname === l.href ? "rgba(249,115,22,0.07)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-1 text-sm font-semibold px-4 py-3 rounded-2xl text-white text-center"
              style={{ background: "linear-gradient(135deg, #dc2f02, #f48c06)" }}
            >
              ✦ Démarrer un projet
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
