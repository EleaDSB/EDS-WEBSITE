import Link from "next/link";

const services = [
  { icon: "⚡", title: "Sites Vitrine", description: "Design moderne, responsive et optimisé SEO pour convertir vos visiteurs." },
  { icon: "🛒", title: "E-commerce", description: "Boutiques en ligne complètes avec gestion des paiements et des stocks." },
  { icon: "🚀", title: "Performance & SEO", description: "Temps de chargement optimisés et scores Lighthouse élevés." },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#caf0f8" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: "#03045e" }}>Ce que je fais</h2>
            <p className="text-gray-500">Des solutions web adaptées à votre activité.</p>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
            style={{ color: "#0077b6" }}
          >
            Voir tous les services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border transition-all duration-200 hover:shadow-md"
              style={{ borderColor: "#90e0ef" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                style={{ backgroundColor: "#caf0f8" }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#03045e" }}>{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#0077b6" }}
          >
            Démarrer mon projet
          </Link>
        </div>
      </div>
    </section>
  );
}
