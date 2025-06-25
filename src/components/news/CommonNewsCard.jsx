// src\components\news\CommonNewsCard.jsx
import { useState } from "react";
import InteractionButtons from "../common/InteractionButtons";
import AuthModal from "../auth/AuthModal";
import { cn, getTruncatedText } from "@/lib/utils";
import ImageAttribution from "../common/ImageAttribution";
import SentimentBadge from "../common/SentimentBadge";
import TimeIndicator from "../common/TimeIndicator";
import CommentsSection from "../common/CommentSection";
import { useAuth } from "@/contexts/AuthContext";
import {
  transformReactionsToComments,
  countLoves,
  countComments,
  hasUserLoved,
} from "@/lib/news-service";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CommonNewsCard = ({
  article,
  className,
  layout = "horizontal",
  reactions = [],
  onPostLove,
  onPostComment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isHorizontal = layout === "horizontal";
  const { isLoggedIn, user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [showComments, setShowComments] = useState(false);

  const comments = transformReactionsToComments(reactions);
  const loveCount = countLoves(reactions);
  const commentCount = countComments(reactions);
  const isLoved = hasUserLoved(reactions, user?.id);

  // Destructure article with consistent naming
  const {
    id,
    title,
    description,
    category,
    publishedTime,
    publishedDateTime,
    image,
    sentiment,
    source,
    author,
    tags,
    isFeatured,
    imageAttribution,
    readTime,
    url,
  } = article || {};

  const truncatedContent = getTruncatedText(description, 200);
  const shouldShowReadMore = description && description.length > 200;

  // Format published time for display
  const formatPublishedTime = (dateTime) => {
    if (!dateTime) return "";
    try {
      const date = new Date(dateTime);
      const now = new Date();
      const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

      if (diffInHours < 1) return "Just now";
      if (diffInHours < 24) return `${diffInHours}h ago`;
      if (diffInHours < 48) return "Yesterday";
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
      });
    } catch {
      return "";
    }
  };

  const handleReadMore = () => {
    if (!isLoggedIn) {
      setAuthMode("signin");
      setAuthModalOpen(true);
      return;
    }
    setIsExpanded(!isExpanded);
  };

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
      await onPostLove?.(loveStatus);
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
      await onPostComment?.(commentText);
    } catch (error) {
      console.error("Failed to post comment:", error);
      throw error;
    }
  };

  const handleSourceClick = (e) => {
    if (url) {
      e.preventDefault();
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      {isExpanded && (
        <Helmet>
          <title>{title || "ALAMOCITYPULSE - News Article"}</title>
          <meta
            name='description'
            content={
              description
                ? getTruncatedText(description, 160)
                : "Read the latest news and updates from ALAMOCITYPULSE"
            }
          />
          <meta
            property='og:title'
            content={title || "ALAMOCITYPULSE - News Article"}
          />
          <meta
            property='og:description'
            content={
              description
                ? getTruncatedText(description, 160)
                : "Read the latest news and updates from ALAMOCITYPULSE"
            }
          />
          <meta property='og:image' content={image || "/default-image.jpg"} />
          <meta property='og:type' content='article' />
          <meta property='og:url' content={url || window.location.href} />
        </Helmet>
      )}
      <article
        className={cn("overflow-hidden pb-4 sm:pb-6 lg:pb-8", className)}
      >
        <div
          className={cn(
            "flex flex-col-reverse gap-4 sm:gap-6",
            isHorizontal &&
              !isExpanded &&
              image &&
              "lg:flex-row lg:items-start lg:gap-8 xl:gap-10",
            isExpanded && "flex-col-reverse gap-4 sm:gap-6"
          )}
        >
          {/* Content Section */}
          <div
            className={cn(
              "flex flex-col w-full",
              isHorizontal && !isExpanded && image && "lg:w-2/5 xl:w-1/3",
              isExpanded && "w-full"
            )}
          >
            {/* Header Meta Info */}
            <div className='flex items-center justify-between mb-3 flex-wrap gap-2'>
              <div className='flex items-center gap-2 text-sm text-gray-500 flex-wrap'>
                {source && (
                  <button
                    onClick={handleSourceClick}
                    className='font-medium text-blue-600 hover:text-blue-800 transition-colors cursor-pointer'
                  >
                    {source}
                  </button>
                )}
                {source && (publishedDateTime || publishedTime) && (
                  <span className='text-gray-300'>•</span>
                )}
                {(publishedDateTime || publishedTime) && (
                  <time className='text-gray-500'>
                    {formatPublishedTime(publishedDateTime || publishedTime)}
                  </time>
                )}
                {author && (
                  <>
                    <span className='text-gray-300'>•</span>
                    <span className='text-gray-600 font-medium'>
                      By {author}
                    </span>
                  </>
                )}
                {category && (
                  <>
                    <span className='text-gray-300'>•</span>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800'>
                      {category.toUpperCase()}
                    </span>
                  </>
                )}
              </div>
            </div>

            <SentimentBadge
              sentiment={sentiment}
              className='mb-3 sm:mb-4 w-full'
            />

            <h1 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight'>
              {title}
              {isFeatured && (
                <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800'>
                  FEATURED
                </span>
              )}
            </h1>

            <div className='mb-3 sm:mb-4'>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                {isExpanded ? description : truncatedContent}
                {!isExpanded && shouldShowReadMore && "... "}
                {shouldShowReadMore && (
                  <button
                    onClick={handleReadMore}
                    className='text-blue-600 hover:text-blue-800 cursor-pointer text-sm sm:text-base font-medium mt-2 transition-colors duration-200 focus:outline-none focus:underline inline-flex items-center gap-1'
                  >
                    {isExpanded ? (
                      <>
                        Read less
                        <ChevronUp className='w-4 h-4 mt-1' />
                      </>
                    ) : (
                      <>
                        Read more
                        <ChevronDown className='w-4 h-4 mt-1' />
                      </>
                    )}
                  </button>
                )}
              </p>
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className='flex flex-wrap gap-2 mb-4'>
                {tags.slice(0, 4).map((tag, index) => (
                  <span
                    key={index}
                    className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer'
                  >
                    #{tag}
                  </span>
                ))}
                {tags.length > 4 && (
                  <span className='inline-flex items-center px-2 py-1 rounded-md text-xs font-medium text-gray-500'>
                    +{tags.length - 4} more
                  </span>
                )}
              </div>
            )}

            {/* Comment section in content area when expanded */}
            {isHorizontal && (
              <div className='flex flex-col justify-between w-full'>
                <div className='w-full flex justify-between items-center mt-2 sm:mt-3'>
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

                  {/* Share/Save Options */}
                  {/* <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>
                </div> */}
                </div>
              </div>
            )}
          </div>

          {/* Image Section - Only render if image exists */}
          {image && (
            <div
              className={cn(
                "relative w-full order-1 md:order-2 flex flex-col items-end",
                isHorizontal && !isExpanded && "lg:w-2/3",
                isExpanded && "w-full"
              )}
            >
              <div className='relative overflow-hidden w-full rounded-lg sm:rounded-none flex justify-end items-center'>
                <img
                  src={image}
                  alt={title}
                  className={cn(
                    "w-full object-cover transition-transform duration-300 hover:scale-105",
                    !isExpanded && "h-56 sm:h-96 md:h-96 lg:h-96 xl:h-[28rem]",
                    isExpanded &&
                      "h-56 sm:h-96 md:h-96 lg:h-[36rem] xl:h-[44rem]"
                  )}
                  loading='lazy'
                />

                {/* TimeIndicator - Bottom Left */}
                <div className='absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1'>
                  <TimeIndicator
                    type='readTime'
                    value={readTime || publishedTime}
                    className='text-xs sm:text-sm text-white'
                  />
                </div>

                {/* ImageAttribution - Bottom Right */}
                {imageAttribution && (
                  <div className='absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm rounded-md px-2 py-1'>
                    <ImageAttribution
                      attribution={imageAttribution}
                      className='text-xs sm:text-sm text-white'
                    />
                  </div>
                )}
              </div>

              {/* Comment section in image area when not expanded */}
              {!isHorizontal && (
                <div className='flex flex-col justify-between w-full'>
                  <div className='w-full flex justify-between items-center mt-2 sm:mt-3'>
                    {isFeatured && (
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
                    )}
                    {!isFeatured && <div className=''></div>}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Comment Section */}
        </div>

        {showComments && (
          <CommentsSection
            comments={comments}
            onPostComment={handleCommentSubmit}
            disabled={!isLoggedIn}
            allComments={reactions}
          />
        )}

        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialMode={authMode}
        />
      </article>
    </>
  );
};

export default CommonNewsCard;
