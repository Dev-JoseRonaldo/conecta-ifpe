import type { Meta, StoryObj } from "@storybook/react"
import FileUpload from "."

const meta: Meta<typeof FileUpload> = {
  title: "FileUpload",
  component: FileUpload,
  args: {
    onFileUpload: (file: File) => console.log(file.name),
  },
  argTypes: {
    onFileUpload: {
      action: "file uploaded",
    },
  },
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
}

type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  render: (args) => <FileUpload {...args} />,
}

export const UploadExample: Story = {
  render: (args) => {
    const handleFileUpload = (file: File) => {
      console.log("Uploaded file:", file.name)
    }

    return <FileUpload {...args} onFileUpload={handleFileUpload} />
  },
}

export default meta
