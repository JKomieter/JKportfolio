"use client";
import SkillsInfo from "./SkillsInfo";
import GetToKnowMe from './GetToKnowMe';
import ParticlesBg from "../../../particles/ParticlesBg";



const Skills = () => {

    return (
      <div
        className="py-10 lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col bg-cover bg-[#222222]
        lg:flex-row items-start justify-between gap-10 bg-fixed bg-center bg-no-repeat"
      >
        <GetToKnowMe />
        <SkillsInfo />
      </div>
    );
}
export default Skills;