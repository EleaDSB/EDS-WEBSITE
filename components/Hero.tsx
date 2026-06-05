export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto w-full py-20">
        <div className="max-w-3xl">
          <span
            className="inline-block text-sm font-medium px-3 py-1 rounded-full mb-8"
            style={{ backgroundColor: "#00C89615", color: "#00C896" }}
          >
            Développeuse Web Freelance
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-gray-900 mb-6">
            Transformez vos idées en{" "}
            <span style={{ color: "#00C896" }}>sites web modernes</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
            Je crée des expériences web rapides, élégantes et sur-mesure pour les
            indépendants, artisans et professionnels de l&apos;hôtellerie-restauration.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#00C896" }}
            >
              Démarrer mon projet
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:border-gray-400 transition-colors"
            >
              Voir mes services
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-gray-100 max-w-lg">
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-500 mt-1">Projets réalisés</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-500 mt-1">Clients satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">24h</div>
              <div className="text-sm text-gray-500 mt-1">Temps de réponse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
