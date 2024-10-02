import type { Meta, StoryObj } from "@storybook/react"
import Table from "."

const alunosMock = [
  {
    "Data de criação": "2024-01-01 12:00:00.000000+00:00",
    Nome: "Aluno 1",
    Nota: 0.85,
  },
  {
    "Data de criação": "2024-02-01 12:00:00.000000+00:00",
    Nome: "Aluno 2",
    Nota: 0.65,
  },
]

const meta: Meta<typeof Table> = {
  title: "Table",
  component: Table,
  args: {
    alunos: alunosMock,
    colunasOmitidas: [],
  },
  argTypes: {
    alunos: {
      control: { type: "object" },
    },
    colunasOmitidas: {
      control: { type: "array" },
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
  render: (args) => <Table {...args} />,
}

export const WithOmittedColumns: Story = {
  render: (args) => <Table {...args} colunasOmitidas={["Nota"]} />,
}

export default meta
