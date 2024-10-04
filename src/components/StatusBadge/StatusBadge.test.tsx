import { render, screen } from "@testing-library/react"
import StatusBadge from "."
import "@testing-library/jest-dom"

describe("StatusBadge Component", () => {
  it("renders active status correctly", () => {
    render(<StatusBadge status="ativo" />)

    // Verifica se o ícone de check (ativo) é renderizado
    expect(screen.getByTestId("active-icon")).toBeInTheDocument()

    // Verifica se o texto "Ativo" é exibido
    expect(screen.getByText("Ativo")).toBeInTheDocument()
    expect(screen.getByText("Bolsista")).toBeInTheDocument()

    // Verifica se a classe de cor correta está aplicada
    expect(screen.getByText("Ativo")).toHaveClass("text-green-500")
  })

  it("renders inactive status correctly", () => {
    render(<StatusBadge status="inativo" />)

    // Verifica se o ícone de times (inativo) é renderizado
    expect(screen.getByTestId("inactive-icon")).toBeInTheDocument()

    // Verifica se o texto "Inativo" é exibido
    expect(screen.getByText("Inativo")).toBeInTheDocument()
    expect(screen.getByText("Bolsista")).toBeInTheDocument()

    // Verifica se a classe de cor correta está aplicada
    expect(screen.getByText("Inativo")).toHaveClass("text-red-500")
  })
})
