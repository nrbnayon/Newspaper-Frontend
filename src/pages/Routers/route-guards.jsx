import {Navigate, Outlet, useLocation } from "react-router-dom";

export const PublicRoute = () => {
  const location = useLocation();

  const isAuthenticated = false;

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

  return <Outlet />;
};


export const VerificationRoute = () => {
  const location = useLocation();
  return <Outlet />;
};

export const ProtectedRoute = () => {
  const location = useLocation();

  const isAuthenticated = false; // Replace with your authentication logic

  if (!isAuthenticated) {
    // Redirect to login page, but save current location
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <Outlet />;
};