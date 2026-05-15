import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0D1526] border-t border-[#1E2D45]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span
                className="text-3xl font-bold tracking-widest text-[#C9A84C]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                ARMEX
              </span>
              <span className="text-[10px] tracking-[0.3em] text-[#8A9BB0] uppercase">
                Capital
              </span>
            </div>
            <p className="text-[#8A9BB0] text-sm leading-relaxed max-w-xs">
              Firma mexicana de inversiones privadas. Gestionamos tu capital con transparencia,
              experiencia y rendimientos consistentes.
            </p>
            <p className="text-[#8A9BB0] text-xs mt-4 leading-relaxed">
              Av. De Los 50 Mts. 100 Torre 3 Piso 7<br />
              Villas Del Lago, CP 62374<br />
              Cuernavaca, Morelos
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs tracking-widest text-[#C9A84C] uppercase mb-4">Productos</p>
            <div className="flex flex-col gap-2">
              {["Capital Impulso", "Capital Planificado", "Capital Protegido", "Capital Superior"].map((p) => (
                <Link key={p} href="/productos" className="text-sm text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors">
                  {p}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-[#C9A84C] uppercase mb-4">Empresa</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/quienes-somos", label: "Quiénes somos" },
                { href: "/contacto", label: "Contacto" },
                { href: "/portal", label: "Portal del cliente" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-xs tracking-widest text-[#C9A84C] uppercase mb-2">Contacto</p>
              <a href="mailto:atclientes@armexcapital.com" className="text-sm text-[#8A9BB0] hover:text-[#F0EDE6] transition-colors">
                atclientes@armexcapital.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1E2D45] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8A9BB0]">
            © 2026 Armex Capital S.A.P.I. de C.V. — Todos los derechos reservados
          </p>
          <p className="text-xs text-[#8A9BB0]">
            RFC: ACA2601135R8
          </p>
        </div>
      </div>
    </footer>
  );
}
