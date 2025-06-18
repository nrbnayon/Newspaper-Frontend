// src\components\news\StandardArticleCard.jsx
import { cn } from "@/lib/utils";
import { useState } from "react";
import InteractionButtons from "../common/InteractionButtons";
import AuthModal from "../auth/AuthModal";
import CommentsSection from "../common/CommentSection";
import SentimentBadge from "../common/SentimentBadge";
import { useAuth } from "@/contexts/AuthContext";

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
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLoggedIn } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Really informative and well-written.",
      time: "2 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 2,
      author: "Sarah Wilson",
      content:
        "I completely agree with the points made here. Thanks for sharing this perspective.",
      time: "4 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c92a?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 3,
      author: "Mike Johnson",
      content:
        "Interesting read, though I have some different thoughts on this topic.",
      time: "6 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 4,
      author: "Emily Chen",
      content:
        "This really opened my eyes to a new way of thinking about the subject.",
      time: "8 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: 5,
      author: "David Brown",
      content:
        "Well researched and presented. Looking forward to more content like this.",
      time: "10 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    },
  ]);

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

  const isHorizontal = imagePosition === "left" || imagePosition === "right";

  return (
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
              showCommentsCount={comments.length}
            />
          </div>
        </div>
        {showComments && (
          <CommentsSection comments={comments} setComments={setComments} />
        )}
      </div>
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </div>
  );
};

export default StandardArticleCard;
