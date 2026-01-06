import React from "react";
import { services } from "../../data/services";
import { Icons } from "../../utils/icons";

import FadeIn from "../animations/FadeIn";
import { Wrench } from "lucide-react";
const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
        linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Wrench className="w-4 h-4 text-primary" />
              <span className="text-lg text-primary font-medium uppercase tracking-wider">
                What I Offer
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-2xl mx-auto">
              Built with Intention
            </h2>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-4xl mx-auto">
              Designed to perform in the real world
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Comprehensive solutions to transform your ideas into exceptional
              digital experiences.
            </p>
          </div>
        </FadeIn>

        {/* Row 1 – Featured Service */}
        <div className="grid grid-cols-1 mb-12">
          {services.slice(0, 1).map((service, index) => {
            const IconComponent = Icons?.[service.icon] ?? Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-[#af69ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/70 max-w-5xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Row 2 – 3 Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.slice(1, 4).map((service, index) => {
            const IconComponent = Icons?.[service.icon] ?? Icons.Code2;
            return (
              <FadeIn key={service.id} delay={200 + index * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg text-white mb-2 group-hover:text-[#af69ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Row 3 – 4 Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(4, 8).map((service, index) => {
            const IconComponent = Icons?.[service.icon] ?? Icons.Code2;
            return (
              <FadeIn key={service.id} delay={500 + index * 100}>
                <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-all duration-300 h-full">
                  <div className="mb-3">
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-4 h-4 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-base text-white mb-1 group-hover:text-[#af69ff] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
