import React from "react";
import { cn } from "@/lib/utils";
import TimeIndicator from "./TimeIndicator";
import ImageAttribution from "./ImageAttribution";

const LongReadArticleCard = ({
  title,
  excerpt,
  readTime = 22,
  image = "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  imageAttribution = "Jose Alvarado Jr for The New York Times",
  className,
}) => {
  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-6 border-b border-gray-200 pb-6",
        className
      )}
    >
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-3 leading-tight">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <TimeIndicator type="readTime" value={readTime} className="mt-auto" />
      </div>

      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <ImageAttribution
          attribution={imageAttribution}
          className="text-right mt-2"
        />
      </div>
    </div>
  );
};

export default LongReadArticleCard;
