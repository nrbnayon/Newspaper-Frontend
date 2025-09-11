// src\layouts\AuthLayout.jsx
import { AuthModalProvider } from "@/contexts/AuthModalContext";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full mx-auto">
      <AuthModalProvider>
        <Outlet />
      </AuthModalProvider>
    </div>
  );
};

export default AuthLayout;
