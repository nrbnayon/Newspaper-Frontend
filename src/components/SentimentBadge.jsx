import { cn } from "@/lib/utils";

const SentimentBadge = ({ sentiment, className }) => {
  const badgeStyles = {
    positive: "bg-[#d4b896] text-[#8b4513]",
    negative: "bg-[#c13d3d] text-white",
    neutral: "bg-gray-100 text-gray-700",
  };

  const style = badgeStyles[sentiment.toLowerCase()] || badgeStyles.neutral;

  return (
    <div
      className={cn(
        `inline-block px-3 py-1 rounded text-sm font-medium w-fit`,
        style,
        className
      )}
    >
      {sentiment}
    </div>
  );
};

export default SentimentBadge;
