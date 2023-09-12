"use client";
import { FC } from "react";
import Image from "next/image";
import { Montserrat } from 'next/font/google';
import { Bebas_Neue } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

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

    const { ref: imageRef, inView: imageRefIsVisible } = useInView()
    const { ref: textRef, inView: textRefIsVisible } = useInView()
    const router = useRouter();
    
    return (
        <div
            className="w-full flex md:flex-row flex-col gap-8 items-center justify-between">
            <div 
            ref={imageRef}
            className={`w-full h-full rounded-md overflow-hidden transition-all duration-1000 ease-in-out transform
            ${imageRefIsVisible ? "opacity-100" : "-translate-x-48 opacity-0"} shadow-md`}>
                <Image src={image} alt={name} width={500} height={400} className='w-full' />
            </div>
            <div 
            ref={textRef}
                className={`flex flex-col w-full item-start gap-8 transition-all duration-1000 ease-in-out transform
            ${textRefIsVisible ? "opacity-100" : "translate-x-48 opacity-0"}}`}>
                <h1 className={`md:text-3xl sm:text-2xl text-xl font-bold text-gray-300 ${bebasNeue.className}`}>{name}</h1>
                <p
                    className={`${montserrat.className} text-neutral-200 font-semibold md:text-base sm:text-sm text-xs }`}
                >
                    {description}
                </p>
                <div className="flex flex-row items-center gap-5">
                    <span
                    onClick={() => router.push(link)}
                        className={`px-4 py-3 rounded-md text-lg cursor-pointer bg-orange-700 text-neutral-100 ${bebasNeue.className}
            hover:bg-orange-900 transition-all duration-500 ease-in-out shadow-2xl`}
                    >
                        View Project
                    </span>
                </div>
            </div>
        </div>
    )
};

export default ProjectListItem;