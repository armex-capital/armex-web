import { supabase } from '@/lib/supabase'

interface Contrato {
  token_verificacion: string
  numero_contrato: string
  nombre_cliente: string
  servicio: string
  estatus: string
  fecha_firma: string
  fecha_inicio: string
  fecha_vencimiento: string
  plazo_meses: number
}

function formatearFecha(fechaISO: string): string {
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
  const d = new Date(fechaISO + 'T12:00:00')
  return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`
}

function colorEstatus(estatus: string): string {
  const e = estatus?.toUpperCase()
  if (e === 'VIGENTE' || e === 'ACTIVO') return 'text-[#2A9D5C]'
  if (e === 'VENCIDO') return 'text-[#8A9BB0]'
  if (e === 'PENDIENTE') return 'text-[#C9A84C]'
  return 'text-[#F0EDE6]'
}

export async function generateMetadata() {
  return { title: 'Verificar Contrato — Armex Capital' }
}

export default async function VerificarPage({ params }: { params: { token: string } }) {
  const token = params.token?.toUpperCase()

  const { data, error } = await supabase
    .from('v_verificacion_contrato')
    .select('*')
    .eq('token_verificacion', token)
    .single()

  const contrato: Contrato | null = error ? null : data

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0D1A30] via-[#080C18] to-[#080C18]">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-10">
          <div className="flex flex-col leading-none items-center mb-2">
            <span className="text-4xl font-bold tracking-widest text-[#C9A84C]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              ARMEX
            </span>
            <span className="text-[10px] tracking-[0.3em] text-[#8A9BB0] uppercase">Capital</span>
          </div>
          <p className="text-sm text-[#8A9BB0] mt-3">Verificación de Contrato</p>
        </div>

        {contrato ? (
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">

            {/* Icono verificado */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-[#2A9D5C]/40 bg-[#2A9D5C]/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-[#2A9D5C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-[#2A9D5C] uppercase">Contrato auténtico</p>
                <h1 className="text-2xl text-[#F0EDE6]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Verificación exitosa
                </h1>
              </div>
            </div>

            {/* Datos */}
            <div className="flex flex-col gap-0">
              {[
                { label: 'Folio',         value: contrato.numero_contrato,           mono: true  },
                { label: 'Titular',       value: contrato.nombre_cliente,            mono: false },
                { label: 'Producto',      value: contrato.servicio,                  mono: false },
                { label: 'Plazo',         value: `${contrato.plazo_meses} meses`,    mono: false },
                { label: 'Firma',         value: formatearFecha(contrato.fecha_firma),      mono: false },
                { label: 'Vencimiento',   value: formatearFecha(contrato.fecha_vencimiento), mono: false },
                { label: 'Estado',        value: contrato.estatus?.toUpperCase(),    mono: true, colorClass: colorEstatus(contrato.estatus) },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-3 border-b border-[#1E2D45] last:border-0">
                  <span className="text-[10px] tracking-widest text-[#8A9BB0] uppercase">{item.label}</span>
                  <span
                    className={`text-sm text-right max-w-[60%] ${item.colorClass ?? 'text-[#F0EDE6]'}`}
                    style={item.mono ? { fontFamily: 'var(--font-dm-mono)' } : { fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#8A9BB0] mt-6">
              Registrado por Armex Capital S.A.P.I. de C.V.
            </p>
          </div>

        ) : (
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">

            {/* Icono error */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full border border-red-500/40 bg-red-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-red-400 uppercase">No encontrado</p>
                <h1 className="text-2xl text-[#F0EDE6]" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  Contrato no verificado
                </h1>
              </div>
            </div>

            <p className="text-sm text-[#8A9BB0] mb-6">
              El código escaneado no corresponde a ningún contrato registrado. Si crees que es un error, contáctanos.
            </p>

            {token && (
              <p className="text-xs text-[#1E2D45] font-mono break-all">Token: {token}</p>
            )}
          </div>
        )}

        <p className="text-center text-xs text-[#8A9BB0] mt-6">
          ¿Dudas?{' '}
          <a href="mailto:atclientes@armexcapital.com" className="text-[#C9A84C] hover:text-[#E8C97A] transition-colors">
            atclientes@armexcapital.com
          </a>
        </p>
      </div>
    </div>
  )
}
