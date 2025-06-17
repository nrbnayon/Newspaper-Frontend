// src/lib/news-service.js
import apiClient from "./auth-service";

// ========================
// NEWS API FUNCTIONS
// ========================

/**
 * Get all news articles
 * @returns {Promise} Array of news articles
 */
export const getAllNews = async () => {
  try {
    const response = await apiClient.get("/news/get/all-news/");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch all news:", error);
    throw error;
  }
};

/**
 * Get single news article details
 * @param {number} newsId - ID of the news article
 * @returns {Promise} News article details
 */
export const getNewsDetail = async (newsId) => {
  try {
    const response = await apiClient.get(`/news/get/news-detail/${newsId}/`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch news detail for ID ${newsId}:`, error);
    throw error;
  }
};

/**
 * Get all reactions (comments and likes) for a news article
 * @param {number} newsId - ID of the news article
 * @returns {Promise} Array of reactions
 */
export const getNewsReactions = async (newsId) => {
  try {
    const response = await apiClient.get(`/news/get/all-reactions/${newsId}/`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch reactions for news ID ${newsId}:`, error);
    throw error;
  }
};

/**
 * Post a reaction (comment and/or like) to a news article
 * @param {number} newsId - ID of the news article
 * @param {Object} reactionData - Reaction data
 * @param {boolean} reactionData.love - Whether user loves the article
 * @param {string} reactionData.comment - User's comment
 * @returns {Promise} Created reaction
 */
export const postNewsReaction = async (newsId, reactionData) => {
  try {
    const response = await apiClient.post(
      `/news/post/reactions/${newsId}/`,
      reactionData
    );
    return response.data;
  } catch (error) {
    console.error(`Failed to post reaction for news ID ${newsId}:`, error);
    throw error;
  }
};

// ========================
// UTILITY FUNCTIONS
// ========================

/**
 * Format news data for component consumption
 * @param {Object} newsItem - Raw news item from API
 * @returns {Object} Formatted news item
 */
export const formatNewsItem = (newsItem) => {
  return {
    id: newsItem.id,
    title: newsItem.title,
    content: newsItem.description,
    category: newsItem.category,
    publishedTime: newsItem.published_relative_time,
    publishedDateTime: newsItem.published_datetime,
    image: newsItem.image,
    sentiment: newsItem.badge_status,
    isFeatured: true, 
    imageAttribution: "News Source",
    readTime: Math.ceil(newsItem.description?.split(" ").length / 200) || 3,
  };
};

/**
 * Format reaction data for component consumption
 * @param {Object} reaction - Raw reaction from API
 * @returns {Object} Formatted reaction
 */
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

/**
 * Transform reactions into comments format for CommentsSection component
 * @param {Array} reactions - Array of reactions from API
 * @returns {Array} Array of formatted comments
 */
export const transformReactionsToComments = (reactions) => {
  return reactions
    .filter((reaction) => reaction.comment && reaction.comment.trim() !== "")
    .map((reaction, index) => ({
      id: reaction.id,
      author: `User ${reaction.user}`, // You might want to fetch user details separately
      content: reaction.comment,
      time: formatTimeAgo(reaction.created_at),
      avatar: `https://images.unsplash.com/photo-${
        1472099645785 + index
      }?w=32&h=32&fit=crop&crop=face`,
      loved: reaction.love,
    }));
};

/**
 * Format datetime to relative time
 * @param {string} datetime - ISO datetime string
 * @returns {string} Formatted relative time
 */
export const formatTimeAgo = (datetime) => {
  const now = new Date();
  const past = new Date(datetime);
  const diffInSeconds = Math.floor((now - past) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  return `${Math.floor(diffInSeconds / 86400)} days ago`;
};

/**
 * Count total loves for a news article
 * @param {Array} reactions - Array of reactions
 * @returns {number} Total number of loves
 */
export const countLoves = (reactions) => {
  return reactions.filter((reaction) => reaction.love === true).length;
};

/**
 * Count total comments for a news article
 * @param {Array} reactions - Array of reactions
 * @returns {number} Total number of comments
 */
export const countComments = (reactions) => {
  return reactions.filter(
    (reaction) => reaction.comment && reaction.comment.trim() !== ""
  ).length;
};

/**
 * Check if current user has loved the article
 * @param {Array} reactions - Array of reactions
 * @param {number} currentUserId - Current user ID
 * @returns {boolean} Whether user has loved the article
 */
export const hasUserLoved = (reactions, currentUserId) => {
  return reactions.some(
    (reaction) => reaction.user === currentUserId && reaction.love === true
  );
};

/**
 * Get user's comment for the article
 * @param {Array} reactions - Array of reactions
 * @param {number} currentUserId - Current user ID
 * @returns {string|null} User's comment or null
 */
export const getUserComment = (reactions, currentUserId) => {
  const userReaction = reactions.find(
    (reaction) => reaction.user === currentUserId && reaction.comment
  );
  return userReaction ? userReaction.comment : null;
};
