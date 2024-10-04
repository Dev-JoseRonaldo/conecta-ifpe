import { Meta, StoryObj } from "@storybook/react"
import MessageCard, { MessageCardProps } from "."

const meta: Meta<typeof MessageCard> = {
  title: "MessageCard",
  component: MessageCard,
  args: {
    name: "John Doe",
    role: "Developer",
    date: "Oct 3, 2024",
    message: "This is a test message",
    profilePicture: "https://github.com/Dev-JoseRonaldo.png",
  },
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    date: { control: "text" },
    message: { control: "text" },
    profilePicture: { control: "text" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<MessageCardProps>

export const Default: Story = {
  render: (args: MessageCardProps) => <MessageCard {...args} />,
}

export const LongMessage: Story = {
  render: (args: MessageCardProps) => (
    <MessageCard
      {...args}
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac lacinia erat, vel pellentesque lacus. Aliquam erat volutpat."
    />
  ),
}

export const WithoutProfilePicture: Story = {
  render: (args: MessageCardProps) => <MessageCard {...args} profilePicture="" />,
}

export default meta
