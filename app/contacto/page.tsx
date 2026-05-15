import type { Metadata } from "next";
import { Mail } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { contactContent, siteConfig, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto para encargos, proyectos e ilustraciones personalizadas de Acuarelle.",
};

export default function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-28 md:px-8 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-clay">Contacto</p>
          <h1 className="max-w-5xl font-serif text-6xl leading-[0.9] md:text-9xl">{contactContent.title}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ash">{contactContent.intro}</p>
        </Reveal>

        <Reveal delay={0.12} className="glass-panel rounded-[2.5rem] p-7 md:p-9">
          <div className="mb-8 grid h-14 w-14 place-items-center rounded-full bg-ink text-porcelain">
            <Mail size={20} />
          </div>
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-clay">Email directo</p>
          <a href={`mailto:${siteConfig.email}`} className="font-serif text-4xl italic text-ink md:text-5xl">
            {siteConfig.email}
          </a>
          <p className="mt-8 leading-7 text-ash">{contactContent.formNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-ash transition hover:border-clay hover:text-clay"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-16 max-w-7xl rounded-[3rem] bg-night p-8 text-porcelain md:p-12">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-porcelain/50">Para empezar</p>
        <div className="grid gap-6 md:grid-cols-3">
          {["Que animal, recuerdo o paisaje quieres convertir en obra?", "Que formato imaginas para la pieza?", "Hay una fecha o intencion especial detras del encargo?"].map((question) => (
            <div key={question} className="rounded-[2rem] border border-porcelain/10 p-6 text-porcelain/72">
              {question}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
