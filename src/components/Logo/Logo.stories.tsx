import type { Meta, StoryObj } from "@storybook/react"
import Logo from "."

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  args: {
    src: "https://res.cloudinary.com/devjoseronaldo/image/upload/v1727537592/logo-ifpe_cxcyfs.png",
    alt: "Logo",
    size: "large",
  },
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    src: {
      control: { type: "text" },
    },
    alt: {
      control: { type: "text" },
    },
  },
}

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  render: (args) => <Logo {...args} />,
}

export default meta
