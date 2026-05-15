export const metadata = {
  title: "Contacto — Armex Capital",
};

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Hablemos</span>
            </div>
            <h1 className="text-6xl font-light text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
              Da el primer paso
            </h1>
            <p className="text-[#8A9BB0] leading-relaxed mb-10">
              Agenda una reunión sin compromiso con uno de nuestros asesores. Te explicamos cada producto,
              resolvemos tus dudas y diseñamos juntos la estrategia que mejor se adapta a tu situación.
            </p>

            <div className="flex flex-col gap-6">
              <div>
                <p className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-1">Email</p>
                <a href="mailto:atclientes@armexcapital.com" className="text-[#F0EDE6] hover:text-[#C9A84C] transition-colors">
                  atclientes@armexcapital.com
                </a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-1">Dirección</p>
                <p className="text-[#8A9BB0] text-sm leading-relaxed">
                  Av. De Los 50 Mts. 100 Torre 3 Piso 7<br />
                  Villas Del Lago, CP 62374<br />
                  Cuernavaca, Morelos, México
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-1">Horario</p>
                <p className="text-[#8A9BB0] text-sm">Lunes a viernes — 9:00 a 18:00 hrs</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">
            <h2 className="text-2xl text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
              Solicitar información
            </h2>

            {/* NOTA PARA YAEL: este formulario necesita funcionalidad real.
                Opciones: Formspree, Resend, o endpoint propio en Next.js.
                Por ahora es solo UI. */}
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Apellido</label>
                  <input
                    type="text"
                    className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Teléfono</label>
                <input
                  type="tel"
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                  placeholder="777 000 0000"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Producto de interés</label>
                <select className="w-full bg-[#080C18] border border-[#1E2D45] text-[#8A9BB0] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors">
                  <option value="">Selecciona un producto</option>
                  <option>Capital Impulso ($5,000 – $9,999)</option>
                  <option>Capital Planificado ($10,000 – $999,999)</option>
                  <option>Capital Protegido ($10,000 – $999,999)</option>
                  <option>Capital Superior ($1,000,000+)</option>
                  <option>No sé aún, necesito orientación</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Mensaje (opcional)</label>
                <textarea
                  rows={3}
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors resize-none"
                  placeholder="¿Alguna pregunta específica?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-sm hover:bg-[#E8C97A] transition-colors duration-300"
              >
                Enviar solicitud
              </button>

              <p className="text-xs text-[#8A9BB0] text-center">
                Te contactamos en menos de 24 horas hábiles.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
