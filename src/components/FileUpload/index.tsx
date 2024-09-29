import React, { useState } from "react"
import { FaUpload } from "react-icons/fa6"
import Button from "../Button"

interface FileUploadProps {
  onFileUpload: (file: File) => void
}

const FileUpload = ({ onFileUpload }: FileUploadProps) => {
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      if (file) {
        onFileUpload(file)
        setFileName(file.name)
      }

      setProgress(100)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0]

      if (file) {
        onFileUpload(file)
        setFileName(file.name)
      }

      setProgress(100)
    }
  }

  const handleGenerateList = () => {
    console.log("Gerar lista")
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="flex w-full flex-col gap-8">
      <div
        className={`max-w-60 rounded-md border-2 border-gray-300 p-6 text-center transition-colors duration-100 ${
          isDragging ? "border-primary-medium/50 bg-primary-medium/50 text-black" : "border-dashed bg-white"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input type="file" accept=".csv, .xlsx" onChange={handleFileChange} className="hidden" id="file-upload" />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center gap-4">
            <FaUpload size={48} />
            <span className={`${isDragging ? "text-black" : "text-[#A0AEC0]"} transition-colors duration-100`}>
              Arraste seu arquivo aqui ou procure um arquivo para fazer upload
            </span>
          </div>
        </label>
      </div>
      {progress > 0 && (
        <div className="flex max-w-60 flex-1 flex-col items-center">
          <div
            className={`${
              progress < 100 ? "opacity-75" : ""
            } mt-2 flex w-full items-center justify-center gap-2 font-semibold text-[#04091E]`}
          >
            <div className="w-full rounded-full bg-gray-200">
              <div
                className="h-3 rounded-full bg-green-500 p-0.5 text-center text-xs font-medium leading-none text-white"
                style={{ width: `${progress}%` }}
              />
            </div>
            {progress}%
          </div>
          {fileName && <p className="max-w-min truncate text-center font-semibold text-[#A0AEC0]">{fileName}</p>}
        </div>
      )}
      <Button
        text="Gerar lista"
        color="green"
        onClick={handleGenerateList}
        disabled={true}
        className={`${
          progress < 100 ? "cursor-not-allowed bg-primary-medium opacity-50 hover:bg-primary-medium" : "cursor-pointer"
        }`}
      />
    </div>
  )
}

export default FileUpload
