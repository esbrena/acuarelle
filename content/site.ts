import type { SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Acuarelle",
  artist: "Esther Garcia Brena",
  title: "Acuarelle - Acuarelas emocionales",
  description:
    "Acuarelas e ilustraciones de Esther Garcia Brena: laminas personalizadas, prints y escenas emocionales llenas de magia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.acuarelle.es",
  email: "acuarelle@gmail.com",
  imageBasePath: "/artworks",
  excelPath: "content/obras.xlsx",
  artistImage: "/artist/esther.jpg",
  logo: "/brand/logo_acuarelle.png",
  heroStatement:
    "Hola, soy Esther. Pinto acuarelas personalizadas, retratos de animales y prints para llenar tu casa de pequenas historias.",
  editorialQuote:
    "Cada lamina nace de una idea sencilla: un animal querido, una frase, un recuerdo o una escena que merece quedarse cerca.",
};

export const homeIntro = {
  eyebrow: "Laminas personalizadas y prints",
  title: "Acuarelas con alma para regalar, decorar y recordar.",
  text: "Trabajo con encargos personalizados y pequenas colecciones de prints. Piezas suaves, narrativas y llenas de detalles para personas que quieren algo hecho con calma.",
};

export const offerCards = [
  {
    title: "Laminas personalizadas",
    text: "Creo una pieza a partir de tu animal, tu historia o esa idea que quieres transformar en imagen.",
  },
  {
    title: "Prints disponibles",
    text: "Reproducciones cuidadas de obras seleccionadas, listas para enmarcar y vivir en casa.",
  },
  {
    title: "Regalos con historia",
    text: "Ilustraciones pensadas para cumpleanos, nacimientos, recuerdos familiares o detalles especiales.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
  },
  {
    label: "Esbrena",
    href: "https://www.esbrena.es/",
  },
];

export const aboutContent = {
  eyebrow: "Sobre mi",
  title: "Pintar una emocion hasta que encuentre su forma.",
  biography:
    "Soy Esther, ilustradora, disenadora y artista. Pinto animales, escenas cotidianas y pequenos universos en acuarela, siempre buscando esa mezcla de ternura, humor y emocion que convierte una imagen en recuerdo.",
  statement:
    "Me gusta trabajar desde lo personal: una mascota, una casa, una frase, una aventura imaginada. A partir de ahi creo laminas personalizadas y prints que puedan acompanarte en el dia a dia.",
  trajectory: [
    "Acuarelas personalizadas con animales como protagonistas.",
    "Prints y laminas listas para enmarcar.",
    "Ilustracion para regalos, proyectos editoriales y piezas familiares.",
  ],
  exhibitions: [
    "Encargos personalizados",
    "Colecciones de prints",
    "Estudio Acuarelle",
  ],
  philosophy:
    "Trabajo con capas suaves, silencios visuales y pequenos gestos de color. La acuarela conserva el azar del agua y por eso cada pieza mantiene algo vivo, imperfecto y cercano.",
};

export const contactContent = {
  title: "Quieres una lamina personalizada o un print?",
  intro:
    "Cuentame que imagen tienes en la cabeza: una mascota, una escena, un regalo, una frase o una idea pequena. Te respondere con calma para ver formato, tecnica y disponibilidad.",
  formNote:
    "Para encargos personalizados, escribe con una breve idea y, si tienes, alguna foto de referencia. Tambien puedes preguntar por prints disponibles.",
};
