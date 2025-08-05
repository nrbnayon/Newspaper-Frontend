import React from "react";
import { cn } from "@/lib/utils";

const NewsSection = ({ title, children, className }) => {
  return (
    <section className={cn(" md:mb-12 py-2 border-b border-black", className)}>
      {title && (
        <h2 className='text-xl font-bold mb-6 border-b border-gray-300 pb-2'>
          {title}
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
};

export default NewsSection;
