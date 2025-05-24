"use client"

import { useState } from "react"
import { FileUploader } from "../../components/ui/file-uploader"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Card } from "../../components/ui/card"
import { cn } from "../../lib/utils"

export default function NewAdvertise() {
  const [serialNumber] = useState("1as84qw1")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ serialNumber, title, category, description, file })
  }

  return (
    <div className="flex-1 p-8 w-full">
      <h1 className="text-3xl font-semibold text-secondary mb-6">New Advertise Information</h1>
      <Card className="p-6 border-t-0 rounded-t-none">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6">
            <div className="flex justify-between items-center">
              <label htmlFor="serialNumber" className="text-2xl font-medium text-primary">
                Serial Number
              </label>
              <span className="text-xl text-secondary">{serialNumber}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="md:col-span-3">
              <label htmlFor="title" className="text-2xl text-primary font-medium block mb-2">
                Title
              </label>
              <input
                id="title"
                placeholder="Write your news title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 text-2xl text-primary bg-input-bg border border-placeholder-color rounded"
              />
            </div>
            <div>
              <label htmlFor="category" className="text-2xl text-primary font-medium block mb-2">
                Category
              </label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="bg-input-bg border border-placeholder-color w-full text-2xl p-8">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="news" className="text-2xl">News</SelectItem>
                  <SelectItem value="event" className="text-2xl">Event</SelectItem>
                  <SelectItem value="promotion" className="text-2xl">Promotion</SelectItem>
                  <SelectItem value="announcement" className="text-2xl">Announcement</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="photo" className="text-2xl text-primary font-medium block mb-2">
                Upload Photo
              </label>
              <FileUploader onFileChange={setFile} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="description" className="text-2xl text-primary font-medium block mb-2">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Your description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className={cn(
                  "w-full h-[200px] text-secondary",
                  "text-4xl bg-input-bg border border-placeholder-color rounded"
                )}
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button type="submit" className="bg-[#002855] hover:bg-[#00396b] text-white px-8 py-2">
              Sent Request
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}