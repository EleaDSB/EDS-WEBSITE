import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Mes services web — Création site vitrine, e-commerce | EDS Web Solutions",
  description: "Création de site vitrine, boutique e-commerce, optimisation SEO et maintenance web à Toulouse. Solutions sur-mesure pour artisans et indépendants. Devis gratuit.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        title="Mes services"
        subtitle="Des solutions complètes pour concrétiser votre projet web."
      />
      <Services />
    </>
  );
}
