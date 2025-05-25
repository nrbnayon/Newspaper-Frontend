
import { X } from "lucide-react"

// Toast Component
export default function Toast({ message, isVisible, onClose, isDelete }) {
  if (!isVisible) return null

  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 text-white px-6 py-3 rounded-md shadow-lg flex items-center gap-2
        ${isDelete ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"}`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 rounded p-1">
        <X size={16} />
      </button>
    </div>
  )
}
