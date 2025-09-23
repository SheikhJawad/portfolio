"use client";

import { useState } from "react";
import { InView } from "react-intersection-observer";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });


    const data = await res.json();
    console.log(" API Response:", data); 

    if (data.success) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("error");
    }
  } catch (err) {
    console.error(" Request error:", err);
    setStatus("error");
  }
};


  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hafizjawad858@gmail.com",
      href: "mailto:hafizjawad858@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+923094172130",
      href: "tel:+923094172130",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "https://www.google.com/maps/place/Lahore,+Pakistan",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Let&apos;s Work Together
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Ready to bring your ideas to life? Let&apos;s discuss your next
                  project and create something amazing together.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-2xl blur-xl" />
                  <form
                    onSubmit={handleSubmit}
                    className="relative space-y-6 bg-black/40 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl"
                  >
                    <div className="space-y-6">
                      {/* Name */}
                      <div className="group">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-white transition-colors"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email */}
                      <div className="group">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-white transition-colors"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      {/* Message */}
                      <div className="group">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-300 mb-3 group-focus-within:text-white transition-colors"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full group relative overflow-hidden px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      disabled={status === "sending"}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-center">
                        {status === "sending" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-3" />
                            Sending...
                          </>
                        ) : status === "success" ? (
                          <>
                            <CheckCircle className="mr-3 h-5 w-5 text-green-600" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </div>
                    </button>

                    {/* Feedback Messages */}
                    {status === "success" && (
                      <div className="text-center p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <p className="text-green-400 font-medium">
                          Thank you! I&apos;ll get back to you soon.
                        </p>
                      </div>
                    )}
                    {status === "error" && (
                      <div className="text-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <p className="text-red-400 font-medium">
                          Oops! Something went wrong. Please try again.
                        </p>
                      </div>
                    )}
                  </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white">
                      Get In Touch
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      I&apos;m always excited to discuss new opportunities and
                      projects. Whether you have a question or just want to say
                      hello, I&apos;d love to hear from you.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={info.label}
                        className={`flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ${
                          inView
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10"
                        }`}
                        style={{ transitionDelay: `${index * 100 + 600}ms` }}
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-medium">
                            {info.label}
                          </p>
                          <a
                            href={info.href}
                            target={
                              info.href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            className="text-white font-semibold hover:underline"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10">
                    <p className="text-gray-300 italic">
                      "Great things are done by a series of small things brought
                      together." - Vincent Van Gogh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
}

export default Contact;
