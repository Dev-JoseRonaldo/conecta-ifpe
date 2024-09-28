import type { Meta, StoryObj } from "@storybook/react"
import { FaBeer } from "react-icons/fa"
import IconButton from "."

const meta: Meta<typeof IconButton> = {
  title: "IconButton",
  component: IconButton,
  args: {
    IconComponent: FaBeer,
    showBadge: false,
    size: 24,
  },
  argTypes: {
    IconComponent: {
      control: { type: "select", options: [FaBeer] },
    },
    showBadge: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "number" },
    },
    onClick: {
      action: "clicked",
    },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  render: (args) => <IconButton {...args} />,
}

export const WithBadge: Story = {
  render: (args) => <IconButton {...args} showBadge={true} />,
}

export default meta
