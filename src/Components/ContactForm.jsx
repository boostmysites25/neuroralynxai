import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Clock, Send } from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";

const ContactForm = () => {
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
            name: companyDetails?.name,
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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="fullName"
                        className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
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
                        className={`p-3 rounded-lg ${isDarkMode
                                ? "bg-[#1c2130] border-[#2a2f42] text-white"
                                : "bg-gray-50 border-gray-300 text-gray-900"
                            } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.fullName && (
                        <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
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
                        className={`p-3 rounded-lg ${isDarkMode
                                ? "bg-[#1c2130] border-[#2a2f42] text-white"
                                : "bg-gray-50 border-gray-300 text-gray-900"
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
                        className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
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
                        className={`p-3 rounded-lg ${isDarkMode
                                ? "bg-[#1c2130] border-[#2a2f42] text-white"
                                : "bg-gray-50 border-gray-300 text-gray-900"
                            } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none`}
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="subject"
                        className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
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
                        className={`p-3 rounded-lg ${isDarkMode
                                ? "bg-[#1c2130] border-[#2a2f42] text-white"
                                : "bg-gray-50 border-gray-300 text-gray-900"
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
                    className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"
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
                    className={`p-3 rounded-lg ${isDarkMode
                            ? "bg-[#1c2130] border-[#2a2f42] text-white"
                            : "bg-gray-50 border-gray-300 text-gray-900"
                        } border w-full focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none`}
                ></textarea>
                {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
            </div>

            <button
                type="submit"
                className={`w-full ${spinner && `opacity-25 cursor-not-allowed`
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
    );
};

export default ContactForm;
