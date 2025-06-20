// src\lib\advertise-service.js

import apiClient from "./auth-service";

const ADVERTISEMENT_ENDPOINTS = {
  GET_ALL: '/advertisements/get_all/',
  GET_SINGLE: (id) => `/advertisements/${id}/`,
  CREATE: '/advertisements/create/',
  UPDATE: (id) => `/advertisements/${id}/update/`,
  APPROVE: (id) => `/advertisements/${id}/approve/`,
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