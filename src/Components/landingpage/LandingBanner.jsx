import { useEffect } from "react";
import bannervideo from "../../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";

const LandingBanner = ({ page }) => {
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

  // Dynamic content based on page
  const content = {
    "web-development": {
      label: "Web Development",
      heading: "Build Scalable, High-Performance Websites That Convert",
      description:
        "We craft responsive, SEO-optimized websites with engaging interfaces that turn visitors into loyal customers. From landing pages to complex platforms, we bring your vision online.",
    },
    "app-development": {
      label: "App Development",
      heading: "Transform Ideas into Powerful Mobile Experiences",
      description:
        "We design and develop cross-platform and native apps that are fast, secure, and tailored to user needs—delivering intuitive functionality with seamless performance.",
    },
  };

  const { label, heading, description } = content[page] || {
    label: "AI Solutions",
    heading: "Empowering Your Digital Presence with Cutting-Edge Solutions",
    description:
      "At NeuroraLynx AI, we specialize in creating innovative and user-centric digital solutions that not only look great but also drive results.",
  };

  return (
    <div id="home" className="relative w-full bg-[#060b19] overflow-hidden">
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
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[60%_1fr] items-center gap-5">
          <div className="flex flex-col gap-4 items-start justify-center relative z-[1]">
            <p
              data-aos="fade-right"
              className="bg-[#ECECF2] rounded p-1 text-gray-900 text-sm"
            >
              {label}
            </p>
            <h1
              data-aos="fade-right"
              className="main-title dark:!text-gray-900 font-bold !leading-tight"
            >
              {heading}
            </h1>
            <p data-aos="fade-right" className="desc !text-black/80">
              {description}
            </p>
            <Link
              to="/contact"
              data-aos="fade-right"
              className="primary-btn mt-10"
            >
              Get Started
            </Link>
          </div>
          <div data-aos="fade-left" className="lg:pl-5 lg:pt-4 lg:pb-2 w-fit">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w,
              ${robot} 600w,
              ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="robot"
              width="600"
              height="400"
              className="h-[14rem] lg:h-[18rem] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingBanner;
