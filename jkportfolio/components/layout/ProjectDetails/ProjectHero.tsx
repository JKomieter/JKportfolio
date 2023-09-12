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

const ProjectHero = ({project}: {project: Record<string, string>}) => {
    return (
        <div className="w-full lg:px-32 md:px-16 sm:px-8 px-4 flex flex-col py-32 
        items-center justify-center gap-6 sm:py-10 bg-center bg-fixed bg-no-repeat bg-cover h-[70vh]">
            <h1 className={`lg:text-5xl md:text-4xl text-3xl uppercase font-bold
             text-white text-center ${raleway.className}`}>
                {project.title}
            </h1>
            <p className={`lg:text-xl md:text-lg text-base text-white text-center ${montserrat.className}`}>
                {project.short_description}
            </p>
        </div>
    )
}


export default ProjectHero;