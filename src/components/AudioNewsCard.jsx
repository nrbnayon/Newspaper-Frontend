import React from "react";
import { Play } from "lucide-react";
import SentimentBadge from "./SentimentBadge";
import { cn } from "@/lib/utils";

const AudioNewsCard = ({
  title,
  category = "THE HEADLINES",
  duration = "4",
  sentiment = "neutral",
  image = "/placeholder.svg?height=100&width=150",
  className,
}) => {
  return (
    <div className={cn("flex border-b border-gray-200 pb-4", className)}>
      <div className="flex-shrink-0 w-[150px] h-[100px] relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="ml-4 flex-1">
        <div className="flex items-center mb-1">
          <span className="text-xs font-bold text-gray-800 mr-2">
            {category}
          </span>
          <span className="text-xs text-gray-500">AUDIO</span>
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>

        <div className="flex items-center">
          <button className="flex items-center text-gray-700 mr-2">
            <Play size={16} className="mr-1" />
            <span className="text-sm">{duration} MIN LISTEN</span>
          </button>

          <div className="ml-auto">
            <SentimentBadge
              sentiment={sentiment}
              className="text-xs py-0.5 px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioNewsCard;
