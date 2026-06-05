import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="max-w-3xl">
          <span
            className="inline-block text-sm font-medium px-3 py-1 rounded-full mb-8"
            style={{ backgroundColor: "#caf0f8", color: "#0077b6" }}
          >
            Développeuse Web Freelance
          </span>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            style={{ color: "#03045e" }}
          >
            Transformez vos idées en{" "}
            <span style={{ color: "#0077b6" }}>sites web modernes</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
            Je crée des expériences web rapides, élégantes et sur-mesure pour les
            indépendants, artisans et professionnels de l&apos;hôtellerie-restauration.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0077b6" }}
            >
              Démarrer mon projet
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors hover:bg-[#caf0f8]"
              style={{ border: "1px solid #90e0ef", color: "#0077b6" }}
            >
              Voir mes services
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 max-w-lg" style={{ borderTop: "1px solid #caf0f8" }}>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#03045e" }}>50+</div>
              <div className="text-sm text-gray-500 mt-1">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#03045e" }}>100%</div>
              <div className="text-sm text-gray-500 mt-1">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: "#03045e" }}>24h</div>
              <div className="text-sm text-gray-500 mt-1">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
