import Link from "next/link";

import { ArtworkCard } from "@/components/ui/ArtworkCard";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";
import type { Artwork, Category } from "@/lib/types";

export function EditorialGrid({ artworks, categories }: { artworks: Artwork[]; categories: Category[] }) {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal className="sticky top-32">
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-blueberry">Colecciones</p>
            <h2 className="font-serif text-5xl leading-none md:text-7xl">Animales, pequeños viajes y escenas para casa.</h2>
            <p className="mt-7 max-w-md text-lg leading-8 text-ash">{siteConfig.editorialQuote}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {categories.slice(0, 7).map((category) => (
                <Link
                  key={category.slug}
                  href={`/categoria/${category.slug}`}
                  className="rounded-full border border-blueberry/10 bg-porcelain/54 px-4 py-2 text-xs uppercase tracking-[0.22em] text-ash transition hover:border-blueberry hover:text-blueberry"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </Reveal>

          <div className="masonry">
            {artworks.slice(0, 7).map((artwork, index) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
