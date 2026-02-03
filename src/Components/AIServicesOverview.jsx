import React from "react";
import RoundedHeader from "./RoundedHeader";
import {
  Sparkles,
  LineChart,
  MessageCircle,
  ScanEye,
  Bot,
  Globe,
} from "lucide-react";

const SERVICES = [
  {
    id: 1,
    icon: Sparkles,
    title: "Generative AI & Large Language Model (LLM) Development",
    description:
      "NeuroraLynx AI helps enterprises harness Generative AI and Large Language Models to automate knowledge work, enhance customer and employee experiences, generate code and content, synthesize data, and build domain-specific copilots for internal workflows.",
    bullets: [
      "Enterprise-grade chatbots and virtual assistants",
      "Document intelligence and knowledge extraction",
      "AI-powered code assistants",
      "Multilingual content generation",
      "Synthetic data generation",
    ],
  },
  {
    id: 2,
    icon: LineChart,
    title: "Machine Learning Development & Predictive Analytics",
    description:
      "We transform raw data into actionable foresight with machine learning models and predictive analytics solutions. Our data scientists and ML engineers work with structured and unstructured data to build models that forecast demand, detect anomalies, segment customers, and optimize pricing.",
    bullets: [
      "Supervised, unsupervised, and reinforcement learning",
      "Time series forecasting",
      "Customer lifetime value (CLV) modeling",
      "Recommendation systems and personalization",
      "MLOps pipelines",
    ],
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Natural Language Processing (NLP) & Conversational AI",
    description:
      "From sentiment analysis and text classification to intent recognition, entity extraction, and multilingual chatbots, our NLP services enable your systems to understand, interpret, and generate human language at scale.",
    bullets: [
      "Contact center and support chatbots",
      "Voice bots and interactive voice response (IVR)",
      "Brand monitoring and sentiment analysis",
      "Document summarization and analysis",
      "Semantic search and retrieval systems",
    ],
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
  },
  {
    id: 5,
    icon: Bot,
    title: "Robotic Process Automation (RPA) & Intelligent Agents",
    description:
      "We help organizations automate repetitive, rule-based tasks and orchestrate complex workflows using RPA platforms, workflow engines, and AI-driven agents. By integrating AI with automation, we move from simple scripts to intelligent automation.",
    bullets: [
      "Invoice processing and financial close automation",
      "HR onboarding and payroll automation",
      "Customer service automation",
      "IT operations automation",
      "AI-powered multi-task agents",
    ],
  },
  {
    id: 6,
    icon: Globe,
    title: "Custom Web Development & Enterprise Web Platforms",
    description:
      "NeuroraLynx AI engineers custom web applications using modern front-end frameworks combined with scalable back-ends built on Node.js, Python, PHP, Java, and .NET. We design microservices or modular monolith architectures following API-first principles.",
    bullets: [
      "Custom SaaS platforms and multi-tenant apps",
      "Headless CMS and e-commerce platforms",
      "RESTful and GraphQL APIs",
      "Admin dashboards and analytics panels",
      "Legacy application modernization",
    ],
  },
];

const AIServicesOverview = () => {
  return (
    <section className="paddingtop paddingbottom dark:bg-darkblack">
      <div className="wrapper">
        <div className="flex flex-col gap-6 items-center text-center mb-12">
          <RoundedHeader title="AI & Automation" />
          <h2 className="main-title max-w-4xl" data-aos="fade-up">
            End-to-End AI & Intelligent Automation Services
          </h2>
          <p className="desc max-w-3xl text-center" data-aos="fade-up">
            NeuroraLynx AI designs, develops, deploys, and continuously improves
            AI and automation solutions that transform operations, elevate
            customer experiences, and unlock new revenue streams. From custom
            machine learning models and predictive analytics to production-grade
            Generative AI applications, we ensure that your AI initiatives are
            scalable, secure, robust, and tightly aligned with your business
            KPIs, regulatory requirements, and ethical guidelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
            <div
              key={service.id}
              data-aos="fade-up"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
              <div className="pl-0 group-hover:pl-2 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                <div className="flex items-center gap-4 mb-4 pt-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-darkbackground dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="desc mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-darkbackground dark:text-gray-300"
                    >
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="desc">{bullet}</span>
                    </li>
                  ))}
                </ul>
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
