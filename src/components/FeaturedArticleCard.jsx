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

  console.log("FeaturedArticleCard article:", article?.imageAttribution);

  return (
    <div className={cn("overflow-hidden pb-8", className)}>
      <div
        className={cn(
          isHorizontal
            ? "flex justify-between items-start gap-10"
            : "flex flex-col"
        )}
      >
        {/* Content */}
        <div className="w-1/4 flex flex-col justify-center">
          <SentimentBadge
            sentiment={article.sentiment}
            className="mb-4 w-full"
          />

          <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {article.excerpt}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {article.content}
          </p>
          <TimeIndicator
            type="readTime"
            value={article.readTime}
            className="text-sm"
          />
        </div>

        {/* Image */}
        <div className="w-3/4 ">
          <div className="flex items-center justify-end ">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between mt-3">
            <div>
              <InteractionButtons />
            </div>
            {article.imageAttribution && (
              <div className="text-xs px-2 py-1">
                {article.imageAttribution}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticleCard;
