// components/advertisement/AdvertisementSkeleton.jsx
import { useState, useEffect } from "react";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const AdvertisementSkeleton = ({
  width = "100%",
  height = "200px",
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mock data for skeleton (simulating multiple images)
  const mockImages = [1, 2, 3];

  // Auto-change placeholder every 10 seconds
  useEffect(() => {
    if (mockImages.length <= 1) return;
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % mockImages.length
        );
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleHide = () => {
    setIsVisible(false);
  };

  const nextImage = () => {
    if (mockImages.length > 1) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mockImages.length);
    }
  };

  const prevImage = () => {
    if (mockImages.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? mockImages.length - 1 : prevIndex - 1
      );
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`relative rounded-lg overflow-hidden group cursor-pointer transition-transform duration-200 hover:scale-[1.02] ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Placeholder */}
      <div className='relative w-full h-full bg-gray-200 animate-pulse'>
        {/* Text Overlay Placeholder */}
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3'>
          <div className='h-4 bg-gray-400 rounded w-3/4 mb-1'></div>
          <div className='h-3 bg-gray-400 rounded w-1/2'></div>
        </div>

        {/* Category Badge Placeholder */}
        <div className='absolute top-2 left-2'>
          <div className='bg-blue-600 h-5 w-16 rounded-full'></div>
        </div>

        {/* External Link Button */}
        <div className='absolute top-2 right-8'>
          <div className='bg-black bg-opacity-50 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
            <ExternalLink size={12} className='text-white' />
          </div>
        </div>

        {/* Hide Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleHide();
          }}
          className='absolute top-2 right-2 p-1 bg-black bg-opacity-50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70'
        >
          <X size={12} />
        </button>

        {/* Image Navigation */}
        {mockImages.length > 1 && (
          <>
            <button
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
            </button>

            {/* Image Indicators */}
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1'>
              {mockImages.map((_, index) => (
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

export default AdvertisementSkeleton;
