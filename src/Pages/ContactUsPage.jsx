import MapComponent from "../Components/MapComponent";
import { companyDetails } from "../util/constant";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import RoundedHeader from "../Components/RoundedHeader";
import { useTheme } from "../Context/ThemeContext";
import SEOHelmet from "../Components/SEOHelmet";
import ContactForm from "../Components/ContactForm";

const ContactUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="min-h-screen dark:bg-darkblack bg-gray-50 dark:text-white text-darkbackground">
      <SEOHelmet page="contact" />
      {/* Hero Section with Background Gradient */}
      <div className="relative pt-[7rem] pb-16 overflow-hidden">
        <div
          className={`absolute inset-0 ${isDarkMode ? "bg-background" : "bg-primary/5"
            } opacity-30 z-0`}
        ></div>
        <div className="relative z-10 wrapper">
          <div className="flex flex-col items-center text-center mb-12">
            <RoundedHeader title={"Contact Us"} />
            <h1 className="main-title mt-4" data-aos="fade-up">
              Ready to Get Started?
            </h1>
            <p
              className="desc max-w-2xl mx-auto mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have a project in mind or want to learn how we can help your
              business? Contact our team and let's start a conversation
              about your digital goals.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="wrapper -mt-8">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div
            className={`${isDarkMode
              ? "bg-[#0d1525] border-[#1c2130]"
              : "bg-white border-gray-200"
              } border p-6 rounded-lg shadow-lg service-card-hover`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <h3 className="small-heading">Call Us</h3>
            </div>
            <p className="desc">{companyDetails.phone}</p>
            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                } mt-2`}
            >
              Available 9:00 AM - 6:00 PM
            </p>
          </div>

          <div
            className={`${isDarkMode
              ? "bg-[#0d1525] border-[#1c2130]"
              : "bg-white border-gray-200"
              } border p-6 rounded-lg shadow-lg service-card-hover`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <Mail className="text-primary w-6 h-6" />
              </div>
              <h3 className="small-heading">Email Us</h3>
            </div>
            <p className="desc">{companyDetails.email}</p>
            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                } mt-2`}
            >
              We respond within 24 hours
            </p>
          </div>

          <div
            className={`${isDarkMode
              ? "bg-[#0d1525] border-[#1c2130]"
              : "bg-white border-gray-200"
              } border p-6 rounded-lg shadow-lg service-card-hover`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary/20 p-3 rounded-full mr-4">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <h3 className="small-heading">Visit Us</h3>
            </div>
            <p className="desc">{companyDetails.address}</p>
          </div>
        </div>
      </div>

      {/* Map and Contact Form Section */}
      <div className="wrapper mb-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div
              className={`${isDarkMode
                ? "bg-[#0d1525] border-[#1c2130]"
                : "bg-white border-gray-200"
                } border p-8 rounded-lg shadow-lg h-full`}
            >
              <h2
                className="section-heading mb-6 text-primary"
                data-aos="fade-right"
              >
                Schedule a Consultation
              </h2>
              <p
                className="desc mb-8"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <ContactForm />
            </div>
          </div>

          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="h-full flex flex-col">
              <h2
                className="section-heading mb-6 text-primary"
                data-aos="fade-left"
              >
                Our Location
              </h2>
              <p
                className="desc mb-8"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                Visit our office or connect with us online. We're always ready
                to discuss your next big idea.
              </p>

              <div
                className={`flex-grow rounded-lg overflow-hidden ${isDarkMode ? "border-[#1c2130]" : "border-gray-200"
                  } border shadow-lg`}
                style={{ minHeight: "400px" }}
              >
                <MapComponent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ or Additional Info Section */}
      <div className={`${isDarkMode ? "bg-[#0d1525]" : "bg-gray-100"} py-16`}>
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-4" data-aos="fade-up">
              Ready to Improve Your Digital Presence?
            </h2>
            <p
              className="desc max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Whether you want to build a new application, redesign your
              website, or implement AI solutions, our team is ready to bring
              your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              className={`p-6 rounded-lg ${isDarkMode ? "" : "bg-white shadow-md"
                }`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary w-8 h-8" />
              </div>
              <h3 className="small-heading mb-2">Quick Response</h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                We respond to all inquiries within 24 hours
              </p>
            </div>

            <div
              className={`p-6 rounded-lg ${isDarkMode ? "" : "bg-white shadow-md"
                }`}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary w-8 h-8" />
              </div>
              <h3 className="small-heading mb-2">Secure Communication</h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Your information is always protected
              </p>
            </div>

            <div
              className={`p-6 rounded-lg ${isDarkMode ? "" : "bg-white shadow-md"
                }`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary w-8 h-8" />
              </div>
              <h3 className="small-heading mb-2">Dedicated Team</h3>
              <p
                className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Expert consultants for your specific needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;