import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Unlock Efficiency" />
        <h1 className="main-title w-fit">
          Accelerate Growth Through Intelligent AI
        </h1>
        <p className="desc text-center">
          Discover how intelligent automation and data-driven insights can
          transform the way your business operates. Our AI services are designed
          to simplify complexity, optimize processes, and drive scalable
          innovation. From predictive analytics to cognitive automation, we help
          you unlock new levels of productivity and deliver future-ready
          solutions.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
