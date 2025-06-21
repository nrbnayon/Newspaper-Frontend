import AdvertisementContainer from "./AdvertisementContainer";

const AdPlacement = ({
  advertisements,
  placement,
  onAdView,
  className = "",
}) => {
  const getPlacementConfig = () => {
    switch (placement) {
      case "header-banner":
        return {
          format: "banner",
          position: "center",
          maxAds: advertisements?.length,
          containerClass: "w-full max-w-4xl mx-auto mb-6",
        };
      case "content-top":
        return {
          format: "card",
          position: "center",
          maxAds: advertisements?.length,
          containerClass: "w-full max-w-sm mx-auto my-8",
        };
      case "content-middle":
        return {
          format: "banner",
          position: "center",
          maxAds: advertisements?.length,
          containerClass: "w-full max-w-3xl mx-auto my-8",
        };
      case "content-bottom":
        return {
          format: "card",
          position: "bottom",
          maxAds: advertisements?.length,
          containerClass: "w-full max-w-4xl mx-auto mt-8",
        };
      case "sidebar":
        return {
          format: "sidebar",
          position: "sidebar-top",
          maxAds: advertisements?.length,
          containerClass: "w-full max-w-xs",
        };
      case "footer":
        return {
          format: "banner",
          position: "bottom",
          maxAds: advertisements?.length,
          containerClass: "w-full max-w-6xl mx-auto",
        };
      default:
        return {
          format: "card",
          position: "center",
          maxAds: 1,
          containerClass: "w-full",
        };
    }
  };

  const config = getPlacementConfig();

  return (
    <div className={`${config.containerClass} ${className}`}>
      <AdvertisementContainer
        advertisements={advertisements}
        format={config.format}
        position={config.position}
        maxAds={config.maxAds}
        onAdView={onAdView}
      />
    </div>
  );
};

export default AdPlacement;
