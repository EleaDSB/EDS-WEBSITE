import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      {/* Image de fond */}
      <Image
        src="/heroimage.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Overlay sombre pour lisibilité du texte */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-20 relative z-10">
        {/* Badge */}
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full"
            style={{ backgroundColor: "rgba(0,180,216,0.15)", color: "#00b4d8", border: "1px solid rgba(0,180,216,0.3)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00b4d8] animate-pulse" />
            Disponible pour de nouveaux projets
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-white max-w-4xl">
          Des sites web qui{" "}
          <span
            className="relative inline-block"
            style={{ color: "#00b4d8" }}
          >
            travaillent
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 8 C75 2, 150 10, 298 4" stroke="#00b4d8" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
            </svg>
          </span>{" "}
          pour vous.
        </h1>

        {/* Sous-titre */}
        <p
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
          style={{ color: "#90e0ef" }}
        >
          Développeuse web freelance — je crée des expériences digitales rapides,
          modernes et sur-mesure pour les indépendants, artisans et restaurateurs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-[#03045e] font-bold text-sm transition-all hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "#00b4d8",
              boxShadow: "0 8px 32px rgba(0,180,216,0.35)",
            }}
          >
            Démarrer mon projet →
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:bg-white/10"
            style={{
              color: "#ffffff",
              border: "1.5px solid rgba(255,255,255,0.25)",
            }}
          >
            Voir mes services
          </Link>
        </div>

        {/* Séparateur + services en ligne */}
        <div className="mt-16 pt-10 flex flex-wrap gap-x-8 gap-y-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {["Sites Vitrine", "E-commerce", "SEO & Performance", "Maintenance"].map((s) => (
            <span key={s} className="text-sm flex items-center gap-2" style={{ color: "rgba(144,224,239,0.7)" }}>
              <span style={{ color: "#00b4d8" }}>✦</span> {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
