import React, { useState } from "react"

type AlunoData = {
  [key: string]: any
}

type TableProps = {
  alunos: AlunoData[]
  colunasOmitidas?: string[]
  IdentifierColumn: string
  type?: "Lista de pagamento" | "Analise de inscriçoes"
}

const Table: React.FC<TableProps> = ({ alunos, colunasOmitidas, type = "Analise de inscriçoes", IdentifierColumn }) => {
  const [statusAlunos, setStatusAlunos] = useState<{ [key: string]: string }>(
    alunos.reduce((acc, aluno) => ({ ...acc, [aluno[IdentifierColumn]]: "" }), {})
  )

  const [ordem, setOrdem] = useState<{
    coluna: string | null
    direcao: "asc" | "desc"
  }>({
    coluna: null,
    direcao: "asc",
  })

  const [activeCheckboxes, setActiveCheckboxes] = useState<{ [key: string]: boolean }>({})

  const handleStatusChange = (dataCriacao: string, novoStatus: string) => {
    setStatusAlunos((prev) => ({
      ...prev,
      [dataCriacao]: novoStatus,
    }))
  }

  const handleCheckboxChange = (dataCriacao: string) => {
    setActiveCheckboxes((prev) => ({
      ...prev,
      [dataCriacao]: !prev[dataCriacao],
    }))
  }

  const colunas =
    alunos.length > 0
      ? Object.keys(alunos[0] as Record<string, unknown>).filter((coluna) => !colunasOmitidas?.includes(coluna))
      : []

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

  const getBallColor = (value: string) => {
    const percent = parseFloat(value)
    if (percent >= 0.75) return "bg-feedback-success"
    if (percent >= 0.25) return "bg-feedback-alert"
    return "bg-feedback-error"
  }

  const handleSort = (coluna: string) => {
    const direcao = ordem.coluna === coluna && ordem.direcao === "asc" ? "desc" : "asc"
    setOrdem({ coluna, direcao })
  }

  const sortedAlunos = [...alunos].sort((a, b) => {
    if (ordem.coluna) {
      const valorA = a[ordem.coluna]
      const valorB = b[ordem.coluna]

      if (valorA < valorB) return ordem.direcao === "asc" ? -1 : 1
      if (valorA > valorB) return ordem.direcao === "asc" ? 1 : -1
      return 0
    }
    return 0
  })

  return (
    <table className="table-auto border-collapse border-t border-gray-200 bg-white">
      <thead className="whitespace-nowrap text-[#718096]">
        <tr>
          <th className="p-8 font-normal">Condição</th>
          {colunas.map((coluna) => (
            <th key={coluna} className="cursor-pointer p-8 font-normal" onClick={() => handleSort(coluna)}>
              {coluna} {ordem.coluna === coluna ? (ordem.direcao === "asc" ? "↑" : "↓") : ""}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedAlunos.map((aluno, idx) => (
          <tr key={idx} className="border-t text-center">
            {type === "Lista de pagamento" ? (
              <td className="whitespace-nowrap p-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={activeCheckboxes[aluno[IdentifierColumn]] || false}
                    onChange={() => handleCheckboxChange(aluno[IdentifierColumn])}
                    className="form-checkbox size-5 cursor-pointer rounded border-gray-300 text-green-500 accent-feedback-success focus:ring-green-500"
                  />
                </label>
              </td>
            ) : (
              <td className="whitespace-nowrap p-8">
                <select
                  value={statusAlunos[aluno[IdentifierColumn]]}
                  onChange={(e) => handleStatusChange(aluno[IdentifierColumn], e.target.value)}
                  className={`appearance-none rounded-lg border border-gray-300 p-2 text-gray-700 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    statusAlunos[aluno[IdentifierColumn]] === "Contemplado"
                      ? "bg-primary-medium text-white"
                      : statusAlunos[aluno[IdentifierColumn]] === "Não Contemplado"
                      ? "bg-feedback-error text-white"
                      : "bg-white"
                  }`}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Contemplado">Contemplado</option>
                  <option value="Não Contemplado">Não Contemplado</option>
                </select>
              </td>
            )}
            {colunas.map((coluna) => (
              <td
                key={coluna}
                className={`items p-8 ${(aluno[coluna]?.toString()).length > 80 ? "max-w-16 truncate" : ""}`}
              >
                {coluna === "Nível de necessidade" ? (
                  <div className="flex items-center">
                    <span className={`mr-2 size-4 rounded-full ${getBallColor(aluno[coluna])}`}></span>
                    {formatValue(aluno[coluna])}
                  </div>
                ) : (
                  formatValue(aluno[coluna])
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
