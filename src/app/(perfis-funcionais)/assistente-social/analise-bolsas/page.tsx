// Tela de Análise de Bolsas - logado como Assistente Social
"use client"

import { useEffect, useState } from "react"
import Button from "src/components/Button"
import Table from "src/components/Table"
import mockData from "./mock.json"
import RootLayout from "../../layout"

interface Aluno {
  Ordem: number
  Nome: string
  CPF: string
  Banco: string
  Agencia: string
  "Conta Corrente": string
  "Percentual de Presença": number
}

export default function AnalysisAssistenteSocialPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [responseData, setResponseData] = useState<Aluno[]>([])

  const userRole = "Assistente Social"

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
          <h1 className="mb-6 self-start text-2xl font-bold">Selecione os alunos que serão contemplados:</h1>
          <div className="max-h-dvh overflow-scroll">
            <Table
              type="Lista de pagamento"
              IdentifierColun="CPF"
              alunos={responseData}
              colunasOmitidas={["created at", "process"]}
            />
          </div>
        </div>
        <div className="mt-8 flex w-full items-center justify-center gap-10">
          <Button
            text="Criar lista de pagamento"
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
