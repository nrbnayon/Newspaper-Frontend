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
  } = article;

  const isHorizontal = imagePosition === "left" || imagePosition === "right";

  return (
    <div
      className={cn(
        "rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200",
        isHorizontal ? "flex" : "flex-col",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal ? "w-1/3 flex-shrink-0" : "w-full",
          imagePosition === "right" ? "order-2" : "order-1"
        )}
      >
        <img src={image} alt={title} className='w-full h-48 object-cover' />
      </div>

      <div
        className={cn(
          "p-4 flex flex-col",
          isHorizontal ? "w-2/3" : "w-full",
          imagePosition === "right" ? "order-1" : "order-2"
        )}
      >
        <div className='inline-block bg-custom-red text-white px-2 py-1.5 text-xs font-medium mb-2'>
          {category}
        </div>

        <h3 className='font-bold text-gray-900 mb-2 line-clamp-2'>{title}</h3>

        <div className="mb-2">
          <InteractionButtons />
        </div>
        {/* <p className='text-gray-600 text-sm mb-3 line-clamp-3'>{excerpt}</p> */}

        <div className='flex items-center justify-between text-xs text-gray-500 mt-auto'>
          <TimeIndicator type='readTime' value={readTime} />
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default StandardArticleCard;
