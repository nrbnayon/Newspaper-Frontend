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
    <div className={cn("rounded-lg overflow-hidden", className)}>
      <div
        className={cn(
          isHorizontal ? "grid md:grid-cols-3 gap-4" : "flex flex-col"
        )}
      >
        {/* Content */}
        <div className="flex flex-col justify-center grid-cols-1 ">
          <SentimentBadge sentiment={article.sentiment} className="mb-4" />

          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {article.excerpt}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {article.content}
          </p>

          <div className="flex items-center justify-between">
            <InteractionButtons />
            <TimeIndicator
              type="readTime"
              value={article.readTime}
              className="text-sm"
            />
          </div>
        </div>

        {/* Image */}
        <div className=" col-span-2 m-w-[592px] h-[400px] p-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />

          {article.imageAttribution && (
            <div className="absolute bottom-4 right-4 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              {article.imageAttribution}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
