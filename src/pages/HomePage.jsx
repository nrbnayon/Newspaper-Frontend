

// src/pages/HomePage.jsx
import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import StandardArticleCard from "@/components/news/StandardArticleCard";
import AudioNewsCard from "@/components/news/AudioNewsCard";
import LiveUpdateCard from "@/components/news/LiveUpdateCard";
import NewsSection from "@/components/news/NewsSection";
import TabbedNewsSection from "@/components/news/TabbedNewsSection";
import CommonNewsCard from "@/components/news/CommonNewsCard";
import ListedNewsSection from "@/components/news/ListedNewsSection";
import { FooterSection } from "@/components/footer/FooterSection";
import { getAllNews, formatNewsItem } from "@/lib/news-service";
import { getNewsReactions, postNewsReaction } from "@/lib/news-service";
import { useAuth } from "@/contexts/AuthContext";

export default function HomePage() {
  const footerRef = useRef(null);
  const { user } = useAuth();
  const [newsData, setNewsData] = useState({
    allNews: [],
    featuredArticle: null,
    audioNews: null,
    liveUpdates: [],
    longReadArticle: null,
    sidebarArticles: [],
    tabsData: {},
    loading: true,
    error: null,
  });

  // Store reactions for each news article
  const [newsReactions, setNewsReactions] = useState({});
  const [loadingReactions, setLoadingReactions] = useState({});

  // Fetch reactions for a specific news article
  const fetchNewsReactions = async (newsId) => {
    if (loadingReactions[newsId]) return;

    try {
      setLoadingReactions((prev) => ({ ...prev, [newsId]: true }));
      const reactions = await getNewsReactions(newsId);
      setNewsReactions((prev) => ({
        ...prev,
        [newsId]: reactions,
      }));
    } catch (error) {
      console.error(`Failed to fetch reactions for news ${newsId}:`, error);
    } finally {
      setLoadingReactions((prev) => ({ ...prev, [newsId]: false }));
    }
  };

  // Handle posting new reactions
  const handlePostReaction = async (newsId, reactionData) => {
    try {
      const newReaction = await postNewsReaction(newsId, reactionData);

      // Update reactions in state
      setNewsReactions((prev) => ({
        ...prev,
        [newsId]: prev[newsId] ? [...prev[newsId], newReaction] : [newReaction],
      }));

      return newReaction;
    } catch (error) {
      console.error(`Failed to post reaction for news ${newsId}:`, error);
      throw error;
    }
  };

  // Fetch reactions for all visible news articles
  const fetchAllReactions = async (articles) => {
    const promises = articles.map((article) =>
      fetchNewsReactions(article.id).catch((err) =>
        console.warn(
          `Failed to fetch reactions for article ${article.id}:`,
          err
        )
      )
    );
    await Promise.allSettled(promises);
  };

  // Fetch and format news data
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setNewsData((prev) => ({ ...prev, loading: true }));

        const allNews = await getAllNews();
        console.log("Get All News in data::: ", allNews);

        if (!allNews || allNews.length === 0) {
          throw new Error("No news data received");
        }

        const formattedNews = allNews.map(formatNewsItem);
        const organizedData = organizeNewsData(formattedNews);

        setNewsData({
          allNews: formattedNews,
          featuredArticle: organizedData.featuredArticle,
          audioNews: organizedData.audioNews,
          liveUpdates: organizedData.liveUpdates,
          longReadArticle: organizedData.longReadArticle,
          sidebarArticles: organizedData.sidebarArticles,
          tabsData: organizedData.tabsData,
          loading: false,
          error: null,
        });

        // Fetch reactions for all articles
        await fetchAllReactions(formattedNews);
      } catch (error) {
        console.error("Failed to fetch news data:", error);
        setNewsData((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };

    fetchNewsData();
  }, []);

  const organizeNewsData = (allNews) => {
    const sortedNews = [...allNews].sort(
      (a, b) =>
        new Date(b.publishedDateTime || 0) - new Date(a.publishedDateTime || 0)
    );

    const featuredArticle =
      sortedNews.find((article) => article.isFeatured) || sortedNews[0];

    const audioNews = {
      title: featuredArticle?.title || "Latest News Update",
      description:
        featuredArticle?.content || "Stay updated with the latest news",
      category: "THE HEADLINES",
      sentiment: featuredArticle?.sentiment || "Neutral",
      image:
        featuredArticle?.image ||
        "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    };

    const liveUpdates = sortedNews.slice(0, 4).map((article) => ({
      id: article.id,
      title: article.title,
      description: article.content || article.description,
      timeAgo: article.publishedTime,
      category: article.category,
      image: article.image,
    }));

    const longReadArticle =
      sortedNews.find((article) => article.readTime >= 10) ||
      sortedNews[Math.floor(Math.random() * Math.min(5, sortedNews.length))];

    // Create unique sidebar articles (avoiding duplicates)
    const usedIds = new Set(
      [
        featuredArticle?.id,
        longReadArticle?.id,
        ...liveUpdates.map((update) => update.id),
      ].filter(Boolean)
    );

    const sidebarArticles = sortedNews
      .filter((article) => !usedIds.has(article.id))
      .slice(0, 6);

    const tabsData = organizeNewsByCategory(sortedNews);

    return {
      featuredArticle,
      audioNews,
      liveUpdates,
      longReadArticle,
      sidebarArticles,
      tabsData,
    };
  };

  const organizeNewsByCategory = (allNews) => {
    const availableNews = [...allNews];
    const tabsData = {};

    const tabConfigs = [
      { key: "latests", label: "Latest News", count: 8 },
      { key: "whatWeKnow", label: "Analysis", count: 8 },
      { key: "maps", label: "Regional", count: 8 },
      { key: "photos", label: "Photos", count: 8 },
      { key: "tunnels", label: "Investigations", count: 8 },
      { key: "oneImage", label: "Featured Stories", count: 8 },
    ];

    // Distribute articles across tabs ensuring each gets exactly 8 unique articles
    tabConfigs.forEach((config, index) => {
      const startIndex = index * config.count;
      const endIndex = Math.min(
        startIndex + config.count,
        availableNews.length
      );
      tabsData[config.key] = availableNews.slice(startIndex, endIndex);
    });

    // If we have remaining articles, distribute them cyclically
    const remainingNews = availableNews.slice(tabConfigs.length * 8);
    remainingNews.forEach((article, index) => {
      const tabIndex = index % tabConfigs.length;
      const tabKey = tabConfigs[tabIndex].key;
      if (tabsData[tabKey].length < 12) {
        // Allow up to 12 articles per tab
        tabsData[tabKey].push(article);
      }
    });

    return tabsData;
  };

  const generateTabsConfig = (tabsData) => {
    const defaultConfig = [
      { key: "latests", label: "Latest News", isDefault: true },
      { key: "whatWeKnow", label: "Analysis" },
      { key: "maps", label: "Regional" },
      { key: "photos", label: "Photos" },
      { key: "tunnels", label: "Investigations" },
      { key: "oneImage", label: "Featured Stories" },
    ];

    return defaultConfig.filter(
      (config) => tabsData[config.key] && tabsData[config.key].length > 0
    );
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

  // Loading component
  const LoadingComponent = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );

  // Error component
  const ErrorComponent = ({ error }) => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading News
        </h2>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retry
        </button>
      </div>
    </div>
  );

  // Show loading or error states
  if (newsData.loading) return <LoadingComponent />;
  if (newsData.error) return <ErrorComponent error={newsData.error} />;

  const tabsConfig = generateTabsConfig(newsData.tabsData);

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
            {/* Main Layout - Responsive Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12">
              {/* Main Content Area */}
              <div className="w-full">
                {/* Featured Article Section */}
                {newsData.featuredArticle && (
                  <div className="mb-8">
                    <CommonNewsCard
                      article={newsData.featuredArticle}
                      reactions={
                        newsReactions[newsData.featuredArticle.id] || []
                      }
                      onPostReaction={(reactionData) =>
                        handlePostReaction(
                          newsData.featuredArticle.id,
                          reactionData
                        )
                      }
                    />
                  </div>
                )}

                {/* Audio News Section */}
                {newsData.audioNews && (
                  <div className="mb-8">
                    <AudioNewsCard {...newsData.audioNews} />
                  </div>
                )}

                {/* Long Read Article */}
                {newsData.longReadArticle && (
                  <NewsSection>
                    <CommonNewsCard
                      article={newsData.longReadArticle}
                      reactions={
                        newsReactions[newsData.longReadArticle.id] || []
                      }
                      onPostReaction={(reactionData) =>
                        handlePostReaction(
                          newsData.longReadArticle.id,
                          reactionData
                        )
                      }
                    />
                  </NewsSection>
                )}

                {/* Live Updates Section */}
                {newsData.liveUpdates.length > 0 && (
                  <NewsSection>
                    <LiveUpdateCard updates={newsData.liveUpdates} />
                  </NewsSection>
                )}

                {/* Tabbed News Section */}
                {Object.keys(newsData.tabsData).length > 0 &&
                  tabsConfig.length > 0 && (
                    <div className="mb-8">
                      <TabbedNewsSection
                        dynamicTabsData={newsData.tabsData}
                        dynamicTabsConfig={tabsConfig}
                        newsReactions={newsReactions}
                        onPostReaction={handlePostReaction}
                      />
                    </div>
                  )}

                <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">
                    Center Advertise Space
                  </span>
                </div>

                {/* Listed News Section */}
                {Object.keys(newsData.tabsData).length > 0 &&
                  tabsConfig.length > 0 && (
                    <div className="mb-8">
                      <ListedNewsSection
                        dynamicTabsData={newsData.tabsData}
                        dynamicTabsConfig={tabsConfig}
                        newsReactions={newsReactions}
                        onPostReaction={handlePostReaction}
                      />
                    </div>
                  )}

                <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">
                    Bottom Advertise Space
                  </span>
                </div>
              </div>

              {/* Sidebar - Advertisement Area */}
              <aside className="w-full xl:w-full">
                {/* First Ad Block - Mobile/Tablet */}
                <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">Top Ad Space</span>
                </div>

                {/* Trending Articles - First Set */}
                {newsData.sidebarArticles.length > 0 && (
                  <div className="xl:hidden w-full mb-6">
                    <h4 className="text-md font-semibold text-gray-700 mb-4">
                      Trending Now
                    </h4>
                    <div className="space-y-4">
                      {newsData.sidebarArticles.slice(0, 3).map((article) => (
                        <div key={article.id} className="w-full">
                          <StandardArticleCard
                            article={article}
                            reactions={newsReactions[article.id] || []}
                            onPostReaction={(reactionData) =>
                              handlePostReaction(article.id, reactionData)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Second Ad Block - Mobile/Tablet */}
                <div className="xl:hidden w-full h-28 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-gray-600 text-sm">Mid Ad Space</span>
                </div>

                {/* Trending Articles - Second Set */}
                {newsData.sidebarArticles.length > 3 && (
                  <div className="xl:hidden w-full mb-6">
                    <div className="space-y-4">
                      {newsData.sidebarArticles.slice(3, 6).map((article) => (
                        <div key={article.id} className="w-full">
                          <StandardArticleCard
                            article={article}
                            reactions={newsReactions[article.id] || []}
                            onPostReaction={(reactionData) =>
                              handlePostReaction(article.id, reactionData)
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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
                  {newsData.sidebarArticles.length > 0 && (
                    <div className="w-full">
                      <h4 className="text-md font-semibold text-gray-700 mb-4">
                        Trending Now
                      </h4>
                      <div className="space-y-4">
                        {newsData.sidebarArticles.slice(0, 3).map((article) => (
                          <div key={article.id} className="w-full">
                            <StandardArticleCard
                              article={article}
                              reactions={newsReactions[article.id] || []}
                              onPostReaction={(reactionData) =>
                                handlePostReaction(article.id, reactionData)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Middle Ad in Sidebar */}
                  <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center my-6">
                    <span className="text-gray-600 text-sm">
                      Sidebar Mid Ad
                    </span>
                  </div>

                  {/* More Sidebar News Articles */}
                  {newsData.sidebarArticles.length > 3 && (
                    <div className="w-full">
                      <div className="space-y-4">
                        {newsData.sidebarArticles.slice(3, 6).map((article) => (
                          <div key={article.id} className="w-full">
                            <StandardArticleCard
                              article={article}
                              reactions={newsReactions[article.id] || []}
                              onPostReaction={(reactionData) =>
                                handlePostReaction(article.id, reactionData)
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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


// // src/pages/HomePage.jsx
// import { Helmet } from "react-helmet-async";
// import { useRef, useEffect, useState } from "react";
// import Navbar from "@/components/layout/Navbar";
// import StandardArticleCard from "@/components/news/StandardArticleCard";
// import AudioNewsCard from "@/components/news/AudioNewsCard";
// import LiveUpdateCard from "@/components/news/LiveUpdateCard";
// import NewsSection from "@/components/news/NewsSection";
// import TabbedNewsSection from "@/components/news/TabbedNewsSection";
// import CommonNewsCard from "@/components/news/CommonNewsCard";
// import ListedNewsSection from "@/components/news/ListedNewsSection";
// import { FooterSection } from "@/components/footer/FooterSection";
// import { getAllNews, formatNewsItem } from "@/lib/news-service";

// export default function HomePage() {
//   const footerRef = useRef(null);
//   const [newsData, setNewsData] = useState({
//     allNews: [],
//     featuredArticle: null,
//     audioNews: null,
//     liveUpdates: [],
//     longReadArticle: null,
//     sidebarArticles: [],
//     tabsData: {},
//     loading: true,
//     error: null,
//   });

//   // Fetch and format news data
//   useEffect(() => {
//     const fetchNewsData = async () => {
//       try {
//         setNewsData((prev) => ({ ...prev, loading: true }));

//         const allNews = await getAllNews();
//         console.log("Get All News in data::: ", allNews);

//         if (!allNews || allNews.length === 0) {
//           throw new Error("No news data received");
//         }

//         // Format all news items
//         const formattedNews = allNews.map(formatNewsItem);

//         // Organize news data for different sections
//         const organizedData = organizeNewsData(formattedNews);

//         setNewsData({
//           allNews: formattedNews,
//           featuredArticle: organizedData.featuredArticle,
//           audioNews: organizedData.audioNews,
//           liveUpdates: organizedData.liveUpdates,
//           longReadArticle: organizedData.longReadArticle,
//           sidebarArticles: organizedData.sidebarArticles,
//           tabsData: organizedData.tabsData,
//           loading: false,
//           error: null,
//         });
//       } catch (error) {
//         console.error("Failed to fetch news data:", error);
//         setNewsData((prev) => ({
//           ...prev,
//           loading: false,
//           error: error.message,
//         }));
//       }
//     };

//     fetchNewsData();
//   }, []);

//   // Function to organize news data for different sections
//   const organizeNewsData = (allNews) => {
//     // Sort news by published time (most recent first)
//     const sortedNews = [...allNews].sort(
//       (a, b) =>
//         new Date(b.publishedDateTime || 0) - new Date(a.publishedDateTime || 0)
//     );

//     // Get featured article (first article with isFeatured true or first article)
//     const featuredArticle =
//       sortedNews.find((article) => article.isFeatured) || sortedNews[0];

//     // Get audio news (could be any article, or specific category)
//     const audioNews = {
//       title: featuredArticle?.title || "Latest News Update",
//       description:
//         featuredArticle?.content || "Stay updated with the latest news",
//       category: "THE HEADLINES",
//       sentiment: featuredArticle?.sentiment || "Neutral",
//       image:
//         featuredArticle?.image ||
//         "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     };

//     // Get live updates (latest 3-4 articles)
//     const liveUpdates = sortedNews.slice(0, 4).map((article) => ({
//       title: article.title,
//       description: article.content,
//       timeAgo: article.publishedTime,
//       category: article.category,
//       image: article.image,
//     }));

//     // Get long read article (article with highest read time or random selection)
//     const longReadArticle =
//       sortedNews.find((article) => article.readTime >= 10) ||
//       sortedNews[Math.floor(Math.random() * Math.min(5, sortedNews.length))];

//     // Get sidebar articles (next set of articles)
//     const sidebarArticles = sortedNews.slice(1, 7);

//     // Organize articles by category for tabs
//     const tabsData = organizeNewsByCategory(sortedNews);

//     return {
//       featuredArticle,
//       audioNews,
//       liveUpdates,
//       longReadArticle,
//       sidebarArticles,
//       tabsData,
//     };
//   };

//   // Function to organize news by category for tabbed sections
//   const organizeNewsByCategory = (allNews) => {
//     const categories = {};

//     // Group news by category
//     allNews.forEach((article) => {
//       const category = article.category || "General";
//       if (!categories[category]) {
//         categories[category] = [];
//       }
//       categories[category].push(article);
//     });

//     // Create tabs data structure similar to your dummy data
//     const tabsData = {};
//     const categoryKeys = Object.keys(categories);

//     // If you have specific categories you want to map to specific tabs
//     const tabMappings = {
//       "War Coverage": "israelHamasWar",
//       International: "updates",
//       Analysis: "whatWeKnow",
//       Geographic: "maps",
//       Photography: "photos",
//       Investigation: "tunnels",
//       "Photo Story": "oneImage",
//     };

//     // Create default tabs with available data
//     const defaultTabs = [
//       "israelHamasWar",
//       "updates",
//       "whatWeKnow",
//       "maps",
//       "photos",
//       "tunnels",
//       "oneImage",
//     ];

//     defaultTabs.forEach((tabKey, index) => {
//       // Distribute articles across tabs
//       const startIndex = index * Math.ceil(allNews.length / defaultTabs.length);
//       const endIndex = Math.min(
//         startIndex + Math.ceil(allNews.length / defaultTabs.length),
//         allNews.length
//       );
//       tabsData[tabKey] = allNews.slice(startIndex, endIndex);
//     });

//     return tabsData;
//   };

//   // Generate tabs configuration based on available categories
//   const generateTabsConfig = (tabsData) => {
//     const defaultConfig = [
//       { key: "israelHamasWar", label: "Latest News", isDefault: true },
//       { key: "updates", label: "Updates" },
//       { key: "whatWeKnow", label: "Analysis" },
//       { key: "maps", label: "Regional" },
//       { key: "photos", label: "Photos" },
//       { key: "tunnels", label: "Investigations" },
//       { key: "oneImage", label: "Featured Stories" },
//     ];

//     return defaultConfig.filter(
//       (config) => tabsData[config.key] && tabsData[config.key].length > 0
//     );
//   };

//   // Function to scroll to footer
//   const scrollToFooter = () => {
//     if (footerRef.current) {
//       footerRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   // Listen for custom event from Navbar
//   useEffect(() => {
//     const handleScrollToAbout = () => {
//       scrollToFooter();
//     };

//     window.addEventListener("scrollToAbout", handleScrollToAbout);

//     return () => {
//       window.removeEventListener("scrollToAbout", handleScrollToAbout);
//     };
//   }, []);

//   // Loading component
//   const LoadingComponent = () => (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
//     </div>
//   );

//   // Error component
//   const ErrorComponent = ({ error }) => (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-red-600 mb-4">
//           Error Loading News
//         </h2>
//         <p className="text-gray-600">{error}</p>
//         <button
//           onClick={() => window.location.reload()}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           Retry
//         </button>
//       </div>
//     </div>
//   );

//   // Show loading or error states
//   if (newsData.loading) return <LoadingComponent />;
//   if (newsData.error) return <ErrorComponent error={newsData.error} />;

//   const tabsConfig = generateTabsConfig(newsData.tabsData);

//   return (
//     <>
//       <Helmet>
//         <title>ALAMOCITYPULSE - Latest News and Updates</title>
//         <meta
//           name="description"
//           content="Stay informed with the latest news, breaking stories, and in-depth analysis from ALAMOCITYPULSE"
//         />
//       </Helmet>

//       <div className="min-h-screen">
//         <Navbar onScrollToAbout={scrollToFooter} />

//         {/* Add top padding to account for fixed navbar */}
//         <main className="w-full py-4 mt-10 sm:py-8 pt-[200px] md:pt-[180px] lg:pt-[160px]">
//           <div className="">
//             {/* Main Layout - Responsive Grid */}
//             <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12">
//               {/* Main Content Area */}
//               <div className="w-full">
//                 {/* Featured Article Section */}
//                 {newsData.featuredArticle && (
//                   <div className="mb-8">
//                     <CommonNewsCard article={newsData.featuredArticle} />
//                   </div>
//                 )}

//                 {/* Audio News Section */}
//                 {newsData.audioNews && (
//                   <div className="mb-8">
//                     <AudioNewsCard {...newsData.audioNews} />
//                   </div>
//                 )}

//                 {/* Long Read Article */}
//                 {newsData.longReadArticle && (
//                   <NewsSection>
//                     <CommonNewsCard article={newsData.longReadArticle} />
//                   </NewsSection>
//                 )}

//                 {/* Live Updates Section */}
//                 {newsData.liveUpdates.length > 0 && (
//                   <NewsSection>
//                     <LiveUpdateCard updates={newsData.liveUpdates} />
//                   </NewsSection>
//                 )}

//                 {/* Tabbed News Section */}
//                 {Object.keys(newsData.tabsData).length > 0 &&
//                   tabsConfig.length > 0 && (
//                     <div className="mb-8">
//                       <TabbedNewsSection
//                         dynamicTabsData={newsData.tabsData}
//                         dynamicTabsConfig={tabsConfig}
//                       />
//                     </div>
//                   )}

//                 <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
//                   <span className="text-gray-600 text-sm">
//                     Center Advertise Space
//                   </span>
//                 </div>

//                 {/* Repeat Long Read Article */}
//                 {newsData.longReadArticle && (
//                   <NewsSection>
//                     <CommonNewsCard article={newsData.longReadArticle} />
//                   </NewsSection>
//                 )}

//                 {/* Repeat Live Updates Section */}
//                 {newsData.liveUpdates.length > 0 && (
//                   <NewsSection>
//                     <LiveUpdateCard updates={newsData.liveUpdates} />
//                   </NewsSection>
//                 )}

//                 {/* Listed News Section */}
//                 {Object.keys(newsData.tabsData).length > 0 &&
//                   tabsConfig.length > 0 && (
//                     <div className="mb-8">
//                       <ListedNewsSection
//                         dynamicTabsData={newsData.tabsData}
//                         dynamicTabsConfig={tabsConfig}
//                       />
//                     </div>
//                   )}

//                 <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
//                   <span className="text-gray-600 text-sm">
//                     Bottom Advertise Space
//                   </span>
//                 </div>
//               </div>

//               {/* Vertical Separator - Only visible on xl screens */}
//               <div className="hidden w-px bg-gray-300 min-h-full"></div>

//               {/* Sidebar - Advertisement Area */}
//               <aside className="w-full xl:w-full">
//                 {/* First Ad Block - Mobile/Tablet */}
//                 <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
//                   <span className="text-gray-600 text-sm">Top Ad Space</span>
//                 </div>

//                 {/* Trending Articles - First Set */}
//                 {newsData.sidebarArticles.length > 0 && (
//                   <div className="xl:hidden w-full mb-6">
//                     <h4 className="text-md font-semibold text-gray-700 mb-4">
//                       Trending Now
//                     </h4>
//                     <div className="space-y-4">
//                       {newsData.sidebarArticles.slice(0, 3).map((article) => (
//                         <div key={article.id} className="w-full">
//                           <StandardArticleCard article={article} />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Second Ad Block - Mobile/Tablet */}
//                 <div className="xl:hidden w-full h-28 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
//                   <span className="text-gray-600 text-sm">Mid Ad Space</span>
//                 </div>

//                 {/* Trending Articles - Second Set */}
//                 {newsData.sidebarArticles.length > 3 && (
//                   <div className="xl:hidden w-full mb-6">
//                     <div className="space-y-4">
//                       {newsData.sidebarArticles.slice(3, 6).map((article) => (
//                         <div key={article.id} className="w-full">
//                           <StandardArticleCard article={article} />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Third Ad Block - Mobile/Tablet */}
//                 <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-8">
//                   <span className="text-gray-600 text-sm">Bottom Ad Space</span>
//                 </div>

//                 {/* Desktop Sidebar Layout */}
//                 <div className="xl:block bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center">
//                   <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
//                     Advertisement Area
//                   </h3>

//                   {/* Top Ad in Sidebar */}
//                   <div className="w-full h-48 sm:h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
//                     <span className="text-gray-600 text-sm">
//                       Sidebar Top Ad
//                     </span>
//                   </div>

//                   {/* Sidebar News Articles */}
//                   {newsData.sidebarArticles.length > 0 && (
//                     <div className="w-full">
//                       <h4 className="text-md font-semibold text-gray-700 mb-4">
//                         Trending Now
//                       </h4>
//                       <div className="space-y-4">
//                         {newsData.sidebarArticles.slice(0, 3).map((article) => (
//                           <div key={article.id} className="w-full">
//                             <StandardArticleCard article={article} />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Middle Ad in Sidebar */}
//                   <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center my-6">
//                     <span className="text-gray-600 text-sm">
//                       Sidebar Mid Ad
//                     </span>
//                   </div>

//                   {/* More Sidebar News Articles */}
//                   {newsData.sidebarArticles.length > 3 && (
//                     <div className="w-full">
//                       <div className="space-y-4">
//                         {newsData.sidebarArticles.slice(3, 6).map((article) => (
//                           <div key={article.id} className="w-full">
//                             <StandardArticleCard article={article} />
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   {/* Bottom Ad in Sidebar */}
//                   <div className="w-full h-32 sm:h-48 bg-gray-300 rounded-lg flex items-center justify-center mt-6">
//                     <span className="text-gray-600 text-sm">
//                       Sidebar Bottom Ad
//                     </span>
//                   </div>
//                 </div>
//               </aside>
//             </div>
//           </div>
//         </main>

//         {/* Footer with ref */}
//         <div ref={footerRef}>
//           <FooterSection />
//         </div>
//       </div>
//     </>
//   );
// }