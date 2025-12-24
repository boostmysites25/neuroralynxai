import {
  Smartphone,
  Users,
  Code,
  MemoryStick,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";

export const companyDetails = {
  name: "NeuroraLynx AI",
  email: "info@neuroralynxai.com",
  phone: "+91-7846815456",
  address:
    "Unit 101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/neuroralynxai",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/neuroralynxai?utm_source=qr&igsh=OHdjOG93bTRmcGJk",
      icon: FaInstagram,
    },
    // { href: "", icon: FaXTwitter },
    // {
    //   href: "",
    //   icon: FaYoutube,
    // },
  ],
  whatsapp: "",
};

export const services = [
  {
    title: "App Development",
    link: "app-development",
    description:
      "Designing and developing high-performance iOS and Android apps that deliver speed, security, and exceptional user experiences.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "UX/UI Design",
    link: "ux-ui-design",
    description:
      "Creating intuitive, accessible, and visually compelling interfaces that drive engagement and user satisfaction.",
    icon: Users,
    bgColor: "bg-gray-900",
  },
  {
    title: "Web Development",
    link: "web-development",
    description:
      "Building fast, secure, and scalable websites and web apps tailored to meet business goals and user needs.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence",
    link: "artificial-intelligence",
    description:
      "Leveraging AI to automate workflows, enhance decision-making, and unlock intelligent insights from data.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Innovative Design Solutions: Our team brings fresh perspectives to every project, creating strategies that stand out and help your brand connect with customers in meaningful ways.",
  "Collaborative Approach: We work closely with you throughout the process, combining our technical expertise with your vision to build solutions that truly represent your business.",
  "Proven Results: We focus on delivering solutions that make a real difference, helping you engage customers, build trust, and grow your business with measurable outcomes.",
  "Staying Ahead: We keep up with the latest technologies and trends, ensuring your digital presence remains current and competitive in today's fast-paced market.",
];

export const testimonials = [
  {
    quote:
      "They didn’t just make our platform look good they made it feel right. The interface is intuitive, the experience seamless. Our user retention has gone up significantly since the redesign.",
    author: "Aarav Kapoor, Product Manager of Nexus Tech",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Integrating AI felt overwhelming until we started working with this team. They developed smart solutions that streamlined operations and gave us better insights into our customer behavior. Real value, real results.",
    author: "Emily T, Operations Manager at Health Innovations Group",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We approached them with a rough idea and walked away with a polished, high-performing mobile app that’s getting great reviews. Their process was smooth, and they kept us involved at every step.",
    author: "Anubhav J., Marketing Director at 5G Homes",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Their strategic approach to our e-commerce revamp led to a smoother checkout process and noticeable sales growth. The team's creativity and technical skills were exactly what we needed.",
    author: "Michael B., Head of Marketing, Nexus Tech",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "From day one, the team truly understood our brand and translated that into a sleek, responsive website. Their attention to detail and SEO knowledge helped us increase visibility and engagement. We couldn’t be happier.",
    author: "Samiksha Sharma, CEO of Tech Innovations",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "AI Solutions That Scale With Your Business",
    description:
      "Our AI systems are built to grow with you. Whether you're just starting out or running a large enterprise, our solutions adapt to your changing needs and help you stay competitive.",
  },
  {
    id: 2,
    icon: graph,
    title: "Smart Technology That Works for You",
    description:
      "We use advanced AI models that go beyond simple automation. Our systems provide real-time insights, understand context, and keep learning to improve your operations continuously.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Automation That Feels Natural",
    description:
      "Our intelligent systems make decisions like humans would, but faster and more accurately. They streamline your operations, reduce errors, and help your team focus on what matters most.",
  },
  {
    id: 4,
    icon: start,
    title: "Innovation That Makes a Difference",
    description:
      "We combine cutting-edge machine learning with thoughtful design to create practical solutions that solve real problems and deliver tangible results for your business.",
  },
];

export const faqs = [
  {
    question: "What services does NeuroraLynx AI offer?",
    answer: `• App Development: We build high-performance mobile applications for iOS and Android that provide excellent user experiences.
• UX/UI Design: We create intuitive and visually appealing interfaces that engage users and drive results.
• Web Development: We build fast, secure, and scalable websites that are tailored to meet your business goals.
• Artificial Intelligence: We develop custom AI solutions that automate your workflows and help you make better decisions.`,
  },
  {
    question: "How does NeuroraLynx AI approach app development?",
    answer: `• We follow a complete development process from initial idea to final deployment.
• Our team works with native iOS and Android development as well as cross-platform solutions.
• We focus on performance, security, and creating exceptional user experiences.
• After launch, we provide ongoing support to keep your app updated and competitive.`,
  },
  {
    question: "What makes NeuroraLynx AI's web development services stand out?",
    answer: `• We build responsive websites that work perfectly on all devices and browsers.
• Our development process focuses on security, scalability, and performance.
• We use modern technologies like progressive web apps and headless CMS solutions.
• Our websites follow SEO best practices to help you get found online.`,
  },
  {
    question: "How does NeuroraLynx AI incorporate AI into business solutions?",
    answer: `• We create custom AI models designed for your specific business needs.
• Our AI solutions automate repetitive tasks, analyze data, and provide useful insights.
• We use machine learning to help systems learn and improve continuously.
• Our AI work focuses on being transparent, ethical, and user-friendly.`,
  },
  {
    question:
      "What is the typical project timeline for app or web development?",
    answer: `• Simple websites: Usually 4 to 6 weeks from start to finish.
• Complex web applications: Typically 8 to 16 weeks depending on features needed.
• Mobile applications: Generally 8 to 12 weeks for the first version.
• Enterprise solutions: Usually 3 to 6 months for complete implementation.
• Timelines can be adjusted based on your project needs and requirements.`,
  },
  {
    question: "How does NeuroraLynx AI ensure quality in its deliverables?",
    answer: `• We use thorough testing including both automated and manual testing.
• We follow industry best practices and maintain high coding standards.
• We conduct regular code reviews and quality checks throughout development.
• We provide complete documentation for all projects.
• We use continuous integration and deployment for reliable updates.`,
  },
  {
    question:
      "What technologies and frameworks does NeuroraLynx AI specialize in?",
    answer: `• Mobile: Swift, Kotlin, React Native, Flutter
• Web: React, Angular, Vue.js, Node.js, PHP, Python
• Database: MongoDB, MySQL, PostgreSQL, Firebase
• AI/ML: TensorFlow, PyTorch, scikit-learn, OpenAI
• Cloud: AWS, Google Cloud, Azure, Digital Ocean`,
  },
  {
    question: "How does the UX/UI design process work at NeuroraLynx AI?",
    answer: `• Discovery: We start by understanding your users, business goals, and market.
• Research: We analyze competitors and study users to guide our design decisions.
• Wireframing: We create simple layouts to plan the structure and flow.
• Prototyping: We build interactive prototypes to test with users.
• Visual Design: We create the final look and feel that matches your brand.
• Implementation: We work closely with developers to make sure the design is built correctly.`,
  },
  {
    question:
      "What ongoing support does NeuroraLynx AI provide after project completion?",
    answer: `• Regular maintenance updates to keep everything secure and working properly.
• Performance monitoring and suggestions for improvements.
• New features based on user feedback and usage data.
• Technical support packages customized to your needs.
• Training for your team so you can manage content and basic functions.`,
  },
  {
    question: "How does NeuroraLynx AI handle project pricing?",
    answer: `• We offer flexible pricing including fixed-price projects and hourly arrangements.
• Every project gets a detailed proposal with clear cost breakdowns.
• We work with you to prioritize features that give the most value within your budget.
• Payment schedules are usually based on project milestones.`,
  },
  {
    question:
      "Can NeuroraLynx AI help with existing projects or only new ones?",
    answer: `• We can review and assess your existing applications.
• Our team can take over maintenance and improvements for current systems.
• We specialize in updating older applications with modern technologies.
• We can add new features or modules to your existing platforms.`,
  },
  {
    question: "How can I get started with NeuroraLynx AI for my project?",
    answer: `• Contact us through our website to set up an initial consultation.
• Share your project needs and goals during our discovery call.
• We'll send you a customized proposal with our approach, timeline, and pricing.
• Start your project with a team dedicated to your success.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "We believe in being transparent and honest in everything we do, building trust through clear communication and reliable partnerships.",
  },
  {
    id: 2,
    icon: quality,
    title: "Quality",
    description:
      "We pay attention to every detail, from the code we write to the designs we create, ensuring excellence in every project we deliver.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Success",
    description:
      "Your success is our priority. We measure our achievements by the real impact we make and the value we bring to your business.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Continuous Learning",
    description:
      "We stay curious and keep learning, always exploring new technologies and approaches to bring you the best solutions possible.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "We aim to be a trusted partner for businesses looking to transform their digital presence. Our vision is to create technology solutions that combine innovation with practical value, helping companies achieve their goals faster and more effectively. We believe technology should make life easier, not more complicated, and we're committed to building solutions that truly serve people and businesses.",
  },
  {
    title: "Our Mission",
    description:
      "We help businesses of all sizes build powerful digital solutions that work. Whether you're a startup or an established company, we provide web and app development services that are both cutting-edge and reliable. We focus on creating digital experiences that look great, work smoothly, and help you reach your business objectives. Through teamwork, innovation, and a commitment to quality, we turn complex challenges into simple, effective solutions.",
  },
  {
    title: "Our Journey",
    description:
      "We started with a simple idea: technology should solve real problems. What began as a small team with big ambitions has grown into a company trusted by clients across different industries. We've completed hundreds of projects, each one teaching us something new. From helping startups launch their first app to supporting large enterprises with complex systems, we've learned that success comes from listening, adapting, and always putting quality first. As we continue growing, we stay focused on what matters most: delivering solutions that make a real difference.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    img: CgWebsite,
    description:
      "We build powerful e-commerce platforms that offer smooth shopping experiences, real-time inventory tracking, personalized product suggestions, and secure payment systems designed to increase sales and keep customers coming back.",
  },
  {
    id: 2,
    title: "Social Media Platforms",
    img: GoFileMedia,
    description:
      "Create engaging, scalable social networking sites built for interaction and growth. Our solutions use AI to recommend content, track engagement, and help users and brands connect in meaningful ways.",
  },
  {
    id: 3,
    title: "Landing Page Development",
    img: TfiLayoutMediaRightAlt,
    description:
      "Design high-converting landing pages that get results. With AI-powered analytics and behavior tracking, we help you create content that grabs attention and encourages your audience to take action.",
  },
  {
    id: 4,
    title: "Custom Business Websites",
    img: MdOutlineDashboardCustomize,
    description:
      "Build fully customized websites designed for your specific business goals. From advanced dashboards to interactive features, our solutions combine performance, design, and functionality into a powerful digital presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    description:
      "We build strong iOS apps using native Swift and Objective-C. With AI features like smart search, predictive interfaces, and personalized experiences, we deliver high-quality apps optimized for performance and user experience.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    description:
      "Build scalable Android applications using modern tools like Kotlin and Jetpack. We add AI features for voice recognition, recommendation systems, and smart automation to improve user experience and engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,
    description:
      "Use Flutter to create fast, flexible, and attractive cross-platform apps. Our solutions include AI features for real-time insights, personalization, and smart user interactions, all from one codebase.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    description:
      "Create powerful hybrid apps using frameworks like Ionic and React Native. We combine web technologies with native features and smart capabilities to deliver smooth performance across all devices and platforms.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "AI Solutions for Government & Public Sector",
    description:
      "Secure, compliant AI systems for public services, including data analytics, process automation, decision support, and citizen engagement platforms.",
    keywords: "AI for government, public sector AI solutions, secure AI systems",
  },
  {
    id: 2,
    img: fintech,
    title: "AI Solutions for Financial Technology (FinTech)",
    description:
      "AI-driven automation for fraud detection, risk analysis, financial data processing, and intelligent decision-making in modern fintech platforms.",
    keywords: "AI in fintech, financial automation, fraud detection AI",
  },
  {
    id: 3,
    img: healthcare,
    title: "AI Solutions for Healthcare & Medical Technology",
    description:
      "Intelligent AI solutions for healthcare analytics, diagnostics support, patient data management, and workflow automation with privacy-first design.",
    keywords: "AI in healthcare, medical AI solutions, healthcare automation",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "AI Solutions for Manufacturing & Industrial Automation",
    description:
      "Smart automation, predictive analytics, and AI-powered monitoring systems to improve efficiency, quality control, and operational scalability.",
    keywords: "AI in manufacturing, industrial automation, predictive analytics",
  },
  {
    id: 5,
    img: energy,
    title: "AI Solutions for Energy & Sustainability",
    description:
      "AI-powered optimization for energy management, sustainability analytics, predictive maintenance, and smart infrastructure systems.",
    keywords: "AI for energy, sustainability AI, smart energy systems",
  },
  {
    id: 6,
    img: edtech,
    title: "AI Solutions for Education Technology (EdTech)",
    description:
      "Intelligent learning platforms, personalized education systems, analytics-driven insights, and automation for modern digital education.",
    keywords: "AI in education, EdTech AI solutions, personalized learning AI",
  },
  {
    id: 7,
    img: space,
    title: "AI Solutions for Aerospace & Advanced Research",
    description:
      "AI-driven analytics, simulation systems, data modeling, and automation solutions for aerospace, research, and exploration technologies.",
    keywords: "AI in aerospace, advanced AI analytics, research automation",
  },
  {
    id: 8,
    img: security,
    title: "AI Solutions for Cybersecurity & Data Protection",
    description:
      "AI-powered threat detection, security automation, data monitoring, and risk intelligence for secure digital infrastructure.",
    keywords: "AI cybersecurity, data protection AI, threat detection systems",
  },
];

// Import web development portfolio images
import coldCreekcapImg from "../assets/images/portfolio/web-development/cold-creekcap.webp";
import thinkRealityImg from "../assets/images/portfolio/web-development/think-reality.webp";
import akashMegaMartImg from "../assets/images/portfolio/web-development/akash-mega-mart.webp";
import midwamImg from "../assets/images/portfolio/web-development/midwam.webp";

// Import app development portfolio images
import akashMegaMartAppImg from "../assets/images/portfolio/app-development/akash_mega_mart-app.webp";
import feelitAppImg from "../assets/images/portfolio/app-development/feelit_app.webp";
import klikomicsImg from "../assets/images/portfolio/app-development/klikomics.webp";
import autosnapAppImg from "../assets/images/portfolio/app-development/autosnap-app.webp";
import rentopImg from "../assets/images/portfolio/app-development/rentop.webp";

// portfolio images (web development)
export const webDevelopmentPortfolio = [
  {
    id: 1,
    image: coldCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 2,
    image: thinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 3,
    image: akashMegaMartImg,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 4,
    image: midwamImg,
    title: "Midwam",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appDevelopmentPortfolio = [
  {
    id: 1,
    image: akashMegaMartAppImg,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    image: feelitAppImg,
    title: "Feel It Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    image: klikomicsImg,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    image: autosnapAppImg,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    image: rentopImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// Import AI project images
import findMyAITool from "../assets/images/portfolio/ai/Find My AI Tool.png";
import vyroAI from "../assets/images/portfolio/ai/AI Art Generator – Vyro AI.webp";

// AI Projects portfolio
export const aiProjectsPortfolio = [
  {
    id: 1,
    image: findMyAITool,
    title: "Find My AI Tool",
    description:
      "Discovery platform offering curated listings, reviews, and rankings of AI tools across categories like design, automation, and productivity",
    link: "https://findmyaitool.com",
    category: "AI Directory / SaaS Review",
  },
  {
    id: 2,
    image: vyroAI,
    title: "AI Art Generator – Vyro AI",
    description:
      "App using machine learning and neural style transfer to convert photos into stunning AI-generated artwork with multiple artistic styles",
    link: "https://vyro.ai",
    category: "Art / Photo Editing",
  },

];
