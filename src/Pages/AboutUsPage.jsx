import React from "react";
import { useQuery } from "@tanstack/react-query";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import BlogBody from "../Components/blog/blogBody";
import { getPublishedBlogs } from "../services/blogApi";
import SEOHelmet from "../Components/SEOHelmet";

const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const { data } = useQuery({
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
    const text = content.replace(/<[^>]*>/g, "");
    const wordCount = text.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  function getRandomPosts(posts, count) {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const allBlogs = data?.blogs || [];
  const randomPosts = getRandomPosts(allBlogs, 3);
  return (
    <div className=" bg-white dark:bg-darkblack">
      <SEOHelmet page="about" />
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1
                  data-aos="fade-right"
                  className="main-title font-bold text-darkblack dark:text-white !leading-tight"
                >
                  Creating Solutions That Help Businesses Thrive
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  At NeuroraLynx AI, we build more than just software. We create
                  digital solutions that help your business grow and succeed. Our
                  team delivers smart, scalable solutions that
                  help businesses stay competitive in today's fast-changing world. From
                  startups to large companies, we customize every aspect of our work to
                  match your vision and goals.
                  <br />
                  <br /> We specialize in:
                  <br />
                  <br />
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      Web Development: We build fast, reliable, and secure
                      websites that do more than look good they actually work for your business.
                      Our sites perform well, are optimized for search engines, and
                      work perfectly on all devices.
                    </li>
                    <li>
                      App Development: From idea to finished product, we turn your app
                      concepts into reality. Whether it's iOS, Android, or
                      cross-platform, our developers focus on making apps that are easy to use, fast,
                      and work smoothly with your existing systems.
                    </li>
                    <li>
                      AI Development Solutions: We help your business with
                      intelligent systems that automate tasks, predict trends,
                      and improve customer experiences. Our AI solutions simplify complex problems and deliver real results.
                    </li>
                    <li>
                      UX/UI Design: Good design combines technology with user needs. We
                      blend attractive visuals with practical functionality to create digital experiences
                      that users love. Every screen is designed with care, making it visually appealing, easy to understand, and focused on the user.
                    </li>
                  </ul>
                </p>
              </div>
              <img data-aos="fade-left" src={aboutusimg} alt="aboutus-img" className="aspect-square h-full object-cover" />
            </div>
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className="relative z-10 w-full h-full">
          {/* <CoreValues /> */}
          {/* <VisionMission /> */}
          {/* <OurStory /> */}
          <UnlockEfficiency />
          <div className="flex justify-center items-center flex-col paddingtop paddingbottom">
            <div
              data-aos="fade-up"
              className="bg-white rounded-full py-2 px-6 shadow-md text-lg font-medium"
            >
              Latest Insights
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 wrapper paddingtop  ">
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
          <Faq />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
