// Tela principal logado como Administrador
"use client"

import { useEffect, useState } from "react"
import Button from "src/components/Button"
import Table from "src/components/Table"
import mockData from "./mock.json"

import RootLayout from "../layout"

interface UsuarioProps {
  Nome: string
  CPF: string
  DataNascimento: string
  Sexo: string
  Login: string
  Senha: string
  Email: string
  Campus: string
  Telefone: string
  Role: string
  RoleDesejada: string
}

export default function AnalysisAssistenteSocialPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [responseData, setResponseData] = useState<UsuarioProps[]>([])

  const userRole = "Admin"

  useEffect(() => {
    setIsMounted(true)

    const fetchData = async () => {
      setResponseData(mockData)
    }
    fetchData()
  }, [])

  // Renderiza o layout apenas depois que o componente foi montado no cliente
  if (!isMounted) {
    return null // Ou pode retornar um spinner ou qualquer placeholder
  }

  return (
    <RootLayout userRole={userRole}>
      <div className="rounded-lg bg-white p-8 shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="mb-6 self-start text-2xl font-bold">Solicitações:</h1>
          <div className="max-h-dvh overflow-scroll">
            <Table type="Lista de pagamento" IdentifierColumn="CPF" alunos={responseData} colunasOmitidas={["Senha"]} />
          </div>
        </div>
        <div className="mt-8 flex w-full items-center justify-center gap-10">
          <Button
            text="Confirmar"
            color="green"
            size="content"
            className="px-8"
            // onClick={handleGenerateList}
            // disabled={!selectedFile || progress < 100}
          />
        </div>
      </div>
    </RootLayout>
  )
}
