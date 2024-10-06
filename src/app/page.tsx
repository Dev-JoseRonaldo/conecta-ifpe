"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import Head from "next/head"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Logo from "src/components/Logo"

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
})

type LoginFormData = z.infer<typeof loginSchema>
type UserRole = "ALUNO" | "ASSISTENTE_SOCIAL" | "FINANCEIRO" | "ADMIN" | "CONVIDADO"

export default function Login() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token)
        const userRole: UserRole = decodedToken?.role

        switch (userRole) {
          case "ALUNO":
            router.push("/aluno")
            break
          case "ASSISTENTE_SOCIAL":
            router.push("/assistente-social")
            break
          case "FINANCEIRO":
            router.push("/financeiro")
            break
          case "ADMIN":
            router.push("/administrador")
            break
          case "CONVIDADO":
            router.push("/convidado")
            break
          default:
            throw new Error("Role não reconhecida")
        }
      } catch (error) {
        console.error("Erro ao decodificar o token:", error)
      }
    }
  }, [router])

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const response = await axios.post("http://localhost:3000/auth/login", data)
      const token = response.data.access_token

      localStorage.setItem("token", token)

      const decodedToken: any = jwtDecode(token)
      const userRole: UserRole = decodedToken?.role

      switch (userRole) {
        case "ALUNO":
          router.push("/aluno")
          break
        case "ASSISTENTE_SOCIAL":
          router.push("/assistente-social")
          break
        case "FINANCEIRO":
          router.push("/financeiro")
          break
        case "ADMIN":
          router.push("/administrador")
          break
        case "CONVIDADO":
          router.push("/convidado")
          break
        default:
          throw new Error("Role não reconhecida")
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Conecta IFPE</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <Logo src="/images/logo.png" alt="Logo" size="large" />
        <div className="w-full max-w-lg space-y-8 rounded-2xl bg-white p-10 shadow-lg">
          <h2 className="text-center text-4xl font-bold text-[#111827]">Entrar no Conecta IFPE</h2>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                {...register("email")}
                id="email"
                type="email"
                placeholder="Email"
                className={`mt-1 w-full bg-[#FAFAFA] p-4 ${
                  errors.email ? "border-feedback-error" : "border-gray-300"
                } rounded-md placeholder:text-[#A0AEC0] focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium`}
              />
              {errors.email && <p className="mt-1 text-sm text-feedback-error">{errors.email.message}</p>}
            </div>

            <div>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Senha"
                className={`mt-1 w-full bg-[#FAFAFA] p-4 ${
                  errors.password ? "border-feedback-error" : "border-gray-300"
                } rounded-md placeholder:text-[#A0AEC0] focus:outline-primary-medium focus:ring-1 focus:ring-primary-medium`}
              />
              {errors.password && <p className="mt-1 text-sm text-feedback-error">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox size-4 rounded-full" />
                <span className="ml-2 text-sm font-medium text-[#111827]">Lembrar</span>
              </label>
              <button type="button" className="text-sm font-medium text-primary-medium hover:underline">
                Esqueceu a senha?
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary-medium p-4 font-bold text-white hover:bg-green-700"
                disabled={isLoading}
              >
                {isLoading ? "Carregando..." : "Entrar"}
              </button>
            </div>
          </form>

          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={() => router.push("/cadastro")}
              className="text-base font-medium text-[#718096] hover:underline"
            >
              Não tem uma conta? &nbsp;
              <span className="text-sm font-bold text-primary-medium">Cadastre-se</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
