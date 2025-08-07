// src\layouts\MainLayout.jsx
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full mx-auto">
      <Outlet />
    </div>
  );
};

export default MainLayout;
