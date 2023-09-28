import Image from "next/image";



const ProjectMedia = ({ project }: {project: Record<string, any>}) => {
    return (
        <div className="w-full bg-[#222] py-20 lg:px-32 md:px-16 sm:px-8 px-4 flex lg:flex-row flex-col gap-5 justify-between">
            {/* <div className="w-full flex flex-col gap-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    layout="responsive"
                    className="rounded-lg"
                />
                <span className="px-5 py-3 bg-orange-700 text-neutral-100 rounded-md text-center font-semibold">
                    Project Image
                </span>
            </div> */}
            <div className="w-full flex flex-col gap-4">
                <video
                    src={project.video}
                    className="rounded-lg w-full h-full"
                    controls={false}
                    loop
                    width={400}
                    height={400}
                    autoPlay
                />
                <span className="px-5 py-3 bg-orange-700 text-neutral-100 rounded-md text-center font-semibold">
                    Project Demo
                </span>
            </div>
        </div>
    )
};

export default ProjectMedia;