import fs from "node:fs";
import path from "node:path";

export function localPublicPath(src: string): string | null {
  if (!src.startsWith("/") || src.startsWith("//")) {
    return null;
  }

  const cleanPath = src.split("?")[0];
  return path.join(process.cwd(), "public", cleanPath);
}

export function localImageExists(src: string): boolean {
  const publicPath = localPublicPath(src);
  return publicPath ? fs.existsSync(publicPath) : true;
}
