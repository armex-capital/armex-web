export const metadata = {
  title: "Verificar Contrato — Armex Capital",
};

// NOTA PARA YAEL: Esta página recibe ?folio=AMX0001 como query param.
// La consulta real a la base de datos se conecta en Fase 2 con Supabase.
// Por ahora es solo UI de demostración.
export default function VerificaPage({
  searchParams,
}: {
  searchParams: { folio?: string };
}) {
  const folio = searchParams.folio?.toUpperCase();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0D1A30] via-[#080C18] to-[#080C18]">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex flex-col leading-none items-center mb-10">
          <span className="text-3xl font-bold tracking-widest text-[#C9A84C]" style={{ fontFamily: "var(--font-cormorant)" }}>
            ARMEX
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#8A9BB0] uppercase">Capital</span>
        </div>

        {folio ? (
          /* Cuando viene con folio en la URL */
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">
            {/* Icono de verificación */}
            <div className="w-16 h-16 rounded-full border border-[#2A9D5C]/40 bg-[#2A9D5C]/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#2A9D5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <p className="text-xs tracking-widest text-[#2A9D5C] uppercase mb-2">Contrato válido y auténtico</p>
            <h1 className="text-3xl text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
              Verificación exitosa
            </h1>

            <div className="flex flex-col gap-3 text-left mb-6">
              {[
                { label: "Folio", value: folio, mono: true },
                { label: "Titular", value: "Pedro M****** F*****", mono: false },
                { label: "Producto", value: "Capital Planificado", mono: false },
                { label: "Apertura", value: "12 mayo 2026", mono: false },
                { label: "Estado", value: "VIGENTE", mono: true, green: true },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#1E2D45]">
                  <span className="text-xs text-[#8A9BB0] uppercase tracking-wide">{item.label}</span>
                  <span
                    className={`text-sm ${item.green ? "text-[#2A9D5C]" : "text-[#F0EDE6]"}`}
                    style={item.mono ? { fontFamily: "var(--font-dm-mono)" } : {}}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8A9BB0]">
              Este contrato fue registrado oficialmente por Armex Capital S.A.P.I. de C.V.
              y cuenta con firma electrónica NOM-151.
            </p>
          </div>
        ) : (
          /* Sin folio — verificación manual */
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">
            <h1 className="text-3xl text-[#F0EDE6] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
              Verificar contrato
            </h1>
            <p className="text-sm text-[#8A9BB0] mb-8">
              Ingresa el número de folio que aparece en tu contrato para verificar su autenticidad.
            </p>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors text-center tracking-widest"
                placeholder="Ej: AMX0001"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-xs hover:bg-[#E8C97A] transition-colors"
              >
                Verificar
              </button>
            </form>
          </div>
        )}

        <p className="text-xs text-[#8A9BB0] mt-6">
          ¿Dudas?{" "}
          <a href="mailto:atclientes@armexcapital.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">
            atclientes@armexcapital.com
          </a>
        </p>
      </div>
    </div>
  );
}
