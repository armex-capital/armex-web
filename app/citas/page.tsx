export const metadata = {
  title: "Agendar cita — Armex Capital",
  description: "Agenda una reunión con uno de nuestros asesores. Sin compromiso.",
};

// NOTA PARA YAEL: Esta es la pantalla de agendamiento de citas.
// Vive en el sitio web público — cualquier persona puede usarla (clientes y prospectos).
// La funcionalidad real (guardar en Supabase + email de confirmación) se conecta en Fase 2.
// Por ahora es solo UI.

const horarios = ["09:00", "10:00", "11:00", "12:00", "13:00", "16:00", "17:00", "18:00"];
const motivos = [
  "Conocer los productos de inversión",
  "Abrir un nuevo contrato",
  "Dudas sobre mi contrato actual",
  "Solicitar retiro o renovación",
  "Otro motivo",
];

export default function CitasPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Agenda tu cita</span>
            </div>
            <h1 className="text-6xl font-light text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
              Habla con
              <br />
              un asesor
            </h1>
            <p className="text-[#8A9BB0] leading-relaxed mb-10">
              Agenda una reunión sin compromiso. Te explicamos cada producto, resolvemos tus dudas
              y diseñamos juntos la estrategia que mejor se adapta a tu situación financiera.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#C9A84C]" style={{ fontFamily: "var(--font-dm-mono)" }}>01</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0EDE6] mb-1">Sin compromiso</p>
                  <p className="text-xs text-[#8A9BB0]">La reunión es completamente gratuita y sin obligación de contratar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#C9A84C]" style={{ fontFamily: "var(--font-dm-mono)" }}>02</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0EDE6] mb-1">Confirmación inmediata</p>
                  <p className="text-xs text-[#8A9BB0]">Recibes confirmación por email y un recordatorio 24 horas antes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-[#C9A84C]" style={{ fontFamily: "var(--font-dm-mono)" }}>03</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F0EDE6] mb-1">Presencial o por videollamada</p>
                  <p className="text-xs text-[#8A9BB0]">En nuestras oficinas en Cuernavaca o por videollamada donde estés.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 border border-[#1E2D45] bg-[#0D1526]">
              <p className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2">Horario de atención</p>
              <p className="text-sm text-[#F0EDE6]">Lunes a viernes — 9:00 a 18:00 hrs</p>
              <p className="text-xs text-[#8A9BB0] mt-1">Av. De Los 50 Mts. 100 Torre 3 Piso 7, Cuernavaca, Morelos</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">
            <h2 className="text-2xl text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
              Reservar reunión
            </h2>

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
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Motivo de la cita</label>
                <select className="w-full bg-[#080C18] border border-[#1E2D45] text-[#8A9BB0] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors">
                  <option value="">Selecciona un motivo</option>
                  {motivos.map((m) => <option key={m}>{m}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Fecha preferida</label>
                <input
                  type="date"
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#8A9BB0] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Horario preferido</label>
                <div className="grid grid-cols-4 gap-2">
                  {horarios.map((h) => (
                    <button
                      key={h}
                      type="button"
                      className="py-2 border border-[#1E2D45] text-xs text-[#8A9BB0] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Modalidad</label>
                <div className="grid grid-cols-2 gap-3">
                  {["Presencial", "Videollamada"].map((m) => (
                    <button
                      key={m}
                      type="button"
                      className="py-3 border border-[#1E2D45] text-sm text-[#8A9BB0] hover:border-[#C9A84C]/50 hover:text-[#C9A84C] transition-all"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-sm hover:bg-[#E8C97A] transition-colors duration-300 mt-2"
              >
                Confirmar cita
              </button>

              <p className="text-xs text-[#8A9BB0] text-center">
                Recibirás confirmación en tu email en menos de 2 horas.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
