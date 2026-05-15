import type { Metadata } from "next";

import { PortfolioExperience } from "@/components/PortfolioExperience";
import { Reveal } from "@/components/ui/Reveal";
import { getArtworks, getCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Laminas, acuarelas y prints de Acuarelle con filtros por tema, busqueda y disponibilidad.",
};

export default function PortfolioPage() {
  const artworks = getArtworks();
  const categories = getCategories();

  return (
    <section className="px-4 pb-24 pt-36 md:px-8 md:pt-44">
      <div className="mx-auto mb-12 max-w-7xl">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-clay">Obras y prints</p>
          <h1 className="max-w-5xl font-serif text-6xl leading-[0.9] md:text-9xl">
            Laminas para regalar, enmarcar o encargar a medida.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ash">
            Explora acuarelas originales, prints disponibles y piezas que pueden inspirar tu proximo encargo personalizado.
          </p>
        </Reveal>
      </div>
      <PortfolioExperience artworks={artworks} categories={categories} />
    </section>
  );
}
