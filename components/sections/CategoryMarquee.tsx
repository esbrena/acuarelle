import Link from "next/link";

import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { Reveal } from "@/components/ui/Reveal";
import type { Category } from "@/lib/types";

export function CategoryMarquee({ categories }: { categories: Category[] }) {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-clay">Categorias dinamicas</p>
          <h2 className="max-w-4xl font-serif text-5xl leading-none md:text-8xl">El Excel dibuja automaticamente los caminos de exploracion.</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 8).map((category, index) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative h-72 overflow-hidden rounded-[2rem] bg-night"
            >
              <ArtworkImage src={category.featuredImage} title={category.name} sizes="(min-width: 1024px) 25vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-night/82 via-night/22 to-transparent transition group-hover:from-night/70" />
              <div className="absolute inset-0 flex flex-col justify-between p-5 text-porcelain">
                <span className="text-xs uppercase tracking-[0.32em] text-porcelain/55">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-4xl">{category.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.26em] text-porcelain/58">{category.count} obras</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
