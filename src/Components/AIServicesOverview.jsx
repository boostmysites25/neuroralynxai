import React from "react";
import RoundedHeader from "./RoundedHeader";
import {
  Sparkles,
  LineChart,
  MessageCircle,
  ScanEye,
  Bot,
  Globe,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    id: 1,
    icon: Sparkles,
    title: "Generative AI & LLM Development",
    description:
      "NeuroraLynx AI helps enterprises harness Generative AI and Large Language Models to automate knowledge work, enhance customer and employee experiences, generate code and content, synthesize data, and build domain-specific copilots for internal workflows.",
    bullets: [
      "Enterprise-grade chatbots and virtual assistants",
      "Document intelligence and knowledge extraction",
      "AI-powered code assistants",
      "Multilingual content generation",
      "Synthetic data generation",
    ],
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    icon: LineChart,
    title: "Machine Learning & Predictive Analytics",
    description:
      "We transform raw data into actionable foresight with machine learning models and predictive analytics solutions. Our data scientists and ML engineers work with structured and unstructured data to build models that forecast demand, detect anomalies, segment customers, and optimize pricing.",
    bullets: [
      "Supervised, unsupervised, and reinforcement learning",
      "Time series forecasting",
      "Customer lifetime value (CLV) modeling",
      "Recommendation systems and personalization",
      "MLOps pipelines",
    ],
    color: "from-purple-500 to-pink-400",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Natural Language Processing (NLP)",
    description:
      "From sentiment analysis and text classification to intent recognition, entity extraction, and multilingual chatbots, our NLP services enable your systems to understand, interpret, and generate human language at scale.",
    bullets: [
      "Contact center and support chatbots",
      "Voice bots and interactive voice response (IVR)",
      "Brand monitoring and sentiment analysis",
      "Document summarization and analysis",
      "Semantic search and retrieval systems",
    ],
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: 4,
    icon: ScanEye,
    title: "Computer Vision & Intelligent Imaging",
    description:
      "NeuroraLynx AI develops computer vision systems that enable machines to see, interpret, and act on visual data from images, videos, and live streams. We combine deep learning, edge computing, and hardware integration to build solutions for various industries.",
    bullets: [
      "Object detection, tracking, and classification",
      "Facial recognition and biometric authentication",
      "Medical imaging analysis",
      "OCR and document digitization",
      "Video analytics",
    ],
    color: "from-orange-500 to-yellow-400",
  },
  {
    id: 5,
    icon: Bot,
    title: "RPA & Intelligent Agents",
    description:
      "We help organizations automate repetitive, rule-based tasks and orchestrate complex workflows using RPA platforms, workflow engines, and AI-driven agents. By integrating AI with automation, we move from simple scripts to intelligent automation.",
    bullets: [
      "Invoice processing and financial close automation",
      "HR onboarding and payroll automation",
      "Customer service automation",
      "IT operations automation",
      "AI-powered multi-task agents",
    ],
    color: "from-red-500 to-rose-400",
  },
  {
    id: 6,
    icon: Globe,
    title: "Custom Web Development",
    description:
      "NeuroraLynx AI engineers custom web applications using modern front-end frameworks combined with scalable back-ends built on Node.js, Python, PHP, Java, and .NET. We design microservices or modular monolith architectures following API-first principles.",
    bullets: [
      "Custom SaaS platforms and multi-tenant apps",
      "Headless CMS and e-commerce platforms",
      "RESTful and GraphQL APIs",
      "Admin dashboards and analytics panels",
      "Legacy application modernization",
    ],
    color: "from-indigo-500 to-violet-400",
  },
];

const AIServicesOverview = () => {
  return (
    <section className="relative py-24 dark:bg-darkblack overflow-hidden z-0">
      <div className="wrapper relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 items-center text-center mb-24">
          <RoundedHeader title="AI & Automation" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            End-to-End AI & Intelligent Automation Services
          </h2>
          <p className="desc max-w-3xl text-center text-lg leading-relaxed" data-aos="fade-up">
            NeuroraLynx AI designs, develops, deploys, and continuously improves AI and automation solutions that transform operations and elevate customer experiences.
          </p>
        </div>

        <div className="flex flex-col gap-8 pb-24">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            // Calculate distinct top offset for stacking overlap
            const topOffset = 100 + index * 30;

            return (
              <div
                key={service.id}
                className="sticky transition-all duration-500"
                style={{ top: `${topOffset}px` }}
              >
                <div
                  className="relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-2xl p-8 md:p-12 lg:p-16 group hover:-translate-y-2 transition-transform duration-500"
                >
                  {/* Background Gradient Mesh */}
                  <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br ${service.color} opacity-[0.03] group-hover:opacity-[0.07] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 transition-opacity duration-700 pointer-events-none`} />

                  <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <Icon size={32} />
                      </div>

                      <h3 className="text-3xl md:text-5xl font-bold text-darkbackground dark:text-white leading-tight">
                        {service.title}
                      </h3>

                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3 mt-4">
                        {service.bullets.map((bullet, idx) => (
                          <span key={idx} className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-white/20 transition-colors cursor-default">
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden lg:flex justify-end items-center">
                      <div className={`relative w-full aspect-square max-w-md rounded-[2rem] bg-gradient-to-br ${service.color} p-1 opacity-90 rotate-3 group-hover:rotate-6 transition-transform duration-700`}>
                        <div className="absolute inset-0 bg-white dark:bg-darkblack rounded-[1.8rem]" />
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[1.8rem]">
                          <Icon size={240} className={`text-gray-100 dark:text-white/5 absolute -right-10 -bottom-10 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12`} />
                          <span className="text-[10rem] font-bold opacity-40 select-none bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 bg-clip-text text-transparent transform -rotate-6 z-10 transition-opacity duration-300">
                            0{service.id}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Detail Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent opacity-50" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIServicesOverview;
