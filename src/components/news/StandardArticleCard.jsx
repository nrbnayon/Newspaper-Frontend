// src\components\news\StandardArticleCard.jsx
import { cn } from "@/lib/utils";
import { useState } from "react";
import InteractionButtons from "../common/InteractionButtons";
import AuthModal from "../auth/AuthModal";
import CommentsSection from "../common/CommentSection";
import SentimentBadge from "../common/SentimentBadge";
import { useAuth } from "@/contexts/AuthContext";
import {
  transformReactionsToComments,
  countLoves,
  countComments,
  hasUserLoved,
} from "@/lib/news-service";

const StandardArticleCard = ({
  article: {
    id,
    title,
    description,
    category,
    publishedTime,
    publishedDateTime,
    image = "/placeholder.svg?height=200&width=300",
    sentiment,
    isFeatured,
    imageAttribution,
    readTime,
  },
  className,
  imagePosition = "top",
  reactions = [],
  onPostLove,
  onPostComment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [showComments, setShowComments] = useState(false);

  // Process reactions data
  const comments = transformReactionsToComments(reactions);
  const loveCount = countLoves(reactions);
  const commentCount = countComments(reactions);
  const isLoved = hasUserLoved(reactions, user?.id);

  const getTruncatedText = (text) => {
    if (!text) return "";
    const words = text.split(" ").filter((word) => word.length > 0);
    if (words.length <= 10) return text;
    return words.slice(0, 10).join(" ");
  };

  const truncatedContent = getTruncatedText(description);
  const shouldShowReadMore = description && description.length > 200;

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

  const isHorizontal = imagePosition === "left" || imagePosition === "right";

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
            name='keywords'
            content={
              category ? category.join(", ") : "news, updates, ALAMOCITYPULSE"
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
      <div
        className={cn(
          "rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 bg-white",
          isHorizontal ? "flex" : "flex-col",
          className
        )}
      >
        <div
          className={cn(
            isHorizontal ? "w-1/3 flex-shrink-0" : "w-full",
            imagePosition === "right" ? "order-2" : "order-1",
            "relative"
          )}
        >
          <img
            src={image}
            alt={title}
            className='w-full h-72 xl:h-48 object-cover'
          />
          {sentiment && (
            <div className='absolute top-1 left-1'>
              <SentimentBadge
                sentiment={sentiment}
                className='text-xs py-0.5 px-2'
              />
            </div>
          )}
        </div>
        <div
          className={cn(
            "p-4 flex flex-col",
            isHorizontal ? "w-2/3" : "w-full",
            imagePosition === "right" ? "order-1" : "order-2"
          )}
        >
          <div className='w-full bg-custom-red text-white px-2 py-1.5 text-xs font-medium mb-2 self-start'>
            {category}
          </div>
          <h3 className='font-bold text-gray-900 mb-2 line-clamp-2 leading-tight'>
            {title}
          </h3>

          {description && (
            <div className='text-gray-600 text-sm mb-3'>
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
                {isExpanded ? description : truncatedContent}
                {!isExpanded && shouldShowReadMore && "... "}
                {shouldShowReadMore && (
                  <button
                    onClick={handleReadMore}
                    className='text-blue-400 hover:text-blue-500 cursor-pointer text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none focus:underline'
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </p>
            </div>
          )}
          <div className='flex items-center justify-between text-xs text-gray-500 mt-auto'>
            <div>{publishedTime && <span>{publishedTime}</span>}</div>
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
          {showComments && (
            <CommentsSection
              comments={comments}
              onPostComment={handleCommentSubmit}
              disabled={!isLoggedIn}
              allComments={reactions}
            />
          )}
        </div>
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          initialMode={authMode}
        />
      </div>
    </>
  );
};

export default StandardArticleCard;
