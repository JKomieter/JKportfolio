import { CampusCommune } from "@/components/svg";
import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";
import { BsArrowBarDown } from "react-icons/bs";


const raleway = Raleway({
    subsets: ["latin"],
    weight: "900",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

const ProjectHero = ({project}: {project: Record<string, string>}) => {
    return (
        <div className="w-full lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col py-32 z-[999] bg-neutral-500
        items-center justify-center gap-6 sm:py-10 bg-center bg-fixed bg-no-repeat bg-cover h-[90vh]">
            <h1 className={`lg:text-5xl md:text-4xl text-3xl uppercase font-bold
             text-neutral-100 text-center ${raleway.className}`}>
                {project.title}
            </h1>
            <p className={`lg:text-xl md:text-lg text-base text-neutral-100 text-center ${montserrat.className}`}>
                {project.short_description}
            </p>
            <CampusCommune className="w-72 h-72 text-neutral-100" />
        </div>
    )
}


export default ProjectHero;