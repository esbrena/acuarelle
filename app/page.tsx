import { CategoryMarquee } from "@/components/sections/CategoryMarquee";
import { EditorialGrid } from "@/components/sections/EditorialGrid";
import { FeaturedImmersion } from "@/components/sections/FeaturedImmersion";
import { HomeHero } from "@/components/sections/HomeHero";
import { PersonalOffer } from "@/components/sections/PersonalOffer";
import { getArtworks, getCategories, getFeaturedArtworks } from "@/lib/content";

export default function HomePage() {
  const artworks = getArtworks();
  const featured = getFeaturedArtworks();
  const categories = getCategories();

  return (
    <>
      <HomeHero artworksCount={artworks.length} heroArtwork={featured[0] ?? artworks[0]} />
      <PersonalOffer />
      <FeaturedImmersion artworks={featured.length > 0 ? featured : artworks} />
      <EditorialGrid artworks={artworks} categories={categories} />
      <CategoryMarquee categories={categories} />
    </>
  );
}
