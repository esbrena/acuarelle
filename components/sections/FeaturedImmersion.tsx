"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { Reveal } from "@/components/ui/Reveal";
import type { Artwork } from "@/lib/types";

export function FeaturedImmersion({ artworks }: { artworks: Artwork[] }) {
  const featured = artworks.slice(0, 3);

  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-clay">Obras destacadas</p>
            <h2 className="max-w-3xl font-serif text-5xl leading-[0.95] md:text-8xl">Un recorrido casi cinematografico.</h2>
          </div>
          <Link href="/portfolio" className="text-xs uppercase tracking-[0.32em] text-ash transition hover:text-ink">
            Explorar todo
          </Link>
        </Reveal>

        <div className="grid gap-5">
          {featured.map((artwork, index) => (
            <motion.article
              key={artwork.slug}
              className="group relative h-[82vh] min-h-[34rem] overflow-hidden rounded-[3rem] bg-night"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/obra/${artwork.slug}`} className="block h-full">
                <motion.div className="absolute inset-0" whileHover={{ scale: 1.045 }} transition={{ duration: 1.1 }}>
                  <ArtworkImage src={artwork.images[0]} title={artwork.title} priority={index === 0} sizes="100vw" />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-night/80 via-night/18 to-transparent" />
                <div className="absolute inset-0 flex items-end p-7 md:p-12">
                  <div className="max-w-2xl text-porcelain">
                    <p className="mb-5 text-xs uppercase tracking-[0.38em] text-porcelain/56">0{index + 1} / destacada</p>
                    <h3 className="font-serif text-6xl leading-none md:text-9xl">{artwork.title}</h3>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-porcelain/72">{artwork.description}</p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
