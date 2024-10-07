"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Button from "src/components/Button"
import Logo from "src/components/Logo"

const cadastroSchema = z
  .object({
    matricula: z.string().optional(),
    nome: z.string().min(3, "Nome é obrigatório"),
    cpf: z.string().min(11, "CPF inválido"),
    dataNascimento: z.string().nonempty("Data de nascimento é obrigatória"),
    sexo: z.enum(["Feminino", "Masculino"], {
      errorMap: (issue, _ctx) => {
        if (issue.code === "invalid_type" && issue.received === "undefined") {
          return { message: "Campo obrigatório" }
        }
        return { message: "Selecione uma opção válida" }
      },
    }),
    login: z.string().min(3, "Login deve ter no mínimo 3 caracteres"),
    senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirmação de senha deve ter no mínimo 6 caracteres"),
    email: z.string().email("E-mail inválido"),
    confirmarEmail: z.string().email("Confirmação de e-mail inválida"),
    campus: z.string().nonempty("Campus é obrigatório"),
    telefone: z.string().min(10, "Telefone inválido"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas devem ser iguais",
    path: ["confirmarSenha"],
  })
  .refine((data) => data.email === data.confirmarEmail, {
    message: "Os e-mails precisam ser iguais",
    path: ["confirmarEmail"],
  })

type CadastroFormData = z.infer<typeof cadastroSchema>

export default function Cadastro() {
  const router = useRouter()
  const pathname = usePathname()
  const [showMatricula, setShowMatricula] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>({
    resolver: zodResolver(cadastroSchema),
  })

  useEffect(() => {
    if (pathname === "/cadastro/financeiro" || pathname === "/cadastro/assistente-social") {
      setShowMatricula(true)
    } else {
      setShowMatricula(false)
    }
  }, [pathname])

  const onSubmit = async (data: CadastroFormData) => {
    // Extrai o role do pathname
    const rolePath = pathname.split("/cadastro/")[1]
    const desiredRole = rolePath ? rolePath.toUpperCase().replace(/-/g, "_") : undefined

    // Cria um objeto para enviar ao backend
    const payload = {
      username: data.login || undefined,
      password: data.senha || undefined,
      role: "CONVIDADO",
      desiredRole: desiredRole,
      siape: data.matricula || null,
      fullName: data.nome || undefined,
      email: data.email || undefined,
      campus: data.campus || undefined,
      phone: data.telefone || undefined,
      birthDate: new Date(data.dataNascimento) || new Date("Invalid Date"),
      cpf: data.cpf || undefined,
    }

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Envia o objeto modificado
      })

      if (response.ok) {
        router.push("/convidado")
      } else {
        console.error("Erro ao enviar dados:", response.statusText)
      }
    } catch (error) {
      console.error("Erro:", error)
    }
  }

  const handleCancel = () => {
    router.push("/")
    console.log("Cancelado")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-2">
      <Logo src="/images/logo.png" alt="Logo" size="large" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full min-w-[1080px] max-w-lg space-y-2 rounded-lg bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-4xl font-bold text-[#111827]">Cadastro do Aluno</h1>

        {showMatricula && (
          <div className="flex items-center justify-start gap-4">
            <label className="block w-[253px] text-end text-base font-medium text-black">Matrícula SIAPE:</label>
            <input
              type="text"
              {...register("matricula")}
              className="mt-1 block w-full max-w-[253px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
            />
            {errors.matricula && <p className="text-red-600">{errors.matricula.message}</p>}
          </div>
        )}

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Nome Completo:</label>
          <input
            type="text"
            {...register("nome")}
            className="mt-1 block w-full max-w-[486px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.nome && <p className="text-red-600">{errors.nome.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">CPF:</label>
          <input
            type="text"
            {...register("cpf")}
            className="mt-1 block w-full max-w-[253px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.cpf && <p className="text-red-600">{errors.cpf.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Data de Nascimento:</label>
          <input
            type="date"
            {...register("dataNascimento")}
            className="mt-1 block w-full max-w-[253px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.dataNascimento && <p className="text-red-600">{errors.dataNascimento.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Sexo:</label>
          <div className="mt-2 flex items-center justify-center gap-4">
            <label>
              <input type="radio" value="Feminino" {...register("sexo")} />
              <span className="ml-1">Feminino</span>
            </label>
            <label>
              <input type="radio" value="Masculino" {...register("sexo")} />
              <span className="ml-1">Masculino</span>
            </label>
          </div>
          {errors.sexo && <p className="text-red-600">{errors.sexo.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Login:</label>
          <input
            type="text"
            {...register("login")}
            className="mt-1 block w-full max-w-[253px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.login && <p className="text-red-600">{errors.login.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Senha:</label>
          <input
            type="password"
            {...register("senha")}
            className="mt-1 block w-full max-w-[253px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.senha && <p className="text-red-600">{errors.senha.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Confirmação de Senha:</label>
          <input
            type="password"
            {...register("confirmarSenha")}
            className="mt-1 block w-full max-w-[253px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.confirmarSenha && <p className="text-red-600">{errors.confirmarSenha.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">E-mail:</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 block w-full max-w-[486px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Confirmação de E-mail:</label>
          <input
            type="email"
            {...register("confirmarEmail")}
            className="mt-1 block w-full max-w-[486px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.confirmarEmail && <p className="text-red-600">{errors.confirmarEmail.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Campus:</label>
          <input
            type="text"
            {...register("campus")}
            className="mt-1 block w-full max-w-[486px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.campus && <p className="text-red-600">{errors.campus.message}</p>}
        </div>

        <div className="flex items-center justify-start gap-4">
          <label className="block w-[253px] text-end text-base font-medium text-black">Telefone:</label>
          <input
            type="text"
            {...register("telefone")}
            className="mt-1 block w-full max-w-[486px] rounded-md border border-none border-gray-300 bg-[#D4DFD6] px-3 py-2 shadow-sm focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium sm:text-sm"
          />
          {errors.telefone && <p className="text-red-600">{errors.telefone.message}</p>}
        </div>

        <div className="mt-6 flex justify-center gap-7 pt-10">
          <Button text="Cancelar" color="red" size="content" onClick={handleCancel} className="px-[2.74rem]" />
          <Button text="Cadastrar" color="green" size="content" className="px-[2.74rem]" type="submit" />
        </div>
      </form>
    </div>
  )
}
