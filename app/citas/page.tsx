'use client'

import { useState } from 'react'
import { registrarCita } from './actions'

const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '16:00', '17:00', '18:00']

const servicios = [
  'Capital Impulso',
  'Capital Planificado',
  'Capital Protegido',
  'Capital Superior Planificado',
  'Capital Superior Protegido',
  'Capital Familiar Planificado',
  'Capital Familiar Protegido',
  'Por definir',
]

type Estado = 'idle' | 'enviando' | 'exito' | 'error'

export default function CitasPage() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [servicio, setServicio] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [modalidad, setModalidad] = useState<'presencial' | 'videollamada'>('presencial')
  const [mensaje, setMensaje] = useState('')
  const [estado, setEstado] = useState<Estado>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!nombre || !email || !telefono || !fecha || !hora || !servicio) {
      setErrorMsg('Por favor completa todos los campos obligatorios.')
      return
    }

    setEstado('enviando')
    setErrorMsg('')

    const resultado = await registrarCita({
      nombre,
      email,
      telefono,
      fecha_cita: fecha,
      hora_cita: hora,
      modalidad,
      servicio_interes: servicio,
      mensaje,
    })

    if (resultado.ok) {
      setEstado('exito')
    } else {
      setEstado('error')
      setErrorMsg(resultado.mensaje ?? 'Error al registrar la cita.')
    }
  }

  if (estado === 'exito') {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="max-w-md text-center px-6">
          <div className="w-16 h-16 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl text-[#C9A84C]">✓</span>
          </div>
          <h2 className="text-4xl font-light text-[#F0EDE6] mb-4" style={{ fontFamily: 'var(--font-cormorant)' }}>
            Cita registrada
          </h2>
          <p className="text-[#8A9BB0] mb-8">
            Recibimos tu solicitud. Te confirmaremos por email en menos de 2 horas con los detalles de tu reunión.
          </p>
          <button
            onClick={() => {
              setEstado('idle')
              setNombre(''); setEmail(''); setTelefono(''); setServicio('')
              setFecha(''); setHora(''); setMensaje('')
            }}
            className="text-xs tracking-widest text-[#C9A84C] uppercase border border-[#C9A84C]/30 px-6 py-3 hover:border-[#C9A84C] transition-colors"
          >
            Agendar otra cita
          </button>
        </div>
      </div>
    )
  }

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
            <h1 className="text-6xl font-light text-[#F0EDE6] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Habla con
              <br />
              un asesor
            </h1>
            <p className="text-[#8A9BB0] leading-relaxed mb-10">
              Agenda una reunión sin compromiso. Te explicamos cada producto, resolvemos tus dudas
              y diseñamos juntos la estrategia que mejor se adapta a tu situación financiera.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { n: '01', t: 'Sin compromiso', d: 'La reunión es completamente gratuita y sin obligación de contratar.' },
                { n: '02', t: 'Confirmación inmediata', d: 'Recibes confirmación por email y un recordatorio 24 horas antes.' },
                { n: '03', t: 'Presencial o por videollamada', d: 'En nuestras oficinas en Cuernavaca o por videollamada donde estés.' },
              ].map((item) => (
                <div key={item.n} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-[#C9A84C]" style={{ fontFamily: 'var(--font-dm-mono)' }}>{item.n}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#F0EDE6] mb-1">{item.t}</p>
                    <p className="text-xs text-[#8A9BB0]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 border border-[#1E2D45] bg-[#0D1526]">
              <p className="text-[10px] tracking-widest text-[#C9A84C] uppercase mb-2">Horario de atención</p>
              <p className="text-sm text-[#F0EDE6]">Lunes a viernes — 9:00 a 18:00 hrs</p>
              <p className="text-xs text-[#8A9BB0] mt-1">Av. De Los 50 Mts. 100 Torre 3 Piso 7, Cuernavaca, Morelos</p>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-[#0D1526] border border-[#1E2D45] p-8">
            <h2 className="text-2xl text-[#F0EDE6] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Reservar reunión
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              {/* Nombre */}
              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                  Nombre completo <span className="text-[#C9A84C]">*</span>
                </label>
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email y Teléfono */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                    Email <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                    Teléfono <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                    className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                    placeholder="55 1234 5678"
                  />
                </div>
              </div>

              {/* Servicio */}
              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                  Producto de interés <span className="text-[#C9A84C]">*</span>
                </label>
                <select
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  required
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#8A9BB0] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                >
                  <option value="">Selecciona un producto</option>
                  {servicios.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* Fecha */}
              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                  Fecha preferida <span className="text-[#C9A84C]">*</span>
                </label>
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#8A9BB0] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                />
              </div>

              {/* Horario */}
              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                  Horario preferido <span className="text-[#C9A84C]">*</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {horarios.map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHora(h)}
                      className={`py-2 border text-xs transition-all ${
                        hora === h
                          ? 'border-[#C9A84C] text-[#C9A84C]'
                          : 'border-[#1E2D45] text-[#8A9BB0] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]'
                      }`}
                      style={{ fontFamily: 'var(--font-dm-mono)' }}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>

              {/* Modalidad */}
              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">Modalidad</label>
                <div className="grid grid-cols-2 gap-3">
                  {(['presencial', 'videollamada'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setModalidad(m)}
                      className={`py-3 border text-sm transition-all capitalize ${
                        modalidad === m
                          ? 'border-[#C9A84C] text-[#C9A84C]'
                          : 'border-[#1E2D45] text-[#8A9BB0] hover:border-[#C9A84C]/50 hover:text-[#C9A84C]'
                      }`}
                    >
                      {m === 'presencial' ? 'Presencial' : 'Videollamada'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mensaje opcional */}
              <div>
                <label className="text-[10px] tracking-widest text-[#8A9BB0] uppercase block mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  rows={3}
                  className="w-full bg-[#080C18] border border-[#1E2D45] text-[#F0EDE6] px-4 py-3 text-sm focus:border-[#C9A84C]/50 focus:outline-none transition-colors resize-none"
                  placeholder="¿Algo que quieras que sepamos antes de la reunión?"
                />
              </div>

              {/* Error */}
              {errorMsg && (
                <p className="text-xs text-red-400 border border-red-400/20 bg-red-400/5 px-4 py-3">
                  {errorMsg}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={estado === 'enviando'}
                className="w-full py-4 bg-[#C9A84C] text-[#080C18] font-medium tracking-widest uppercase text-sm hover:bg-[#E8C97A] transition-colors duration-300 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {estado === 'enviando' ? 'Enviando...' : 'Confirmar cita'}
              </button>

              <p className="text-xs text-[#8A9BB0] text-center">
                Recibirás confirmación en tu email en menos de 2 horas.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
