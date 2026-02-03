import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import userimg from "../assets/images/userimg.jpeg";
import appdevimg1 from "../assets/images/services/appdevimg1.png";
import appdevimg2 from "../assets/images/services/appdevimg2.jpeg";
import ArtificialIntelligenceImg from "../assets/images/services/Artificial_Intelligence_Solutionssub1.jpeg";

const AVATARS = [
  { img: userimg, className: "top-2 left-[10%] w-14 h-14" },
  { img: appdevimg1, className: "top-4 right-[15%] w-12 h-12" },
  { img: appdevimg2, className: "bottom-8 left-[5%] w-11 h-11" },
  {
    img: ArtificialIntelligenceImg,
    className: "bottom-4 right-[8%] w-12 h-12",
  },
];

const TEAM_MEMBERS = [
  { name: "Jay Tiwari", role: "Sales Executive", img: userimg },
  { name: "Anirudh", role: "Sales Executive", img: appdevimg1 },
];

const BuildAICTA = () => {
  return (
    <section className="w-full py-16 sm:py-24 overflow-hidden">
      <div className="relative bg-[#0a1628] rounded-2xl mx-4 sm:mx-auto max-w-7xl overflow-hidden sm:px-4">
        {/* Subtle wavy background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233c81f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
          {/* Left: Text & CTA */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
              data-aos="fade-right"
            >
              Build AI Apps with Speed & Accuracy
            </h2>
            <p
              className="text-white/90 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              From ideation to deployment, we handle it all, trusted by 2500+
              clients across 20+ years.
            </p>
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300 group"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              Let's Build Your AI Solution
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </div>

          {/* Right: Profile cards & avatars */}
          <div
            className="flex-1 relative w-full max-w-md min-h-[280px] flex items-center justify-center"
            data-aos="fade-left"
          >
            {/* Connecting lines - subtle */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              preserveAspectRatio="none"
            >
              <line
                x1="20%"
                y1="30%"
                x2="50%"
                y2="50%"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
              <line
                x1="80%"
                y1="40%"
                x2="55%"
                y2="55%"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
              <line
                x1="25%"
                y1="70%"
                x2="50%"
                y2="55%"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            </svg>

            {/* Floating avatars */}
            {AVATARS.map((avatar, idx) => (
              <div
                key={idx}
                className={`absolute rounded-full overflow-hidden border-2 border-primary/50 shadow-lg ${avatar.className}`}
              >
                <img
                  src={avatar.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildAICTA;
