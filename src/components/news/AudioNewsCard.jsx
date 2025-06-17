// src\components\news\AudioNewsCard.jsx
import SentimentBadge from "../common/SentimentBadge";
import { cn, getTruncatedText } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpenText } from "lucide-react";

const AudioNewsCard = ({
  title,
  description,
  category = "THE HEADLINES",
  sentiment = "neutral",
  image = "/placeholder.svg?height=100&width=150",
  className,
}) => {
  const { isLoggedIn, user } = useAuth();
  const truncatedContent = getTruncatedText(description);
  const shouldShowReadMore = description.length > 2;

  return (
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
          <button className='flex items-center text-gray-700 mr-2'>
            <BookOpenText size={16} className='mr-1' />
            <span className='text-sm mr-1'>
              {truncatedContent}
              ...
            </span>
            <span> Read more</span>
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
  );
};

export default AudioNewsCard;
