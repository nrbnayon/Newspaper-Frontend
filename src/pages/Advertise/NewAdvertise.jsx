// src/pages/Advertise/NewAdvertise.jsx
import { useState } from "react";
import { FileUploader } from "@/components/ui/file-uploader";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import toast from "react-hot-toast";
import { createAdvertisement } from "@/lib/advertise-service";

export default function NewAdvertise() {
  const [serialNumber] = useState("1as84qw1");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }

    if (!category) {
      toast.error("Please select a category");
      return;
    }

    if (!description.trim()) {
      toast.error("Please enter a description");
      return;
    }

    if (!file) {
      toast.error("Please upload at least one image");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("category", category);
      formData.append("description", description.trim());

      // Handle file upload - check if file is an array or single file
      if (Array.isArray(file)) {
        file.forEach((f, index) => {
          formData.append(`uploaded_images`, f);
        });
      } else {
        formData.append("uploaded_images", file);
      }
      const result = await createAdvertisement(formData);
      if (result.success) {
        toast.success("Advertisement submitted successfully!");
        // Reset form
        setTitle("");
        setCategory("");
        setDescription("");
        setFile(null);
      } else {
        toast.error(result.error || "Failed to submit advertisement");
      }
    } catch (error) {
      console.error("Error submitting advertisement:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const cn = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div className="flex-1 p-4 w-full  min-h-screen">
      <h1 className="text-base md:text-2xl font-semibold text-secondary mb-6">
        New Advertise Information
      </h1>
      <Card className={cn("p-6 rounded-lg")}>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6">
            <div className="flex justify-between items-center">
              <label
                htmlFor="serialNumber"
                className="text-sm md:text-base font-medium text-gray-700"
              >
                Serial Number
              </label>
              <span className="text-sm md:text-base text-gray-600">
                {serialNumber}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="md:col-span-3">
              <label
                htmlFor="title"
                className="text-sm md:text-base text-gray-700 font-medium block mb-2"
              >
                Title
              </label>
              <input
                id="title"
                placeholder="Write your news title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-input-bg p-2 text-sm md:text-base text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="text-sm md:text-base text-primary font-medium block mb-2"
              >
                Category
              </label>
              <Select
                value={category}
                onValueChange={setCategory}
                disabled={isSubmitting}
              >
                <SelectTrigger
                  className={cn(
                    "w-full h-auto bg-input-bg min-h-[45px] text-black px-4 py-4",
                    "bg-input-bg border border-placeholder-color rounded",
                    "text-sm md:text-base text-primary",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500"
                  )}
                >
                  <SelectValue
                    placeholder="Select"
                    className="text-sm md:text-base text-placeholder-color"
                  />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 rounded shadow-lg">
                  <SelectItem
                    value="news"
                    className="text-sm md:text-base px-4  hover:bg-gray-100"
                  >
                    News
                  </SelectItem>
                  <SelectItem
                    value="event"
                    className="text-sm md:text-base px-4  hover:bg-gray-100"
                  >
                    Event
                  </SelectItem>
                  <SelectItem
                    value="promotion"
                    className="text-sm md:text-base px-4  hover:bg-gray-100"
                  >
                    Promotion
                  </SelectItem>
                  <SelectItem
                    value="announcement"
                    className="text-sm md:text-base px-4  hover:bg-gray-100"
                  >
                    Announcement
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label
                htmlFor="photo"
                className="text-sm md:text-base text-gray-700 font-medium block mb-2"
              >
                Upload Photo
              </label>
              <FileUploader
                onFileChange={setFile}
                selectedFile={file}
                disabled={isSubmitting}
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="description"
                className="text-sm md:text-base text-gray-700 font-medium block mb-2"
              >
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Your description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={isSubmitting}
                className={cn(
                  "w-full h-[200px] text-sm md:text-base p-4 resize-none",
                  "text-sm md:text-base text-gray-600 placeholder:text-gray-400",
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
              disabled={isSubmitting}
              className="bg-[#002855] text-sm md:text-base cursor-pointer hover:bg-[#00396b] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded transition-colors duration-200"
            >
              {isSubmitting ? "Submitting..." : "Send Request"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
