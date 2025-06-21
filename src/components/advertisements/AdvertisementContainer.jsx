import React, { useState, useMemo } from "react";
import AdvertisementCard from "./AdvertisementCard";

const AdvertisementContainer = ({
  advertisements = [],
  position = "center",
  format = "card",
  maxAds = 1,
  className = "",
  onAdView,
}) => {
  const [hiddenAds, setHiddenAds] = useState(new Set());

  const handleHideAd = (adId) => {
    setHiddenAds((prev) => new Set(prev).add(adId));
  };

  const visibleAds = useMemo(() => {
    const filtered = advertisements
      .filter((ad) => ad.status === "approved" && !hiddenAds.has(ad.id))
      .sort((a, b) => (b.views || 0) - (a.views || 0)); // Sort by views for better ads first

    switch (position) {
      case "center":
        return filtered.slice(0, maxAds);
      case "sidebar-top":
        return filtered.slice(0, maxAds);
      case "sidebar-mid":
        return filtered.slice(1, 1 + maxAds);
      case "sidebar-bottom":
        return filtered.slice(2, 2 + maxAds);
      case "bottom":
        return filtered.slice(3, 3 + maxAds);
      case "mobile-top":
        return filtered.slice(0, maxAds);
      case "mobile-mid":
        return filtered.slice(1, 1 + maxAds);
      default:
        return filtered.slice(0, maxAds);
    }
  }, [advertisements, hiddenAds, position, maxAds]);

  if (visibleAds.length === 0) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="text-gray-400 text-sm">No advertisements available</div>
      </div>
    );
  }

  const getContainerClasses = () => {
    switch (format) {
      case "banner":
        return "space-y-3";
      case "sidebar":
        return "space-y-4";
      case "card":
        return maxAds > 1
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex justify-center";
      default:
        return "space-y-4";
    }
  };

  return (
    <div className={`${getContainerClasses()} ${className}`}>
      {visibleAds.map((ad, index) => (
        <AdvertisementCard
          key={`${ad.id}-${position}-${index}`}
          advertisement={ad}
          format={format}
          onHide={handleHideAd}
          onView={onAdView}
          className={
            format === "card" && maxAds === 1 ? "max-w-sm mx-auto" : ""
          }
        />
      ))}
    </div>
  );
};

export default AdvertisementContainer;
