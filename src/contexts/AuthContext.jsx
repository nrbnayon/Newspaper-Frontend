// src/contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import {
  isAuthenticated as checkAuth,
  getCurrentUser,
  removeAuthTokens,
  loginUser as authLoginUser,
  logoutUser as authLogoutUser,
  setAuthTokens,
} from "@/lib/auth-service";
import apiClient from "@/lib/auth-service";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch user profile from API
  const fetchProfile = async () => {
    try {
      const response = await apiClient.get("/auth/profile/");
      const profileData = response.data;

      // Extract user and profile information
      const userData = {
        id: profileData.user.id,
        email: profileData.user.email,
        role: profileData.user.role,
        firstName: profileData.user.user_profile.first_name,
        lastName: profileData.user.user_profile.last_name,
        profilePicture: profileData.user.user_profile.profile_picture,
        phoneNumber: profileData.user.user_profile.phone_number,
        joinedDate: profileData.user.user_profile.joined_date,
      };

      const subscriptionData = {
        id: profileData.id,
        stripeSubscriptionId: profileData.stripe_subscription_id,
        status: profileData.status,
        price: profileData.price,
        durationDays: profileData.duration_days,
        startDate: profileData.start_date,
        endDate: profileData.end_date,
        isActive: profileData.is_active,
        autoRenew: profileData.auto_renew,
        createdAt: profileData.created_at,
        updatedAt: profileData.updated_at,
        plan: profileData.plan,
      };

      setUser(userData);
      setProfile(subscriptionData);
      return { user: userData, profile: subscriptionData };
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      throw error;
    }
  };

  // Check authentication status on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const authenticated = checkAuth();

        if (authenticated) {
          // Try to get user from token first
          const currentUser = getCurrentUser();

          if (currentUser) {
            setUser(currentUser);
            setIsLoggedIn(true);

            // Fetch complete profile from API
            try {
              await fetchProfile();
            } catch (error) {
              console.warn(
                "Failed to fetch profile, but user is authenticated"
              );
            }
          } else {
            // Token exists but no user data, clear auth
            setUser(null);
            setProfile(null);
            setIsLoggedIn(false);
            removeAuthTokens();
          }
        } else {
          setUser(null);
          setProfile(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Auth check error:", error);
        setUser(null);
        setProfile(null);
        setIsLoggedIn(false);
        removeAuthTokens();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login function - delegates to service but manages state
  const login = async (credentials) => {
    try {
      setIsLoading(true);

      // Use the service function
      const result = await authLoginUser(credentials);

      // Get updated user info from token
      const currentUser = getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        setIsLoggedIn(true);

        // Fetch complete profile
        try {
          await fetchProfile();
        } catch (error) {
          console.warn("Login successful but failed to fetch profile");
        }
      }

      return result;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function - delegates to service but manages state
  const logout = () => {
    try {
      // Use the service function
      authLogoutUser();

      // Update state
      setUser(null);
      setProfile(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Logout error:", error);
      // Still clear state even if service fails
      setUser(null);
      setProfile(null);
      setIsLoggedIn(false);
      removeAuthTokens();
    }
  };

  // Update user data
  const updateUser = (userData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...userData,
    }));
  };

  // Update profile data
  const updateProfile = (profileData) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...profileData,
    }));
  };

  // Refresh profile data
  const refreshProfile = async () => {
    if (!isLoggedIn) return null;

    try {
      setIsLoading(true);
      const profileData = await fetchProfile();
      return profileData;
    } catch (error) {
      console.error("Failed to refresh profile:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Check if user has specific role
  const hasRole = (role) => {
    return user?.role === role;
  };

  // Check if user is admin
  const isAdmin = () => {
    return hasRole("admin");
  };

  // Check if user has active subscription
  const hasActiveSubscription = () => {
    return profile?.isActive && profile?.status === "premium";
  };

  // Check if subscription is expired
  const isSubscriptionExpired = () => {
    if (!profile?.endDate) return true;
    return new Date(profile.endDate) < new Date();
  };

  // Get subscription status
  const getSubscriptionStatus = () => {
    if (!profile) return "none";
    if (!profile.isActive) return "inactive";
    if (isSubscriptionExpired()) return "expired";
    return profile.status;
  };

  const value = {
    // State
    user,
    profile,
    isLoggedIn,
    isLoading,

    // Actions
    login,
    logout,
    updateUser,
    updateProfile,
    refreshProfile,

    // Helpers
    hasRole,
    isAdmin,
    hasActiveSubscription,
    isSubscriptionExpired,
    getSubscriptionStatus,

    // Direct service access for edge cases
    checkAuth: () => checkAuth(),
    getCurrentUser: () => getCurrentUser(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
