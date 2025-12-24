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
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
import LeadForm from "../Components/landingpage/LeadForm";
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
              At <b>NeuroraLynx AI</b>, we build more than just software. We create
              digital solutions that help your business grow and succeed. Our
              team delivers smart, scalable solutions that help
              businesses stay competitive in today's fast-paced world. From startups to
              large companies, we customize every aspect of our work to
              match your needs and goals.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Services Designed for Your Success
          </h1>
        </div>
      </section>
      <ServicesGrid />
      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${isDarkMode ? `flex` : `hidden`
            } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <BlogSlider />
          <Testimonials />
          <Highlights />
          <Faq />
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
