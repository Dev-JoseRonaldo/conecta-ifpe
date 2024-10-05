/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react"
import React from "react"
import LoadingSpinner from "."

describe("Loading Component", () => {
  test("should render loading spinner", () => {
    render(<LoadingSpinner />)

    const loadingContainer = screen.getByTestId("loading-container")
    expect(loadingContainer).toBeInTheDocument()

    expect(loadingContainer).toHaveClass("flex")
    expect(loadingContainer).toHaveClass("h-screen")
    expect(loadingContainer).toHaveClass("items-center")
    expect(loadingContainer).toHaveClass("justify-center")
    expect(loadingContainer).toHaveClass("bg-white")

    const spinner = loadingContainer.querySelector("div")
    expect(spinner).toHaveClass("animate-spin")
    expect(spinner).toHaveClass("border-t-4")
  })
})
