// src\pages\HomePage.jsx
import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import StandardArticleCard from "@/components/news/StandardArticleCard";
import AudioNewsCard from "@/components/news/AudioNewsCard";
import LiveUpdateCard from "@/components/news/LiveUpdateCard";
import NewsSection from "@/components/news/NewsSection";
import TabbedNewsSection from "@/components/news/TabbedNewsSection";
import {
  audioNews,
  featuredArticle,
  liveUpdate,
  longReadArticle,
} from "@/data/sampleArticles";
import CommonNewsCard from "@/components/news/CommonNewsCard";
import ListedNewsSection from "@/components/news/ListedNewsSection";
import { FooterSection } from "@/components/footer/FooterSection";
import { useAuth } from "@/contexts/AuthContext";
import { formatNewsItem, getAllNews } from "@/lib/news-service";

const sampleArticles = [
  {
    id: 1,
    title: "Tech Innovation Drives Market Growth",
    content:
      "Latest developments in artificial intelligence and machine learning are reshaping the technology landscape...",
    category: "Technology",
    readTime: 3,
    date: "2 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Climate Change Summit Reaches Agreement",
    content:
      "World leaders gather to discuss sustainable solutions and environmental policies for the future...",
    category: "Environment",
    readTime: 5,
    date: "4 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Economic Outlook Shows Positive Trends",
    content:
      "Financial experts predict steady growth in the coming quarters based on recent market indicators...",
    category: "Business",
    readTime: 4,
    date: "6 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Healthcare Breakthrough in Gene Therapy",
    content:
      "Researchers announce significant progress in treating genetic disorders through innovative therapies...",
    category: "Health",
    readTime: 6,
    date: "8 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Healthcare Breakthrough in Gene Therapy",
    content:
      "Researchers announce significant progress in treating genetic disorders through innovative therapies...",
    category: "Health",
    readTime: 6,
    date: "8 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "Healthcare Breakthrough in Gene Therapy",
    content:
      "Researchers announce significant progress in treating genetic disorders through innovative therapies...",
    category: "Health",
    readTime: 6,
    date: "8 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function HomePage() {
  const footerRef = useRef(null);

  const { isLoggedIn } = useAuth();

  // API-related states
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [regularArticles, setRegularArticles] = useState([]);

  useEffect(() => {
    loadNewsArticles();
  }, []);

  const loadNewsArticles = async () => {
    try {
      setLoading(true);
      setError(null);

      const newsData = await getAllNews();

      if (newsData && newsData.length > 0) {
        // Format news items for component consumption
        const formattedNews = newsData.map(formatNewsItem);

        setNewsArticles(formattedNews);

        // Set featured article (first one) and regular articles (rest)
        setFeaturedArticle(formattedNews[0]);
        setRegularArticles(formattedNews.slice(1));
      }
    } catch (err) {
      console.error("Failed to load news articles:", err);
      setError(err.message);

      // Fallback to sample data if API fails
      const fallbackFeatured = {
        id: "featured",
        title: "Welcome to ALAMOCITYPULSE",
        content:
          "Stay informed with the latest news and updates. Our comprehensive coverage keeps you connected to what matters most in your community and beyond.",
        image:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
        imageAttribution: "Photo by Author Name",
        readTime: 5,
        sentiment: "positive",
        isFeatured: true,
        category: "News",
        publishedTime: "Just now",
      };

      setFeaturedArticle(fallbackFeatured);
      setRegularArticles(
        sampleArticles.slice(0, 3).map((article) =>
          formatNewsItem({
            id: article.id,
            title: article.title,
            description: article.content,
            category: article.category,
            published_relative_time: article.date,
            published_datetime: new Date().toISOString(),
            image:
              "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
            badge_status: "neutral",
          })
        )
      );
    } finally {
      setLoading(false);
    }
  };

  // Function to scroll to footer
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Listen for custom event from Navbar
  useEffect(() => {
    const handleScrollToAbout = () => {
      scrollToFooter();
    };

    window.addEventListener("scrollToAbout", handleScrollToAbout);

    return () => {
      window.removeEventListener("scrollToAbout", handleScrollToAbout);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>ALAMOCITYPULSE - Latest News and Updates</title>
        <meta
          name="description"
          content="Stay informed with the latest news, breaking stories, and in-depth analysis from ALAMOCITYPULSE"
        />
      </Helmet>

      <div className="min-h-screen">
        <Navbar onScrollToAbout={scrollToFooter} />

        {/* Add top padding to account for fixed navbar */}
        <main className="w-full py-4 mt-10 sm:py-8 pt-[200px] md:pt-[180px] lg:pt-[160px]">
          <div className="">
            {loading && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading latest news...</p>
              </div>
            )}

            {/* Main Layout - Responsive Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12">
              {/* Main Content Area */}
              <div className="w-full">
                {/* Featured Article Section */}
                <div className="mb-8">
                  <CommonNewsCard article={featuredArticle} />
                </div>

                {/* Audio News Section */}
                <div className="mb-8">
                  <AudioNewsCard {...audioNews} />
                </div>

                {/* Long Read Article */}
                <NewsSection>
                  <CommonNewsCard article={longReadArticle} />
                </NewsSection>

                {/* Live Updates Section */}
                <NewsSection>
                  <LiveUpdateCard updates={liveUpdate} />
                </NewsSection>

                {/* Tabbed News Section */}
                <div className="mb-8">
                  <TabbedNewsSection />
                </div>

                {/* Long Read Article */}
                <NewsSection>
                  <CommonNewsCard article={regularArticles} />
                </NewsSection>
                {/* Long Read Article */}
                <NewsSection>
                  <CommonNewsCard article={longReadArticle} />
                </NewsSection>

                {/* Live Updates Section */}
                <NewsSection>
                  <LiveUpdateCard updates={liveUpdate} />
                </NewsSection>

                {/* Listed News Section */}
                <div className="mb-8">
                  <ListedNewsSection />
                </div>

                <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">
                    Bottom Advertise Space
                  </span>
                </div>
              </div>

              {/* Vertical Separator - Only visible on xl screens */}
              <div className="hidden  w-px bg-gray-300 min-h-full"></div>

              {/* Sidebar - Advertisement Area */}
              <aside className="w-full xl:w-full">
                {/* First Ad Block - Mobile/Tablet */}
                <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">Top Ad Space</span>
                </div>

                {/* Trending Articles - First Set */}
                <div className="xl:hidden w-full mb-6">
                  <h4 className="text-md font-semibold text-gray-700 mb-4">
                    Trending Now
                  </h4>
                  <div className="space-y-4">
                    {sampleArticles.slice(0, 3).map((article) => (
                      <div key={article.id} className="w-full">
                        <StandardArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Second Ad Block - Mobile/Tablet */}
                <div className="xl:hidden w-full h-28 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">Mid Ad Space</span>
                </div>

                {/* Trending Articles - Second Set */}
                <div className="xl:hidden w-full mb-6">
                  <div className="space-y-4">
                    {sampleArticles.slice(3, 6).map((article) => (
                      <div key={article.id} className="w-full">
                        <StandardArticleCard article={article} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Third Ad Block - Mobile/Tablet */}
                <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-8">
                  <span className="text-gray-600 text-sm">Bottom Ad Space</span>
                </div>

                {/* Desktop Sidebar Layout */}
                <div className="xl:block bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
                    Advertisement Area
                  </h3>

                  {/* Top Ad in Sidebar */}
                  <div className="w-full h-48 sm:h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-gray-600 text-sm">
                      Sidebar Top Ad
                    </span>
                  </div>

                  {/* Sidebar News Articles */}
                  <div className="w-full">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">
                      Trending Now
                    </h4>
                    <div className="space-y-4">
                      {sampleArticles.slice(0, 3).map((article) => (
                        <div key={article.id} className="w-full">
                          <StandardArticleCard article={article} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Middle Ad in Sidebar */}
                  <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center my-6">
                    <span className="text-gray-600 text-sm">
                      Sidebar Mid Ad
                    </span>
                  </div>

                  {/* More Sidebar News Articles */}
                  <div className="w-full">
                    <div className="space-y-4">
                      {sampleArticles.slice(3, 6).map((article) => (
                        <div key={article.id} className="w-full">
                          <StandardArticleCard article={article} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Ad in Sidebar */}
                  <div className="w-full h-32 sm:h-48 bg-gray-300 rounded-lg flex items-center justify-center mt-6">
                    <span className="text-gray-600 text-sm">
                      Sidebar Bottom Ad
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </main>

        {/* Footer with ref */}
        <div ref={footerRef}>
          <FooterSection />
        </div>
      </div>
    </>
  );
}
