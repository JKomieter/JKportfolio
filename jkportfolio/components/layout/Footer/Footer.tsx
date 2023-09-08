"use client";
import { Raleway } from "next/font/google";
import { PiCopyrightFill } from "react-icons/pi";
import { Montserrat } from "next/font/google";
import { TfiLinkedin } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/navigation";


const raleway = Raleway({
    subsets: ["latin"],
    weight: "900",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "400",
});

const Footer = () => {
    const router = useRouter()

    return (
        <div className="w-full h-[50vh] bg-black bottom-0 flex justify-center items-center flex-col lg:px-32 md:px-16 sm:px-8 px-4 ">
            <div className="w-full flex md:flex-row flex-col items-start md:justify-between py-6 gap-6">
                <div className="flex flex-col gap-4">
                    <h4 className={`${raleway.className} text-neutral-200 md:text-xl text-lg font-bold`}>
                        Joel Adjetey Komieter
                    </h4>
                    <p className={`md:text-sm text-xs text-neutral-200 ${montserrat.className} md:w-[70%] w-full`}>
                        {"Thank you for visiting my portfolio! I'm truly enthusiastic about coding and web development, and I'm always eager to take on new challenges. Let's collaborate on exciting projects and make the digital world even more innovative and user-friendly."}
                    </p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h4 className={`${raleway.className} text-neutral-200 md:text-xl text-lg font-bold`}>
                        Social
                    </h4>
                    <div className="flex flex-row gap-4 items-end">
                        <span
                            onClick={() => router.push("https://www.linkedin.com/in/joel-komieter-6a0b14250/")}
                            className="cursor-pointer"
                        >
                            <TfiLinkedin size={20} color="white" />
                        </span>
                       <span
                            onClick={() => router.push("https://www.instagram.com/eterkomi/")}
                        className="cursor-pointer"
                       >
                            <RiInstagramFill size={20} color="white" />
                       </span>
                       <span
                            onClick={() => router.push("https://github.com/JKomieter")}
                        className="cursor-pointer"
                       >
                            <BsGithub size={20} color="white" />
                       </span>
                    </div>
                </div>
            </div>
            <hr className="text-neutral-200 w-full my-7" />
            <span className="text-neutral-200 md:text-xs text-[9px] w-full flex flex-row items-center">
                <PiCopyrightFill size={12} color="white" />2023 
                <PiCopyrightFill size={12} color="white" /> 2023 
                <span onClick={() => router.push("https://j-kportfolio-rho3.vercel.app/")} className="underline cursor-pointer ">  Joel Adjetey Komieter</span>. All Rights Reserved.</span>
        </div>
    )
}

export default Footer