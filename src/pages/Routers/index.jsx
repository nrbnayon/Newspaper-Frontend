// src\pages\Routers\index.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import {
  ProtectedRoute,
  PublicRoute,
  VerificationRoute,
  AdminRoute,
} from "./route-guards";
import AuthLayout from "@/layouts/AuthLayout";
import NotFoundPage from "../NotFoundPage";
import Dashboard from "./../Dashboard/Dashboard";
import AdvertiseList from "../admin/Advertise/AdvertiseList";
import AdvertiseInfo from "../admin/Advertise/AdvertiseInfo";
import Pricing from "../Pricing/Pricing";

const HomePage = lazy(() => import("../HomePage"));
const Profile = lazy(() => import("./../Profile/Profile"));
const Advertise = lazy(() => import("../Advertise/Advertise"));
const NewAdvertise = lazy(() => import("./../Advertise/NewAdvertise"));

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense fallback={<HomePage />}>
      <Routes location={location} key={location.pathname}>
        {/* Public Routes - Accessible without authentication */}
        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Route>

        {/* Protected Routes - Require authentication */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="advertise" element={<Advertise />} />
              <Route path="newadvertise" element={<NewAdvertise />} />

              {/* Admin Only Routes */}
              <Route element={<AdminRoute />}>
                <Route path="advertiselist" element={<AdvertiseList />} />
                <Route path="advertiseinfo/:id" element={<AdvertiseInfo />} />
              </Route>
            </Route>
          </Route>
        </Route>

        {/* Verification Routes */}
        <Route element={<VerificationRoute />}>
          {/* <Route path="/verify-otp" element={<VerifyOtp />} /> */}
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
