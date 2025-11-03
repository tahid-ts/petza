import { Article, Post, Category, Topic } from "@/types/blog";

export interface BlogData {
  posts: Post[];
  categories: Category[];
  topics: Topic[];
  featuredPost?: Post | null;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "10 Superfoods You Should Be Eating Every Day",
    date: "2023-10-15",
    author: "Sarah Johnson",
    image: "/img/blog/blog-thumb1_1.jpg",
    excerpt: "Discover the most nutrient-dense foods that can transform your health and boost your energy levels naturally.",
    category: "Nutrition",
    topics: ["Superfoods", "Healthy Eating", "Wellness"],
    readTime: "5 min read",
    featured: true,
    slug: "10-superfoods-you-should-be-eating-every-day"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Meal Prepping for Busy Professionals",
    date: "2023-10-12",
    author: "Mike Chen",
    image: "/img/blog/blog-thumb1_2.jpg",
    excerpt: "Learn how to save time and eat healthy with our comprehensive meal prepping strategies and recipes.",
    category: "Recipes",
    topics: ["Meal Prep", "Time Management", "Healthy Cooking"],
    readTime: "7 min read",
    slug: "ultimate-guide-to-meal-prepping"
  },
];

const mockArticles: { [key: string]: Article } = {
  "10-superfoods-you-should-be-eating-every-day": {
    ...mockPosts[0], 
    content: [
      "In today's fast-paced world, maintaining optimal health can be challenging. However, incorporating certain nutrient-dense superfoods into your daily diet can make a significant difference in your overall well-being.",
      "Superfoods are foods that are particularly rich in vitamins, minerals, antioxidants, and other beneficial compounds. While no single food can provide all the nutrients your body needs, regularly consuming these powerhouses can help fill nutritional gaps and support various bodily functions.",
      "The key to benefiting from superfoods is consistency and variety. Rather than focusing on just one or two 'miracle' foods, aim to incorporate a diverse range of these nutritional powerhouses into your meals throughout the week."
    ],
    sections: {
      nutritionalHighlights: {
        title: "Key Nutritional Benefits",
        items: [
          {
            title: "Blueberries",
            description: "Packed with antioxidants that help combat oxidative stress and support brain health."
          },
          {
            title: "Spinach",
            description: "Rich in iron, vitamin K, and folate - essential for blood health and bone strength."
          },
        ]
      },
      whyChoose: {
        title: "Why Incorporate Superfoods Daily?",
        content: "Regular consumption of superfoods can help boost your immune system, improve digestion, enhance cognitive function, and provide sustained energy throughout the day."
      }
    }
  },
  "ultimate-guide-to-meal-prepping": {
    ...mockPosts[1], 
    content: [
      "Meal prepping is a game-changer for busy professionals who want to eat healthy without spending hours in the kitchen every day.",
      "With proper planning and preparation, you can save time, money, and reduce food waste while ensuring you have nutritious meals ready throughout the week."
    ],
    sections: {}
  }
};

const mockBlogData: BlogData = {
  posts: mockPosts,
  categories: [
    { name: "Nutrition", count: 12, slug: "nutrition" },
    { name: "Recipes", count: 8, slug: "recipes" },
    { name: "Lifestyle", count: 6, slug: "lifestyle" },
    { name: "Wellness", count: 9, slug: "wellness" },
    { name: "Fitness", count: 7, slug: "fitness" }
  ],
  topics: [
    { name: "Superfoods", slug: "superfoods" },
    { name: "Meal Prep", slug: "meal-prep" },
    { name: "Healthy Eating", slug: "healthy-eating" },
  ],
  featuredPost: null
};

export async function getBlogData(): Promise<BlogData> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return {
    ...mockBlogData,
    featuredPost: mockBlogData.posts.find(post => post.featured) || mockBlogData.posts[0]
  };
}

export async function getPostBySlug(slug: string): Promise<Article | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  
  console.log('Looking for slug:', slug);
  console.log('Available slugs:', Object.keys(mockArticles));
  
  const article = mockArticles[slug];
  console.log('Found article:', article ? article.title : 'NOT FOUND');
  
  return article || null;
}
export async function getRecentPosts(limit: number = 5): Promise<Post[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockBlogData.posts.slice(0, limit);
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockBlogData.posts.filter(post => post.category === category);
}

export async function getPostsByTopic(topic: string): Promise<Post[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockBlogData.posts.filter(post => (post.topics ?? []).includes(topic));
}