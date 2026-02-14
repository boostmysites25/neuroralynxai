import React, { useRef, useState } from "react";
import { services } from "../util/constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
    const cardRef = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top, width, height } = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25; // Sensitivity
        const y = (e.clientY - top - height / 2) / 25; // Sensitivity
        setRotate({ x: -y, y: x }); // Invert Y for correct tilt
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
        setRotate({ x: 0, y: 0 });
    };

    const Icon = service.icon;

    return (
        <div
            ref={cardRef}
            onMouseMove={(e) => {
                setIsHovering(true);
                handleMouseMove(e);
            }}
            onMouseLeave={handleMouseLeave}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative group perspective-1000"
            style={{
                transform: isHovering
                    ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transition: "transform 0.1s ease-out",
            }}
        >
            {/* Holographic Border Effect */}
            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-transparent via-primary/50 to-transparent bg-[length:400%_400%] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-border-flow" />

            <div className="relative h-full p-8 rounded-[2rem] bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 backdrop-blur-md shadow-lg overflow-hidden flex flex-col gap-6">

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start">
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] group-hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.5)] transition-all duration-300">
                        <Icon size={32} className="drop-shadow-lg" />
                    </div>

                    <Link to={`/services/${service.link}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <ArrowUpRight size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </Link>
                </div>

                <div className="relative z-10 flex flex-col gap-4 flex-grow">
                    <h3 className="text-2xl font-bold text-darkbackground dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-400 transition-all duration-300">
                        {service.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {service.description}
                    </p>
                </div>

                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
            </div>
        </div>
    );
};

const ServicesGrid = () => {
    React.useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className="relative py-24 dark:bg-darkblack overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="wrapper relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
