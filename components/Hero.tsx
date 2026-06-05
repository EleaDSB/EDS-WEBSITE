import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* Image de fond */}
      <Image src="/heroimage.jpg" alt="" fill priority className="object-cover" />

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-20 relative z-10">
        {/* Badge */}
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(248,140,6,0.2)", color: "#faa307", border: "1px solid rgba(248,140,6,0.4)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "#faa307" }} />
            Disponible pour de nouveaux projets
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-white max-w-4xl">
          Des sites web qui{" "}
          <span className="relative inline-block" style={{ color: "#f48c06" }}>
            travaillent
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 8 C75 2, 150 10, 298 4" stroke="#f48c06" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>{" "}
          pour vous.
        </h1>

        {/* Sous-titre */}
        <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: "#faa307", opacity: 0.9 }}>
          Développeuse web freelance — je crée des expériences digitales rapides,
          modernes et sur-mesure pour les indépendants, artisans et restaurateurs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#e85d04", color: "#fff", boxShadow: "0 8px 32px rgba(232,93,4,0.4)" }}
          >
            Démarrer mon projet →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
            style={{ color: "#ffffff", border: "1.5px solid rgba(255,255,255,0.25)" }}
          >
            Voir mes services
          </Link>
        </div>

        {/* Services en ligne */}
        <div className="mt-16 pt-10 flex flex-wrap gap-x-8 gap-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {["Sites Vitrine", "E-commerce", "SEO & Performance", "Maintenance"].map((s) => (
            <span key={s} className="text-sm flex items-center gap-2" style={{ color: "rgba(250,163,7,0.8)" }}>
              <span style={{ color: "#f48c06" }}>✦</span> {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
