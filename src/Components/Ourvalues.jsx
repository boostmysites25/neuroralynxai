import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Ourvalues = () => {
  const totalYrs = 3;
  const totalOnTimeCompletionPercentage = 100;
  const totalExperts = 15;
  const totalClients = 80;

  const [yrs, setYrs] = useState(0);
  const [onTimeCompletion, setOnTimeCompletion] = useState(0);
  const [experts, setExperts] = useState(0);
  const [clients, setClients] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const yrsInterval = setInterval(() => {
        setYrs((prev) => Math.min(prev + 1, totalYrs));
      }, 100);

      const expertsInterval = setInterval(() => {
        setExperts((prev) => Math.min(prev + 1, totalExperts));
      }, 100);

      const clientsInterval = setInterval(() => {
        setClients((prev) => Math.min(prev + 1, totalClients));
      }, 50);

      const completionInterval = setInterval(() => {
        setOnTimeCompletion((prev) =>
          Math.min(prev + 1, totalOnTimeCompletionPercentage)
        );
      }, 20);

      return () => {
        clearInterval(yrsInterval);
        clearInterval(expertsInterval);
        clearInterval(clientsInterval);
        clearInterval(completionInterval);
      };
    }
  }, [inView]);

  return (
    <section>
      <div className="paddingtop paddingbottom wrapper">
        <div
          ref={ref}
          //   data-aos-offset={-200}
          data-aos="fade-up"
          className="w-full dark:text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-5 rounded-3xl p-[2rem]"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !dark:text-white">{yrs}</h1>
              <span className="absolute top-1 -right-3 text-lg">+</span>
            </div>
            <p className="desc mt-3 !dark:text-white">Years of Experience</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !dark:text-white">{experts}</h1>
              <span className="absolute top-1 -right-3 text-lg">+</span>
            </div>
            <p className="desc mt-3 !dark:text-white">Expert Team</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !dark:text-white">{clients}</h1>
              <span className="absolute top-1 -right-3 text-lg">+</span>
            </div>
            <p className="desc mt-3 !dark:text-white">Clients</p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 relative w-fit">
              <h1 className="main-title !dark:text-white">{onTimeCompletion}</h1>
              <span className="absolute top-1 -right-3 text-lg">%</span>
            </div>
            <p className="desc mt-3 !dark:text-white">On Time Completion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourvalues;
