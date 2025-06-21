import { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";

const AdvertisementCard = ({
  advertisement,
  format = "card",
  onHide,
  onView,
  className = "",
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);

  useEffect(() => {
    if (!hasViewed && onView) {
      const timer = setTimeout(() => {
        onView(advertisement.id);
        setHasViewed(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [hasViewed, onView, advertisement.id]);

  useEffect(() => {
    if (advertisement.imageUrls.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % advertisement.imageUrls.length
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [advertisement.imageUrls.length, isHovered]);

  const handleClick = () => {
    if (advertisement.url) {
      window.open(advertisement.url, "_blank", "noopener,noreferrer");
    }
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % advertisement.imageUrls.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? advertisement.imageUrls.length - 1 : prev - 1
    );
  };

  const handleHide = (e) => {
    e.stopPropagation();
    if (onHide) {
      onHide(advertisement.id);
    }
  };

  if (format === "banner") {
    return (
      <div
        className={`relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-md ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Sponsored Label */}
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Sponsored
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={handleHide}
          className="absolute top-2 right-2 z-10 p-1.5 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
          title="Hide this ad"
        >
          <X size={14} />
        </button>

        <div className="flex h-24 sm:h-28">
          {/* Image Section */}
          <div className="relative w-32 sm:w-40 flex-shrink-0">
            <img
              src={advertisement.imageUrls[currentImageIndex]}
              alt={advertisement.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400";
              }}
            />
            {advertisement.imageUrls.length > 1 && (
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {advertisement.imageUrls.slice(0, 3).map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-1 mb-1">
                {advertisement.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-2">
                {advertisement.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <Tag size={12} />
                <span>{advertisement.category}</span>
              </div>

              <div className="flex items-center text-blue-600 text-xs font-medium group-hover:text-blue-700">
                <span className="mr-1">Learn More</span>
                <ExternalLink size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (format === "sidebar") {
    return (
      <div
        className={`relative bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-md w-full ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Sponsored Label */}
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Ad
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={handleHide}
          className="absolute top-2 right-2 z-10 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          title="Hide this ad"
        >
          <X size={12} />
        </button>

        {/* Image Section */}
        <div className="relative h-32">
          <img
            src={advertisement.imageUrls[currentImageIndex]}
            alt={advertisement.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400";
            }}
          />

          {/* Image Navigation for multiple images */}
          {advertisement.imageUrls.length > 1 && isHovered && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 p-1 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
              >
                <ChevronLeft size={12} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70"
              >
                <ChevronRight size={12} />
              </button>
            </>
          )}

          {advertisement.imageUrls.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {advertisement.imageUrls.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-3">
          <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-2">
            {advertisement.title}
          </h3>
          <p className="text-gray-600 text-xs line-clamp-2 mb-3">
            {advertisement.description}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span className="flex items-center">
              <Tag size={10} className="mr-1" />
              {advertisement.category}
            </span>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-medium py-2 rounded-md transition-colors duration-200">
            Visit Now
          </button>
        </div>
      </div>
    );
  }

  // Default card format
  return (
    <div
      className={`relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Sponsored Badge */}
      <div className="absolute top-3 left-3 z-10">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
          Sponsored
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleHide}
        className="absolute top-3 right-3 z-10 p-2 bg-black bg-opacity-30 backdrop-blur-sm text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-opacity-50"
        title="Hide this ad"
      >
        <X size={16} />
      </button>

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={advertisement.imageUrls[currentImageIndex]}
          alt={advertisement.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.src =
              "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600";
          }}
        />

        {/* Image Navigation */}
        {advertisement.imageUrls.length > 1 && isHovered && (
          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button
              onClick={prevImage}
              className="p-2 bg-black bg-opacity-50 backdrop-blur-sm text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="p-2 bg-black bg-opacity-50 backdrop-blur-sm text-white rounded-full hover:bg-opacity-70 transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Image Indicators */}
        {advertisement.imageUrls.length > 1 && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {advertisement.imageUrls.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? "bg-white scale-110"
                    : "bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Category Badge */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            <Tag size={12} className="mr-1" />
            {advertisement.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
          {advertisement.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {advertisement.description}
        </p>

        {/* CTA Button */}
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            by {advertisement.user?.split("@")[0] || "Advertiser"}
          </div>

          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform group-hover:scale-105 shadow-md">
            <span className="mr-2">Learn More</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementCard;
