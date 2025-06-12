import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  appDevelopmentPortfolio,
  webDevelopmentPortfolio,
} from "../util/constant";
import RoundedHeader from "./RoundedHeader";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
const animation = { duration: 60000, easing: (t) => t };

const Portfolio = ({ page }) => {
  const isWeb = page === "web-development";
  //   const isApp = page === "app-development";

  const [webArrowsVisible, setWebArrowsVisible] = useState(false);
  const [appArrowsVisible, setAppArrowsVisible] = useState(false);

  const displayedWebPortfolio = isWeb || !page ? webDevelopmentPortfolio : [];
  const displayedAppPortfolio = !isWeb || !page ? appDevelopmentPortfolio : [];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 15 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 25 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    rubberband: true,
    mode: "snap",
  });

  const [sliderRef2, instanceRef2] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: true,
    rtl: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 639px)": { slides: { perView: 1, spacing: 15 } },
      "(min-width: 640px) and (max-width: 767px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 768px) and (max-width: 1023px)": {
        slides: { perView: 2.5, spacing: 20 },
      },
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 25 } },
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    rubberband: true,
    mode: "snap",
  });

  return (
    <div className="my-[5rem] py-8 bg-gradient-to-b from-transparent to-slate-900/10 dark:to-slate-800/10">
      <div className="mx-auto">
        <div data-aos="fade-up" data-aos-offset="-200">
          <div className="container mx-auto flex justify-center w-full mb-12">
            <RoundedHeader title={"Portfolio"} />
          </div>

          {displayedWebPortfolio.length > 0 && (
            <div className="mb-16">
              <div className="container mx-auto">
                <h3
                  className="main-title text-center mb-12 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-primary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full pb-6"
                  data-aos="fade-up"
                >
                  Web Projects
                </h3>
              </div>
              <div
                className="relative"
                onMouseEnter={() => setWebArrowsVisible(true)}
                onMouseLeave={() => setWebArrowsVisible(false)}
              >
                <div ref={sliderRef} className="keen-slider px-2 py-4">
                  {displayedWebPortfolio
                    .concat(displayedWebPortfolio)
                    .map((obj) => (
                      <div className="keen-slider__slide" key={obj.id}>
                        <Link
                          to={obj.link}
                          className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900"
                        >
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 z-10"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 z-20"></div>

                          <div className="relative">
                            <img
                              src={obj.image}
                              alt={obj.title}
                              className="w-full aspect-square object-cover"
                            />

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                              <h4 className="text-xl font-bold text-white mb-2 hover:text-primary">
                                {obj.title}
                              </h4>
                              <div className="w-0 h-0.5 bg-primary hover:w-full"></div>
                            </div>

                            <div className="absolute top-4 right-4 bg-primary/80 text-white text-xs font-bold py-1 px-2 rounded-full opacity-0 hover:opacity-100 z-30">
                              Explore
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {displayedAppPortfolio.length > 0 && (
            <div className="mt-20">
              <div className="container mx-auto">
                <h3
                  className="main-title text-center mb-12 relative after:content-[''] after:absolute after:w-24 after:h-1 after:bg-primary after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:rounded-full pb-6"
                  data-aos="fade-up"
                >
                  App Projects
                </h3>
              </div>
              <div
                className="relative"
                onMouseEnter={() => setAppArrowsVisible(true)}
                onMouseLeave={() => setAppArrowsVisible(false)}
              >
                <div ref={sliderRef2} className="keen-slider px-2 py-4">
                  {displayedAppPortfolio.map((obj) => (
                    <div className="keen-slider__slide" key={obj.title}>
                      <Link
                        to={obj.link}
                        className="block relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900"
                      >
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 z-20"></div>

                        <div className="relative">
                          <img
                            src={obj.image}
                            alt={obj.title}
                            className="w-full aspect-square object-cover"
                          />

                          <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                            <h4 className="text-xl font-bold text-white mb-2 hover:text-primary">
                              {obj.title}
                            </h4>
                            <div className="w-0 h-0.5 bg-primary hover:w-full"></div>
                          </div>

                          <div className="absolute top-4 right-4 bg-primary/80 text-white text-xs font-bold py-1 px-2 rounded-full opacity-0 hover:opacity-100 z-30">
                            Explore
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
