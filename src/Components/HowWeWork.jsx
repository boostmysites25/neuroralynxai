import { useNavigate } from "react-router-dom";
import backgroundimg from "../assets/images/backgroundimg.png";
import backgroundwhiteimg from "../assets/images/backgroundwhiteimg.png";
import howweworkimg from "../assets/images/howweworkimg.jpeg";
import { useTheme } from "../Context/ThemeContext";

const HowWeWork = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };

  return (
    <div>
      <div className="relative overflow-hidden paddingtop paddingbottom">
        <div className="absolute inset-0 z-0">
          <img
            src={isDarkMode ? backgroundimg : backgroundwhiteimg}
            alt=""
            className="w-full h-full object-contain opacity-30"
          />
        </div>

        <div className="wrapper relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h1 className="main-title" data-aos="fade-up">
              How We Work With You
            </h1>
            <p className="desc" data-aos="fade-up">
              We help businesses improve operations and discover new
              opportunities using custom AI strategies and smart
              automation, all from one powerful platform.
            </p>
          </div>

          {/* How We Work Section */}
          <section className="grid md:grid-cols-2 gap-10">
            <div>
              <img
                src={howweworkimg}
                alt="Collaboration process"
                className="w-full rounded-lg"
                data-aos="fade-right"
              />
            </div>
            <div className="h-full flex flex-col gap-5">
              <h2
                className="text-[32px] font-bold text-primary"
                data-aos="fade-right"
              >
                Our Process
              </h2>
              <p className="desc" data-aos="fade-right">
                We start by understanding your goals and
                identifying the specific challenges you're facing. Then, we
                design and build scalable systems tailored to your
                needs, balancing automation, analytics, and user-friendly design. We
                work quickly, test carefully, and provide ongoing support to
                make sure your solution continues to deliver value over time.
              </p>
              <button
                onClick={() => navigateTo("/contact-us")}
                data-aos="fade-right"
                className="primary-btn w-fit"
              >
                Get Started
              </button>
            </div>
          </section>

          {/* Vision Section */}
          <section className="my-16">
            <h2
              className="text-[32px] font-bold text-primary mb-6"
              data-aos="fade-up"
            >
              Focused on the Future
            </h2>
            <p className="desc" data-aos="fade-up">
              NeuroraLynx AI is focused on bringing practical AI solutions to
              industries that can benefit most. We're working on innovation
              across important sectors like healthcare, finance, energy, education,
              smart cities, and public infrastructure. We're also exploring new
              areas in robotics, security, and advanced digital systems,
              building AI that grows with your business and adapts to future
              challenges.
            </p>
          </section>

          {/* Final CTA */}
          <section>
            <h2
              className="text-[32px] font-bold text-primary mb-6"
              data-aos="fade-up"
            >
              Partner With Us
            </h2>
            <p className="desc" data-aos="fade-up">
              Every idea has the potential to make a real difference.
              At NeuroraLynx AI, we combine your vision with our technical
              expertise to create solutions that are both smart and
              practical. Let's work together to turn your ideas into real
              results.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
