import fs from "node:fs/promises";
import path from "node:path";

import ExcelJS from "exceljs";

import { siteConfig } from "@/content/site";
import { resolveArtworkImage } from "@/lib/images";
import { localImageExists } from "@/lib/server-images";
import { slugify } from "@/lib/slug";
import type { Artwork, Category, ContentWarning, PortfolioContent } from "@/lib/types";

type RawArtwork = {
  nombre_obra: string;
  categorias: string;
  descripcion: string;
  soporte: string;
  tecnica: string;
  tamaño: string;
  disponible_original: string;
  disponible_print: string;
  imagenes: string;
  destacada: string;
  slug: string;
  año: string;
};

const REQUIRED_COLUMNS: Array<keyof RawArtwork> = [
  "nombre_obra",
  "categorias",
  "descripcion",
  "soporte",
  "tecnica",
  "tamaño",
  "disponible_original",
  "disponible_print",
  "imagenes",
  "destacada",
  "slug",
  "año",
];

const SOURCE_FILE = path.join(process.cwd(), siteConfig.excelPath);
const OUTPUT_FILE = path.join(process.cwd(), "data", "generated", "site-content.json");

function normalizeHeader(value: string): string {
  return value.trim().toLowerCase();
}

function cellToString(cell: ExcelJS.Cell): string {
  const value = cell.value;

  if (value === null || value === undefined) {
    return "";
  }

  if (value instanceof Date) {
    return String(value.getFullYear());
  }

  if (typeof value === "object") {
    if ("text" in value && typeof value.text === "string") {
      return value.text;
    }

    if ("richText" in value && Array.isArray(value.richText)) {
      return value.richText.map((part) => part.text).join("");
    }

    if ("result" in value) {
      return String(value.result ?? "");
    }
  }

  return String(value);
}

function parseList(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseBoolean(value: string): boolean {
  const normalized = value.trim().toLowerCase();
  return ["si", "sí", "s", "yes", "y", "true", "1"].includes(normalized);
}

function uniqueSlug(baseSlug: string, usedSlugs: Map<string, number>): string {
  const cleanBase = baseSlug || "obra";
  const count = usedSlugs.get(cleanBase) ?? 0;
  usedSlugs.set(cleanBase, count + 1);
  return count === 0 ? cleanBase : `${cleanBase}-${count + 1}`;
}

function buildCategories(artworks: Artwork[]): Category[] {
  const categories = new Map<string, Category>();

  artworks.forEach((artwork) => {
    artwork.categories.forEach((name, index) => {
      const slug = artwork.categorySlugs[index];
      const existing = categories.get(slug);

      if (existing) {
        existing.count += 1;
        existing.artworkSlugs.push(artwork.slug);
        existing.featuredImage ??= artwork.images[0];
        return;
      }

      categories.set(slug, {
        name,
        slug,
        count: 1,
        featuredImage: artwork.images[0],
        artworkSlugs: [artwork.slug],
      });
    });
  });

  return Array.from(categories.values()).sort((a, b) => a.name.localeCompare(b.name));
}

async function main() {
  const warnings: ContentWarning[] = [];
  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile(SOURCE_FILE);

  const worksheet = workbook.worksheets[0];

  if (!worksheet) {
    throw new Error(`El Excel ${siteConfig.excelPath} no contiene hojas.`);
  }

  const headerRow = worksheet.getRow(1);
  const columnByHeader = new Map<string, number>();

  headerRow.eachCell((cell, columnNumber) => {
    columnByHeader.set(normalizeHeader(cellToString(cell)), columnNumber);
  });

  const missingColumns = REQUIRED_COLUMNS.filter((column) => !columnByHeader.has(column));

  if (missingColumns.length > 0) {
    throw new Error(`Faltan columnas obligatorias en el Excel: ${missingColumns.join(", ")}`);
  }

  const usedSlugs = new Map<string, number>();
  const artworks: Artwork[] = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber === 1) {
      return;
    }

    const raw = REQUIRED_COLUMNS.reduce((accumulator, column) => {
      const columnNumber = columnByHeader.get(column) as number;
      accumulator[column] = cellToString(row.getCell(columnNumber)).trim();
      return accumulator;
    }, {} as RawArtwork);

    const title = raw.nombre_obra.trim();

    if (!title) {
      warnings.push({
        row: rowNumber,
        field: "nombre_obra",
        message: "Fila ignorada porque no tiene nombre_obra.",
      });
      return;
    }

    const categories = parseList(raw.categorias);
    const safeCategories = categories.length > 0 ? categories : ["Obra"];
    const categorySlugs = safeCategories.map(slugify);
    const images = parseList(raw.imagenes).map(resolveArtworkImage).filter(Boolean);
    const missingImages = images.filter((image) => !localImageExists(image));

    if (images.length === 0) {
      warnings.push({
        row: rowNumber,
        field: "imagenes",
        message: "La obra no tiene imagenes. Se mostrara con un fondo artistico de reserva.",
      });
    }

    missingImages.forEach((image) => {
      warnings.push({
        row: rowNumber,
        field: "imagenes",
        message: `No se encontro la imagen local ${image}.`,
      });
    });

    const baseSlug = slugify(raw.slug || title);
    const slug = uniqueSlug(baseSlug, usedSlugs);

    artworks.push({
      id: slug,
      slug,
      title,
      categories: safeCategories,
      categorySlugs,
      description: raw.descripcion,
      support: raw.soporte,
      technique: raw.tecnica,
      size: raw.tamaño,
      availability: {
        original: parseBoolean(raw.disponible_original),
        print: parseBoolean(raw.disponible_print),
      },
      images,
      missingImages,
      featured: parseBoolean(raw.destacada),
      year: raw.año || undefined,
    });
  });

  const content: PortfolioContent = {
    generatedAt: (workbook.modified ?? workbook.created ?? new Date("2026-01-01T00:00:00.000Z")).toISOString(),
    sourceFile: siteConfig.excelPath,
    artworks,
    featuredArtworks: artworks.filter((artwork) => artwork.featured),
    categories: buildCategories(artworks),
    warnings,
  };

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, `${JSON.stringify(content, null, 2)}\n`, "utf8");

  console.log(`Contenido generado: ${artworks.length} obras, ${content.categories.length} categorias.`);

  if (warnings.length > 0) {
    console.warn(`Avisos del Excel: ${warnings.length}`);
    warnings.forEach((warning) => {
      console.warn(`Fila ${warning.row}${warning.field ? ` (${warning.field})` : ""}: ${warning.message}`);
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
