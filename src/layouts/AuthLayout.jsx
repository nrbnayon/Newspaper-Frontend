// src\layouts\AuthLayout.jsx
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full mx-auto px-2 md:px-10">
      <Outlet />;
    </div>
  );
};

export default AuthLayout;
