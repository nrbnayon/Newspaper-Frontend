// src/pages/Advertise/Advertise.jsx
import { useState, useEffect } from "react";
import {
  Plus,
  Eye,
  ExternalLink,
  Calendar,
  Tag,
  FileText,
  Edit3,
  X,
  Upload,
  Save,
  Loader2,
  Trash2,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  getLoginUserCreateAllAdvertisements,
  getFullImageUrl,
  updateAdvertisement,
  deleteAdsById,
} from "@/lib/advertise-service";
import { Modal, ModalContent } from "@/components/ui/modal";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

// Categories list - you can customize this based on your requirements
export const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Books",
  "Automotive",
  "Health & Beauty",
  "Food & Beverages",
  "Education",
  "Services",
  "Others",
];

const StatusBadge = ({ status }) => {
  const statusConfig = {
    approved: {
      bg: "bg-green-100",
      text: "text-green-800",
      border: "border-green-200",
    },
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      border: "border-yellow-200",
    },
    rejected: {
      bg: "bg-red-100",
      text: "text-red-800",
      border: "border-red-200",
    },
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${config.bg} ${config.text} ${config.border}`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

const Advertise = () => {
  const [advertisements, setAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    user,
    profile,
    hasActiveSubscription,
    isSubscriptionExpired,
    getSubscriptionStatus,
  } = useAuth();
  const [editModal, setEditModal] = useState({
    isOpen: false,
    advertisement: null,
  });

  // console.log("User", user);
  // console.log("Profile", profile);
  // console.log("Has Active Subscription", hasActiveSubscription());
  // console.log("Is Subscription Expired", isSubscriptionExpired());
  // console.log("Subscription Status", getSubscriptionStatus());

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    setLoading(true);
    try {
      const result = await getLoginUserCreateAllAdvertisements();
      if (result.success) {
        const mappedAds = result.data.map((ad) => ({
          id: ad.id,
          serialNumber: ad.serial_number || ad.id?.toString() || "N/A",
          category: ad.category || "Uncategorized",
          title: ad.title || "No Title",
          description: ad.description || "No Description",
          status: ad.status || "pending",
          views: ad.views || 0,
          createdAt: ad.created_at,
          images: ad.images || [],
          url: ad.url || null,
        }));
        setAdvertisements(mappedAds);
      } else {
        toast.error(result.error || "Failed to fetch advertisements");
        setAdvertisements([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      toast.error("An unexpected error occurred");
      setAdvertisements([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (advertisement) => {
    setEditModal({
      isOpen: true,
      advertisement: advertisement,
    });
  };

  const handleDeleteClick = async (advertisementId, advertisementTitle) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${advertisementTitle}"? This action cannot be undone.`
    );

    if (!isConfirmed) {
      return;
    }
    try {
      const result = await deleteAdsById(advertisementId);

      if (result.success) {
        toast.success("Advertisement deleted successfully");
        fetchAdvertisements();
      } else {
        toast.error(result.error || "Failed to delete advertisement");
      }
    } catch (error) {
      console.error("Error deleting advertisement:", error);
      toast.error("An unexpected error occurred while deleting");
    }
  };

  const handleEditModalClose = () => {
    setEditModal({
      isOpen: false,
      advertisement: null,
    });
  };

  const handleAdvertisementUpdate = () => {
    // Refresh advertisements list after successful update
    fetchAdvertisements();
  };

  if (loading) {
    return (
      <div className="flex-1 p-4 w-full bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              My Advertisements
            </h1>
            <p className="text-gray-600">
              {advertisements.length > 0
                ? `${advertisements.length} advertisement${
                    advertisements.length !== 1 ? "s" : ""
                  } found`
                : "Manage and track your advertisement campaigns"}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col items-end gap-2">
            {hasActiveSubscription() ? (
              <Link
                to="/dashboard/newadvertise"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm"
              >
                <Plus className="h-5 w-5" />
                Create New Ad
              </Link>
            ) : (
              <>
                <button
                  disabled
                  className="inline-flex items-center gap-2 bg-gray-400 cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium opacity-60"
                >
                  <Plus className="h-5 w-5" />
                  Create New Ad
                </button>
                <p className="text-sm text-red-600 text-right">
                  Premium subscription required to create ads.{" "}
                  <Link
                    to="/pricing"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Upgrade Plan
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Loading State */}
        <div className="flex justify-center items-center h-64">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-200 border-t-blue-600"></div>
            <div className="text-lg text-gray-600">
              Loading advertisements...
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 w-full bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            My Advertisements
          </h1>
          <p className="text-gray-600">
            {advertisements.length > 0
              ? `${advertisements.length} advertisement${
                  advertisements.length !== 1 ? "s" : ""
                } found`
              : "Manage and track your advertisement campaigns"}
          </p>
        </div>
        <Link
          to="/dashboard/newadvertise"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-sm"
        >
          <Plus className="h-5 w-5" />
          Create New Ad
        </Link>
      </div>

      {/* Content */}
      {advertisements.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-64 bg-white rounded-xl shadow-sm">
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No advertisements yet
            </h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first advertisement
            </p>
            {hasActiveSubscription() ? (
              <Link
                to="/dashboard/newadvertise"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <Plus className="h-5 w-5" />
                Create Your First Ad
              </Link>
            ) : (
              <div className="space-y-3">
                <button
                  disabled
                  className="inline-flex items-center gap-2 bg-gray-400 cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium opacity-60"
                >
                  <Plus className="h-5 w-5" />
                  Create Your First Ad
                </button>
                <p className="text-sm text-red-600">
                  Premium subscription required to create ads.{" "}
                  <Link
                    to="/pricing"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Upgrade your plan
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advertisements.map((ad, index) => (
            <AdvertiseCard
              key={`${ad.serialNumber}-${index}`}
              {...ad}
              advertisementData={ad}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <EditModal
        isOpen={editModal.isOpen}
        onClose={handleEditModalClose}
        advertisement={editModal.advertisement}
        onUpdate={handleAdvertisementUpdate}
      />
    </div>
  );
};

export default Advertise;

const AdvertiseCard = ({
  category,
  title,
  description,
  status,
  onDelete,
  createdAt,
  images,
  url,
  onEdit,
  advertisementData,
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateText = (text, maxLength = 80) => {
    if (!text) return "No description available";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const primaryImage =
    images && images.length > 0 ? getFullImageUrl(images[0].image) : null;

  return (
    <Card className="group p-0 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white rounded-xl overflow-hidden">
      <CardContent className="p-0">
        {/* Image Section */}
        {primaryImage && (
          <div className="relative h-36 bg-gray-100 overflow-hidden">
            <img
              src={primaryImage}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.display = "none";
              }}
            />
            {images.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                +{images.length - 1} more
              </div>
            )}
            {/* Edit/delete Button Overlay */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
              <button
                onClick={() => onEdit(advertisementData)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-colors"
                title="Edit Advertisement"
              >
                <Edit3 className="h-3 w-3" />
              </button>
              <button
                onClick={() =>
                  onDelete(advertisementData.id, advertisementData.title)
                }
                className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors"
                title="Delete Advertisement"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="p-2 space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 mb-1">
                {title || "Untitled Advertisement"}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Tag className="h-3 w-3" />
                <span className="font-medium text-blue-600">{category}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status={status} />
              {!primaryImage && (
                <div className="flex gap-1">
                  <button
                    onClick={() => onEdit(advertisementData)}
                    className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    title="Edit Advertisement"
                  >
                    <Edit3 className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() =>
                      onDelete(advertisementData.id, advertisementData.title)
                    }
                    className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors"
                    title="Delete Advertisement"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex items-start gap-2">
            <FileText className="h-3 w-3 text-gray-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-gray-600 leading-relaxed">
              {truncateText(description)}
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3 text-gray-400" />
              <div>
                <div className="text-xs font-medium text-gray-900">
                  {formatDate(createdAt)}
                </div>
                <div className="text-xs text-gray-500">Created</div>
              </div>
            </div>

            {url && (
              <div className="flex items-center gap-1.5">
                <ExternalLink className="h-3 w-3 text-gray-400" />
                <div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-blue-600 hover:text-blue-800 truncate block"
                  >
                    Visit Link
                  </a>
                  <div className="text-xs text-gray-500">URL</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EditModal = ({ isOpen, onClose, advertisement, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    url: "",
  });
  const [existingImages, setExistingImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreviewUrls, setImagePreviewUrls] = useState([]);

  useEffect(() => {
    if (advertisement && isOpen) {
      setFormData({
        title: advertisement.title || "",
        description: advertisement.description || "",
        category: advertisement.category || "",
        url: advertisement.url || "",
      });
      setExistingImages(advertisement.images || []);
      setNewImages([]);
      setImagesToDelete([]);
      setImagePreviewUrls([]);
    }
  }, [advertisement, isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + existingImages.length + newImages.length > 10) {
      toast.error("Maximum 10 images allowed");
      return;
    }

    const validFiles = files.filter((file) => {
      const isValid =
        file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024; // 5MB
      if (!isValid) {
        toast.error(`${file.name} is not a valid image or exceeds 5MB`);
      }
      return isValid;
    });

    if (validFiles.length > 0) {
      setNewImages((prev) => [...prev, ...validFiles]);

      // Create preview URLs for new images
      const previewUrls = validFiles.map((file) => URL.createObjectURL(file));
      setImagePreviewUrls((prev) => [...prev, ...previewUrls]);
    }
  };

  const removeExistingImage = (imageIndex) => {
    const imageToRemove = existingImages[imageIndex];
    setImagesToDelete((prev) => [...prev, imageToRemove.id || imageIndex]);
    setExistingImages((prev) =>
      prev.filter((_, index) => index !== imageIndex)
    );
  };

  const removeNewImage = (imageIndex) => {
    // Revoke the preview URL to prevent memory leaks
    if (imagePreviewUrls[imageIndex]) {
      URL.revokeObjectURL(imagePreviewUrls[imageIndex]);
    }

    setNewImages((prev) => prev.filter((_, index) => index !== imageIndex));
    setImagePreviewUrls((prev) =>
      prev.filter((_, index) => index !== imageIndex)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.category) {
      toast.error("Category is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitFormData = new FormData();

      // Add text fields
      submitFormData.append("title", formData.title.trim());
      submitFormData.append("description", formData.description.trim());
      submitFormData.append("category", formData.category);
      submitFormData.append("url", formData.url.trim());

      // Add new images
      newImages.forEach((image, index) => {
        submitFormData.append("uploaded_images", image);
      });

      // Add images to delete (if your API supports it)
      if (imagesToDelete.length > 0) {
        submitFormData.append(
          "images_to_delete",
          JSON.stringify(imagesToDelete)
        );
      }

      const result = await updateAdvertisement(
        advertisement.id,
        submitFormData
      );

      if (result.success) {
        toast.success("Advertisement updated successfully");
        onUpdate(); // Refresh the advertisements list
        onClose();

        // Clean up preview URLs
        imagePreviewUrls.forEach((url) => URL.revokeObjectURL(url));
      } else {
        toast.error(result.error || "Failed to update advertisement");
      }
    } catch (error) {
      console.error("Error updating advertisement:", error);
      toast.error("An unexpected error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // Clean up preview URLs when closing
    imagePreviewUrls.forEach((url) => URL.revokeObjectURL(url));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalContent
        onClose={handleClose}
        className={cn(
          "max-w-xl bg-white rounded-xl shadow-2xl  w-full max-h-[90vh] overflow-y-auto"
        )}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Edit Advertisement
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            disabled={isSubmitting}
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Modal Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter advertisement title"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter advertisement description"
              disabled={isSubmitting}
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              required
              disabled={isSubmitting}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL
            </label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="https://example.com"
              disabled={isSubmitting}
            />
          </div>

          {/* Images Section */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Images (Max 10)
            </label>

            {/* Existing Images */}
            {existingImages.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  Current Images
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {existingImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={getFullImageUrl(image.image)}
                        alt={`Existing ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeExistingImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        disabled={isSubmitting}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* New Images Preview */}
            {newImages.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-600 mb-2">
                  New Images
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {newImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={imagePreviewUrls[index]}
                        alt={`New ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg border border-gray-200"
                      />
                      <button
                        type="button"
                        onClick={() => removeNewImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        disabled={isSubmitting}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload New Images */}
            {existingImages.length + newImages.length < 10 && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                  disabled={isSubmitting}
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="h-8 w-8 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">
                    Click to upload images
                  </span>
                  <span className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB each
                  </span>
                </label>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-2">
              Current: {existingImages.length + newImages.length}/10 images
            </p>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4" />
                  Update Advertisement
                </>
              )}
            </button>
          </div>
        </form>
      </ModalContent>
    </Modal>
  );
};
