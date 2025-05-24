// src\components\news\StandardArticleCard.jsx
import { cn } from "@/lib/utils";
import TimeIndicator from "../common/TimeIndicator";
import InteractionButtons from "../common/InteractionButtons";

const StandardArticleCard = ({ article, className, imagePosition = "top" }) => {
  const {
    title,
    excerpt,
    category,
    readTime,
    date,
    image = "/placeholder.svg?height=200&width=300",
    badge,
  } = article;

  const isHorizontal = imagePosition === "left" || imagePosition === "right";

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
        <img src={image} alt={title} className='w-full h-48 object-cover' />
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
        <div className='mb-3'>
          <InteractionButtons />
        </div>
        {excerpt && (
          <p className='text-gray-600 text-sm mb-3 line-clamp-2'>{excerpt}</p>
        )}
        <div className='flex items-center justify-between text-xs text-gray-500 mt-auto'>
          <TimeIndicator type='readTime' value={readTime} />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default StandardArticleCard;
