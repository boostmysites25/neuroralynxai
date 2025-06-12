import { useEffect } from "react";
import bannervideo from "../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import gsap from "gsap";
import robot from "../assets/images/ai-robot.png";

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
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[60%_1fr] items-center gap-5">
          <div className="flex flex-col gap-4 items-start justify-center relative z-[1]">
            <p
              data-aos="fade-right"
              className="bg-[#ECECF2] rounded p-1 text-gray-900 text-sm"
            >
              IT Services
            </p>
            <h1
              data-aos="fade-right"
              className="main-title dark:!text-gray-900 font-bold !leading-tight"
            >
              Empowering Your Digital Presence with Cutting-Edge Solutions
            </h1>
            <p data-aos="fade-right" className="desc !text-black/80">
              At NeuroraLynx AI, we specialize in creating innovative and
              user-centric digital solutions that not only look great but also
              drive results.
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
              srcset={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="robot"
              width="600"
              height="400"
              class="h-[14rem] lg:h-[18rem] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
