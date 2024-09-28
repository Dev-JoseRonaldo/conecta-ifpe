// Tela principal logado como Assistente Social
"use client"

import { useEffect, useState } from "react"
import RootLayout from "../../layout"

export default function PaymentAssistenteSocialPage() {
  // Verifica se o componente já foi montado
  const [isMounted, setIsMounted] = useState(false)
  const userRole = "Assistente Social"

  // useEffect para setar que o componente foi montado apenas no cliente
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Renderiza o layout apenas depois que o componente foi montado no cliente
  if (!isMounted) {
    return null // Ou pode retornar um spinner ou qualquer placeholder
  }

  return (
    <RootLayout userRole={userRole}>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl">Tela de pagamentos - Assistente social</h1>
      </div>
    </RootLayout>
  )
}
