import Link from "next/link";
import ProductCard from "@/components/product-card";
import { products, companyStats } from "@/lib/products";

const whyArmex = [
  { title: "Transparencia total", desc: "Contrato legal firmado electrónicamente antes de cualquier movimiento. Tus condiciones quedan escritas." },
  { title: "Rendimientos consistentes", desc: "Tasas claras desde el primer día. Sin sorpresas, sin letra pequeña, sin condicionantes ocultos." },
  { title: "Capital siempre protegido", desc: "En Capital Protegido, tu inversión inicial regresa íntegra al vencimiento. El riesgo de mercado es nuestro." },
  { title: "Atención personalizada", desc: "Tu asesor te acompaña en cada paso. Somos una firma pequeña por decisión: cada cliente importa." },
];

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1A30] via-[#080C18] to-[#080C18]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A84C]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1E3A5F]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">
                Inversiones Privadas — Cuernavaca, Morelos
              </span>
            </div>

            <h1
              className="text-6xl md:text-8xl font-light leading-[1.05] text-[#F0EDE6] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Tu capital
              <br />
              <em className="not-italic text-[#C9A84C]">trabaja</em>
              <br />
              por ti
            </h1>

            <p className="text-lg text-[#8A9BB0] max-w-xl leading-relaxed mb-12">
              Rendimientos mensuales desde{" "}
              <span className="text-[#E8C97A]" style={{ fontFamily: "var(--font-dm-mono)" }}>1.75%</span>
              {" "}hasta{" "}
              <span className="text-[#E8C97A]" style={{ fontFamily: "var(--font-dm-mono)" }}>3.33%</span>.
              Contratos privados, capital protegido, atención personalizada.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/productos" className="px-8 py-4 bg-[#C9A84C] text-[#080C18] font-medium tracking-wide hover:bg-[#E8C97A] transition-colors duration-300">
                Ver productos
              </Link>
              <Link href="/contacto" className="px-8 py-4 border border-[#1E2D45] text-[#8A9BB0] tracking-wide hover:border-[#C9A84C]/50 hover:text-[#F0EDE6] transition-all duration-300">
                Hablar con un asesor
              </Link>
            </div>
          </div>

          {/* Rates bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E2D45]">
            {[
              { product: "Capital Impulso", rate: "1.75%" },
              { product: "Capital Planificado", rate: "hasta 3.00%" },
              { product: "Capital Protegido", rate: "hasta 2.16%" },
              { product: "Capital Superior", rate: "hasta 3.33%" },
            ].map((item) => (
              <div key={item.product} className="bg-[#0D1526] px-6 py-5">
                <p className="text-[10px] tracking-widest text-[#8A9BB0] uppercase mb-1">{item.product}</p>
                <p className="text-2xl text-[#C9A84C]" style={{ fontFamily: "var(--font-dm-mono)" }}>{item.rate}</p>
                <p className="text-xs text-[#8A9BB0] mt-0.5">mensual</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0D1526] border-y border-[#1E2D45] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-light text-[#C9A84C] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {stat.value}
                </p>
                <p className="text-xs tracking-wide text-[#8A9BB0] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTOS ── */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Nuestros productos</span>
          </div>
          <h2 className="text-5xl font-light text-[#F0EDE6]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Elige el que se adapta
            <br />a tu situación
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E2D45]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/productos" className="inline-flex items-center gap-2 text-sm text-[#8A9BB0] hover:text-[#C9A84C] transition-colors">
            Ver todos los detalles y condiciones →
          </Link>
        </div>
      </section>

      {/* ── POR QUÉ ARMEX ── */}
      <section className="bg-[#0D1526] border-y border-[#1E2D45] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Por qué Armex</span>
            </div>
            <h2 className="text-5xl font-light text-[#F0EDE6]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Invertir con confianza
              <br />no debería ser complicado
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2D45]">
            {whyArmex.map((item) => (
              <div key={item.title} className="bg-[#0D1526] p-8">
                <div className="w-6 h-px bg-[#C9A84C] mb-6" />
                <h3 className="text-2xl font-medium text-[#F0EDE6] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1526] to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#C9A84C] mx-auto mb-10" />
          <h2 className="text-5xl md:text-6xl font-light text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            Empieza hoy.
            <br />Tu primer rendimiento
            <br /><em className="not-italic text-[#C9A84C]">en 30 días.</em>
          </h2>
          <p className="text-[#8A9BB0] mb-10 text-lg">
            Agenda una reunión sin compromiso con uno de nuestros asesores.
          </p>
          <Link href="/contacto" className="inline-block px-10 py-4 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-sm hover:bg-[#E8C97A] transition-colors duration-300">
            Contactar ahora
          </Link>
        </div>
      </section>

    </div>
  );
}
