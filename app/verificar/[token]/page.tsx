import { redirect } from 'next/navigation'

export default function VerificarTokenPage({ params }: { params: { token: string } }) {
  redirect(`/verificar/?t=${params.token.toUpperCase()}`)
}
