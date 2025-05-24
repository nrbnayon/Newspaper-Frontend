// src\pages\Dashboard\Dashboard.jsx - Alternative using NavLink
import Navbar from "@/components/layout/Navbar";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-8 gap-8">
        {/* Sidebar */}
        <div className="w-1/5 bg-[#f2f2f2] h-screen p-6">
          <h2 className="text-xl font-bold text-[#142335] mb-4">My Account</h2>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `block py-3 px-4 font-medium transition-colors ${
                    isActive
                      ? "bg-[#00254a] text-white"
                      : "text-[#505050] hover:bg-[#e2e2e2]"
                  }`
                }
              >
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/advertise"
                className={({ isActive }) =>
                  `block py-3 px-4 font-medium transition-colors ${
                    isActive
                      ? "bg-[#00254a] text-white"
                      : "text-[#505050] hover:bg-[#e2e2e2]"
                  }`
                }
              >
                Advertise
              </NavLink>
            </li>
            
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `block py-3 px-4 font-medium transition-colors ${
                    isActive
                      ? "bg-[#00254a] text-white"
                      : "text-[#505050] hover:bg-[#e2e2e2]"
                  }`
                }
              >
                Advertise List
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Main Content Area - This is where child routes will render */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
