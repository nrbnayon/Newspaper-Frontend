import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

const DynamicAdvertisement = ({
  advertisement,
  width = "100%",
  height = "200px",
  position = "center",
  onHide,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-change images every 10 seconds
  useEffect(() => {
    if (!advertisement?.imageUrls || advertisement.imageUrls.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % advertisement.imageUrls.length
        );
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [advertisement?.imageUrls, isHovered]);

  const handleHide = () => {
    setIsVisible(false);
    if (onHide) {
      onHide(advertisement?.id);
    }
  };

  const handleAdClick = () => {
    if (advertisement?.url) {
      window.open(advertisement.url, "_blank", "noopener,noreferrer");
    }
  };

  if (!isVisible || !advertisement) {
    return null;
  }

  // Default placeholder when no advertisement data
  if (!advertisement.imageUrls || advertisement.imageUrls.length === 0) {
    return (
      <div
        className={`bg-gray-300 rounded-lg flex items-center justify-center relative group ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-600 text-sm">Advertisement Space</span>
        <button
          onClick={handleHide}
          className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
          title="Hide advertisement"
        >
          <X size={12} />
        </button>
      </div>
    );
  }

  const hasMultipleImages = advertisement.imageUrls.length > 1;

  return (
    <div
      className={`relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02] group-hover:shadow-lg ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleAdClick}
    >
      {/* Ad Label */}
      <div className="absolute top-0 left-0 bg-gray-800 text-red-500 text-xs px-2 py-1 rounded-br z-10">
        Ads
      </div>

      {/* Image Carousel */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {advertisement.imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`${advertisement.title || "Advertisement"} ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              onError={(e) => {
                e.target.src =
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QWQ8L3RleHQ+PC9zdmc+";
              }}
            />
          ))}
        </div>
      </div>

      {/* External Link Icon */}
      {advertisement.url && (
        <div className="absolute top-2 right-8 z-10">
          <div className="bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ExternalLink size={12} />
          </div>
        </div>
      )}

      {/* Hide Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleHide();
        }}
        aria-label="Hide advertisement"
        className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70 z-10"
      >
        <X size={12} />
      </button>

      {/* Image Navigation */}
      {hasMultipleImages && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
          {advertisement.imageUrls.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Advertisement Container Component (unchanged)
const AdvertisementContainer = ({
  advertisements = [],
  position = "center",
  width = "100%",
  height = "200px",
  className = "",
  maxAds = 1,
}) => {
  const [hiddenAds, setHiddenAds] = useState(new Set());

  const handleHideAd = (adId) => {
    setHiddenAds((prev) => new Set(prev).add(adId));
  };

  const getAdsForPosition = () => {
    let filteredAds = advertisements.filter((ad) => !hiddenAds.has(ad.id));
    filteredAds = filteredAds.sort((a, b) => a.id - b.id);
    switch (position) {
      case "center":
        return filteredAds.slice(0, maxAds);
      case "sidebar-top":
        return filteredAds.slice(0, maxAds);
      case "sidebar-mid":
        return filteredAds.slice(
          Math.min(1, filteredAds.length),
          Math.min(1, filteredAds.length) + maxAds
        );
      case "sidebar-bottom":
        return filteredAds.slice(
          Math.min(2, filteredAds.length),
          Math.min(2, filteredAds.length) + maxAds
        );
      case "bottom":
        return filteredAds.slice(
          Math.min(3, filteredAds.length),
          Math.min(3, filteredAds.length) + maxAds
        );
      case "mobile-top":
        return filteredAds.slice(0, maxAds);
      case "mobile-mid":
        return filteredAds.slice(
          Math.min(1, filteredAds.length),
          Math.min(1, filteredAds.length) + maxAds
        );
      default:
        return filteredAds.slice(0, maxAds);
    }
  };
  const visibleAds = getAdsForPosition();
  if (advertisements.length === 0 || visibleAds.length === 0) {
    return (
      <DynamicAdvertisement
        advertisement={null}
        width={width}
        height={height}
        position={position}
        className={className}
      />
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {visibleAds.map((ad, index) => (
        <DynamicAdvertisement
          key={`${ad.id}-${position}-${index}`}
          advertisement={ad}
          width={width}
          height={height}
          position={position}
          onHide={handleHideAd}
        />
      ))}
    </div>
  );
};

export { DynamicAdvertisement, AdvertisementContainer };
