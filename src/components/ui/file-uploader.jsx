"use client"

import { useState, useRef } from "react"
import { UploadIcon } from "lucide-react"

export function FileUploader({ onFileChange }) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const inputRef = useRef(null)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setSelectedFile(file)
      onFileChange(file)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      onFileChange(file)
    }
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <div
      className={`border-2 rounded-md  flex flex-col items-center justify-center h-48 w-full text-center cursor-pointer ${
        dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
      }`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <input ref={inputRef} type="file" className="hidden" onChange={handleChange} accept="image/*" />

      {selectedFile ? (
        <div className=" flex h-full w-full flex-col items-center">
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded preview"
            className="h-full w-full object-contain mb-2"
          />
          
        </div>
      ) : (
        <>
          <div className="mb-4 text-gray-700">
            <UploadIcon className="h-10 w-10 mx-auto mb-2" />
          </div>
          <p className="text-sm font-medium">Drag Your file or Browse</p>
          <p className="text-xs text-gray-500 mt-1">Max file size 50MB</p>
        </>
      )}
    </div>
  )
}