import type { Metadata } from "next";
import { Heart, Mail } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";
import { contactContent, siteConfig, socialLinks } from "@/content/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacto para encargos, proyectos e ilustraciones personalizadas de Acuarelle.",
};

export default function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-28 md:px-8 md:pt-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.36em] text-blueberry">Encargos</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.02] sm:text-5xl lg:text-6xl">{contactContent.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ash sm:text-lg">{contactContent.intro}</p>

          <div className="mt-8 rounded-[24px] border border-blueberry/10 bg-porcelain/72 p-5 sm:p-6">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-blueberry text-porcelain">
              <Mail size={18} />
            </div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-blueberry">Email directo</p>
            <a href={`mailto:${siteConfig.email}`} className="font-serif text-3xl italic text-ink transition hover:text-blueberry sm:text-4xl">
              {siteConfig.email}
            </a>
            <p className="mt-6 leading-7 text-ash">{contactContent.formNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-blueberry/15 px-4 py-2 text-xs uppercase tracking-[0.24em] text-blueberry transition hover:bg-blueberry hover:text-porcelain"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="overflow-hidden rounded-[24px] border border-blueberry/10 bg-porcelain/82 shadow-xl shadow-blueberry/5">
          <iframe
            title="Formulario de encargos Acuarelle"
            src="https://form.jotform.com/241851531409353"
            className="h-[760px] w-full border-0 sm:h-[820px] lg:h-[860px]"
            loading="lazy"
          />
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-12 max-w-7xl rounded-[24px] bg-blueberry p-6 text-porcelain sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-porcelain/15">
            <Heart size={18} />
          </span>
          <p className="text-xs uppercase tracking-[0.34em] text-porcelain/70">Para empezar</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {["¿Qué animal, recuerdo o paisaje quieres convertir en obra?", "¿Qué formato imaginas para la pieza?", "¿Hay una fecha o intención especial detrás del encargo?"].map((question) => (
            <div key={question} className="rounded-[20px] border border-porcelain/18 bg-porcelain/8 p-5 text-porcelain/82">
              {question}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
