import React from "react";
import { expertiseServices } from "../util/constant";
import { CheckCircle } from "lucide-react";

const ExpertiseServices = () => {
    return (
        <section className="bg-gray-50 dark:bg-darkblack/50 py-16">
            <div className="wrapper">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 data-aos="fade-up" className="main-title mb-4">
                        Expertise & Services
                    </h2>
                    <p data-aos="fade-up" className="desc">
                        NeuroraLynx AI offers a full suite of advanced technology services.
                        We tailor each solution to the client’s needs, following industry
                        best practices and agile methodologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseServices.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="bg-white dark:bg-darkblack border border-gray-100 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                        >
                            <div className="mb-4">
                                <CheckCircle className="text-primary w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-darkblack dark:text-white group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="desc text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseServices;
