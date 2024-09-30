import Logo from "../Logo"
import { TabItem, TabItemProps } from "../TabItem"

interface SidebarProps {
  tabs: TabItemProps[]
  isCollapsed: boolean
}

export const Sidebar = ({ tabs = [], isCollapsed }: SidebarProps) => {
  return (
    <aside
      className={`bg-white text-black w-${
        isCollapsed ? "16" : "64"
      } flex max-w-72 flex-col items-center transition-all duration-300`}
    >
      <Logo
        src="/images/logo.png"
        alt="Logo"
        size={isCollapsed ? "small" : "large"}
        className={isCollapsed ? "mb-8 py-4" : ""}
      />

      <nav className="w-full flex-1 space-y-2 p-4">
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
    </aside>
  )
}
