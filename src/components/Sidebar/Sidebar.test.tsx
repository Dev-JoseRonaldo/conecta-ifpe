// src/components/Sidebar/Sidebar.test.tsx
import { render, screen } from "@testing-library/react"
import { useRouter } from "next/navigation" // Importando useRouter do next/navigation
import Logo from "../Logo"
import { TabItemProps } from "../TabItem"
import { Sidebar } from "."

// Mock para o componente Logo
jest.mock("../Logo", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="logo" />),
}))

// Mock para o componente TabItem
jest.mock("../TabItem", () => ({
  __esModule: true,
  TabItem: jest.fn(({ name }: TabItemProps) => <div>{name}</div>),
}))

// Mock do useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

describe("Sidebar Component", () => {
  const tabs: TabItemProps[] = [
    { name: "Dashboard", route: "/dashboard", IconComponent: jest.fn() },
    { name: "Settings", route: "/settings", IconComponent: jest.fn() },
  ]

  test("renders the Sidebar with logo and tabs", () => {
    const pushMock = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: pushMock }) // Mockando o método push

    render(<Sidebar tabs={tabs} isCollapsed={false} />)

    // Verifica se o logo foi renderizado
    const logoElement = screen.getByTestId("logo")
    expect(logoElement).toBeInTheDocument()

    // Verifica se os TabItems foram renderizados
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
  })

  test("renders the Sidebar with collapsed state", () => {
    const pushMock = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: pushMock }) // Mockando o método push

    render(<Sidebar tabs={tabs} isCollapsed={true} />)

    // Verifica se o logo está com o tamanho pequeno (collapsed)
    expect(Logo).toHaveBeenCalledWith(expect.objectContaining({ size: "small" }), expect.anything())

    // Verifica se os TabItems foram renderizados corretamente
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
  })

  test("does not render tabs when none are provided", () => {
    const pushMock = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: pushMock }) // Mockando o método push

    render(<Sidebar tabs={[]} isCollapsed={false} />)

    // Verifica se os TabItems não são renderizados
    expect(screen.queryByText("Dashboard")).not.toBeInTheDocument()
    expect(screen.queryByText("Settings")).not.toBeInTheDocument()
  })
})
