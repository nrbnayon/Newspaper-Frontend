import { cn } from "@/lib/utils";
import AuthModal from "../auth/AuthModal";
import { useState } from "react";

const TimeIndicator = ({ type, value, className }) => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const isLive = type === "live";
  const isReadTime = type === "readTime";
  const isTimeAgo = type === "timeAgo";

  const openSignIn = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <div className={cn("flex items-center", className)}>
      {isLive && (
        <span className="text-red-600 font-bold mr-2 flex items-center">
          <span className="h-2 w-2 bg-red-600 rounded-full mr-1 animate-pulse"></span>
          LIVE
        </span>
      )}

      {isReadTime && (
        <span
          onClick={() => openSignIn()}
          className="text-gray-500 cursor-pointer text-sm flex items-center"
        >
          {value} MIN READ
        </span>
      )}

      {isTimeAgo && (
        <span className="text-gray-500 text-sm flex items-center">
          {value}
        </span>
      )}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

export default TimeIndicator;
