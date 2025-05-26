// This is a mock service for authentication
// In a real application, you would connect to your backend API

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Promise<Object>} - Registered user data
 */
export async function registerUser(userData) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate validation
      if (!userData.email || !userData.password) {
        return reject(new Error("Email and password are required"));
      }

      if (userData.email === "existing@example.com") {
        return reject(new Error("Email already in use"));
      }

      // Simulate successful registration
      resolve({
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        createdAt: new Date().toISOString(),
      });
    }, 1000);
  });
}

/**
 * Login a user
 * @param {Object} credentials - User login credentials
 * @returns {Promise<Object>} - User data with token
 */
export async function loginUser(credentials) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate validation
      if (!credentials.email || !credentials.password) {
        return reject(new Error("Email and password are required"));
      }

      // Simulate successful login
      resolve({
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email: credentials.email,
        token: "jwt_token_" + Math.random().toString(36).substr(2, 16),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      });
    }, 1000);
  });
}

/**
 * Login with a social provider
 * @param {string} provider - The social provider (google, facebook)
 * @returns {Promise<Object>} - User data with token
 */
export async function socialLogin(provider) {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate successful social login
      resolve({
        id: "user_" + Math.random().toString(36).substr(2, 9),
        email: `user_${Math.random().toString(36).substr(2, 5)}@example.com`,
        provider,
        token: "jwt_token_" + Math.random().toString(36).substr(2, 16),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      });
    }, 1000);
  });
}

export async function changePassword({ email, password, type }) {
  // Simulated change password API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({ success: true, message: "Password changed successfully" });
      } else {
        reject(new Error("Invalid input"));
      }
    }, 1000);
  });
}

export async function sendForgotPasswordOTP(email) {
  // Simulated OTP sending
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve({ success: true, message: "OTP sent to email" });
      } else {
        reject(new Error("Email is required"));
      }
    }, 1000);
  });
}

export async function verifyOTP({ email, otp, type }) {
  // Simulated API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (otp === "123456") {
        resolve({ success: true, message: "OTP verified" });
      } else {
        reject(new Error("Invalid OTP"));
      }
    }, 1000);
  });
}

export async function resendOTP({ email, type }) {
  // Simulated resend
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "OTP resent" });
    }, 1000);
  });
}

/**
 * Logout the current user
 * @returns {Promise<void>}
 */
export async function logoutUser() {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Clear local storage or cookies in a real app
      resolve();
    }, 500);
  });
}
