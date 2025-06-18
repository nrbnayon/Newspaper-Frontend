// src\components\news\AudioNewsCard.jsx
import SentimentBadge from "../common/SentimentBadge";
import { cn, getTruncatedText } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpenText } from "lucide-react";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";

const AudioNewsCard = ({
  id,
  title,
  description,
  category = "THE HEADLINES",
  publishedTime,
  publishedDateTime,
  image = "/placeholder.svg?height=100&width=150",
  sentiment = "neutral",
  isFeatured,
  imageAttribution,
  readTime,
  className,
}) => {
  const { isLoggedIn, user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

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

  return (
    <>
      <div className={cn("flex border-y-1 border-black py-6", className)}>
        <div className="flex-shrink-0 w-[150px] h-28 relative overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="ml-4 flex-1">
          <div className="flex items-center mb-1">
            <span className="text-xs font-bold text-gray-800 mr-2">
              {category}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 line-clamp-2">{title}</h3>

          <div className="flex mb-2 items-center">
            <button
              onClick={handleReadMore}
              className="flex items-center text-gray-700 mr-2 hover:text-gray-900 transition-colors"
            >
              <BookOpenText size={16} className="mr-1" />
              <span className="text-sm mr-1">
                {isExpanded ? description : truncatedContent}
                {!isExpanded && shouldShowReadMore && "..."}
              </span>
              {shouldShowReadMore && (
                <span className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  {isExpanded ? "Read less" : "Read more"}
                </span>
              )}
            </button>
          </div>
          <div className="ml-auto">
            <SentimentBadge
              sentiment={sentiment}
              className="text-xs py-0.5 px-2"
            />
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default AudioNewsCard;
