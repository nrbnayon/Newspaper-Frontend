// src/components/news/TabbedNewsSection.jsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import StandardArticleCard from "./StandardArticleCard";

// Sample data for different tabs - This will come from database/API in future
const tabsData = {
  featured: [
    {
      id: 1,
      title: "Herby Bread-and-Butter Stuffing for Two",
      excerpt:
        "A perfectly seasoned stuffing recipe that's ideal for small gatherings...",
      category: "Featured Recipe",
      readTime: 3,
      date: "2 hours ago",
      image: "/fn1.png",
      badge: "Negative",
    },
    {
      id: 2,
      title: "Simple Bread-Pudding",
      excerpt: "Classic comfort dessert with a modern twist...",
      category: "Featured Recipe",
      readTime: 4,
      date: "3 hours ago",
      image: "/fn2.png",
      badge: "Negative",
    },
    {
      id: 3,
      title: "Turkey Gravy",
      excerpt: "Rich and flavorful gravy that complements any meal...",
      category: "Featured Recipe",
      readTime: 2,
      date: "4 hours ago",
      image: "/fn3.png",
      badge: "Negative",
    },
    {
      id: 4,
      title: "Thanksgiving Stuffing",
      excerpt: "Traditional stuffing recipe passed down through generations...",
      category: "Featured Recipe",
      readTime: 5,
      date: "5 hours ago",
      image: "/fn4.png",
      badge: "Negative",
    },
  ],
  bestSides: [
    {
      id: 6,
      title: "Roasted Brussels Sprouts with Bacon",
      excerpt: "Crispy sprouts with smoky bacon bits...",
      category: "Side Dish",
      readTime: 3,
      date: "1 hour ago",
      image: "/fn5.png",
      badge: "Popular",
    },
    {
      id: 7,
      title: "Honey Glazed Carrots",
      excerpt: "Sweet and tender carrots with a glossy finish...",
      category: "Side Dish",
      readTime: 2,
      date: "2 hours ago",
      image: "/fn1.png",
      badge: "Easy",
    },
    {
      id: 8,
      title: "Garlic Mashed Potatoes",
      excerpt: "Creamy potatoes with roasted garlic flavor...",
      category: "Side Dish",
      readTime: 4,
      date: "3 hours ago",
      image: "/fn2.png",
      badge: "Classic",
    },
    {
      id: 9,
      title: "Green Bean Almondine",
      excerpt: "Fresh green beans with toasted almonds...",
      category: "Side Dish",
      readTime: 3,
      date: "4 hours ago",
      image: "/fn3.png",
      badge: "Healthy",
    },
  ],
  makeAhead: [
    {
      id: 10,
      title: "Make-Ahead Turkey Brine",
      excerpt:
        "Prepare your turkey days in advance with this flavorful brine...",
      category: "Prep Ahead",
      readTime: 1,
      date: "12 hours ago",
      image: "/fn4.png",
      badge: "Time Saver",
    },
    {
      id: 11,
      title: "Freezer-Friendly Dinner Rolls",
      excerpt: "Soft rolls you can make weeks ahead and freeze...",
      category: "Prep Ahead",
      readTime: 5,
      date: "1 day ago",
      image: "/fn5.png",
      badge: "Freezable",
    },
    {
      id: 12,
      title: "Overnight French Toast Casserole",
      excerpt: "Assemble the night before for an easy morning...",
      category: "Prep Ahead",
      readTime: 3,
      date: "2 days ago",
      image: "/fn1.png",
      badge: "Overnight",
    },
  ],
  stunningDesserts: [
    {
      id: 13,
      title: "Chocolate Lava Cake",
      excerpt: "Decadent chocolate cake with molten center...",
      category: "Dessert",
      readTime: 4,
      date: "30 minutes ago",
      image: "/fn2.png",
      badge: "Showstopper",
    },
    {
      id: 14,
      title: "Tiramisu Parfait",
      excerpt: "Italian classic reimagined in individual servings...",
      category: "Dessert",
      readTime: 6,
      date: "1 hour ago",
      image: "/fn3.png",
      badge: "Elegant",
    },
    {
      id: 15,
      title: "Berry Cheesecake Bars",
      excerpt: "Creamy cheesecake with fresh berry topping...",
      category: "Dessert",
      readTime: 8,
      date: "2 hours ago",
      image: "/fn4.png",
      badge: "Crowd Pleaser",
    },
    {
      id: 16,
      title: "Salted Caramel Tart",
      excerpt: "Rich caramel tart with a hint of sea salt...",
      category: "Dessert",
      readTime: 7,
      date: "3 hours ago",
      image: "/fn5.png",
      badge: "Gourmet",
    },
  ],
};

// Dynamic tab configuration - This structure will come from your database/API
const tabsConfig = [
  {
    key: "featured",
    label: "Featured",
    isDefault: true,
    columns: 4,
    gap: 4,
  },
  {
    key: "bestSides",
    label: "Best Sides",
    columns: 4,
    gap: 4,
  },
  {
    key: "makeAhead",
    label: "Make-Ahead",
    columns: 3,
    gap: 6,
  },
  {
    key: "stunningDesserts",
    label: "Stunning Desserts",
    columns: 4,
    gap: 4,
  },
];

// Responsive grid configuration based on columns
const getResponsiveClasses = (columns) => {
  const baseClasses = "grid gap-4 md:gap-6";

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
}) => {
  // Use dynamic data if provided, otherwise fall back to sample data
  const activeTabsData = dynamicTabsData || tabsData;
  const activeTabsConfig = dynamicTabsConfig || tabsConfig;

  // Find default tab or use first tab
  const defaultTab =
    activeTabsConfig.find((tab) => tab.isDefault)?.key ||
    activeTabsConfig[0]?.key;

  return (
    <div className={`w-full ${className}`}>
      <Tabs defaultValue={defaultTab} className="w-full">
        {/* Tab Navigation - Maintaining original design */}
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

        {/* Dynamic Tab Content */}
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
                    className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200"
                  />
                ))}
              </NewsGrid>

              {/* Show message if no articles */}
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

export default TabbedNewsSection;

// Example usage with dynamic data:
/*
// In your parent component, you can pass dynamic data like this:

const dynamicTabsFromAPI = [
  {
    key: "appetizers",
    label: "Appetizers",
    isDefault: true,
    columns: 4,
    gap: 4,
  },
  {
    key: "mainCourses", 
    label: "Main Courses",
    columns: 3,
    gap: 6,
  },
  {
    key: "desserts",
    label: "Desserts", 
    columns: 4,
    gap: 4,
  },
  // ... more tabs from your API
];

const dynamicArticlesFromAPI = {
  appetizers: [
    // articles from your database
  ],
  mainCourses: [
    // articles from your database  
  ],
  desserts: [
    // articles from your database
  ],
};

<TabbedNewsSection 
  dynamicTabsData={dynamicArticlesFromAPI}
  dynamicTabsConfig={dynamicTabsFromAPI}
  className="container mx-auto px-4"
/>
*/
