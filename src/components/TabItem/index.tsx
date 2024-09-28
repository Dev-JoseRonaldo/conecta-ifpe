import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { IconType } from "react-icons"

export interface TabItemProps {
  name: string
  IconComponent: IconType
  route: string
  iconSize?: number
}

export interface TabItemComponentProps extends TabItemProps {
  isCollapsed: boolean
}

export const TabItem = ({ name, IconComponent, iconSize = 24, route, isCollapsed }: TabItemComponentProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = pathname === route

  return (
    <div
      className={`flex cursor-pointer items-center rounded-lg p-4 hover:bg-primary-medium hover:text-white 
        ${isActive ? "bg-primary-medium text-white" : ""} ${isCollapsed ? "justify-center" : ""}`}
      onClick={() => router.push(route)}
    >
      <IconComponent size={iconSize} className={`${!isCollapsed ? "mr-2" : ""}`} />
      {!isCollapsed && <span className="max-w-22 text-base">{name}</span>}
    </div>
  )
}
