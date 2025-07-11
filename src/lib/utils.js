export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

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

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
export function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

// Function to truncate text to 20% of words
export const getTruncatedText = (text) => {
  if (!text) return "";
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

export const shuffleWithLatest = (array, keepLatestCount = 1) => {
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

export function formatFullDate(dateString) {
  if (!dateString) return "N/A";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return "Invalid Date";
  }
}

// Advertisement status utility functions
export function getProgressVariant(progress) {
  switch (progress) {
    case "Approved":
    case "approved":
      return "default";
    case "Rejected":
    case "rejected":
      return "destructive";
    case "Pending":
    case "pending":
      return "secondary";
    default:
      return "outline";
  }
}

export function getProgressColor(progress) {
  switch (progress) {
    case "Approved":
    case "approved":
      return "text-green-600 bg-green-50";
    case "Rejected":
    case "rejected":
      return "text-red-600 bg-red-50";
    case "Pending":
    case "pending":
      return "text-yellow-600 bg-yellow-50";
    default:
      return "text-gray-600 bg-gray-50";
  }
}

export function formatProgress(progress) {
  const progressMap = {
    approved: "Approved",
    rejected: "Rejected",
    pending: "Pending",
    draft: "Pending",
  };
  return progressMap[progress] || progress;
}
