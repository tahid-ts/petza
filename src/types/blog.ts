// types/blog.ts
export interface Post {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  author: string;
  category: string;
  topics: string[];
  readTime: string;
  featured?: boolean;
  slug: string;
}

export interface Category {
  name: string;
  count: number;
  slug: string;
}

export interface Topic {
  name: string;
  slug: string;
}

export interface NutritionalHighlight {
  title: string;
  description: string;
}

export interface Article extends Post {
  content: string[];
  sections: {
    whyChoose?: {
      title: string;
      content: string;
    };
    nutritionalHighlights?: {
      title: string;
      items: NutritionalHighlight[];
    };
  };
}

export interface BlogData {
  posts: Post[];
  categories: Category[];
  topics: Topic[];
  featuredPost?: Post | null;
}