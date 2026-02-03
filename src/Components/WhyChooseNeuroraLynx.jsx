import React from "react";
import RoundedHeader from "./RoundedHeader";
import {
  Sparkles,
  Shield,
  Globe,
  MessageSquare,
  TrendingUp,
  Award,
} from "lucide-react";

const REASONS = [
  {
    id: 1,
    title: "Deep AI & Full-Stack Expertise",
    description:
      "Unlike generic software development companies that treat AI as a side service, NeuroraLynx AI is AI-first. We combine AI/ML engineering with full-stack development, IoT, AR/VR, and blockchain to build truly integrated, intelligent solutions rather than isolated prototypes.",
    icon: Sparkles,
  },
  {
    id: 2,
    title: "Enterprise-Grade Delivery & Governance",
    description:
      "We bring enterprise-grade processes, including code quality gates, security reviews, documentation, and governance, whether you are a startup or an established enterprise. Our frameworks and practices align with the standards expected by Fortune 500 organizations.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Global Experience Across Industries",
    description:
      "Our teams have experience working with clients across multiple countries and industries, understanding regional compliance, cultural nuances, data residency requirements, and market expectations. This allows us to design solutions that are globally relevant yet locally compliant.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Transparent Communication & Collaboration",
    description:
      "Through regular updates, sprint demos, shared backlog tools, and collaborative workspaces, we maintain transparency and alignment with your internal teams. We adapt to your preferred cadence, tools, and communication style to reduce friction and increase velocity.",
    icon: MessageSquare,
  },
  {
    id: 5,
    title: "Focus on Business Outcomes",
    description:
      "We design solutions around measurable KPIs — conversion rates, churn reduction, cost savings, throughput, defect density, or user engagement — and continuously optimize to improve them. We view technology as a means to achieve your business goals, not as an end in itself.",
    icon: TrendingUp,
  },
  {
    id: 6,
    title: "Proven Track Record",
    description:
      "We have successfully delivered AI and software solutions for startups, scale-ups, and enterprises across multiple industries. Our clients trust us to build scalable, secure, and innovative digital products that drive real business value.",
    icon: Award,
  },
];

const WhyChooseNeuroraLynx = () => {
  return (
    <section className="paddingtop paddingbottom dark:bg-darkblack">
      <div className="wrapper">
        <div className="flex flex-col gap-6 items-center text-center mb-12">
          <RoundedHeader title="Why Choose Us" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            Why Leading Companies Choose NeuroraLynx AI
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.id}
                data-aos="fade-up"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                <div className="pl-0 group-hover:pl-2 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-darkbackground dark:text-white">
                      {reason.title}
                    </h3>
                  </div>
                  <p className="desc text-gray-700 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNeuroraLynx;
