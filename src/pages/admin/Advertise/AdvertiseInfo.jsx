// src/pages/admin/Advertise/AdvertiseInfo.jsx
import { useState, useEffect, useContext, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn, formatFullDate } from "@/lib/utils";
import {
  ArrowLeft,
  User,
  Calendar,
  ExternalLink,
  Image as ImageIcon,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Tag,
  Hash,
  AlertCircle,
  Loader2,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import { AdvertiseContext } from "./AdvertiseContext";

const AD_STATUS = {
  APPROVED: "Approved",
  REJECTED: "Rejected",
  PENDING: "Pending",
};

const RAW_STATUS = {
  APPROVED: "approved",
  REJECTED: "rejected",
  PENDING: "pending",
};

// Utility functions
const getStatusConfig = (status) => {
  const configs = {
    [AD_STATUS.APPROVED]: {
      color: "text-green-700 bg-green-100 border-green-300",
      icon: CheckCircle,
    },
    [AD_STATUS.REJECTED]: {
      color: "text-red-700 bg-red-100 border-red-300",
      icon: XCircle,
    },
    [AD_STATUS.PENDING]: {
      color: "text-yellow-700 bg-yellow-100 border-yellow-300",
      icon: Clock,
    },
  };

  return configs[status] || configs[AD_STATUS.PENDING];
};

const formatProgressStatus = (status) => {
  const progressMap = {
    [RAW_STATUS.APPROVED]: AD_STATUS.APPROVED,
    [RAW_STATUS.REJECTED]: AD_STATUS.REJECTED,
    [RAW_STATUS.PENDING]: AD_STATUS.PENDING,
  };
  return progressMap[status] || AD_STATUS.PENDING;
};

// Custom hooks
const useKeyboardNavigation = (isOpen, onClose, onPrevious, onNext) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrevious, onNext]);
};

// Components
const ImageModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
}) => {
  const totalImages = images?.length || 0;

  const goToPrevious = useCallback(() => {
    onIndexChange((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages, onIndexChange]);

  const goToNext = useCallback(() => {
    onIndexChange((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages, onIndexChange]);

  useKeyboardNavigation(isOpen, onClose, goToPrevious, goToNext);

  if (!isOpen || currentIndex === null || !images?.length) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-8 w-8" />
        </button>

        {/* Image counter */}
        <div className="absolute top-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm z-10">
          {currentIndex + 1} of {totalImages}
        </div>

        {/* Navigation buttons */}
        {totalImages > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </>
        )}

        {/* Main image */}
        <div
          className="bg-white rounded-lg p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentImage}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="max-w-full max-h-[80vh] object-contain rounded"
            onError={(e) => {
              console.error("Failed to load modal image:", currentImage);
              e.target.src = "/placeholder-image.svg"; // Better fallback
            }}
          />
        </div>

        {/* Image title */}
        <div className="text-white text-center mt-2 text-sm">
          {title} - Image {currentIndex + 1}
        </div>
      </div>
    </div>
  );
};

const ImagesCard = ({
  images,
  onImageClick,
  imageErrors,
  onImageError,
  title,
}) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <ImageIcon className="h-5 w-5 text-primary" />
        <span>Images ({images?.length || 0})</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      {images?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={`image-${index}`}
              className="relative group overflow-hidden rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
              onClick={() => onImageClick(index)}
            >
              <div className="aspect-square bg-gray-100">
                {imageErrors[index] ? (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <div className="text-center p-4">
                      <ImageIcon className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-xs">Image not available</p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={() => onImageError(index)}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  <p>Click to large</p>
                  <p className="text-xs">Image {index + 1}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <ImageIcon className="h-12 w-12 mx-auto mb-3 text-gray-300" />
          <p className="text-base">No images uploaded</p>
        </div>
      )}
    </CardContent>
  </Card>
);

const ActionButton = ({
  onClick,
  disabled,
  processing,
  variant,
  className,
  icon: Icon,
  children,
}) => (
  <Button
    onClick={onClick}
    disabled={disabled}
    variant={variant}
    className={className}
  >
    {processing ? (
      <div className="flex items-center space-x-2">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Processing...</span>
      </div>
    ) : (
      <div className="flex items-center space-x-2">
        <Icon className="h-4 w-4" />
        <span>{children}</span>
      </div>
    )}
  </Button>
);

export default function AdvertiseInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(AdvertiseContext);
  const { getAdvertisement, updateProgress } = context || {};

  // State
  const [selectedAd, setSelectedAd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Memoized values
  const statusConfig = useMemo(
    () => (selectedAd ? getStatusConfig(selectedAd.progress) : null),
    [selectedAd?.progress]
  );

  // Event handlers
  const handleGoBack = useCallback(() => navigate(-1), [navigate]);

  const handleImageError = useCallback((index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
    console.error(`Failed to load image at index ${index}`);
  }, []);

  const handleImageClick = useCallback((index) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  }, []);

  const closeImageModal = useCallback(() => {
    setIsImageModalOpen(false);
    setSelectedImageIndex(null);
  }, []);

  // API functions
  const processApiResponse = useCallback(
    async (result) => {
      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to process response");
      }

      if (getAdvertisement) {
        return result.data;
      }

      // Fallback processing for direct API calls
      const { getFullImageUrl } = await import("@/lib/advertise-service");
      const processedImages = Array.isArray(result.data.images)
        ? result.data.images
            .map((img) => getFullImageUrl(img.image))
            .filter(Boolean)
        : [];

      return {
        id: result.data.id?.toString() || "N/A",
        serialNumber:
          result.data.serial_number || result.data.id?.toString() || "N/A",
        category: result.data.category || "Uncategorized",
        title: result.data.title || "No Title",
        description: result.data.description || "No Description",
        images: processedImages,
        progress: formatProgressStatus(
          result.data.status || RAW_STATUS.PENDING
        ),
        rawStatus: result.data.status || RAW_STATUS.PENDING,
        url: result.data.url || "",
        user: result.data.user || "Unknown",
        views: result.data.views || 0,
        created_at: result.data.created_at,
        updated_at: result.data.updated_at,
      };
    },
    [getAdvertisement]
  );

  const fetchAdvertisement = useCallback(async () => {
    if (!id) {
      setError("No advertisement ID provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let result;

      if (getAdvertisement) {
        result = await getAdvertisement(id);
      } else {
        const { getAdvertisementById } = await import(
          "@/lib/advertise-service"
        );
        result = await getAdvertisementById(id);
      }

      const processedData = await processApiResponse(result);
      setSelectedAd(processedData);
    } catch (error) {
      console.error("Error fetching advertisement:", error);
      const errorMsg =
        error.message ||
        "An unexpected error occurred while fetching advertisement";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  }, [id, getAdvertisement, processApiResponse]);

  const handleStatusUpdate = useCallback(
    async (newStatus, successMessage) => {
      if (!selectedAd?.id) return;

      setProcessing(true);
      try {
        let result;

        if (updateProgress) {
          result = await updateProgress(selectedAd.id, newStatus);
        } else {
          const { approveAdvertisement } = await import(
            "@/lib/advertise-service"
          );
          // Map status to action
          const action =
            newStatus === AD_STATUS.APPROVED ? "approve" : "reject";
          result = await approveAdvertisement(selectedAd.id, action);
        }

        if (result.success) {
          setSelectedAd((prev) => ({
            ...prev,
            progress: newStatus,
            rawStatus:
              newStatus === AD_STATUS.APPROVED
                ? RAW_STATUS.APPROVED
                : RAW_STATUS.REJECTED,
          }));
        } else {
          throw new Error(
            result.error || `Failed to ${newStatus.toLowerCase()} advertisement`
          );
        }
      } catch (error) {
        console.error(`Error updating status to ${newStatus}:`, error);
        toast.error(error.message || "An unexpected error occurred");
      } finally {
        setProcessing(false);
      }
    },
    [selectedAd?.id, updateProgress]
  );

  const handleApprove = useCallback(() => {
    handleStatusUpdate(AD_STATUS.APPROVED);
  }, [handleStatusUpdate]);

  const handleReject = useCallback(() => {
    handleStatusUpdate(AD_STATUS.REJECTED);
  }, [handleStatusUpdate]);

  // Action state checks
  const isActionDisabled = useCallback(
    (action) => {
      if (processing || !selectedAd) return true;

      switch (action) {
        case "approve":
          // Approve button is disabled only when already approved
          return selectedAd.progress === AD_STATUS.APPROVED;
        case "reject":
          // Reject button is disabled only when already rejected
          return selectedAd.progress === AD_STATUS.REJECTED;
        default:
          return false;
      }
    },
    [processing, selectedAd?.progress]
  );

  // Effects
  useEffect(() => {
    fetchAdvertisement();
  }, [fetchAdvertisement]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen pt-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGoBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <h1 className="text-xl md:text-2xl font-semibold text-secondary">
              Advertisement Details
            </h1>
          </div>

          <div className="flex justify-center items-center h-64">
            <div className="flex items-center space-x-3">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
              <span className="text-lg text-gray-500">
                Loading advertisement...
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen pt-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGoBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <h1 className="text-xl md:text-2xl font-semibold text-secondary">
              Advertisement Details
            </h1>
          </div>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>

          <div className="mt-4">
            <Button onClick={fetchAdvertisement} variant="outline">
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // No data state
  if (!selectedAd) {
    return (
      <div className="min-h-screen pt-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGoBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <h1 className="text-xl md:text-2xl font-semibold text-secondary">
              Advertisement Details
            </h1>
          </div>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>Advertisement not found</AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const StatusIcon = statusConfig.icon;

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-full mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGoBack}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-secondary">
                Advertisement Details
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Review and manage advertisement status
              </p>
            </div>
          </div>

          {/* Status Badge */}
          <Badge
            className={cn(
              "flex items-center space-x-1 px-3 py-1 text-sm font-medium",
              statusConfig.color
            )}
          >
            <StatusIcon className="h-4 w-4" />
            <span>{selectedAd.progress}</span>
          </Badge>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column - Main Details */}
          <div className="lg:col-span-2 space-y-2">
            {/* Basic Information Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Basic Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 py-0">
                <div>
                  <label className="text-sm font-medium text-gray-800">
                    Title
                  </label>
                  <h2 className="text-lg font-bold text-primary">
                    {selectedAd.title}
                  </h2>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <p className="text-base text-gray-700 mt-1 leading-relaxed">
                    {selectedAd.description}
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-800 flex font-bold items-center space-x-1">
                      Advertisement ID :: <Hash className="h-3 w-3" />
                      {selectedAd.id}
                    </label>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                      <Hash className="h-3 w-3" />
                      <span className="mr-1">Serial Number:: </span>
                      <span className="text-black">
                        {selectedAd.serialNumber}
                      </span>
                    </label>
                  </div>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                    <Tag className="h-3 w-3" />
                    <span>Category</span>
                    <Badge variant="outline" className="ml-1 mt-1">
                      {selectedAd.category}
                    </Badge>
                  </label>
                </div>

                {selectedAd.url && (
                  <>
                    <Separator />
                    <div>
                      <label className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                        <ExternalLink className="h-3 w-3" />
                        <span>Website URL</span>
                      </label>
                      <a
                        href={selectedAd.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-base mt-1 inline-flex items-center space-x-1"
                      >
                        <span className="break-all">{selectedAd.url}</span>
                        <ExternalLink className="h-3 w-3 flex-shrink-0" />
                      </a>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Images Card */}
            <ImagesCard
              images={selectedAd.images}
              onImageClick={handleImageClick}
              imageErrors={imageErrors}
              onImageError={handleImageError}
              title={selectedAd.title}
            />
          </div>

          {/* Right Column - Metadata & Actions */}
          <div className="space-y-6">
            {/* Metadata Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  Advertisement Metadata
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>Created by</span>
                  </label>
                  <p className="text-sm text-secondary mt-1">
                    {selectedAd.user}
                  </p>
                </div>

                <Separator />

                <div>
                  <label className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Created</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatFullDate(selectedAd.created_at)}
                  </p>
                </div>

                {selectedAd.updated_at &&
                  selectedAd.updated_at !== selectedAd.created_at && (
                    <div>
                      <label className="text-sm font-medium text-gray-600 flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Last Updated</span>
                      </label>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatFullDate(selectedAd.updated_at)}
                      </p>
                    </div>
                  )}
              </CardContent>
            </Card>

            {/* Actions Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ActionButton
                  onClick={handleApprove}
                  disabled={isActionDisabled("approve")}
                  processing={processing}
                  className="w-full text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-300"
                  icon={CheckCircle}
                >
                  {selectedAd.progress === AD_STATUS.APPROVED
                    ? "Approved"
                    : "Approve"}
                </ActionButton>

                <ActionButton
                  onClick={handleReject}
                  disabled={isActionDisabled("reject")}
                  processing={processing}
                  variant="destructive"
                  className="w-full"
                  icon={XCircle}
                >
                  {selectedAd.progress === AD_STATUS.REJECTED
                    ? "Rejected"
                    : "Reject"}
                </ActionButton>

                <Separator />

                <Button
                  onClick={fetchAdvertisement}
                  variant="outline"
                  size="sm"
                  className="w-full"
                  disabled={loading}
                >
                  <div className="flex items-center space-x-2">
                    <Loader2
                      className={cn("h-3 w-3", loading && "animate-spin")}
                    />
                    <span>Refresh</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image Modal */}
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={closeImageModal}
          images={selectedAd.images}
          currentIndex={selectedImageIndex}
          onIndexChange={setSelectedImageIndex}
          title={selectedAd.title}
        />
      </div>
    </div>
  );
}
