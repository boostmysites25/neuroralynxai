import React from "react";
import LandingHeader from "../Components/landingpage/LandingHeader";
import LandingFooter from "../Components/landingpage/LandingFooter";
import LandingServices from "../Components/landingpage/LandingServices";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurStory from "../Components/OurStory";
import UnlockEfficiency from "../Components/UnlockEfficiency";
import Faq from "../Components/Faq";
import LeadForm from "../Components/landingpage/LeadForm";
import Portfolio from "../Components/Portfolio";
import LandingBanner from "../Components/landingpage/LandingBanner";
import homeaboutimg from "../assets/images/homeaboutimg.webp";
import webImg from "../assets/images/web-dev.webp";
import appImg from "../assets/images/app-dev.jpg";
import homeAboutImg from "../assets/images/homeaboutimg.webp";
import { Link } from "react-scroll";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const content = {
    "web-development": {
      aboutImage: webImg,
      aboutHeading: "Why Choose Us for Web Development?",
      aboutDescription:
        "With a deep focus on user experience, performance, and security, our web development team builds platforms that are not just visually appealing but also technically sound. We bring SEO-friendly, scalable websites that deliver business impact. Our development process incorporates the latest technologies and frameworks, ensuring your website remains cutting-edge and future-proof. From responsive designs that adapt seamlessly to any device to optimized backend systems that handle complex operations with ease, we create comprehensive web solutions that elevate your digital presence and drive meaningful engagement with your audience. Our websites are built with scalability in mind, allowing your digital platform to grow alongside your business without compromising on performance or user experience.",
    },
    "app-development": {
      aboutImage: appImg,
      aboutHeading: "Why Choose Us for App Development?",
      aboutDescription:
        "We build apps that delight users and drive engagement. Our mobile solutions are fast, reliable, and tailored to meet your exact business needs—whether for iOS, Android, or both. Our app development team combines technical expertise with creative innovation to deliver applications that stand out in crowded marketplaces. We focus on creating intuitive user interfaces, optimizing performance for smooth operation, and implementing robust security measures to protect user data. From concept to deployment, we follow a rigorous development process that includes thorough testing across multiple devices and platforms to ensure consistent performance. Our apps are designed with scalability in mind, allowing for future updates and expansions as your business grows and user needs evolve. We also provide ongoing support and maintenance to keep your application running smoothly and securely in an ever-changing digital landscape.",
    },
  };

  const { aboutImage, aboutHeading, aboutDescription } = content[page] || {
    aboutHeading: "About NeuroraLynx AI",
    aboutDescription:
      "We are an AI-first digital agency delivering next-gen products and services across industries. From strategy to execution, our work is grounded in impact, intelligence, and innovation. Our multidisciplinary team combines expertise in artificial intelligence, machine learning, data science, and creative design to develop solutions that transform businesses and enhance user experiences. We believe in harnessing the power of cutting-edge technology to solve complex problems and create meaningful digital experiences that resonate with users. Our approach is collaborative and client-focused, ensuring that we understand your unique challenges and objectives before crafting tailored solutions that align with your vision. Whether you're looking to optimize operations, enhance customer engagement, or pioneer innovative digital products, our team has the technical prowess and creative insight to bring your ideas to life. We're committed to staying at the forefront of technological advancement, continuously exploring new possibilities and pushing the boundaries of what's possible in the digital realm.",
    aboutImage: homeAboutImg,
  };
  return (
    <>
      <LandingHeader />
      <div className="bg-white dark:bg-darkblack">
        <LandingBanner page={page} />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <img
              src={aboutImage}
              alt="homeaboutimg"
              className="w-full object-cover aspect-video h-full object-bottom rounded-lg shadow-md"
            />
            <div>
              <h2
                className="main-title leading-tight mb-6"
                data-aos="fade-up"
              >
                {aboutHeading}
              </h2>
              <p className="desc" data-aos="fade-up">
                {aboutDescription}
              </p>
              <div
                className="mt-10
              "
              >
                <Link className="primary-btn cursor-pointer">Get Started</Link>
              </div>
            </div>
          </div>
        </section>
        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? `flex` : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
          />
          <Portfolio page={page} />
          <section className="relative z-10 w-full h-full">
            {/* <CoreValues /> */}
            <VisionMission />
            {/* <OurStory /> */}
            <UnlockEfficiency />
            <Faq />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
