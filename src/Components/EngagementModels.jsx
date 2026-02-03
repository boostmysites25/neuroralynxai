import React from "react";
import RoundedHeader from "./RoundedHeader";
import {
  Users,
  Target,
  UserPlus,
  Lightbulb,
} from "lucide-react";

const MODELS = [
  {
    id: 1,
    title: "Dedicated Development Teams",
    description:
      "We assemble dedicated teams of developers, QA engineers, designers, and project managers who work exclusively on your projects. This model is ideal for long-term product development and ongoing engineering partnerships, giving you full control over priorities and roadmap while we handle execution and quality.",
    icon: Users,
  },
  {
    id: 2,
    title: "Fixed-Scope Projects",
    description:
      "For well-defined requirements, we offer fixed-scope, fixed-price engagements with clear milestones, deliverables, timelines, and acceptance criteria. This model suits MVPs, specific modules, proofs-of-concept, and tightly-defined integrations.",
    icon: Target,
  },
  {
    id: 3,
    title: "Staff Augmentation",
    description:
      "If you have in-house teams and need specific skills — such as AI engineers, LLM specialists, blockchain developers, or React Native experts — we provide skilled resources who integrate with your processes, tools, and ways of working, while you retain direct management oversight.",
    icon: UserPlus,
  },
  {
    id: 4,
    title: "Consulting & Advisory",
    description:
      "Our senior architects and AI strategists work with your leadership on technology strategy, AI roadmaps, cloud migration, architecture reviews, due diligence for M&A, and technology investments. This engagement model is ideal for organizations seeking expert guidance without committing to long-term engineering contracts.",
    icon: Lightbulb,
  },
];

const EngagementModels = () => {
  return (
    <section className="paddingtop paddingbottom bg-gray-50 dark:bg-darkblack">
      <div className="wrapper">
        <div className="flex flex-col gap-6 items-center text-center mb-12">
          <RoundedHeader title="How We Work" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            Flexible Engagement Models for Every Stage of Growth
          </h2>
          <p className="desc max-w-3xl text-center" data-aos="fade-up">
            Whether you need a complete product team, additional capacity, or
            niche AI or blockchain expertise, NeuroraLynx AI offers engagement
            models designed to fit your timelines, budgets, and collaboration
            preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.id}
                data-aos="fade-up"
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                <div className="pl-0 group-hover:pl-2 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-darkbackground dark:text-white">
                      {model.title}
                    </h3>
                  </div>
                  <p className="desc text-gray-700 dark:text-gray-300 leading-relaxed">
                    {model.description}
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

export default EngagementModels;
