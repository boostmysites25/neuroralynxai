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
    <section className="relative py-24 dark:bg-darkblack overflow-hidden z-0">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="wrapper relative z-10">
        <div className="flex flex-col gap-6 items-center text-center mb-16">
          <RoundedHeader title="Why Choose Us" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            Why Leading Companies Choose NeuroraLynx AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            // Bento Grid Logic:
            // 0, 3, 4 -> span 1
            // 1, 2, 5 -> span 2
            // Creating aligned rows:
            // Row 1: [0][1 - span 2]
            // Row 2: [2 - span 2][3]
            // Row 3: [4][5 - span 2]
            const isWide = index === 1 || index === 2 || index === 5;

            return (
              <div
                key={reason.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`group relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${isWide ? "md:col-span-2" : "md:col-span-1"
                  }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 h-full flex flex-col items-start">
                  <div className="mb-6 inline-flex p-3 rounded-2xl bg-white dark:bg-white/10 text-primary shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-darkbackground dark:text-white mb-4 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNeuroraLynx;
