import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import StandardArticleCard from "./StandardArticleCard";
import { tabsConfig, tabsData } from "@/data/sampleArticles";

// const tabsCardData = {
//   featured: [
//     {
//       id: 1,
//       title: "Herby Bread-and-Butter Stuffing for Two",
//       description:
//         "Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center...",
//       category: "Featured Recipe",
//       publishedTime: "2 hours ago",
//       publishedDateTime: null,
//       image: "/fn1.png",
//       sentiment: "Negative",
//       isFeatured: true,
//       imageAttribution: null,
//       readTime: 3,
//     },
//     {
//       id: 2,
//       title: "Simple Bread-Pudding",
//       description:
//         "Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center...",
//       category: "Featured Recipe",
//       publishedTime: "3 hours ago",
//       publishedDateTime: null,
//       image: "/fn2.png",
//       sentiment: "Negative",
//       isFeatured: true,
//       imageAttribution: null,
//       readTime: 4,
//     },
//     {
//       id: 3,
//       title: "Turkey Gravy",
//       description:
//         "Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center...",
//       category: "Featured Recipe",
//       publishedTime: "4 hours ago",
//       publishedDateTime: null,
//       image: "/fn3.png",
//       sentiment: "Negative",
//       isFeatured: true,
//       imageAttribution: null,
//       readTime: 2,
//     },
//     {
//       id: 4,
//       title: "Thanksgiving Stuffing",
//       description:
//         "Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center...",
//       category: "Featured Recipe",
//       publishedTime: "5 hours ago",
//       publishedDateTime: null,
//       image: "/fn4.png",
//       sentiment: "Negative",
//       isFeatured: true,
//       imageAttribution: null,
//       readTime: 5,
//     },
//   ],
//   bestSides: [
//     {
//       id: 6,
//       title: "Roasted Brussels Sprouts with Bacon",
//       description: "Crispy sprouts with smoky bacon bits...",
//       category: "Side Dish",
//       publishedTime: "1 hour ago",
//       publishedDateTime: null,
//       image: "/fn5.png",
//       sentiment: "Popular",
//       isFeatured: false,
//       imageAttribution: null,
//       readTime: 3,
//     },
//     // ... other items updated similarly
//   ],
//   makeAhead: [
//     {
//       id: 10,
//       title: "Make-Ahead Turkey Brine",
//       description:
//         "Prepare your turkey days in advance with this flavorful brine... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center...",
//       category: "Prep Ahead",
//       publishedTime: "12 hours ago",
//       publishedDateTime: null,
//       image: "/fn4.png",
//       sentiment: "Time Saver",
//       isFeatured: false,
//       imageAttribution: null,
//       readTime: 1,
//     },
//     // ... other items updated similarly
//   ],
//   stunningDesserts: [
//     {
//       id: 13,
//       title: "Chocolate Lava Cake",
//       description:
//         "Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center... Decadent chocolate cake with molten center...",
//       category: "Dessert",
//       publishedTime: "30 minutes ago",
//       publishedDateTime: null,
//       image: "/fn2.png",
//       sentiment: "Showstopper",
//       isFeatured: false,
//       imageAttribution: null,
//       readTime: 4,
//     },
//     // ... other items updated similarly
//   ],
// };

// const tabsConfig = [
//   { key: "featured", label: "Featured", isDefault: true, columns: 4, gap: 4 },
//   { key: "bestSides", label: "Best Sides", columns: 4, gap: 4 },
//   { key: "makeAhead", label: "Make-Ahead", columns: 3, gap: 6 },
//   { key: "stunningDesserts", label: "Stunning Desserts", columns: 4, gap: 4 },
// ];

const getResponsiveClasses = (columns) => {
  const baseClasses = "grid gap-2 md:gap-4";
  switch (columns) {
    case 2:
      return `${baseClasses} grid-cols-1 sm:grid-cols-2`;
    case 3:
      return `${baseClasses} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`;
    case 4:
    default:
      return `${baseClasses} grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
  }
};

const TabbedNewsSection = ({
  className,
  dynamicTabsData,
  dynamicTabsConfig,
}) => {
  const activeTabsData = dynamicTabsData || tabsData;
  const activeTabsConfig = dynamicTabsConfig || tabsConfig;
  const defaultTab =
    activeTabsConfig.find((tab) => tab.isDefault)?.key ||
    activeTabsConfig[0]?.key;

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="flex gap-2 items-center mb-8 p-1 bg-transparent md:mx-auto overflow-x-auto">
          {activeTabsConfig.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="data-[state=active]:h-11 cursor-pointer rounded-md data-[state=active]:py-3 data-[state=active]:px-4 text-custom-gray data-[state=active]:text-black data-[state=active]:font-bold data-[state=active]:bg-[#F2F2F2] hover:text-black whitespace-nowrap"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {activeTabsConfig.map((tab) => {
          const articles = activeTabsData[tab.key] || [];
          const gridClasses = getResponsiveClasses(tab.columns || 4);

          return (
            <TabsContent key={tab.key} value={tab.key} className="mt-0">
              <NewsGrid
                columns={tab.columns || 4}
                gap={tab.gap || 4}
                className={gridClasses}
              >
                {articles.map((article) => (
                  <StandardArticleCard
                    key={article.id}
                    article={article}
                    className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  />
                ))}
              </NewsGrid>
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

export default TabbedNewsSection;
