// src/components/news/TabbedNewsSection.jsx
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewsGrid from "./NewsGrid";
import StandardArticleCard from "./StandardArticleCard";

// Sample data for different tabs
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

const TabbedNewsSection = ({ className }) => {
  return (
    <div className={` ${className}`}>
      <Tabs defaultValue='featured' className='w-full'>
        <TabsList className='flex gap-2 items-center mb-8 p-1 bg-transparent mx-auto'>
          <TabsTrigger
            value='featured'
            className='data-[state=active]:w-24 data-[state=active]:h-11 rounded-none data-[state=active]:py-3 data-[state=active]:px-4 data-[state=active]:bg-[#F2F2F2] data-[state=active]:shadow-sm font-medium text-gray-700'
          >
            Featured
          </TabsTrigger>
          <TabsTrigger
            value='bestSides'
            className='data-[state=active]:w-24 data-[state=active]:h-11 rounded-none data-[state=active]:py-3 data-[state=active]:px-4 data-[state=active]:bg-[#F2F2F2] data-[state=active]:shadow-sm font-medium text-gray-700'
          >
            Best Sides
          </TabsTrigger>
          <TabsTrigger
            value='makeAhead'
            className='data-[state=active]:w-24 data-[state=active]:h-11 rounded-none data-[state=active]:py-3 data-[state=active]:px-4 data-[state=active]:bg-[#F2F2F2] data-[state=active]:shadow-sm font-medium text-gray-700'
          >
            Make-Ahead
          </TabsTrigger>
          <TabsTrigger
            value='stunningDesserts'
            className='data-[state=active]:h-11 rounded-none data-[state=active]:py-3 data-[state=active]:px-4 data-[state=active]:bg-[#F2F2F2] data-[state=active]:shadow-sm font-medium text-gray-700'
          >
            Stunning Desserts
          </TabsTrigger>
        </TabsList>

        <TabsContent value='featured' className='mt-0'>
          <NewsGrid columns={4} gap={4}>
            {tabsData.featured.map((article) => (
              <StandardArticleCard
                key={article.id}
                article={article}
                className='bg-white border border-gray-200'
              />
            ))}
          </NewsGrid>
        </TabsContent>

        <TabsContent value='bestSides' className='mt-0'>
          <NewsGrid columns={4} gap={4}>
            {tabsData.bestSides.map((article) => (
              <StandardArticleCard
                key={article.id}
                article={article}
                className='bg-white border border-gray-200'
              />
            ))}
          </NewsGrid>
        </TabsContent>

        <TabsContent value='makeAhead' className='mt-0'>
          <NewsGrid columns={3} gap={6}>
            {tabsData.makeAhead.map((article) => (
              <StandardArticleCard
                key={article.id}
                article={article}
                className='bg-white border border-gray-200'
              />
            ))}
          </NewsGrid>
        </TabsContent>

        <TabsContent value='stunningDesserts' className='mt-0'>
          <NewsGrid columns={4} gap={4}>
            {tabsData.stunningDesserts.map((article) => (
              <StandardArticleCard
                key={article.id}
                article={article}
                className='bg-white border border-gray-200'
              />
            ))}
          </NewsGrid>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabbedNewsSection;
