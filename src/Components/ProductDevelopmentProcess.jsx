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
    <section className="paddingtop paddingbottom dark:bg-darkblack">
      <div className="wrapper">
        <div className="flex flex-col gap-6 items-center text-center mb-12">
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

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connector */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/30 dark:bg-primary/40 hidden sm:block" />

          <div className="space-y-8">
            {STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  className="relative flex gap-6 sm:gap-8 items-start"
                >
                  {/* Step number circle */}
                  <div className="flex-shrink-0 relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center border-2 border-primary/50">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>

                  <div className="flex-1 pt-1">
                    <span className="text-sm font-semibold text-primary mb-1 block">
                      {item.step}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-darkbackground dark:text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="desc text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
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
