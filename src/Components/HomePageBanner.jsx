import { useEffect } from "react";
import bannervideo from "../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import gsap from "gsap";
import robot from "../assets/images/ai-robot.png";
import ContactForm from "./ContactForm";

const HomePageBanner = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#robot", {
      translateY: window.innerWidth < 768 ? 50 : 0,
    }).to("#robot", {
      translateY: window.innerWidth < 768 ? -30 : -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="relative w-full bg-[#060b19] overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-black/40" />
      <ReactPlayer
        url={bannervideo}
        loop={true}
        playsinline
        playing={true}
        width="100%"
        height="100%"
        muted
        className="object-cover videoplayer"
        config={{
          file: {
            attributes: {
              style: {
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: "0",
                top: "0",
              },
            },
          },
        }}
      />
      <div className="flex items-center w-full h-full pt-[7rem] pb-[4rem] min-h-screen">
        <div className="wrapper w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4 items-start justify-center relative z-[1]">
              <p
                data-aos="fade-right"
                className="text-xl text-gray-900 font-semibold"
              >
                Welcome to NeuroraLynx AI
              </p>
              <h1
                data-aos="fade-right"
                className="main-title dark:!text-gray-900 font-bold !leading-tight"
              >
                Enterprise AI, Generative AI & Full-Stack Software Development Company
              </h1>
              <p data-aos="fade-right" className="desc !text-black/80">
                Architecting Intelligent Digital Ecosystems – From Generative
                AI, Custom LLMs, and Advanced Machine Learning to Scalable Web,
                Mobile, IoT, AR/VR, and Blockchain Solutions.
              </p>
              <div data-aos="fade-right" className="flex gap-4 mt-10">
                <Link to="/about-us" className="primary-btn">
                  Get Started
                </Link>
                <Link to="/contact-us" className="primary-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div
              data-aos="fade-left"
              className="bg-black/40 text-black backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl relative z-[1]"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get a Free Consultation
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
