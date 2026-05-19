import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PersonalOffer } from "@/components/sections/PersonalOffer";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Biografía, statement artístico y filosofía de Esther García Brena.",
};

export default function AboutPage() {
  return (
    <section className="px-4 pb-24 pt-28 md:px-8 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-8">
          <div className="relative h-[58vh] min-h-[26rem] overflow-hidden rounded-[24px]">
            <Image src={siteConfig.artistImage} alt={siteConfig.artist} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.32em] text-blueberry">Artista e ilustradora</p>
          <h1 className="mt-2 font-serif text-4xl leading-none text-ink sm:text-5xl">{siteConfig.artist}</h1>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.36em] text-blueberry">{aboutContent.eyebrow}</p>
            <h2 className="max-w-3xl font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">{aboutContent.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 grid gap-6 text-base leading-8 text-ash sm:text-lg">
            <p>{aboutContent.biography}</p>
            <p>{aboutContent.statement}</p>
            <p className="font-serif text-3xl italic leading-tight text-ink sm:text-4xl">{aboutContent.philosophy}</p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-ink/10 bg-porcelain/64 p-7">
              <h3 className="mb-5 text-xs uppercase tracking-[0.32em] text-blueberry">Trayectoria</h3>
              <ul className="space-y-4 text-ash">
                {aboutContent.trajectory.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="rounded-[2rem] border border-ink/10 bg-porcelain/64 p-7">
              <h3 className="mb-5 text-xs uppercase tracking-[0.32em] text-blueberry">Trabajo</h3>
              <ul className="space-y-4 text-ash">
                {aboutContent.exhibitions.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="mt-10">
            <Link href="/contacto" className="inline-flex rounded-full bg-blueberry px-6 py-4 text-xs uppercase tracking-[0.3em] text-porcelain transition hover:-translate-y-0.5 hover:bg-blueberry/90">
              Hablemos de una obra
            </Link>
          </Reveal>
        </div>
      </div>
      <PersonalOffer />
    </section>
  );
}
