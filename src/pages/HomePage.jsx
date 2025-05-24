import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import NewsCard from "@/components/news/NewsCard";
import { Separator } from "@radix-ui/react-select";

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

      <div className="min-h-screen w-full">
        <Navbar />

        <main>
          {/* Featured Article */}
          <div className="w-full flex items-center justify-between p-4">
            <div className="w-4/5">
              <NewsCard featured={true} />
            </div>
            <Separator
              orientation="vertical"
              className="min-h-full mx-4 bg-red-800"
            />
            <div className="w-1/5 flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold mb-2">Advertisements Area</h3>
            </div>
          </div>

          {/* Other Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
