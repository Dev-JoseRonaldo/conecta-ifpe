/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from "@storybook/react"
import { FaBell, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"
import NotificationCard from "."
import { NotificationCardProps } from "."

const meta: Meta<typeof NotificationCard> = {
  title: "NotificationCard",
  component: NotificationCard,
  args: {
    icon: <FaBell />,
    text: "You have a new notification!",
  },
  argTypes: {
    icon: {
      control: { type: "select", options: [<FaBell />, <FaCheckCircle />, <FaExclamationTriangle />] },
    },
    text: {
      control: { type: "text" },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<typeof NotificationCard>

export const Default: Story = {
  render: (args: NotificationCardProps) => <NotificationCard {...args} />,
}

export const SuccessNotification: Story = {
  render: (args: NotificationCardProps) => (
    <NotificationCard {...args} icon={<FaCheckCircle />} text="Action completed successfully!" />
  ),
}

export const WarningNotification: Story = {
  render: (args: NotificationCardProps) => (
    <NotificationCard {...args} icon={<FaExclamationTriangle />} text="This is a warning!" />
  ),
}

export default meta
