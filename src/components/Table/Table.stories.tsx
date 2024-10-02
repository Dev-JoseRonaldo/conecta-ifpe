import type { Meta, StoryObj } from "@storybook/react"
import Table from "."

const alunosMock = [
  {
    "Data de criação": "2024-01-01 12:00:00.000000+00:00",
    Nome: "Aluno 1",
    CPF: "123.456.789-00",
    Nota: 0.85,
  },
  {
    "Data de criação": "2024-02-01 12:00:00.000000+00:00",
    Nome: "Aluno 2",
    CPF: "987.654.321-00",
    Nota: 0.65,
  },
  {
    "Data de criação": "2024-03-01 12:00:00.000000+00:00",
    Nome: "Aluno 3",
    CPF: "456.789.123-00",
    Nota: 0.45,
  },
]

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
  args: {
    alunos: alunosMock,
    colunasOmitidas: [],
    type: "Analise de inscriçoes",
  },
  argTypes: {
    alunos: {
      control: { type: "object" },
    },
    colunasOmitidas: {
      control: { type: "array" },
    },
    type: {
      control: { type: "select", options: ["Lista de pagamento", "Analise de inscrições"] },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: (args) => <Table {...args} IdentifierColumn="CPF" />,
}

export const WithOmittedColumns: Story = {
  render: (args) => <Table {...args} IdentifierColumn="CPF" colunasOmitidas={["Nota"]} />,
}

export const WithDifferentType: Story = {
  render: (args) => <Table {...args} IdentifierColumn="CPF" type="Lista de pagamento" />,
}

export const WithCheckboxes: Story = {
  render: (args) => <Table {...args} IdentifierColumn="CPF" type="Lista de pagamento" />,
}

export const WithAllOptions: Story = {
  render: (args) => (
    <Table
      {...args}
      alunos={alunosMock}
      colunasOmitidas={["Nome"]}
      type="Analise de inscriçoes"
      IdentifierColumn="CPF"
    />
  ),
}

export default meta
