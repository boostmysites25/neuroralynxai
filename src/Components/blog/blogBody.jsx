import React from "react";
import { useNavigate } from "react-router-dom";

function BlogBody({ imageUrl, title, subdescription, readTime, id, passkey }) {
  const navigate = useNavigate();
  const blogPageChange = ({ id }) => {
    navigate(`/blog/${id}`);
  };
  return (
    <>
      <article
        data-aos="fade-up"
        className={`blog-card relative dark:border dark:border-gray-700 rounded-xl overflow-hidden dark:shadow-md dark:bg-darkblack bg-white flex items-center flex-col ${
          passkey ? "" : "w-full"
        } cursor-pointer transition-all duration-500 hover:shadow-xl dark:hover:shadow-primary/20 hover:shadow-primary/10 group`}
        onClick={() =>
          blogPageChange({
            id,
          })
        }
      >
        {/* Animated border effect */}
        <div className="absolute inset-0 rounded-xl border z-0 group-hover:border-primary/30 border-primary/30 transition-all duration-500"></div>
        
        {/* Image container with hover effect */}
        <div className="rounded-xl overflow-hidden px-4 object-cover w-full relative z-10">
          <div className="overflow-hidden rounded-xl mt-3 relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[211px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
          </div>
        </div>
        
        {/* Content with hover animations */}
        <div className="p-4 w-full relative z-10 transition-all duration-500 group-hover:translate-y-[-5px]">
          <p className="text-sm text-gray-500 dark:text-white transition-colors duration-300">{readTime}</p>
          
          <h2 className="text-xl font-semibold mb-2 dark:text-white text-gray-800 transition-all duration-300 group-hover:text-primary relative">
            {title}
          </h2>
          
          <p className="text-gray-700 mb-3 dark:text-white transition-all duration-300">{subdescription}</p>
          
          {/* Read more button that appears on hover */}
          <div className="flex items-center mt-2 overflow-hidden h-0 group-hover:h-6 transition-all duration-500">
            <span className="text-primary text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* Subtle corner glow effect */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-0"></div>
      </article>
    </>
  );
}

export default BlogBody;
