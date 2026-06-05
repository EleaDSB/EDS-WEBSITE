const services = [
  {
    icon: "⚡",
    title: "Sites Vitrine",
    description:
      "Design moderne, responsive et optimisé SEO pour mettre en valeur votre activité et convertir vos visiteurs.",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description:
      "Boutiques en ligne complètes avec gestion des paiements, des stocks et de l'expérience d'achat.",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description:
      "Chaque site est conçu d'abord pour mobile — une expérience parfaite sur tous les écrans.",
  },
  {
    icon: "🔒",
    title: "Sécurité",
    description:
      "Protection contre les failles courantes, HTTPS, validation des données et conformité RGPD.",
  },
  {
    icon: "🚀",
    title: "Performance",
    description:
      "Temps de chargement optimisés, Core Web Vitals au vert et scores Lighthouse élevés.",
  },
  {
    icon: "🤝",
    title: "Maintenance",
    description:
      "Accompagnement après livraison : mises à jour, monitoring et support technique réactif.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes services</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Des solutions complètes pour concrétiser votre projet web, de la conception à la mise en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#00C896]/30 hover:shadow-md transition-all duration-200 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6"
                style={{ backgroundColor: "#00C89615" }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-[#00C896] transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
