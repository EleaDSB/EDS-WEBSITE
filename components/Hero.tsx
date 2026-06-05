import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #ffffff 0%, #caf0f8 50%, #90e0ef 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#00b4d8" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: "#0077b6" }}
      />

      <div className="max-w-6xl mx-auto w-full pt-28 pb-20 relative z-10">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            style={{ color: "#03045e" }}
          >
            Je transforme vos idées en{" "}
            <span
              style={{
                color: "#0077b6",
                textDecoration: "underline",
                textDecorationColor: "#90e0ef",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              sites qui vous ressemblent
            </span>
          </h1>

          <p className="text-lg leading-relaxed mb-8" style={{ color: "#0077b6", opacity: 0.8 }}>
            Développeuse web freelance, j&apos;accompagne les indépendants, artisans et
            professionnels de la restauration & hôtellerie pour créer leur vitrine en ligne.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
              style={{ backgroundColor: "#0077b6", boxShadow: "0 8px 24px rgba(0,119,182,0.3)" }}
            >
              ✨ Démarrer mon projet
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-white/70 backdrop-blur-sm transition-all hover:bg-white"
              style={{ border: "1.5px solid #90e0ef", color: "#0077b6" }}
            >
              Voir mes services →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
