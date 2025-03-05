import Particles from "@tsparticles/react";
import { ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
  // Determine if it's day or night
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 6 && currentHour < 18;

  const particlesOptions: ISourceOptions = {
    background: {
      color: isDaytime ? "#87CEEB" : "#1a1a2e", // Light blue for day, Dark blue for night
    },
    particles: {
      number: { value: 50 },
      move: { enable: true, speed: 1 },
      shape: { type: "circle" },
      size: { value: 3 },
      opacity: { value: 0.7 },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 100 },
        push: { quantity: 4 },
      },
    },
  };

  return <Particles options={particlesOptions} />;
};

export default ParticlesBackground;
