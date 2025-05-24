import React from "react";
import { cn } from "@/lib/utils";
import TimeIndicator from "./TimeIndicator";
import InteractionButtons from "./InteractionButtons";
import ArticleCarousel from "./ArticleCarousel";

const LiveUpdateCard = ({
  category,
  title,
  content,
  timeAgo = "4m ago",
  images = [],
  showCarousel = true,
  className,
}) => {
  return (
    <div className={cn("border-b border-gray-200 pb-6", className)}>
      {/* Category & Live Indicator */}
      <div className="flex flex-col mb-2">
        <div className="font-bold text-xl mb-1">{category}</div>
        <TimeIndicator type="live" value={null} className="mb-2" />
        <span className="text-sm text-gray-500">{timeAgo}</span>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 mb-4">{content}</p>

          {/* See more updates button */}
          <div className="flex items-center mb-4">
            <button className="text-gray-700 font-medium mr-2">
              See more updates
            </button>
            <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
              4+
            </span>
          </div>

          <InteractionButtons size="small" />
        </div>

        {showCarousel && images.length > 0 && (
          <div className="relative">
            <ArticleCarousel images={images} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveUpdateCard;
