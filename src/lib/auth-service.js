// src/lib/auth-service.js
import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://192.168.10.145:8000/api";

// Token expiration times (in seconds)
const TOKEN_EXPIRY = {
  ACCESS_TOKEN: 30 * 24 * 60 * 60, // 30 days
  REFRESH_TOKEN: 365 * 24 * 60 * 60, // 365 days
  AUTH_STATE: 30 * 24 * 60 * 60, // 30 days
};

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const accessToken = getCookie("accessToken");
    if (accessToken && !isTokenExpired(accessToken)) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Token refresh queue management
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

// Response interceptor with improved error handling
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.error("API Response Error:", error.response?.data?.error);
    // Handle unauthorized responses
    if (error?.response?.status === 401) {
      // Check for specific unauthorized messages
      const errorMessage =
        error.response?.data?.error || error?.response?.data?.message;
      if (
        errorMessage?.includes("You are not authorized") ||
        errorMessage?.includes("Invalid token") ||
        errorMessage?.includes("Token expired")
      ) {
        // Don't retry refresh token requests
        if (originalRequest.url?.includes("/auth/refresh-token")) {
          console.error("Refresh token invalid, clearing auth state");
          await handleAuthFailure();
          return Promise.reject(error);
        }
        // Don't retry if already attempted
        if (originalRequest._retry) {
          await handleAuthFailure();
          return Promise.reject(error);
        }
        // Handle token refresh
        if (isRefreshing) {
          try {
            const token = await new Promise((resolve, reject) => {
              failedQueue.push({ resolve, reject });
            });
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          } catch (err) {
            return Promise.reject(err);
          }
        }

        return refreshTokenAndRetry(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

// Refresh token and retry original request
const refreshTokenAndRetry = async (originalRequest) => {
  originalRequest._retry = true;
  isRefreshing = true;

  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) {
    await handleAuthFailure();
    return Promise.reject(new Error("No refresh token available"));
  }

  try {
    // Use POST request for security (not GET with query params)
    const response = await axios.post(
      `${API_URL}/auth/refresh-token`,
      {
        refreshToken: refreshToken,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      }
    );

    const { accessToken, refreshToken: newRefreshToken } = response.data.data;

    // Update tokens
    setAuthTokens(accessToken, newRefreshToken || refreshToken);

    // Update original request
    originalRequest.headers.Authorization = `Bearer ${accessToken}`;

    // Process queued requests
    processQueue(null, accessToken);

    // Retry original request
    return apiClient(originalRequest);
  } catch (refreshError) {
    console.error("Token refresh failed:", refreshError);
    processQueue(refreshError, null);
    await handleAuthFailure();
    return Promise.reject(refreshError);
  } finally {
    isRefreshing = false;
  }
};

// Handle authentication failure
const handleAuthFailure = async () => {
  removeAuthTokens();

  // Redirect to login page (adjust path as needed)
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
};

// =============================
// COOKIE MANAGEMENT FUNCTIONS
// =============================

export const setCookie = (name, value, options = {}) => {
  const defaultOptions = {
    path: "/",
    secure: import.meta.env.VITE_NODE_ENV === "production",
    sameSite: "strict",
  };

  const cookieOptions = { ...defaultOptions, ...options };
  let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  for (const optionKey in cookieOptions) {
    if (cookieOptions[optionKey] === false) continue;

    if (optionKey === "maxAge") {
      cookieString += `; max-age=${cookieOptions[optionKey]}`;
    } else if (optionKey === "expires") {
      cookieString += `; expires=${cookieOptions[optionKey].toUTCString()}`;
    } else {
      cookieString += `; ${optionKey}=${cookieOptions[optionKey]}`;
    }
  }

  document.cookie = cookieString;
};

export const getCookie = (name) => {
  const nameEQ = `${encodeURIComponent(name)}=`;
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return decodeURIComponent(cookie.substring(nameEQ.length));
    }
  }
  return null;
};

export const removeCookie = (name, options = {}) => {
  setCookie(name, "", {
    ...options,
    maxAge: -1,
    expires: new Date(0),
  });
};

export const hasCookie = (name) => {
  const value = getCookie(name);
  return value !== null && value !== "";
};

// ========================
// JWT UTILITY FUNCTIONS
// ========================

export const parseJwt = (token) => {
  try {
    if (!token) return null;

    const base64Url = token.split(".")[1];
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("JWT Parse Error:", error);
    return null;
  }
};

export const isTokenExpired = (token) => {
  const payload = parseJwt(token);
  if (!payload || !payload.exp) return true;

  // Add 30 second buffer to account for clock skew
  return payload.exp * 1000 < Date.now() + 30000;
};

// ============================
// AUTH TOKEN MANAGEMENT
// ============================

export const setAuthTokens = (accessToken, refreshToken) => {
  if (!accessToken || !refreshToken) {
    console.error("Missing tokens when setting auth tokens");
    return;
  }

  setCookie("accessToken", accessToken, {
    maxAge: TOKEN_EXPIRY.ACCESS_TOKEN,
    secure: import.meta.env.VITE_NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  setCookie("refreshToken", refreshToken, {
    maxAge: TOKEN_EXPIRY.REFRESH_TOKEN,
    secure: import.meta.env.VITE_NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  setCookie("isAuthenticated", "true", {
    maxAge: TOKEN_EXPIRY.AUTH_STATE,
    secure: import.meta.env.VITE_NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
};

export const removeAuthTokens = () => {
  const cookieOptions = { path: "/" };
  removeCookie("accessToken", cookieOptions);
  removeCookie("refreshToken", cookieOptions);
  removeCookie("isAuthenticated", cookieOptions);
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const accessToken = getCookie("accessToken");
  const refreshToken = getCookie("refreshToken");
  const authFlag = getCookie("isAuthenticated");

  return (
    authFlag === "true" &&
    accessToken &&
    refreshToken &&
    !isTokenExpired(accessToken)
  );
};

// Get current user from token
export const getCurrentUser = () => {
  const accessToken = getCookie("accessToken");
  if (!accessToken || isTokenExpired(accessToken)) {
    return null;
  }

  const payload = parseJwt(accessToken);
  return payload?.user || payload;
};

export default apiClient;

// ============================
// AUTH API FUNCTIONS
// ============================

// Send OTP for email verification
export const sendOTP = async ({ email }) => {
  try {
    const response = await apiClient.post("/auth/otp/create/", { email });
    return response.data;
  } catch (error) {
    console.error("Send OTP Error:", error);
    throw new Error(error.response?.data?.error || "Failed to send OTP");
  }
};

// Verify OTP
export const verifyOTP = async ({ email, otp, type }) => {
  try {
    const response = await apiClient.post("/auth/otp/verify/", {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    console.error("Verify OTP Error:", error);
    throw new Error(error.response?.data?.error || "Invalid OTP");
  }
};

// Register user (called after OTP verification)
export const registerUser = async (userData) => {
  try {
    const response = await apiClient.post("/auth/register/", userData);
    return response.data;
  } catch (error) {
    console.error("Register User Error:", error);
    throw new Error(error.response?.data?.error || "Registration failed");
  }
};

// Login user
export const loginUser = async ({ email, password }) => {
  try {
    const response = await apiClient.post("/auth/login/", { email, password });
    const { access_token, refresh_token, profile } = response.data;
    // Set tokens in cookies
    setAuthTokens(access_token, refresh_token);

    return { access_token, refresh_token, profile };
  } catch (error) {
    console.error("Login Error:", error);
    throw new Error(error.response?.data?.error || "Login failed");
  }
};

// Send forgot password OTP
export const sendForgotPasswordOTP = async ({ email }) => {
  try {
    const response = await apiClient.post("/auth/password-reset/request/", {
      email,
    });

    return response.data;
  } catch (error) {
    console.error("Forgot Password OTP Error:", error);
    throw new Error(error.response?.data?.error || "Failed to send reset code");
  }
};

// Reset password with OTP
export const resetPassword = async ({ email, otp, new_password }) => {
  try {
    const response = await apiClient.post("/auth/password-reset/confirm/", {
      email,
      otp,
      new_password,
    });
    return response.data;
  } catch (error) {
    console.error("Reset Password Error:", error);
    throw new Error(error.response?.data?.error || "Password reset failed");
  }
};

// Resend OTP
export const resendOTP = async ({ email, type }) => {
  try {
    let endpoint = "/auth/otp/create/";
    if (type === "forgot-password") {
      endpoint = "/auth/password-reset/request/";
    }

    const response = await apiClient.post(endpoint, { email });
    return response.data;
  } catch (error) {
    console.error("Resend OTP Error:", error);
    throw new Error(error.response?.data?.error || "Failed to resend OTP");
  }
};

// Logout user - PURE SERVICE FUNCTION
export const logoutUser = () => {
  // Clear all auth tokens from cookies
  removeAuthTokens();
  // Redirect to home page
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }
};

// Get user profile - NEW FUNCTION
export const getUserProfile = async () => {
  try {
    const response = await apiClient.get("/auth/profile/");
    return response.data;
  } catch (error) {
    console.error("Get Profile Error:", error);
    throw new Error(error.response?.data?.error || "Failed to get profile");
  }
};

// Update user profile - NEW FUNCTION
export const updateUserProfile = async (profileData) => {
  try {
    const response = await apiClient.put("/auth/profile/", profileData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Update Profile Error:", error);
    throw new Error(error.response?.data?.error || "Failed to update profile");
  }
};
