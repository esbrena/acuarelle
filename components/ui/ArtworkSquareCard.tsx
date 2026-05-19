import Link from "next/link";

import { ArtworkImage } from "@/components/ui/ArtworkImage";
import type { Artwork } from "@/lib/types";

type ArtworkSquareCardProps = {
  artwork: Artwork;
  priority?: boolean;
};

export function ArtworkSquareCard({ artwork, priority = false }: ArtworkSquareCardProps) {
  return (
    <Link
      href={`/obra/${artwork.slug}`}
      className="group focus-ring relative aspect-square overflow-hidden rounded-[8px] bg-night"
    >
      <ArtworkImage
        src={artwork.images[0]}
        title={artwork.title}
        priority={priority}
        sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blueberry/80 via-blueberry/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 text-porcelain opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="mb-1 text-[0.58rem] uppercase tracking-[0.28em] text-porcelain/68">
          {artwork.categories.slice(0, 2).join(" / ")}
        </p>
        <h2 className="font-serif text-2xl leading-none">{artwork.title}</h2>
      </div>
    </Link>
  );
}
