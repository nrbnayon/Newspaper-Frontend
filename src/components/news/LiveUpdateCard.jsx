// src\components\news\LiveUpdateCard.jsx
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TimeIndicator from "../common/TimeIndicator";
import InteractionButtons from "../common/InteractionButtons";
import CommentsSection from "../common/CommentSection";

// Carousel Dots Component
const CarouselDots = ({ currentIndex, setCurrentIndex, totalItems }) => {
  // Function to get dot size based on distance from active dot
  const getDotSize = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return "w-3 h-3"; // Active dot - largest
    if (distance === 1) return "w-2.5 h-2.5"; // Adjacent dots - medium
    return "w-2 h-2"; // Far dots - smallest
  };

  return (
    <div className='flex items-center gap-2'>
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          className={`${getDotSize(
            index
          )} rounded-full transition-all duration-200 ${
            index === currentIndex ? "bg-black" : "bg-gray-300"
          }`}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  );
};

// Navigation Arrows Component
const NavigationArrows = ({ currentIndex, setCurrentIndex, totalItems }) => {
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalItems - 1 ? prev + 1 : 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < totalItems - 1;

  return (
    <div className='flex items-center gap-1'>
      <button
        onClick={handlePrev}
        disabled={!canGoPrev}
        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
          canGoPrev
            ? "bg-white border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400"
            : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <ChevronLeft className='w-4 h-4' />
      </button>
      <button
        onClick={handleNext}
        disabled={!canGoNext}
        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
          canGoNext
            ? "bg-white border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400"
            : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <ChevronRight className='w-4 h-4' />
      </button>
    </div>
  );
};

// Read More Component
const ReadMoreContent = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Split content into words and calculate 50%
  const words = content.split(' ');
  const halfLength = Math.floor(words.length / 2);
  const truncatedContent = words.slice(0, halfLength).join(' ');
  
  // Only show read more/less if content is long enough to truncate
  const shouldTruncate = words.length > 10; // Only truncate if more than 10 words
  
  if (!shouldTruncate) {
    return <p className='text-gray-600 mb-4'>{content}</p>;
  }
  
  return (
    <div className='mb-4'>
      <p className='text-gray-600'>
        {isExpanded ? content : `${truncatedContent}...`}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='text-blue-600 cursor-pointer hover:text-blue-800 font-medium text-sm mt-1 transition-colors'
        >
        {isExpanded ? 'Read less' : 'Read more'}
      </button>
      </p>
      
    </div>
  );
};

const LiveUpdateCard = ({ updates, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentUpdate = updates[currentIndex];
  // Comment section states
  const [showComments, setShowComments] = useState(false);

  // Sample comments data - you can replace this with your actual data source
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Really informative and well-written.",
      time: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 2,
      author: "Sarah Wilson",
      content: "I completely agree with the points made here. Thanks for sharing this perspective.",
      time: "4 hours ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c92a?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 3,
      author: "Mike Johnson",
      content: "Interesting read, though I have some different thoughts on this topic.",
      time: "6 hours ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 4,
      author: "Emily Chen",
      content: "This really opened my eyes to a new way of thinking about the subject.",
      time: "8 hours ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 5,
      author: "David Brown",
      content: "Well researched and presented. Looking forward to more content like this.",
      time: "10 hours ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
    }
  ]);

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  return (
    <div className={cn("pb-6", className)}>
      <div className='flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:gap-8 xl:gap-10'>
        {/* Content Section - Left side on desktop */}
        <div className='flex flex-col w-full lg:w-2/5 xl:w-1/3'>
          <div className='font-bold text-xl mb-1'>{currentUpdate.category}</div>
          <div className='flex justify-start items-center gap-3 mt-2 text-custom-red'>
            <TimeIndicator type='live' value={null} />
            <span className='text-sm'>{currentUpdate.timeAgo}</span>
          </div>
          <h2 className='text-2xl font-bold mb-3'>{currentUpdate.title}</h2>
          <ReadMoreContent content={currentUpdate.content} />
          {/* See more updates button */}
          <div className='flex items-center mb-4'>
            <button className='text-gray-700 font-medium mr-2'>
              See more updates
            </button>
            <span className='bg-gray-700 text-white text-xs px-2 py-1 rounded-full'>
              {updates.length}
            </span>
          </div>
          <div>
           <InteractionButtons 
                    onCommentClick={handleCommentClick}
                    showCommentsCount={comments.length}
                  />
          </div>
          {/* Comment Section */}
              {showComments && (
                <CommentsSection 
                  comments={comments}
                  setComments={setComments}
                />
              )}
        </div>

        {/* Image Section - Right side on desktop */}
        <div className='relative w-full order-1 md:order-2 lg:w-2/3 flex flex-col items-end'>
          <div className='relative overflow-hidden w-full rounded-lg sm:rounded-none flex justify-end items-center'>
            <img
              src={currentUpdate.image}
              alt={currentUpdate.title}
              className='w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-300 hover:scale-105'
              loading='lazy'
            />
          </div>

          <div className='w-full py-2'>
            <div className='flex justify-between items-center'>
              {/* Carousel Dots - Centered */}
              <div className='flex-1 flex justify-center'>
                {updates.length > 1 && (
                  <CarouselDots
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    totalItems={updates.length}
                  />
                )}
              </div>

              {/* Navigation Arrows - Right side */}
              <div className='flex items-center md:mt-6'>
                {updates.length > 1 && (
                  <NavigationArrows
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    totalItems={updates.length}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveUpdateCard;