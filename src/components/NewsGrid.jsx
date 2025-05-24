import React from "react";
import { cn } from "@/lib/utils";

const NewsGrid = ({ children, className, columns = 2, gap = 6 }) => {
  return (
    <div
      className={cn(
        `grid grid-cols-1 md:grid-cols-${columns} gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default NewsGrid;
