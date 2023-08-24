"use client";
import { skills } from "./SkillList";
import SkillItem from "./SkillItem";
import { Bebas_Neue } from "next/font/google";
import { useInView } from "react-intersection-observer";


const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
});

const SkillsInfo = () => {

    const { ref: divRef, inView: divIsVisible } = useInView();

    return (
      <div 
        ref={divRef}
      className={`w-full h-full flex flex-col gap-4 items-start
        transition-all duration-1000 ${divIsVisible ? "opacity-1" : "opacity-0 translate-x-48"}
      `}>
        <h3
          className={`uppercase text-orange-700 lg:text-4xl md:text-3xl 
          sm:text-2xl text-xl text-left font-semibold w-full ${bebasNeue.className}`}
        >
          My Skills
        </h3>
        <div className="flex flex-row items-start w-full">
          <div className="rounded-sm p-3 flex flex-col items-start gap-3 h-full basis-1/2 w-full">
            {skills.slice(0, 4).map((skill) => (
              <SkillItem key={skill.name} name={skill.name} Icon={skill.icon} />
            ))}
          </div>
          <div className="rounded-sm p-3 flex flex-col items-start gap-3 h-full basis-1/2 w-full">
            {skills.slice(5).map((skill) => (
              <SkillItem key={skill.name} name={skill.name} Icon={skill.icon} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default SkillsInfo;