// LoadingSpinner.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from ".";

const meta: Meta<typeof LoadingSpinner> = {
  title: "LoadingSpinner",
  component: LoadingSpinner,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
};

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {
  render: () => <LoadingSpinner />,
};

export default meta;
