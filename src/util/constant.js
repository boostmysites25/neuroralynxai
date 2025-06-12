import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  MemoryStick,
  Gamepad2,
  Network,
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
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "NeuroraLynx AI",
  email: "info@neuroralynxai.com",
  phone: "+91-7846815456",
  address:
    "Ground floor, 51, 3rd B Cross, Doddanekundi, Rd Gururaja La yout Vibhutipura Extension Doddanekk, Bangalore, Karnataka, 560037",
  socialLinks: [
    {
      href: "",
      icon: FaLinkedin,
    },
    {
      href: "",
      icon: FaInstagram,
    },
    { href: "", icon: FaXTwitter },
    {
      href: "",
      icon: FaYoutube,
    },
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
  "Innovative Design Solutions: Our branding experts think outside the box, delivering breakthrough creative strategies that challenge conventions and elevate brands beyond the competition.",
  "Team-Based Brand Development: We harness collective creativity through cross-functional collaboration, combining diverse expertise to build powerful brand identities that resonate with audiences.",
  "Measurable Business Impact: We focus on strategic brand development that drives real-world results - increasing engagement, building loyalty, and delivering measurable ROI for your business growth.",
  "Future-Proof Marketing: Our team leverages emerging marketing technologies and digital trends to create adaptive branding solutions that keep your business ahead in evolving markets.",
];

export const testimonials = [
  {
    quote:
      "They didn’t just make our platform look good—they made it feel right. The interface is intuitive, the experience seamless. Our user retention has gone up significantly since the redesign.",
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
    title: "Next-Gen AI That Grows With You",
    description:
      "Harness adaptable, self-learning AI systems designed to scale alongside your business. From agile startups to established enterprises, our solutions evolve with your needs.",
  },
  {
    id: 2,
    icon: graph,
    title: "Beyond Traditional Intelligence",
    description:
      "Tap into advanced cognitive models and neural architectures that go far beyond automation—delivering real-time optimization, contextual reasoning, and continuous learning.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Seamless Automation with Human Precision",
    description:
      "Deploy intelligent agents that mimic human-like decision-making, reduce friction in operations, and power your business with unmatched speed and accuracy.",
  },
  {
    id: 4,
    icon: start,
    title: "Redefining the Possibilities of AI",
    description:
      "Enter a new era of innovation where machine learning meets ethical design, and breakthrough ideas become practical tools for everyday impact.",
  },
];

export const faqs = [
  {
    question: "What services does NeuroraLynx AI offer?",
    answer: `• App Development – High-performance iOS and Android applications with exceptional user experiences.
• UX/UI Design – Intuitive and visually compelling interfaces that drive engagement.
• Web Development – Fast, secure, and scalable websites tailored to business goals.
• Artificial Intelligence – Custom AI solutions that automate workflows and enhance decision-making.`,
  },
  {
    question: "How does NeuroraLynx AI approach app development?",
    answer: `• We follow a comprehensive development process from ideation to deployment.
• Our team specializes in native iOS and Android development as well as cross-platform solutions.
• We prioritize performance optimization, security, and exceptional user experiences.
• Post-launch support ensures your app remains updated and competitive in the market.`,
  },
  {
    question: "What makes NeuroraLynx AI's web development services stand out?",
    answer: `• We build responsive websites that work flawlessly across all devices and browsers.
• Our development process emphasizes security, scalability, and performance optimization.
• We integrate modern technologies like progressive web apps and headless CMS solutions.
• Our websites are built with SEO best practices to improve visibility and organic traffic.`,
  },
  {
    question: "How does NeuroraLynx AI incorporate AI into business solutions?",
    answer: `• We develop custom AI models tailored to specific business challenges and opportunities.
• Our AI solutions can automate repetitive tasks, analyze complex data, and generate actionable insights.
• We integrate machine learning capabilities to help systems learn and improve over time.
• Our AI implementations prioritize transparency, ethics, and human-centered design.`,
  },
  {
    question:
      "What is the typical project timeline for app or web development?",
    answer: `• Simple websites: 4-6 weeks from concept to launch.
• Complex web applications: 8-16 weeks depending on feature complexity.
• Mobile applications: 8-12 weeks for the initial version.
• Enterprise solutions: 3-6 months for comprehensive implementation.
• Timelines can be adjusted based on project scope and client requirements.`,
  },
  {
    question: "How does NeuroraLynx AI ensure quality in its deliverables?",
    answer: `• Rigorous testing protocols including automated and manual testing.
• Adherence to industry best practices and coding standards.
• Regular code reviews and quality assurance checkpoints.
• Comprehensive documentation for all projects.
• Continuous integration and deployment practices for reliable updates.`,
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
    answer: `• Discovery: Understanding user needs, business goals, and market context.
• Research: Competitive analysis and user research to inform design decisions.
• Wireframing: Creating low-fidelity mockups to establish information architecture.
• Prototyping: Developing interactive prototypes for user testing.
• Visual Design: Creating the final look and feel with attention to brand consistency.
• Implementation: Working closely with developers to ensure design integrity.`,
  },
  {
    question:
      "What ongoing support does NeuroraLynx AI provide after project completion?",
    answer: `• Regular maintenance updates to ensure security and compatibility.
• Performance monitoring and optimization recommendations.
• Feature enhancements based on user feedback and analytics.
• Technical support packages tailored to client needs.
• Training for client teams to manage content and basic functions.`,
  },
  {
    question: "How does NeuroraLynx AI handle project pricing?",
    answer: `• We offer flexible pricing models including fixed-price projects and time-and-materials arrangements.
• Each project receives a detailed proposal with transparent cost breakdowns.
• We work with clients to prioritize features that deliver the most value within budget constraints.
• Payment schedules are typically milestone-based to align with project progress.`,
  },
  {
    question:
      "Can NeuroraLynx AI help with existing projects or only new ones?",
    answer: `• We offer code audits and technical assessments for existing applications.
• Our team can take over maintenance and enhancement of legacy systems.
• We specialize in modernizing outdated applications with current technologies.
• We can integrate new features or modules into existing platforms.`,
  },
  {
    question: "How can I get started with NeuroraLynx AI for my project?",
    answer: `• Contact us through our website to schedule an initial consultation.
• Share your project requirements and goals during the discovery call.
• Receive a tailored proposal outlining approach, timeline, and investment.
• Begin your project with a dedicated team committed to your success.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "Transparency and honesty guide our interstellar relationships.",
  },
  {
    id: 1,
    icon: quality,
    title: "Quality",
    description:
      "We pursue excellence in every line of code, every design pixel, every cosmic dimension.",
  },
  {
    id: 1,
    icon: success,
    title: "Customer Success",
    description:
      " Your triumph is ours—measured by tangible impact and universal reach.",
  },
  {
    id: 1,
    icon: Infinite,
    title: "Infinite Learning",
    description:
      "We explore beyond known boundaries, continuously expanding our quantum knowledge.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To become a global leader in delivering intelligent digital solutions that seamlessly blend innovation, user experience, and business value. We envision a world where technology doesn't just support ideas—it accelerates them. Our goal is to shape the future of digital transformation by empowering organizations with smart, scalable, and human-centric solutions that drive impact across industries and communities.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is to empower startups, enterprises, and forward-thinking brands with cutting-edge web and app development services driven by innovation and integrity. We are committed to crafting digital experiences that are not only functional and visually stunning but also strategically aligned with your business goals. Through continuous learning, collaboration, and the use of next-gen technologies, we strive to simplify complexity and deliver excellence at every touchpoint.",
  },
  {
    title: "Our Journey",
    description:
      "Founded with a passion for redefining digital possibilities, our journey began with a small team and a big vision. Over the years, we've grown into a trusted technology partner for clients across industries—delivering hundreds of projects with precision and care. From early-stage startups to established enterprises, our collaborative approach, design-first thinking, and commitment to quality have earned us long-term partnerships and global recognition. As we continue to evolve, we remain dedicated to pushing boundaries, building meaningful solutions, and leaving a positive mark on the digital landscape.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    img: CgWebsite,
    description:
      "We build dynamic, AI-enhanced e-commerce platforms that offer seamless shopping experiences, real-time inventory tracking, personalized product recommendations, and secure payment gateways—designed to boost sales and customer retention.",
  },
  {
    id: 2,
    title: "Social Media Platforms",
    img: GoFileMedia,
    description:
      "Create engaging, scalable social networking sites tailored for interaction and growth. Our solutions integrate AI to recommend content, monitor engagement, and drive meaningful connections between users and brands.",
  },
  {
    id: 3,
    title: "Landing Page Development",
    img: TfiLayoutMediaRightAlt,
    description:
      "Design high-impact landing pages focused on conversions. With AI-based heatmaps and behavior analytics, we help you deliver content that captures attention and drives your target audience to act.",
  },
  {
    id: 4,
    title: "Custom Business Websites",
    img: MdOutlineDashboardCustomize,
    description:
      "Develop fully customized websites tailored to your unique business goals. From advanced dashboards to interactive UI elements, our AI-enhanced solutions blend performance, design, and functionality into a powerful digital asset.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    description:
      "We build robust iOS apps with native Swift and Objective-C technologies. With AI-integrated features like smart search, predictive UX, and adaptive personalization, we deliver premium apps optimized for performance and elegance.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    description:
      "Develop scalable Android applications with modern tools like Kotlin and Jetpack. We embed AI features for voice recognition, recommendation engines, and intelligent automation to enhance user experience and engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,
    description:
      "Utilize Flutter for fast, flexible, and beautiful cross-platform apps. Our solutions incorporate AI-driven modules for real-time insights, personalization, and smart user interactions—all from a single codebase.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    description:
      "Create powerful hybrid apps using frameworks like Ionic and React Native. We fuse web technologies with native capabilities and intelligent features to deliver seamless performance across devices and platforms.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Cognitive Governance",
    description:
      "Neural decision support systems for policy optimization, adaptive regulatory frameworks powered by predictive analytics, and distributed intelligence networks for transparent public administration.",
  },
  {
    id: 2,
    img: fintech,
    title: "Neural Finance",
    description:
      "Cognitive market intelligence platforms, sentiment-adaptive trading systems, and neuromorphic risk assessment frameworks that evolve with market conditions and behavioral economics.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Precision Medicine & Cognitive Health",
    description:
      "Integrated biodigital health systems, cognitive diagnostic platforms that synthesize multi-modal health data, and personalized treatment optimization through continuous biometric intelligence.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Collaborative Intelligence Systems",
    description:
      "Human-AI collaborative frameworks, adaptive manufacturing intelligence that optimizes production in real-time, and cognitive automation platforms that enhance human capabilities rather than replace them.",
  },
  {
    id: 5,
    img: energy,
    title: "Intelligent Sustainability",
    description:
      "Cognitive resource optimization networks, predictive energy distribution systems that adapt to usage patterns, and integrated circular economy platforms that minimize waste through intelligent resource tracking.",
  },
  {
    id: 6,
    img: edtech,
    title: "Cognitive Learning Ecosystems",
    description:
      "Adaptive knowledge systems that personalize educational pathways, neural feedback loops for accelerated skill acquisition, and collaborative intelligence platforms that enhance collective learning and innovation.",
  },
  {
    id: 7,
    img: space,
    title: "Advanced Exploration Systems",
    description:
      "Autonomous mission intelligence for space exploration, cognitive resource utilization systems for sustainable operations, and distributed intelligence networks for remote scientific discovery and analysis.",
  },
  {
    id: 8,
    img: security,
    title: "Intelligent Security Architecture",
    description:
      "Adaptive threat intelligence networks, cognitive security systems that evolve with emerging threats, and integrated privacy frameworks that balance protection with accessibility through contextual intelligence.",
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
