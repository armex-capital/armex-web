export const metadata = {
  title: "Portal del Cliente — Armex Capital",
};

// NOTA PARA YAEL: Esta es solo la pantalla de login.
// La funcionalidad real (auth con Supabase) se agrega en Fase 2.
export default function PortalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0D1A30] via-[#080C18] to-[#080C18]">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex flex-col leading-none items-center mb-2">
            <span className="text-4xl font-bold tracking-widest text-[#C9A84C]" style={{ fontFamily: "var(--font-cormorant)" }}>
              ARMEX
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#8A9BB0] uppercase">Capital</span>
          </div>
          <p className="text-sm text-[#8A9BB0] mt-3">Portal del Inversionista</p>
        </div>

        {/* Card */}
        <div className="bg-[#0D1526] border border-[#1E2D45] p-8">
          <h1 className="text-2xl text-[#F0EDE6] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
            Iniciar sesión
          </h1>
          <p className="text-xs text-[#8A9BB0] mb-8">Accede a tu cuenta y revisa el estado de tu inversión</p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                Número de contrato
              </label>
              <input
                type="text"
                className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                placeholder="AMX0001"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-xs hover:bg-[#E8C97A] transition-colors duration-300 mt-2"
            >
              Entrar
            </button>
          </form>

          <p className="text-xs text-center text-[#8A9BB0] mt-6">
            ¿Problemas para acceder?{" "}
            <a href="mailto:atclientes@armexcapital.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">
              Contáctanos
            </a>
          </p>
        </div>

        <p className="text-center text-xs text-[#8A9BB0] mt-6">
          © 2026 Armex Capital S.A.P.I. de C.V.
        </p>
      </div>
    </div>
  );
}
