// components/advertisement/DynamicAdvertisement.jsx
import { useState, useEffect } from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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
    if (
      !advertisement?.uploaded_images ||
      advertisement.uploaded_images.length <= 1
    ) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % advertisement.uploaded_images.length
        );
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [advertisement?.uploaded_images, isHovered]);

  const handleHide = () => {
    setIsVisible(false);
    if (onHide) {
      onHide(advertisement?.id);
    }
  };

  const getAdsForPosition = () => {
    let filteredAds = advertisements.filter((ad) => !hiddenAds.has(ad.id));
    filteredAds = filteredAds.sort((a, b) => {
      return a.id - b.id;
    });

    switch (position) {
      case "center":
        return filteredAds.slice(0, maxAds);
      case "sidebar-top":
        return filteredAds.slice(1, 1 + maxAds);
      case "sidebar-mid":
        return filteredAds.slice(2, 2 + maxAds);
      case "sidebar-bottom":
        return filteredAds.slice(3, 3 + maxAds);
      case "bottom":
        return filteredAds.slice(4, 4 + maxAds);
      case "mobile-top":
        return filteredAds.slice(0, maxAds);
      case "mobile-mid":
        return filteredAds.slice(1, 1 + maxAds);
      default:
        return filteredAds.slice(0, maxAds);
    }
  };

  const visibleAds = getAdsForPosition();

  const handleAdClick = () => {
    if (advertisement?.url) {
      window.open(advertisement.url, "_blank", "noopener,noreferrer");
    }
  };

  const nextImage = () => {
    if (
      advertisement?.uploaded_images &&
      advertisement.uploaded_images.length > 1
    ) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % advertisement.uploaded_images.length
      );
    }
  };

  const prevImage = () => {
    if (
      advertisement?.uploaded_images &&
      advertisement.uploaded_images.length > 1
    ) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0
          ? advertisement.uploaded_images.length - 1
          : prevIndex - 1
      );
    }
  };

  if (!isVisible || !advertisement) {
    return null;
  }

  // Default placeholder when no advertisement data
  if (
    !advertisement.uploaded_images ||
    advertisement.uploaded_images.length === 0
  ) {
    return (
      <div
        className={`bg-gray-300 rounded-lg flex items-center justify-center relative group ${className}`}
        style={{ width, height }}
      >
        <span className='text-gray-600 text-sm'>Advertisement Space</span>
        <button
          onClick={handleHide}
          className='absolute top-2 right-2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70'
          title='Hide advertisement'
        >
          <X size={12} />
        </button>
      </div>
    );
  }

  const hasMultipleImages = advertisement.uploaded_images.length > 1;
  const currentImage = advertisement.uploaded_images[currentImageIndex];

  return (
    <div
      className={`relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02] ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleAdClick}
    >
      {/* Main Image */}
      <div className='relative w-full h-full'>
        <img
          src={currentImage}
          alt={advertisement.title || "Advertisement"}
          className='w-full h-full object-cover'
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+QWQ8L3RleHQ+PC9zdmc+";
          }}
        />

        {/* Overlay Content */}
        {(advertisement.title || advertisement.description) && (
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3'>
            {advertisement.title && (
              <h3 className='text-white font-semibold text-sm mb-1 line-clamp-1'>
                {advertisement.title}
              </h3>
            )}
            {advertisement.description && (
              <p className='text-white/90 text-xs line-clamp-2'>
                {advertisement.description}
              </p>
            )}
          </div>
        )}

        {/* Category Badge */}
        {advertisement.category && (
          <div className='absolute top-2 left-2'>
            <span className='bg-blue-600 text-white text-xs px-2 py-1 rounded-full'>
              {advertisement.category}
            </span>
          </div>
        )}

        {/* External Link Icon */}
        {advertisement.url && (
          <div className='absolute top-2 right-8'>
            <div className='bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
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
          className='absolute top-2 right-2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70'
          title='Hide advertisement'
        >
          <X size={12} />
        </button>

        {/* Image Navigation */}
        {hasMultipleImages && (
          <>
            {/* <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className='absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70'
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70'
            >
              <ChevronRight size={16} />
            </button> */}

            {/* Image Indicators */}
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1'>
              {advertisement.uploaded_images.map((_, index) => (
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
          </>
        )}
      </div>
    </div>
  );
};

// Advertisement Container Component
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

  // Filter out hidden ads and limit to maxAds
  const visibleAds = advertisements
    .filter((ad) => !hiddenAds.has(ad.id))
    .slice(0, maxAds);

  // If no ads available, show placeholder
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
