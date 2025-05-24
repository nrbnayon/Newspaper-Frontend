import React from "react";
import { cn } from "@/lib/utils";
import TimeIndicator from "./TimeIndicator";
import ImageAttribution from "./ImageAttribution";

const LongReadArticleCard = ({
  title = "The Future of Artificial Intelligence: How Machine Learning is Reshaping Industries Across the Globe",
  excerpt = "From healthcare to finance, AI technologies are revolutionizing how businesses operate and make decisions. This comprehensive analysis explores the transformative impact of artificial intelligence on various sectors and what it means for the future of work.",
  readTime = 22,
  image = "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  imageAttribution = "Jose Alvarado Jr for The New York Times",
  className,
}) => {
  return (
    <article
      className={cn(
        "flex flex-col gap-4 sm:gap-6 border-b border-gray-200 pb-4 sm:pb-6 lg:pb-8",
        "md:flex-row md:gap-10",
        className
      )}
    >
      {/* Content Section - 1/3 on desktop */}
      <div className="flex flex-col order-2 md:order-1 md:w-1/3 md:flex-shrink-0">
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-gray-900">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-grow">
          {excerpt}
        </p>
        <TimeIndicator
          type="readTime"
          value={readTime}
          className="mt-auto text-xs sm:text-sm"
        />
      </div>

      {/* Image Section - 2/3 on desktop */}
      <div className="relative order-1 md:order-2 md:w-2/3">
        <div className="relative overflow-hidden rounded-lg sm:rounded-none flex justify-end items-center">
          <img
            src={image}
            alt={title}
            className="w-full md:w-4/5 h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
        <ImageAttribution
          attribution={imageAttribution}
          className="text-right mt-2 sm:mt-3 text-xs sm:text-sm"
        />
      </div>
    </article>
  );
};

export default LongReadArticleCard;
