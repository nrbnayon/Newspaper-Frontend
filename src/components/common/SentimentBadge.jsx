import { cn } from "@/lib/utils";

const SentimentBadge = ({ sentiment, className }) => {
  const badgeStyles = {
    positive: "bg-green-600 text-white",
    negative: "bg-custom-red text-white",
    neutral: "bg-gray-100 text-gray-700",
  };

  const normalizedSentiment =
    sentiment.charAt(0).toUpperCase() + sentiment.slice(1).toLowerCase();

  const style =
    badgeStyles[normalizedSentiment.toLowerCase()] || badgeStyles.neutral;

  return (
    <div
      className={cn(
        `inline-block px-3 py-1 text-sm font-medium w-fit`,
        style,
        className
      )}
    >
      {normalizedSentiment}
    </div>
  );
};

export default SentimentBadge;
