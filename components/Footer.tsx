"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 bg-white" style={{ borderTop: "1px solid #fff3e0" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight" style={{ color: "#dc2f02" }}>
          &lt;<span style={{ color: "#e85d04" }}>EDS</span>/&gt;
        </Link>

        <nav className="flex gap-6 text-sm text-gray-500">
          <Link href="/services" className="hover:text-[#e85d04] transition-colors">Services</Link>
          <Link href="/processus" className="hover:text-[#e85d04] transition-colors">Processus</Link>
          <Link href="/contact" className="hover:text-[#e85d04] transition-colors">Contact</Link>
        </nav>

      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400" style={{ borderTop: "1px solid #fff3e0" }}>
        <span>© {year} EDS Web Solutions. Tous droits réservés.</span>
        <Link href="/mentions-legales" className="hover:text-[#e85d04] transition-colors">Mentions légales</Link>
      </div>
    </footer>
  );
}
