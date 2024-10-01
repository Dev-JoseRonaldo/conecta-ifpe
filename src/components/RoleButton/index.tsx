import { FC, ReactElement } from "react"

interface RoleButtonProps {
  icon: ReactElement
  text: string
  onClick: () => void
}

const RoleButton: FC<RoleButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex h-64 w-80 flex-col items-center justify-center rounded-2xl bg-primary-medium text-white shadow-md transition-colors hover:bg-green-700"
    >
      <div className="mb-4 text-6xl" data-testid="icon">
        {icon}
      </div>
      <p className="text-base font-normal">
        Sou&nbsp;
        <span className="font-semibold">{text}</span>
      </p>
    </button>
  )
}

export default RoleButton
