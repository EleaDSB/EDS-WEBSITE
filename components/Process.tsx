const steps = [
  {
    number: "01",
    title: "Analyse des besoins",
    description:
      "On échange sur votre projet, vos objectifs et votre cible. Je vous propose une solution adaptée avec un devis détaillé sous 24h.",
  },
  {
    number: "02",
    title: "Design & Maquettage",
    description:
      "Création de maquettes interactives pour valider l'identité visuelle et l'expérience utilisateur avant tout développement.",
  },
  {
    number: "03",
    title: "Développement",
    description:
      "Code propre, structuré et maintenable. Tests continus et points d'avancement réguliers tout au long du projet.",
  },
  {
    number: "04",
    title: "Mise en ligne",
    description:
      "Déploiement sécurisé, configuration HTTPS et optimisation SEO. Votre site est prêt à accueillir vos clients.",
  },
  {
    number: "05",
    title: "Suivi & Maintenance",
    description:
      "Je reste disponible après livraison pour les mises à jour, les évolutions et le support technique.",
  },
];

export default function Process() {
  return (
    <section id="processus" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça se passe ?</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Un processus transparent, pensé pour vous livrer un site qui dépasse vos attentes.
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-200 group"
            >
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-mono text-sm font-bold transition-colors duration-200"
                style={{
                  backgroundColor: i === 0 ? "#00C896" : "#00C89615",
                  color: i === 0 ? "#fff" : "#00C896",
                }}
              >
                {step.number}
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm max-w-2xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
