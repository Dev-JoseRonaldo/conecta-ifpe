import { render, screen } from "@testing-library/react"
import { FaBell } from "react-icons/fa"
import NotificationCard from "."
import "@testing-library/jest-dom"

describe("NotificationCard Component", () => {
  const props = {
    icon: <FaBell aria-label="notification icon" />,
    text: "You have a new notification!",
  }

  it("renders the icon and text", () => {
    render(<NotificationCard {...props} />)

    const iconElement = screen.getByLabelText("notification icon")
    expect(iconElement).toBeInTheDocument()

    expect(screen.getByText(props.text)).toBeInTheDocument()
  })

  it("renders the text with correct content", () => {
    render(<NotificationCard {...props} />)

    const textElement = screen.getByText(props.text)
    expect(textElement).toBeInTheDocument()
    expect(textElement).toHaveTextContent("You have a new notification!")
  })
})
