/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen } from "@testing-library/react"
import Logo from "./index"

// Mock do componente Image
jest.mock("next/image", () => {
  return function MockImage(props: { src: string; alt: string; width: number; height: number }) {
    return <img {...props} />
  }
})

describe("Logo Component", () => {
  test("renders the large logo by default", () => {
    render(<Logo src="/images/logo.png" alt="Test Logo" />)

    const imgElement = screen.getByAltText("Test Logo")
    expect(imgElement).toHaveAttribute("src", "/images/logo.png")
    expect(imgElement).toHaveAttribute("width", "190")
    expect(imgElement).toHaveAttribute("height", "195")
  })

  test("renders the medium logo when size is medium", () => {
    render(<Logo src="/images/logo.png" alt="Test Logo" size="medium" />)

    const imgElement = screen.getByAltText("Test Logo")
    expect(imgElement).toHaveAttribute("src", "/images/logo.png")
    expect(imgElement).toHaveAttribute("width", "100")
    expect(imgElement).toHaveAttribute("height", "103")
  })

  test("renders the small logo when size is small", () => {
    render(<Logo src="/images/logo.png" alt="Test Logo" size="small" />)

    const imgElement = screen.getByAltText("Test Logo")
    expect(imgElement).toHaveAttribute("src", "/images/logo.png")
    expect(imgElement).toHaveAttribute("width", "65")
    expect(imgElement).toHaveAttribute("height", "67")
  })

  test("applies additional props correctly", () => {
    render(<Logo src="/images/logo.png" alt="Test Logo" data-testid="logo-component" />)

    const imgElement = screen.getByTestId("logo-component")
    expect(imgElement).toBeInTheDocument()
  })
})
