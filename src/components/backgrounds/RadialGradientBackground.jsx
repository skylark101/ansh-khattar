import React from "react";

const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(175,105,255,0.85)", stop: "0%" },
          { color: "rgba(155,89,255,0.75)", stop: "25%" },
          { color: "rgba(130,70,240,0.6)", stop: "45%" },
          { color: "rgba(110,55,220,0.45)", stop: "65%" },
          { color: "rgba(155,89,255,0.75)", stop: "85%" },
          { color: "rgba(155,89,255,0.75)", stop: "100%" },
        ],
        blur: "160px",
        opacity: 0.5,
      },

      {
        position: "top-1 left-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(175,105,255,0.25)", stop: "100%" },
          { color: "rgba(175,105,255,0.45)", stop: "100%" },
          { color: "rgba(175,105,255,0.5)", stop: "100%" },
          { color: "rgba(175,105,255,0.45)", stop: "100%" },
          { color: "rgba(175,105,255,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "bottom-1 right-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(175,105,255,0.25)", stop: "100%" },
          { color: "rgba(175,105,255,0.45)", stop: "100%" },
          { color: "rgba(175,105,255,0.5)", stop: "100%" },
          { color: "rgba(175,105,255,0.45)", stop: "100%" },
          { color: "rgba(175,105,255,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],

    about: [
      {
        position: "bottom-0 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: [
          { color: "rgba(175,105,255,0.25)", stop: "100%" },
          { color: "rgba(175,105,255,0.45)", stop: "100%" },
          { color: "rgba(175,105,255,0.5)", stop: "100%" },
          { color: "rgba(175,105,255,0.45)", stop: "100%" },
          { color: "rgba(175,105,255,0.25)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
  };

  const activeGradients = variant === "custom" ? gradients : variants[variant];
  const generateGradient = (colors) => {
    const colorStops = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");
    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`;
  };
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        ></div>
      ))}
    </div>
  );
};

export default RadialGradientBackground;
