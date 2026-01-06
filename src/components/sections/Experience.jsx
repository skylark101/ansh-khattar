import React from "react";
import { experiences } from "../../data/experience";
import FadeIn from "../animations/FadeIn";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-20 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-lg text-primary uppercase tracking-wider">
                Experience
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl text-white mb-4">
              Career Timeline
            </h2>

            <p className="text-white/60 max-w-2xl mx-auto">
              A horizontal snapshot of my professional journey so far.
            </p>
          </div>
        </FadeIn>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Fade edges to hint horizontal scroll */}

          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {experiences.map((item, index) => (
              <FadeIn key={item.id} delay={100 + index * 100}>
                {item.type === "milestone" ? (
                  // 🎓 Milestone Card
                  <div className="snap-start min-w-[280px] flex-shrink-0 bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/20 border border-primary/40">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl text-white font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-primary mt-1">{item.subtitle}</p>
                    <span className="text-sm text-white/50 mt-2 block">
                      {item.period}
                    </span>
                  </div>
                ) : (
                  // 💼 Experience Card
                  <div className="snap-start min-w-[320px] flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg text-white font-semibold mb-2">
                        {item.role}
                      </h3>

                      {item.isCurrent && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400">
                          Present
                        </span>
                      )}
                    </div>

                    <p className="text-primary font-medium mb-2">
                      {item.company}
                    </p>
                    <span className="text-sm text-white/50 block mb-4">
                      {item.period}
                    </span>

                    <ul className="list-disc list-inside space-y-2 text-white/70 text-sm">
                      {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
            <span>Swipe</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
