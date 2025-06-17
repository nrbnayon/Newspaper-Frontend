// src\components\news\StandardArticleCard.jsx
import { cn } from "@/lib/utils";
import { useState } from "react";
import TimeIndicator from "../common/TimeIndicator";
import InteractionButtons from "../common/InteractionButtons";
import AuthModal from "../auth/AuthModal";
import CommentsSection from "../common/CommentSection";
import SentimentBadge from "../common/SentimentBadge";

const StandardArticleCard = ({ article, className, imagePosition = "top" }) => {
  const {
    title,
    content,
    category,
    readTime,
    date,
    image = "/placeholder.svg?height=200&width=300",
    badge,
  } = article;

  const [isExpanded, setIsExpanded] = useState(false);

  const isHorizontal = imagePosition === "left" || imagePosition === "right";

  // Comment section states
  const [showComments, setShowComments] = useState(false);

  // Sample comments data - you can replace this with your actual data source
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

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };
  // Function to get truncated content (50% of words)
  const getTruncatedContent = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    const halfLength = Math.ceil(words.length / 2);
    return words.slice(0, halfLength).join(" ");
  };

  const truncatedContent = getTruncatedContent(content);
  const shouldShowReadMore = content && content.split(" ").length > 1;
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

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
          className='w-full h-72 xl:h-48 object-cover'
        />
        {badge && (
          <div
            className={cn(
              "absolute top-1 left-1 text-white px-3 py-1 text-xs font-medium rounded-md"
            )}
          >
            <SentimentBadge sentiment={badge} className='mb-3 sm:mb-4 w-full' />
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

        {content && (
          <div className='text-gray-600 text-sm mb-3'>
            <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
              {isExpanded ? article.content : truncatedContent}
              {!isExpanded && shouldShowReadMore && "... "}
              {shouldShowReadMore && (
                <button
                  onClick={handleReadMore}
                  className='text-blue-600 hover:text-blue-800  cursor-pointer text-sm sm:text-base font-medium mt-2 transition-colors duration-200 focus:outline-none focus:underline'
                >
                  {isExpanded ? "Read less" : "Read more >"}
                </button>
              )}
            </p>
          </div>
        )}
        <div className='flex items-center justify-between text-xs text-gray-500 mt-auto'>
          <div>
            <button>Read more</button>
          </div>
          <div className=''>
            <InteractionButtons
              onCommentClick={handleCommentClick}
              showCommentsCount={comments.length}
            />
          </div>
        </div>
        {/* Comment Section */}
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
