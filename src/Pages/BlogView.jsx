import React from "react";
import { useQuery } from "@tanstack/react-query";
import ViewBlogHeader from "../Components/blog/ViewBlogHeader";
import { useTheme } from "../Context/ThemeContext";
import ViewBlogContent from "../Components/blog/viewBlogContent";
import { useParams } from "react-router-dom";
import BlogBody from "../Components/blog/blogBody";
import Faq from "../Components/Faq";
import RoundedHeader from "../Components/RoundedHeader";
import { getBlogBySlug, getPublishedBlogs } from "../services/blogApi";
import { LoadingSpinner } from "../Components/Loader";

function BlogView() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const { slug } = useParams();

  const { data: blogData, isLoading, error } = useQuery({
    queryKey: ["blog", slug],
    queryFn: () => getBlogBySlug(slug),
  });

  const { data: allBlogsData } = useQuery({
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
      <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !blogData?.blog) {
    return (
      <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
        <div className="relative max-w-3xl mx-auto px-4 pt-[7rem]">
          <h1 className="text-2xl font-bold dark:text-white">
            Blog not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            {error?.message || "The blog post you're looking for doesn't exist."}
          </p>
        </div>
      </div>
    );
  }

  const blog = blogData.blog;
  const allBlogs = allBlogsData?.blogs || [];

  // Get random related posts (excluding current blog)
  function getRandomPosts(posts, count, excludeSlug) {
    const filteredPosts = posts.filter((post) => post.slug !== excludeSlug);
    const shuffled = filteredPosts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(allBlogs, 3, blog.slug);

  return (
    <div className="relative bg-white dark:bg-darkblack overflow-x-hidden max-w-screen">
      <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } md:-top-[109rem] -top-[172rem]  blur-3xl left-0 w-full h-full bg-footerBackground  `}
      />{" "}
      <div className="relative max-w-3xl mx-auto px-4  pt-[7rem]   overflow-hidden ">
        <ViewBlogHeader
          image={blog.imageUrl}
          title={blog.title}
          readTime={calculateReadTime(blog.content)}
          date={formatDate(blog.publishDate || blog.createdAt)}
        />
        <ViewBlogContent content={blog.content} />
      </div>
      {randomPosts.length > 0 && (
        <div className="wrapper paddingtop">
          <div className="flex justify-center items-center flex-col">
            <RoundedHeader title={"Recent Posts"} />
            <h1 data-aos="fade-up" className="main-title my-3">
              Related Posts
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 dark:bg-darkblack">
              {randomPosts.map((post) => (
                <BlogBody
                  key={post._id}
                  id={post.slug}
                  imageUrl={post.imageUrl}
                  title={post.title}
                  subdescription={post.excerpt}
                  readTime={calculateReadTime(post.content)}
                  date={formatDate(post.publishDate || post.createdAt)}
                  passkey={true}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="wrapper paddingtop">
        <Faq />
      </div>
    </div>
  );
}

export default BlogView;
