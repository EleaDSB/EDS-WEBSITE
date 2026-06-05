import Image from "next/image";

const steps = [
  { number: "01", icon: "🔍", title: "Analyse des besoins", description: "On échange sur votre projet, vos objectifs et votre cible. Je vous propose une solution adaptée avec un devis détaillé sous 24h." },
  { number: "02", icon: "🎨", title: "Design & Maquettage", description: "Création de maquettes interactives pour valider l'identité visuelle et l'expérience utilisateur avant tout développement." },
  { number: "03", icon: "💻", title: "Développement", description: "Code propre, structuré et maintenable. Tests continus et points d'avancement réguliers tout au long du projet." },
  { number: "04", icon: "🚀", title: "Mise en ligne", description: "Déploiement sécurisé, configuration HTTPS et optimisation SEO. Votre site est prêt à accueillir vos clients." },
  { number: "05", icon: "🤝", title: "Suivi & Maintenance", description: "Je reste disponible après livraison pour les mises à jour, les évolutions et le support technique." },
];

export default function Process() {
  return (
    <section id="processus" className="py-20 px-6 relative overflow-hidden" style={{ marginTop: "-3rem", paddingTop: "6rem" }}>
      {/* Image de fond */}
      <Image src="/postit.jpg" alt="" fill className="object-cover" />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="relative">
          <div
            className="absolute left-7 top-8 bottom-8 w-0.5"
            style={{ background: "linear-gradient(to bottom, #f48c06, rgba(244,140,6,0.1))" }}
          />
          <div className="space-y-2">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 group">
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm shadow-md transition-transform group-hover:scale-110"
                  style={
                    i === 0
                      ? { background: "linear-gradient(135deg, #dc2f02, #e85d04)", color: "#fff" }
                      : { backgroundColor: "rgba(255,255,255,0.1)", color: "#faa307", border: "2px solid rgba(250,163,7,0.5)" }
                  }
                >
                  {step.icon}
                </div>
                <div
                  className="flex-1 mb-8 rounded-3xl p-6 transition-all duration-200 group-hover:shadow-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "rgba(244,140,6,0.25)", color: "#faa307" }}
                    >
                      Étape {step.number}
                    </span>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
