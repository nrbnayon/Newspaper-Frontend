"use client"

import { useState } from "react"
import { FileUploader } from "../../components/ui/file-uploader"

import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Card } from "../../components/ui/card"
import { cn } from "../../lib/utils"
import { Link } from "react-router-dom"
import Toast from "../../components/ui/toast"

export default function NewAdvertise() {
  const [serialNumber] = useState("1as84qw1")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [isSelectOpen, setIsSelectOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    
    
    // Show toast message
   
    setShowToast(true)
    // Auto hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 4000)
  }

  const handleCategorySelect = (value) => {
    setCategory(value)
    setIsSelectOpen(false)
  }

  const cn = (...classes) => classes.filter(Boolean).join(' ')

  return (
    <div className="flex-1 p-4 w-full  min-h-screen">
      <Toast 
        message="Successfully sent!" 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />
      
      <h1 className="text-2xl font-semibold text-secondary mb-6">New Advertise Information</h1>
      <Card className={cn("p-6 rounded-lg")}>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6">
            <div className="flex justify-between items-center">
              <label htmlFor="serialNumber" className="text-base font-medium text-gray-700">
                Serial Number
              </label>
              <span className="text-xl text-gray-600">{serialNumber}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="md:col-span-3">
              <label htmlFor="title" className="text-base text-gray-700 font-medium block mb-2">
                Title
              </label>
              <input
                id="title"
                placeholder="Write your news title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-input-bg p-2 text-base text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="category" className="text-base text-primary font-medium block mb-2">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger 
                  className={cn(
                    "w-full h-auto bg-input-bg min-h-[45px] text-black px-4 py-4",
                    "bg-input-bg border border-placeholder-color rounded",
                    "text-base text-primary",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                >
                  <SelectValue 
                    placeholder="Select" 
                    className="text-base text-placeholder-color"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded shadow-lg">
                  <SelectItem value="news" className="text-base px-4  hover:bg-gray-100">
                    News
                  </SelectItem>
                  <SelectItem value="event" className="text-base px-4  hover:bg-gray-100">
                    Event
                  </SelectItem>
                  <SelectItem value="promotion" className="text-base px-4  hover:bg-gray-100">
                    Promotion
                  </SelectItem>
                  <SelectItem value="announcement" className="text-base px-4  hover:bg-gray-100">
                    Announcement
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="photo" className="text-base text-gray-700 font-medium block mb-2">
                Upload Photo
              </label>
              <FileUploader onFileChange={setFile} selectedFile={file} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="text-base text-gray-700 font-medium block mb-2">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Your description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={cn(
                  "w-full h-[200px] p-4 resize-none",
                  "text-base text-gray-600 placeholder:text-gray-400",
                  "border border-gray-300 rounded",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500",
                  "focus:border-transparent"
                )}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button 
            
              type="submit" 
              className="bg-[#002855] cursor-pointer hover:bg-[#00396b] text-white px-6 py-3 rounded transition-colors duration-200"
            >
              Sent Request
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}