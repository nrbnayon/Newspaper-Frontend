// src\pages\HomePage.jsx
import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState, useMemo, useCallback } from "react";
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
  TAB_CONFIGS,
  generateTabsConfig,
  searchAllNews,
} from "@/lib/news-service";
const { getAllPublicAdvertisements } = await import("@/lib/advertise-service");
import { isValidArticle, shuffleWithLatest } from "@/lib/utils";
import HomepageSkeleton from "@/components/common/HomepageSkeleton";
import { ErrorComponent } from "@/components/news/ErrorComponent";
import { AdvertisementContainer } from "@/components/advertisements/DynamicAdvertisement";
import AdPlacement from "@/components/advertisements/AdPlacement";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [advertisements, setAdvertisements] = useState([]);
  const [loadingAds, setLoadingAds] = useState(false);
  const footerRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  // Simple pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  // News data state
  const [newsData, setNewsData] = useState({
    sections: [],
    loading: true,
    error: null,
  });
  const [newsReactions, setNewsReactions] = useState({});
  const [loadingReactions, setLoadingReactions] = useState({});

  // Debounced search to prevent excessive API calls
  const handleSearch = useCallback(
    debounce(async (term) => {
      if (!term || !term.trim()) {
        setIsSearching(false);
        setSearchResults([]);
        setSearchLoading(false);
        return;
      }

      setSearchLoading(true);
      setIsSearching(true);

      try {
        const results = await searchAllNews({ search_term: term.trim() });
        // Handle paginated search results
        const searchData = Array.isArray(results)
          ? results
          : results.results || [];
        const formattedResults = searchData.map(formatNewsItem);
        setSearchResults(formattedResults);
        // Batch fetch reactions for search results
        await fetchAllReactions(formattedResults.slice(0, 10));
      } catch (error) {
        console.error("Search failed:", error);
        setSearchResults([]);
      } finally {
        setSearchLoading(false);
      }
    }, 500),
    []
  );

  // Handle search term changes with real-time search
  const handleSearchTermChange = useCallback(
    (term) => {
      setSearchTerm(term);

      if (!term || !term.trim()) {
        setIsSearching(false);
        setSearchResults([]);
        setSearchLoading(false);
        // Cancel any pending search
        if (handleSearch.cancel) {
          handleSearch.cancel();
        }
        return;
      }

      handleSearch(term);
    },
    [handleSearch]
  );

  // Handle search submission (Enter key)
  const handleSearchSubmit = useCallback(
    (term) => {
      if (!term || !term.trim()) {
        setIsSearching(false);
        setSearchResults([]);
        setSearchLoading(false);
        return;
      }

      setSearchLoading(true);
      setIsSearching(true);
      handleSearch(term);
    },
    [handleSearch]
  );

  // Memoize advertisement fetch to prevent unnecessary re-renders
  const fetchAdvertisements = useCallback(async () => {
    try {
      setLoadingAds(true);
      const response = await getAllPublicAdvertisements();
      if (response.success) {
        setAdvertisements(response.data || []);
      } else {
        console.error("Failed to fetch advertisements:", response.error);
        setAdvertisements([]);
      }
    } catch (error) {
      console.error("Error fetching advertisements:", error);
      setAdvertisements([]);
    } finally {
      setLoadingAds(false);
    }
  }, []);

  // Optimized news fetching with pagination
  const fetchNews = useCallback(async (page = 1) => {
    try {
      setNewsData((prev) => ({ ...prev, loading: true }));

      const response = await getAllNews(page, 50);

      // Handle paginated response structure
      let newsResults;
      let pagination = {};

      if (response.results) {
        // Paginated response
        newsResults = response.results;
        pagination = {
          count: response.count || 0,
          next: response.next,
          previous: response.previous,
        };
      } else if (Array.isArray(response)) {
        // Direct array response (fallback)
        newsResults = response;
        pagination = { count: response.length, next: null, previous: null };
      } else {
        throw new Error("Invalid response format");
      }

      if (!newsResults || newsResults.length === 0) {
        throw new Error("No news data received");
      }

      const formattedNews = newsResults
        .map(formatNewsItem)
        .filter((article) => article && article.id)
        .sort(
          (a, b) =>
            new Date(b.publishedDateTime) - new Date(a.publishedDateTime)
        );

      // Update pagination info
      setCurrentPage(page);
      setTotalCount(pagination.count || 0);
      setTotalPages(Math.ceil((pagination.count || 0) / 50));

      // Organize news data
      const shuffledNews = shuffleWithLatest([...formattedNews], 1, true);
      const organizedSections = organizeNewsData(shuffledNews);

      setNewsData({
        sections: organizedSections,
        loading: false,
        error: null,
      });

      // Fetch reactions for first 15 articles only
      fetchAllReactions(formattedNews.slice(0, 15));
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setNewsData((prev) => ({
        ...prev,
        loading: false,
        error: error.message,
      }));
    }
  }, []);

  // Batch reaction fetching to reduce API calls
  const fetchNewsReactions = useCallback(
    async (newsId) => {
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
    },
    [loadingReactions]
  );

  // Optimized reaction handlers with better error handling
  const handlePostLove = useCallback(
    async (newsId, loveStatus) => {
      try {
        const newReaction = await postNewsLove(newsId, loveStatus);
        setNewsReactions((prev) => ({
          ...prev,
          [newsId]: prev[newsId]
            ? [...prev[newsId], newReaction]
            : [newReaction],
        }));
        await fetchNewsReactions(newsId);
        return newReaction;
      } catch (error) {
        console.error(
          `Failed to post love reaction for news ${newsId}:`,
          error
        );
        throw error;
      }
    },
    [fetchNewsReactions]
  );

  const handlePostComment = useCallback(
    async (newsId, commentText) => {
      try {
        if (!commentText || commentText.trim() === "") {
          throw new Error("Comment cannot be empty");
        }
        const newReaction = await postNewsComment(newsId, commentText.trim());
        setNewsReactions((prev) => ({
          ...prev,
          [newsId]: prev[newsId]
            ? [...prev[newsId], newReaction]
            : [newReaction],
        }));
        await fetchNewsReactions(newsId);
        return newReaction;
      } catch (error) {
        console.error(`Failed to post comment for news ${newsId}:`, error);
        throw error;
      }
    },
    [fetchNewsReactions]
  );

  const handlePostReaction = useCallback(
    async (newsId, reactionData) => {
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
    },
    [handlePostLove, handlePostComment]
  );

  // Initial data fetch with parallel loading
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setNewsData((prev) => ({ ...prev, loading: true }));
        setNewsReactions({});
        setLoadingReactions({});

        // Fetch news and ads in parallel
        const [newsResult, adsResult] = await Promise.allSettled([
          fetchNews(1),
          fetchAdvertisements(),
        ]);

        if (newsResult.status === "rejected") {
          throw new Error(newsResult.reason?.message || "Failed to fetch news");
        }
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
        setNewsData((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };

    fetchInitialData();
  }, [fetchNews, fetchAdvertisements]);

  // Optimize reaction fetching - use batch requests and limit concurrent requests
  const fetchAllReactions = useCallback(
    async (articles) => {
      const validArticles = articles.filter((article) => article && article.id);

      // Process reactions in batches of 3 to avoid overwhelming the server
      const batchSize = 3;
      for (let i = 0; i < validArticles.length; i += batchSize) {
        const batch = validArticles.slice(i, i + batchSize);
        const promises = batch.map((article) =>
          fetchNewsReactions(article.id).catch((err) =>
            console.warn(
              `Failed to fetch reactions for article ${article.id}:`,
              err
            )
          )
        );
        await Promise.allSettled(promises);

        // Add delay between batches to prevent rate limiting
        if (i + batchSize < validArticles.length) {
          await new Promise((resolve) => setTimeout(resolve, 200));
        }
      }
    },
    [fetchNewsReactions]
  );

  // Memoize the organizeNewsData function to prevent unnecessary recalculations
  const organizeNewsData = useMemo(() => {
    return (allNews) => {
      const sections = [];
      let availableNews = [...allNews];
      const assignedIds = new Set();

      if (!allNews || allNews.length === 0) {
        console.warn("No news articles provided to organizeNewsData");
        return sections;
      }

      availableNews = availableNews.filter(isValidArticle);
      if (availableNews.length === 0) {
        console.warn("No valid news articles after filtering");
        return sections;
      }

      const maxSections = Math.min(3, Math.ceil(availableNews.length / 20));

      for (
        let sectionIndex = 0;
        sectionIndex < maxSections && availableNews.length > 10;
        sectionIndex++
      ) {
        const section = {};
        const sectionNews = shuffleWithLatest([...availableNews], 0, true);

        // Helper function to assign unique articles (optimized)
        const assignUniqueArticles = (count) => {
          const articles = [];
          let attempts = 0;
          const maxAttempts = Math.min(count * 2, sectionNews.length);

          while (
            articles.length < count &&
            sectionNews.length > 0 &&
            attempts < maxAttempts
          ) {
            const randomIndex = Math.floor(Math.random() * sectionNews.length);
            const article = sectionNews[randomIndex];

            if (isValidArticle(article) && !assignedIds.has(article.id)) {
              articles.push(article);
              assignedIds.add(article.id);
              sectionNews.splice(randomIndex, 1);

              const originalIndex = availableNews.findIndex(
                (a) => isValidArticle(a) && a.id === article.id
              );
              if (originalIndex > -1) {
                availableNews.splice(originalIndex, 1);
              }
            } else {
              if (randomIndex < sectionNews.length) {
                sectionNews.splice(randomIndex, 1);
              }
            }
            attempts++;
          }
          return articles;
        };

        // Assign articles more efficiently
        const featuredArticles = assignUniqueArticles(1);
        section.featuredArticle =
          featuredArticles.length > 0 ? featuredArticles[0] : null;

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
          .filter(isValidArticle)
          .map((article) => ({
            id: article.id,
            title: article.title || "Untitled",
            description: article.description || "",
            timeAgo: article.publishedTime || "Recently",
            category: article.category || "News",
            image: article.image || getDefaultImage(),
          }));

        const sidebarArticlesRaw = assignUniqueArticles(6);
        section.sidebarArticles = sidebarArticlesRaw.filter(isValidArticle);

        // Initialize tabs data more efficiently
        section.tabsData = {};
        const remainingArticles = availableNews.filter(
          (article) => isValidArticle(article) && !assignedIds.has(article.id)
        );

        // Optimize tab processing
        const matchesCategory = (article, categoryFilters) => {
          if (!categoryFilters) return true;
          const articleCategory = article.category.toLowerCase();
          const articleTitle = article.title.toLowerCase();
          const articleDescription = article.description.toLowerCase();

          return categoryFilters.some(
            (filter) =>
              articleCategory.includes(filter.toLowerCase()) ||
              articleTitle.includes(filter.toLowerCase()) ||
              articleDescription.includes(filter.toLowerCase())
          );
        };

        TAB_CONFIGS.forEach((config) => {
          let tabArticles = [];
          if (config.categoryFilter) {
            const categoryArticles = remainingArticles.filter((article) => {
              if (!isValidArticle(article)) return false;
              return matchesCategory(article, config.categoryFilter);
            });
            tabArticles = [...categoryArticles.slice(0, config.count)];

            if (tabArticles.length < config.count) {
              const usedInThisTab = new Set(tabArticles.map((a) => a.id));
              const otherArticles = shuffleWithLatest(
                remainingArticles.filter(
                  (article) =>
                    isValidArticle(article) &&
                    !usedInThisTab.has(article.id) &&
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
              (article) =>
                isValidArticle(article) && !assignedIds.has(article.id)
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

          tabArticles = tabArticles.filter(isValidArticle);
          section.tabsData[config.key] = tabArticles;
        });

        sections.push(section);
      }

      // Handle additional section logic (simplified)
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

            // Add audio news, long read, live updates efficiently
            if (remainingShuffled.length > 7) {
              const audioArticle = remainingShuffled[7];
              additionalSection.audioNews = {
                title: audioArticle.title || "Latest News Update",
                description:
                  audioArticle.description ||
                  "Stay updated with the latest news",
                category: "THE HEADLINES",
                sentiment: audioArticle.sentiment || "Neutral",
                image: audioArticle.image || getDefaultImage(),
              };
            }

            if (remainingShuffled.length > 8) {
              additionalSection.longReadArticle = remainingShuffled[8];
            }

            if (remainingShuffled.length > 9) {
              const liveUpdateArticles = remainingShuffled.slice(9, 13);
              additionalSection.liveUpdates = liveUpdateArticles
                .filter(isValidArticle)
                .map((article) => ({
                  id: article.id,
                  title: article.title || "Untitled",
                  description: article.description || "",
                  timeAgo: article.publishedTime || "Recently",
                  category: article.category || "News",
                  image: article.image || getDefaultImage(),
                }));
            }

            const tabsRemaining = remainingShuffled.slice(13);
            if (tabsRemaining.length > 0) {
              const matchesCategory = (article, categoryFilters) => {
                if (!categoryFilters) return true;
                const articleCategory = article.category.toLowerCase();
                const articleTitle = article.title.toLowerCase();
                const articleDescription = article.description.toLowerCase();

                return categoryFilters.some(
                  (filter) =>
                    articleCategory.includes(filter.toLowerCase()) ||
                    articleTitle.includes(filter.toLowerCase()) ||
                    articleDescription.includes(filter.toLowerCase())
                );
              };

              TAB_CONFIGS.forEach((config) => {
                let tabArticles = [];
                if (config.categoryFilter) {
                  const categoryArticles = tabsRemaining.filter((article) => {
                    if (!isValidArticle(article)) return false;
                    return matchesCategory(article, config.categoryFilter);
                  });
                  tabArticles = categoryArticles.slice(
                    0,
                    Math.min(config.count, 4)
                  );
                } else {
                  tabArticles = tabsRemaining
                    .sort(
                      (a, b) =>
                        new Date(b.publishedDateTime) -
                        new Date(a.publishedDateTime)
                    )
                    .slice(0, Math.min(config.count, 4));
                }
                additionalSection.tabsData[config.key] =
                  tabArticles.filter(isValidArticle);
              });
            }
            sections.push(additionalSection);
          }
        }
      }

      return sections;
    };
  }, []);

  const scrollToFooter = useCallback(() => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    const handleScrollToAbout = () => scrollToFooter();
    window.addEventListener("scrollToAbout", handleScrollToAbout);
    return () =>
      window.removeEventListener("scrollToAbout", handleScrollToAbout);
  }, [scrollToFooter]);

  const handleAdView = useCallback((adId) => {
    console.log(`Ad ${adId} viewed`);
  }, []);

  // Pagination handlers
  const handlePreviousPage = useCallback(() => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      fetchNews(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, fetchNews]);

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      fetchNews(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, totalPages, fetchNews]);

  const handlePageClick = useCallback(
    (pageNumber) => {
      if (
        pageNumber !== currentPage &&
        pageNumber >= 1 &&
        pageNumber <= totalPages
      ) {
        fetchNews(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [currentPage, totalPages, fetchNews]
  );

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let start = Math.max(1, currentPage - 2);
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      if (start > 1) {
        pages.push(1);
        if (start > 2) pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages) {
        if (end < totalPages - 1) pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (newsData.loading) return <HomepageSkeleton />;
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
        <Navbar
          onScrollToAbout={scrollToFooter}
          onSearch={handleSearchSubmit}
          searchTerm={searchTerm}
          setSearchTerm={handleSearchTermChange}
        />

        <main className="w-full mx-auto px-2 md:px-10 py-4 sm:py-8 pt-[150px] md:pt-[180px] lg:pt-[175px]">
          <div className="w-full justify-center items-center">
            {isSearching ? (
              <div className="search-results w-full justify-center items-center my-8">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  Search Results for "{searchTerm}"
                </h2>
                {/* Loading state */}
                {searchLoading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-2 text-gray-600">Searching...</span>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {searchResults.map((article) => (
                      <StandardArticleCard
                        key={article.id}
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
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-center text-gray-600 mb-4">
                      No results found.
                    </p>
                    <div className="flex justify-center">
                      <Button
                        onClick={() => {
                          setIsSearching(false);
                          setSearchTerm("");
                        }}
                        className="mt-4"
                      >
                        Back to Home
                      </Button>
                    </div>
                  </div>
                )}

                {/* Back to Home button when results are found */}
                {searchResults.length > 0 && (
                  <div className="flex justify-center items-center my-10">
                    <Button
                      onClick={() => {
                        setIsSearching(false);
                        setSearchTerm("");
                      }}
                      className="mt-4"
                    >
                      Back to Home
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {newsData.sections.map((section, index) => (
                  <div key={index}>
                    <div className="grid grid-cols-1 xl:grid-cols-[3fr_1fr] gap-6 xl:gap-8 mb-12">
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
                                handlePostLove(
                                  section.featuredArticle.id,
                                  loveStatus
                                )
                              }
                              onPostComment={(commentText) =>
                                handlePostComment(
                                  section.featuredArticle.id,
                                  commentText
                                )
                              }
                            />
                            <AdPlacement
                              advertisements={advertisements}
                              placement="header-banner"
                              onAdView={handleAdView}
                              className="mb-6"
                            />
                          </div>
                        )}

                        {section.audioNews && (
                          <div className="mb-8">
                            <AudioNewsCard {...section.audioNews} />
                          </div>
                        )}

                        <div className="w-full flex text-center">
                          <AdPlacement
                            advertisements={advertisements}
                            placement="header-banner"
                            onAdView={handleAdView}
                            className="mb-6"
                          />
                        </div>

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
                                handlePostLove(
                                  section.longReadArticle.id,
                                  loveStatus
                                )
                              }
                              onPostComment={(commentText) =>
                                handlePostComment(
                                  section.longReadArticle.id,
                                  commentText
                                )
                              }
                            />
                            <AdPlacement
                              advertisements={advertisements}
                              placement="content-middle"
                              onAdView={handleAdView}
                              className="mb-6"
                            />
                          </NewsSection>
                        )}

                        {Object.keys(section.tabsData).length > 0 && (
                          <div className="mb-8">
                            <TabbedNewsSection
                              dynamicTabsData={section.tabsData}
                              dynamicTabsConfig={generateTabsConfig(
                                section.tabsData
                              )}
                              newsReactions={newsReactions}
                              onPostLove={handlePostLove}
                              onPostComment={handlePostComment}
                            />
                          </div>
                        )}

                        {/* Content Middle Ad */}
                        <AdPlacement
                          advertisements={advertisements}
                          placement="content-middle"
                          onAdView={handleAdView}
                          className="mb-6"
                        />

                        {section.liveUpdates &&
                          section.liveUpdates.length > 0 && (
                            <>
                              <NewsSection>
                                <LiveUpdateCard
                                  updates={section.liveUpdates}
                                  newsReactions={newsReactions}
                                  onPostLove={handlePostLove}
                                  onPostComment={handlePostComment}
                                />
                              </NewsSection>
                            </>
                          )}

                        {Object.keys(section.tabsData).length > 0 && (
                          <div className="mb-8">
                            <ListedNewsSection
                              dynamicTabsData={section.tabsData}
                              dynamicTabsConfig={generateTabsConfig(
                                section.tabsData
                              )}
                              newsReactions={newsReactions}
                              onPostLove={handlePostLove}
                              onPostComment={handlePostComment}
                            />
                          </div>
                        )}

                        {/* Content Bottom Ad */}
                        <div className="flex justify-center items-center">
                          <AdPlacement
                            advertisements={advertisements}
                            placement="content-middle"
                            onAdView={handleAdView}
                            className="mb-6"
                          />
                        </div>
                        {section.audioNews && (
                          <div className="mb-8">
                            <AudioNewsCard {...section.audioNews} />
                          </div>
                        )}
                      </div>

                      {/* Sidebar */}
                      <aside className="w-full xl:w-full">
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
                                  .slice(0, 7)
                                  .map((article) => (
                                    <div key={article.id} className="w-full">
                                      <StandardArticleCard
                                        article={article}
                                        reactions={
                                          newsReactions[article.id] || []
                                        }
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
                                          handlePostComment(
                                            article.id,
                                            commentText
                                          )
                                        }
                                      />
                                    </div>
                                  ))}
                                <AdPlacement
                                  advertisements={advertisements}
                                  placement="card"
                                  onAdView={handleAdView}
                                  className="mt-8"
                                />
                              </div>
                            </div>
                          )}

                        {/* Sidebar Ad - Mobile Mid */}
                        <AdvertisementContainer
                          advertisements={advertisements}
                          position="mobile-mid"
                          width="100%"
                          height="200px"
                          className="mb-6 xl:hidden"
                          maxAds={1}
                        />

                        {section.sidebarArticles &&
                          Array.isArray(section.sidebarArticles) &&
                          section.sidebarArticles.length > 4 && (
                            <div className="xl:hidden w-full mb-6">
                              <div className="space-y-4">
                                {section.sidebarArticles
                                  .filter(isValidArticle)
                                  .slice(4, 10)
                                  .map((article) => (
                                    <div key={article.id} className="w-full">
                                      <StandardArticleCard
                                        article={article}
                                        reactions={
                                          newsReactions[article.id] || []
                                        }
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
                                          handlePostComment(
                                            article.id,
                                            commentText
                                          )
                                        }
                                      />
                                    </div>
                                  ))}
                              </div>
                            </div>
                          )}

                        {/* Desktop Sidebar */}
                        <div className="xl:block bg-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center">
                          {/* Sidebar Top Ad */}
                          <AdvertisementContainer
                            advertisements={advertisements}
                            position="sidebar-top"
                            width="100%"
                            height="200px"
                            className="mb-6"
                            maxAds={1}
                          />

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
                                    .slice(0, 7)
                                    .map((article) => (
                                      <div key={article.id} className="w-full">
                                        <StandardArticleCard
                                          article={article}
                                          reactions={
                                            newsReactions[article.id] || []
                                          }
                                          onPostReaction={(reactionData) =>
                                            handlePostReaction(
                                              article.id,
                                              reactionData
                                            )
                                          }
                                          onPostLove={(loveStatus) =>
                                            handlePostLove(
                                              article.id,
                                              loveStatus
                                            )
                                          }
                                          onPostComment={(commentText) =>
                                            handlePostComment(
                                              article.id,
                                              commentText
                                            )
                                          }
                                        />
                                      </div>
                                    ))}
                                  <AdPlacement
                                    advertisements={advertisements}
                                    placement="card"
                                    onAdView={handleAdView}
                                    className="my-6"
                                  />
                                </div>
                              </div>
                            )}

                          {/* Sidebar Mid Ad */}
                          <AdvertisementContainer
                            advertisements={advertisements}
                            position="sidebar-mid"
                            width="100%"
                            height="200px"
                            className="my-6"
                            maxAds={1}
                          />

                          {section.sidebarArticles &&
                            Array.isArray(section.sidebarArticles) &&
                            section.sidebarArticles.length > 3 && (
                              <div className="w-full">
                                <div className="space-y-4">
                                  {section.sidebarArticles
                                    .filter(isValidArticle)
                                    .slice(4, 10)
                                    .map((article) => (
                                      <div key={article.id} className="w-full">
                                        <StandardArticleCard
                                          article={article}
                                          reactions={
                                            newsReactions[article.id] || []
                                          }
                                          onPostReaction={(reactionData) =>
                                            handlePostReaction(
                                              article.id,
                                              reactionData
                                            )
                                          }
                                          onPostLove={(loveStatus) =>
                                            handlePostLove(
                                              article.id,
                                              loveStatus
                                            )
                                          }
                                          onPostComment={(commentText) =>
                                            handlePostComment(
                                              article.id,
                                              commentText
                                            )
                                          }
                                        />
                                      </div>
                                    ))}
                                </div>
                              </div>
                            )}

                          {/* Sidebar Bottom Ad */}
                          <AdvertisementContainer
                            advertisements={advertisements}
                            position="sidebar-bottom"
                            width="100%"
                            height="192px"
                            className="mt-6"
                            maxAds={1}
                          />
                        </div>
                      </aside>
                    </div>
                  </div>
                ))}

                {/* Pagination Component */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12 mb-8">
                    <div className="flex items-center space-x-2">
                      {/* Previous Button */}
                      <Button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        variant="outline"
                        className="px-4 py-2"
                      >
                        Previous
                      </Button>

                      {/* Page Numbers */}
                      <div className="flex items-center space-x-1">
                        {getPageNumbers().map((pageNum, index) => {
                          if (pageNum === "...") {
                            return (
                              <span
                                key={`ellipsis-${index}`}
                                className="px-3 py-2 text-gray-500"
                              >
                                ...
                              </span>
                            );
                          }

                          return (
                            <Button
                              key={pageNum}
                              onClick={() => handlePageClick(pageNum)}
                              variant={
                                currentPage === pageNum ? "default" : "outline"
                              }
                              className={`px-3 py-2 min-w-[40px] ${
                                currentPage === pageNum
                                  ? "bg-blue-600 text-white"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                      </div>

                      {/* Next Button */}
                      <Button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        variant="outline"
                        className="px-4 py-2"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}

                {/* Page Info */}
                {/* {totalCount > 0 && (
                  <div className="text-center text-gray-600 text-sm mb-8">
                    Showing page {currentPage} of {totalPages} ({totalCount}{" "}
                    total articles)
                  </div>
                )} */}
              </>
            )}
          </div>
        </main>
      </div>
      <div ref={footerRef}>
        <FooterSection />
      </div>
    </>
  );
}

function debounce(func, wait) {
  let timeout;
  const debouncedFunction = function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  // Add cancel method
  debouncedFunction.cancel = () => {
    clearTimeout(timeout);
  };

  return debouncedFunction;
}
