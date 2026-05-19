import generatedContent from "@/data/generated/site-content.json";
import type { Artwork, Category, PortfolioContent } from "@/lib/types";

export function getPortfolioContent(): PortfolioContent {
  return generatedContent as PortfolioContent;
}

export function getArtworks(): Artwork[] {
  return getPortfolioContent().artworks;
}

export function getFeaturedArtworks(): Artwork[] {
  return getPortfolioContent().featuredArtworks;
}

export function getCategories(): Category[] {
  return getPortfolioContent().categories;
}

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return getArtworks().find((artwork) => artwork.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return getCategories().find((category) => category.slug === slug);
}

export function getArtworksByCategory(slug: string): Artwork[] {
  return getArtworks().filter((artwork) => artwork.categorySlugs.includes(slug));
}

export function getAdjacentArtworks(slug: string): {
  previous?: Artwork;
  next?: Artwork;
} {
  const artworks = getArtworks();
  const index = artworks.findIndex((artwork) => artwork.slug === slug);

  if (index < 0) {
    return {};
  }

  return {
    previous: artworks[index - 1] ?? artworks[artworks.length - 1],
    next: artworks[index + 1] ?? artworks[0],
  };
}
