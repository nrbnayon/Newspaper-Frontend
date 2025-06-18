import apiClient from "./auth-service";
// ========================
// NEWS API FUNCTIONS
// ========================
export const getAllNews = async () => {
  try {
    const response = await apiClient.get("/news/get/all-news/");
    console.log("Raw API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch all news:", error);
    throw error;
  }
};

export const formatNewsItem = (newsItem) => {
  const safeNewsItem = newsItem || {};
  return {
    id: safeNewsItem.id || Math.random(),
    title: safeNewsItem.title || "Untitled Article",
    description: safeNewsItem.description || "No description available",
    category: safeNewsItem.category || "General",
    publishedTime:
      safeNewsItem.published_relative_time ||
      formatTimeAgo(safeNewsItem.published_datetime) ||
      "Recently",
    publishedDateTime:
      safeNewsItem.published_datetime || new Date().toISOString(),
    image: safeNewsItem.image || getDefaultImage(safeNewsItem.category),
    sentiment: safeNewsItem.badge_status || "Neutral",
    isFeatured: safeNewsItem.is_featured || false,
    imageAttribution:
      safeNewsItem.author || safeNewsItem.source || "News Source",
    readTime: calculateReadTime(safeNewsItem.description) || 3,
    author: safeNewsItem.author || "Unknown Author",
    source: safeNewsItem.source || "News Source",
    url: safeNewsItem.url || "#",
    tags: safeNewsItem.tags || [],
  };
};

const calculateReadTime = (content) => {
  if (!content || typeof content !== "string") return 3;

  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  return Math.max(1, readTime);
};

const getDefaultImage = (category = "general") => {
  const defaultImages = {
    technology:
      "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    business:
      "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    health:
      "https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    environment:
      "https://images.pexels.com/photos/3894224/pexels-photo-3894224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    politics:
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    sports:
      "https://images.pexels.com/photos/5915202/pexels-photo-5915202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    local:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    general:
      "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const categoryKey = category.toLowerCase();
  return defaultImages[categoryKey] || defaultImages.general;
};

export const formatTimeAgo = (datetime) => {
  if (!datetime) return "Recently";
  try {
    const now = new Date();
    const past = new Date(datetime);
    if (isNaN(past.getTime())) return "Recently";
    const diffInSeconds = Math.floor((now - past) / 1000);
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600)
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000)
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000)
      return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  } catch (error) {
    console.error("Error formatting time:", error);
    return "Recently";
  }
};

export const formatNewsArray = (newsArray) => {
  if (!Array.isArray(newsArray)) {
    console.warn("Expected array but received:", typeof newsArray);
    return [];
  }
  return newsArray
    .filter((item) => item && (item.title || item.description))
    .map(formatNewsItem)
    .sort(
      (a, b) => new Date(b.publishedDateTime) - new Date(a.publishedDateTime)
    );
};

export const getCategorizedNews = async () => {
  try {
    const allNews = await getAllNews();
    const formattedNews = formatNewsArray(allNews);
    const categorized = {
      all: formattedNews,
      featured: formattedNews.filter((item) => item.isFeatured),
      byCategory: {},
    };
    formattedNews.forEach((item) => {
      const category = item.category;
      if (!categorized.byCategory[category]) {
        categorized.byCategory[category] = [];
      }
      categorized.byCategory[category].push(item);
    });

    return categorized;
  } catch (error) {
    console.error("Failed to get categorized news:", error);
    throw error;
  }
};

export const organizeNewsByCategory = (allNews) => {
  if (!Array.isArray(allNews) || allNews.length === 0) {
    return {};
  }
  const availableNews = [...allNews];
  const tabsData = {};
  const tabConfigs = [
    {
      key: "international",
      preferredCategories: ["International", "Politics", "War Coverage"],
      count: 8,
    },
    {
      key: "latestNews",
      preferredCategories: ["Breaking News", "Latest News", "Updates", "Live"],
      count: 8,
    },
    {
      key: "whatWeKnow",
      preferredCategories: ["Analysis", "Investigation", "Background"],
      count: 8,
    },
    {
      key: "maps",
      preferredCategories: ["Geographic", "Regional", "Local"],
      count: 8,
    },
    {
      key: "photos",
      preferredCategories: ["Photography", "Visual", "Gallery"],
      count: 8,
    },
    {
      key: "tunnels",
      preferredCategories: ["Investigation", "Technical", "Security"],
      count: 8,
    },
    {
      key: "oneImage",
      preferredCategories: ["Photo Story", "Featured", "Iconic"],
      count: 8,
    },
  ];
  tabConfigs.forEach((config) => {
    const tabArticles = [];
    config.preferredCategories.forEach((preferredCategory) => {
      const matchingArticles = availableNews.filter(
        (article) =>
          article.category &&
          article.category
            .toLowerCase()
            .includes(preferredCategory.toLowerCase())
      );
      matchingArticles.forEach((article) => {
        if (tabArticles.length < config.count) {
          tabArticles.push(article);
          const index = availableNews.findIndex(
            (item) => item.id === article.id
          );
          if (index > -1) {
            availableNews.splice(index, 1);
          }
        }
      });
    });
    while (tabArticles.length < config.count && availableNews.length > 0) {
      tabArticles.push(availableNews.shift());
    }

    tabsData[config.key] = tabArticles;
  });
  let tabIndex = 0;
  while (availableNews.length > 0) {
    const currentTab = tabConfigs[tabIndex % tabConfigs.length];
    if (tabsData[currentTab.key].length < currentTab.count) {
      tabsData[currentTab.key].push(availableNews.shift());
    }
    tabIndex++;
  }

  return tabsData;
};

export const getHomepageNews = async () => {
  try {
    const categorizedNews = await getCategorizedNews();
    const allNews = categorizedNews.all;

    if (allNews.length === 0) {
      throw new Error("No news articles available");
    }
    const availableNews = [...allNews];
    const featured =
      availableNews.find((item) => item.isFeatured) || availableNews[0];
    if (featured) {
      const featuredIndex = availableNews.findIndex(
        (item) => item.id === featured.id
      );
      if (featuredIndex > -1) {
        availableNews.splice(featuredIndex, 1);
      }
    }
    const longRead =
      availableNews.find((item) => item.readTime >= 10) ||
      availableNews[
        Math.floor(Math.random() * Math.min(5, availableNews.length))
      ];
    if (longRead) {
      const longReadIndex = availableNews.findIndex(
        (item) => item.id === longRead.id
      );
      if (longReadIndex > -1) {
        availableNews.splice(longReadIndex, 1);
      }
    }
    const sidebarArticles = availableNews.splice(0, 6);
    const liveUpdates = availableNews.splice(0, 4).map((article) => ({
      title: article.title,
      description: article.description,
      timeAgo: article.publishedTime,
      category: article.category,
      image: article.image,
    }));
    const audioNews = {
      title: featured?.title || "Latest News Update",
      description: featured?.description || "Stay updated with the latest news",
      category: "THE HEADLINES",
      sentiment: featured?.sentiment || "Neutral",
      image: featured?.image || getDefaultImage(),
    };
    const tabsData = organizeNewsByCategory(availableNews);
    return {
      featured,
      latest: allNews.slice(0, 10),
      trending: allNews.slice(0, 6),
      longRead,
      audioNews,
      liveUpdates,
      sidebarArticles,
      byCategory: categorizedNews.byCategory,
      tabsData,
      all: allNews,
    };
  } catch (error) {
    console.error("Failed to get homepage news:", error);
    throw error;
  }
};

// ========================
// REACTIONS API FUNCTIONS
// ========================

export const getNewsReactions = async (newsId) => {
  try {
    const response = await apiClient.get(`/news/get/all-reactions/${newsId}/`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch reactions for news ID ${newsId}:`, error);
    throw error;
  }
};

// Separate API call for posting love reaction
export const postNewsLove = async (newsId, loveStatus) => {
  try {
    const response = await apiClient.post(`/news/post/reactions/${newsId}/`, {
      love: loveStatus,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to post love reaction for news ID ${newsId}:`, error);
    throw error;
  }
};

// Separate API call for posting comment
export const postNewsComment = async (newsId, commentText) => {
  try {
    const response = await apiClient.post(`/news/post/reactions/${newsId}/`, {
      comment: commentText,
    });
    return response.data;
  } catch (error) {
    console.error(`Failed to post comment for news ID ${newsId}:`, error);
    throw error;
  }
};

// Legacy function - kept for backward compatibility but now uses separate calls
export const postNewsReaction = async (newsId, reactionData) => {
  try {
    const promises = [];
    
    // If love reaction is provided, post it separately
    if (reactionData.hasOwnProperty('love')) {
      promises.push(postNewsLove(newsId, reactionData.love));
    }
    
    // If comment is provided, post it separately
    if (reactionData.comment && reactionData.comment.trim() !== '') {
      promises.push(postNewsComment(newsId, reactionData.comment));
    }
    
    // Execute all API calls
    const results = await Promise.all(promises);
    
    // Return the last result or the first one if only one call was made
    return results.length > 0 ? results[results.length - 1] : null;
  } catch (error) {
    console.error(`Failed to post reaction for news ID ${newsId}:`, error);
    throw error;
  }
};

// ========================
// UTILITY FUNCTIONS
// ========================

export const formatReaction = (reaction) => {
  return {
    id: reaction.id,
    love: reaction.love,
    comment: reaction.comment,
    createdAt: reaction.created_at,
    userId: reaction.user,
    newsId: reaction.news,
  };
};

export const transformReactionsToComments = (reactions) => {
  if (!Array.isArray(reactions)) return [];

  return reactions
    .filter((reaction) => reaction.comment && reaction.comment.trim() !== "")
    .map((reaction, index) => ({
      id: reaction.id,
      author: `User ${reaction.user}`,
      content: reaction.comment,
      time: formatTimeAgo(reaction.created_at),
      avatar: `https://images.unsplash.com/photo-${
        1472099645785 + index
      }?w=32&h=32&fit=crop&crop=face`,
      loved: reaction.love,
    }));
};

export const countLoves = (reactions) => {
  if (!Array.isArray(reactions)) return 0;
  return reactions.filter((reaction) => reaction.love === true).length;
};

export const countComments = (reactions) => {
  if (!Array.isArray(reactions)) return 0;
  return reactions.filter(
    (reaction) => reaction.comment && reaction.comment.trim() !== ""
  ).length;
};

export const hasUserLoved = (reactions, currentUserId) => {
  if (!Array.isArray(reactions)) return false;
  return reactions.some(
    (reaction) => reaction.user === currentUserId && reaction.love === true
  );
};

export const getUserComment = (reactions, currentUserId) => {
  const userReaction = reactions.find(
    (reaction) => reaction.user === currentUserId && reaction.comment
  );
  return userReaction ? userReaction.comment : null;
};