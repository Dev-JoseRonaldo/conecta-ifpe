"use client"

import { useEffect, useState } from "react"

import { RiMoneyDollarCircleFill } from "react-icons/ri"
import MessageCard from "src/components/MessageCard"
import NotificationCard from "src/components/NotificationCard"
import StatusBadge from "src/components/StatusBadge"

import RootLayout from "../layout"

export default function MainAlunoPage() {
  // Verifica se o componente já foi montado
  const [isMounted, setIsMounted] = useState(false)
  const userRole = "Aluno"

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
      <div className=" size-full rounded-lg p-8">
        <div className="flex gap-4">
          <StatusBadge status="ativo" />
          <NotificationCard
            icon={<RiMoneyDollarCircleFill size={48} />}
            text="Chegada de R$200,00 prevista para o dia 03/05/2024"
          />
        </div>
        <div className="flex max-w-2xl flex-col items-start gap-4">
          <h1 className="mb-4 mt-32 text-2xl font-bold">Meus avisos</h1>
          <div className="flex flex-col items-start gap-4">
            <MessageCard
              name="José Ronaldo de Souza Silva"
              role="Assistente Social"
              date="03/04/2024"
              message="Lembrando a todos que não receberem o dinheiro até o dia 05, que entrem em contato comigo."
              profilePicture="https://github.com/Dev-JoseRonaldo.png"
            />

            <MessageCard
              name="José Ronaldo de Souza Silva"
              role="Assistente Social"
              date="03/04/2024"
              message="Lembrando a todos que não receberem o dinheiro até o dia 05, que entrem em contato comigo."
              profilePicture="https://github.com/Dev-JoseRonaldo.png"
            />

            <MessageCard
              name="José Ronaldo de Souza Silva"
              role="Assistente Social"
              date="03/04/2024"
              message="Lembrando a todos que não receberem o dinheiro até o dia 05, que entrem em contato comigo."
              profilePicture="https://github.com/Dev-JoseRonaldo.png"
            />
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
