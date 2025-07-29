import React from "react";
import aboutusimg from "../assets/images/aboutusimg.png";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import BlogBody from "../Components/blog/blogBody";
import { blogPosts } from "../util/blogs";
import SEOHelmet from "../Components/SEOHelmet";

const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  function getRandomPosts(posts, count) {
    const shuffled = [...posts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const randomPosts = getRandomPosts(blogPosts, 3);
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
                  Igniting brands that spark movements.
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  At NeuroraLynx AI, we don’t just build software—we create
                  digital ecosystems that elevate brands and fuel growth. Our
                  expertise lies in delivering smart, scalable solutions that
                  help businesses stay agile in a fast-changing world. From
                  startups to enterprises, we tailor every line of code and
                  design detail to suit your vision.
                  <br />
                  <br /> We specialize in:
                  <br />
                  <br />
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      Web Development : We create fast, flexible, and secure
                      websites that do more than just look good—they convert.
                      Our sites are built to perform, optimized for search, and
                      responsive across all platforms.
                    </li>
                    <li>
                      App Development : From concept to code, we bring your app
                      ideas to life. Whether it's iOS, Android, or
                      cross-platform, our developers focus on usability, speed,
                      and seamless integration with your existing ecosystem.
                    </li>
                    <li>
                      AI Development Solutions : We empower your business with
                      intelligent systems—automating tasks, predicting trends,
                      and enhancing customer experiences. Our AI solutions bring
                      clarity to complexity and results to strategy.
                    </li>
                    <li>
                      UX/UI Design : Design is where tech meets emotion. We
                      blend beauty with function to create digital experiences
                      that connect with users. Every screen is designed with
                      purpose—visually striking, intuitive, and user-first.
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
              {randomPosts.map((post, index) => (
                <BlogBody key={index} {...post} passkey={true} />
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
