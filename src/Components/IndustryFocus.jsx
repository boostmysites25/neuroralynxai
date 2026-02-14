import React from "react";
import { industryFocusData } from "../util/constant";

const IndustryFocus = () => {
    return (
        <section className="bg-white dark:bg-darkblack py-16">
            <div className="wrapper">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 data-aos="fade-up" className="main-title mb-4">
                        Industry Focus
                    </h2>
                    <p data-aos="fade-up" className="desc">
                        NeuroraLynx AI has a special focus on logistics, transportation, and
                        tech-driven startups. We create tailored solutions that address
                        industry-specific challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {industryFocusData.map((focus, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-gray-50 dark:bg-darkblack/50 border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={focus.image}
                                    alt={focus.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3 text-darkblack dark:text-white group-hover:text-primary transition-colors">
                                        {focus.title}
                                    </h3>
                                    <p className="desc text-base leading-relaxed mb-4">
                                        {focus.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryFocus;
