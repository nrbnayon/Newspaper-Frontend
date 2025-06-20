// src\lib\advertise-service.js

import apiClient from "./auth-service";

const ADVERTISEMENT_ENDPOINTS = {
  USERS_ALL_ADS: "/advertisements/user/get_all/",
  GET_ALL: "/advertisements/get_all/",
  GET_SINGLE: (id) => `/advertisements/${id}/`,
  CREATE: "/advertisements/create/",
  UPDATE: (id) => `/advertisements/${id}/update/`,
  APPROVE: (id) => `/advertisements/${id}/approve/`,
};

// Get all advertisements with enhanced error handling
export const getUerSeeAllAdvertisements = async () => {
  try {
    const response = await apiClient.get(ADVERTISEMENT_ENDPOINTS.USERS_ALL_ADS);

    // Process the advertisements data with better validation
    const processedAds =
      response.data
        ?.map((ad, index) => ({
          ...ad,
          // Ensure ID exists for consistent sorting
          id: ad.id || `ad-${index}-${Date.now()}`,
          // Ensure uploaded_images is always an array
          uploaded_images: Array.isArray(ad.uploaded_images)
            ? ad.uploaded_images.filter((img) => img && img.trim() !== "") // Remove empty images
            : ad.uploaded_images
            ? [ad.uploaded_images].filter((img) => img && img.trim() !== "")
            : [],
          // Ensure all required fields have defaults
          title: ad.title || `Advertisement ${index + 1}`,
          description: ad.description || "",
          category: ad.category || "General",
          url: ad.url || null,
          // Add status check
          is_active: ad.is_active !== false, // Default to true if not specified
          is_approved: ad.is_approved !== false, // Default to true if not specified
        }))
        .filter(
          (ad) =>
            // Only return active and approved ads with valid images
            ad.is_active && ad.is_approved && ad.uploaded_images.length > 0
        ) || [];

    console.log("Processed advertisements:", processedAds);

    return {
      success: true,
      data: processedAds,
    };
  } catch (error) {
    console.error("Error fetching advertisements:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch advertisements",
      data: [], // Return empty array as fallback
    };
  }
};

// Get all advertisements
export const getAllAdvertisements = async () => {
  try {
    const response = await apiClient.get(ADVERTISEMENT_ENDPOINTS.GET_ALL);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error fetching advertisements:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch advertisements',
    };
  }
};

// Get single advertisement by ID
export const getAdvertisementById = async (id) => {
  try {
    const response = await apiClient.get(ADVERTISEMENT_ENDPOINTS.GET_SINGLE(id));
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error fetching advertisement:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to fetch advertisement',
    };
  }
};

// Create new advertisement
export const createAdvertisement = async (formData) => {
  try {
    const response = await apiClient.post(ADVERTISEMENT_ENDPOINTS.CREATE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error creating advertisement:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to create advertisement',
    };
  }
};

// Update advertisement
export const updateAdvertisement = async (id, formData) => {
  try {
    const response = await apiClient.put(ADVERTISEMENT_ENDPOINTS.UPDATE(id), formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error updating advertisement:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to update advertisement',
    };
  }
};

// Approve/Reject advertisement
export const approveAdvertisement = async (id, action) => {
  try {
    const response = await apiClient.post(ADVERTISEMENT_ENDPOINTS.APPROVE(id), {
      action: action, // 'approve' or 'reject'
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error('Error approving/rejecting advertisement:', error);
    return {
      success: false,
      error: error.response?.data?.message || 'Failed to process advertisement approval',
    };
  }
};