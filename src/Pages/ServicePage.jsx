import React from "react";
import RoundedHeader from "../Components/RoundedHeader";
import { useTheme } from "../Context/ThemeContext";
import ServicesGrid from "../Components/ServicesGrid";
import HowWeWork from "../Components/HowWeWork";
import Testimonials from "../Components/Testimonials";
import servicebanner from "../assets/images/servicebanner.jpg";
import SEOHelmet from "../Components/SEOHelmet";

const ServicePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="bg-white dark:bg-darkblack">
      <SEOHelmet page="services" />
      <section className="pt-[4rem]">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[43rem] blur-3xl left-0 w-full z-10 h-full bg-footerBackground`}
        />

        <section className="relative flex flex-col items-center gap-10 z-10 w-full h-full">
          <div
            className="w-full min-h-[30rem] flex flex-col bg-cover bg-center justify-center items-center gap-10 paddingtop paddingbottom"
            style={{ backgroundImage: `url(${servicebanner})` }}
          >
            <RoundedHeader title={"Our Services"} />
            <h1
              data-aos="fade-up"
              className="text-[56px] text-center leading-tight font-bold dark:text-white text-white"
            >
              Empowering Your Vision <br />
              Through AI-Centric Innovation
            </h1>
            <p
              className="desc text-center max-w-[50rem] !text-white"
              data-aos="fade-up"
            >
              At NeuroraLynx AI, we fuse deep tech with real-world solutions to
              solve complex challenges and drive growth. Our services span
              intelligent automation, custom development, and transformative
              strategies—crafted to future-proof your business and unlock its
              full potential.
            </p>
          </div>

          <div className="wrapper">
            <ServicesGrid />
          </div>
        </section>
      </section>

      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <HowWeWork />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
