import Link from "next/link";

import { Reveal } from "@/components/ui/Reveal";
import { homeIntro, offerCards } from "@/content/site";

export function PersonalOffer() {
  return (
    <section className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-10 max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-clay">{homeIntro.eyebrow}</p>
          <h2 className="font-serif text-5xl leading-[0.95] md:text-8xl">{homeIntro.title}</h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ash">{homeIntro.text}</p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {offerCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.06}
              className="group rounded-[2.2rem] border border-ink/10 bg-porcelain/68 p-7 transition duration-500 hover:-translate-y-1 hover:bg-porcelain"
            >
              <span className="text-xs uppercase tracking-[0.32em] text-clay">0{index + 1}</span>
              <h3 className="mt-8 font-serif text-4xl leading-none">{card.title}</h3>
              <p className="mt-5 leading-7 text-ash">{card.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Link
            href="/contacto"
            className="inline-flex rounded-full bg-ink px-6 py-4 text-xs uppercase tracking-[0.3em] text-porcelain transition hover:bg-clay"
          >
            Pedir informacion
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
