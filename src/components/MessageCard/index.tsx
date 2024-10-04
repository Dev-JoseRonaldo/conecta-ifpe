import Image from "next/image"

export interface MessageCardProps {
  name: string
  role: string
  date: string
  message: string
  profilePicture: string
}

const MessageCard = ({ name, role, date, message, profilePicture }: MessageCardProps) => {
  return (
    <div className="flex space-x-4 rounded-lg bg-white p-6 shadow-md">
      <div className="shrink-0">
        <Image src={profilePicture} alt={`${name}'s profile picture`} width={48} height={48} className="rounded-full" />
      </div>
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div className="mb-7">
            <h3 className="text-base font-semibold text-[#0A112F]">{name}</h3>
            <p className="text-sm text-[#70707A]">{role}</p>
          </div>
          <p className="text-base font-medium text-[#0A112F]">{date}</p>
        </div>
        <div className=" text-gray-700">{message}</div>
      </div>
    </div>
  )
}

export default MessageCard
