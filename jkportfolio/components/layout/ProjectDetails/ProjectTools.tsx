import { Raleway } from "next/font/google";


const raleway = Raleway({
    subsets: ["latin"],
    weight: "900",
});


const ProjectTools = ({ project }: {project: Record<string, any>}) => {
    return (
        <div className="w-full mt-10 flex flex-col gap-5">
            <h3 className={`lg:text-4xl md:text-3xl ${raleway.className} sm:text-2xl text-xl font-semibold text-neutral-100`}>
                Tools Used
            </h3>
            <div className="flex flex-row gap-3 w-full items-center flex-wrap">
                {
                    project.tools.map((tool: string, index: number) => (
                        <span key={index} className="text-neutral-100 text-lg font-semibold rounded-3xl px-5 py-2 bg-orange-700">
                            {tool}
                        </span>
                    ))
                }
            </div>
        </div>
    )
};

export default ProjectTools;