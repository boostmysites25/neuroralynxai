import React from "react";
import RoundedHeader from "./RoundedHeader";
import { Search, Layers, Code2, TestTube2, Rocket, RefreshCw } from "lucide-react";

const STEPS = [
  {
    id: 1,
    step: "Step 1",
    title: "Discovery & Strategy",
    description:
      "We begin by understanding your business goals, target users, constraints, and success metrics. Through workshops, stakeholder interviews, competitive analysis, and technology assessments, we define product vision, features, roadmap, and a prioritized backlog that aligns technology investments with business outcomes.",
    icon: Search,
  },
  {
    id: 2,
    step: "Step 2",
    title: "Solution Architecture & Design",
    description:
      "Our solution architects and UX/UI designers collaborate to produce technical architecture, data models, API contracts, security designs, and interactive prototypes. We ensure scalability, performance, maintainability, and compliance requirements are addressed before any production code is written.",
    icon: Layers,
  },
  {
    id: 3,
    step: "Step 3",
    title: "Agile Development",
    description:
      "We work in time-boxed sprints (typically two weeks), delivering incremental features and gathering feedback regularly. Our developers follow clean code principles, SOLID design, code review standards, and test-driven development where appropriate. We use CI/CD pipelines to automate builds, tests, and deployments.",
    icon: Code2,
  },
  {
    id: 4,
    step: "Step 4",
    title: "Quality Assurance & Testing",
    description:
      "QA is embedded throughout the process. We perform functional testing, integration testing, end-to-end testing, performance testing, security testing, and UAT with real users. We also test across devices, browsers, network conditions, and locales to ensure consistent, high-quality experiences.",
    icon: TestTube2,
  },
  {
    id: 5,
    step: "Step 5",
    title: "Deployment & DevOps",
    description:
      "Our DevOps engineers manage releases to staging and production, using blue/green or canary deployments when needed. We set up monitoring, alerting, centralized logging, and runbooks to ensure reliability, observability, and quick response if issues arise.",
    icon: Rocket,
  },
  {
    id: 6,
    step: "Step 6",
    title: "Post-Launch Support & Evolution",
    description:
      "After launch, we provide ongoing support, bug fixes, performance tuning, security updates, and feature enhancements. We can also provide managed services, SLA-based support, and continuous optimization for AI models, infrastructure, and features.",
    icon: RefreshCw,
  },
];

const ProductDevelopmentProcess = () => {
  return (
    <section className="relative py-20 overflow-hidden dark:bg-darkblack bg-white">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="wrapper relative z-10">
        <div className="flex flex-col gap-6 items-center text-center mb-20">
          <RoundedHeader title="Our Process" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            Our Product Development Process
          </h2>
          <p className="desc max-w-3xl text-center" data-aos="fade-up">
            We follow a mature, agile, and transparent product development
            process inspired by leading global engineering companies. From
            discovery to post-launch support, we keep you informed and in
            control at every stage.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden md:block" />

          {/* Mobile Line */}
          <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:hidden" />

          <div className="space-y-12 md:space-y-24">
            {STEPS.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""
                    }`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-16 md:pl-0">
                    <div
                      data-aos={isEven ? "fade-left" : "fade-right"}
                      className="relative p-6 md:p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-xl backdrop-blur-sm group hover:border-primary/30 transition-all duration-300"
                    >
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform">
                        {item.step.replace("Step ", "")}
                      </div>

                      <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary">
                        <Icon size={24} />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="desc text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-white dark:ring-darkblack shadow-lg z-20 relative">
                      <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopmentProcess;
