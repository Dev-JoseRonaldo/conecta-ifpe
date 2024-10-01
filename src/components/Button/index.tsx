import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  color: "green" | "red"
  icon?: React.ReactNode
  size?: "full" | "content"
}

const Button = ({ text, color, icon, className, size = "full", ...props }: ButtonProps) => {
  const colorClass =
    color === "green" ? "bg-primary-medium hover:bg-primary-dark" : "bg-feedback-error hover:bg-red-900"

  return (
    <button
      className={`${colorClass} flex ${
        size === "full" ? "w-full" : "px-3"
      } cursor-pointer items-center justify-center space-x-2 rounded-lg py-[12px] text-white transition-colors duration-200 ${className}`}
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
