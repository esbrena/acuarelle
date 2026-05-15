"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/sobre-mi", label: "Sobre mi" },
  { href: "/contacto", label: "Contacto" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-3">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-full" onClick={() => setOpen(false)}>
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-porcelain">
              <Image src={siteConfig.logo} alt={siteConfig.name} fill sizes="40px" className="object-contain p-1.5" />
            </span>
            <span className="font-serif text-xl italic tracking-tight">{siteConfig.name}</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "focus-ring rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em] transition-colors",
                    active ? "bg-ink text-porcelain" : "text-ash hover:bg-ink/5 hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="focus-ring grid h-10 w-10 place-items-center rounded-full bg-ink text-porcelain md:hidden"
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
