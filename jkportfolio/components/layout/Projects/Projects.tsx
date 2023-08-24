"use client";
import { Bebas_Neue } from "next/font/google";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Container, Engine } from "tsparticles-engine";
import ProjectList from "./ProjectList";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <>
      <Particles
        className="w-full absolute -z-10 h-full"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          background: {
            image: "linear-gradient(19deg, #333333 0%, #666666 100%)",
          },
          particles: {
            number: { value: 10, density: { enable: true, value_area: 600 } },
            color: { value: "#ffffff" },
            shape: {
              type: "square",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
            },
            opacity: {
              value: 0.25,
              random: true,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 29,
              random: true,
              anim: { enable: false, speed: 2, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: false,
              distance: 300,
              color: "#ffffff",
              opacity: 0,
              width: 0,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false, mode: "repulse" },
              onclick: { enable: false, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 800, line_linked: { opacity: 1 } },
              bubble: {
                distance: 790,
                size: 79,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: { distance: 400, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        }}
      />
    <div className="w-full h-full lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col gap-10 items-center">
        <div className="w-full flex flex-col gap-4 items-center justify-center py-10">
            <h2
            style={{borderBottomWidth: "4px"}}
            className={`${bebasNeue.className} lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-neutral-200 p-3 border-b-orange-700`}
            >
                Projects
            </h2>
        </div>
        <ProjectList />
    </div>
    </>
  );
};

export default Projects;

