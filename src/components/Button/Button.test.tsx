import { render, screen } from "@testing-library/react"
import React from "react"
import Button from "."

describe("Button component", () => {
  test("renders with the correct text", () => {
    render(<Button text="Click Me" color="green" />)
    const buttonElement = screen.getByText(/click me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test("renders with the correct color class for green", () => {
    render(<Button text="Click Me" color="green" />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("bg-primary-medium")
    expect(buttonElement).toHaveClass("hover:bg-green-800")
  })

  test("renders with the correct color class for red", () => {
    render(<Button text="Delete" color="red" />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("bg-feedback-error")
    expect(buttonElement).toHaveClass("hover:bg-red-900")
  })

  test("renders with the correct color class for white", () => {
    render(<Button text="Submit" color="white" />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("bg-white")
    expect(buttonElement).toHaveClass("hover:bg-green-800")
    expect(buttonElement).toHaveClass("text-primary-medium")
    expect(buttonElement).toHaveClass("border-primary-medium")
  })

  test("renders with an icon if provided", () => {
    render(<Button text="Save" color="green" icon={<span>🖊️</span>} />)
    const iconElement = screen.getByText("🖊️")
    expect(iconElement).toBeInTheDocument()
    expect(iconElement).toBeVisible()
  })

  test("does not render an icon if not provided", () => {
    render(<Button text="Submit" color="red" />)
    const iconElement = screen.queryByText(/🖊️/)
    expect(iconElement).not.toBeInTheDocument()
  })

  test("applies additional className if provided", () => {
    render(<Button text="Custom" color="green" className="custom-class" />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("custom-class")
  })

  test("passes additional props to the button element", () => {
    render(<Button text="Click Me" color="red" disabled />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeDisabled()
  })

  test('renders with full width when size is "full"', () => {
    render(<Button text="Full Width" color="green" size="full" />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("w-full")
  })

  test('renders with content size when size is "content"', () => {
    render(<Button text="Content Size" color="red" size="content" />)
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toHaveClass("px-3")
  })
})
