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
    render(<Table alunos={alunosMock} />)

    expect(screen.getByText("Condição")).toBeInTheDocument()
    expect(screen.getByText("Nome")).toBeInTheDocument()
    expect(screen.getByText("Nota")).toBeInTheDocument()
  })

  test("should render correct number of rows", () => {
    render(<Table alunos={alunosMock} />)

    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(alunosMock.length + 1)
  })

  test("should change status when selected", () => {
    render(<Table alunos={alunosMock} />)

    const select = screen.getAllByRole("combobox")[0]

    if (!select) {
      throw new Error("Select not found")
    }

    fireEvent.change(select, { target: { value: "Contemplado" } })

    expect(select).toHaveValue("Contemplado")
  })

  test("should format date correctly", () => {
    render(<Table alunos={alunosMock} />)

    const formattedDateRegex = /01\/01\/2024 \d{2}:\d{2}:\d{2}/
    expect(screen.getByText(formattedDateRegex)).toBeInTheDocument()
  })

  test("should omit specified columns", () => {
    render(<Table alunos={alunosMock} colunasOmitidas={["Nome"]} />)

    expect(screen.queryByText("Nome")).not.toBeInTheDocument()
    expect(screen.getByText("Nota")).toBeInTheDocument()
  })
})
