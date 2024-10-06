import React, { useEffect, useState } from "react"

type AlunoData = {
  [key: string]: any
}

type TableProps = {
  alunos: AlunoData[]
  colunasOmitidas?: string[]
  IdentifierColumn: string
  type?: "Lista de pagamento" | "Analise de inscriçoes" | "Extrato de pagamento"
  onCheckboxSelection?: (selectedIds: string[]) => void
}

const Table: React.FC<TableProps> = ({
  alunos,
  colunasOmitidas,
  type = "Analise de inscriçoes",
  IdentifierColumn,
  onCheckboxSelection,
}) => {
  const [activeCheckboxes, setActiveCheckboxes] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    // Chama a função para informar os ids selecionados
    const selectedIds = Object.keys(activeCheckboxes).filter((id) => activeCheckboxes[id])
    onCheckboxSelection?.(selectedIds)
  }, [activeCheckboxes, onCheckboxSelection])

  const handleCheckboxChange = (id: string) => {
    setActiveCheckboxes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const colunas =
    alunos.length > 0
      ? Object.keys(alunos[0] as Record<string, unknown>).filter((coluna) => !colunasOmitidas?.includes(coluna))
      : []

  return (
    <table className="table-auto border-collapse border-t border-gray-200 bg-white">
      <thead className="whitespace-nowrap text-[#718096]">
        <tr>
          {type !== "Extrato de pagamento" && <th className="p-8 font-normal">Condição</th>}
          {colunas.map((coluna) => (
            <th key={coluna} className="cursor-pointer p-8 font-normal">
              {coluna}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno, idx) => (
          <tr key={idx} className="border-t text-center">
            {type === "Lista de pagamento" && (
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
            )}
            {colunas.map((coluna) => (
              <td key={coluna} className="items p-8">
                {aluno[coluna]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
