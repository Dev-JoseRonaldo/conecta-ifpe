import { ReactNode } from "react"

export interface NotificationCardProps {
  icon: ReactNode
  text: string
}

const NotificationCard = ({ icon, text }: NotificationCardProps) => {
  return (
    <div className="flex max-w-96 items-center rounded-lg bg-white p-8 shadow-md">
      <div className="mr-4">{icon}</div>
      <p className="text-lg text-black">{text}</p>
    </div>
  )
}

export default NotificationCard
