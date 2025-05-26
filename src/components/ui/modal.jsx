import { createPortal } from "react-dom";
import { X } from "lucide-react";

export function Modal({ isOpen, onClose, children, className = "" }) {
  if (!isOpen) return null;

  return createPortal(
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Blurred background overlay */}
      <div
        className='absolute inset-0 bg-[#2626268A] backdrop-blur-[20px]'
        onClick={onClose}
      />
      {/* Modal content */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>,
    document.body
  );
}

export function ModalContent({ children, onClose, className = "" }) {
  return (
    <div className={`rounded-lg text-white max-w-md w-full mx-4 ${className}`}>
      <button
        onClick={onClose}
        className='absolute top-2 right-6 z-20 p-1 rounded-full hover:bg-gray-100'
        aria-label='Close modal'
      >
        <X size={20} className='text-red-500' />
      </button>
      {children}
    </div>
  );
}
