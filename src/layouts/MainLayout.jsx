// src\layouts\MainLayout.jsx
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-full mx-auto px-2 md:px-10">
      <Outlet />;
    </div>
  );
};

export default MainLayout;
