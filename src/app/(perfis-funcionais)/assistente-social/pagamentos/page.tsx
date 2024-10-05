// Tela principal logado como Assistente Social
"use client"

import { useEffect, useState } from "react"
import LoadingSpinner from "src/components/LoadingSpinner"
import RootLayout from "../../layout"

export default function PaymentAssistenteSocialPage() {
  const [isMounted, setIsMounted] = useState(false)
  const userRole = "Assistente Social"

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Renderiza o componente de loading até que o componente seja montado
  if (!isMounted) {
    return <LoadingSpinner />
  }

  return (
    <RootLayout userRole={userRole}>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl">Tela de pagamentos - Assistente social</h1>
      </div>
    </RootLayout>
  )
}
