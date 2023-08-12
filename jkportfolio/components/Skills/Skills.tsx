import Image from 'next/image'
import { HardCoding } from "../svg";
import SkillsInfo from "./SkillsInfo";

const Skills = () => {
    return (
        <div className="py-10 lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col lg:flex-row items-start justify-between gap-10 bg-neutral-200">
            <HardCoding className="lg:text-8xl md:text-4xl sm:text-3xl text-2xl font-semibold w-full h-full" />
            {/* <Image
                src="/images/Hand coding.gif"
                alt="Picture of the author"
                width={500}
                height={500}
                unoptimized={true}
            /> */}
            <SkillsInfo />
        </div>
    )
}
export default Skills;