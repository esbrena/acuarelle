import { ArtworkSquareCard } from "@/components/ui/ArtworkSquareCard";
import type { Artwork } from "@/lib/types";

export function HomeGallery({ artworks }: { artworks: Artwork[] }) {
  return (
    <section className="px-3 pb-16 pt-28 md:px-6 md:pt-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4 xl:grid-cols-4 2xl:grid-cols-5">
        {artworks.map((artwork, index) => (
          <ArtworkSquareCard key={artwork.slug} artwork={artwork} priority={index < 8} />
        ))}
      </div>
    </section>
  );
}
