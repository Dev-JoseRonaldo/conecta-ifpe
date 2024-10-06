/* eslint-disable jest/no-conditional-expect */
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Table from "." // Ajuste o caminho conforme a estrutura do seu projeto

describe("Table Component", () => {
  const alunosMock = [
    {
      cpf: "12345678901",
      Nome: "Aluno 1",
      Email: "aluno1@example.com",
    },
    {
      cpf: "09876543210",
      Nome: "Aluno 2",
      Email: "aluno2@example.com",
    },
  ]

  test("renders table with correct headers", () => {
    render(<Table alunos={alunosMock} IdentifierColumn="cpf" type="Lista de pagamento" />)

    expect(screen.getByText("Condição")).toBeInTheDocument()
    expect(screen.getByText("Nome")).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()
  })

  test("renders the correct number of rows", () => {
    render(<Table alunos={alunosMock} IdentifierColumn="cpf" type="Lista de pagamento" />)

    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(alunosMock.length + 1) // +1 para o header
  })

  test("calls onCheckboxSelection when a checkbox is clicked", () => {
    const mockOnCheckboxSelection = jest.fn()
    render(
      <Table
        alunos={alunosMock}
        IdentifierColumn="cpf"
        type="Lista de pagamento"
        onCheckboxSelection={mockOnCheckboxSelection}
      />
    )

    const checkbox = screen.getAllByRole("checkbox")[0]

    if (checkbox) {
      fireEvent.click(checkbox)
    }

    expect(mockOnCheckboxSelection).toHaveBeenCalledWith(["12345678901"])
  })

  test("toggles checkbox state when clicked", () => {
    render(<Table alunos={alunosMock} IdentifierColumn="cpf" type="Lista de pagamento" />)

    const checkbox = screen.getAllByRole("checkbox")[0]
    expect(checkbox).not.toBeChecked()

    if (checkbox) {
      fireEvent.click(checkbox)
      expect(checkbox).toBeChecked()

      fireEvent.click(checkbox)
      expect(checkbox).not.toBeChecked()
    }
  })

  test("renders without omitting columns", () => {
    render(<Table alunos={alunosMock} IdentifierColumn="cpf" type="Lista de pagamento" colunasOmitidas={[]} />)

    expect(screen.getByText("Nome")).toBeInTheDocument()
    expect(screen.getByText("Email")).toBeInTheDocument()
  })

  test("omits specified columns", () => {
    render(<Table alunos={alunosMock} IdentifierColumn="cpf" type="Lista de pagamento" colunasOmitidas={["Email"]} />)

    expect(screen.queryByText("Email")).not.toBeInTheDocument()
  })
})
