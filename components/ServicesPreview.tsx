"use client";

import Link from "next/link";

const services = [
  {
    icon: "⚡",
    title: "Sites Vitrine",
    description: "Design moderne et responsive qui met en valeur votre activité et convertit vos visiteurs.",
    gradient: "from-[#0077b6] to-[#00b4d8]",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Boutiques en ligne complètes avec paiements sécurisés et gestion des stocks.",
    gradient: "from-[#03045e] to-[#0077b6]",
  },
  {
    icon: "🚀",
    title: "Performance & SEO",
    description: "Sites ultra-rapides, bien référencés et optimisés pour transformer vos visiteurs en clients.",
    gradient: "from-[#00b4d8] to-[#90e0ef]",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header avec trait coloré */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#0077b6" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#0077b6" }}>
                Ce que je fais
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#03045e" }}>
              Des solutions web pensées<br />pour vous
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold whitespace-nowrap px-5 py-2.5 rounded-full border-2 transition-all hover:text-white"
            style={{ borderColor: "#0077b6", color: "#0077b6" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#0077b6"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#0077b6"; }}
          >
            Tous les services →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1.5px solid #caf0f8" }}
            >
              {/* Barre de couleur en haut */}
              <div className={`h-2 w-full bg-gradient-to-r ${s.gradient}`} />
              <div className="bg-white p-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
                  style={{ background: "linear-gradient(135deg, #caf0f8, #90e0ef)" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[#0077b6] transition-colors" style={{ color: "#03045e" }}>
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bloc */}
        <div
          className="mt-14 rounded-3xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #03045e, #0077b6)" }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Un projet en tête ?</p>
            <p style={{ color: "#caf0f8" }} className="text-sm">Discutons-en ensemble, c&apos;est gratuit et sans engagement.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "#caf0f8", color: "#03045e" }}
          >
            Prendre contact →
          </Link>
        </div>

      </div>
    </section>
  );
}
