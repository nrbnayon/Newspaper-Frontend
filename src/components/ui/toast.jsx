
import { X } from "lucide-react"

// Toast Component
export default function Toast({ message, isVisible, onClose, isDelete }) {
  if (!isVisible) return null

  return (
    <div
      className={`fixed top-4 left-1/2 cursor-pointer transform -translate-x-1/2 z-50 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2
        ${isDelete ? "bg-red-600 hover:bg-red-700" : "bg-[#00396b] hover:bg-[#1f2c38]"}`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 cursor-pointer rounded p-1">
        <X size={16} />
      </button>
    </div>
  )
}
