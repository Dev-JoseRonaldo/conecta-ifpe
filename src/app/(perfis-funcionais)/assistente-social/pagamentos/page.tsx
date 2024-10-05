// Tela principal logado como Assistente Social
"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Button from "src/components/Button"
import LoadingSpinner from "src/components/LoadingSpinner"
import pagamentosMock from "./mock.json"
import RootLayout from "../../layout"

interface Pagamento {
  id: number
  valor: number
  data: string
  descricao: string
}

export default function PaymentAssistenteSocialPage() {
  const [isMounted, setIsMounted] = useState(false)
  const userRole = "Assistente Social"
  const [mesAno, setMesAno] = useState<string>("")
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Renderiza o componente de loading até que o componente seja montado
  if (!isMounted) {
    return <LoadingSpinner />
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMesAno(event.target.value)
  }

  const fetchMockData = (ano: string, mes: string) => {
    const anoNumber = parseInt(ano)
    const mesNumber = parseInt(mes)
    const pagamentosData = pagamentosMock.find((item) => item.ano === anoNumber && item.mes === mesNumber)
    return pagamentosData ? pagamentosData.pagamentos : []
  }

  const handleSubmit = async () => {
    if (!mesAno) return

    const [ano, mes] = mesAno.split("-")

    setLoading(true)
    try {
      const response = await axios.get("/api/lista-pagamentos", {
        params: {
          mes,
          ano,
        },
      })
      setPagamentos(response.data)
    } catch (error) {
      console.error("Erro ao buscar pagamentos do backend. Tentando buscar mock:", error)
      const mockData = fetchMockData(ano || "", mes || "")
      setPagamentos(mockData)
    } finally {
      setLoading(false)
    }
  }

  return (
    <RootLayout userRole={userRole}>
      <div className="rounded-xl bg-white p-8 shadow-md">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 ">
            {!pagamentos.length ? (
              <>
                <h2 className="mb-4 text-2xl font-bold">Escolha o mês para acompanhar os pagamentos:</h2>
                <input
                  type="month"
                  value={mesAno}
                  onChange={handleInputChange}
                  className="mb-4 rounded-md border border-gray-300 p-2"
                />
                <Button
                  text={loading ? "Carregando..." : "Consultar"}
                  color="green"
                  disabled={loading}
                  onClick={handleSubmit}
                  className="rounded-md bg-primary-medium px-4 py-2 text-white hover:bg-green-700"
                />
              </>
            ) : (
              <div className="w-full max-w-2xl">
                <h2 className="mb-4 text-xl font-bold">Lista de Pagamentos:</h2>
                <ul className="w-full rounded-md border border-gray-300 p-4">
                  {pagamentos.map((pagamento) => (
                    <li
                      key={pagamento.id}
                      className="mb-2 border-b border-gray-200 pb-2 last:mb-0 last:border-b-0 last:pb-0"
                    >
                      <p>
                        <strong>Data:</strong> {pagamento.data}
                      </p>
                      <p>
                        <strong>Valor:</strong> R$ {pagamento.valor.toFixed(2)}
                      </p>
                      <p>
                        <strong>Descrição:</strong> {pagamento.descricao}
                      </p>
                    </li>
                  ))}
                </ul>
                <Button text="Voltar" color="red" size="content" onClick={() => setPagamentos([])} />
              </div>
            )}
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
