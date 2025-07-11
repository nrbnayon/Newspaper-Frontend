  // Updated ListedNewsSection with reactions support
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
  import NewsGrid from "./NewsGrid";
  import StandardArticleCard from "./StandardArticleCard";
  import { tabsConfig, tabsData } from "@/data/sampleArticles";

  // Responsive grid configuration
  const getResponsiveGridProps = (articles) => {
    const articleCount = articles?.length || 0;
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
    newsReactions = {}, 
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
          <TabsList className="flex items-center justify-start gap-2 md:gap-8 p-0 bg-transparent border-none h-auto overflow-x-auto">
            {activeTabsConfig.map((tab) => (
              <TabsTrigger
                key={tab.key}
                value={tab.key}
                className="px-2 py-1 cursor-pointer text-base font-normal focus-visible:border-none focus-visible:outline-0 !shadow-none data-[state=active]:!shadow-none text-gray-600 bg-transparent border-none hover:text-black data-[state=active]:bg-transparent data-[state=active]:text-black data-[state=active]:font-bold transition-all duration-200 whitespace-nowrap"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {activeTabsConfig.map((tab) => {
            const articles = activeTabsData[tab.key] || [];
            const gridProps = getResponsiveGridProps(articles);

            return (
              <TabsContent key={tab.key} value={tab.key} className="mt-0">
                <NewsGrid
                  columns={gridProps.columns}
                  gap={gridProps.gap}
                  className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                  {articles.map((article) => (
                    <StandardArticleCard
                      key={article.id}
                      article={article}
                      reactions={newsReactions[article.id] || []} // Use newsReactions with article ID
                      onPostLove={(loveStatus) =>
                        onPostLove(article.id, loveStatus)
                      }
                      onPostComment={(commentText) =>
                        onPostComment(article.id, commentText)
                      }
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

  export default ListedNewsSection;
