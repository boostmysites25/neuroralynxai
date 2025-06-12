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
              Build Smarter with NeuroraLynx AI
            </h1>
            <p className="desc" data-aos="fade-up">
              We help businesses streamline operations and unlock new
              opportunities using custom AI strategies and intelligent
              automation—all from a single, powerful platform.
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
                Our collaboration starts by understanding your vision and
                pinpointing the exact challenges you're facing. From there, we
                design and build scalable AI-driven systems tailored to your
                needs—balancing automation, analytics, and intuitive UX. We
                iterate quickly, test thoroughly, and provide ongoing support to
                ensure your solution keeps delivering long-term value.
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
              NeuroraLynx AI is driven by a mission to bring responsible AI to
              industries that need it most. Our roadmap includes innovation
              across key sectors such as healthcare, finance, energy, education,
              smart cities, and public infrastructure. We’re also exploring new
              frontiers in robotics, defense, and advanced digital ecosystems,
              building AI that grows with your business and adapts to tomorrow’s
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
              Every idea has the potential to disrupt, inspire, and transform.
              At NeuroraLynx AI, we combine your vision with our deep technical
              expertise to create solutions that are not just smart—but
              strategic. Let’s collaborate to turn innovation into measurable
              impact.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
