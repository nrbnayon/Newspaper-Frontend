import { cn } from "@/lib/utils";
import { useState } from "react";
import TimeIndicator from "../common/TimeIndicator";
import InteractionButtons from "../common/InteractionButtons";
import AuthModal from "../auth/AuthModal";

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

  // Badge color mapping
  const getBadgeColor = (badgeText) => {
    const lowerBadge = badgeText?.toLowerCase();
    switch (lowerBadge) {
      case "negative":
        return "bg-red-600";
      case "popular":
        return "bg-blue-600";
      case "easy":
        return "bg-green-600";
      case "classic":
        return "bg-purple-600";
      case "healthy":
        return "bg-emerald-600";
      case "time saver":
        return "bg-orange-600";
      case "freezable":
        return "bg-cyan-600";
      case "overnight":
        return "bg-indigo-600";
      case "showstopper":
        return "bg-pink-600";
      case "elegant":
        return "bg-violet-600";
      case "crowd pleaser":
        return "bg-amber-600";
      case "gourmet":
        return "bg-rose-600";
      default:
        return "bg-custom-red";
    }
  };

 const handleReadMore = () => {
    setIsExpanded(!isExpanded)
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
        <img src={image} alt={title} className='w-full h-72 xl:h-48 object-cover' />
        {badge && (
          <div
            className={cn(
              "absolute top-1 left-1 text-white px-3 py-1 text-xs font-medium rounded-md",
              getBadgeColor(badge)
            )}
          >
            {badge}
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
            <TimeIndicator type='readTime' value={readTime} />
          </div>
          <div className=''>
          <InteractionButtons />
        </div>
        </div>
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