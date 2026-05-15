"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { ArtworkImage } from "@/components/ui/ArtworkImage";
import type { Artwork } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ArtworkGallery({ artwork }: { artwork: Artwork }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const images = artwork.images.length > 0 ? artwork.images : [undefined];

  return (
    <>
      <div className="grid gap-4">
        <button
          type="button"
          className="focus-ring group relative h-[72vh] min-h-[34rem] overflow-hidden rounded-[2.8rem] bg-night"
          onClick={() => setViewerOpen(true)}
        >
          <ArtworkImage src={images[activeIndex]} title={artwork.title} index={activeIndex} priority sizes="(min-width: 1024px) 58vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-night/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          <span className="absolute bottom-6 left-6 rounded-full bg-porcelain/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-ink backdrop-blur">
            Ver fullscreen
          </span>
        </button>

        {images.length > 1 ? (
          <div className="grid grid-cols-3 gap-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "focus-ring relative h-28 overflow-hidden rounded-2xl bg-night",
                  activeIndex === index && "ring-2 ring-clay",
                )}
              >
                <ArtworkImage src={image} title={artwork.title} index={index} sizes="12rem" />
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <AnimatePresence>
        {viewerOpen ? (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-night/96 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="focus-ring absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-porcelain text-ink"
              onClick={() => setViewerOpen(false)}
              aria-label="Cerrar visor"
            >
              <X size={18} />
            </button>
            <motion.div
              className="relative h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem]"
              initial={{ scale: 0.96, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 20 }}
            >
              <ArtworkImage src={images[activeIndex]} title={artwork.title} index={activeIndex} priority sizes="100vw" />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
