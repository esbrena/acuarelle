import fs from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import JSZip from "jszip";

const rootDir = process.cwd();
const staticDir = path.join(rootDir, "out");
const distDir = path.join(rootDir, "dist");
const zipPath = path.join(distDir, "acuarelle-ovh.zip");

function assertStaticBuildExists() {
  if (!fs.existsSync(staticDir)) {
    throw new Error("No existe la carpeta out/. Ejecuta primero npm run build.");
  }

  const indexPath = path.join(staticDir, "index.html");

  if (!fs.existsSync(indexPath)) {
    throw new Error("La carpeta out/ no parece contener una web estatica valida.");
  }
}

async function createZip() {
  assertStaticBuildExists();
  await mkdir(distDir, { recursive: true });

  if (fs.existsSync(zipPath)) {
    fs.rmSync(zipPath);
  }

  const zip = new JSZip();
  await addDirectoryToZip(zip, staticDir);
  zip.file("LEEME-OVH.txt", ovhInstructions());

  const buffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: {
      level: 9,
    },
  });
  await writeFile(zipPath, buffer);

  const sizeMb = fs.statSync(zipPath).size / 1024 / 1024;
  console.log("");
  console.log("ZIP listo para OVH:");
  console.log(`  ${path.relative(rootDir, zipPath)} (${sizeMb.toFixed(2)} MB)`);
  console.log("");
  console.log("Sube el contenido de este ZIP a la carpeta www/ de OVH.");
}

async function addDirectoryToZip(zip: JSZip, directory: string, prefix = "") {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    const zipPathName = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      await addDirectoryToZip(zip, absolutePath, zipPathName);
      continue;
    }

    if (entry.isFile()) {
      zip.file(zipPathName, await readFile(absolutePath));
    }
  }
}

function ovhInstructions() {
  return [
    "INSTRUCCIONES PARA OVH",
    "",
    "1. Entra en tu hosting OVH por FTP o desde el gestor de archivos.",
    "2. Abre la carpeta www/.",
    "3. Borra o aparta los archivos de la web antigua.",
    "4. Descomprime este ZIP.",
    "5. Sube TODO el contenido descomprimido dentro de www/.",
    "",
    "Importante:",
    "- No subas la carpeta out/ entera.",
    "- Dentro de www/ deben quedar index.html, portfolio/, obra/, categoria/, _next/, artworks/, etc.",
    "- Si cambias el Excel o las imagenes, vuelve a ejecutar npm run ovh:zip y sube el ZIP nuevo.",
    "",
  ].join("\n");
}

createZip().catch((error) => {
  console.error(error);
  process.exit(1);
});
