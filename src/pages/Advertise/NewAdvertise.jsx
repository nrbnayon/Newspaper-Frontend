// src/pages/Advertise/NewAdvertise.jsx
import { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState(""); 
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  // URL validation function
  const isValidUrl = (urlString) => {
    if (!urlString.trim()) return true; // Optional field, empty is valid

    const trimmedUrl = urlString.trim();

    // Check if it starts with https:// or www.
    const startsWithHttps = trimmedUrl.startsWith("https://");
    const startsWithWww = trimmedUrl.startsWith("www.");

    if (!startsWithHttps && !startsWithWww) {
      return false;
    }

    // Additional URL format validation
    try {
      // If it starts with www., prepend https://
      const urlToTest =
        startsWithWww && !startsWithHttps
          ? `https://${trimmedUrl}`
          : trimmedUrl;

      new URL(urlToTest);
      return true;
    } catch {
      return false;
    }
  };

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

    // URL validation
    if (url.trim() && !isValidUrl(url)) {
      toast.error("URL must start with https:// or www.");
      return;
    }

    if (!files || files.length === 0) {
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

      // Add URL if provided
      if (url.trim()) {
        formData.append("url", url.trim());
      }

      // Handle multiple file uploads
      files.forEach((file) => {
        formData.append("uploaded_images", file);
      });

      const result = await createAdvertisement(formData);
      if (result.success) {
        toast.success("Advertisement submitted successfully!");
        // Reset form
        setTitle("");
        setCategory("");
        setDescription("");
        setUrl("");
        setFiles([]);
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
    <div className="flex-1 p-4 w-full min-h-screen">
      <h1 className="text-base md:text-2xl font-semibold text-secondary mb-6">
        New Advertise Information
      </h1>
      <Card className={cn("p-6 rounded-lg")}>
        <form onSubmit={handleSubmit}>
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
                    className="text-sm md:text-base px-4 hover:bg-gray-100"
                  >
                    News
                  </SelectItem>
                  <SelectItem
                    value="event"
                    className="text-sm md:text-base px-4 hover:bg-gray-100"
                  >
                    Event
                  </SelectItem>
                  <SelectItem
                    value="promotion"
                    className="text-sm md:text-base px-4 hover:bg-gray-100"
                  >
                    Promotion
                  </SelectItem>
                  <SelectItem
                    value="announcement"
                    className="text-sm md:text-base px-4 hover:bg-gray-100"
                  >
                    Announcement
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-4">
              <label
                htmlFor="url"
                className="text-sm md:text-base text-gray-700 font-medium block mb-2"
              >
                External URL Link (optional)
              </label>
              <input
                id="url"
                type="url"
                placeholder="Enter external URL link... https://... or www...."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className={cn(
                  "w-full bg-input-bg p-2 text-sm md:text-base text-gray-700 border rounded focus:outline-none focus:ring-2",
                  url.trim() && !isValidUrl(url)
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                )}
                disabled={isSubmitting}
              />
              {url.trim() && !isValidUrl(url) && (
                <p className="text-red-500 text-xs mt-1">
                  URL must start with https:// or www.
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label
                htmlFor="photo"
                className="text-sm md:text-base text-gray-700 font-medium block mb-2"
              >
                Upload Photos
              </label>
              {/* Custom file input for multiple images */}
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    const newFiles = Array.from(e.target.files);
                    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isSubmitting}
                />
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-gray-600 text-sm mb-1">
                      Drag Your file or Browse
                    </p>
                    <p className="text-gray-400 text-xs">Max file size 50MB</p>
                  </div>
                </div>
              </div>

              {/* Show only the last uploaded image in preview */}
              {files.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Preview (Latest Upload):
                  </p>
                  <div className="relative group w-full max-w-[200px]">
                    <div className="w-full h-32 bg-gray-100 rounded border flex items-center justify-center overflow-hidden">
                      {files[files.length - 1].type?.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(files[files.length - 1])}
                          alt="Latest upload preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-xs text-gray-500 text-center p-2">
                          {files[files.length - 1].name}
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(files.length - 1)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                      disabled={isSubmitting}
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              {/* Show all uploaded images list with remove buttons */}
              {files.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    All Uploaded Images ({files.length}):
                  </p>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-2 rounded border"
                      >
                        <div className="flex items-center space-x-2 flex-1 min-w-0">
                          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center overflow-hidden flex-shrink-0">
                            {file.type?.startsWith("image/") ? (
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Thumb ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="text-xs text-gray-500">📄</div>
                            )}
                          </div>
                          <span className="text-sm text-gray-700 truncate">
                            {file.name}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs hover:bg-red-600 transition-colors flex-shrink-0 ml-2"
                          disabled={isSubmitting}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
