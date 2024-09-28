/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { FaBeer } from "react-icons/fa" // Exemplo de ícone a ser utilizado
import IconButton from "."

describe("IconButton Component", () => {
  test("renders the IconButton with the icon", () => {
    render(<IconButton IconComponent={FaBeer} />)

    // Verifica se o botão está no documento
    const buttonElement = screen.getByRole("button")
    expect(buttonElement).toBeInTheDocument()

    // Verifica se o ícone está presente no botão
    const iconElement = buttonElement.querySelector("svg")
    expect(iconElement).toBeInTheDocument()
  })

  test("renders the badge when showBadge is true", () => {
    render(<IconButton IconComponent={FaBeer} showBadge={true} />)

    const badgeElement = screen.getByTestId("badge")
    expect(badgeElement).toBeInTheDocument()
  })

  test("does not render the badge when showBadge is false", () => {
    render(<IconButton IconComponent={FaBeer} showBadge={false} />)

    const badgeElement = screen.queryByRole("img", { name: /badge/i }) // Atualizar para usar um papel adequado ou simplesmente verificar a classe do badge
    expect(badgeElement).not.toBeInTheDocument()
  })

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn()
    render(<IconButton IconComponent={FaBeer} onClick={handleClick} />)

    const buttonElement = screen.getByRole("button")
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test("sets the correct icon size", () => {
    render(<IconButton IconComponent={FaBeer} size={30} />)
    const buttonElement = screen.getByRole("button")

    // Verifica se o SVG dentro do botão possui o tamanho correto
    const iconElement = buttonElement.querySelector("svg")
    expect(iconElement).toHaveAttribute("height", "30")
    expect(iconElement).toHaveAttribute("width", "30")
  })
})
