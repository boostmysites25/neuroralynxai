import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const SLIDES = [
  {
    id: 1,
    title: "About Us",
    content: `We are an enterprise-focused technology company driven by innovation, discipline, and clarity.
Our teams combine deep technical expertise with a strong understanding of business systems.
We build technology with purpose, responsibility, and long-term impact in mind.`,
    keywords: "enterprise technology and innovation, business technology and innovation with ai, business technology and innovation",
  },
  {
    id: 2,
    title: "What We Do",
    content: `We deliver AI-driven digital solutions across applications, platforms, and intelligent systems.
Our capabilities span artificial intelligence, machine learning, modern application development, and cloud technologies.
Every solution is designed to be secure, scalable, and enterprise-ready.`,
  },
  {
    id: 3,
    title: "How We Think",
    content: `We approach every challenge with a problem-first and outcome-driven mindset.
Decisions are guided by business context, system integrity, and risk awareness.
Innovation is applied strategically to create measurable and sustainable value.`,
    keywords: "enterprise technology solutions, AI-driven innovation, digital transformation",
  },
  {
    id: 4,
    title: "How We Engineer",
    content: `We follow structured engineering practices focused on clean architecture and scalability.
Our systems are designed for high availability, performance, and long-term maintainability.
Quality, security, and reliability are embedded into every stage of development.`,
    keywords: "scalable software engineering, secure digital platforms, enterprise architecture",
  },
  {
    id: 5,
    title: "How We Innovate",
    content: `We integrate artificial intelligence and data intelligence where it delivers real business advantage.
Our approach balances advanced technology with practical implementation.
Innovation is driven by value, not experimentation.`,
    keywords: "AI implementation, machine learning integration, intelligent systems",
  },
  {
    id: 6,
    title: "How We Collaborate",
    content: `We work as long-term technology partners, not just solution providers.
Transparency, accountability, and shared ownership define how we engage with clients.
Our collaboration model is built on trust and consistent delivery.`,
    keywords: "enterprise technology partner, digital consulting, long-term IT solutions",
  },
  {
    id: 7,
    title: "How We Deliver",
    content: `We deliver solutions with precision, consistency, and operational discipline.
Every engagement is aligned with enterprise goals, compliance standards, and scalability requirements.
Success is measured by stability, impact, and sustained business value.`,
    keywords: "enterprise IT delivery, scalable digital solutions, business technology impact",
  },
];

const StrategicPartnerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const goToPrev = () => instanceRef.current?.prev();
  const goToNext = () => instanceRef.current?.next();

  return (
    <section className="paddingtop paddingbottom bg-gray-50 dark:bg-gray-900/50">
      <div className="wrapper">
        <div
          data-aos="fade-up"
          className="max-w-4xl mx-auto bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 p-8 sm:p-10 lg:p-12 shadow-lg"
        >
          {/* Headline */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-normal dark:text-gray-300 text-darkbackground mb-1">
              Your Strategic Partner for
            </h2>
            <div className="relative inline-block w-full">
              <h2 className="main-title !text-2xl sm:!text-3xl md:!text-4xl !font-bold">
                AI-Driven Digital Transformation and Enterprise Software Engineering
              </h2>
              <div
                className="mt-5 h-1 rounded-full w-full max-w-xs mx-auto"
                style={{ background: "linear-gradient(to right, #8b5cf6, #3c81f6, #fb923c)" }}
              />
            </div>
          </div>

          {/* Slider content */}
          <div ref={sliderRef} className="keen-slider">
            {SLIDES.map((slide) => (
              <div key={slide.id} className="keen-slider__slide min-h-[200px]">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl sm:text-2xl font-bold dark:text-white text-darkbackground">
                    {slide.title}
                  </h3>
                  <div className="space-y-3">
                    {slide.content.split("\n").map((line, idx) => (
                      <p
                        key={idx}
                        className="desc leading-relaxed dark:text-gray-300 text-darkbackground/90"
                      >
                        {line.trim()}
                      </p>
                    ))}
                  </div>
                  {/* {slide.keywords && (
                    <p className="text-sm text-primary/80 dark:text-primary/90 mt-2 font-medium">
                      {slide.keywords}
                    </p>
                  )} */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={goToPrev}
              aria-label="Previous slide"
              className="flex-shrink-0 w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-violet-500 via-primary to-orange-400 hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <span className="w-full h-full rounded-full bg-white dark:bg-darkblack flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-white text-darkbackground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </span>
            </button>
            <button
              onClick={goToNext}
              aria-label="Next slide"
              className="flex-shrink-0 w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-violet-500 via-primary to-orange-400 hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <span className="w-full h-full rounded-full bg-white dark:bg-darkblack flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:text-white text-darkbackground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            <div className="flex items-center gap-1 ml-2">
              {SLIDES.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-2 h-2 rounded-full transition-colors ${
                    idx === currentSlide
                      ? "bg-primary w-3"
                      : "bg-gray-300 dark:bg-white/30"
                  }`}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerSlider;
