const services = [
  { icon: "⚡", title: "Sites Vitrine", description: "Design moderne, responsive et optimisé SEO pour mettre en valeur votre activité et convertir vos visiteurs.", gradient: "from-[#dc2f02] to-[#f48c06]" },
  { icon: "🛒", title: "E-commerce", description: "Boutiques en ligne complètes avec gestion des paiements, des stocks et de l'expérience d'achat.", gradient: "from-[#e85d04] to-[#faa307]" },
  { icon: "📱", title: "Mobile First", description: "Chaque site est conçu d'abord pour mobile — une expérience parfaite sur tous les écrans.", gradient: "from-[#f48c06] to-[#ffba08]" },
  { icon: "🔒", title: "Sécurité", description: "Protection contre les failles courantes, HTTPS, validation des données et conformité RGPD.", gradient: "from-[#dc2f02] to-[#e85d04]" },
  { icon: "🚀", title: "Performance", description: "Temps de chargement optimisés, Core Web Vitals au vert et scores Lighthouse élevés.", gradient: "from-[#e85d04] to-[#f48c06]" },
  { icon: "🤝", title: "Maintenance", description: "Accompagnement après livraison : mises à jour, monitoring et support technique réactif.", gradient: "from-[#f48c06] to-[#faa307]" },
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
              style={{ border: "1.5px solid #fff3e0" }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${s.gradient}`} />
              <div className="bg-white p-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                  style={{ background: "linear-gradient(135deg, #fff3e0, #ffe0b2)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors group-hover:text-[#e85d04]" style={{ color: "#dc2f02" }}>
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
