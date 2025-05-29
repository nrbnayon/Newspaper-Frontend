import { useState } from "react";
import { cn } from "@/lib/utils";
import ImageAttribution from "../common/ImageAttribution";
import InteractionButtons from "../common/InteractionButtons";
import SentimentBadge from "../common/SentimentBadge";
import TimeIndicator from "../common/TimeIndicator";
import AuthModal from "../auth/AuthModal";

const CommonNewsCard = ({
  article,
  className,
  layout = "horizontal", // horizontal or vertical
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isHorizontal = layout === "horizontal";

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");

  // Function to truncate text to 50% of words
  const getTruncatedText = (text) => {
    if (!text) return "";
    const words = text.split(" ");
    const halfLength = Math.ceil(words.length / 2);
    return words.slice(0, halfLength).join(" ");
  };

  const truncatedContent = getTruncatedText(article.content);
  const shouldShowReadMore = article.content && article.content.split(" ").length > 2;

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
    setAuthMode("signup");
    setAuthModalOpen(true);
  };

  return (
    <article className={cn("overflow-hidden pb-4 sm:pb-6 lg:pb-8", className)}>
      <div
        className={cn(
          "flex flex-col-reverse gap-4 sm:gap-6",
          isHorizontal && !isExpanded && "lg:flex-row lg:items-start lg:gap-8 xl:gap-10",
          isExpanded && "flex-col-reverse gap-4 sm:gap-6"
        )}
      >
        {/* Content Section */}
        <div
          className={cn(
            "flex flex-col w-full",
            isHorizontal && !isExpanded && "lg:w-2/5 xl:w-1/3",
            isExpanded && "w-full"
          )}
        >
          {article.isFeatured && (
            <SentimentBadge
              sentiment={article.sentiment}
              className='mb-3 sm:mb-4 w-full'
            />
          )}

          <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight'>
            {article.title}
          </h1>

          <div className='mb-3 sm:mb-4'>
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

           

          <TimeIndicator
            type='readTime'
            value={article.readTime}
            className='text-xs sm:text-sm'
          />
        </div>

        {/* Image Section */}
        <div 
          className={cn(
            'relative w-full order-1 md:order-2 flex flex-col items-end',
            isHorizontal && !isExpanded && "lg:w-2/3",
            isExpanded && "w-full"
          )}
        >
          <div className='relative overflow-hidden w-full rounded-lg sm:rounded-none flex justify-end items-center'>
            <img
              src={article.image}
              alt={article.title}
              className={cn(
                'w-full object-fit transition-transform duration-300 hover:scale-105',
                !isExpanded && 'h-56 sm:h-96 md:h-96 lg:h-96 xl:h-[28rem]',
                isExpanded && 'h-56 sm:h-96 md:h-96 lg:h-[36rem] xl:h-[44rem]'
              )}
              loading='lazy'
            />
          </div>

          <div className='w-full  flex justify-between items-center mt-2 sm:mt-3'>
            {article.isFeatured && (
              <div>
                <InteractionButtons />
              </div>
            )}
            {!article.isFeatured && <div className=''></div>}
            <div className='flex items-center justify-end'>
              <ImageAttribution
                attribution={article?.imageAttribution}
                className=' mb-1 text-xs sm:text-sm'
              />
            </div>
          </div>
        </div>
      </div>
      <AuthModal
              isOpen={authModalOpen}
              onClose={() => setAuthModalOpen(false)}
              initialMode={authMode}
            />
    </article>
  );
};

export default CommonNewsCard;