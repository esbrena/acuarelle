import type { SocialLink } from "@/lib/types";

export const siteConfig = {
  name: "Acuarelle",
  artist: "Esther Garcia Brena",
  title: "Acuarelle - Acuarelas emocionales",
  description:
    "Portfolio artistico de Esther Garcia Brena: acuarelas, ilustraciones por encargo y escenas emocionales llenas de magia.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.acuarelle.es",
  email: "acuarelle@gmail.com",
  imageBasePath: "/artworks",
  excelPath: "content/obras.xlsx",
  artistImage: "/artist/esther.jpg",
  logo: "/brand/logo_acuarelle.png",
  heroStatement:
    "Acuarelas emocionales para convertir animales, recuerdos y paisajes interiores en escenas que respiran.",
  editorialQuote:
    "Cada obra nace como una pausa: agua, pigmento y una historia pequena que busca quedarse.",
};

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
    "Soy Esther, ilustradora, disenadora y artista apasionada por capturar emociones a traves de la acuarela. Mi trabajo se centra en crear escenas unicas y evocadoras que transforman simples ideas en momentos llenos de magia.",
  statement:
    "Me especializo en acuarelas por encargo, donde cada obra comienza con un animal como protagonista. Desde un majestuoso leon hasta un delicado colibri, cada animal inspira una historia personalizada que refleja la esencia de quien la encarga.",
  trajectory: [
    "Ilustracion emocional y retrato animal en acuarela.",
    "Laminas listas para decorar espacios sensibles y contemporaneos.",
    "Obra personalizada para regalos, proyectos editoriales y piezas familiares.",
  ],
  exhibitions: [
    "Archivo vivo de obras por encargo",
    "Coleccion Acuarelle",
    "Estudio Esther Garcia Brena",
  ],
  philosophy:
    "Trabajo con capas suaves, silencios visuales y pequenos gestos de color. La acuarela conserva el azar del agua y por eso cada pieza mantiene algo vivo.",
};

export const contactContent = {
  title: "Encargar una obra empieza con una conversacion tranquila.",
  intro:
    "Si te gusta mi trabajo y te gustaria contar conmigo para un proyecto especifico, encargar una ilustracion personalizada o simplemente saludar, escribeme y vemos juntas como convertir tu idea en una pieza especial.",
  formNote:
    "Formulario opcional preparado para conectar con tu proveedor favorito. Mientras tanto, el correo directo es la via principal.",
};
