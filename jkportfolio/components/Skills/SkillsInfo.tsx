import { Rubik } from "next/font/google";
import { skills } from "./SkillList";
import SkillItem from "./SkillItem";

const rubik = Rubik({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const SkillsInfo = () => {
    return (
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        <h3
          className={`uppercase text-orange-700 lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold ${rubik.className}`}
        >
          Skills
        </h3>
        <div className="rounded-sm  p-3 flex flex-wrap items-center gap-5">
          {
            skills.map((skill) => (
              <SkillItem
                key={skill.name}
                name={skill.name}
                Icon={skill.icon}
              />
            ))
          }
        </div>
      </div>
    );
}

export default SkillsInfo;