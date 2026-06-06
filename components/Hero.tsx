import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-end px-6 pb-20 relative overflow-hidden">
      <Image src="/heroimage.jpg" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)" }} />

      <div className="max-w-6xl mx-auto w-full relative z-10 pt-32">

        {/* Label éditorial */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12" style={{ backgroundColor: "#f48c06" }} />
          <span className="text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "#faa307" }}>
            Développeuse Web · Freelance
          </span>
        </div>

        {/* Titre magazine */}
        <h1 className="font-black leading-[0.95] tracking-tight text-white mb-8" style={{ fontSize: "clamp(2.2rem, 8vw, 8rem)" }}>
          Je crée des sites<br />
          qui font la{" "}
          <span
            className="italic"
            style={{ color: "#f48c06", WebkitTextStroke: "0px" }}
          >
            différence.
          </span>
        </h1>

        {/* Ligne de séparation + tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="text-base md:text-lg max-w-md leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            Pour les indépendants et artisans qui ont quelque chose à dire —
            et qui méritent un site à la hauteur de leurs ambitions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
              style={{ backgroundColor: "#e85d04", color: "#fff", boxShadow: "0 8px 32px rgba(232,93,4,0.4)" }}
            >
              Démarrer mon projet →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
              style={{ color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.3)" }}
            >
              Voir mes services
            </Link>
          </div>
        </div>

        {/* Bande de services */}
        <div className="mt-12 pt-6 flex flex-wrap gap-x-8 gap-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          {["Sites Vitrine", "E-commerce", "SEO & Performance", "Maintenance"].map((s) => (
            <span key={s} className="text-xs font-medium flex items-center gap-2 uppercase tracking-widest" style={{ color: "rgba(250,163,7,0.7)" }}>
              <span style={{ color: "#f48c06" }}>✦</span> {s}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
