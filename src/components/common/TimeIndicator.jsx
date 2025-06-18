import { cn } from "@/lib/utils";

const TimeIndicator = ({ type, value, className }) => {
  const isLive = type === "live";
  const isReadTime = type === "readTime";
  const isTimeAgo = type === "timeAgo";

  return (
    <div className={cn("flex items-center", className)}>
      {isLive && (
        <span className="text-red-600 font-bold mr-2 flex items-center">
          <span className="h-2 w-2 bg-red-600 rounded-full mr-1 animate-pulse"></span>
          LIVE
        </span>
      )}

      {isReadTime && <span>{value}</span>}

      {isTimeAgo && (
        <span className="text-gray-500 text-sm flex items-center">{value}</span>
      )}
    </div>
  );
};

export default TimeIndicator;
