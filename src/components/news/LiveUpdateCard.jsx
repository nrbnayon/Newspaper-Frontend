import { useState } from "react";
import { cn } from "@/lib/utils";
import InteractionButtons from "../common/InteractionButtons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TimeIndicator from "../common/TimeIndicator";

// Carousel Navigation Component
const CarouselNavigation = ({ currentIndex, setCurrentIndex, totalItems }) => {
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  return (
    <div className='flex justify-center items-center gap-2 py-4'>
      {/* Carousel Dots */}
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-2 h-2 rounded-full",
            index === currentIndex ? "bg-black" : "bg-gray-300"
          )}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className='absolute right-12 mt-8 text-lg border rounded-full p-1 text-black hover:bg-gray-200 transition-colors'
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className='absolute right-0 mt-8 text-lg border rounded-full p-1 text-black hover:bg-gray-200 transition-colors'
      >
        <ChevronRight />
      </button>
    </div>
  );
};

const LiveUpdateCard = ({ updates, className }) => {
  // State to track the current update index
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUpdate = updates[currentIndex];

  return (
    <div className={cn("pb-6", className)}>
      <div className='flex flex-col md:flex-row md:gap-10'>
        {/* Content Section - 1/3 on desktop */}
        <div className='order-2 md:order-1 md:w-1/3 md:flex-shrink-0'>
          <div className='flex flex-col'>
            <div className='font-bold text-xl mb-1'>
              {currentUpdate.category}
            </div>
            <div className='flex justify-start items-center gap-3 mt-2 text-custom-red'>
              <TimeIndicator type='live' value={null} />
              <span className='text-sm'>{currentUpdate.timeAgo}</span>
            </div>
            <h2 className='text-2xl font-bold mb-3'>{currentUpdate.title}</h2>
            <p className='text-gray-600 mb-4'>{currentUpdate.content}</p>
            {/* See more updates button */}
            <div className='flex items-center mb-4'>
              <button className='text-gray-700 font-medium mr-2'>
                See more updates
              </button>
              <span className='bg-gray-700 text-white text-xs px-2 py-1 rounded-full'>
                {updates.length}
              </span>
            </div>
            <InteractionButtons size='small' />
          </div>
        </div>

        {/* Image Section - 2/3 on desktop */}
        <div className='relative order-1 md:order-2 md:w-2/3'>
          <div className='relative overflow-hidden rounded-lg sm:rounded-none flex justify-end items-center'>
            <img
              src={currentUpdate.image}
              alt={currentUpdate.title}
              className='w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-300 hover:scale-105'
              loading='lazy'
            />
          </div>
          {updates.length > 1 && (
            <CarouselNavigation
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              totalItems={updates.length}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveUpdateCard;
