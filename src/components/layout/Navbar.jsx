import { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthModal from "@/components/auth/AuthModal";

export default function Navbar() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [currentDate, setCurrentDate] = useState("");

  // Set current date on component mount
  useEffect(() => {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  }, []);

  const openSignUp = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  const openSignIn = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        {/* Top section */}
        <div className="flex items-center justify-between py-4">
          {/* Left side - Search and Date */}
          <div className="flex flex-col items-start space-y-2">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search"
                className="pl-10 w-64 border-gray-300"
              />
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-medium">{currentDate}</div>
              <div className="text-xs">Today's Paper</div>
            </div>
          </div>

          {/* Center - Logo */}
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
              ALAMOCITYPULSE
            </h1>
          </div>

          {/* Right side - Auth buttons and membership */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-full flex justify-between items-center gap-2 ">
              <Button
                // variant="outline"
                onClick={openSignIn}
                className="border-[#00254a] bg-[#00254A] text-white hover:bg-[#00254a] hover:text-white"
              >
                Sign In
              </Button>
              <Button
                onClick={openSignUp}
                className="hover:text-white text-[#001a38] hover:bg-[#001a38] bg-white border-[#00254a] border"
              >
                Sign Up
              </Button>
            </div>
            <div className="text-sm text-[#b32021] font-medium border border-[#F6D5D5] px-3 py-2 rounded-xl">
              SAVE 50% ON Membership
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex items-center justify-center space-x-8 py-4 border-t border-gray-200">
          <a
            href="/"
            className="text-gray-900 font-medium hover:text-[#00254a]"
          >
            Home
          </a>
          <div className="relative group">
            <button className="flex items-center text-gray-900 font-medium hover:text-[#00254a] bg-white ">
              News
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          <a
            href="/about"
            className="text-gray-900 font-medium hover:text-[#00254a]"
          >
            About Us
          </a>
          <a
            href="/dashboard/advertise"
            className="text-gray-900 font-medium hover:text-[#00254a]"
          >
            Make Advertise
          </a>
        </div>
        <div className="py-0.5 border-t border-b border-primary"></div>
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
