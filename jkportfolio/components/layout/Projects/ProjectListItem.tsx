import { FC } from "react";
import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { Bebas_Neue } from "next/font/google";


const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400"
});

const bebasNeue = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
});

interface ProjectListItemProps {
    name: string;
    description: string;
    image: string;
    link: string;
}


const ProjectListItem: FC<ProjectListItemProps> = ({
    name,
    description,
    image,
    link,
}) => {
    return (
        <div
            className="w-full flex md:flex-row flex-col gap-8 items-center justify-between">
            <div className="w-full h-full rounded-md overflow-hidden">
                <Image src={image} alt={name} width={500} height={400} className='w-full' />
            </div>
            <div className="flex flex-col w-full item-start gap-8">
                <h1 className={`md:text-3xl sm:text-2xl text-xl font-bold text-neutral-200 ${bebasNeue.className}`}>{name}</h1>
                <p
                    className={`${montserrat.className} text-neutral-200 font-semibold md:text-base sm:text-sm text-xs }`}
                >
                    {description}
                </p>
                <div className="flex flex-row items-center gap-5">
                    <span
                        className={`px-4 py-3 rounded-md text-lg cursor-pointer bg-orange-700 text-neutral-100 ${bebasNeue.className}
            hover:bg-orange-900 transition-all duration-500 ease-in-out shadow-2xl`}
                    >
                        View Project
                    </span>
                    <span
                        className={`px-4 py-2 rounded-md text-lg cursor-pointer border-4 border-neutral-orange-700 text-neutral-100 ${bebasNeue.className}
             transition-all duration-500 ease-in-out shadow-2xl hover:border-orange-700`}
                    >
                        Live Demo
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ProjectListItem;