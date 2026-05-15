import Link from "next/link";
import { type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const formatter = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });

  return (
    <div className="group relative border border-[#1E2D45] bg-[#0D1526] p-8 flex flex-col gap-6 hover:border-[#C9A84C]/30 hover:shadow-[0_0_30px_rgba(201,168,76,0.06)] transition-all duration-500">

      {/* Badge */}
      {product.badge && (
        <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase px-2 py-1 border border-[#C9A84C]/40 text-[#C9A84C]">
          {product.badge}
        </span>
      )}

      {/* Color accent */}
      <div className="w-8 h-0.5" style={{ background: product.color }} />

      {/* Name & tagline */}
      <div>
        <h3
          className="text-2xl font-semibold text-[#F0EDE6] mb-1"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#8A9BB0]">{product.tagline}</p>
      </div>

      {/* Rate — el elemento más prominente */}
      <div className="border-t border-[#1E2D45] pt-6">
        <p className="text-[10px] tracking-widest text-[#8A9BB0] uppercase mb-1">Rendimiento</p>
        <div className="flex items-baseline gap-2">
          <span
            className="text-5xl font-light"
            style={{ fontFamily: "var(--font-dm-mono)", color: product.color }}
          >
            {product.rate}
          </span>
          <span className="text-sm text-[#8A9BB0]">{product.rateDetail}</span>
        </div>
      </div>

      {/* Term & amount */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] tracking-widest text-[#8A9BB0] uppercase mb-1">Plazo</p>
          <p className="text-sm font-medium text-[#F0EDE6]">{product.term}</p>
          <p className="text-xs text-[#8A9BB0]">{product.termDetail}</p>
        </div>
        <div>
          <p className="text-[10px] tracking-widest text-[#8A9BB0] uppercase mb-1">Desde</p>
          <p className="text-sm font-medium text-[#F0EDE6]">{formatter.format(product.minAmount)}</p>
          <p className="text-xs text-[#8A9BB0]">MXN</p>
        </div>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-[#8A9BB0]">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: product.color }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contacto"
        className="mt-auto block text-center py-3 border border-[#1E2D45] text-sm tracking-wide text-[#8A9BB0] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
      >
        Quiero invertir
      </Link>
    </div>
  );
}
