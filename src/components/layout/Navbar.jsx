import { useState, useEffect } from "react";
import { Search, ChevronDown, User2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthModal from "@/components/auth/AuthModal";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onScrollToAbout }) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [currentDate, setCurrentDate] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Sticky navbar state
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Get current location to check if we're in dashboard
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isPricing = location.pathname.startsWith('/pricing')

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

  useEffect(() => {
    // For now, you can manually set this or integrate with your auth system
    const checkAuthStatus = () => {
      return false; // Change this based on your auth logic
    };

    setIsAuthenticated(checkAuthStatus());
  }, []);

  // Sticky navbar scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY === 0) {
        setIsVisible(true);
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let timeoutId = null;
    const throttledHandleScroll = () => {
      if (timeoutId === null) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 10);
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  const openSignUp = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  const openSignIn = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  const handleSignOut = () => {
    // Add your sign out logic here
    // For example:
    // localStorage.removeItem('authToken');
    // authService.signOut();
    setIsAuthenticated(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Handle About Us click
  const handleAboutUsClick = (e) => {
    e.preventDefault();
    if (onScrollToAbout) {
      onScrollToAbout();
    }
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`
        fixed top-0 px-2 md:px-10 left-0 right-0 z-50 bg-white   
        transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}>
        {/* Top section */}
        <div className="">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center justify-between py-4">
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
            <div className="flex flex-col justify-center items-end space-y-2">
              {isAuthenticated ? (
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Profile</span>
                    <Link
                      to="/dashboard/profile"
                      className="bg-[#00254A] rounded-full p-1 text-white hover:bg-[#001a38]"
                    >
                      <User2 size={24} className="text-white" />
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-full flex justify-end items-end gap-4 md:gap-9">
                    <Button
                      onClick={openSignIn}
                      className="border-[#00254a] bg-[#00254A] cursor-pointer text-white hover:bg-[#00254a] hover:text-white"
                    >
                      Sign In
                    </Button>
                    <Button
                      onClick={openSignUp}
                      className="hover:text-white cursor-pointer text-[#001a38] hover:bg-[#001a38] bg-white border-[#00254a] border"
                    >
                      Sign Up
                    </Button>
                  </div>
                  <div className="text-sm text-[#b32021] font-medium border border-[#F6D5D5] px-3 py-2 rounded-xl">
                    SAVE 50% ON Membership
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:flex lg:hidden items-center justify-between py-4">
            {/* Left side - Logo */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 tracking-wide">
                ALAMOCITYPULSE
              </h1>
            </div>

            {/* Right side - Auth buttons */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Profile</span>
                  <Link
                    to="/dashboard/profile"
                    className="bg-[#00254A] rounded-full p-1 text-white hover:bg-[#001a38]"
                  >
                    <User2 size={24} className="text-white" />
                  </Link>
                </div>
              ) : (
                <>
                  <Button
                    onClick={openSignIn}
                    className="border-[#00254a] cursor-pointer bg-[#00254A] text-white hover:bg-[#00254a] hover:text-white text-sm px-3 py-2"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={openSignUp}
                    className="hover:text-white cursor-pointer text-[#001a38] hover:bg-[#001a38] bg-white border-[#00254a] border text-sm px-3 py-2"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden items-center justify-between py-4">
            {/* Logo */}
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-wide">
                ALAMOCITYPULSE
              </h1>
            </div>

            {/* Mobile menu button and auth */}
            <div className="flex items-center space-x-2">
              {isAuthenticated ? (
                <Link
                  to="/dashboard/profile"
                  className="bg-[#00254A] cursor-pointer rounded-full p-1 text-white hover:bg-[#001a38]"
                >
                  <User2 size={20} className="text-white" />
                </Link>
              ) : (
                <Button
                  onClick={openSignIn}
                  className="border-[#00254a] cursor-pointer bg-[#00254A] text-white hover:bg-[#00254a] hover:text-white text-xs px-2 py-1"
                >
                  Sign In
                </Button>
              )}
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-900 cursor-pointer hover:bg-gray-100 rounded-md"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search and Date - Below header on tablet and mobile */}
          <div className="flex lg:hidden flex-col space-y-3 pb-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input
                placeholder="Search"
                className="pl-10 w-full border-gray-300"
              />
            </div>
            <div className="text-sm text-gray-600">
              <div className="font-medium">{currentDate}</div>
              <div className="text-xs">Today's Paper</div>
            </div>

            {/* Membership offer for mobile/tablet when not authenticated */}
            {!isAuthenticated && (
              <div className="md:hidden text-sm text-[#b32021] font-medium border border-[#F6D5D5] px-3 py-2 rounded-xl text-center">
                SAVE 50% ON Membership
              </div>
            )}
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className="hidden md:flex items-center justify-center space-x-8 py-4 border-t border-gray-200 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="text-gray-900 font-medium hover:text-[#00254a] transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-gray-900 cursor-pointer font-medium hover:text-[#00254a] bg-white transition-colors">
              News
              <ChevronDown size={16} className="ml-1" />
            </button>
          </div>
          {/* Conditionally render About Us button - hide when in dashboard */}
          {!(isDashboard || isPricing) && (
            <button
              onClick={handleAboutUsClick}
              className="text-gray-900 cursor-pointer font-medium hover:text-[#00254a] transition-colors"
            >
              About Us
            </button>
          )}
          <Link
            to="/dashboard/advertise"
            className="text-gray-900 font-medium hover:text-[#00254a] transition-colors"
          >
            Make Advertise
          </Link>

          <Link
            to="/pricing"
            className="text-gray-900 font-medium hover:text-[#00254a] transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-900 font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-3 py-2 ">
                <button className="flex items-center cursor-pointer w-full text-left text-gray-900 font-medium hover:text-[#00254a] transition-colors">
                  News
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </div>
              
              {/* Conditionally render About Us button in mobile menu - hide when in dashboard */}
              {!isDashboard && (
                <button
                  onClick={handleAboutUsClick}
                  className="block px-3 py-2 text-gray-900 cursor-pointer font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-md transition-colors w-full text-left"
                >
                  About Us
                </button>
              )}
             
              <Link
                to="/dashboard/advertise"
                className="block px-3 py-2 text-gray-900 font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Make Advertise
              </Link>

              {/* Mobile auth buttons */}
              {!isAuthenticated && (
                <div className="px-3 py-2 pt-4 border-t border-gray-200 mt-2">
                  <div className="flex flex-col space-y-2">
                    <Button
                      onClick={() => {
                        openSignUp();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full cursor-pointer hover:text-white text-[#001a38] hover:bg-[#001a38] bg-white border-[#00254a] border"
                    >
                      Sign Up
                    </Button>
                    <div className="text-sm text-[#b32021] font-medium border border-[#F6D5D5] px-3 py-2 rounded-xl text-center">
                      SAVE 50% ON Membership
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="py-0.5 border-t border-b border-primary"></div>
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};