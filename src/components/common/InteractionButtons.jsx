import { Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const InteractionButtons = ({ 
  className, 
  size = "default", 
  onCommentClick, 
  showCommentsCount = 0,
  onLoveClick,
  isLoved = false,
  loveCount = 0,
  disabled = false
}) => {
  const iconSize = size === "small" ? 16 : 18;
  const fontSize = size === "small" ? "text-xs" : "text-sm";
  const [isProcessing, setIsProcessing] = useState(false);

  const handleLoveClick = async () => {
    if (disabled || isProcessing) return;
    
    setIsProcessing(true);
    try {
      // Toggle love status - if currently loved, send false; if not loved, send true
      await onLoveClick?.(!isLoved);
    } catch (error) {
      console.error('Failed to toggle love:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCommentClick = () => {
    if (disabled) return;
    onCommentClick?.();
  };

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {/* Love Button */}
      <button 
        onClick={handleLoveClick}
        disabled={disabled || isProcessing}
        className={cn(
          "flex cursor-pointer items-center transition-all duration-200 hover:scale-105",
          isLoved 
            ? "text-red-500 hover:text-red-600" 
            : "text-gray-600 hover:text-red-500",
          (disabled || isProcessing) && "opacity-50 cursor-not-allowed hover:scale-100"
        )}
        aria-label={isLoved ? "Unlike this article" : "Like this article"}
      >
        <Heart 
          size={iconSize} 
          className={cn(
            "mr-2 transition-all duration-200",
            isLoved && "fill-current animate-pulse",
            isProcessing && "animate-spin"
          )} 
        />
        <span className={cn(fontSize, "font-medium")}>
          {isLoved ? "Loved" : "Love"}
          {loveCount > 0 && ` (${loveCount})`}
        </span>
      </button>
      
      {/* Comment Button */}
      <button 
        onClick={handleCommentClick}
        disabled={disabled}
        className={cn(
          "flex cursor-pointer items-center text-gray-600 hover:text-blue-500 transition-all duration-200 hover:scale-105",
          disabled && "opacity-50 cursor-not-allowed hover:scale-100"
        )}
        aria-label="View comments"
      >
        <MessageCircle size={iconSize} className="mr-2" />
        <span className={cn(fontSize, "font-medium")}>
          Comment
          {showCommentsCount > 0 && ` (${showCommentsCount})`}
        </span>
      </button>
    </div>
  );
};

export default InteractionButtons;