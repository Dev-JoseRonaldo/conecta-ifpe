import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "."

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  args: {
    title: "My Application",
    userRole: "Admin",
  },
  argTypes: {
    title: {
      control: { type: "text" },
    },
    userRole: {
      control: { type: "text" },
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof Header>

export const Default: Story = {
  render: (args) => <Header {...args} />,
}

export const UserRoleGuest: Story = {
  render: (args) => <Header {...args} userRole="Guest" />,
}

export default meta
