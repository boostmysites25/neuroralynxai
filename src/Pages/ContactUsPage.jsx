import { useForm } from "react-hook-form";
import MapComponent from "../Components/MapComponent";
import { useState } from "react";
import { companyDetails } from "../util/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  Clock,
  Shield,
  Users,
} from "lucide-react";
import RoundedHeader from "../Components/RoundedHeader";
import { useTheme } from "../Context/ThemeContext";

const ContactUsPage = () => {
  const [spinner, setSpinner] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);

    var emailBody = "Name: " + values.fullName + "\n\n";
    emailBody += "Email: " + values.email + "\n\n";
    emailBody += "Phone: " + values.phoneNumber + "\n\n";
    emailBody += "Subject: " + values.subject + "\n\n";
    emailBody += "Message:\n" + values.message;

    var payload = {
      to: companyDetails.email,
      name: companyDetails?.name || "GodversAi",
      subject: values.subject,
      body: emailBody,
    };

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="min-h-screen dark:bg-darkblack bg-gray-50 dark:text-white text-darkbackground">
      {/* Hero Section with Background Gradient */}
      <div className="relative pt-[7rem] pb-16 overflow-hidden">
        <div
          className={`absolute inset-0 ${
            isDarkMode ? "bg-background" : "bg-primary/5"
          } opacity-30 z-0`}
        ></div>
        <div className="relative z-10 wrapper">
          <div className="flex flex-col items-center text-center mb-12">
            <RoundedHeader title={"Contact Us"} />
            <h1 className="main-title mt-4" data-aos="fade-up">
              Ready to Ignite Your Brand?
            </h1>
            <p
              className="desc max-w-2xl mx-auto mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Have a project in mind or want to explore how we can help your
              business? Reach out to our team and let's start a conversation
              about your digital future.
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
            className={`${
              isDarkMode
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
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mt-2`}
            >
              Available 9:00 AM - 6:00 PM
            </p>
          </div>

          <div
            className={`${
              isDarkMode
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
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mt-2`}
            >
              We respond within 24 hours
            </p>
          </div>

          <div
            className={`${
              isDarkMode
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
              className={`${
                isDarkMode
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

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      data-aos="fade-right"
                      {...register("fullName", {
                        required: "Full Name is required",
                      })}
                      type="text"
                      placeholder="John Doe"
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-[#1c2130] border-[#2a2f42] text-white"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      data-aos="fade-left"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="john@example.com"
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-[#1c2130] border-[#2a2f42] text-white"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phoneNumber"
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      data-aos="fade-right"
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                      type="text"
                      placeholder="1234567890"
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-[#1c2130] border-[#2a2f42] text-white"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      data-aos="fade-left"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      type="text"
                      placeholder="Project Inquiry"
                      className={`p-3 rounded-lg ${
                        isDarkMode
                          ? "bg-[#1c2130] border-[#2a2f42] text-white"
                          : "bg-gray-50 border-gray-300 text-gray-900"
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    data-aos="fade-up"
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Tell us about your project or inquiry..."
                    rows="5"
                    className={`p-3 rounded-lg ${
                      isDarkMode
                        ? "bg-[#1c2130] border-[#2a2f42] text-white"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`w-full ${
                    spinner && `opacity-25 cursor-not-allowed`
                  } bg-gradient-animate bg-primary hover:bg-sky-700 text-white py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium`}
                  disabled={spinner}
                >
                  {spinner ? (
                    <>
                      <Clock className="w-5 h-5 spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
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
                className={`flex-grow rounded-lg overflow-hidden ${
                  isDarkMode ? "border-[#1c2130]" : "border-gray-200"
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p
              className="desc max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Whether you're looking to build a new application, redesign your
              website, or implement AI solutions, our team is ready to bring
              your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              className={`p-6 rounded-lg ${
                isDarkMode ? "" : "bg-white shadow-md"
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
              className={`p-6 rounded-lg ${
                isDarkMode ? "" : "bg-white shadow-md"
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
              className={`p-6 rounded-lg ${
                isDarkMode ? "" : "bg-white shadow-md"
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
