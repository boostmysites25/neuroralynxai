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
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img
            data-aos="fade-right"
            src={homeaboutimg}
            alt="homeaboutimg"
            className="w-full rounded-lg shadow-md aspect-[4/3] object-cover"
          />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Building Digital Solutions That Make a Difference
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              <b>NeuroraLynx AI</b> : AI-first software development company
              building intelligent digital ecosystems for startups, scale-ups,
              and enterprises. We integrate Generative AI, LLMs, computer
              vision, NLP, and data science with full-stack engineering to
              deliver web, mobile, IoT, AR/VR, and blockchain solutions. From
              RAG and fine-tuning to microservices and predictive analytics, we
              transform data into decisions, code into capability, and ideas
              into measurable outcomes.
            </p>
          </div>
        </div>
      </section>
      <StrategicPartnerSlider />
      <Ourvalues />
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
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <BlogSlider />
          <Testimonials />
          <Highlights />
          <Faq />
          <BuildAICTA />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
