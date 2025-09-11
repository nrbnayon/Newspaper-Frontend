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
import { Helmet } from "react-helmet-async";
import { useAuthModal } from "@/contexts/AuthModalContext";

const StandardArticleCard = ({
  article: {
    id,
    title,
    description,
    category,
    publishedTime,
    image = "/placeholder.svg?height=200&width=300",
    sentiment,
  },
  className,
  imagePosition = "top",
  reactions = [],
  onPostLove,
  onPostComment,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const [showComments, setShowComments] = useState(false);

  const { openModal } = useAuthModal();

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
  const shouldShowReadMore = description && description.length > 120;

  const handleReadMore = () => {
    if (!isLoggedIn) {
      openModal("signin");
      return;
    }
    setIsExpanded(!isExpanded);
  };

  const handleAuthRequired = () => {
    openModal("signin");
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  const handleLoveClick = async (loveStatus) => {
    try {
      await onPostLove?.(loveStatus);
    } catch (error) {
      console.error("Failed to post love reaction:", error);
    }
  };

  const handleCommentSubmit = async (commentText) => {
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
          <title>{"ALAMOCITYPULSE - News Article"}</title>
          <meta
            name="description"
            content={
              description
                ? getTruncatedText(description, 120)
                : "Read the latest news and updates from ALAMOCITYPULSE"
            }
          />
          <meta
            property="og:title"
            content={title || "ALAMOCITYPULSE - News Article"}
          />
          <meta
            property="og:description"
            content={
              description
                ? getTruncatedText(description, 120)
                : "Read the latest news and updates from ALAMOCITYPULSE"
            }
          />
          <meta property="og:image" content={image || "/default-image.jpg"} />
          <meta property="og:type" content="article" />
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
            className="w-full h-72 xl:h-48 object-cover"
          />
          {sentiment && (
            <div className="absolute top-1 left-1">
              <SentimentBadge
                sentiment={sentiment}
                className="text-xs py-0.5 px-2"
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
          <div className="w-full bg-custom-red text-white px-2 py-1.5 text-xs font-medium mb-2 self-start">
            {category}
          </div>
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          {description && (
            <div className="text-gray-600 text-sm mb-3">
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {isExpanded ? description : truncatedContent}
                {!isExpanded && shouldShowReadMore && "... "}
                {shouldShowReadMore && (
                  <button
                    onClick={handleReadMore}
                    className="text-blue-400 hover:text-blue-500 cursor-pointer text-sm sm:text-base font-medium transition-colors duration-200 focus:outline-none focus:underline"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}
              </p>
            </div>
          )}
          <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
            <div>{publishedTime && <span>{publishedTime}</span>}</div>
            <div>
              <InteractionButtons
                onCommentClick={handleCommentClick}
                onLoveClick={handleLoveClick}
                showCommentsCount={commentCount}
                isLoved={isLoved}
                loveCount={loveCount}
                isLoggedIn={isLoggedIn}
                onAuthRequired={handleAuthRequired}
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
      </div>
    </>
  );
};

export default StandardArticleCard;
