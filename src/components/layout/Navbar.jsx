import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  User2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AuthModal from "@/components/auth/AuthModal";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Megaphone } from "lucide-react";

export default function Navbar({
  onScrollToAbout,
  onSearch,
  searchTerm,
  setSearchTerm,
}) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");
  const [currentDate, setCurrentDate] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Sticky navbar state
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Get authentication state from context
  const { isLoggedIn, user, logout } = useAuth();

  // Get current location to check if we're in dashboard
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isPricing = location.pathname.startsWith("/pricing");
  const isHome = location.pathname === "/";
  const isAdvertise = location.pathname === "/dashboard/advertise";

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

    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".profile-dropdown")) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const openSignUp = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  const openSignIn = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  const handleSignOut = () => {
    logout();
    setShowProfileDropdown(false);
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

  // Helper function to get active link classes
  const getNavLinkClasses = (isActive) => {
    return `px-4 py-2 font-medium rounded-full transition-all ${
      isActive
        ? "text-white bg-gradient-to-r from-[#00254A] to-[#003d6b] shadow-md"
        : "text-gray-700 hover:text-[#00254a] hover:bg-gray-50"
    }`;
  };

  // Helper function for mobile nav link classes
  const getMobileNavLinkClasses = (isActive) => {
    return `block px-4 md:py-3 font-medium rounded-xl transition-all ${
      isActive
        ? "text-white bg-gradient-to-r from-[#00254A] to-[#003d6b] shadow-md"
        : "text-gray-700 hover:text-[#00254a] hover:bg-gray-50"
    }`;
  };

  return (
    <>
      <nav
        className={`
        fixed top-0 px-4 md:px-8 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm   
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
      >
        {/* Main Header */}
        <div className='mx-auto'>
          {/* Desktop Layout */}
          <div className='hidden lg:grid lg:grid-cols-3 items-center py-2 gap-8'>
            {/* Left side - Logo */}
            <div className='flex items-center space-x-4'>
              <img
                src='/logo.png'
                alt='Alamo City Pulse'
                className='h-20 w-auto object-contain rounded-md'
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div className='hidden text-2xl font-bold text-gray-900 tracking-wide'>
                ALAMOCITYPULSE
              </div>
              <div className='flex flex-col'>
                <div className='text-sm font-medium text-gray-700'>
                  {currentDate}
                </div>
                <div className='text-xs text-gray-500'>Today's Paper</div>
              </div>
            </div>

            {/* Center - Search */}
            <div className='flex justify-center'>
              <div className='relative w-full max-w-md'>
                <Search
                  className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <Input
                  placeholder='Search articles, topics...'
                  className='pl-12 pr-4 py-3 w-full border-gray-200 rounded-full bg-gray-50 focus:bg-white focus:border-[#00254A] transition-all duration-200 shadow-sm'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onSearch(searchTerm);
                    }
                  }}
                />
              </div>
            </div>

            {/* Right side - Modern Profile Section */}
            <div className='flex items-center justify-end space-x-4'>
              {isLoggedIn ? (
                <div className='flex items-center space-x-3'>
                  {/* Notifications */}
                  {/* <button className=' relative p-2 text-gray-600 hover:text-[#00254A] hover:bg-gray-100 rounded-full transition-colors'>
                    <Bell size={20} />
                    <div className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full'></div>
                  </button> */}

                  {/* Profile Dropdown */}
                  <div className='relative profile-dropdown'>
                    <button
                      onClick={() =>
                        setShowProfileDropdown(!showProfileDropdown)
                      }
                      className='flex items-center space-x-3 p-2 pr-4 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white rounded-full hover:shadow-lg transition-all duration-200'
                    >
                      <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
                        <User2 size={18} />
                      </div>
                      <span className='text-sm font-medium'>
                        {user?.firstName || "Profile"}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          showProfileDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {showProfileDropdown && (
                      <div className='absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50'>
                        <div className='px-4 py-3 border-b border-gray-100'>
                          <p className='text-sm font-medium text-gray-900'>
                            {user?.firstName} {user?.lastName}
                          </p>
                          <p className='text-xs text-gray-500'>{user?.email}</p>
                        </div>
                        <Link
                          to='/dashboard/profile'
                          className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'
                          onClick={() => setShowProfileDropdown(false)}
                        >
                          <User2 size={16} className='mr-3' />
                          Profile Settings
                        </Link>
                        <Link
                          to='/dashboard/advertise'
                          className='flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'
                          onClick={() => setShowProfileDropdown(false)}
                        >
                          <Megaphone size={16} className='mr-3' />
                          Advertise
                        </Link>
                        <div className='border-t border-gray-100 mt-2 pt-2'>
                          <button
                            onClick={handleSignOut}
                            className='flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50'
                          >
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className='flex items-center space-x-3'>
                  <Button
                    onClick={openSignIn}
                    className='px-6 py-2 bg-white dark:text-black text-[#00254A] border border-[#00254A] hover:bg-[#00254A] hover:text-white transition-all duration-200 rounded-full font-medium'
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={openSignUp}
                    className='px-6 py-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white hover:shadow-lg transition-all duration-200 rounded-full font-medium'
                  >
                    Sign Up
                  </Button>
                  <div className='ml-4 px-4 py-2 text-sm text-[#b32021] font-medium bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full'>
                    🎉 SAVE 50% ON Premium
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tablet Layout */}
          <div className='hidden md:flex lg:hidden items-center justify-between py-2'>
            {/* Left - Logo */}
            <div className='flex items-center space-x-3'>
              <img
                src='/logo.png'
                alt='Alamo City Pulse'
                className='h-12 w-auto object-contain rounded-md'
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div className='hidden text-xl font-bold text-gray-900 tracking-wide'>
                ALAMOCITYPULSE
              </div>
            </div>

            {/* Right - Auth and Search */}
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <Search
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={18}
                />
                <Input
                  placeholder='Search...'
                  className='pl-10 pr-4 py-2 w-64 border-gray-200 rounded-full bg-gray-50 focus:bg-white'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      onSearch(searchTerm);
                    }
                  }}
                />
              </div>

              {isLoggedIn ? (
                <div className='flex items-center space-x-2'>
                  <Link
                    to='/dashboard/profile'
                    className='p-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] rounded-full text-white hover:shadow-lg transition-all'
                  >
                    <User2 size={20} />
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className='text-sm text-gray-600 hover:text-[#00254a] font-medium'
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className='flex items-center space-x-2'>
                  <Button
                    onClick={openSignIn}
                    className='px-4 py-2 bg-white text-[#00254A] border border-[#00254A] hover:bg-[#00254A] hover:text-white rounded-full text-sm'
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={openSignUp}
                    className='px-4 py-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white hover:shadow-lg rounded-full text-sm'
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className='flex md:hidden items-center justify-between py-1'>
            {/* Left - Logo */}
            <div className='flex items-center space-x-2'>
              <img
                src='/logo.png'
                alt='Alamo City Pulse'
                className='h-14 w-auto object-cover rounded-md'
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <div className='hidden text-lg font-bold text-gray-900 tracking-wide'>
                ALAMOCITYPULSE
              </div>
            </div>
            {/* Mobile Search - Below header */}
            <div className='md:hidden'>
              <div className='mt-3 text-center'>
                <div className='text-sm font-medium text-gray-700'>
                  {currentDate}
                </div>
                <div className='text-xs text-gray-500'>Today's Paper</div>
              </div>
            </div>
            {/* Right - Auth and Menu */}
            <div className='flex items-center space-x-2'>
              {isLoggedIn ? (
                <Link
                  to='/dashboard/profile'
                  className='p-2 bg-gradient-to-r from-[#00254A] to-[#003d6b] rounded-full text-white'
                >
                  <User2 size={18} />
                </Link>
              ) : (
                <Button
                  onClick={openSignIn}
                  className='px-3 py-1.5 bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white rounded-full text-xs font-medium'
                >
                  Sign In
                </Button>
              )}
              <button
                onClick={toggleMobileMenu}
                className='p-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors'
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
          <div className='relative md:hidden py-2'>
            <Search
              className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
              size={18}
            />
            <Input
              placeholder='Search articles, topics...'
              className='pl-12 pr-4 py-3 w-full border-gray-200 rounded-full bg-gray-50 focus:bg-white'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  onSearch(searchTerm);
                }
              }}
            />
          </div>
        </div>

        {/* Navigation Menu - Desktop */}
        <div className='hidden md:flex items-center justify-center space-x-8 py-3 border-t border-gray-100 bg-white/80'>
          <Link to='/' className={getNavLinkClasses(isHome)}>
            Home
          </Link>
          {!(isDashboard || isPricing) && (
            <button
              onClick={handleAboutUsClick}
              className='px-4 py-2 text-gray-700 font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-full transition-all'
            >
              About Us
            </button>
          )}
          <Link
            to='/dashboard/advertise'
            className={getNavLinkClasses(isAdvertise)}
          >
            Make Advertise
          </Link>
          <Link to='/pricing' className={getNavLinkClasses(isPricing)}>
            Pricing
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md'>
            <div className='px-4 md:py-2 space-y-1'>
              <Link
                to='/'
                className={getMobileNavLinkClasses(isHome)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              {!isDashboard && (
                <button
                  onClick={handleAboutUsClick}
                  className='block w-full text-left px-4 md:py-3 text-gray-700 font-medium hover:text-[#00254a] hover:bg-gray-50 rounded-xl transition-all'
                >
                  About Us
                </button>
              )}

              <Link
                to='/dashboard/advertise'
                className={getMobileNavLinkClasses(isAdvertise)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Make Advertise
              </Link>

              <Link
                to='/pricing'
                className={getMobileNavLinkClasses(isPricing)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              {/* Mobile Auth Section */}
              {isLoggedIn ? (
                <div className='px-4 py-2 md:py-4 border-t border-gray-100 mt-4'>
                  <div className='flex flex-col space-y-3'>
                    <div className='text-center'>
                      <div className='text-sm font-medium text-gray-700'>
                        Welcome back!
                      </div>
                      <div className='text-xs text-gray-500'>
                        {user?.firstName || "User"}
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className='w-full bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 rounded-xl'
                    >
                      Sign Out
                    </Button>
                  </div>
                </div>
              ) : (
                <div className='px-4 py-4 border-t border-gray-100 mt-4'>
                  <div className='flex flex-col space-y-3'>
                    <Button
                      onClick={() => {
                        openSignUp();
                        setIsMobileMenuOpen(false);
                      }}
                      className='w-full bg-gradient-to-r from-[#00254A] to-[#003d6b] text-white hover:shadow-lg rounded-xl font-medium'
                    >
                      Sign Up
                    </Button>
                    <div className='px-4 py-2 text-sm text-[#b32021] font-medium bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl text-center'>
                      🎉 SAVE 50% ON Premium
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
}
