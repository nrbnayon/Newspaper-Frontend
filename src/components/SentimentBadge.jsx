import { cn } from "@/lib/utils";

const SentimentBadge = ({ sentiment, className }) => {
  const badgeStyles = {
    positive: "bg-[#EADBC5] text-[#142337]",
    negative: "bg-custom-red text-white",
    neutral: "bg-gray-100 text-gray-700",
  };

  const style = badgeStyles[sentiment.toLowerCase()] || badgeStyles.neutral;

  return (
    <div
      className={cn(
        `inline-block px-3 py-1 text-sm font-medium w-fit`,
        style,
        className
      )}
    >
      {sentiment}
    </div>
  );
};

export default SentimentBadge;
