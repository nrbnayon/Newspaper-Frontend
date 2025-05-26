// src/components/news/ListedNewsSection.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import StandardArticleCard from "./StandardArticleCard";

// Sample data for different tabs - This will come from database/API in future
const tabsData = {
  israelHamasWar: [
    {
      id: 1,
      title: "Israel-Hamas War: Complete Coverage",
      excerpt:
        "Comprehensive coverage of the ongoing conflict with latest developments...",
      category: "War Coverage",
      readTime: 8,
      date: "15 minutes ago",
      image: "/fn1.png",
      badge: "Breaking",
    },
    {
      id: 2,
      title: "International Response Analysis",
      excerpt:
        "How world leaders are responding to the escalating situation...",
      category: "International",
      readTime: 6,
      date: "45 minutes ago",
      image: "/fn2.png",
      badge: "Analysis",
    },
    {
      id: 3,
      title: "Civilian Impact Assessment",
      excerpt:
        "Understanding the humanitarian crisis and civilian casualties...",
      category: "Humanitarian",
      readTime: 7,
      date: "1 hour ago",
      image: "/fn3.png",
      badge: "Critical",
    },
    {
      id: 4,
      title: "Military Operations Update",
      excerpt: "Latest military developments and strategic movements...",
      category: "Military",
      readTime: 5,
      date: "2 hours ago",
      image: "/fn4.png",
      badge: "Update",
    },
  ],
  updates: [
    {
      id: 5,
      title: "Latest Updates on Israel-Hamas Conflict",
      excerpt: "Breaking news and developments from the ongoing situation...",
      category: "Breaking News",
      readTime: 5,
      date: "30 minutes ago",
      image: "/fn1.png",
      badge: "Live",
    },
    {
      id: 6,
      title: "Diplomatic Efforts Continue",
      excerpt: "International leaders work toward ceasefire negotiations...",
      category: "Politics",
      readTime: 4,
      date: "1 hour ago",
      image: "/fn2.png",
      badge: "Urgent",
    },
    {
      id: 7,
      title: "Humanitarian Aid Distribution",
      excerpt: "Relief efforts reach affected areas...",
      category: "Humanitarian",
      readTime: 3,
      date: "2 hours ago",
      image: "/fn3.png",
      badge: "Update",
    },
    {
      id: 8,
      title: "Security Council Meeting",
      excerpt: "UN discusses resolution proposals...",
      category: "International",
      readTime: 6,
      date: "3 hours ago",
      image: "/fn4.png",
      badge: "Official",
    },
  ],
  whatWeKnow: [
    {
      id: 9,
      title: "Timeline of Recent Events",
      excerpt: "Comprehensive overview of key developments...",
      category: "Analysis",
      readTime: 8,
      date: "4 hours ago",
      image: "/fn5.png",
      badge: "Complete",
    },
    {
      id: 10,
      title: "Key Players and Positions",
      excerpt: "Understanding the main parties involved...",
      category: "Analysis",
      readTime: 7,
      date: "5 hours ago",
      image: "/fn1.png",
      badge: "Detailed",
    },
    {
      id: 11,
      title: "Historical Context",
      excerpt: "Background information to understand current events...",
      category: "Background",
      readTime: 10,
      date: "6 hours ago",
      image: "/fn2.png",
      badge: "Essential",
    },
    {
      id: 12,
      title: "Regional Analysis",
      excerpt: "Understanding regional implications and effects...",
      category: "Regional",
      readTime: 6,
      date: "7 hours ago",
      image: "/fn3.png",
      badge: "Important",
    },
  ],
  maps: [
    {
      id: 13,
      title: "Regional Map Overview",
      excerpt: "Interactive maps showing affected areas...",
      category: "Geographic",
      readTime: 2,
      date: "1 hour ago",
      image: "/fn3.png",
      badge: "Interactive",
    },
    {
      id: 14,
      title: "Strategic Locations",
      excerpt: "Key points of interest in the conflict zone...",
      category: "Strategic",
      readTime: 4,
      date: "3 hours ago",
      image: "/fn4.png",
      badge: "Important",
    },
    {
      id: 15,
      title: "Border Areas Analysis",
      excerpt: "Detailed view of border regions and checkpoints...",
      category: "Border",
      readTime: 5,
      date: "4 hours ago",
      image: "/fn5.png",
      badge: "Detailed",
    },
    {
      id: 16,
      title: "Population Centers",
      excerpt: "Major cities and population centers in the region...",
      category: "Demographics",
      readTime: 3,
      date: "5 hours ago",
      image: "/fn1.png",
      badge: "Reference",
    },
  ],
  photos: [
    {
      id: 17,
      title: "Photo Gallery: Recent Events",
      excerpt: "Visual documentation of recent developments...",
      category: "Photography",
      readTime: 5,
      date: "2 hours ago",
      image: "/fn5.png",
      badge: "Gallery",
    },
    {
      id: 18,
      title: "Before and After Images",
      excerpt: "Satellite imagery showing changes over time...",
      category: "Documentation",
      readTime: 3,
      date: "4 hours ago",
      image: "/fn1.png",
      badge: "Comparison",
    },
    {
      id: 19,
      title: "Ground Reports in Pictures",
      excerpt: "On-ground photography from conflict areas...",
      category: "Field Reports",
      readTime: 4,
      date: "6 hours ago",
      image: "/fn2.png",
      badge: "Exclusive",
    },
    {
      id: 20,
      title: "Humanitarian Crisis Images",
      excerpt: "Visual documentation of humanitarian impact...",
      category: "Humanitarian",
      readTime: 6,
      date: "8 hours ago",
      image: "/fn3.png",
      badge: "Critical",
    },
  ],
  tunnels: [
    {
      id: 21,
      title: "Underground Infrastructure",
      excerpt: "Investigation into tunnel networks...",
      category: "Investigation",
      readTime: 7,
      date: "5 hours ago",
      image: "/fn2.png",
      badge: "Exclusive",
    },
    {
      id: 22,
      title: "Security Implications",
      excerpt: "Analysis of underground threats...",
      category: "Security",
      readTime: 6,
      date: "6 hours ago",
      image: "/fn3.png",
      badge: "Analysis",
    },
    {
      id: 23,
      title: "Construction Methods",
      excerpt: "How these underground networks are built...",
      category: "Technical",
      readTime: 8,
      date: "8 hours ago",
      image: "/fn4.png",
      badge: "Technical",
    },
    {
      id: 24,
      title: "Detection Technologies",
      excerpt: "Methods used to detect underground tunnels...",
      category: "Technology",
      readTime: 5,
      date: "10 hours ago",
      image: "/fn5.png",
      badge: "Innovation",
    },
  ],
  oneImage: [
    {
      id: 25,
      title: "The Story in One Image",
      excerpt: "Powerful photography that captures the moment...",
      category: "Photo Story",
      readTime: 2,
      date: "1 hour ago",
      image: "/fn4.png",
      badge: "Featured",
    },
    {
      id: 26,
      title: "Iconic Moment Captured",
      excerpt: "Single frame that tells the entire story...",
      category: "Iconic",
      readTime: 3,
      date: "3 hours ago",
      image: "/fn1.png",
      badge: "Powerful",
    },
    {
      id: 27,
      title: "Symbolic Representation",
      excerpt: "Image that represents the broader conflict...",
      category: "Symbolic",
      readTime: 4,
      date: "5 hours ago",
      image: "/fn2.png",
      badge: "Symbolic",
    },
    {
      id: 28,
      title: "Historical Moment",
      excerpt: "Capturing history as it unfolds...",
      category: "Historical",
      readTime: 3,
      date: "7 hours ago",
      image: "/fn3.png",
      badge: "Historic",
    },
  ],
};

// Dynamic tab configuration - This structure will come from your database/API
const tabsConfig = [
  {
    key: "israelHamasWar",
    label: "Israel-Hamas War",
    isDefault: true,
  },
  {
    key: "updates",
    label: "Updates",
  },
  {
    key: "whatWeKnow",
    label: "What We Know",
  },
  {
    key: "maps",
    label: "Maps",
  },
  {
    key: "photos",
    label: "Photos",
  },
  {
    key: "tunnels",
    label: "The Tunnels of Gaza",
  },
  {
    key: "oneImage",
    label: "The War in One Image",
  },
];

// Responsive grid configuration
const getResponsiveGridProps = (articles) => {
  const articleCount = articles?.length || 0;

  // Default to 4 columns as requested, but make it responsive
  return {
    columns: 4,
    gap: 4,
    // You can customize based on article count if needed
    // For example: articleCount <= 2 ? 2 : 4
  };
};

const ListedNewsSection = ({
  className,
  dynamicTabsData,
  dynamicTabsConfig,
}) => {
  // Use dynamic data if provided, otherwise fall back to sample data
  const activeTabsData = dynamicTabsData || tabsData;
  const activeTabsConfig = dynamicTabsConfig || tabsConfig;

  // Find default tab or use first tab
  const defaultTab =
    activeTabsConfig.find((tab) => tab.isDefault)?.key ||
    activeTabsConfig[0]?.key;

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Tab Navigation - Clean design matching the image */}
        <div className="w-full mb-8">
          <TabsList className="flex items-center justify-start gap-2 md:gap-8 p-0 bg-transparent border-none h-auto">
            {activeTabsConfig.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="px-2 py-1 text-base font-normal focus-visible:border-none focus-visible:outline-0 !shadow-none data-[state=active]:!shadow-none text-gray-600 bg-transparent border-none hover:text-black data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:font-bold transition-all duration-200 whitespace-nowrap"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* Dynamic Tab Content - All with consistent 4-column responsive grid */}
        {activeTabsConfig.map((tab) => {
          const articles = activeTabsData[tab.key] || [];
          const gridProps = getResponsiveGridProps(articles);

          return (
            <TabsContent key={tab.key} value={tab.key} className="mt-0">
              <NewsGrid
                columns={gridProps.columns}
                gap={gridProps.gap}
                className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
              >
                {articles.map((article) => (
                  <StandardArticleCard
                    key={article.id}
                    article={article}
                    className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  />
                ))}
              </NewsGrid>

              {/* Show message if no articles */}
              {articles.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">
                    No articles available for this section.
                  </p>
                  <p className="text-sm mt-2">
                    Please check back later for updates.
                  </p>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default ListedNewsSection;

// Example usage with dynamic data:
/*
// In your parent component, you can pass dynamic data like this:

const dynamicTabsFromAPI = [
  {
    key: "breaking",
    label: "Breaking News",
    isDefault: true,
  },
  {
    key: "analysis", 
    label: "Analysis",
  },
  // ... more tabs from your API
];

const dynamicArticlesFromAPI = {
  breaking: [
    // articles from your database
  ],
  analysis: [
    // articles from your database  
  ],
};

<ListedNewsSection 
  dynamicTabsData={dynamicArticlesFromAPI}
  dynamicTabsConfig={dynamicTabsFromAPI}
  className="container mx-auto px-4"
/>
*/
