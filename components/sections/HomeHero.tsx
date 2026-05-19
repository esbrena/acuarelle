"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";
import type { Artwork } from "@/lib/types";

export function HomeHero({ artworksCount, heroArtwork }: { artworksCount: number; heroArtwork?: Artwork }) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);

  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 md:px-8 md:pt-40">
      <motion.div className="absolute inset-x-0 top-24 mx-auto h-[32rem] max-w-5xl rounded-full bg-mist/60 blur-3xl" style={{ y }} />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="z-10">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.44em] text-blueberry">Acuarelas de Esther García Brena</p>
            <h1 className="text-balance font-serif text-[clamp(4.4rem,13vw,13rem)] leading-[0.78] tracking-[-0.08em]">
              Prints,
              <br />
              animales
              <br />
              y magia.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-lg leading-8 text-ash md:text-xl">{siteConfig.heroStatement}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/portfolio"
                className="focus-ring rounded-full bg-blueberry px-6 py-4 text-xs uppercase tracking-[0.3em] text-porcelain transition hover:-translate-y-0.5 hover:bg-blueberry/90"
              >
                Ver obras
              </Link>
              <Link
                href="/contacto"
                className="focus-ring rounded-full border border-blueberry/15 px-6 py-4 text-xs uppercase tracking-[0.3em] text-ink transition hover:border-blueberry hover:text-blueberry"
              >
                Encargar lámina
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="relative h-[62vh] min-h-[32rem] overflow-hidden rounded-[2.8rem] bg-night shadow-2xl shadow-ink/15"
          style={{ scale }}
          initial={{ opacity: 0, rotate: 2, y: 40 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ArtworkImage src={heroArtwork?.images[0]} title={heroArtwork?.title ?? siteConfig.name} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-porcelain/10" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-porcelain md:p-9">
            <p className="mb-3 text-xs uppercase tracking-[0.38em] text-porcelain/58">
              {artworksCount.toString().padStart(2, "0")} láminas y acuarelas
            </p>
            <h2 className="font-serif text-4xl italic md:text-6xl">{heroArtwork?.title ?? "Obra viva"}</h2>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
