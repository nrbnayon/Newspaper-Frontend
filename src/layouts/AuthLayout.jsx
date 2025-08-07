// src\layouts\AuthLayout.jsx
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full mx-auto">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
