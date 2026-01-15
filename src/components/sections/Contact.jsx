import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: "error",
        message: "Lets not leave anything to imagination!",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Cmon partner, give me a valid email!",
      });
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      //  TRACK ONLY ON SUCCESS
      if (window.umami) {
        window.umami.track("Contact Submit", {
          method: "emailjs",
        });
      }
      setStatus({
        type: "success",
        message: "Wow, that was smooth. Now let me get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Try again in a bit.",
      });
    }
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
  };
  return (
    <section className="relative py-20 bg-black overflow-hidden" id="contact">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-lg text-primary font-medium uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-4xl mx-auto">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Have an idea? Let's discuss how we can bring it to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn delay={100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    placeholder="How shall I address you ?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    placeholder="Please enter a valid one :)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/80 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    type="message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none px-3 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300"
                    placeholder="Well, what shall we discuss then ?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-linear-to-r from-primary/10 to-primary text-white font-medium rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send it my way</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {status.message && (
                  <div
                    className={`p-4 rounded-xl ${
                      status.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/*   Contact Info    */}
          <FadeIn delay={200}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-white/60 leading-relaxed">
                  I'm always open to new projects, creative ideas, and
                  collaborations. If you're a fellow developer and want to
                  collaborate or need a hand with something, feel free to reach
                  out.
                </p>
              </div>

              <div className="space-y-4">
                <div className="geoup relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 tranistion-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-white/60 mb-1">Email</p>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-white hover:text-[#af69ff] transition-colors duration-300 font-medium"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>

                <div className="geoup relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 tranistion-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-linear-to-br from-primary/20 to-primary/20 border border-primary/30 rounded-xl">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base text-white/60 mb-1">Location</p>
                      <p className="text-white font-medium">
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                  </div>
                  <div />
                </div>
              </div>

              <div>
                <p className="text-lg text-white/60 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {Object.entries(SOCIAL_LINKS)
                    .slice(0, 3)
                    .map(([platform, url]) => {
                      const Icon = socialIcons[platform];

                      return Icon ? (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 group"
                        >
                          <Icon className="w-6 h-6 text-white/60 group-hover:text-primary transition-colors" />
                        </a>
                      ) : null;
                    })}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
