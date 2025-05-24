import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsCard({ article, featured = false }) {
  if (featured) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="inline-block bg-[#d4b896] text-[#8b4513] px-3 py-1 rounded text-sm font-medium mb-4 w-fit">
              Positive
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              Microsoft Hires Sam Altman Hours After OpenAI Rejects His Return
              As C.E.O.
            </h1>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The tech giant said it was hiring Mr. Altman and Greg Brockman,
              OpenAI's former president, to lead an advanced research lab.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              A board member who was part of Sam Altman's ouster as chief
              executive joined a majority of the company's staff in calling for
              the decision's reversal.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                  <Heart size={18} className="mr-2" />
                  Love
                </button>
                <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                  <MessageCircle size={18} className="mr-2" />
                  Comment
                </button>
              </div>
              <div className="text-sm text-gray-500">5 MIN READ</div>
            </div>
          </div>

          {/* Image */}
          <div className="relative bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-8">
              <div className="w-48 h-48 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-24 h-24 bg-gray-600 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm">Sam Altman</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              Ruth Fremson/The New York Times
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <img
        src={article.image || "/api/placeholder/300/200"}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium mb-2">
          {article.category}
        </div>
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{article.readTime} MIN READ</span>
          <span>{article.date}</span>
        </div>
      </div>
    </div>
  );
}