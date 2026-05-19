import Link from "next/link";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig, socialLinks } from "@/content/site";
import { getCategories } from "@/lib/content";

export function Footer() {
  const categories = getCategories().slice(0, 6);

  return (
    <footer className="px-4 pb-8 pt-12 md:px-8 md:pt-16">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[24px] bg-blueberry p-6 text-porcelain shadow-xl shadow-blueberry/10 sm:p-8 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-porcelain/65">Acuarelle</p>
          <h2 className="max-w-xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Acuarelas personalizadas y prints para llenar tu casa de historias.
          </h2>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-porcelain/65">Colecciones</p>
          <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-col">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categoria/${category.slug}`} className="text-sm text-porcelain/78 transition hover:text-porcelain">
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-porcelain/65">Contacto</p>
          <a className="mb-6 block text-lg" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-porcelain/25 text-porcelain/82 transition hover:border-porcelain/70 hover:bg-porcelain hover:text-blueberry"
                >
                  <SocialIcon label={social.label} className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
