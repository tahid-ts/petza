import { Article, Category, Post, Topic } from "@/types/blog";
import { FeaturedImage } from "./blogFeaturedImage/BlogFeaturedImage";
import { BlogArticleHeader } from "./blogArticleHeader/BlogArticleHeader";
import { BlogNutritionalHighlights } from "./blogNutritionalHighlights/BlogNutritionalHighlights";

import { BlogSidebarSection } from "./blogSidebarSection/BlogSidebarSection";
import { SearchBox } from "../ui/searchBox/SearchBox";
import { BlogCategoryList } from "./blogCategoryList/BlogCategoryList";
import { BlogRecentPosts } from "./blogRecentPosts/BlogRecentPosts";
import { BlogTopicsCloud } from "./blogTopicsCloud/BlogTopicsCloud";
import { BlogShareButtons } from "./blogShareButtons/BlogShareButtons";
import Container from "../shared/container/Container";

interface BlogDetailsProps {
  article: Article;
  categories: Category[];
  recentPosts: Post[];
  topics: Topic[];
}

export async function BlogDetails({
  article,
  categories = [],
  recentPosts = [],
  topics = [],
}: BlogDetailsProps) {
  const articleSlug = article.title
    ? encodeURIComponent(
        article.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
      )
    : "";

  return (
    <div className="min-h-screen bg-bg-color-one">
      {/* Back to Blog Button */}
      {/* <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors text-gray-700 font-medium"
        >
          ← Back to Blog
        </Link>
      </div> */}

      <Container>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-20 font-title">
          {/* Main Content */}
          <div className="w-full lg:w-full">
            <FeaturedImage src={article.image} alt={article.title} />

            <div className=" py-6 sm:py-8 lg:py-10">
              <BlogArticleHeader
                title={article.title}
                date={article.date}
                author={article.author}
              />

              {/* Main Content Paragraphs */}
              <div className="text-gray-700 leading-relaxed space-y-4 mb-8  border-l-2 pl-10 border-l-primary">
                {article.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Why Choose Section */}
              {article.sections.whyChoose && (
                <div className="mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                    {article.sections.whyChoose.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {article.sections.whyChoose.content}
                  </p>
                </div>
              )}
              {article.sections.nutritionalHighlights && (
                <BlogNutritionalHighlights
                  title={article.sections.nutritionalHighlights.title}
                  items={article.sections.nutritionalHighlights.items}
                />
              )}
              <BlogShareButtons
                title={article.title}
                url={`/blog/${articleSlug}`}
              />
              {/* Nutritional Highlights */}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[356px] md:order-2 order-1">
            <BlogSidebarSection>
              <SearchBox />
            </BlogSidebarSection>

            <BlogSidebarSection title="Categories">
              <BlogCategoryList categories={categories} />
            </BlogSidebarSection>

            <BlogSidebarSection title="Recent Posts">
              <BlogRecentPosts posts={recentPosts} />
            </BlogSidebarSection>

            <BlogSidebarSection title="Browse By Topics">
              <BlogTopicsCloud topics={topics} />
            </BlogSidebarSection>
          </div>
        </div>
      </Container>
    </div>
  );
}
