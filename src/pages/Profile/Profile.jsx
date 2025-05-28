import { useState, useRef } from "react";
import { Badge, Edit, X } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

// Toast notification function (simplified version)
const toast = {
  success: (message, options = {}) => {
    // Create a simple toast notification
    const toastEl = document.createElement("div");
    toastEl.textContent = message;
    toastEl.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${options.style?.background || "#10b981"};
      color: ${options.style?.color || "#fff"};
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 1000;
      font-family: system-ui, -apple-system, sans-serif;
    `;
    document.body.appendChild(toastEl);
    setTimeout(() => {
      document.body.removeChild(toastEl);
    }, options.duration || 3000);
  },
};

// Modal components
function Modal({ isOpen, onClose, children, className = "" }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-[#2626268A] bg-opacity-25 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal content */}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>,
    document.body
  );
}

function ModalContent({ children, onClose, className = "" }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-xl max-w-md w-full mx-4 ${className}`}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
        aria-label="Close modal"
      >
        <X size={20} />
      </button>
      {children}
    </div>
  );
}

const Profile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://i.ibb.co/V0ZHs3Xp/marwan-V675n9gjy-L0-unsplash.jpg"
  );
  const [name, setName] = useState("Mahdee Rashid");
  const [email, setEmail] = useState("mahdeerashid@gmail.com");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirmName, setDeleteConfirmName] = useState("");
  const [deleteError, setDeleteError] = useState("");

  const fileInputRef = useRef(null);

  const handleImageEdit = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameEdit = () => {
    setIsEditingName(!isEditingName);
  };

  const handleEmailEdit = () => {
    setIsEditingEmail(!isEditingEmail);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
    setDeleteConfirmName("");
    setDeleteError("");
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setDeleteConfirmName("");
    setDeleteError("");
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmName.trim() === name.trim()) {
      setShowDeleteModal(false);
      toast.success("Delete request submitted successfully!", {
        duration: 4000,
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      });
    } else {
      setDeleteError(
        "Name doesn't match. Please enter your exact profile name."
      );
    }
  };

  const handleDeleteNameChange = (event) => {
    setDeleteConfirmName(event.target.value);
    if (deleteError) {
      setDeleteError("");
    }
  };

  return (
    <div className="flex-1 md:px-30 px-1 pt-4 relative">
      {/* Delete Confirmation Modal */}
      <Modal isOpen={showDeleteModal} onClose={handleDeleteCancel}>
        <ModalContent onClose={handleDeleteCancel} className="p-6">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-red-500 mb-2">
              Delete Account
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              This action cannot be undone. To confirm deletion, please enter
              your profile name exactly as it appears.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Your profile name:{" "}
              <span className="font-semibold text-gray-800">{name}</span>
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your profile name to confirm:
            </label>
            <input
              type="text"
              value={deleteConfirmName}
              onChange={handleDeleteNameChange}
              placeholder="Enter your profile name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            {deleteError && (
              <p className="text-red-500 text-sm mt-2">{deleteError}</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleDeleteCancel}
              className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDeleteConfirm}
              disabled={!deleteConfirmName.trim()}
              className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Delete Account
            </button>
          </div>
        </ModalContent>
      </Modal>

      <h2 className="text-base md:text-2xl font-bold text-gray-800 mb-8">My Profile</h2>

      {/* Profile Section - Responsive Layout */}
      <div className="flex flex-col lg:flex-row mb-4 lg:mb-12 gap-6">
        {/* Profile Image and Basic Info */}
        <div className="flex flex-row justify-baseline items-start sm:items-center gap-4">
          <div className="relative">
            <div className="rounded-full overflow-hidden relative h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 bg-gray-400">
              <img
                src={profileImage}
                alt="Profile"
                width={96}
                height={96}
                className="object-cover bg-gray-300 w-full h-full"
              />
            </div>
            <button
              onClick={handleImageEdit}
              className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-300"
            >
              <Edit className="h-4 w-4 cursor-pointer text-gray-600" />
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div className="">
            
            <h3 className="text-base md:text-lg lg:text-2xl  font-bold text-gray-800">{name}</h3>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mb-2">
              User
            </span>
          </div>
        </div>

        {/* Contact Information - Responsive */}
        <div className="lg:ml-auto lg:mr-12 space-y-2 w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-gray-700 text-base min-w-0 sm:min-w-[80px]">
              E-mail
            </p>
            <span className="text-gray-600 sm:ml-8 break-all">{email}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-gray-700 text-base min-w-0 sm:min-w-[80px]">
              Phone
            </p>
            <span className="text-gray-600 sm:ml-8">+880 1636 828200</span>
          </div>
        </div>
      </div>

      {/* Form Fields - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-4 md:mb-12">
        <div>
          <h4 className="text-base md:text-xl text-gray-800 mb-4">Name</h4>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              readOnly={!isEditingName}
              className={`w-full p-2 pr-10 text-sm md:text-base text-gray-700 border border-gray-300 rounded ${
                isEditingName ? "bg-white" : "bg-gray-50"
              }`}
            />
            <button
              onClick={handleNameEdit}
              className="absolute right-2 bg-transparent top-1/2 transform -translate-y-1/2"
            >
              <Edit className="h-6 w-6 cursor-pointer text-gray-600" />
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-base md:text-xl text-gray-800 mb-4">E-mail</h4>
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              readOnly={!isEditingEmail}
              className={`w-full p-2 pr-10 text-sm md:text-base text-gray-700 border border-gray-300 rounded ${
                isEditingEmail ? "bg-white" : "bg-gray-50"
              }`}
            />
            <button
              onClick={handleEmailEdit}
              className="absolute bg-transparent right-2 top-1/2 transform -translate-y-1/2"
            >
              <Edit className="h-6 w-6 cursor-pointer text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Delete Account Section - Responsive */}
      <div className="border bg-red-50 border-red-500 rounded p-4 sm:p-6">
        <h4 className="text-base md:text-xl font-bold text-red-500 mb-4">Delete Account</h4>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-gray-800 text-sm md:text-base ">
              Contact our
              <a href="#" className="text-blue-600 px-2 underline">
                support team
              </a>
              to process the deletion of your account.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={handleDeleteClick}
              className="bg-red-500 cursor-pointer text-white px-4 py-2 justify-center rounded hover:bg-red-600 transition-colors w-full sm:w-auto"
            >
              Apply Delete
            </button>
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default Profile;
