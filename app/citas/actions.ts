'use server'

import { supabase } from '@/lib/supabase'

export type CitaPayload = {
  nombre: string
  email: string
  telefono: string
  fecha_cita: string
  hora_cita: string
  modalidad: 'presencial' | 'videollamada' | 'telefono'
  servicio_interes: string
  mensaje?: string
}

export async function registrarCita(data: CitaPayload) {
  const { error } = await supabase.from('citas').insert([
    {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      fecha_cita: data.fecha_cita,
      hora_cita: data.hora_cita,
      modalidad: data.modalidad,
      servicio_interes: data.servicio_interes,
      mensaje: data.mensaje ?? null,
      estatus: 'pendiente',
    },
  ])

  if (error) {
    return { ok: false, mensaje: error.message }
  }

  return { ok: true }
}
