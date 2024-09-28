import Image from "next/image"
import { HiOutlineEnvelope } from "react-icons/hi2"
import { TbBell } from "react-icons/tb"

import IconButton from "../IconButton"
import SearchBar from "../SearchBar"

interface HeaderProps {
  title: string
  userRole: string
}

export const Header = ({ title, userRole }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between bg-primary-medium p-4 px-12">
      <div className="mr-4 text-2xl font-bold text-white">{title}</div>

      <SearchBar />

      <div className="flex">
        <div className="flex gap-2">
          <IconButton IconComponent={HiOutlineEnvelope} showBadge={true} size={22} />
          <IconButton IconComponent={TbBell} showBadge={true} />
        </div>

        <div
          className="before:y-1/2 relative ml-3 flex items-center gap-4 px-3 
            before:absolute before:left-0 before:h-4/5 before:w-px before:bg-white before:content-['']"
        >
          <Image
            src="https://github.com/Dev-JoseRonaldo.png"
            alt="Profile"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[#04091E] antialiased">José Ronaldo</span>
            <span className="text-base text-white antialiased">{userRole}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
