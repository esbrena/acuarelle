import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PersonalOffer } from "@/components/sections/PersonalOffer";
import { Reveal } from "@/components/ui/Reveal";
import { aboutContent, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Sobre mi",
  description: "Biografia, statement artistico y filosofia de Esther Garcia Brena.",
};

export default function AboutPage() {
  return (
    <section className="px-4 pb-24 pt-28 md:px-8 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="relative overflow-hidden rounded-[3rem] bg-night p-4 shadow-2xl shadow-ink/12 lg:sticky lg:top-32">
          <div className="relative h-[68vh] min-h-[34rem] overflow-hidden rounded-[2.4rem]">
            <Image src={siteConfig.artistImage} alt={siteConfig.artist} fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-porcelain">
              <p className="text-xs uppercase tracking-[0.34em] text-porcelain/60">Artista</p>
              <h1 className="mt-3 font-serif text-5xl leading-none md:text-7xl">{siteConfig.artist}</h1>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.4em] text-clay">{aboutContent.eyebrow}</p>
            <h2 className="font-serif text-6xl leading-[0.9] md:text-9xl">{aboutContent.title}</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 grid gap-8 text-lg leading-8 text-ash md:text-xl">
            <p>{aboutContent.biography}</p>
            <p>{aboutContent.statement}</p>
            <p className="font-serif text-4xl italic leading-tight text-ink md:text-5xl">{aboutContent.philosophy}</p>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[2rem] border border-ink/10 bg-porcelain/64 p-7">
              <h3 className="mb-5 text-xs uppercase tracking-[0.32em] text-clay">Trayectoria</h3>
              <ul className="space-y-4 text-ash">
                {aboutContent.trajectory.map((item) => (
                  <li key={item} className="border-t border-ink/10 pt-4">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="rounded-[2rem] border border-ink/10 bg-porcelain/64 p-7">
              <h3 className="mb-5 text-xs uppercase tracking-[0.32em] text-clay">Trabajo</h3>
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
            <Link href="/contacto" className="inline-flex rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.3em] text-porcelain transition hover:bg-clay">
              Hablemos de una obra
            </Link>
          </Reveal>
        </div>
      </div>
      <PersonalOffer />
    </section>
  );
}
