// src\lib\advertise-service.js

import apiClient from "./auth-service";

const ADVERTISEMENT_ENDPOINTS = {
  GET_ALL: "/advertisements/get_all/",
  USERS_ALL_ADS: "/advertisements/user/get_all/",
  GET_SINGLE: (id) => `/advertisements/${id}/`,
  CREATE: "/advertisements/create/",
  UPDATE: (id) => `/advertisements/${id}/update/`,
  APPROVE: (id) => `/advertisements/${id}/approve/`,
  REJECT: (id) => `/advertisements/${id}/rejected/`,
  DELETE_BY_ID: (id) => `/advertisements/${id}/delete/`,
};

// Get all advertisements with enhanced error handling
export const getAllPublicAdvertisements = async () => {
  try {
    const response = await apiClient.get(ADVERTISEMENT_ENDPOINTS.GET_ALL);
    const processedAds =
      response.data
        ?.map((ad, index) => ({
          ...ad,
          id: ad.id || `ad-${index}-${Date.now()}`,
          // Process images array from API response
          images: Array.isArray(ad.images)
            ? ad.images.filter(
                (img) => img && img.image && img.image.trim() !== ""
              )
            : [],
          // Extract image URLs for easier access with proper URL construction
          imageUrls: Array.isArray(ad.images)
            ? ad.images
                .filter((img) => img && img.image && img.image.trim() !== "")
                .map((img) => getFullImageUrl(img.image))
            : [],
          title: ad.title || `Advertisement ${index + 1}`,
          description: ad.description || "",
          category: ad.category || "General",
          url: ad.url || null,
          user: ad.user || "Unknown",
          serial_number: ad.serial_number || "",
          views: ad.views || 0,
          status: ad.status || "pending",
          created_at: ad.created_at || new Date().toISOString(),
          is_active: ad.status === "approved", 
          has_images: Array.isArray(ad.images) && ad.images.length > 0,
        }))
        .filter((ad) => {
          return ad.status === "approved" && ad.has_images;
        }) || [];

    return {
      success: true,
      data: processedAds,
      total: response.data?.length || 0,
      approved: processedAds.length,
    };
  } catch (error) {
    console.error("Error fetching advertisements:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch advertisements",
      data: [], // Return empty array as fallback
      total: 0,
      approved: 0,
    };
  }
};

// Helper function to get full image URL
export const getFullImageUrl = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  if (imagePath.startsWith("/media")) {
    const assetsUrl = import.meta.env.VITE_ASSETS_API_URL;
    return assetsUrl
      ? `${assetsUrl.replace(/\/$/, "")}${imagePath}`
      : imagePath;
  }
  return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
};

// admin manage all ads
export const adminManageAllAds = async () => {
  try {
    const response = await apiClient.get(ADVERTISEMENT_ENDPOINTS.GET_ALL);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching advertisements:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch advertisements",
    };
  }
};

// Get all advertisements
export const getLoginUserCreateAllAdvertisements = async () => {
  try {
    const response = await apiClient.get(ADVERTISEMENT_ENDPOINTS.USERS_ALL_ADS);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching advertisements:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch advertisements",
    };
  }
};

// Get single advertisement by ID
export const getAdvertisementById = async (id) => {
  try {
    const response = await apiClient.get(
      ADVERTISEMENT_ENDPOINTS.GET_SINGLE(id)
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching advertisement:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch advertisement",
    };
  }
};

// Create new advertisement
export const createAdvertisement = async (formData) => {
  try {
    const response = await apiClient.post(
      ADVERTISEMENT_ENDPOINTS.CREATE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error creating advertisement:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to create advertisement",
    };
  }
};

// Update advertisement
export const updateAdvertisement = async (id, formData) => {
  try {
    const response = await apiClient.put(
      ADVERTISEMENT_ENDPOINTS.UPDATE(id),
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error updating advertisement:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to update advertisement",
    };
  }
};

// Approve/Reject advertisement
export const approveAdvertisement = async (id, action) => {
  try {
    let endpoint;
    let payload = {};

    // Map actions to correct endpoints
    if (action === "approve") {
      endpoint = ADVERTISEMENT_ENDPOINTS.APPROVE(id);
      payload = { action: "approve" };
    } else if (action === "reject") {
      endpoint = ADVERTISEMENT_ENDPOINTS.REJECT(id);
      payload = {};
    } else {
      // Handle any other actions if needed
      endpoint = ADVERTISEMENT_ENDPOINTS.APPROVE(id);
      payload = { action: action };
    }

    const response = await apiClient.post(endpoint, payload);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error approving/rejecting advertisement:", error);
    return {
      success: false,
      error:
        error.response?.data?.message ||
        "Failed to process advertisement approval",
    };
  }
};


// Delete ads
export const deleteAdsById = async (id) => {
  try {
    const response = await apiClient.get(
      ADVERTISEMENT_ENDPOINTS.DELETE_BY_ID(id)
    );
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error fetching advertisement:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to fetch advertisement",
    };
  }
};
