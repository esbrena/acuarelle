import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PortfolioExperience } from "@/components/PortfolioExperience";
import { ArtworkImage } from "@/components/ui/ArtworkImage";
import { Reveal } from "@/components/ui/Reveal";
import { getArtworks, getArtworksByCategory, getCategories, getCategoryBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: `Categoria ${category.name}`,
    description: `Obras de la categoria ${category.name} en Acuarelle.`,
    openGraph: {
      title: `Categoria ${category.name}`,
      images: category.featuredImage ? [category.featuredImage] : undefined,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const artworksInCategory = getArtworksByCategory(category.slug);
  const artworks = getArtworks();
  const categories = getCategories();

  return (
    <section className="px-4 pb-24 pt-36 md:px-8 md:pt-44">
      <div className="mx-auto mb-12 grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal>
          <Link href="/portfolio" className="mb-8 inline-block text-xs uppercase tracking-[0.32em] text-ash transition hover:text-clay">
            Archivo completo
          </Link>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-clay">Categoria</p>
          <h1 className="font-serif text-7xl leading-[0.82] md:text-[10rem]">{category.name}</h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-ash">
            {artworksInCategory.length} obras conectadas automaticamente por el Excel. Cambia las categorias en la hoja y esta pagina se regenera sola.
          </p>
        </Reveal>
        <Reveal delay={0.12} className="relative h-[54vh] min-h-[24rem] overflow-hidden rounded-[2.8rem] bg-night">
          <ArtworkImage src={category.featuredImage} title={category.name} priority />
          <div className="absolute inset-0 bg-gradient-to-t from-night/55 to-transparent" />
        </Reveal>
      </div>

      <PortfolioExperience artworks={artworks} categories={categories} initialCategory={category.slug} />
    </section>
  );
}
