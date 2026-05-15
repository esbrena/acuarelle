import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArtworkGallery } from "@/components/ArtworkGallery";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/content/site";
import { getAdjacentArtworks, getArtworkBySlug, getArtworks } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArtworks().map((artwork) => ({
    slug: artwork.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return {};
  }

  return {
    title: artwork.title,
    description: artwork.description || siteConfig.description,
    openGraph: {
      title: `${artwork.title} | ${siteConfig.name}`,
      description: artwork.description || siteConfig.description,
      images: artwork.images[0] ? [artwork.images[0]] : undefined,
      type: "article",
    },
  };
}

export default async function ArtworkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  const adjacent = getAdjacentArtworks(artwork.slug);

  return (
    <section className="px-4 pb-24 pt-36 md:px-8 md:pt-44">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <ArtworkGallery artwork={artwork} />
        <Reveal className="lg:sticky lg:top-32">
          <Link href="/portfolio" className="mb-8 inline-block text-xs uppercase tracking-[0.32em] text-ash transition hover:text-clay">
            Volver al portfolio
          </Link>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-clay">{artwork.categories.join(" / ")}</p>
          <h1 className="font-serif text-6xl leading-none md:text-9xl">{artwork.title}</h1>
          <p className="mt-7 text-lg leading-8 text-ash">{artwork.description}</p>

          <div className="mt-8">
            <AvailabilityBadge availability={artwork.availability} />
          </div>

          <Link
            href="/contacto"
            className="mt-8 inline-flex rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.3em] text-porcelain transition hover:bg-clay"
          >
            Preguntar por esta pieza
          </Link>

          <dl className="mt-10 grid gap-4 border-y border-ink/10 py-8">
            {[
              ["Tecnica", artwork.technique],
              ["Soporte", artwork.support],
              ["Tamano", artwork.size],
              ["Ano", artwork.year],
            ]
              .filter(([, value]) => Boolean(value))
              .map(([label, value]) => (
                <div key={label} className="grid grid-cols-[8rem_1fr] gap-4">
                  <dt className="text-xs uppercase tracking-[0.28em] text-ash">{label}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            {artwork.categories.map((category, index) => (
              <Link
                key={category}
                href={`/categoria/${artwork.categorySlugs[index]}`}
                className="rounded-full border border-ink/10 bg-porcelain/60 px-4 py-2 text-xs uppercase tracking-[0.22em] text-ash transition hover:border-clay hover:text-clay"
              >
                {category}
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {adjacent.previous ? (
              <Link href={`/obra/${adjacent.previous.slug}`} className="rounded-[1.6rem] border border-ink/10 bg-porcelain/60 p-5 transition hover:-translate-y-0.5">
                <span className="text-xs uppercase tracking-[0.28em] text-ash">Anterior</span>
                <strong className="mt-3 block font-serif text-3xl font-normal">{adjacent.previous.title}</strong>
              </Link>
            ) : null}
            {adjacent.next ? (
              <Link href={`/obra/${adjacent.next.slug}`} className="rounded-[1.6rem] border border-ink/10 bg-porcelain/60 p-5 transition hover:-translate-y-0.5">
                <span className="text-xs uppercase tracking-[0.28em] text-ash">Siguiente</span>
                <strong className="mt-3 block font-serif text-3xl font-normal">{adjacent.next.title}</strong>
              </Link>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
