# Newspaper Frontend

> **Stay informed with the latest news from around the world through our modern, responsive newspaper platform**

A sleek and modern newspaper frontend application built with React, featuring real-time news updates, category-based browsing, and a responsive design that delivers an exceptional reading experience across all devices.

## ✨ Features

### Core Features
- **Breaking News** - Real-time news updates and alerts
- **Category Navigation** - Browse news by categories (Politics, Sports, Technology, Health, etc.)
- **Search Functionality** - Advanced search with filters and sorting options
- **Article Reading** - Clean, distraction-free article reading experience
- **Bookmarks** - Save articles for later reading
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Advanced Features
- **Dark/Light Mode** - Toggle between themes for comfortable reading
- **Social Sharing** - Share articles on social media platforms
- **Comments System** - Engage with articles through comments
- **Newsletter Subscription** - Stay updated with email newsletters
- **Breaking News Notifications** - Push notifications for urgent news
- **Trending Articles** - Most popular and trending news stories
- **Weather Widget** - Current weather information
- **Live News Ticker** - Scrolling latest news updates

### User Experience
- **Infinite Scroll** - Seamless browsing experience
- **Article Recommendations** - Personalized content suggestions
- **Reading Progress** - Track reading progress on long articles
- **Font Size Control** - Customizable text size for accessibility
- **Print-Friendly** - Optimized article printing
- **Offline Reading** - Cache articles for offline access

## 🚀 Tech Stack

### Frontend
- **[React 18](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful and accessible UI components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Router DOM](https://reactrouter.com/)** - Client-side routing
- **[React Query (TanStack Query)](https://tanstack.com/query)** - Data fetching and caching
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[React Hook Form](https://react-hook-form.com/)** - Form handling and validation
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations
- **[Date-fns](https://date-fns.org/)** - Date manipulation and formatting

### API Integration
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **News APIs** - Integration with multiple news sources:
  - NewsAPI.org
  - Guardian API
  - New York Times API
  - Reuters API
  - BBC News API

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- API keys for news services

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/nrbnayon/Newspaper-Frontend.git
   cd Newspaper-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local` file:
   ```env
   # News API Keys
   VITE_NEWS_API_KEY=your-newsapi-org-key
   VITE_GUARDIAN_API_KEY=your-guardian-api-key
   VITE_NYT_API_KEY=your-nytimes-api-key
   VITE_REUTERS_API_KEY=your-reuters-api-key
   
   # App Configuration
   VITE_APP_NAME=ModernNews
   VITE_APP_URL=http://localhost:3000
   
   # Features Toggle
   VITE_ENABLE_NOTIFICATIONS=true
   VITE_ENABLE_COMMENTS=true
   VITE_ENABLE_BOOKMARKS=true
   
   # Analytics (Optional)
   VITE_GOOGLE_ANALYTICS_ID=your-ga-id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
Newspaper-Frontend/
├── public/                    # Static assets
│   ├── icons/                # App icons and favicons
│   ├── images/               # Static images
│   └── manifest.json         # PWA manifest
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/          # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Layout.tsx
│   │   ├── news/            # News-specific components
│   │   │   ├── ArticleCard.tsx
│   │   │   ├── ArticleDetail.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   ├── NewsTicker.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── TrendingNews.tsx
│   │   ├── common/          # Common UI components
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ShareButton.tsx
│   │   │   ├── BookmarkButton.tsx
│   │   │   └── ThemeToggle.tsx
│   │   └── widgets/         # Widget components
│   │       ├── WeatherWidget.tsx
│   │       ├── NewsletterSignup.tsx
│   │       └── SocialFeed.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── Category.tsx
│   │   ├── Article.tsx
│   │   ├── Search.tsx
│   │   ├── Bookmarks.tsx
│   │   └── About.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── useNews.ts
│   │   ├── useBookmarks.ts
│   │   ├── useSearch.ts
│   │   ├── useTheme.ts
│   │   └── useLocalStorage.ts
│   ├── services/            # API services
│   │   ├── api.ts
│   │   ├── newsService.ts
│   │   ├── weatherService.ts
│   │   └── searchService.ts
│   ├── store/               # State management
│   │   ├── newsStore.ts
│   │   ├── bookmarkStore.ts
│   │   ├── themeStore.ts
│   │   └── userStore.ts
│   ├── types/               # TypeScript definitions
│   │   ├── news.ts
│   │   ├── api.ts
│   │   └── common.ts
│   ├── utils/               # Utility functions
│   │   ├── dateUtils.ts
│   │   ├── textUtils.ts
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── styles/              # Global styles
│   │   └── globals.css
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   └── vite-env.d.ts        # Vite type definitions
├── components.json          # shadcn/ui configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🎨 shadcn/ui Components Used

### Navigation & Layout
```typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
```

### Forms & Inputs
```typescript
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
```

### Feedback & Dialogs
```typescript
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Toast, ToastAction } from "@/components/ui/toast"
import { Skeleton } from "@/components/ui/skeleton"
```

### Data Display
```typescript
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
```

## 📰 News API Integration

### Supported News Sources

#### NewsAPI.org
```typescript
// Get top headlines
const getTopHeadlines = async (category?: string, country?: string) => {
  const response = await axios.get('/v2/top-headlines', {
    params: {
      apiKey: process.env.VITE_NEWS_API_KEY,
      category,
      country: country || 'us',
      pageSize: 20
    }
  });
  return response.data;
};
```

#### Guardian API
```typescript
// Search Guardian articles
const searchGuardianNews = async (query: string, section?: string) => {
  const response = await axios.get('/search', {
    baseURL: 'https://content.guardianapis.com',
    params: {
      'api-key': process.env.VITE_GUARDIAN_API_KEY,
      q: query,
      section,
      'show-fields': 'thumbnail,trailText',
      'page-size': 20
    }
  });
  return response.data;
};
```

#### New York Times API
```typescript
// Get NYT top stories
const getNYTTopStories = async (section: string) => {
  const response = await axios.get(`/svc/topstories/v2/${section}.json`, {
    baseURL: 'https://api.nytimes.com',
    params: {
      'api-key': process.env.VITE_NYT_API_KEY
    }
  });
  return response.data;
};
```

### API Service Structure
```typescript
// services/newsService.ts
export class NewsService {
  private static instance: NewsService;
  private cache = new Map();

  static getInstance(): NewsService {
    if (!NewsService.instance) {
      NewsService.instance = new NewsService();
    }
    return NewsService.instance;
  }

  async getHeadlines(category?: string): Promise<Article[]> {
    // Implementation with caching and error handling
  }

  async searchNews(query: string, filters?: SearchFilters): Promise<SearchResult> {
    // Implementation with multiple API sources
  }

  async getArticleById(id: string): Promise<Article> {
    // Implementation with full article fetching
  }
}
```

## 🔧 Key Features Implementation

### Article Card Component
```tsx
interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  showCategory?: boolean;
  showAuthor?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'default',
  showCategory = true,
  showAuthor = true
}) => {
  return (
    <Card className={cn("group cursor-pointer hover:shadow-md transition-shadow", {
      "lg:flex lg:space-x-4": variant === 'featured',
      "space-y-2": variant === 'compact'
    })}>
      <CardContent className="p-4">
        {article.urlToImage && (
          <img 
            src={article.urlToImage} 
            alt={article.title}
            className="w-full h-48 object-cover rounded-md mb-3"
          />
        )}
        
        <div className="space-y-2">
          {showCategory && article.category && (
            <Badge variant="secondary">{article.category}</Badge>
          )}
          
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary">
            {article.title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-3">
            {article.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            {showAuthor && article.author && (
              <span className="text-xs text-muted-foreground">
                By {article.author}
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(article.publishedAt))} ago
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
```

### Search Functionality
```tsx
export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { data: searchResults, isLoading } = useNewsSearch(query);

  return (
    <div className="relative">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Search news..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-80"
        />
        <Button size="sm">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      
      {query && searchResults && (
        <Card className="absolute top-full mt-2 w-full z-50 max-h-96 overflow-y-auto">
          <CardContent className="p-2">
            {searchResults.map((article) => (
              <div key={article.id} className="p-2 hover:bg-muted rounded-sm cursor-pointer">
                {/* Search result item */}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
```

## 📊 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # Run TypeScript checks

# Testing
npm run test            # Run tests
npm run test:watch      # Run tests in watch mode
npm run test:coverage   # Run tests with coverage

# shadcn/ui
npx shadcn-ui add button     # Add specific component
npx shadcn-ui add card       # Add card component
npx shadcn-ui add dialog     # Add dialog component
```

## 🎯 News Categories

```typescript
export const NEWS_CATEGORIES = [
  { id: 'general', name: 'General', icon: '📰' },
  { id: 'business', name: 'Business', icon: '💼' },
  { id: 'entertainment', name: 'Entertainment', icon: '🎬' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'science', name: 'Science', icon: '🔬' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'technology', name: 'Technology', icon: '💻' },
  { id: 'politics', name: 'Politics', icon: '🏛️' },
  { id: 'world', name: 'World', icon: '🌍' }
] as const;
```

## 🔍 Search & Filter Features

### Advanced Search Options
```typescript
interface SearchFilters {
  category?: string;
  source?: string;
  dateRange?: {
    from: Date;
    to: Date;
  };
  sortBy?: 'relevance' | 'popularity' | 'publishedAt';
  language?: string;
  country?: string;
}
```

### Search Implementation
```tsx
export const useNewsSearch = (query: string, filters?: SearchFilters) => {
  return useQuery({
    queryKey: ['news-search', query, filters],
    queryFn: () => NewsService.getInstance().searchNews(query, filters),
    enabled: query.length > 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
```

## 🚀 Performance Optimizations

### Image Loading
```tsx
const LazyImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-auto"
      onError={(e) => {
        e.currentTarget.src = '/placeholder-news.jpg';
      }}
    />
  );
};
```

### Virtual Scrolling for Large Lists
```tsx
import { FixedSizeList as List } from 'react-window';

const VirtualNewsList: React.FC<{ articles: Article[] }> = ({ articles }) => {
  const Row = ({ index, style }: any) => (
    <div style={style}>
      <ArticleCard article={articles[index]} />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={articles.length}
      itemSize={200}
    >
      {Row}
    </List>
  );
};
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify (drag and drop dist folder)
# Or use Netlify CLI
netlify deploy --prod --dir=dist
```

### Environment Variables for Production
```env
VITE_NEWS_API_KEY=your-production-news-api-key
VITE_GUARDIAN_API_KEY=your-production-guardian-key
VITE_NYT_API_KEY=your-production-nyt-key
VITE_APP_URL=https://your-domain.com
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📱 PWA Features

### Service Worker
```typescript
// Register service worker for offline functionality
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      console.log('SW registered: ', registration);
    })
    .catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
}
```

### Offline News Caching
```typescript
// Cache news articles for offline reading
export const cacheArticles = (articles: Article[]) => {
  const cache = JSON.parse(localStorage.getItem('cached-articles') || '[]');
  const updatedCache = [...cache, ...articles].slice(-100); // Keep last 100 articles
  localStorage.setItem('cached-articles', JSON.stringify(updatedCache));
};
```

## 🧪 Testing

### Component Testing with React Testing Library
```tsx
import { render, screen } from '@testing-library/react';
import { ArticleCard } from '../components/news/ArticleCard';

const mockArticle: Article = {
  id: '1',
  title: 'Test Article',
  description: 'Test Description',
  url: 'https://example.com',
  publishedAt: new Date().toISOString(),
  source: { name: 'Test Source' }
};

test('renders article card with title', () => {
  render(<ArticleCard article={mockArticle} />);
  expect(screen.getByText('Test Article')).toBeInTheDocument();
});
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Use TypeScript for all new components
- Follow the existing component structure
- Add proper error handling
- Write meaningful commit messages
- Test your changes thoroughly

## 📝 API Keys Setup

### Getting API Keys

1. **NewsAPI.org**
   - Visit [newsapi.org](https://newsapi.org/)
   - Sign up for a free account
   - Get your API key from the dashboard

2. **Guardian API**
   - Visit [Guardian Open Platform](https://open-platform.theguardian.com/)
   - Register for an API key
   - Free tier includes 5,000 calls per day

3. **New York Times API**
   - Visit [NYT Developer Portal](https://developer.nytimes.com/)
   - Create an account and request API access
   - Free tier includes 1,000 calls per day

## 📊 Analytics & Monitoring

### Google Analytics Integration
```typescript
// utils/analytics.ts
export const trackPageView = (path: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', process.env.VITE_GOOGLE_ANALYTICS_ID, {
      page_path: path,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};
```

## 🔧 Troubleshooting

### Common Issues

1. **API Rate Limits**
   - Implement proper caching strategies
   - Use multiple API sources for redundancy
   - Monitor API usage

2. **CORS Issues**
   - Use a proxy for development
   - Ensure proper CORS headers in production

3. **Image Loading Errors**
   - Implement fallback images
   - Use lazy loading for better performance

4. **Performance Issues**
   - Implement virtual scrolling for large lists
   - Use React.memo for expensive components
   - Optimize images and assets

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NewsAPI](https://newsapi.org/) for comprehensive news data
- [Guardian Open Platform](https://open-platform.theguardian.com/) for quality journalism
- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [React](https://react.dev/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/nrbnayon/Newspaper-Frontend/issues)
- **Discussions**: [GitHub Discussions](https://github.com/nrbnayon/Newspaper-Frontend/discussions)
- **Email**: support@modernnews.com

## 🗺️ Roadmap

- [ ] **Mobile App** - React Native companion app
- [ ] **Email Newsletters** - Automated newsletter system
- [ ] **User Accounts** - Personalized news experience
- [ ] **AI Recommendations** - Machine learning powered suggestions
- [ ] **Live Updates** - WebSocket integration for real-time news
- [ ] **Multi-language Support** - International news sources
- [ ] **Podcast Integration** - Audio news content
- [ ] **Video News** - Integration with video news sources

---

<div align="center">
  <p>Built with ❤️ for news enthusiasts worldwide</p>
  <p>
    <a href="https://github.com/nrbnayon/Newspaper-Frontend/stargazers">⭐ Star us on GitHub</a> |
    <a href="https://twitter.com/modernnews">🐦 Follow us on Twitter</a> |
    <a href="https://modernnews.com">🌐 Visit our website</a>
  </p>
</div>
