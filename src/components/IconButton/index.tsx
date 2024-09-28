import React from "react"
import { IconType } from "react-icons"

interface IconButtonProps {
  IconComponent: IconType
  showBadge?: boolean
  size?: number
  onClick?: () => void
}

const IconButton = ({ IconComponent, showBadge = false, size = 24, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative flex size-12 items-center justify-center rounded-full bg-white 
        focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-offset-2"
    >
      <IconComponent size={size} color="#000" />
      {showBadge && (
        <>
          <div
            data-testid="badge"
            className="absolute left-[52%] top-3 size-3  rounded-full border-2 border-white bg-gradient-to-br from-[#FCAD02] to-[#FF0041]"
          />
          <div className="absolute left-[52%] top-3 size-3  animate-ping rounded-full border-2 border-white bg-gradient-to-br from-[#FCAD02] to-[#FF0041] opacity-75 transition-all duration-500 ease-out group-hover:animate-none" />
        </>
      )}
    </button>
  )
}

export default IconButton
