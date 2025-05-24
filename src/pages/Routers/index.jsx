// src\pages\Routers\index.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { ProtectedRoute, PublicRoute, VerificationRoute } from "./route-guards";
import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";
import NotFoundPage from "../NotFoundPage";

// Lazy loaded components
const HomePage = lazy(() => import("../HomePage"));
import Dashboard from "./../Dashboard/Dashboard";
import AdvertiseList from "../admin/Advertise/AdvertiseList";

const Profile = lazy(() => import("./../Profile/Profile"));
const Advertise = lazy(() => import("../Advertise/Advertise"));
const NewAdvertise = lazy(() => import("./../Advertise/NewAdvertise"));
// const VerifyOtp = lazy(() => import("../VerifyOtp")); // Uncomment and adjust path as needed

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<HomePage />}>
      <Routes location={location} key={location.pathname}>
        {/* Public Auth Routes - Only accessible when NOT logged in */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="advertise" element={<Advertise />} />
              <Route path="newadvertise" element={<NewAdvertise />} />
              <Route path="advertiselist" element={<AdvertiseList/>} />
            </Route>
          </Route>
        </Route>

        <Route element={<VerificationRoute />}>
          {/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
        </Route>

        {/* Protected Routes - Only accessible when logged in */}
        {/* <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="profile" element={<Profile />} />
              <Route path="advertise" element={<Advertise />} />
              <Route path="newadvertise" element={<NewAdvertise />} />
            </Route>
          </Route>
        </Route> */}

        {/* Public routes accessible to all users */}
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        {/* <Route path="/play/audios/:audioPath" element={<AudioPlayerPage />} /> */}

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
