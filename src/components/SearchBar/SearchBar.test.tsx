import { fireEvent, render, screen } from "@testing-library/react"

import SearchBar from "."

describe("SearchBar", () => {
  test("renders SearchBar component", () => {
    render(<SearchBar />)
    const inputElement = screen.getByPlaceholderText("Procurar...")
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue("")
  })

  test("updates input value on change", () => {
    render(<SearchBar />)
    const inputElement = screen.getByPlaceholderText("Procurar...")

    fireEvent.change(inputElement, { target: { value: "test" } })
    expect(inputElement).toHaveValue("test")
  })
})
