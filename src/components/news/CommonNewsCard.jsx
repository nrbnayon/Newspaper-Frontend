import { useState } from "react";
import InteractionButtons from "../common/InteractionButtons";
import AuthModal from "../auth/AuthModal";
import { cn } from "@/lib/utils";
import ImageAttribution from "../common/ImageAttribution";
import SentimentBadge from "../common/SentimentBadge";
import TimeIndicator from "../common/TimeIndicator";

import CommentsSection from "../common/CommentSection";

const CommonNewsCard = ({
  article,
  className,
  layout = "horizontal", // horizontal or vertical
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isHorizontal = layout === "horizontal";

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signup");

  // Comment section states
  const [showComments, setShowComments] = useState(false);

  // Sample comments data - you can replace this with your actual data source
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "John Doe",
      content: "Great article! Really informative and well-written.",
      time: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 2,
      author: "Sarah Wilson",
      content: "I completely agree with the points made here. Thanks for sharing this perspective.",
      time: "4 hours ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c92a?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 3,
      author: "Mike Johnson",
      content: "Interesting read, though I have some different thoughts on this topic.",
      time: "6 hours ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 4,
      author: "Emily Chen",
      content: "This really opened my eyes to a new way of thinking about the subject.",
      time: "8 hours ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face"
    },
    {
      id: 5,
      author: "David Brown",
      content: "Well researched and presented. Looking forward to more content like this.",
      time: "10 hours ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face"
    }
  ]);

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
    setAuthMode("signin");
    setAuthModalOpen(true);
  };

  const handleCommentClick = () => {
    setShowComments(!showComments);
  };

  // Mock article data if not provided
  const mockArticle = {
    title: "Sample News Article Title",
    content: "This is a sample news article content. It contains multiple sentences to demonstrate the read more functionality. The content can be quite long and detailed, covering various aspects of the topic at hand. This helps users get a preview before deciding to read the full article.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    imageAttribution: "Photo by Author Name",
    readTime: 5,
    sentiment: "positive",
    isFeatured: true,
    ...article
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
          {mockArticle.isFeatured && (
            <SentimentBadge
              sentiment={mockArticle.sentiment}
              className='mb-3 sm:mb-4 w-full'
            />
          )}

          <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight'>
            {mockArticle.title}
          </h1>

          <div className='mb-3 sm:mb-4'>
            <p className='text-sm sm:text-base text-gray-600 leading-relaxed'>
              {isExpanded ? mockArticle.content : truncatedContent}
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
            value={mockArticle.readTime}
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
              src={mockArticle.image}
              alt={mockArticle.title}
              className={cn(
                'w-full object-cover transition-transform duration-300 hover:scale-105',
                !isExpanded && 'h-56 sm:h-96 md:h-96 lg:h-96 xl:h-[28rem]',
                isExpanded && 'h-56 sm:h-96 md:h-96 lg:h-[36rem] xl:h-[44rem]'
              )}
              loading='lazy'
            />
          </div>

         <div className="flex flex-col justify-between w-full">
           <div className='w-full flex justify-between items-center mt-2 sm:mt-3'>
              {mockArticle.isFeatured && (
                <div>
                  <InteractionButtons 
                    onCommentClick={handleCommentClick}
                    showCommentsCount={comments.length}
                  />
                </div>
              )}
              {!mockArticle.isFeatured && <div className=''></div>}
              <div className='flex items-center justify-end'>
                <ImageAttribution
                  attribution={mockArticle?.imageAttribution}
                  className=' mb-1 text-xs sm:text-sm'
                />
              </div>
            </div>

              {/* Comment Section */}
              {showComments && (
                <CommentsSection 
                  comments={comments}
                  setComments={setComments}
                />
              )}
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