"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { SocialIcon } from "@/components/ui/SocialIcon";
import { siteConfig, socialLinks } from "@/content/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Mi obra" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Encargos" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <aside className="fixed bottom-0 left-0 top-0 z-50 hidden w-64 flex-col border-r border-blueberry/10 bg-porcelain/78 px-6 py-8 backdrop-blur-2xl lg:w-80 lg:px-8 md:flex">
        <Link href="/" className="focus-ring mx-auto block rounded-full" aria-label="Ir a la home">
          <span className="relative block h-32 w-32 overflow-hidden rounded-full bg-paper/60 lg:h-44 lg:w-44">
            <Image src={siteConfig.logo} alt={siteConfig.name} fill sizes="176px" className="object-contain p-3" priority />
          </span>
        </Link>

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
                  active ? "text-blueberry" : "text-ash hover:text-blueberry",
                )}
              >
                <span className={cn("h-px transition-all", active ? "w-9 bg-blueberry" : "w-4 bg-ash/40 group-hover:w-9 group-hover:bg-blueberry")} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <a className="mb-5 block font-serif text-xl italic text-ink transition hover:text-blueberry" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-blueberry/15 text-blueberry transition hover:-translate-y-0.5 hover:bg-blueberry hover:text-porcelain"
                >
                  <SocialIcon label={social.label} className="h-5 w-5" />
                </a>
              );
            })}
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
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-blueberry text-porcelain"
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
