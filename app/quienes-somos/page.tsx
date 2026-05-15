export const metadata = {
  title: "Quiénes somos — Armex Capital",
};

const team = [
  { name: "Gabriela Salas Arce", role: "Directora General", desc: "Líder de la firma con visión en finanzas privadas y gestión de patrimonios." },
  { name: "Javier Mendoza Pardo", role: "Admin & Sistemas", desc: "Responsable de la infraestructura tecnológica y operaciones internas." },
  { name: "Marisol Salas Arce", role: "Atención a Clientes", desc: "Acompaña a cada inversionista en su proceso de apertura y seguimiento." },
];

const values = [
  { title: "Integridad", desc: "Cada acción está guiada por la honestidad. Nuestros contratos son claros y nuestras tasas, reales." },
  { title: "Experiencia", desc: "Años operando en mercados financieros internacionales respaldan cada decisión de inversión." },
  { title: "Compromiso", desc: "Tus objetivos financieros son nuestros objetivos. Tu éxito es nuestra mejor carta de presentación." },
];

export default function QuienesSomosPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">La firma</span>
          </div>
          <h1 className="text-6xl font-light text-[#F0EDE6] mb-6" style={{ fontFamily: "var(--font-cormorant)" }}>
            Gestionamos tu capital
            <br />
            <em className="not-italic text-[#C9A84C]">con propósito</em>
          </h1>
          <p className="text-[#8A9BB0] leading-relaxed text-lg">
            Armex Capital es una Sociedad Anónima Promotora de Inversión de Capital Variable, constituida
            conforme a las leyes de los Estados Unidos Mexicanos. Nacimos con la convicción de que las
            inversiones privadas de alto rendimiento no deben ser exclusivas de los grandes capitales.
          </p>
        </div>

        {/* Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2D45] mb-20">
          <div className="bg-[#0D1526] p-10">
            <div className="w-6 h-px bg-[#C9A84C] mb-6" />
            <h2 className="text-3xl font-light text-[#F0EDE6] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
              Nuestra misión
            </h2>
            <p className="text-[#8A9BB0] leading-relaxed">
              Democratizar el acceso a inversiones privadas con rendimientos reales, transparencia total
              y un acompañamiento personalizado que los grandes fondos no pueden ofrecer.
            </p>
          </div>
          <div className="bg-[#080C18] p-10">
            <div className="w-6 h-px bg-[#C9A84C] mb-6" />
            <h2 className="text-3xl font-light text-[#F0EDE6] mb-4" style={{ fontFamily: "var(--font-cormorant)" }}>
              Nuestra visión
            </h2>
            <p className="text-[#8A9BB0] leading-relaxed">
              Ser la firma de inversiones privadas de referencia en México, reconocida por la confianza
              de nuestros clientes, la solidez de nuestros rendimientos y la integridad de nuestras operaciones.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Nuestros valores</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2D45]">
            {values.map((v) => (
              <div key={v.title} className="bg-[#0D1526] p-8">
                <div className="w-6 h-px bg-[#C9A84C] mb-6" />
                <h3 className="text-2xl text-[#F0EDE6] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>{v.title}</h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipo */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="text-xs tracking-[0.3em] text-[#C9A84C] uppercase">El equipo</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2D45]">
            {team.map((member) => (
              <div key={member.name} className="bg-[#0D1526] p-8">
                <div className="w-12 h-12 rounded-full bg-[#1E2D45] border border-[#C9A84C]/20 mb-6 flex items-center justify-center">
                  <span className="text-lg text-[#C9A84C]" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl text-[#F0EDE6] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>{member.name}</h3>
                <p className="text-xs tracking-wide text-[#C9A84C] uppercase mb-3">{member.role}</p>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
