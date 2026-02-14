import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.webp";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import ProductDevelopmentProcess from "../Components/ProductDevelopmentProcess";
import EngagementModels from "../Components/EngagementModels";
import WhyChooseNeuroraLynx from "../Components/WhyChooseNeuroraLynx";
import Ourvalues from "../Components/Ourvalues";
import StrategicPartnerSlider from "../Components/StrategicPartnerSlider";
import AIServicesOverview from "../Components/AIServicesOverview";
import Portfolio from "../Components/Portfolio";
import BuildAICTA from "../Components/BuildAICTA";
import SEOHelmet from "../Components/SEOHelmet";
import BlogSlider from "../Components/blog/BlogSlider";

const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEOHelmet page="home" />
      <HomePageBanner />
      
      <StrategicPartnerSlider />
      {/* <Ourvalues /> */}
      {/* <WhyChooseUs /> */}
      <AIServicesOverview />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop !max-w-5xl">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Web & Mobile Engineering – High-Performance Digital Experiences
          </h1>
          <p className="desc text-center" data-aos="fade-up">
            We design, develop, and modernize web and mobile platforms that
            combine exceptional UX, robust security, and scalable architecture.
            From front-end-heavy SaaS products to complex enterprise
            applications and consumer-facing mobile apps, we build platforms
            that grow with your business.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <Industries />
      <ProductDevelopmentProcess />
      <EngagementModels />
      <WhyChooseNeuroraLynx />
      {/* <Portfolio /> */}
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <BlogSlider />
          <Testimonials />
          <Faq />
          <BuildAICTA />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
