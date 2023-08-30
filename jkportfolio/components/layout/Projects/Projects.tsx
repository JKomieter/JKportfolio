import { Bebas_Neue } from "next/font/google";
import { useCallback } from "react";
import ProjectList from "./ProjectList";
import ParticlesBg from "./Particles";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const Projects = () => {

  return (
    <>
      <div className="w-full h-full lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col gap-10 items-center bg-[#333333]">
        <div className="w-full flex flex-col gap-4 items-center justify-center py-10">
          <h2
            style={{ borderBottomWidth: "4px" }}
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

