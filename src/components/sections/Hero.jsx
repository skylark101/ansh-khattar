import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiTailwindcss,
  SiWordpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { PERSONAL_INFO, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <RadialGradientBackground variant="hero" />

      {/*    Content Container   */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/*    Left Column - Content   */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                Full Stack Developer
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                Focused on building scalable, production-ready web applications
                using React, Node.js, Java/Spring Boot, and Wordpress. I work
                across frontend, backend, and infrastructure to deliver reliable
                systems with strong performance and clean architecture.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white">
                  Get In Touch
                </div>
              </button>
            </FadeIn>
            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div
                    key={index}
                    className="text-left border-r border-white/50 pr-10 last:border-r-0"
                  >
                    <div className="text-2xl font-normal text-primary mb-[8px] font-mono">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          {/*   Rgiht Column - Developer Image  */}
          <FadeIn delay={200}>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-4/5 max-w-[500px] ml-auto group">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-[-2px] bg-linear-to-r from-primary/20 via-primary/10 to-primary animation-spin-slow rounded-2xl"></div>
                </div>
                {/*     Image Container     */}
                <div className="relative rounded-2xl overflow-hidden m-[3px] h-[calc(100%-2px)]">
                  <img
                    src="/ansh-potrait.jpeg"
                    alt="Developer having fun"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/*     Technology Logos    */}
            <div className="relative md:absolute md:bottom-6 md:right-6 z-20 mt-6 md:mt-0">
              <FadeIn delay={500}>
                <div className="flex items-center gap-4 bg-white/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiReact className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiNodedotjs className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <FaJava className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiSpringboot className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiTailwindcss className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiMongodb className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiPostgresql className="w-full h-full text-white" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <SiWordpress className="w-full h-full text-white" />
                  </div>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
          <div></div>
        </div>
      </div>

      {/*   Scroll Indicator    */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
