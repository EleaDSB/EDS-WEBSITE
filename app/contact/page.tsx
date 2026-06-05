import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — EDS Web Solutions",
  description: "Démarrez votre projet web. Devis gratuit sous 24h, sans engagement.",
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
