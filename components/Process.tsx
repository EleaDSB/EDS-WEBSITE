const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Analyse des besoins",
    description: "On échange sur votre projet, vos objectifs et votre cible. Je vous propose une solution adaptée avec un devis détaillé sous 24h.",
  },
  {
    number: "02",
    icon: "🎨",
    title: "Design & Maquettage",
    description: "Création de maquettes interactives pour valider l'identité visuelle et l'expérience utilisateur avant tout développement.",
  },
  {
    number: "03",
    icon: "💻",
    title: "Développement",
    description: "Code propre, structuré et maintenable. Tests continus et points d'avancement réguliers tout au long du projet.",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Mise en ligne",
    description: "Déploiement sécurisé, configuration HTTPS et optimisation SEO. Votre site est prêt à accueillir vos clients.",
  },
  {
    number: "05",
    icon: "🤝",
    title: "Suivi & Maintenance",
    description: "Je reste disponible après livraison pour les mises à jour, les évolutions et le support technique.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">

        <div className="relative">
          {/* Ligne verticale de connexion */}
          <div
            className="absolute left-7 top-8 bottom-8 w-0.5"
            style={{ background: "linear-gradient(to bottom, #0077b6, #caf0f8)" }}
          />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 group">
                {/* Cercle numéroté */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-110"
                  style={
                    i === 0
                      ? { background: "linear-gradient(135deg, #03045e, #0077b6)", color: "#fff" }
                      : { backgroundColor: "#fff", color: "#0077b6", border: "2px solid #90e0ef" }
                  }
                >
                  {step.icon}
                </div>

                {/* Contenu */}
                <div
                  className="flex-1 mb-8 rounded-3xl p-6 transition-all duration-200 group-hover:shadow-md"
                  style={{
                    backgroundColor: i % 2 === 0 ? "#fff" : "#f8fcff",
                    border: "1.5px solid #caf0f8",
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#caf0f8", color: "#0077b6" }}
                    >
                      Étape {step.number}
                    </span>
                    <h3 className="text-base font-bold" style={{ color: "#03045e" }}>{step.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
