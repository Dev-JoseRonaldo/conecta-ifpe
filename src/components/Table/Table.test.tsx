import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Table from "."

describe("Table Component", () => {
  const alunosMock = [
    {
      "Data de criação": "2024-01-01 12:00:00.000000+00:00",
      Nome: "Aluno 1",
      Nota: 0.85,
    },
    {
      "Data de criação": "2024-01-02 12:00:00.000000+00:00",
      Nome: "Aluno 2",
      Nota: 0.65,
    },
  ]

  test("should render the table with correct headers", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    expect(screen.getByText("Condição")).toBeInTheDocument()
    expect(screen.getByText("Nome")).toBeInTheDocument()
    expect(screen.getByText("Nota")).toBeInTheDocument()
  })

  test("should render correct number of rows", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(alunosMock.length + 1)
  })

  test("should change status when selected", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    const select = screen.getAllByRole("combobox")[0]

    if (!select) {
      throw new Error("Select not found")
    }

    if (select) {
      if (select) {
        fireEvent.change(select, { target: { value: "Contemplado" } })
      }
    }

    expect(select).toHaveValue("Contemplado")
  })

  test("should format date correctly", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    const formattedDateRegex = /01\/01\/2024 \d{2}:\d{2}:\d{2}/
    expect(screen.getByText(formattedDateRegex)).toBeInTheDocument()
  })

  test("should omit specified columns", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} colunasOmitidas={["Nome"]} />)

    expect(screen.queryByText("Nome")).not.toBeInTheDocument()
    expect(screen.getByText("Nota")).toBeInTheDocument()
  })

  test("should show correct background color based on status", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    const select = screen.getAllByRole("combobox")[0]

    if (!select) {
      throw new Error("Select not found")
    }

    fireEvent.change(select, { target: { value: "Contemplado" } })
    expect(select).toHaveClass("bg-primary-medium")

    fireEvent.change(select, { target: { value: "Não Contemplado" } })
    expect(select).toHaveClass("bg-feedback-error")
  })

  test("should sort by column when header is clicked", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    const headerNome = screen.getByText("Nome")
    fireEvent.click(headerNome)

    const sortedRows = screen.getAllByRole("row").slice(1) // Exclude header row
    expect(sortedRows[0]).toHaveTextContent("Aluno 1")
    expect(sortedRows[1]).toHaveTextContent("Aluno 2")

    // Click again to reverse sort
    fireEvent.click(headerNome)
    const reverseSortedRows = screen.getAllByRole("row").slice(1)
    expect(reverseSortedRows[0]).toHaveTextContent("Aluno 2")
    expect(reverseSortedRows[1]).toHaveTextContent("Aluno 1")
  })

  test("should check and uncheck checkboxes correctly", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} type="Lista de pagamento" />)

    const checkbox = screen.getAllByRole("checkbox")[0]

    if (!checkbox) {
      throw new Error("Checkbox not found")
    }

    // Check the checkbox
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()

    // Uncheck the checkbox
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })

  test("should format number as percentage correctly", () => {
    render(<Table IdentifierColumn="Data de criação" alunos={alunosMock} />)

    expect(screen.getByText("85.00%")).toBeInTheDocument()
    expect(screen.getByText("65.00%")).toBeInTheDocument()
  })
})
