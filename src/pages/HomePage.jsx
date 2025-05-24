import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import NewsCard from "@/components/news/NewsCard";
import FeaturedArticleCard from "@/components/FeaturedArticleCard";
import StandardArticleCard from "@/components/StandardArticleCard";
import AudioNewsCard from "@/components/AudioNewsCard";
import LiveUpdateCard from "@/components/LiveUpdateCard";
import LongReadArticleCard from "@/components/LongReadArticleCard";
import AdvertisementBox from "@/components/AdvertisementBox";
import NewsGrid from "@/components/NewsGrid";
import NewsSection from "@/components/NewsSection";
import {
  audioNews,
  featuredArticle,
  liveUpdate,
  longReadArticle,
} from "@/data/sampleArticles";

const sampleArticles = [
  {
    id: 1,
    title: "Tech Innovation Drives Market Growth",
    excerpt:
      "Latest developments in artificial intelligence and machine learning are reshaping the technology landscape...",
    category: "Technology",
    readTime: 3,
    date: "2 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Climate Change Summit Reaches Agreement",
    excerpt:
      "World leaders gather to discuss sustainable solutions and environmental policies for the future...",
    category: "Environment",
    readTime: 5,
    date: "4 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Economic Outlook Shows Positive Trends",
    excerpt:
      "Financial experts predict steady growth in the coming quarters based on recent market indicators...",
    category: "Business",
    readTime: 4,
    date: "6 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Healthcare Breakthrough in Gene Therapy",
    excerpt:
      "Researchers announce significant progress in treating genetic disorders through innovative therapies...",
    category: "Health",
    readTime: 6,
    date: "8 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function HomePage() {
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
        <Navbar />

        {/* <div className="w-full py-8">
          <NewsSection>
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="flex-1">
                <FeaturedArticleCard article={featuredArticle} />
              </div>

              <div className="hidden md:block w-px bg-gray-300 min-h-full"></div>

              <div className="md:w-80">
                <AdvertisementBox />
              </div>
            </div>
          </NewsSection>

          <NewsSection>
            <AudioNewsCard {...audioNews} />
          </NewsSection>

          <NewsSection>
            <LongReadArticleCard {...longReadArticle} />
          </NewsSection>

          <NewsSection>
            <LiveUpdateCard {...liveUpdate} />
          </NewsSection>

          <NewsSection title="Latest News">
            <NewsGrid columns={4}>
              {sampleArticles.map((article) => (
                <StandardArticleCard key={article.id} article={article} />
              ))}
            </NewsGrid>
          </NewsSection>
        </div> */}

        <main className="w-full py-8">
          {/* Featured Article Section */}
          <div className="flex gap-6 mb-12">
            {/* Featured Article - Takes up most width */}
            <div className="flex-1">
              <FeaturedArticleCard article={featuredArticle} />
              {/* Audio News Section */}
              <NewsSection>
                <AudioNewsCard {...audioNews} />
              </NewsSection>

              {/* Long Read Article */}
              <NewsSection>
                <LongReadArticleCard {...longReadArticle} />
              </NewsSection>

              {/* Live Updates Section */}
              <NewsSection>
                <LiveUpdateCard {...liveUpdate} />
              </NewsSection>

              {/* Latest News Grid */}
              <NewsSection title="Latest News">
                <NewsGrid columns={4}>
                  {sampleArticles.map((article) => (
                    <StandardArticleCard key={article.id} article={article} />
                  ))}
                </NewsGrid>
              </NewsSection>
              {/* <NewsCard featured={true} /> */}
            </div>

            {/* Vertical Separator */}
            <div className="w-px bg-gray-300 min-h-full"></div>

            {/* Advertisement Area */}
            <div className="w-80 bg-gray-200 rounded-lg p-6 flex flex-col items-center justify-center min-h-[400px]">
              <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
                Advertisement Area
              </h3>
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 text-sm">Ad Space</span>
              </div>
            </div>
          </div>

          {/* Other Articles Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Latest News
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
