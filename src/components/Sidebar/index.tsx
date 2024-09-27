interface SidebarProps {
  tabs?: Array<{ name: string; route: string }> // Tornando tabs opcional
  isCollapsed: boolean
  toggleCollapse: () => void
}

export const Sidebar = ({ tabs = [], isCollapsed, toggleCollapse }: SidebarProps) => {
  return (
    <aside
      className={`bg-green-700 text-white w-${isCollapsed ? "16" : "64"} flex flex-col transition-all duration-300`}
    >
      <div className="p-4">
        <button onClick={toggleCollapse}>{isCollapsed ? "Expandir" : "Colapsar"}</button>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {/* Verificando se tabs está definido e possui itens */}
        {tabs.length > 0 ? (
          tabs.map((tab, idx) => (
            <a key={idx} href={tab.route} className="block rounded px-4 py-2 hover:bg-green-600">
              {isCollapsed ? tab.name[0] : tab.name}
            </a>
          ))
        ) : (
          <p className="text-white">Nenhuma aba disponível</p>
        )}
      </nav>
    </aside>
  )
}
