import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../../util/constant";
import { useTheme } from "../../Context/ThemeContext";
import { Send, User, Mail, Phone, MessageSquare, FileText, ArrowRight } from "lucide-react";

const LeadForm = () => {
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
      name: companyDetails.name,
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
    <div id="contact" className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-darkbackground" data-aos="fade-up">
            Ready to Get Started?
          </h2>
          <p className="max-w-2xl mx-auto dark:text-gray-300 text-gray-700" data-aos="fade-up" data-aos-delay="100">
            Fill out the form below and our team will get back to you within 24 hours to discuss your project.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Contact Information */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <div className={`h-full ${isDarkMode ? 'bg-[#0d1525] border-[#1c2130]' : 'bg-white border-gray-200'} border rounded-2xl p-8 shadow-lg`}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Contact Information</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Reach out to us directly or fill out the form to schedule a consultation.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Email</h4>
                    <a href={`mailto:${companyDetails.email}`} className="text-primary hover:underline">
                      {companyDetails.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Phone</h4>
                    <a href={`tel:${companyDetails.phone}`} className="text-primary hover:underline">
                      {companyDetails.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-primary w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Office</h4>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {companyDetails.address}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className={`font-medium mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>Follow Us</h4>
                <div className="flex space-x-4">
                  {companyDetails.socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href || "#"} 
                      className={`${isDarkMode ? 'bg-[#1c2130] hover:bg-primary/20' : 'bg-gray-100 hover:bg-primary/10'} p-3 rounded-full transition-colors`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <link.icon className="w-5 h-5 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className={`${isDarkMode ? 'bg-[#0d1525] border-[#1c2130]' : 'bg-white border-gray-200'} border rounded-2xl p-8 shadow-lg`}>
              <h3 className="text-2xl font-bold mb-6 text-primary">Schedule a Consultation</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      {...register("fullName", { required: "Full Name is required" })}
                      className={`p-3 rounded-xl ${
                        isDarkMode 
                          ? 'bg-[#1c2130] border-[#2a2f42] text-white' 
                          : 'bg-gray-50 border-gray-300 text-gray-900'
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
                      className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`p-3 rounded-xl ${
                        isDarkMode 
                          ? 'bg-[#1c2130] border-[#2a2f42] text-white' 
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="phoneNumber"
                      className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Phone
                    </label>
                    <input
                      id="phoneNumber"
                      {...register("phoneNumber", { required: "Phone is required" })}
                      type="text"
                      placeholder="+91 1234567890"
                      className={`p-3 rounded-xl ${
                        isDarkMode 
                          ? 'bg-[#1c2130] border-[#2a2f42] text-white' 
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Subject
                    </label>
                    <input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      type="text"
                      placeholder="Project Inquiry"
                      className={`p-3 rounded-xl ${
                        isDarkMode 
                          ? 'bg-[#1c2130] border-[#2a2f42] text-white' 
                          : 'bg-gray-50 border-gray-300 text-gray-900'
                      } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={`text-sm font-medium flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project or needs..."
                    rows="5"
                    {...register("message", { required: "Message is required" })}
                    className={`p-3 rounded-xl ${
                      isDarkMode 
                        ? 'bg-[#1c2130] border-[#2a2f42] text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={spinner}
                    className={`w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 ${
                      spinner ? "opacity-80 cursor-not-allowed" : ""
                    }`}
                  >
                    {spinner ? (
                      <div className="flex items-center">
                        <svg
                          className="spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Schedule Consultation</span>
                        <ArrowRight className="w-5 h-5 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
