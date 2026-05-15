"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/productos", label: "Productos" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/citas", label: "Agendar cita" },
  { href: "/contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080C18]/95 backdrop-blur-md border-b border-[#1E2D45]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-2xl font-bold tracking-widest text-[#C9A84C] group-hover:text-[#E8C97A] transition-colors"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            ARMEX
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#8A9BB0] uppercase">
            Capital
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/portal"
            className="text-sm text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors"
          >
            Mi cuenta
          </Link>
          <Link
            href="/contacto"
            className="text-sm px-5 py-2.5 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080C18] transition-all duration-300 tracking-wide"
          >
            Invertir ahora
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#8A9BB0] hover:text-[#F0EDE6]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`block h-px bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D1526] border-t border-[#1E2D45] px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors py-2 border-b border-[#1E2D45]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/portal"
            onClick={() => setOpen(false)}
            className="text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors py-2"
          >
            Mi cuenta
          </Link>
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="text-center px-5 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080C18] transition-all"
          >
            Invertir ahora
          </Link>
        </div>
      )}
    </nav>
  );
}
