// src\pages\Dashboard\Dashboard.jsx - Updated Dashboard with Admin Check
import Navbar from "@/components/layout/Navbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { AdvertiseProvider } from "../admin/Advertise/AdvertiseContext";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  PanelLeftOpen,
  PanelLeftOpenIcon,
  PanelRightOpen,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const { logout, user, isAdmin } = useAuth();

  // Check if screen is mobile/tablet size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false); // Close sidebar on desktop
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  // Helper function to check if advertise routes are active (excluding advertise list routes)
  const isAdvertiseActive = () => {
    return (
      (location.pathname.includes("/dashboard/advertise") ||
        location.pathname.includes("/dashboard/newadvertise")) &&
      !location.pathname.includes("/dashboard/advertiselist") &&
      !location.pathname.includes("/dashboard/advertiseinfo")
    );
  };

  // Helper function to check if advertise list routes are active
  const isAdvertiseListActive = () => {
    return (
      location.pathname.includes("/dashboard/advertiselist") ||
      location.pathname.includes("/dashboard/advertiseinfo")
    );
  };

  return (
    <div>
      <Navbar />

      {/* Container with proper top margin to account for sticky navbar */}
      <div className=" relative">
        {" "}
        {/* Added relative positioning */}
        {/* Mobile Sidebar Toggle Button - Fixed positioning */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="fixed top-48 left-0 z-50 cursor-pointer bg-white border border-gray-300 shadow-lg text-gray-800 p-2 rounded-md lg:hidden hover:bg-gray-50 transition-colors"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <PanelRightOpen size={24} />
            ) : (
              <PanelLeftOpen size={24} />
            )}
          </button>
        )}
        <div className="flex-row lg:flex gap-8">
          {/* Overlay for mobile - Fixed to only cover content area */}
          {isMobile && isSidebarOpen && (
            <div className="absolute inset-0 z-40" onClick={closeSidebar}></div>
          )}

          {/* Sidebar */}
          <div
            className={`
              ${isMobile ? "fixed" : "relative"} 
              ${isMobile ? "w-64" : "w-1/6"} 
              flex flex-col justify-between bg-[#f2f2f2] h-screen p-6 z-40
              transition-transform duration-300 ease-in-out
              ${
                isMobile
                  ? isSidebarOpen
                    ? "transform translate-x-0"
                    : "transform -translate-x-full"
                  : "transform translate-x-0"
              }
              ${isMobile ? "top-0 left-0 pt-10" : ""}
            `}
          >
            {/* Close button for mobile */}
            {isMobile && (
              <div className="flex justify-end">
                <button
                  onClick={closeSidebar}
                  className="text-[#505050] hover:text-[#00254a] p-1 border cursor-pointer rounded-full"
                  aria-label="Close Sidebar"
                >
                  <X size={28} />
                </button>
              </div>
            )}

            <div className="pt-0  lg:pt-44">
              <h2 className="text-xl font-bold text-[#142335] mb-4">
                My Account
              </h2>
              <ul className="space-y-2">
                <li>
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      `block py-3 px-4 font-medium transition-colors rounded-md ${
                        isActive
                          ? "bg-[#00254a] text-white"
                          : "text-[#505050] hover:bg-[#e2e2e2]"
                      }`
                    }
                    onClick={isMobile ? closeSidebar : undefined}
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/advertise"
                    className={() =>
                      `block py-3 px-4 font-medium transition-colors rounded-md ${
                        isAdvertiseActive()
                          ? "bg-[#00254a] text-white"
                          : "text-[#505050] hover:bg-[#e2e2e2]"
                      }`
                    }
                    onClick={isMobile ? closeSidebar : undefined}
                  >
                    Advertise
                  </NavLink>
                </li>

                {/* Admin Only Navigation Items */}
                {(isAdmin() || user?.role === "admin") && (
                  <li>
                    <NavLink
                      to="/dashboard/advertiselist"
                      className={() =>
                        `block py-3 px-4 font-medium transition-colors rounded-md ${
                          isAdvertiseListActive()
                            ? "bg-[#00254a] text-white"
                            : "text-[#505050] hover:bg-[#e2e2e2]"
                        }`
                      }
                      onClick={isMobile ? closeSidebar : undefined}
                    >
                      Advertise List
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>

            <div className="bottom-1">
              <button
                onClick={handleLogout}
                className="w-30 py-2 text-white px-2 cursor-pointer bg-button-bg rounded-md"
              >
                Log out
              </button>
            </div>
          </div>

          {/* Main Content Area - This is where child routes will render */}
          <div
            className={`flex-1 pt-32 md:pt-40 lg:pt-44 ${
              isMobile ? "w-full mt-24" : ""
            } transition-all duration-300`}
          >
            <AdvertiseProvider>
              <Outlet />
            </AdvertiseProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
