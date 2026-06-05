import Link from "next/link";

const values = [
  { icon: "🎯", title: "Sur-mesure", description: "Chaque projet est unique. Je prends le temps de comprendre votre activité avant d'écrire la moindre ligne de code." },
  { icon: "⚡", title: "Réactivité", description: "Réponse garantie sous 24h. Je m'engage à vous tenir informé à chaque étape du projet." },
  { icon: "🤝", title: "Transparence", description: "Devis clair, délais respectés, zéro mauvaise surprise. Vous savez toujours où en est votre projet." },
];

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Visuel décoratif */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80">
              {/* Cercle de fond */}
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "linear-gradient(135deg, #fff3e0, #ffe0b2)" }}
              />
              {/* Cercle intérieur */}
              <div
                className="absolute inset-8 rounded-full flex items-center justify-center shadow-xl"
                style={{ background: "linear-gradient(135deg, #dc2f02, #f48c06)" }}
              >
                <span className="font-mono text-5xl font-black text-white tracking-tighter">&lt;EDS/&gt;</span>
              </div>
              {/* Badges flottants */}
            </div>
          </div>

          {/* Texte */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#e85d04" }} />
              <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#e85d04" }}>
                À propos
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: "#dc2f02" }}>
              Une développeuse à votre service, pas une agence
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Je suis Eléa, développeuse web freelance spécialisée dans la création de sites pour les
              <strong className="text-gray-800"> indépendants et artisans.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Quand vous travaillez avec moi, vous avez un interlocuteur unique qui s'occupe de tout —
              du design à la mise en ligne — sans intermédiaire. Votre projet mérite une attention personnelle,
              pas une gestion en série.
            </p>

            {/* Valeurs */}
            <div className="space-y-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ backgroundColor: "#fff3e0" }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: "#dc2f02" }}>{v.title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed">{v.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #dc2f02, #f48c06)", boxShadow: "0 4px 16px rgba(220,47,2,0.25)" }}
            >
              Travaillons ensemble →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
