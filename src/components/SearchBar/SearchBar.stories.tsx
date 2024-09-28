import type { Meta, StoryObj } from "@storybook/react"
import SearchBar from "."

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
}

type Story = StoryObj<typeof SearchBar>

export const Default: Story = {
  render: () => <SearchBar />,
}

export default meta
