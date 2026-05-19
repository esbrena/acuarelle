export type Availability = {
  original: boolean;
  print: boolean;
};

export type Artwork = {
  id: string;
  slug: string;
  title: string;
  categories: string[];
  categorySlugs: string[];
  description: string;
  support: string;
  technique: string;
  size: string;
  availability: Availability;
  images: string[];
  missingImages: string[];
  featured: boolean;
  year?: string;
};

export type Category = {
  name: string;
  slug: string;
  count: number;
  featuredImage?: string;
  artworkSlugs: string[];
};

export type ContentWarning = {
  row: number;
  field?: string;
  message: string;
};

export type PortfolioContent = {
  generatedAt: string;
  sourceFile: string;
  artworks: Artwork[];
  featuredArtworks: Artwork[];
  categories: Category[];
  warnings: ContentWarning[];
};

export type SocialLink = {
  label: string;
  href: string;
};
