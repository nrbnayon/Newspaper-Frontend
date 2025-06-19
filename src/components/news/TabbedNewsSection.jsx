// Updated TabbedNewsSection with reactions support
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import StandardArticleCard from "./StandardArticleCard";
import { tabsConfig, tabsData } from "@/data/sampleArticles";

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
  newsReactions = {}, // Rename to newsReactions, default to empty object
  onPostLove,
  onPostComment,
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
                    reactions={newsReactions[article.id] || []} // Use newsReactions with article ID
                    onPostLove={(loveStatus) => onPostLove(article.id, loveStatus)}
                    onPostComment={(commentText) => onPostComment(article.id, commentText)}
                    className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  />
                ))}
              </NewsGrid>
              {articles.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">No articles available for this section.</p>
                  <p className="text-sm mt-2">Please check back later for updates.</p>
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
