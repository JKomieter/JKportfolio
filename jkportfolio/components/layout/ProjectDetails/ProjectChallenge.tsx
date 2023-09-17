import { Raleway } from "next/font/google";
import { Montserrat } from "next/font/google";

const raleway = Raleway({
    subsets: ["latin"],
    weight: "900",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

const ProjectChallenge = ({ project }: {project: Record<string, any>}) => {
    return (
        <div className="w-full mt-10 flex flex-col gap-5">
            <h3 className={`lg:text-4xl md:text-3xl ${raleway.className} sm:text-2xl text-xl font-semibold text-red-500`}>
                Challenges
            </h3>
            <p style={{ lineHeight: "1.7em" }} className={`text-neutral-100 md:text-lg sm:text-base text-sm ${montserrat.className}`}>
                {project.challenge}
            </p>
        </div>
    )
};

export default ProjectChallenge;