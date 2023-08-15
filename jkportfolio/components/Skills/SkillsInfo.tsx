import { skills } from "./SkillList";
import SkillItem from "./SkillItem";
import { Bebas_Neue } from "next/font/google";


const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
});

const SkillsInfo = () => {
    return (
      <div className="w-full h-full flex flex-col gap-4 items-start">
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