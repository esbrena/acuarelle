"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import type { Artwork } from "@/lib/types";
import { cn, formatCategories } from "@/lib/utils";

type ArtworkCardProps = {
  artwork: Artwork;
  index?: number;
  featured?: boolean;
  className?: string;
};

export function ArtworkCard({ artwork, index = 0, featured = false, className }: ArtworkCardProps) {
  const image = artwork.images[0];
  const heightClass = featured
    ? "h-[72vh] min-h-[34rem]"
    : index % 5 === 0
      ? "h-[34rem]"
      : index % 3 === 0
        ? "h-[28rem]"
        : "h-[24rem]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.04, 0.24), ease: [0.22, 1, 0.36, 1] }}
      className={cn("masonry-item group", className)}
    >
      <Link href={`/obra/${artwork.slug}`} className="focus-ring block">
        <div className={cn("relative overflow-hidden rounded-[2rem] bg-night shadow-2xl shadow-ink/10", heightClass)}>
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.055 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <ArtworkImage src={image} title={artwork.title} priority={featured || index < 2} />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-night/78 via-night/12 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-95" />
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {artwork.categories.slice(0, 2).map((category) => (
              <span
                key={category}
                className="rounded-full border border-porcelain/30 bg-porcelain/15 px-3 py-1 text-[0.62rem] uppercase tracking-[0.26em] text-porcelain backdrop-blur"
              >
                {category}
              </span>
            ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-porcelain md:p-7">
            <div className="mb-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-3">
              <AvailabilityBadge availability={artwork.availability} />
            </div>
            <p className="mb-2 text-[0.64rem] uppercase tracking-[0.34em] text-porcelain/64">
              {formatCategories(artwork.categories)}
            </p>
            <h3 className="font-serif text-3xl leading-none md:text-4xl">{artwork.title}</h3>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
