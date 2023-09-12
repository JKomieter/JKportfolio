import Image from "next/image";



const ProjectMedia = ({ project }: {project: Record<string, string>}) => {
    return (
        <div className="w-full bg-[#222] py-20 lg:px-32 md:px-16 sm:px-8 px-4 flex md:flex-row flex-col gap-5 justify-between">
            <div className="w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    layout="responsive"
                    className="rounded-lg"
                />
            </div>
            <div className="w-full">
                <video
                    src={project.video}
                    className="rounded-lg"
                    controls={false}
                    loop
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
};

export default ProjectMedia;