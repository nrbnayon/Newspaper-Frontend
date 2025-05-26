// src\pages\Dashboard\Dashboard.jsx - Responsive Dashboard with Mobile Sidebar
import Navbar from "@/components/layout/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import { AdvertiseProvider } from "../admin/Advertise/AdvertiseContext";
import { useState, useEffect } from "react";
import { PanelLeftOpen } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile/tablet size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false); // Close sidebar on desktop
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex-row lg:flex gap-8 ">
        {/* Mobile Sidebar Toggle Button */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className=" bg-transparent text-white mt-3 p-2 rounded-md shadow-lg lg:hidden"
            aria-label="Toggle Sidebar"
          >
            <PanelLeftOpen size={28} color="#000000" />
             
          </button>
        )}

        {/* Overlay for mobile */}
        {isMobile && isSidebarOpen && (
          <div
            className="fixed inset-0  bg-opacity-50 z-40"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Sidebar */}
        <div
          className={`
            ${isMobile ? 'fixed' : 'relative'} 
            ${isMobile ? 'w-50' : 'w-1/6'} 
            flex flex-col justify-between bg-[#f2f2f2] h-screen p-6 z-50
            transition-transform duration-300 ease-in-out
            ${
              isMobile
                ? isSidebarOpen
                  ? 'transform translate-x-0'
                  : 'transform -translate-x-full'
                : 'transform translate-x-0'
            }
            ${isMobile ? 'top-0 left-0' : ''}
          `}
        >
          {/* Close button for mobile */}
          {isMobile && (
            <div className="flex justify-end mb-4">
              <button
                onClick={closeSidebar}
                className="text-[#505050] hover:text-[#00254a] p-1"
                aria-label="Close Sidebar"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          <div>
            <h2 className="text-xl font-bold text-[#142335] mb-4">My Account</h2>
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
                  className={({ isActive }) =>
                    `block py-3 px-4 font-medium transition-colors rounded-md ${
                      isActive
                        ? "bg-[#00254a] text-white"
                        : "text-[#505050] hover:bg-[#e2e2e2]"
                    }`
                  }
                  onClick={isMobile ? closeSidebar : undefined}
                >
                  Advertise
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/advertiselist"
                  className={({ isActive }) =>
                    `block py-3 px-4 font-medium transition-colors rounded-md ${
                      isActive
                        ? "bg-[#00254a] text-white"
                        : "text-[#505050] hover:bg-[#e2e2e2]"
                    }`
                  }
                  onClick={isMobile ? closeSidebar : undefined}
                >
                  Advertise List
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="bottom-1">
            <button className="w-30 py-2 text-white px-2 cursor-pointer bg-button-bg rounded-md">
              Log out
            </button>
          </div>
        </div>

        {/* Main Content Area - This is where child routes will render */}
        <div className={`flex-1 ${isMobile ? 'w-full' : ''} transition-all duration-300`}>
          <AdvertiseProvider>
            <Outlet />
          </AdvertiseProvider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;