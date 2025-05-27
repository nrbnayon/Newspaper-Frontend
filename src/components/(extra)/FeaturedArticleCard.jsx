import SentimentBadge from "./common/SentimentBadge";
import TimeIndicator from "./common/TimeIndicator";
import InteractionButtons from "./common/InteractionButtons";
import { cn } from "@/lib/utils";
import ImageAttribution from "./common/ImageAttribution";

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
            className='mb-3 sm:mb-4 w-full'
          />

          <h1 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight'>
            {article.title}
          </h1>

          <p className='text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed'>
            {article.excerpt}
          </p>

          <p className='text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed'>
            {article.content}
          </p>

          <TimeIndicator
            type='readTime'
            value={article.readTime}
            className='text-xs sm:text-sm'
          />
        </div>

        {/* Image Section */}
        <div className='relative order-1 md:order-2 md:w-2/3 flex flex-col items-end'>
          <div className='relative overflow-hidden rounded-lg sm:rounded-none flex justify-end items-center'>
            <img
              src={article.image}
              alt={article.title}
              className='w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] object-cover transition-transform duration-300 hover:scale-105'
              loading='lazy'
            />
          </div>

          <div className='w-full flex justify-between items-center mt-2 sm:mt-3'>
            <div>
              <InteractionButtons />
            </div>
            <div>
              <ImageAttribution
                attribution={article?.imageAttribution}
                className=' mb-1 text-xs sm:text-sm'
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticleCard;
