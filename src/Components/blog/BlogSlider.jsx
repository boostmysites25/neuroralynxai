import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";
import { getPublishedBlogs } from "../../services/blogApi";
import RoundedHeader from "../RoundedHeader";
import { LoadingSpinner } from "../Loader"; // Assuming this exists or reused from other files

const animation = { duration: 60000, easing: (t) => t };

const BlogSlider = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["publishedBlogs"],
    queryFn: getPublishedBlogs,
  });

  const blogs = data?.blogs || [];

  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 15 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 25 } },
    },
    created(s) {
      if (s.track.details.slides.length > 0) {
        s.moveToIdx(5, true, animation);
      }
    },
    updated(s) {
      if (s.track.details.slides.length > 0) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    animationEnded(s) {
      if (s.track.details.slides.length > 0) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    rubberband: true,
    mode: "snap",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="wrapper">
        <h4 className="text-2xl font-bold">Loading...</h4>
      </div>
    );
  }

  if (error || blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 dark:bg-darkblack overflow-hidden">
      <div className="wrapper flex flex-col items-center gap-5 mb-10">
        <RoundedHeader title={"Our Blog"} />
        <h1 className="main-title text-center leading-tight" data-aos="fade-up">
          Latest Insights & News
        </h1>
        <p className="desc text-center max-w-3xl" data-aos="fade-up">
          Learn more about the{" "}
          <span className="text-primary font-semibold">
            evolution of chatbot technology
          </span>{" "}
          and how AI is transforming business communication.
        </p>
      </div>

      <div className="">
        <div ref={sliderRef} className="keen-slider py-4">
          {blogs.map((blog) => (
            <div className="keen-slider__slide h-full" key={blog._id}>
              <Link
                to={`/blog/${blog.slug}`}
                className="block h-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 flex flex-col justify-between h-[calc(100%-12rem)]">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        Blog
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatDate(blog.publishDate || blog.createdAt)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center text-primary font-semibold text-sm group/btn">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;
