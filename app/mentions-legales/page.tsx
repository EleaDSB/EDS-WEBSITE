import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — EDS Web Solutions",
  description: "Mentions légales du site EDS Web Solutions.",
};

const sections = [
  {
    title: "Éditeur du site",
    content: [
      "**Dénomination sociale :** EDS Web Solutions",
      "**Responsable de publication :** Eléa De Sousa",
      "**Adresse :** Toulouse, France",
      "**Email :** contact@eds-web.fr",
      "**Statut :** Auto-entrepreneur",
    ],
  },
  {
    title: "Hébergement",
    content: [
      "**Hébergeur :** Vercel Inc.",
      "**Adresse :** 340 Pine Street, Suite 701, San Francisco, California 94104, États-Unis",
      "**Site web :** vercel.com",
    ],
  },
  {
    title: "Propriété intellectuelle",
    content: [
      "L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive d'EDS Web Solutions, sauf mention contraire.",
      "Toute reproduction, distribution, modification ou utilisation de ces contenus, sans autorisation écrite préalable, est strictement interdite.",
    ],
  },
  {
    title: "Données personnelles",
    content: [
      "Les informations collectées via le formulaire de contact (nom, adresse email, message) sont utilisées uniquement pour répondre à vos demandes.",
      "Ces données ne sont ni vendues, ni transmises à des tiers.",
      "Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.",
      "Pour exercer ces droits, contactez-nous à : contact@eds-web.fr",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Ce site n'utilise pas de cookies de traçage ou publicitaires.",
      "Des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.",
    ],
  },
  {
    title: "Limitation de responsabilité",
    content: [
      "EDS Web Solutions s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.",
      "Toutefois, EDS Web Solutions ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.",
      "EDS Web Solutions se réserve le droit de modifier les contenus de ce site à tout moment, sans préavis.",
    ],
  },
];

export default function MentionsLegales() {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-10 rounded-full" style={{ backgroundColor: "#e85d04" }} />
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "#e85d04" }}>
              Légal
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-3" style={{ color: "#dc2f02" }}>Mentions légales</h1>
          <p className="text-gray-500">Dernière mise à jour : juin 2026</p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-l-4 pl-6" style={{ borderColor: "#fff3e0" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "#dc2f02" }}>{s.title}</h2>
              <ul className="space-y-2">
                {s.content.map((line, i) => (
                  <li key={i} className="text-gray-600 leading-relaxed text-sm"
                    dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>')
                    }}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
