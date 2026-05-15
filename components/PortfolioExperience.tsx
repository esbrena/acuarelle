"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ArtworkCard } from "@/components/ui/ArtworkCard";
import type { Artwork, Category } from "@/lib/types";
import { cn } from "@/lib/utils";

type PortfolioExperienceProps = {
  artworks: Artwork[];
  categories: Category[];
  initialCategory?: string;
};

export function PortfolioExperience({ artworks, categories, initialCategory = "todo" }: PortfolioExperienceProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");

  const filteredArtworks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return artworks.filter((artwork) => {
      const matchesCategory = activeCategory === "todo" || artwork.categorySlugs.includes(activeCategory);
      const haystack = [artwork.title, artwork.description, artwork.technique, artwork.support, ...artwork.categories]
        .join(" ")
        .toLowerCase();
      return matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeCategory, artworks, query]);

  return (
    <div>
      <div className="glass-panel sticky top-24 z-30 mx-auto mb-10 flex max-w-7xl flex-col gap-4 rounded-[2rem] p-4 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setActiveCategory("todo")}
            className={cn(
              "focus-ring shrink-0 rounded-full px-4 py-3 text-xs uppercase tracking-[0.24em] transition",
              activeCategory === "todo" ? "bg-ink text-porcelain" : "bg-porcelain/60 text-ash hover:text-ink",
            )}
          >
            Todo
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "focus-ring shrink-0 rounded-full px-4 py-3 text-xs uppercase tracking-[0.24em] transition",
                activeCategory === category.slug ? "bg-ink text-porcelain" : "bg-porcelain/60 text-ash hover:text-ink",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <label className="relative min-w-0 md:w-80">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ash" size={16} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar obra, tecnica, soporte..."
            className="focus-ring w-full rounded-full border border-ink/10 bg-porcelain/80 py-3 pl-11 pr-4 text-sm text-ink placeholder:text-ash/70"
          />
        </label>
      </div>

      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-xs uppercase tracking-[0.32em] text-ash">
          {filteredArtworks.length} obras encontradas
        </p>
        {filteredArtworks.length > 0 ? (
          <div className="masonry">
            {filteredArtworks.map((artwork, index) => (
              <ArtworkCard key={artwork.slug} artwork={artwork} index={index} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-ink/10 bg-porcelain/60 p-12 text-center">
            <p className="font-serif text-4xl">No hay obras con esa busqueda.</p>
            <p className="mt-3 text-ash">Prueba con otra categoria o una palabra mas amplia.</p>
          </div>
        )}
      </div>
    </div>
  );
}
