import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Services — EDS Web Solutions",
  description: "Sites vitrine, e-commerce, mobile first, SEO, performance et maintenance — toutes mes prestations web.",
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
