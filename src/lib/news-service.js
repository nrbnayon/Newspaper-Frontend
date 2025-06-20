// Updated news-service.js with proper distribution

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

// Search news

export const searchAllNews = async ({ search_term }) => {
  try {
    const encodedTerm = encodeURIComponent(search_term);
    const response = await apiClient.get(`/news/search/?q=${encodedTerm}`);
    console.log("Raw API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to search news:", error);
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

export const getDefaultImage = (category = "general") => {
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


// Export shared tab configurations
export const TAB_CONFIGS = [
  {
    key: "latests",
    label: "Latest News",
    count: 8,
    categoryFilter: null,
    isDefault: true,
  },
  {
    key: "politics",
    label: "Politics", 
    count: 8,
    categoryFilter: ["politics", "government", "election", "policy"],
  },
  {
    key: "Local",
    label: "Local",
    count: 8,
    categoryFilter: ["local", "city", "community", "regional"],
  },
  {
    key: "whatWeKnow",
    label: "Analysis",
    count: 8,
    categoryFilter: ["analysis", "opinion", "editorial", "insight"],
  },
  {
    key: "maps",
    label: "Regional",
    count: 8,
    categoryFilter: ["regional", "national", "international", "world"],
  },
  {
    key: "photos",
    label: "Photos",
    count: 8,
    categoryFilter: ["photos", "gallery", "images", "visual"],
  },
  {
    key: "tunnels",
    label: "Investigations",
    count: 8,
    categoryFilter: ["investigation", "exclusive", "report", "expose"],
  },
  {
    key: "oneImage",
    label: "Sports",
    count: 8,
    categoryFilter: ["sports", "football", "basketball", "soccer", "athletics", "games"],
  },
];

// Updated organizeNewsByCategory function
export const organizeNewsByCategory = (allNews, usedIds = new Set()) => {
  if (!Array.isArray(allNews) || allNews.length === 0) {
    return {};
  }

  const availableNews = allNews
    .filter((article) => !usedIds.has(article.id))
    .sort(
      (a, b) => new Date(b.publishedDateTime) - new Date(a.publishedDateTime)
    );

  const tabsData = {};
  // Use shared TAB_CONFIGS
  TAB_CONFIGS.forEach((config) => {
    let tabArticles = [];
    if (config.categoryFilter) {
      const categoryArticles = availableNews.filter((article) =>
        matchesCategory(article, config.categoryFilter)
      );
      tabArticles = categoryArticles.slice(0, config.count);
      if (tabArticles.length < config.count) {
        const usedInThisTab = new Set(tabArticles.map((a) => a.id));
        const generalArticles = availableNews.filter(
          (article) => !usedInThisTab.has(article.id)
        );
        const needed = config.count - tabArticles.length;
        tabArticles = [...tabArticles, ...generalArticles.slice(0, needed)];
      }
    } else {
      tabArticles = availableNews.slice(0, config.count);
    }
    tabsData[config.key] = tabArticles;
  });

  return tabsData;
};

// Helper function to generate tabs config for HomePage
export const generateTabsConfig = (tabsData) => {
  return TAB_CONFIGS.filter(
    (config) => tabsData[config.key] && tabsData[config.key].length > 0
  );
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

export const postNewsReaction = async (newsId, reactionData) => {
  try {
    const promises = [];

    if (reactionData.hasOwnProperty("love")) {
      promises.push(postNewsLove(newsId, reactionData.love));
    }

    if (reactionData.comment && reactionData.comment.trim() !== "") {
      promises.push(postNewsComment(newsId, reactionData.comment));
    }

    const results = await Promise.all(promises);
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
    .map((reaction) => ({
      id: reaction.id,
      author: reaction.user?.user_profile
        ? `${reaction.user.user_profile.first_name || ""} ${
            reaction.user.user_profile.last_name || ""
          }`.trim() || "Anonymous"
        : "Anonymous",
      content: reaction.comment,
      time: formatTimeAgo(reaction.created_at),
      avatar:
        reaction.user?.user_profile?.profile_picture ||
        "/images/default-avatar.jpg",
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

// In src/lib/news-service.js

export const hasUserLoved = (reactions, currentUserId) => {
  if (!Array.isArray(reactions) || !currentUserId) return false;
  const userLoveReactions = reactions
    .filter(
      (reaction) => reaction.user.id === currentUserId && reaction.love !== null
    )
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  if (userLoveReactions.length === 0) return false;
  return userLoveReactions[0].love === true;
};

export const getUserComment = (reactions, currentUserId) => {
  const userReaction = reactions.find(
    (reaction) => reaction.user === currentUserId && reaction.comment
  );
  return userReaction ? userReaction.comment : null;
};
