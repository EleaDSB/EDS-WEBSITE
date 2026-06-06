import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Comment je travaille — Création site web étape par étape | EDS Web Solutions",
  description: "Découvrez mon processus de création web : analyse, design, développement, mise en ligne et suivi. Un accompagnement transparent de A à Z pour votre projet web à Toulouse.",
};

export default function ProcessusPage() {
  return (
    <>
      <PageBanner
        title="Comment ça se passe ?"
        subtitle="Un processus transparent pour un résultat qui dépasse vos attentes."
      />
      <Process />
    </>
  );
}
