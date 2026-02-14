import React from "react";
import { useQuery } from "@tanstack/react-query";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
import VisionMission from "../Components/VisionMission";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import BlogBody from "../Components/blog/blogBody";
import { getPublishedBlogs } from "../services/blogApi";
import SEOHelmet from "../Components/SEOHelmet";
import WhyChooseUs from "../Components/WhyChooseUs";
import ExpertiseServices from "../Components/ExpertiseServices";
import IndustryFocus from "../Components/IndustryFocus";

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
          className={`absolute ${isDarkMode ? `flex` : "hidden"
            } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1
                  data-aos="fade-right"
                  className="main-title font-bold text-darkblack dark:text-white !leading-tight"
                >
                  About NeuroraLynx AI
                </h1>
                <p data-aos="fade-right" className="desc mt-6">
                  NeuroraLynx AI is an AI-first software development company that
                  builds intelligent, scalable digital ecosystems for startups,
                  scale-ups, and enterprises. We focus on cutting-edge
                  technologies — from machine learning and generative AI to IoT
                  and cloud architectures — to drive digital transformation. Our
                  expert team specializes in turning complex data and emerging
                  tech into practical, results‑driven solutions.
                  <br />
                  <br />
                  We embrace a future where technology empowers businesses. By
                  2024, roughly 78% of organizations worldwide were already
                  applying AI in their operations. We harness this momentum to help
                  our clients compete and grow. At NeuroraLynx AI, our mission is
                  to empower businesses with advanced technologies: we believe AI
                  will be “the most transformative technology of the 21st
                  century”.
                </p>
              </div>
              <img
                data-aos="fade-left"
                src={aboutusimg}
                alt="aboutus-img"
                className="rounded-2xl shadow-lg w-full object-cover max-h-[500px]"
              />
            </div>
          </div>
        </section>

        <VisionMission />

        <ExpertiseServices />

        <IndustryFocus />

        <WhyChooseUs />

        {/* Our Vision for the Future Section */}
        <section className="relative py-16">
          <div className="wrapper text-center max-w-4xl mx-auto">
            <h2 data-aos="fade-up" className="main-title mb-6">
              Our Vision for the Future
            </h2>
            <p data-aos="fade-up" className="desc text-lg">
              NeuroraLynx AI is on the forefront of the digital future. We
              envision a world where every business operation is smarter and more
              efficient through technology. To that end, we continually expand
              our capabilities — exploring explainable AI, edge analytics for IoT,
              hybrid cloud architectures, and advanced analytics for
              transportation networks.
              <br />
              <br />
              Above all, our vision is customer success through innovation. We
              strive to be more than a vendor; we aim to be a long-term strategic
              partner. Whether you’re a startup launching a new product or an
              enterprise optimizing a global supply chain, NeuroraLynx AI is
              dedicated to advancing your mission with the power of AI, DevOps,
              IoT, cloud, and beyond.
            </p>
          </div>
        </section>

      </section>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className="relative z-10 w-full h-full">
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
