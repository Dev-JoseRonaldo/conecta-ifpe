/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from "@storybook/react"
import { FaBeer } from "react-icons/fa"
import Button from "."

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  args: {
    text: "Click Me",
    color: "green",
    icon: undefined,
    size: "full",
  },
  argTypes: {
    color: {
      control: { type: "select", options: ["green", "red"] },
    },
    icon: {
      control: { type: "select", options: [undefined, <FaBeer />] },
    },
    size: {
      control: { type: "select", options: ["full", "content"] },
    },
    onClick: {
      action: "clicked",
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => <Button {...args} />,
}

export const GreenButton: Story = {
  render: (args) => <Button {...args} text="Green Button" color="green" />,
}

export const RedButton: Story = {
  render: (args) => <Button {...args} text="Red Button" color="red" />,
}

export const ButtonWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<FaBeer />}>
      Button with Icon
    </Button>
  ),
}

export const FullWidthButton: Story = {
  render: (args) => <Button {...args} text="Full Width Button" size="full" />,
}

export const ContentSizedButton: Story = {
  render: (args) => <Button {...args} text="Content Sized Button" size="content" />,
}

export const ContentSizedIconButton: Story = {
  render: (args) => <Button {...args} text="Content Sized Icon Button" size="content" icon={<FaBeer />} />,
}

export default meta
