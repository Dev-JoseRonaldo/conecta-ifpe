import { render, screen } from "@testing-library/react"
import { Header } from "."

jest.mock("../IconButton", () => {
  return function MockIconButton() {
    return <button data-testid="icon-button" />
  }
})

jest.mock("../SearchBar", () => {
  return function MockSearchBar() {
    return <input data-testid="search-bar" />
  }
})

describe("Header Component", () => {
  const title = "Meu Título"
  const userRole = "Administrador"

  test("renders the title correctly", () => {
    render(<Header title={title} userRole={userRole} />)

    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass("text-2xl", "font-bold", "text-white")
  })

  test("renders the user role correctly", () => {
    render(<Header title={title} userRole={userRole} />)

    const userRoleElement = screen.getByText(userRole)
    expect(userRoleElement).toBeInTheDocument()
    expect(userRoleElement).toHaveClass("text-base", "text-white", "antialiased")
  })

  test("renders the SearchBar component", () => {
    render(<Header title={title} userRole={userRole} />)

    const searchBarElement = screen.getByTestId("search-bar")
    expect(searchBarElement).toBeInTheDocument()
  })

  test("renders IconButton components", () => {
    render(<Header title={title} userRole={userRole} />)

    const iconButtons = screen.getAllByTestId("icon-button")
    expect(iconButtons).toHaveLength(2)
  })

  test("renders the profile image", () => {
    render(<Header title={title} userRole={userRole} />)

    const imgElement = screen.getByAltText("Profile")
    expect(imgElement).toBeInTheDocument()

    expect(imgElement).toHaveAttribute("src", expect.stringContaining("https%3A%2F%2Fgithub.com%2FDev-JoseRonaldo.png"))
    expect(imgElement).toHaveAttribute("width", "48")
    expect(imgElement).toHaveAttribute("height", "48")
  })

  test("renders the user's name correctly", () => {
    render(<Header title={title} userRole={userRole} />)

    const userNameElement = screen.getByText("José Ronaldo")
    expect(userNameElement).toBeInTheDocument()
    expect(userNameElement).toHaveClass("text-lg", "font-bold", "text-[#04091E]", "antialiased")
  })
})
