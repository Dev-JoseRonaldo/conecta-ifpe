/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react"
import { usePathname, useRouter } from "next/navigation"
import { FaBeer } from "react-icons/fa"

import { TabItem } from "."

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}))

describe("TabItem", () => {
  const mockPush = jest.fn()
  const mockUsePathname = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
  })

  it("renders correctly", () => {
    mockUsePathname.mockReturnValue("/some-route")
    ;(usePathname as jest.Mock).mockImplementation(mockUsePathname)

    render(<TabItem name="Test Tab" IconComponent={FaBeer} route="/some-route" isCollapsed={false} />)

    expect(screen.getByText("Test Tab")).toBeInTheDocument()
  })

  it("applies active styles when the route is active", () => {
    mockUsePathname.mockReturnValue("/active-route")
    ;(usePathname as jest.Mock).mockImplementation(mockUsePathname)

    render(<TabItem name="Active Tab" IconComponent={FaBeer} route="/active-route" isCollapsed={false} />)

    const tabItem = screen.getByText("Active Tab").closest("div") // Obtém o contêiner
    expect(tabItem).toHaveClass("bg-primary-medium text-white")
  })

  it("navigates to the correct route on click", () => {
    mockUsePathname.mockReturnValue("/some-route")
    ;(usePathname as jest.Mock).mockImplementation(mockUsePathname)

    render(<TabItem name="Navigate Tab" IconComponent={FaBeer} route="/navigate-route" isCollapsed={false} />)

    const tabItem = screen.getByText("Navigate Tab")
    tabItem.click()

    expect(mockPush).toHaveBeenCalledWith("/navigate-route")
  })

  it("renders collapsed view correctly", () => {
    mockUsePathname.mockReturnValue("/some-route")
    ;(usePathname as jest.Mock).mockImplementation(mockUsePathname)

    render(<TabItem name="Collapsed Tab" IconComponent={FaBeer} route="/some-route" isCollapsed={true} />)

    expect(screen.queryByText("Collapsed Tab")).not.toBeInTheDocument()
  })
})
