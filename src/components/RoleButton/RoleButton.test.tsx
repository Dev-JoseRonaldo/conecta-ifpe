import { fireEvent, render, screen, within } from "@testing-library/react"
import { FaUserGraduate } from "react-icons/fa" // Exemplo de ícone
import RoleButton from "."
import "@testing-library/jest-dom" // Para matchers como .toBeInTheDocument()

describe("RoleButton Component", () => {
  it("should render the icon and text correctly", () => {
    render(<RoleButton icon={<FaUserGraduate />} text="Aluno" onClick={() => {}} />)

    const button = screen.getByRole("button")
    const icon = within(button).getByTestId("icon")

    expect(within(button).getByText("Sou")).toBeInTheDocument()
    expect(within(button).getByText("Aluno")).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it("should call onClick when the button is clicked", () => {
    const onClickMock = jest.fn()

    render(<RoleButton icon={<FaUserGraduate />} text="Aluno" onClick={onClickMock} />)

    const button = screen.getByRole("button")
    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it("should match snapshot", () => {
    const { container } = render(<RoleButton icon={<FaUserGraduate />} text="Aluno" onClick={() => {}} />)
    expect(container).toMatchSnapshot()
  })
})
