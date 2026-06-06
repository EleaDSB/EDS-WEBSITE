import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Demander un devis web gratuit — EDS Web Solutions Toulouse",
  description: "Vous avez un projet de site web ? Contactez EDS Web Solutions à Toulouse. Devis gratuit et personnalisé sous 24h, sans engagement. Réponse rapide garantie.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Démarrons votre projet"
        subtitle="Devis gratuit sous 24h, sans engagement."
      />
      <Contact />
    </>
  );
}
