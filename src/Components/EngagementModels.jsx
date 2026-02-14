import React, { useState } from "react";
import RoundedHeader from "./RoundedHeader";
import { Users, Target, UserPlus, Lightbulb, ArrowRight } from "lucide-react";

const MODELS = [
  {
    id: 1,
    title: "Dedicated Development Teams",
    description:
      "We assemble dedicated teams of developers, QA engineers, designers, and project managers who work exclusively on your projects. This model is ideal for long-term product development and ongoing engineering partnerships, giving you full control over priorities and roadmap while we handle execution and quality.",
    icon: Users,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Fixed-Scope Projects",
    description:
      "For well-defined requirements, we offer fixed-scope, fixed-price engagements with clear milestones, deliverables, timelines, and acceptance criteria. This model suits MVPs, specific modules, proofs-of-concept, and tightly-defined integrations.",
    icon: Target,
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    title: "Staff Augmentation",
    description:
      "If you have in-house teams and need specific skills — such as AI engineers, LLM specialists, blockchain developers, or React Native experts — we provide skilled resources who integrate with your processes, tools, and ways of working, while you retain direct management oversight.",
    icon: UserPlus,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    title: "Consulting & Advisory",
    description:
      "Our senior architects and AI strategists work with your leadership on technology strategy, AI roadmaps, cloud migration, architecture reviews, due diligence for M&A, and technology investments. This engagement model is ideal for organizations seeking expert guidance without committing to long-term engineering contracts.",
    icon: Lightbulb,
    color: "from-orange-500 to-yellow-400",
  },
];

const EngagementModels = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-darkblack overflow-hidden">
      <div className="wrapper relative z-10 w-full">
        <div className="flex flex-col gap-6 items-center text-center mb-16">
          <RoundedHeader title="How We Work" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            Flexible Engagement Models For Every State of Growth
          </h2>
          {/* <p className="desc max-w-3xl text-center" data-aos="fade-up">
            Choose the model that fits your improved timeline and budget.
          </p> */}
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Mobile Tabs (Horizontal Scroll) */}
          <div className="lg:hidden col-span-12 overflow-x-auto pb-4 flex gap-4 scrollbar-hide snap-x">
            {MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => setActiveId(model.id)}
                className={`whitespace-nowrap px-6 py-3 rounded-full border transition-all duration-300 snap-center ${activeId === model.id
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10"
                  }`}
              >
                {model.title}
              </button>
            ))}
          </div>

          {/* Desktop Navigation (Left Column) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            {MODELS.map((model) => {
              const Icon = model.icon;
              const isActive = activeId === model.id;

              return (
                <button
                  key={model.id}
                  onClick={() => setActiveId(model.id)}
                  className={`group relative flex items-center gap-4 p-6 rounded-2xl text-left transition-all duration-300 border overflow-hidden ${isActive
                      ? "bg-white dark:bg-white/10 border-primary/50 shadow-xl scale-105 z-10"
                      : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-white/5 opacity-70 hover:opacity-100"
                    }`}
                >
                  {isActive && (
                    <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-blue-600" />
                  )}

                  <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 group-hover:text-primary"
                    }`}>
                    <Icon size={24} />
                  </div>
                  <span className={`text-lg font-bold transition-colors ${isActive ? "text-darkbackground dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"
                    }`}>
                    {model.title}
                  </span>

                  {isActive && (
                    <div className="ml-auto text-primary animate-pulse">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Area (Right Column) */}
          <div className="col-span-12 lg:col-span-8">
            <div className="relative h-full min-h-[450px] rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 md:p-12 shadow-2xl overflow-hidden group">
              {/* Dynamic Background Gradient */}
              {MODELS.map((model) => (
                <div
                  key={model.id}
                  className={`absolute inset-0 bg-gradient-to-br ${model.color} opacity-5 transition-opacity duration-700 ${activeId === model.id ? "opacity-10" : "opacity-0"
                    }`}
                />
              ))}

              {/* Decorative Blur Circle */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

              {MODELS.map((model) => {
                if (model.id !== activeId) return null;
                const Icon = model.icon;

                return (
                  <div key={model.id} className="relative z-10 h-full flex flex-col justify-center animate-fade-in">
                    <div className={`mb-8 w-20 h-20 rounded-3xl bg-gradient-to-br ${model.color} p-0.5 shadow-2xl skew-y-3 group-hover:skew-y-6 transition-transform duration-500`}>
                      <div className="w-full h-full bg-white dark:bg-darkblack rounded-[22px] flex items-center justify-center">
                        <Icon size={36} className={`text-white bg-clip-text bg-gradient-to-br ${model.color}`} />
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold text-darkbackground dark:text-white mb-6 tracking-tight">
                      {model.title}
                    </h3>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10 max-w-2xl">
                      {model.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
