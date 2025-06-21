import { useState } from "react";
import { cn, getTruncatedText } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TimeIndicator from "../common/TimeIndicator";
import InteractionButtons from "../common/InteractionButtons";
import CommentsSection from "../common/CommentSection";
import AuthModal from "../auth/AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import {
  transformReactionsToComments,
  countLoves,
  countComments,
  hasUserLoved,
} from "@/lib/news-service";
import { Helmet } from "react-helmet-async";

// Carousel Dots Component
const CarouselDots = ({ currentIndex, setCurrentIndex, totalItems }) => {
  const getDotSize = (index) => {
    const distance = Math.abs(index - currentIndex);
    if (distance === 0) return "w-3 h-3"; // Active dot - largest
    if (distance === 1) return "w-2.5 h-2.5"; // Adjacent dots - medium
    return "w-2 h-2"; // Far dots - smallest
  };

  return (
    <div className="flex items-center gap-2">
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
    <div className="flex items-center gap-1">
      <button
        onClick={handlePrev}
        disabled={!canGoPrev}
        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
          canGoPrev
            ? "bg-white border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-gray-400"
            : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
        }`}
      >
        <ChevronLeft className="w-4 h-4" />
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
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

// Read More Component
const ReadMoreContent = ({ description, isLoggedIn, onAuthRequired }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent = getTruncatedText(description);
  const shouldShowReadMore = description && description.length > 200;

  const handleReadMore = () => {
    if (!isLoggedIn) {
      onAuthRequired();
      return;
    }
    setIsExpanded(!isExpanded);
  };

  if (!shouldShowReadMore) {
    return <p className="text-gray-600 mb-4">{description}</p>;
  }

  return (
    <>
      {" "}
      {isExpanded && (
        <Helmet>
          <title>
            {currentUpdate?.title || "ALAMOCITYPULSE - News Article"}
          </title>
          <meta
            name="description"
            content={
              currentUpdate?.description
                ? getTruncatedText(currentUpdate?.description, 160)
                : "Read the latest news and updates from ALAMOCITYPULSE"
            }
          />
          <meta
            name="keywords"
            content={
              currentUpdate?.category
                ? currentUpdate?.category.join(", ")
                : "news, updates, ALAMOCITYPULSE"
            }
          />
          <meta
            property="og:title"
            content={currentUpdate?.title || "ALAMOCITYPULSE - News Article"}
          />
          <meta
            property="og:description"
            content={
              currentUpdate?.description
                ? getTruncatedText(currentUpdate?.description, 160)
                : "Read the latest news and updates from ALAMOCITYPULSE"
            }
          />
          <meta
            property="og:image"
            content={currentUpdate?.image || "/default-image.jpg"}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content={currentUpdate?.url || window.location.href}
          />
        </Helmet>
      )}
      <div className="mb-4">
        <p className="text-gray-600">
          {isExpanded ? description : `${truncatedContent}...`}
          <button
            onClick={handleReadMore}
            className="text-blue-600 cursor-pointer hover:text-blue-800 font-medium text-sm mt-1 transition-colors duration-200 focus:outline-none focus:underline"
          >
            {isExpanded ? "Read less" : "Read more >"}
          </button>
        </p>
      </div>
    </>
  );
};

const LiveUpdateCard = ({
  updates,
  className,
  newsReactions,
  onPostLove,
  onPostComment,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLoggedIn, user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [showComments, setShowComments] = useState(false);

  const currentUpdate = updates[currentIndex];
  const currentReactions = newsReactions[currentUpdate.id] || [];
  const comments = transformReactionsToComments(currentReactions);
  const loveCount = countLoves(currentReactions);
  const commentCount = countComments(currentReactions);
  const isLoved = hasUserLoved(currentReactions, user?.id);

  const handleCommentClick = () => {
    if (!isLoggedIn) {
      setAuthMode("signin");
      setAuthModalOpen(true);
      return;
    }
    setShowComments(!showComments);
  };

  const handleLoveClick = async (loveStatus) => {
    if (!isLoggedIn) {
      setAuthMode("signin");
      setAuthModalOpen(true);
      return;
    }
    try {
      await onPostLove(currentUpdate.id, loveStatus);
    } catch (error) {
      console.error("Failed to post love reaction:", error);
    }
  };

  const handleCommentSubmit = async (commentText) => {
    if (!isLoggedIn) {
      setAuthMode("signin");
      setAuthModalOpen(true);
      return;
    }
    try {
      await onPostComment(currentUpdate.id, commentText);
    } catch (error) {
      console.error("Failed to post comment:", error);
      throw error;
    }
  };

  const handleAuthRequired = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  return (
    <>
      <div className={cn("pb-6", className)}>
        <div className='flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:gap-8 xl:gap-10'>
          {/* Content Section */}
          <div className='flex flex-col w-full lg:w-2/5 xl:w-1/3'>
            <div className='font-bold text-xl mb-1'>
              {currentUpdate.category}
            </div>
            <div className='flex justify-start items-center gap-3 mt-2 text-custom-red'>
              <TimeIndicator type='live' value={null} />
              <span className='text-sm'>{currentUpdate.timeAgo}</span>
            </div>
            <h2 className='text-2xl font-bold mb-3'>{currentUpdate.title}</h2>
            <ReadMoreContent
              description={currentUpdate.description}
              isLoggedIn={isLoggedIn}
              onAuthRequired={handleAuthRequired}
            />
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
                onLoveClick={handleLoveClick}
                showCommentsCount={commentCount}
                isLoved={isLoved}
                loveCount={loveCount}
                disabled={!isLoggedIn}
              />
            </div>
          </div>

          {/* Image Section */}
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
                <div className='flex-1 flex justify-center'>
                  {updates.length > 1 && (
                    <CarouselDots
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                      totalItems={updates.length}
                    />
                  )}
                </div>
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
      {showComments && (
        <CommentsSection
          comments={comments}
          onPostComment={handleCommentSubmit}
          disabled={!isLoggedIn}
          allComments={currentReactions}
        />
      )}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default LiveUpdateCard;
