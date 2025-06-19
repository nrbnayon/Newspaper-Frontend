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
import {
  getAllNews,
  formatNewsItem,
  getNewsReactions,
  postNewsLove,
  postNewsComment,
  getDefaultImage,
} from "@/lib/news-service";

const isValidArticle = (article) => {
  return (
    article &&
    typeof article === "object" &&
    article.id &&
    article.title &&
    typeof article.title === "string" &&
    article.title.trim() !== ""
  );
};

const shuffleWithLatest = (
  array,
  keepLatestCount = 1,
  forceReshuffle = false
) => {
  if (!array || array.length <= 1) return array;
  const latest = array.slice(0, keepLatestCount);
  const remaining = array.slice(keepLatestCount);
  const seed = Date.now() + Math.random() * 1000000;
  const shuffled = [...remaining];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomFactor = (seed + i) * 0.12345;
    const j = Math.floor(
      (Math.sin(randomFactor) * 10000 + Math.random()) % (i + 1)
    );
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return [...latest, ...shuffled];
};

export default function HomePage() {
  const footerRef = useRef(null);
  const [newsData, setNewsData] = useState({
    sections: [],
    loading: true,
    error: null,
  });
  const [newsReactions, setNewsReactions] = useState({});
  const [loadingReactions, setLoadingReactions] = useState({});

  // Fetch reactions for a specific news article
  const fetchNewsReactions = async (newsId) => {
    if (loadingReactions[newsId]) return;
    try {
      setLoadingReactions((prev) => ({ ...prev, [newsId]: true }));
      const reactions = await getNewsReactions(newsId);
      setNewsReactions((prev) => ({ ...prev, [newsId]: reactions }));
    } catch (error) {
      console.error(`Failed to fetch reactions for news ${newsId}:`, error);
    } finally {
      setLoadingReactions((prev) => ({ ...prev, [newsId]: false }));
    }
  };

  // Handle posting love reaction
  const handlePostLove = async (newsId, loveStatus) => {
    try {
      const newReaction = await postNewsLove(newsId, loveStatus);
      setNewsReactions((prev) => ({
        ...prev,
        [newsId]: prev[newsId] ? [...prev[newsId], newReaction] : [newReaction],
      }));
      await fetchNewsReactions(newsId);
      return newReaction;
    } catch (error) {
      console.error(`Failed to post love reaction for news ${newsId}:`, error);
      throw error;
    }
  };

  // Handle posting comment
  const handlePostComment = async (newsId, commentText) => {
    try {
      if (!commentText || commentText.trim() === "") {
        throw new Error("Comment cannot be empty");
      }
      const newReaction = await postNewsComment(newsId, commentText.trim());
      setNewsReactions((prev) => ({
        ...prev,
        [newsId]: prev[newsId] ? [...prev[newsId], newReaction] : [newReaction],
      }));
      await fetchNewsReactions(newsId);
      return newReaction;
    } catch (error) {
      console.error(`Failed to post comment for news ${newsId}:`, error);
      throw error;
    }
  };

  // Combined reaction handler
  const handlePostReaction = async (newsId, reactionData) => {
    try {
      const promises = [];
      if (reactionData.hasOwnProperty("love")) {
        promises.push(handlePostLove(newsId, reactionData.love));
      }
      if (reactionData.comment && reactionData.comment.trim() !== "") {
        promises.push(handlePostComment(newsId, reactionData.comment));
      }
      const results = await Promise.all(promises);
      return results.length > 0 ? results[results.length - 1] : null;
    } catch (error) {
      console.error(`Failed to post reaction for news ${newsId}:`, error);
      throw error;
    }
  };

  // Fetch and organize news data
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setNewsData((prev) => ({ ...prev, loading: true }));

        // Clear any cached reactions to ensure fresh data
        setNewsReactions({});
        setLoadingReactions({});

        const allNews = await getAllNews();
        if (!allNews || allNews.length === 0) {
          throw new Error("No news data received");
        }

        // Format and sort news by publish time (latest first)
        const formattedNews = allNews
          .map(formatNewsItem)
          .filter((article) => article && article.id) // Filter out invalid articles
          .sort(
            (a, b) =>
              new Date(b.publishedDateTime) - new Date(a.publishedDateTime)
          );

        // Create a timestamp-based seed for consistent randomization per session
        const sessionSeed = Date.now() + Math.floor(Math.random() * 1000);

        // Multiple shuffle passes for better randomization
        let shuffledNews = [...formattedNews];
        for (let pass = 0; pass < 3; pass++) {
          shuffledNews = shuffleWithLatest(shuffledNews, 1, true);
        }

        const organizedSections = organizeNewsData(shuffledNews);
        setNewsData({
          sections: organizedSections,
          loading: false,
          error: null,
        });
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

  const fetchAllReactions = async (articles) => {
    const promises = articles
      .filter((article) => article && article.id) // Filter out invalid articles
      .map((article) =>
        fetchNewsReactions(article.id).catch((err) =>
          console.warn(
            `Failed to fetch reactions for article ${article.id}:`,
            err
          )
        )
      );
    await Promise.allSettled(promises);
  };

  const organizeNewsData = (allNews) => {
    const sections = [];
    let availableNews = [...allNews];
    const assignedIds = new Set();

    // Validate input
    if (!allNews || allNews.length === 0) {
      console.warn("No news articles provided to organizeNewsData");
      return sections;
    }

    // Filter out any invalid articles upfront - IMPROVED VALIDATION
    availableNews = availableNews.filter(isValidArticle);

    if (availableNews.length === 0) {
      console.warn("No valid news articles after filtering");
      return sections;
    }

    // Create multiple sections with different shuffling for variety
    const maxSections = Math.min(3, Math.ceil(availableNews.length / 20));

    for (
      let sectionIndex = 0;
      sectionIndex < maxSections && availableNews.length > 10;
      sectionIndex++
    ) {
      const section = {};

      // Shuffle available news for this section to create variety
      const sectionNews = shuffleWithLatest([...availableNews], 0, true);

      const assignUniqueArticles = (count) => {
        const articles = [];
        let attempts = 0;
        const maxAttempts = Math.min(count * 2, sectionNews.length * 2);

        while (
          articles.length < count &&
          sectionNews.length > 0 &&
          attempts < maxAttempts
        ) {
          const randomIndex = Math.floor(Math.random() * sectionNews.length);
          const article = sectionNews[randomIndex];

          // Use the helper function for validation
          if (isValidArticle(article) && !assignedIds.has(article.id)) {
            articles.push(article);
            assignedIds.add(article.id);

            // Remove from sectionNews array safely
            sectionNews.splice(randomIndex, 1);

            // Remove from availableNews array safely
            const originalIndex = availableNews.findIndex(
              (a) => isValidArticle(a) && a.id === article.id
            );
            if (originalIndex > -1) {
              availableNews.splice(originalIndex, 1);
            }
          } else {
            // Remove invalid article from sectionNews
            if (randomIndex < sectionNews.length) {
              sectionNews.splice(randomIndex, 1);
            }
          }
          attempts++;
        }

        return articles;
      };

      // Featured Article
      const featuredArticles = assignUniqueArticles(1);
      section.featuredArticle =
        featuredArticles.length > 0 ? featuredArticles[0] : null;

      if (!section.featuredArticle) {
        console.warn(
          `No featured article available for section ${sectionIndex}`
        );
        break;
      }

      // Audio News - Get a different article, not the featured one
      const audioNewsArticles = assignUniqueArticles(1);
      const audioNewsArticle =
        audioNewsArticles.length > 0 ? audioNewsArticles[0] : null;

      section.audioNews = audioNewsArticle
        ? {
            title: audioNewsArticle.title || "Latest News Update",
            description:
              audioNewsArticle.description ||
              "Stay updated with the latest news",
            category: "THE HEADLINES",
            sentiment: audioNewsArticle.sentiment || "Neutral",
            image: audioNewsArticle.image || getDefaultImage(),
          }
        : null;

      const longReadArticles = assignUniqueArticles(1);
      section.longReadArticle =
        longReadArticles.length > 0 ? longReadArticles[0] : null;

      const liveUpdateArticles = assignUniqueArticles(4);
      section.liveUpdates = liveUpdateArticles
        .filter(isValidArticle) // Use helper function
        .map((article) => ({
          id: article.id,
          title: article.title || "Untitled",
          description: article.description || "",
          timeAgo: article.publishedTime || "Recently",
          category: article.category || "News",
          image: article.image || getDefaultImage(),
        }));

      // Ensure sidebarArticles is always an array of valid articles
      const sidebarArticlesRaw = assignUniqueArticles(6);
      section.sidebarArticles = sidebarArticlesRaw.filter(isValidArticle); // Use helper function

      section.tabsData = {};
      const remainingArticles = availableNews.filter(
        (article) => isValidArticle(article) && !assignedIds.has(article.id)
      );

      const articlesByCategory = {};
      remainingArticles.forEach((article) => {
        if (!isValidArticle(article)) return; // Additional safety check

        const category = article.category.toLowerCase();
        if (!articlesByCategory[category]) {
          articlesByCategory[category] = [];
        }
        articlesByCategory[category].push(article);
      });

      Object.keys(articlesByCategory).forEach((category) => {
        articlesByCategory[category] = shuffleWithLatest(
          articlesByCategory[category],
          0,
          true
        );
      });

      const tabConfigs = [
        {
          key: "latests",
          label: "Latest News",
          count: 8,
          categoryFilter: null,
        },
        {
          key: "politics",
          label: "Politics",
          count: 8,
          categoryFilter: "politics",
        },
        { key: "Local", label: "Local", count: 8, categoryFilter: "local" },
        {
          key: "whatWeKnow",
          label: "Analysis",
          count: 8,
          categoryFilter: "analysis",
        },
        {
          key: "maps",
          label: "Regional",
          count: 8,
          categoryFilter: "regional",
        },
        { key: "photos", label: "Photos", count: 8, categoryFilter: "photos" },
        {
          key: "tunnels",
          label: "Investigations",
          count: 8,
          categoryFilter: "investigations",
        },
        {
          key: "oneImage",
          label: "Sports",
          count: 8,
          categoryFilter: "sports",
        },
      ];

      tabConfigs.forEach((config) => {
        let tabArticles = [];

        if (config.categoryFilter) {
          const categoryArticles =
            articlesByCategory[config.categoryFilter] || [];
          tabArticles = [...categoryArticles.slice(0, config.count)];

          if (tabArticles.length < config.count) {
            const otherArticles = shuffleWithLatest(
              remainingArticles.filter(
                (article) =>
                  isValidArticle(article) &&
                  !tabArticles.find(
                    (existing) =>
                      isValidArticle(existing) && existing.id === article.id
                  ) &&
                  !assignedIds.has(article.id)
              ),
              0,
              true
            );
            const needed = config.count - tabArticles.length;
            tabArticles = [...tabArticles, ...otherArticles.slice(0, needed)];
          }
        } else {
          const validRemainingArticles = remainingArticles.filter(
            (article) => isValidArticle(article) && !assignedIds.has(article.id)
          );

          const sortedByDate = validRemainingArticles.sort((a, b) => {
            const dateA = new Date(a.publishedDateTime || 0);
            const dateB = new Date(b.publishedDateTime || 0);
            return dateB - dateA;
          });
          const latest = sortedByDate.slice(0, 2);
          const others = shuffleWithLatest(sortedByDate.slice(2), 0, true);
          tabArticles = [...latest, ...others].slice(0, config.count);
        }

        // Filter out invalid articles and mark as assigned
        tabArticles = tabArticles.filter((article) => {
          if (isValidArticle(article)) {
            assignedIds.add(article.id);
            return true;
          }
          return false;
        });

        section.tabsData[config.key] = tabArticles;
      });

      sections.push(section);
    }

    if (sections.length === 1 && availableNews.length > 0) {
      const validRemainingNews = availableNews.filter(
        (article) => isValidArticle(article) && !assignedIds.has(article.id)
      );

      if (validRemainingNews.length > 0) {
        const additionalSection = { ...sections[0] };
        const remainingShuffled = shuffleWithLatest(
          validRemainingNews,
          0,
          true
        );
        if (remainingShuffled.length > 0) {
          additionalSection.featuredArticle = remainingShuffled[0];
          additionalSection.sidebarArticles = remainingShuffled
            .slice(1, 7)
            .filter(isValidArticle);
          sections.push(additionalSection);
        }
      }
    }

    return sections;
  };

  const generateTabsConfig = (tabsData) => {
    const defaultConfig = [
      { key: "latests", label: "Latest News", isDefault: true },
      { key: "politics", label: "Politics", count: 8 },
      { key: "Local", label: "Local", count: 8 },
      { key: "whatWeKnow", label: "Analysis" },
      { key: "maps", label: "Regional" },
      { key: "photos", label: "Photos" },
      { key: "tunnels", label: "Investigations" },
      { key: "oneImage", label: "Sports" },
    ];
    return defaultConfig.filter(
      (config) => tabsData[config.key] && tabsData[config.key].length > 0
    );
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScrollToAbout = () => scrollToFooter();
    window.addEventListener("scrollToAbout", handleScrollToAbout);
    return () =>
      window.removeEventListener("scrollToAbout", handleScrollToAbout);
  }, []);

  const LoadingComponent = () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  );

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

  if (newsData.loading) return <LoadingComponent />;
  if (newsData.error) return <ErrorComponent error={newsData.error} />;

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
        <main className="w-full py-4 mt-10 sm:py-8 pt-[200px] md:pt-[180px] lg:pt-[160px]">
          <div className="">
            {newsData.sections.map((section, index) => (
              <div
                key={index}
                className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12"
              >
                {/* Main Content Area */}
                <div className="w-full">
                  {section.featuredArticle && (
                    <div className="mb-8">
                      <CommonNewsCard
                        article={section.featuredArticle}
                        reactions={
                          newsReactions[section.featuredArticle.id] || []
                        }
                        onPostReaction={(reactionData) =>
                          handlePostReaction(
                            section.featuredArticle.id,
                            reactionData
                          )
                        }
                        onPostLove={(loveStatus) =>
                          handlePostLove(section.featuredArticle.id, loveStatus)
                        }
                        onPostComment={(commentText) =>
                          handlePostComment(
                            section.featuredArticle.id,
                            commentText
                          )
                        }
                      />
                    </div>
                  )}

                  {section.audioNews && (
                    <div className="mb-8">
                      <AudioNewsCard {...section.audioNews} />
                    </div>
                  )}

                  {section.longReadArticle && (
                    <NewsSection>
                      <CommonNewsCard
                        article={section.longReadArticle}
                        reactions={
                          newsReactions[section.longReadArticle.id] || []
                        }
                        onPostReaction={(reactionData) =>
                          handlePostReaction(
                            section.longReadArticle.id,
                            reactionData
                          )
                        }
                        onPostLove={(loveStatus) =>
                          handlePostLove(section.longReadArticle.id, loveStatus)
                        }
                        onPostComment={(commentText) =>
                          handlePostComment(
                            section.longReadArticle.id,
                            commentText
                          )
                        }
                      />
                    </NewsSection>
                  )}

                  {section.liveUpdates && section.liveUpdates.length > 0 && (
                    <NewsSection>
                      <LiveUpdateCard
                        updates={section.liveUpdates}
                        newsReactions={newsReactions}
                        onPostLove={handlePostLove}
                        onPostComment={handlePostComment}
                      />
                    </NewsSection>
                  )}

                  {Object.keys(section.tabsData).length > 0 && (
                    <div className="mb-8">
                      <TabbedNewsSection
                        dynamicTabsData={section.tabsData}
                        dynamicTabsConfig={generateTabsConfig(section.tabsData)}
                        newsReactions={newsReactions}
                        onPostLove={handlePostLove}
                        onPostComment={handlePostComment}
                      />
                    </div>
                  )}

                  <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
                    <span className="text-gray-600 text-sm">
                      Center Advertise Space
                    </span>
                  </div>

                  {Object.keys(section.tabsData).length > 0 && (
                    <div className="mb-8">
                      <ListedNewsSection
                        dynamicTabsData={section.tabsData}
                        dynamicTabsConfig={generateTabsConfig(section.tabsData)}
                        newsReactions={newsReactions}
                        onPostLove={handlePostLove}
                        onPostComment={handlePostComment}
                      />
                    </div>
                  )}

                  <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg hidden md:flex items-center justify-center mb-6">
                    <span className="text-gray-600 text-sm">
                      Bottom Advertise Space
                    </span>
                  </div>
                </div>

                {/* Sidebar */}
                <aside className="w-full xl:w-full">
                  <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-gray-600 text-sm">Top Ad Space</span>
                  </div>

                  {section.sidebarArticles &&
                    Array.isArray(section.sidebarArticles) &&
                    section.sidebarArticles.length > 0 && (
                      <div className="xl:hidden w-full mb-6">
                        <h4 className="text-md font-semibold text-gray-700 mb-4">
                          Trending Now
                        </h4>
                        <div className="space-y-4">
                          {section.sidebarArticles
                            .filter(isValidArticle)
                            .slice(0, 3)
                            .map((article) => (
                              <div key={article.id} className="w-full">
                                <StandardArticleCard
                                  article={article}
                                  reactions={newsReactions[article.id] || []}
                                  onPostReaction={(reactionData) =>
                                    handlePostReaction(article.id, reactionData)
                                  }
                                  onPostLove={(loveStatus) =>
                                    handlePostLove(article.id, loveStatus)
                                  }
                                  onPostComment={(commentText) =>
                                    handlePostComment(article.id, commentText)
                                  }
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                  <div className="xl:hidden w-full h-28 sm:h-36 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-gray-600 text-sm">Mid Ad Space</span>
                  </div>

                  {section.sidebarArticles &&
                    Array.isArray(section.sidebarArticles) &&
                    section.sidebarArticles.length > 3 && (
                      <div className="xl:hidden w-full mb-6">
                        <div className="space-y-4">
                          {section.sidebarArticles
                            .filter(isValidArticle)
                            .slice(3, 6)
                            .map((article) => (
                              <div key={article.id} className="w-full">
                                <StandardArticleCard
                                  article={article}
                                  reactions={newsReactions[article.id] || []}
                                  onPostReaction={(reactionData) =>
                                    handlePostReaction(article.id, reactionData)
                                  }
                                  onPostLove={(loveStatus) =>
                                    handlePostLove(article.id, loveStatus)
                                  }
                                  onPostComment={(commentText) =>
                                    handlePostComment(article.id, commentText)
                                  }
                                />
                              </div>
                            ))}
                        </div>
                      </div>
                    )}

                  <div className="xl:hidden w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center mb-8">
                    <span className="text-gray-600 text-sm">
                      Bottom Ad Space
                    </span>
                  </div>

                  <div className="xl:block bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center">
                    <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
                      Advertisement Area
                    </h3>
                    <div className="w-full h-48 sm:h-64 bg-gray-300 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-gray-600 text-sm">
                        Sidebar Top Ad
                      </span>
                    </div>

                    {section.sidebarArticles &&
                      Array.isArray(section.sidebarArticles) &&
                      section.sidebarArticles.length > 0 && (
                        <div className="w-full">
                          <h4 className="text-md font-semibold text-gray-700 mb-4">
                            Trending Now
                          </h4>
                          <div className="space-y-4">
                            {section.sidebarArticles
                              .filter(isValidArticle)
                              .slice(0, 3)
                              .map((article) => (
                                <div key={article.id} className="w-full">
                                  <StandardArticleCard
                                    article={article}
                                    reactions={newsReactions[article.id] || []}
                                    onPostReaction={(reactionData) =>
                                      handlePostReaction(
                                        article.id,
                                        reactionData
                                      )
                                    }
                                    onPostLove={(loveStatus) =>
                                      handlePostLove(article.id, loveStatus)
                                    }
                                    onPostComment={(commentText) =>
                                      handlePostComment(article.id, commentText)
                                    }
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                    <div className="w-full h-32 sm:h-40 bg-gray-300 rounded-lg flex items-center justify-center my-6">
                      <span className="text-gray-600 text-sm">
                        Sidebar Mid Ad
                      </span>
                    </div>

                    {section.sidebarArticles &&
                      Array.isArray(section.sidebarArticles) &&
                      section.sidebarArticles.length > 3 && (
                        <div className="w-full">
                          <div className="space-y-4">
                            {section.sidebarArticles
                              .filter(isValidArticle)
                              .slice(3, 6)
                              .map((article) => (
                                <div key={article.id} className="w-full">
                                  <StandardArticleCard
                                    article={article}
                                    reactions={newsReactions[article.id] || []}
                                    onPostReaction={(reactionData) =>
                                      handlePostReaction(
                                        article.id,
                                        reactionData
                                      )
                                    }
                                    onPostLove={(loveStatus) =>
                                      handlePostLove(article.id, loveStatus)
                                    }
                                    onPostComment={(commentText) =>
                                      handlePostComment(article.id, commentText)
                                    }
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                    <div className="w-full h-32 sm:h-48 bg-gray-300 rounded-lg flex items-center justify-center mt-6">
                      <span className="text-gray-600 text-sm">
                        Sidebar Bottom Ad
                      </span>
                    </div>
                  </div>
                </aside>
              </div>
            ))}
          </div>
        </main>
        <div ref={footerRef}>
          <FooterSection />
        </div>
      </div>
    </>
  );
}
