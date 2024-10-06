"use client"

import { useEffect, useState } from "react"

import { FaHome, FaUsersCog } from "react-icons/fa"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { HiChatBubbleLeftRight } from "react-icons/hi2"
import { IoMdCloudUpload } from "react-icons/io"
import { MdPaid } from "react-icons/md"
import { RiSettings3Fill } from "react-icons/ri"

import { Header } from "src/components/Header"
import LoadingSpinner from "src/components/LoadingSpinner"
import { Sidebar } from "src/components/Sidebar"
import { TabItemProps } from "src/components/TabItem"

interface LayoutProps {
  children: React.ReactNode
  userRole: string
}

export default function RootLayout({ children, userRole }: LayoutProps) {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const tabs = getTabsForProfile(userRole)

  useEffect(() => {
    // Função que verifica o tamanho da tela
    const handleResize = () => {
      if (window.innerWidth <= 1024) {
        setSidebarCollapsed(true)
      } else {
        setSidebarCollapsed(false)
      }
    }

    // Verifica o tamanho da tela quando o componente é montado
    handleResize()

    // Adiciona o evento de resize para escutar mudanças no tamanho da tela
    window.addEventListener("resize", handleResize)

    // Remove o evento de resize quando o componente for desmontado
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Define que o layout foi montado após o primeiro render
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <LoadingSpinner /> // Exibe o componente de loading
  }

  return (
    <html lang="pt-BR">
      <body className={`min-h-screen md:flex`}>
        <Sidebar tabs={tabs} isCollapsed={isSidebarCollapsed} />
        <div className="flex-1">
          <Header title="Olá, Ronaldo!" userRole={userRole} />
          {isMounted ? (
            <main className="flex h-full flex-1 flex-col items-center justify-center bg-[#F5F5F5] p-4">{children}</main>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </body>
    </html>
  )
}

// Função para retornar as abas com base no perfil do usuário
function getTabsForProfile(profile: string) {
  const TabsAssistenteSocial: TabItemProps[] = [
    { name: "Pagamentos", route: "/assistente-social/pagamentos", IconComponent: MdPaid },
    { name: "Inscrições", route: "/assistente-social/inscricoes", IconComponent: RiSettings3Fill },
    { name: "Análise de bolsas", route: "/assistente-social/analise-bolsas", IconComponent: FaUsersCog },
    {
      name: "Contato com Financeiro",
      route: "/assistente-social/contato-financeiro",
      IconComponent: HiChatBubbleLeftRight,
    },
  ]

  const TabsAluno: TabItemProps[] = [{ name: "Início", route: "/aluno", IconComponent: FaHome }]

  const TabsFinanceiro: TabItemProps[] = [
    { name: "Inserir Extrato", route: "/financeiro", IconComponent: IoMdCloudUpload },
    { name: "Gestão de Usuários", route: "/financeiro/usuarios", IconComponent: HiOutlineEnvelope },
    { name: "Configurações", route: "/financeiro/configuracoes", IconComponent: HiOutlineEnvelope },
  ]

  const TabsAdmin: TabItemProps[] = [
    { name: "Solicitações", route: "/administrador", IconComponent: HiOutlineEnvelope },
  ]

  const TabsConvidado: TabItemProps[] = [{ name: "Início", route: "/convidado", IconComponent: HiOutlineEnvelope }]

  switch (profile) {
    case "Assistente Social":
      return TabsAssistenteSocial
    case "Aluno":
      return TabsAluno
    case "Financeiro":
      return TabsFinanceiro
    case "Convidado":
      return TabsConvidado
    case "Admin":
      return TabsAdmin
    default:
      return []
  }
}
