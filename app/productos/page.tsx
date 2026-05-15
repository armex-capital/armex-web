import Link from "next/link";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata = {
  title: "Productos — Armex Capital",
  description: "Capital Impulso, Planificado, Protegido y Superior. Rendimientos mensuales desde 1.75% hasta 3.33%.",
};

export default function ProductosPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Portafolio de productos</span>
          </div>
          <h1 className="text-6xl font-light text-[#F0EDE6] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
            Nuestros productos
          </h1>
          <p className="text-[#8A9BB0] max-w-xl leading-relaxed">
            Dos familias de productos diseñadas para diferentes perfiles de inversionista.
            Elige entre crecimiento acumulado o flujo constante de ingresos.
          </p>
        </div>

        {/* Familia Planificado */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-light text-[#F0EDE6]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Familia Planificado
            </h2>
            <div className="flex-1 h-px bg-[#1E2D45]" />
            <span className="text-xs text-[#8A9BB0]">Capital crece acumulado</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2D45]">
            {products.filter(p => ["impulso", "planificado", "superior"].includes(p.id)).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* Familia Protegido */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-light text-[#F0EDE6]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Familia Protegido
            </h2>
            <div className="flex-1 h-px bg-[#1E2D45]" />
            <span className="text-xs text-[#8A9BB0]">Flujo constante, capital intacto</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2D45] max-w-2xl">
            {products.filter(p => p.id === "protegido").map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
            {/* Placeholder Capital Familiar */}
            <div className="bg-[#0D1526] p-8 border border-[#1E2D45] flex flex-col justify-center items-center gap-3">
              <p className="text-xs tracking-widest text-[#C9A84C] uppercase">Capital Familiar</p>
              <p className="text-2xl text-[#F0EDE6] text-center" style={{ fontFamily: "var(--font-cormorant)" }}>
                Clientes de confianza
              </p>
              <p className="text-sm text-[#8A9BB0] text-center">
                Tasas preferentes desde $20,000 MXN por relación, no solo por monto.
              </p>
              <Link href="/contacto" className="text-xs text-[#C9A84C] hover:text-[#E8C97A] transition-colors mt-2">
                Preguntar disponibilidad →
              </Link>
            </div>
          </div>
        </div>

        {/* Nota legal */}
        <div className="border border-[#1E2D45] bg-[#0D1526] p-6 text-xs text-[#8A9BB0] leading-relaxed">
          <strong className="text-[#F0EDE6]">Nota importante:</strong> Todos los contratos son de carácter
          estrictamente privado. No constituyen oferta pública de valores ni captación masiva de recursos.
          Las tasas de rendimiento son variables y están referenciadas al desempeño de las operaciones
          corporativas de Armex Capital. Se aplica retención fiscal del 20% sobre rendimientos (ISR).
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#8A9BB0] mb-6">¿Listo para empezar? Tu asesor te guía en todo el proceso.</p>
          <Link href="/contacto" className="inline-block px-10 py-4 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-sm hover:bg-[#E8C97A] transition-colors">
            Contactar un asesor
          </Link>
        </div>

      </div>
    </div>
  );
}
