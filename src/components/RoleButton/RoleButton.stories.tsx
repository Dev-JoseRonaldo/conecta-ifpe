/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from "@storybook/react"
import { FaUserGraduate, FaUserTie } from "react-icons/fa"
import RoleButton from "."

const meta: Meta<typeof RoleButton> = {
  title: "RoleButton",
  component: RoleButton,
  args: {
    icon: <FaUserGraduate />,
    text: "Aluno",
    onClick: () => {},
  },
  argTypes: {
    icon: {
      control: { type: "select", options: [<FaUserGraduate />, <FaUserTie />] },
    },
    text: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<typeof RoleButton>

export const Default: Story = {
  render: (args) => <RoleButton {...args} />,
}

export const WithProfessorIcon: Story = {
  render: (args) => <RoleButton {...args} icon={<FaUserTie />} text="Professor" />,
}

export default meta
