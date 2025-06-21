// src/pages/admin/Advertise/AdvertiseContext.jsx
import { createContext, useState, useEffect, useCallback } from "react";
import {
  adminManageAllAds,
  getAdvertisementById,
  approveAdvertisement,
  createAdvertisement,
  updateAdvertisement,
  getFullImageUrl,
} from "@/lib/advertise-service";
import {
  formatProgress,
  formatFullDate,
  isValidArticle,
  getTruncatedText,
} from "@/lib/utils";
import toast from "react-hot-toast";

export const AdvertiseContext = createContext();

export const AdvertiseProvider = ({ children }) => {
  const [advertiseData, setAdvertiseData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Format API data to match component structure
  const formatAdvertisementData = (apiData) => {
    if (!Array.isArray(apiData)) {
      console.warn("Expected array but received:", typeof apiData);
      return [];
    }

    return apiData.map((item) => {
      // Process images properly
      const processedImages = Array.isArray(item.images)
        ? item.images.map((img) => getFullImageUrl(img.image)).filter(Boolean)
        : [];

      // Use utils for consistent formatting
      const formattedProgress = formatProgress(item.status || "draft");
      const truncatedDescription = getTruncatedText(
        item.description || "No Description"
      );

      return {
        id: item.id?.toString() || "N/A",
        serialNumber: item.serial_number || item.id?.toString() || "N/A",
        category: item.category || "Uncategorized",
        title: item.title || "No Title",
        description: item.description || "No Description",
        details: item.title
          ? item.title.length > 20
            ? item.title.substring(0, 20) + "..."
            : item.title
          : "No Details",
        truncatedDescription, // Add truncated version
        imageCount: processedImages.length,
        imageDisplay:
          processedImages.length > 0
            ? `${processedImages.length} Image(s)`
            : "No Image",
        images: processedImages,
        rawImages: item.images || [],
        progress: formattedProgress,
        url: item.url || "",
        user: item.user || "Unknown",
        views: item.views || 0,
        created_at: item.created_at,
        updated_at: item.updated_at,
        rawStatus: item.status || "draft",
        // Add formatted dates using utils
        formattedCreatedAt: formatFullDate(item.created_at),
        formattedUpdatedAt: formatFullDate(item.updated_at),
      };
    });
  };

  // Get status from progress (reverse mapping) - keep existing but use utils
  const getStatusFromProgress = (progress) => {
    const statusMap = {
      Approved: "approved",
      Rejected: "rejected",
      Pending: "pending",
    };
    return statusMap[progress] || "pending";
  };

  // Fetch all advertisements for admin
  const fetchAdvertisements = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await adminManageAllAds();

      if (result.success && result.data) {
        const formattedData = formatAdvertisementData(result.data);
        setAdvertiseData(formattedData);
      } else {
        const errorMsg = result.error || "Failed to fetch advertisements";
        setError(errorMsg);
        toast.error(errorMsg);
        setAdvertiseData([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      const errorMsg =
        "An unexpected error occurred while fetching advertisements";
      setError(errorMsg);
      toast.error(errorMsg);
      setAdvertiseData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Get single advertisement by ID
  const getAdvertisement = useCallback(async (id) => {
    if (!id) {
      return { success: false, error: "Advertisement ID is required" };
    }

    try {
      const result = await getAdvertisementById(id);

      if (result.success && result.data) {
        const processedImages = Array.isArray(result.data.images)
          ? result.data.images
              .map((img) => getFullImageUrl(img.image))
              .filter(Boolean)
          : [];

        // Use utils for consistent formatting
        const formattedProgress = formatProgress(result.data.status || "draft");
        const truncatedDescription = getTruncatedText(
          result.data.description || "No Description"
        );

        const formattedAd = {
          id: result.data.id?.toString() || "N/A",
          serialNumber:
            result.data.serial_number || result.data.id?.toString() || "N/A",
          category: result.data.category || "Uncategorized",
          title: result.data.title || "No Title",
          description: result.data.description || "No Description",
          details: result.data.title || "No Details",
          truncatedDescription,
          imageCount: processedImages.length,
          imageDisplay:
            processedImages.length > 0
              ? `${processedImages.length} Image(s)`
              : "No Image",
          images: processedImages,
          rawImages: result.data.images || [],
          progress: formattedProgress,
          url: result.data.url || "",
          user: result.data.user || "Unknown",
          views: result.data.views || 0,
          created_at: result.data.created_at,
          updated_at: result.data.updated_at,
          rawStatus: result.data.status || "draft",
          // Add formatted dates
          formattedCreatedAt: formatFullDate(result.data.created_at),
          formattedUpdatedAt: formatFullDate(result.data.updated_at),
        };

        return { success: true, data: formattedAd };
      } else {
        return {
          success: false,
          error: result.error || "Failed to fetch advertisement",
        };
      }
    } catch (error) {
      console.error("Error fetching advertisement:", error);
      return { success: false, error: "Failed to fetch advertisement" };
    }
  }, []);

  // Update progress (approve/reject)
  const updateProgress = useCallback(async (id, newProgress) => {
    if (!id || !newProgress) {
      toast.error("Invalid advertisement ID or progress status");
      return { success: false, error: "Invalid parameters" };
    }

    try {
      // Map progress to API action
      const actionMap = {
        Approved: "approve",
        Rejected: "reject",
        Pending: "pending",
      };

      const action = actionMap[newProgress];
      if (!action) {
        toast.error("Invalid progress status");
        return { success: false, error: "Invalid progress status" };
      }

      const result = await approveAdvertisement(id, action);

      if (result.success) {
        // Update local state
        setAdvertiseData((prevData) =>
          prevData.map((item) =>
            item.id === id
              ? {
                  ...item,
                  progress: newProgress,
                  rawStatus: getStatusFromProgress(newProgress),
                  // Update formatted date when status changes
                  formattedUpdatedAt: formatFullDate(new Date().toISOString()),
                }
              : item
          )
        );

        const actionText = action === "approve" ? "approved" : "rejected";
        toast.success(`Advertisement ${actionText} successfully!`);
        return { success: true };
      } else {
        const errorMsg = result.error || `Failed to ${action} advertisement`;
        toast.error(errorMsg);
        return { success: false, error: errorMsg };
      }
    } catch (error) {
      console.error("Error updating progress:", error);
      toast.error("An unexpected error occurred");
      return { success: false, error: "An unexpected error occurred" };
    }
  }, []);

  // Create new advertisement
  const createNewAdvertisement = useCallback(
    async (formData) => {
      if (!formData) {
        toast.error("Form data is required");
        return { success: false, error: "Form data is required" };
      }

      try {
        const result = await createAdvertisement(formData);

        if (result.success) {
          // Refresh the advertisements list
          await fetchAdvertisements();
          toast.success("Advertisement created successfully!");
          return { success: true, data: result.data };
        } else {
          const errorMsg = result.error || "Failed to create advertisement";
          toast.error(errorMsg);
          return { success: false, error: errorMsg };
        }
      } catch (error) {
        console.error("Error creating advertisement:", error);
        toast.error("An unexpected error occurred");
        return { success: false, error: "An unexpected error occurred" };
      }
    },
    [fetchAdvertisements]
  );

  // Update advertisement
  const updateAdvertisementData = useCallback(
    async (id, formData) => {
      if (!id || !formData) {
        toast.error("Advertisement ID and form data are required");
        return { success: false, error: "Invalid parameters" };
      }

      try {
        const result = await updateAdvertisement(id, formData);

        if (result.success) {
          // Refresh the advertisements list
          await fetchAdvertisements();
          toast.success("Advertisement updated successfully!");
          return { success: true, data: result.data };
        } else {
          const errorMsg = result.error || "Failed to update advertisement";
          toast.error(errorMsg);
          return { success: false, error: errorMsg };
        }
      } catch (error) {
        console.error("Error updating advertisement:", error);
        toast.error("An unexpected error occurred");
        return { success: false, error: "An unexpected error occurred" };
      }
    },
    [fetchAdvertisements]
  );

  // Filter advertisements by status
  const getAdvertisementsByStatus = useCallback(
    (status) => {
      if (!status) return advertiseData;
      return advertiseData.filter((ad) => ad.progress === status);
    },
    [advertiseData]
  );

  // Get advertisement counts by status
  const getAdvertisementCounts = useCallback(() => {
    return {
      total: advertiseData.length,
      pending: advertiseData.filter((ad) => ad.progress === "Pending").length,
      approved: advertiseData.filter((ad) => ad.progress === "Approved").length,
      rejected: advertiseData.filter((ad) => ad.progress === "Rejected").length,
    };
  }, [advertiseData]);

  // Refresh advertisements
  const refreshAdvertisements = useCallback(() => {
    return fetchAdvertisements();
  }, [fetchAdvertisements]);

  // Validate advertisement data using utils
  const validateAdvertisement = useCallback((ad) => {
    return isValidArticle(ad);
  }, []);

  // Load advertisements on mount
  useEffect(() => {
    fetchAdvertisements();
  }, [fetchAdvertisements]);

  const contextValue = {
    // Data
    advertiseData,
    loading,
    error,

    // Actions
    updateProgress,
    fetchAdvertisements,
    getAdvertisement,
    createNewAdvertisement,
    updateAdvertisementData,
    refreshAdvertisements,

    // Utilities
    getAdvertisementsByStatus,
    getAdvertisementCounts,
    formatProgress,
    getStatusFromProgress,
    validateAdvertisement,
  };

  return (
    <AdvertiseContext.Provider value={contextValue}>
      {children}
    </AdvertiseContext.Provider>
  );
};
