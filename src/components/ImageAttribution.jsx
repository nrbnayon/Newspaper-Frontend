import { cn } from "@/lib/utils";

const ImageAttribution = ({ attribution, className }) => {
  if (!attribution) return null;

  return (
    <div className={cn("text-xs text-gray-500 mt-1", className)}>
      {attribution}
    </div>
  );
};

export default ImageAttribution;
