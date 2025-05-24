import SentimentBadge from "./SentimentBadge";
import TimeIndicator from "./TimeIndicator";
import InteractionButtons from "./InteractionButtons";
import { cn } from "@/lib/utils";

const FeaturedArticleCard = ({
  article = {
    title:
      "Microsoft Hires Sam Altman Hours After OpenAI Rejects His Return As C.E.O.",
    excerpt:
      "The tech giant said it was hiring Mr. Altman and Greg Brockman, OpenAI's former president, to lead an advanced research lab.",
    content:
      "A board member who was part of Sam Altman's ouster as chief executive joined a majority of the company's staff in calling for the decision's reversal.",
    sentiment: "Positive",
    readTime: 5,
    image: "/news1.png",
    imageAttribution: "Ruth Fremson/The New York Times",
  },
  className,
  layout = "horizontal", // horizontal or vertical
}) => {
  const isHorizontal = layout === "horizontal";

  return (
    <article className={cn("overflow-hidden pb-4 sm:pb-6 lg:pb-8", className)}>
      <div
        className={cn(
          "flex flex-col gap-4 sm:gap-6",
          isHorizontal && "lg:flex-row lg:items-start lg:gap-8 xl:gap-10"
        )}
      >
        {/* Content Section */}
        <div
          className={cn(
            "flex flex-col",
            isHorizontal ? "lg:w-2/5 xl:w-1/3" : "w-full"
          )}
        >
          <SentimentBadge
            sentiment={article.sentiment}
            className="mb-3 sm:mb-4 w-full"
          />

          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            {article.excerpt}
          </p>

          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            {article.content}
          </p>

          <TimeIndicator
            type="readTime"
            value={article.readTime}
            className="text-xs sm:text-sm"
          />
        </div>

        {/* Image Section */}
        <div
          className={cn(
            "flex flex-col",
            isHorizontal ? "lg:w-3/5 xl:w-2/3" : "w-full"
          )}
        >
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mt-3">
            <div className="order-2 sm:order-1">
              <InteractionButtons />
            </div>

            {article.imageAttribution && (
              <div className="order-1 sm:order-2 text-xs sm:text-sm text-gray-500 px-2 py-1 bg-gray-50 rounded">
                {article.imageAttribution}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticleCard;
