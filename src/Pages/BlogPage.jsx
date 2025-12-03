import React from "react";
import { useQuery } from "@tanstack/react-query";
import BlogBody from "../Components/blog/blogBody";
import BlogHeader from "../Components/blog/BlogHeader";
import Faq from "../Components/Faq";
import { getPublishedBlogs } from "../services/blogApi";
import { LoadingSpinner } from "../Components/Loader";

function BlogPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["publishedBlogs"],
    queryFn: getPublishedBlogs,
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const calculateReadTime = (content) => {
    if (!content) return "2 min read";
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, ""); // Remove HTML tags
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (isLoading) {
    return (
      <div className="dark:bg-darkblack overflow-x-hidden max-w-screen min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="dark:bg-darkblack overflow-x-hidden max-w-screen min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold dark:text-white mb-2">
            Error loading blogs
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {error.message || "Failed to load blog posts"}
          </p>
        </div>
      </div>
    );
  }

  const blogs = data?.blogs || [];

  return (
    <div className="dark:bg-darkblack overflow-x-hidden max-w-screen">
      <BlogHeader />
      <div className="wrapper">
        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No blog posts available at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 dark:bg-darkblack">
            {blogs.map((blog) => (
              <BlogBody
                key={blog._id}
                id={blog.slug}
                imageUrl={blog.imageUrl}
                title={blog.title}
                subdescription={blog.excerpt}
                readTime={calculateReadTime(blog.content)}
                date={formatDate(blog.publishDate || blog.createdAt)}
              />
            ))}
          </div>
        )}
      </div>
      <Faq />
    </div>
  );
}

export default BlogPage;
