import { createContext, useContext, useState } from "react";
import AuthModal from "@/components/auth/AuthModal";

const AuthModalContext = createContext();

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
};

export const AuthModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("signin");

  const openModal = (initialMode = "signin") => {
    setMode(initialMode);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = {
    openModal,
    closeModal,
    isOpen,
    mode,
  };

  return (
    <AuthModalContext.Provider value={value}>
      {children}
      <AuthModal isOpen={isOpen} onClose={closeModal} initialMode={mode} />
    </AuthModalContext.Provider>
  );
};
