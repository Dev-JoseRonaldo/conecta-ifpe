// Tela de Not Found

import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-feedback-error">404</h1>
      <p className="mt-4 text-lg text-gray-700">Página não encontrada.</p>
      <p className="mt-2 text-gray-600">Desculpe, mas a página que você está procurando não existe.</p>
      <Link
        href="/"
        className="mt-6 rounded bg-primary-medium px-4 py-2 text-white transition duration-150 hover:bg-primary-dark"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}
