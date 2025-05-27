import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Home, Search, Clock, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found - ALAMOCITYPULSE Newspaper</title>
        <meta
          name="description"
          content="The page you're looking for couldn't be found. Return to ALAMOCITYPULSE homepage for the latest news."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Animated 404 Header */}
          <div className="relative">
            <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-orange-500 animate-pulse">
              404
            </div>
            <div className="absolute inset-0 text-8xl md:text-9xl font-black text-red-100 -z-10 blur-sm">
              404
            </div>
          </div>

          {/* Newspaper-themed messaging */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Story Not Found
            </h1>
            <div className="border-l-4 border-red-500 pl-4 text-left max-w-md mx-auto">
              <p className="text-lg text-gray-700 font-medium mb-2">
                BREAKING: Page Goes Missing
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our newsroom has searched high and low, but the page you're
                looking for seems to have vanished without a trace. It might
                have been moved, deleted, or perhaps it never existed in our
                archives.
              </p>
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center justify-center gap-2">
              <Search className="h-5 w-5 text-red-500" />
              What You Can Do
            </h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Check if the URL is spelled correctly</span>
              </div>
              <div className="flex items-start gap-3">
                <Home className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>Visit our homepage for latest news</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => navigate("/")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              Return to Homepage
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </Button>
          </div>

          {/* Newspaper footer */}
          <div className="border-t border-gray-200 pt-6 text-gray-500 text-sm space-y-2">
            <p className="font-semibold text-red-600">ALAMOCITYPULSE</p>
            <p>Your trusted source for local news and community stories</p>
            <p className="text-xs">Error Code: 404 | Page Not Found</p>
          </div>
        </div>
      </div>
    </>
  );
}
