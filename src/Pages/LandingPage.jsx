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
        "We focus on user experience, performance, and security to build websites that look great and work perfectly. We create SEO-friendly, scalable websites that make a real impact on your business. Our development process uses the latest technologies and frameworks, keeping your website modern and ready for the future. From responsive designs that work on any device to optimized backend systems that handle complex tasks easily, we build complete web solutions that improve your online presence and connect with your audience. Our websites are built to scale, so your digital platform can grow with your business without losing performance or user experience.",
    },
    "app-development": {
      aboutImage: appImg,
      aboutHeading: "Why Choose Us for App Development?",
      aboutDescription:
        "We build apps that users love and that drive real engagement. Our mobile solutions are fast, reliable, and customized to meet your business needs, whether for iOS, Android, or both. Our app development team combines technical skills with creative thinking to deliver applications that stand out. We focus on creating easy-to-use interfaces, optimizing performance for smooth operation, and implementing strong security to protect user data. From concept to launch, we follow a thorough development process that includes extensive testing across different devices and platforms to ensure consistent performance. Our apps are designed to scale, allowing for future updates and expansions as your business grows. We also provide ongoing support and maintenance to keep your app running smoothly and securely.",
    },
  };

  const { aboutImage, aboutHeading, aboutDescription } = content[page] || {
    aboutHeading: "About NeuroraLynx AI",
    aboutDescription:
      "We are a digital agency focused on AI and modern technology, delivering innovative products and services across industries. From planning to delivery, our work is based on real impact, smart solutions, and practical innovation. Our team combines expertise in artificial intelligence, machine learning, data science, and design to create solutions that help businesses grow and improve user experiences. We believe in using modern technology to solve real problems and create digital experiences that people actually want to use. Our approach is collaborative and client-focused, making sure we understand your specific challenges and goals before creating custom solutions that match your vision. Whether you want to improve operations, engage customers better, or create innovative digital products, our team has the technical skills and creative thinking to bring your ideas to life. We're committed to staying current with technology, always exploring new possibilities and finding better ways to solve problems in the digital world.",
    aboutImage: homeAboutImg,
  };
  return (
    <>
      <LandingHeader />
      <div className="bg-white dark:bg-darkblack">
        <LandingBanner page={page} />
        <LeadForm hideInfo={true}/>
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
