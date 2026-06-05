import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Process from "@/components/Process";

export const metadata: Metadata = {
  title: "Processus — EDS Web Solutions",
  description: "Découvrez comment je travaille : de l'analyse des besoins à la mise en ligne et la maintenance.",
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
