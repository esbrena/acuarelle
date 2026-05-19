import type { SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Acuarelle",
  artist: "Esther García Brena",
  title: "Acuarelle - Acuarelas emocionales",
  description:
    "Acuarelas e ilustraciones de Esther García Brena: láminas personalizadas, prints y escenas emocionales llenas de magia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.acuarelle.es",
  email: "acuarelle@gmail.com",
  imageBasePath: "/artworks",
  excelPath: "content/obras.xlsx",
  artistImage: "/artist/esther.jpg",
  logo: "/brand/logo_acuarelle.png",
  heroStatement:
    "Hola, soy Esther. Pinto acuarelas personalizadas, retratos de animales y prints para llenar tu casa de pequeñas historias.",
  editorialQuote:
    "Cada lámina nace de una idea sencilla: un animal querido, una frase, un recuerdo o una escena que merece quedarse cerca.",
};

export const homeIntro = {
  eyebrow: "Láminas personalizadas y prints",
  title: "Acuarelas con alma para regalar, decorar y recordar.",
  text: "Trabajo con encargos personalizados y pequeñas colecciones de prints. Piezas suaves, narrativas y llenas de detalles para niñas, niños y personas adultas que conservan la imaginación cerca.",
};

export const offerCards = [
  {
    title: "Láminas personalizadas",
    text: "Creo una pieza a partir de tu animal, tu historia o esa idea que quieres transformar en imagen.",
  },
  {
    title: "Prints disponibles",
    text: "Reproducciones cuidadas de obras seleccionadas, listas para enmarcar y vivir en casa.",
  },
  {
    title: "Regalos con historia",
    text: "Ilustraciones pensadas para cumpleaños, nacimientos, recuerdos familiares o detalles especiales.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
  },
];

export const aboutContent = {
  eyebrow: "Sobre mí",
  title: "Pintar una emoción hasta que encuentre su forma.",
  biography:
    "Soy Esther, ilustradora, diseñadora y artista. Pinto animales, escenas cotidianas y pequeños universos en acuarela, siempre buscando esa mezcla de ternura, humor y emoción que convierte una imagen en recuerdo.",
  statement:
    "Me gusta trabajar desde lo personal: una mascota, una casa, una frase, una aventura imaginada. A partir de ahí creo láminas personalizadas y prints que puedan acompañarte en el día a día.",
  trajectory: [
    "Acuarelas personalizadas con animales como protagonistas.",
    "Prints y láminas listas para enmarcar.",
    "Ilustración para regalos, proyectos editoriales y piezas familiares.",
  ],
  exhibitions: [
    "Encargos personalizados",
    "Colecciones de prints",
    "Estudio Acuarelle",
  ],
  philosophy:
    "Trabajo con capas suaves, silencios visuales y pequeños gestos de color. La acuarela conserva el azar del agua y por eso cada pieza mantiene algo vivo, imperfecto y cercano.",
};

export const contactContent = {
  title: "¿Quieres una lámina personalizada o un print?",
  intro:
    "Cuéntame qué imagen tienes en la cabeza: una mascota, una escena, un regalo, una frase o una idea pequeña. Te responderé con calma para ver formato, técnica y disponibilidad.",
  formNote:
    "Para encargos personalizados, escribe con una breve idea y, si tienes, alguna foto de referencia. También puedes preguntar por prints disponibles.",
};
