"use client";

import Link from "next/link";

const services = [
  {
    icon: "⚡",
    title: "Sites Vitrine",
    description: "Design moderne et responsive qui met en valeur votre activité et convertit vos visiteurs.",
    gradient: "from-[#dc2f02] to-[#f48c06]",
  },
  {
    icon: "🛒",
    title: "E-commerce",
    description: "Boutiques en ligne complètes avec paiements sécurisés et gestion des stocks.",
    gradient: "from-[#e85d04] to-[#faa307]",
  },
  {
    icon: "🚀",
    title: "Performance & SEO",
    description: "Sites ultra-rapides, bien référencés et optimisés pour transformer vos visiteurs en clients.",
    gradient: "from-[#f48c06] to-[#ffba08]",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#e85d04" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#e85d04" }}>
                Ce que je fais
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#dc2f02" }}>
              Des solutions web pensées<br />pour vous
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold whitespace-nowrap px-5 py-2.5 rounded-full border-2 transition-all hover:text-white"
            style={{ borderColor: "#e85d04", color: "#e85d04" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#e85d04"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "#e85d04"; }}
          >
            Tous les services →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-14 rounded-3xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #dc2f02, #f48c06)" }}
        >
          <div>
            <p className="text-white font-bold text-xl mb-1">Un projet en tête ?</p>
            <p className="text-sm" style={{ color: "#fff3e0" }}>Discutons-en ensemble, c&apos;est gratuit et sans engagement.</p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "#fff3e0", color: "#dc2f02" }}
          >
            Prendre contact →
          </Link>
        </div>

      </div>
    </section>
  );
}
