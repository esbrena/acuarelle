import Image from "next/image";

import { artworkImageAlt } from "@/lib/images";
import { cn } from "@/lib/utils";

type ArtworkImageProps = {
  src?: string;
  title: string;
  index?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function ArtworkImage({
  src,
  title,
  index = 0,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 42vw, 100vw",
}: ArtworkImageProps) {
  if (!src) {
    return (
      <div
        aria-label={title}
        className={cn(
          "relative flex h-full min-h-[24rem] w-full items-end overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(215,230,231,0.9),transparent_32%),linear-gradient(135deg,#fffaf3,#d9b7a5_54%,#211915)] p-6",
          className,
        )}
      >
        <span className="font-serif text-4xl italic text-porcelain/80">{title}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={artworkImageAlt(title, index)}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
