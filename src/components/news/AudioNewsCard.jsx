// src\components\news\AudioNewsCard.jsx
import SentimentBadge from "../common/SentimentBadge";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpenText } from "lucide-react";
import { useState } from "react";
import AuthModal from "../auth/AuthModal";
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
  const { isLoggedIn, user } = useAuth();
  const [isExpanded, setIsExpanded] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");

  const getTruncatedText = (text) => {
    if (!text) return "";
    const words = text.split(" ").filter((word) => word.length > 0);
    if (words.length <= 15) return text;
    return words.slice(0, 15).join(" ");
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
      <div className={cn("flex border-y-1 border-black py-6", className)}>
        <div className='flex-shrink-0 w-[150px] h-28 relative overflow-hidden'>
          <img src={image} alt={title} className='w-full h-full object-cover' />
        </div>

        <div className='ml-4 flex-1'>
          <div className='flex items-center mb-1'>
            <span className='text-xs font-bold text-gray-800 mr-2'>
              {category}
            </span>
          </div>

          <h3 className='text-xl font-bold mb-2 line-clamp-2'>{title}</h3>

          <div className='flex mb-2 items-center'>
            <button
              onClick={handleReadMore}
              className='flex items-center text-gray-700 mr-2 hover:text-gray-900 transition-colors'
            >
              <BookOpenText size={16} className='mr-1' />
              <span className='text-sm mr-1'>
                {isExpanded ? description : truncatedContent}
                {!isExpanded && shouldShowReadMore && "..."}
              </span>
              {shouldShowReadMore && (
                <span className='text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200'>
                  {isExpanded ? "Read less" : "Read more"}
                </span>
              )}
            </button>
          </div>
          <div className='ml-auto'>
            <SentimentBadge
              sentiment={sentiment}
              className='text-xs py-0.5 px-2'
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
