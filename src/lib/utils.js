/**
 * Combines multiple class names into a single string
 * @param  {...string} inputs - Class names to combine
 * @returns {string} - Combined class names
 */
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Format a date to a human-readable string
 * @param {Date|string} date - Date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", {
    ...defaultOptions,
    ...options,
  }).format(new Date(date));
}

/**
 * Validate an email address
 * @param {string} email - Email to validate
 * @returns {boolean} - Whether the email is valid
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate a phone number
 * @param {string} phone - Phone to validate
 * @returns {boolean} - Whether the phone is valid
 */
export function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

// Function to truncate text to 20% of words
export const getTruncatedText = (text) => {
  if (!text) return "";
  //   const words = text.split(" ");
  //  const twentyPercentLength = Math.max(Math.ceil(words.length * 0.1), 200);
  const words = text.split(" ").filter((word) => word.length > 0);
  if (words.length <= 10) return text;
  if (words.twentyPercentLength <= 90) return text;
  return words.slice(0, 90).join(" ");
};

export const isValidArticle = (article) => {
  return (
    article &&
    typeof article === "object" &&
    article.id &&
    article.title &&
    typeof article.title === "string" &&
    article.title.trim() !== ""
  );
};

export const shuffleWithLatest = (
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

