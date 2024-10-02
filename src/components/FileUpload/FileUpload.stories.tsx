import type { Meta, StoryObj } from "@storybook/react"
import mockData from "./smallMock.json" // Importando o mock de dados
import FileUpload from "."

const meta: Meta<typeof FileUpload> = {
  title: "FileUpload",
  component: FileUpload,
  args: {
    onFileUpload: (file: File) => {
      console.log("Arquivo carregado:", file.name)
    },
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
    const handleFileUpload = async (file: File) => {
      console.log("Arquivo carregado:", file.name)
      const simulatedResponse = { data: mockData }
      console.log("Resposta simulada:", simulatedResponse.data)
    }

    return <FileUpload {...args} onFileUpload={handleFileUpload} />
  },
}

export default meta
