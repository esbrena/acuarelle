import Link from "next/link";

import { siteConfig, socialLinks } from "@/content/site";
import { getCategories } from "@/lib/content";

export function Footer() {
  const categories = getCategories().slice(0, 6);

  return (
    <footer className="px-4 pb-8 pt-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] bg-night p-8 text-porcelain md:grid-cols-[1.3fr_0.7fr_0.7fr] md:p-12">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-porcelain/50">Acuarelle</p>
          <h2 className="max-w-xl font-serif text-5xl leading-none md:text-7xl">
            Acuarelas personalizadas y prints para llenar tu casa de historias.
          </h2>
        </div>
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-porcelain/50">Colecciones</p>
          <div className="flex flex-col gap-3">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categoria/${category.slug}`} className="text-sm text-porcelain/72 transition hover:text-porcelain">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-porcelain/50">Contacto</p>
          <a className="mb-6 block text-lg" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-porcelain/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-porcelain/70 transition hover:border-porcelain/60 hover:text-porcelain"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
