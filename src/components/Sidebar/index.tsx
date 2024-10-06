"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import { LuLogOut } from "react-icons/lu"
import Button from "../Button"
import Logo from "../Logo"
import { TabItem, TabItemProps } from "../TabItem"

interface SidebarProps {
  tabs: TabItemProps[]
  isCollapsed: boolean
}

export const Sidebar = ({ tabs = [], isCollapsed }: SidebarProps) => {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token")

      if (token) {
        await axios.post(
          "http://localhost:3000/users/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        localStorage.removeItem("token")

        router.push("/logout")
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error)
    }
  }

  return (
    <aside
      className={`bg-white text-black w-${
        isCollapsed ? "16" : "64"
      } flex max-w-72 flex-col items-center px-4 transition-all duration-300`}
    >
      <Logo
        src="/images/logo.png"
        alt="Logo"
        size={isCollapsed ? "small" : "large"}
        className={isCollapsed ? "mb-8 py-4" : ""}
      />

      <nav className="w-full flex-1 space-y-2 py-4">
        {tabs.length > 0
          ? tabs.map((tab, idx) => (
              <TabItem
                key={idx}
                name={tab.name}
                route={tab.route}
                IconComponent={tab.IconComponent}
                isCollapsed={isCollapsed}
              />
            ))
          : null}
      </nav>

      <Button text="Sair" color="red" onClick={handleLogout} icon={<LuLogOut size={22} />} />
    </aside>
  )
}
