import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import FileUpload from "." // Ajuste o caminho conforme necessário

describe("FileUpload component", () => {
  const mockOnFileUpload = jest.fn()

  beforeEach(() => {
    mockOnFileUpload.mockClear()
  })

  test("renders correctly", () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />)
    const uploadText = screen.getByText(/arraste seu arquivo aqui ou procure um arquivo para fazer upload/i)
    expect(uploadText).toBeInTheDocument()
  })

  test("calls onFileUpload when a file is selected", () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />)
    const file = new File(["content"], "test.csv", { type: "text/csv" })
    const input = screen.getByLabelText(/arraste seu arquivo aqui ou procure um arquivo para fazer upload/i)

    fireEvent.change(input, { target: { files: [file] } })

    expect(mockOnFileUpload).toHaveBeenCalledWith(file)
    expect(screen.getByText("test.csv")).toBeInTheDocument()
  })

  test("does not call onFileUpload when no files are selected", () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />)
    const input = screen.getByLabelText(/arraste seu arquivo aqui ou procure um arquivo para fazer upload/i)

    fireEvent.change(input, { target: { files: [] } })

    expect(mockOnFileUpload).not.toHaveBeenCalled()
  })

  test("calls onFileUpload when a file is dropped", () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />)
    const file = new File(["content"], "test.csv", { type: "text/csv" })
    const dropZone = screen.getByText(/arraste seu arquivo aqui ou procure um arquivo para fazer upload/i)

    fireEvent.dragOver(dropZone)
    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [file],
      },
    })

    expect(mockOnFileUpload).toHaveBeenCalledWith(file)
    expect(screen.getByText("test.csv")).toBeInTheDocument()
  })

  test("shows progress and filename after file upload", () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />)
    const file = new File(["content"], "test.csv", { type: "text/csv" })
    const input = screen.getByLabelText(/arraste seu arquivo aqui ou procure um arquivo para fazer upload/i)

    fireEvent.change(input, { target: { files: [file] } })

    expect(screen.getByText("100%")).toBeInTheDocument()
    expect(screen.getByText("test.csv")).toBeInTheDocument()
  })

  test("button becomes enabled after file upload", () => {
    render(<FileUpload onFileUpload={mockOnFileUpload} />)
    const file = new File(["content"], "test.csv", { type: "text/csv" })
    const input = screen.getByLabelText(/arraste seu arquivo aqui ou procure um arquivo para fazer upload/i)

    fireEvent.change(input, { target: { files: [file] } })

    const button = screen.getByText("Gerar lista")
    expect(button).toBeEnabled()
  })
})
