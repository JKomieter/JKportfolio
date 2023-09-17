import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";
import ProjectTools from "./ProjectTools";
import ProjectChallenge from "./ProjectChallenge";

const raleway = Raleway({
    subsets: ["latin"],
    weight: "900",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

const ProjectOverview = ({ project }: {project: Record<string, any>}) => {
    return (
        <div className="w-full py-20 lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col gap-5 bg-[#333]">
            <h3 className={`${raleway.className} font-semibold text-4xl text-neutral-100`}>
                Project Overview
            </h3>
            <p style={{lineHeight: "1.7em"}} className={`text-neutral-100 md:text-lg sm:text-base text-sm ${montserrat.className}`}>
                {project.overview}
            </p>
            <ProjectTools project={project} />
            <ProjectChallenge project={project} />
        </div>
    )
};

export default ProjectOverview;