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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — texte */}
          <div>
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

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
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

            <div className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: "1.5px solid rgba(0,119,182,0.15)" }}>
              {[
                { value: "50+", label: "Projets réalisés" },
                { value: "100%", label: "Clients satisfaits" },
                { value: "24h", label: "Temps de réponse" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold" style={{ color: "#03045e" }}>{s.value}</div>
                  <div className="text-xs text-gray-500 mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — carte profil */}
          <div className="hidden lg:flex justify-center">
            <div
              className="w-80 rounded-3xl p-8 shadow-2xl"
              style={{
                background: "linear-gradient(145deg, #03045e, #0077b6)",
                boxShadow: "0 32px 64px rgba(3,4,94,0.3)",
              }}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold font-mono text-white shadow-inner"
                  style={{ background: "rgba(255,255,255,0.15)", border: "3px solid rgba(255,255,255,0.3)" }}
                >
                  EDS
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-1">Eléa De Sousa</h3>
                <p style={{ color: "#90e0ef" }} className="text-sm">Développeuse Web Freelance</p>
              </div>

              {/* Compétences */}
              <div className="space-y-3">
                {[
                  { label: "React / Next.js", pct: 90 },
                  { label: "UI / UX Design", pct: 80 },
                  { label: "SEO & Performance", pct: 85 },
                ].map((skill) => (
                  <div key={skill.label}>
                    <div className="flex justify-between text-xs mb-1" style={{ color: "#caf0f8" }}>
                      <span>{skill.label}</span>
                      <span>{skill.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${skill.pct}%`, backgroundColor: "#00b4d8" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Disponibilité */}
              <div
                className="mt-6 rounded-2xl px-4 py-3 flex items-center gap-3"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                </span>
                <span className="text-sm text-white font-medium">Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
