import Image from "next/image";

const services = [
  { icon: "⚡", title: "Sites Vitrine", description: "Design moderne, responsive et optimisé SEO pour mettre en valeur votre activité et convertir vos visiteurs.", gradient: "from-[#dc2f02] to-[#f48c06]" },
  { icon: "🛍️", title: "E-commerce", description: "Boutiques en ligne complètes avec gestion des paiements, des stocks et de l'expérience d'achat.", gradient: "from-[#e85d04] to-[#faa307]" },
  { icon: "📱", title: "Mobile First", description: "Chaque site est conçu d'abord pour mobile — une expérience parfaite sur tous les écrans.", gradient: "from-[#f48c06] to-[#ffba08]" },
  { icon: "🔒", title: "Sécurité", description: "Protection contre les failles courantes, HTTPS, validation des données et conformité RGPD.", gradient: "from-[#dc2f02] to-[#e85d04]" },
  { icon: "🚀", title: "Performance", description: "Temps de chargement optimisés, Core Web Vitals au vert et scores Lighthouse élevés.", gradient: "from-[#e85d04] to-[#f48c06]" },
  { icon: "🤝", title: "Maintenance", description: "Accompagnement après livraison : mises à jour, monitoring et support technique réactif.", gradient: "from-[#f48c06] to-[#faa307]" },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden" style={{ marginTop: "-4rem", paddingTop: "8rem" }}>
      <Image src="/service.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1.5px solid rgba(255,255,255,0.15)" }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${s.gradient}`} />
              <div className="p-8" style={{ backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)" }}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                  style={{ backgroundColor: "rgba(244,140,6,0.25)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 transition-colors group-hover:text-[#faa307] text-white">
                  {s.title}
                </h3>
                <p className="leading-relaxed text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
