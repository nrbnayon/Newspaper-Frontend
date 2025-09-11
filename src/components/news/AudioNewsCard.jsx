import SentimentBadge from "../common/SentimentBadge";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { useAuthModal } from "@/contexts/AuthModalContext";
import { BookOpenText } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

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
  const { isLoggedIn } = useAuth();
  const { openModal } = useAuthModal();
  const [isExpanded, setIsExpanded] = useState(false);

  const getTruncatedText = (text) => {
    if (!text) return "";
    const words = text.split(" ").filter((word) => word.length > 0);
    if (words.length <= 15) return text;
    return words.slice(0, 15).join(" ");
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

  return (
    <div>
      {isExpanded && (
        <Helmet>
          <title>{title || "ALAMOCITYPULSE - News Article"}</title>
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
          "flex flex-col md:flex-row border-y border-black py-4 md:py-6",
          className
        )}
      >
        {/* Image */}
        <div className="w-full md:w-[150px] h-48 md:h-28 relative overflow-hidden flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="mt-4 md:mt-0 md:ml-4 flex-1 flex flex-col justify-between">
          {/* Category */}
          <div className="flex items-center mb-1">
            <span className="text-xs font-bold text-gray-800 mr-2">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">
            {title}
          </h3>

          {/* Description */}
          <div className="mb-2">
            <div className="text-sm text-gray-700">
              {isExpanded ? description : truncatedContent}
              {!isExpanded && shouldShowReadMore && "..."}
            </div>
            {shouldShowReadMore && (
              <button
                onClick={handleReadMore}
                className="mt-1 flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
              >
                <BookOpenText size={16} className="mr-1" />
                {isExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>

          {/* Sentiment */}
          <div className="mt-auto md:ml-auto">
            <SentimentBadge
              sentiment={sentiment}
              className="text-xs py-0.5 px-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioNewsCard;
