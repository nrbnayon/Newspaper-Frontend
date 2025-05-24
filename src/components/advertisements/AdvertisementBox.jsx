import { cn } from "@/lib/utils";

const AdvertisementBox = ({ className }) => {
  return (
    <div
      className={cn(
        "bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center min-h-[400px]",
        className
      )}
    >
      <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
        Advertisement Area
      </h3>
      <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
        <span className="text-gray-600 text-sm">Ad Space</span>
      </div>
    </div>
  );
};

export default AdvertisementBox;
