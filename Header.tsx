"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

const links = [
  { href: "/osteo", label: "Ostéopathie" },
  { href: "/kine", label: "Kinésithérapie" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const link = "text-sm tracking-[0.18em] uppercase text-ivory/80 transition-colors duration-300 hover:text-steel";
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7 md:px-10">
      <Link href="/" className="font-serif text-xl tracking-[0.3em]" onClick={() => setOpen(false)}>
        {site.name}
      </Link>
      <nav aria-label="Navigation principale" className="hidden gap-10 md:flex">
        {links.map((l) => (<Link key={l.href} href={l.href} className={link}>{l.label}</Link>))}
      </nav>
      <button
        className="-mr-3 p-3 text-xs tracking-[0.2em] uppercase md:hidden"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen(!open)}
      >
        {open ? "Fermer" : "Menu"}
      </button>
      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="absolute inset-x-0 top-[76px] z-10 flex flex-col gap-2 bg-night px-6 pb-8 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`${link} py-4 text-base`} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
