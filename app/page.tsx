import { HomeGallery } from "@/components/sections/HomeGallery";
import { getArtworks } from "@/lib/content";

export default function HomePage() {
  const artworks = getArtworks();

  return <HomeGallery artworks={artworks} />;
}
