import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color: "green" | "red" | "white"
  icon?: React.ReactNode
  size?: "full" | "content"
}

const Button = ({ text, color, icon, className, size = "full", ...props }: ButtonProps) => {
  const colorClass =
    color === "green"
      ? "text-white bg-primary-medium hover:bg-green-800"
      : color === "white"
      ? "bg-white hover:bg-green-800 hover:text-white hover:border-green-800 text-primary-medium border-primary-medium border mt-0"
      : "text-white bg-feedback-error hover:bg-red-900"

  return (
    <button
      className={`flex ${
        size === "full" ? "w-full" : "px-3"
      } cursor-pointer items-center justify-center space-x-2 rounded-lg py-[12px]  transition-colors duration-200 ${className} ${colorClass}`}
      {...props}
    >
      <div className="flex items-center justify-center gap-3">
        {icon && <span>{icon}</span>}
        <span className="w-full text-center font-bold">{text}</span>
      </div>
    </button>
  )
}

export default Button
