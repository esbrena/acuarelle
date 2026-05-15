"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig, socialLinks } from "@/content/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Mi obra" },
  { href: "/sobre-mi", label: "Sobre mi" },
  { href: "/contacto", label: "Encargos" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-80 flex-col border-r border-ink/10 bg-porcelain/72 px-8 py-8 backdrop-blur-2xl md:flex">
        <Link href="/" className="focus-ring w-fit rounded-full">
          <span className="relative mb-5 block h-20 w-20 overflow-hidden rounded-full bg-paper">
            <Image src={siteConfig.logo} alt={siteConfig.name} fill sizes="80px" className="object-contain p-2" />
          </span>
          <span className="block font-serif text-4xl italic leading-none">{siteConfig.name}</span>
        </Link>

        <p className="mt-5 max-w-48 text-sm leading-6 text-ash">Acuarelas personalizadas, prints y pequenas historias ilustradas.</p>

        <nav className="mt-14 flex flex-col items-start gap-3">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/portfolio" && (pathname.startsWith("/obra") || pathname.startsWith("/categoria")));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring group flex items-center gap-3 rounded-full py-1 text-sm uppercase tracking-[0.3em] transition",
                  active ? "text-ink" : "text-ash hover:text-ink",
                )}
              >
                <span className={cn("h-px transition-all", active ? "w-9 bg-ink" : "w-4 bg-ash/40 group-hover:w-9 group-hover:bg-ink")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <a className="mb-5 block font-serif text-2xl italic text-ink transition hover:text-clay" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <div className="flex flex-col items-start gap-2">
            {socialLinks.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-[0.26em] text-ash transition hover:text-ink"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </aside>

      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:hidden">
        <nav className="glass-panel mx-auto flex items-center justify-between rounded-full px-3 py-3">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-porcelain">
              <Image src={siteConfig.logo} alt={siteConfig.name} fill sizes="40px" className="object-contain p-1.5" />
            </span>
            <span className="font-serif text-xl italic tracking-tight">{siteConfig.name}</span>
          </Link>

          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-ink text-porcelain"
            onClick={() => setOpen((value) => !value)}
            aria-label="Abrir menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-paper/95 px-5 pt-28 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="mx-auto flex max-w-sm flex-col gap-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={item.href}
                    className="block rounded-[2rem] border border-ink/10 bg-porcelain/70 px-6 py-5 font-serif text-4xl italic"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
