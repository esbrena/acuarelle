import type { Metadata } from "next";

import { PortfolioExperience } from "@/components/PortfolioExperience";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { Reveal } from "@/components/ui/Reveal";
import { getArtworks, getCategories, getFeaturedArtworks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Láminas, acuarelas y prints de Acuarelle con filtros por tema, búsqueda y disponibilidad.",
};

export default function PortfolioPage() {
  const artworks = getArtworks();
  const categories = getCategories();
  const heroArtwork = getFeaturedArtworks()[0] ?? artworks[0];

  return (
    <section className="px-4 pb-24 pt-28 md:px-8 md:pt-10">
      <div className="mx-auto mb-10 grid max-w-7xl gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-4 text-xs uppercase tracking-[0.36em] text-blueberry">Obras y prints</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[0.98] sm:text-5xl lg:text-6xl">
            Láminas para regalar, enmarcar o encargar a medida.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-ash">
            Explora acuarelas originales, prints disponibles y piezas que pueden inspirar tu próximo encargo personalizado.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="order-1 lg:order-2">
          <div className="relative h-64 overflow-hidden rounded-[18px] bg-blueberry/10 sm:h-80 lg:h-[24rem]">
            <ArtworkImage src={heroArtwork?.images[0]} title={heroArtwork?.title ?? "Acuarelle"} priority sizes="(min-width: 1024px) 54vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-blueberry/38 via-transparent to-blush/20" />
          </div>
        </Reveal>
      </div>
      <PortfolioExperience artworks={artworks} categories={categories} />
    </section>
  );
}
