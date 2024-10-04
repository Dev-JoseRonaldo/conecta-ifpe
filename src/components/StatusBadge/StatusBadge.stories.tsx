import type { Meta, StoryObj } from "@storybook/react"
import StatusBadge, { StatusBadgeProps } from "." // Ajuste o caminho de importação conforme necessário

const meta: Meta<typeof StatusBadge> = {
  title: "StatusBadge",
  component: StatusBadge,
  args: {
    status: "ativo",
  },
  argTypes: {
    status: {
      control: { type: "select", options: ["ativo", "inativo"] },
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<typeof StatusBadge>

export const Ativo: Story = {
  render: (args: StatusBadgeProps) => <StatusBadge {...args} />,
}

export const Inativo: Story = {
  render: () => <StatusBadge status="inativo" />,
}

export default meta
