"use client"

import { useRouter } from "next/navigation"
import { FaDollarSign, FaHandsHelping, FaUserGraduate } from "react-icons/fa"
import Logo from "src/components/Logo"
import RoleButton from "src/components/RoleButton"

export default function Home() {
  const router = useRouter()

  const handleRoleSelection = (role: string) => {
    router.push(`/cadastro/${role}`)
  }

  return (
    <div className="flex size-full h-screen flex-col items-center justify-center pb-8">
      <Logo src="/images/logo.png" alt="Logo" size="large" />
      <h2 className="text-4xl font-bold text-[#111827]">Cadastro</h2>

      <div className="mt-10 flex justify-center gap-12">
        <RoleButton icon={<FaUserGraduate />} text="Aluno do IFPE" onClick={() => handleRoleSelection("aluno")} />
        <RoleButton
          icon={<FaHandsHelping />}
          text="Assistente Social"
          onClick={() => handleRoleSelection("assistente-social")}
        />
        <RoleButton icon={<FaDollarSign />} text="Financeiro" onClick={() => handleRoleSelection("financeiro")} />
      </div>
    </div>
  )
}
