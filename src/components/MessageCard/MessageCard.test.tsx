/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { render, screen } from "@testing-library/react"
import MessageCard from "."
import "@testing-library/jest-dom"

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}))

describe("MessageCard Component", () => {
  const props = {
    name: "John Doe",
    role: "Developer",
    date: "Oct 3, 2024",
    message: "This is a test message",
    profilePicture: "/profile.jpg",
  }

  it("renders name, role, date, and message", () => {
    render(<MessageCard {...props} />)

    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByText(props.role)).toBeInTheDocument()
    expect(screen.getByText(props.date)).toBeInTheDocument()
    expect(screen.getByText(props.message)).toBeInTheDocument()
  })

  it("renders profile picture with correct alt text", () => {
    render(<MessageCard {...props} />)

    const profileImg = screen.getByAltText(`${props.name}'s profile picture`)
    expect(profileImg).toBeInTheDocument()
    expect(profileImg).toHaveAttribute("src", props.profilePicture)
  })
})
