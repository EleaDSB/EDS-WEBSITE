const services = [
  {
    icon: "⚡",
    title: "Sites Vitrine",
    description: "Design moderne, responsive et optimisé SEO pour mettre en valeur votre activité et convertir vos visiteurs.",
    gradient: "from-[#0077b6] to-[#00b4d8]",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Boutiques en ligne complètes avec gestion des paiements, des stocks et de l'expérience d'achat.",
    gradient: "from-[#03045e] to-[#0077b6]",
  },
  {
    icon: "📱",
    title: "Mobile First",
    description: "Chaque site est conçu d'abord pour mobile — une expérience parfaite sur tous les écrans.",
    gradient: "from-[#00b4d8] to-[#90e0ef]",
  },
  {
    icon: "🔒",
    title: "Sécurité",
    description: "Protection contre les failles courantes, HTTPS, validation des données et conformité RGPD.",
    gradient: "from-[#0077b6] to-[#03045e]",
  },
  {
    icon: "🚀",
    title: "Performance",
    description: "Temps de chargement optimisés, Core Web Vitals au vert et scores Lighthouse élevés.",
    gradient: "from-[#00b4d8] to-[#0077b6]",
  },
  {
    icon: "🤝",
    title: "Maintenance",
    description: "Accompagnement après livraison : mises à jour, monitoring et support technique réactif.",
    gradient: "from-[#03045e] to-[#00b4d8]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1.5px solid #caf0f8" }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${s.gradient}`} />
              <div className="bg-white p-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                  style={{ background: "linear-gradient(135deg, #caf0f8, #90e0ef)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-3 group-hover:text-[#0077b6] transition-colors"
                  style={{ color: "#03045e" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
