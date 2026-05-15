import fs from "node:fs/promises";
import path from "node:path";

import ExcelJS from "exceljs";

import { siteConfig } from "@/content/site";

const headers = [
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

const rows = [
  [
    "Caminos Cruzados",
    "acuarela,animal,narrativa",
    "Una composicion ludica donde el movimiento del tablero se convierte en una pequena escena de encuentro y estrategia.",
    "Papel de algodon",
    "Acuarela y tinta",
    "30 x 40 cm",
    "si",
    "si",
    "ajedrez.png",
    "si",
    "",
    "2026",
  ],
  [
    "Mar de Ilusiones",
    "acuarela,polar,paisaje",
    "Una pieza silenciosa de atmosfera fria, pensada como un refugio visual entre hielo, agua y luz.",
    "Papel grano fino",
    "Acuarela",
    "40 x 50 cm",
    "no",
    "si",
    "oso-polar.png",
    "si",
    "",
    "2025",
  ],
  [
    "Bajo las Estrellas",
    "acuarela,animal,nocturno",
    "Un leon contemplativo bajo un cielo profundo; fuerza, calma y misterio en una misma respiracion.",
    "Papel de algodon",
    "Acuarela con gouache",
    "30 x 40 cm",
    "si",
    "si",
    "leon.png",
    "si",
    "",
    "2025",
  ],
  [
    "Aventura Cosmica",
    "ilustracion,animal,infantil",
    "Una oveja viajera suspendida en un universo suave, creada para provocar ternura y asombro.",
    "Papel prensado en frio",
    "Acuarela",
    "24 x 32 cm",
    "si",
    "si",
    "oveja.png",
    "no",
    "",
    "2024",
  ],
  [
    "Aventuras sobre Ruedas",
    "ilustracion,animal,editorial",
    "Energia, juego y movimiento para una escena con espiritu de cuento contemporaneo.",
    "Papel de algodon",
    "Acuarela y lapiz",
    "30 x 30 cm",
    "no",
    "si",
    "conejo.png",
    "no",
    "",
    "2024",
  ],
  [
    "Sabores Orientales",
    "acuarela,animal,cocina",
    "Un panda en una composicion de aroma editorial, delicada y amable.",
    "Papel grano satinado",
    "Acuarela",
    "21 x 30 cm",
    "si",
    "si",
    "panda.png",
    "no",
    "",
    "2024",
  ],
  [
    "Luz de Luna",
    "acuarela,animal,nocturno",
    "Un gato atravesado por una luz quieta; una imagen intima para mirar despacio.",
    "Papel de algodon",
    "Acuarela",
    "30 x 40 cm",
    "si",
    "si",
    "gato.png",
    "si",
    "",
    "2026",
  ],
  [
    "Surcando los Cielos",
    "acuarela,animal,viaje",
    "Una escena de zorro y aire, con lectura cinematografica y una paleta luminosa.",
    "Papel grano fino",
    "Acuarela y tinta",
    "40 x 50 cm",
    "no",
    "si",
    "zorro.png",
    "no",
    "",
    "2025",
  ],
  [
    "Rugiendo en la Carretera",
    "ilustracion,animal,aventura",
    "Una pieza de caracter jugueton con composicion dinamica y sentido de travesia.",
    "Papel prensado en frio",
    "Acuarela",
    "30 x 40 cm",
    "si",
    "si",
    "cocodrilo.png",
    "no",
    "",
    "2024",
  ],
];

async function main() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Acuarelle";
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet("obras");
  worksheet.addRow(headers);
  rows.forEach((row) => worksheet.addRow(row));

  worksheet.getRow(1).font = { bold: true, color: { argb: "FF32261E" } };
  worksheet.getRow(1).fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FFF4EDE4" },
  };
  worksheet.views = [{ state: "frozen", ySplit: 1 }];

  worksheet.columns.forEach((column) => {
    column.width = Math.max(18, String(column.header ?? "").length + 6);
  });

  const outputPath = path.join(process.cwd(), siteConfig.excelPath);
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await workbook.xlsx.writeFile(outputPath);
  console.log(`Excel de ejemplo creado en ${siteConfig.excelPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
