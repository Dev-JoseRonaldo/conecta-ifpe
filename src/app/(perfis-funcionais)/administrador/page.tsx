/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Button from "src/components/Button"
import LoadingSpinner from "src/components/LoadingSpinner"
import Table from "src/components/Table"
import RootLayout from "../layout"

interface UsuarioProps {
  username: string
  password: string
  role: string
  desiredRole: string
  siape?: string
  fullName: string
  cpf: string
  birthDate: string
  email: string
  campus: string
  phone: string
}

export default function RequestsAdminPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [responseData, setResponseData] = useState<UsuarioProps[]>([])
  const [selectedUsers, setSelectedUsers] = useState<UsuarioProps[]>([])

  const userRole = "Admin"

  useEffect(() => {
    let isMounted = true
    setIsMounted(true)
    fetchData()
    return () => {
      isMounted = false // Cleanup para evitar atualizações se o componente for desmontado
    }
  }, [])

  // Mova a função fetchData para fora do useEffect
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users?role=CONVIDADO", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      setResponseData(response.data)
    } catch (error) {
      console.error("Erro ao buscar usuários:", error)
    }
  }

  const handleCheckboxSelection = (selectedIds: string[]) => {
    const selected = responseData.filter((user) => selectedIds.includes(user.cpf))
    setSelectedUsers(selected)
  }

  const handleConfirm = async () => {
    if (selectedUsers.length === 0) {
      alert("Selecione pelo menos um usuário para confirmar.")
      return
    }

    try {
      await axios.patch("http://localhost:3000/users/update-multiple", selectedUsers, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      alert("Usuários atualizados com sucesso.")

      await fetchData()
      setSelectedUsers([])
    } catch (error) {
      console.error("Erro ao atualizar usuários:", error)
      alert("Erro ao atualizar usuários.")
    }
  }

  // Renderiza o layout apenas depois que o componente foi montado no cliente
  if (!isMounted) {
    return <LoadingSpinner />
  }

  return (
    <RootLayout userRole={userRole}>
      <div className="rounded-lg bg-white p-8 shadow-md">
        {responseData?.length === 0 ? (
          <p>Nenhum solicitação pendente.</p>
        ) : (
          <>
            <div className="flex flex-col items-center space-y-4">
              <h1 className="mb-6 self-start text-2xl font-bold">Solicitações:</h1>
              <div className="max-h-dvh overflow-scroll">
                <Table
                  type="Lista de pagamento"
                  IdentifierColumn="cpf"
                  alunos={responseData}
                  colunasOmitidas={["senha", "id"]}
                  onCheckboxSelection={handleCheckboxSelection}
                />
              </div>
            </div>
            <div className="mt-8 flex w-full items-center justify-center gap-10">
              <Button text="Confirmar" color="green" size="content" className="px-8" onClick={handleConfirm} />
            </div>
          </>
        )}
      </div>
    </RootLayout>
  )
}
