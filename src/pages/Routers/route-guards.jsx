// src/pages/Routers/route-guards.jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00254A]"></div>
  </div>
);

// Public Route - Accessible without authentication
export const PublicRoute = () => {
  const location = useLocation();
  const { isLoggedIn, isLoading } = useAuth();

  // Show loading while checking auth status
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // If authenticated and trying to access auth pages, redirect to dashboard
  if (
    isLoggedIn &&
    ["/login", "/signup", "/signin", "/register"].includes(location.pathname)
  ) {
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};

// Verification Route - For OTP and similar verification flows
export const VerificationRoute = () => {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <Outlet />;
};

// Protected Route - Requires authentication
export const ProtectedRoute = () => {
  const location = useLocation();
  const { isLoggedIn, isLoading } = useAuth();

  // Show loading while checking auth status
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoggedIn) {
    // Redirect to login page, but save current location
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

// Admin only route guard
export const AdminRoute = () => {
  const location = useLocation();
  const { isLoggedIn, isAdmin, isLoading, user } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Check if user has admin role
  if (!isAdmin() && user?.role !== "admin") {
    // Redirect non-admin users to dashboard with error message
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

// Premium only route guard
export const PremiumRoute = () => {
  const location = useLocation();
  const { isLoggedIn, hasActiveSubscription, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!hasActiveSubscription()) {
    return <Navigate to="/pricing" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

// Role-based route guard (flexible for different roles)
export const RoleBasedRoute = ({ allowedRoles = [] }) => {
  const location = useLocation();
  const { isLoggedIn, user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
