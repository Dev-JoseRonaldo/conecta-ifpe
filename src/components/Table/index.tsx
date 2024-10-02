import React from "react"
import { useState } from "react"

type AlunoData = {
  [key: string]: any
}

type TableProps = {
  alunos: AlunoData[]
  colunasOmitidas?: string[]
}

const Table: React.FC<TableProps> = ({ alunos, colunasOmitidas }) => {
  const [statusAlunos, setStatusAlunos] = useState<{ [key: string]: string }>(
    alunos.reduce((acc, aluno) => ({ ...acc, [aluno["Data de criação"]]: "" }), {})
  )

  const handleStatusChange = (dataCriacao: string, novoStatus: string) => {
    setStatusAlunos((prev) => ({
      ...prev,
      [dataCriacao]: novoStatus,
    }))
  }

  const colunas =
    alunos.length > 0 ? Object.keys(alunos[0] || {}).filter((coluna) => !colunasOmitidas?.includes(coluna)) : []

  const formatValue = (value: any) => {
    try {
      const dataRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{6}\+\d{2}:\d{2}$/

      if (typeof value === "string" && dataRegex.test(value)) {
        const data = new Date(value)
        return `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${data.getFullYear()} ${data.getHours().toString().padStart(2, "0")}:${data
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${data.getSeconds().toString().padStart(2, "0")}`
      }

      const number = parseFloat(value)
      if (number < 1 && number > 0) {
        return `${(number * 100).toFixed(2)}%`
      } else {
        return value.toString()
      }
    } catch (error) {
      return value.toString()
    }
  }

  return (
    <table className="table-auto border-collapse border-t border-gray-200 bg-white">
      <thead className="whitespace-nowrap text-[#718096]">
        <tr>
          <th className="p-8 font-normal">Condição</th>
          {colunas.map((coluna) => (
            <th key={coluna} className="p-8 font-normal">
              {coluna}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno, idx) => (
          <tr key={idx} className="border-t text-center">
            <td className="whitespace-nowrap p-8">
              <select
                value={statusAlunos[aluno["Data de criação"]]}
                onChange={(e) => handleStatusChange(aluno["Data de criação"], e.target.value)}
                className={`appearance-none rounded-lg border border-gray-300 p-2 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  statusAlunos[aluno["Data de criação"]] === "Contemplado"
                    ? "bg-primary-medium text-white"
                    : statusAlunos[aluno["Data de criação"]] === "Não Contemplado"
                    ? "bg-feedback-error text-white"
                    : "bg-white"
                }`}
              >
                <option value="">Selecione uma opção</option>
                <option value="Contemplado">Contemplado</option>
                <option value="Não Contemplado">Não Contemplado</option>
              </select>
            </td>
            {colunas.map((coluna) => (
              <td
                key={coluna}
                className={`items p-8 ${(aluno[coluna]?.toString()).length > 80 ? "max-w-16 truncate" : ""}`}
              >
                {formatValue(aluno[coluna])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
