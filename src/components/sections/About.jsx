import { Download, Code2, Sparkles } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiWordpress,
  SiDocker,
  SiMongodb,
  SiPython,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { PERSONAL_INFO, ABOUT_STATS } from "../../utils/constants";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";

const About = () => {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "Java", icon: FaJava, color: "#E76F00" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "SQL", icon: TbSql, color: "#336791" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "WordPress", icon: SiWordpress, color: "#21759B" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
  ];

  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      <RadialGradientBackground variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*     Main Grid   */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/*     Left Column - Content   */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <FadeIn delay={60}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-primary/30 bg-primary/15 rounded-full w-fit">
                  <Code2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary font-medium">
                    Full Stack Developer
                  </span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h2 className="text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Creating Digital Solutions That Matter
                </h2>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col gap-4">
                  {PERSONAL_INFO.bio.map((paragaraph, index) => (
                    <p
                      key={index}
                      className="text-base text-white/70 leading-relaxed"
                    >
                      {paragaraph}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={300}>
              <div className="grid grid-cols-3 gap-8 ml-3 lg:ml-0">
                {ABOUT_STATS.map((stat, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-full"></div>
                    <div className="text-3xl font-normal text-white mb-2 font-mono">
                      {stat.value}
                    </div>
                    <p className="text-base text-white/60 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={() => window.open(PERSONAL_INFO.resume, "_blank")}
                  className="inline-flex items-center gap-3 bg-white hover:bg-white/80 text-black rounded-full px-8 py-4 text-base font-medium transition-all duration-300 w-fit group"
                >
                  <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download Resume
                </button>
              </div>
            </FadeIn>
          </div>

          {/*     Right Column - Info Grid   */}

          <FadeIn delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opactity-75 tranisition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/15 rounded-xl">
                      <Code2 className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Expertise
                      </h3>
                      <p className="text-base text-white/70 leading-relaxed">
                        I focus on clarity, scalability, and execution. Turning
                        ideas into dependable digital products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opactity-75 tranisition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="p-3 bg-primary/15 rounded-xl w-fit mb-4">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Clean Code
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    Writing clean, maintainable code that’s easy to scale and
                    clearly documented.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opactity-75 tranisition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="p-3 bg-primary/15 rounded-xl w-fit mb-4">
                    <Download className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Performance
                  </h3>
                  <p className="text-base text-white/70 leading-relaxed">
                    I build solutions with efficiency in mind, keeping experiences fast
                    and dependable.
                  </p>
                </div>
              </div>

              <div className="col-span-2 relative group">
                <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opactity-75 tranisition-opacity duration-300"></div>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                  <div className="grid grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        100%
                      </div>
                      <div className="text-base text-white/60">
                        Client Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        24/7
                      </div>
                      <div className="text-base text-white/60">
                        Support Available
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        Fast
                      </div>
                      <div className="text-base text-white/60">
                        Delivery Time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/*   Skills Grid Section   */}
        <FadeIn delay={500}>
          <div className="flex flex-col items-center gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-normal text-white mb-2">
                Tech Stack & Expertise
              </h3>
              <p className="text-base text-white/60">
                Technologies I work with to bring your idea to reality
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-4xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 hover:bg-white/10
             border border-white/10 hover:border-primary/50
             rounded-2xl p-6
             flex flex-col items-center justify-center gap-3
             transition-all duration-300 hover:scale-105"
                >
                  {/* Icon Wrapper */}
                  <div className="flex items-center justify-center h-10 w-10">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Skill Name */}
                  <div className="text-base text-white/80 font-medium text-center leading-tight min-h-[2.5rem]">
                    {skill.name}
                  </div>

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 bg-linear-to-br
                  from-primary/0 to-primary/0
                  group-hover:from-primary/10 group-hover:to-primary/10
                  rounded-2xl transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;
