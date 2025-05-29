import { Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const InteractionButtons = ({ className, size = "default", onCommentClick, showCommentsCount = 0 }) => {
  const iconSize = size === "small" ? 16 : 18;
  const fontSize = size === "small" ? "text-xs" : "text-sm";

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      <button className="flex cursor-pointer items-center text-gray-600 hover:text-red-500 transition-colors">
        <Heart size={iconSize} className="mr-2" />
        <span className={fontSize}>Love</span>
      </button>
      <button 
        onClick={onCommentClick}
        className="flex cursor-pointer items-center text-gray-600 hover:text-blue-500 transition-colors"
      >
        <MessageCircle size={iconSize} className="mr-2" />
        <span className={fontSize}>Comment {showCommentsCount > 0 && `(${showCommentsCount})`}</span>
      </button>
    </div>
  );
};

export default InteractionButtons;