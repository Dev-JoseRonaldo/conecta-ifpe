import React from "react"
import { FaCheck, FaTimes } from "react-icons/fa"

export interface StatusBadgeProps {
  status: "ativo" | "inativo"
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const isActive = status === "ativo"

  return (
    <div className="flex w-fit items-center rounded-lg bg-white px-10 py-6 text-lg shadow-md">
      <div
        className={`flex size-10 items-center justify-center rounded-full ${
          isActive ? "bg-primary-medium" : "bg-red-500"
        }`}
      >
        {isActive ? (
          <FaCheck className="text-white" size={22} data-testid="active-icon" />
        ) : (
          <FaTimes className="text-white" size={22} data-testid="inactive-icon" />
        )}
      </div>
      <div className="ml-3 flex flex-col">
        <span className="font-normal">Bolsista</span>
        <span className={`font-medium ${isActive ? "text-green-500" : "text-red-500"}`}>
          {isActive ? "Ativo" : "Inativo"}
        </span>
      </div>
    </div>
  )
}

export default StatusBadge
