import { siteConfig } from "@/content/site";

export function resolveArtworkImage(image: string): string {
  const value = image.trim();

  if (!value) {
    return "";
  }

  if (/^https?:\/\//i.test(value) || value.startsWith("/")) {
    return value;
  }

  return `${siteConfig.imageBasePath}/${value}`;
}

export function artworkImageAlt(title: string, index = 0): string {
  return index === 0 ? title : `${title} - detalle ${index + 1}`;
}
